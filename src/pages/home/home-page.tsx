import { AppDownload } from "./sections/application-download/appDownload.section";
import { OverviewSection } from "./sections/company-overview/overview.section";
import HeroSection from "./sections/hero/hero.sections";
import { NextMatchSection } from "./sections/next-match/nextMatc.section";
import { PersijaAcademySection } from "./sections/persija-academy/persija-academy.section";
import { ShopSection } from "./sections/shop/shop.section";
import { SponsorsSection } from "./sections/sponsors/sponsors.section";
import { Seo } from "@/components/seo.comp";
import { optimizeCloudinaryImage } from "@/lib/cloudinary";

export default function HomePage() {
  return (
    <>
      <Seo
        title="Home"
        description="Explore Persija Jakarta club stories, latest news, academy development, and team identity in one official destination."
        path="/"
        image={optimizeCloudinaryImage(
          "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774396224/logo_persija_no_star_z6qj17.webp",
          { width: 1200, height: 630, gravity: "auto" },
        )}
        keywords={[
          "Persija Jakarta",
          "Persija news",
          "Persija academy",
          "Jakarta football club",
        ]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "SportsOrganization",
          name: "Persija Jakarta",
          url: "/",
          sport: "Football",
        }}
      />
      <HeroSection />
      <NextMatchSection />
      <OverviewSection />
      <SponsorsSection color={"secondary"} />
      <PersijaAcademySection />
      <AppDownload />
      <ShopSection />
    </>
  );
}
