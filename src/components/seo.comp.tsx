import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  robots?: string;
  keywords?: string[];
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const DEFAULT_SITE_NAME = "Persija Jakarta";
const DEFAULT_BASE_URL = "https://persija-jakarta.com";

function resolveSiteUrl() {
  const envUrl = import.meta.env.VITE_SITE_URL;

  if (envUrl && typeof envUrl === "string") {
    return envUrl.replace(/\/$/, "");
  }

  if (typeof window !== "undefined" && window.location.origin) {
    return window.location.origin.replace(/\/$/, "");
  }

  return DEFAULT_BASE_URL;
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

export function Seo({
  title,
  description,
  path = "/",
  image,
  type = "website",
  robots = "index, follow",
  keywords,
  structuredData,
}: SeoProps) {
  useEffect(() => {
    const siteUrl = resolveSiteUrl();
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    const canonicalUrl = `${siteUrl}${normalizedPath}`;
    const fullTitle = `${title} | ${DEFAULT_SITE_NAME}`;

    document.title = fullTitle;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: robots,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: type,
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: DEFAULT_SITE_NAME,
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: fullTitle,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: image ? "summary_large_image" : "summary",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: fullTitle,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });

    if (keywords?.length) {
      upsertMeta('meta[name="keywords"]', {
        name: "keywords",
        content: keywords.join(", "),
      });
    }

    if (image) {
      upsertMeta('meta[property="og:image"]', {
        property: "og:image",
        content: image,
      });
      upsertMeta('meta[name="twitter:image"]', {
        name: "twitter:image",
        content: image,
      });
    }

    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });

    const existingStructuredData = document.head.querySelector(
      'script[data-seo="structured-data"]',
    );

    if (existingStructuredData) {
      existingStructuredData.remove();
    }

    if (structuredData) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seo = "structured-data";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [description, image, keywords, path, robots, structuredData, title, type]);

  return null;
}
