import {
  takeFiveBlogs,
  type IBlogListItem,
} from "@/api/blog/takeFiveBlogs.api";

import { useEffect, useState } from "react";
import { MobileNewsCarousel } from "./components/MobileNewsCarousel.props";
import { Pagination } from "@/components/ui/pagination";
import { Link } from "react-router";
import { optimizeCloudinaryImage } from "@/lib/cloudinary";

function getHeroImageUrl(url: string) {
  return optimizeCloudinaryImage(url, {
    width: 1920,
    height: 1080,
    gravity: "auto",
  });
}

function preloadImage(url: string) {
  return new Promise<void>((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
  });
}

export default function HeroSection() {
  const [counter, setCounter] = useState<number>(0);
  const [blogs, setBlogs] = useState<IBlogListItem[]>([]);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [visibleImage, setVisibleImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await takeFiveBlogs();
        if (!response) return;
        setBlogs(response.data.data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlog();
  }, []);

  const activeBlog = blogs[counter];
  const activeImage = activeBlog ? getHeroImageUrl(activeBlog.image) : null;

  useEffect(() => {
    if (blogs.length === 0) return;

    const firstImage = getHeroImageUrl(blogs[0].image);
    let isCancelled = false;

    preloadImage(firstImage)
      .then(() => {
        if (isCancelled) return;

        setLoadedImages((prev) =>
          prev[firstImage] ? prev : { ...prev, [firstImage]: true },
        );
        setVisibleImage(firstImage);
      })
      .catch((error) => {
        console.error("Failed to preload first hero image:", error);
      });

    const timeoutId = window.setTimeout(() => {
      blogs.slice(1).forEach((blog) => {
        const imageUrl = getHeroImageUrl(blog.image);

        preloadImage(imageUrl)
          .then(() => {
            if (isCancelled) return;

            setLoadedImages((prev) =>
              prev[imageUrl] ? prev : { ...prev, [imageUrl]: true },
            );
          })
          .catch(() => {});
      });
    }, 250);

    return () => {
      isCancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [blogs]);

  useEffect(() => {
    if (!activeImage) return;

    if (loadedImages[activeImage]) {
      setVisibleImage(activeImage);
      return;
    }

    let isCancelled = false;

    preloadImage(activeImage)
      .then(() => {
        if (isCancelled) return;

        setLoadedImages((prev) =>
          prev[activeImage] ? prev : { ...prev, [activeImage]: true },
        );
        setVisibleImage(activeImage);
      })
      .catch(() => {});

    return () => {
      isCancelled = true;
    };
  }, [activeImage, loadedImages]);

  useEffect(() => {
    if (!visibleImage || blogs.length <= 1) return;

    const interval = setInterval(() => {
      setCounter((prev) => (prev + 1) % blogs.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [visibleImage, blogs.length]);

  return (
    <section className="relative flex min-h-160 min-w-screen flex-col items-center justify-center overflow-hidden bg-primary lg:min-h-230 lg:px-22 p-6">
      {visibleImage ? (
        <img
          key={visibleImage}
          src={visibleImage}
          alt={activeBlog?.title ?? "Latest Persija news"}
          fetchPriority={counter === 0 ? "high" : "auto"}
          loading="eager"
          decoding="async"
          className="absolute inset-0 z-0 h-full w-full object-cover object-top animate-in fade-in duration-500"
        />
      ) : null}

      <div className="absolute inset-0 z-0 bg-black/25" />
      {activeBlog && (
        <div className="lg:flex flex-col gap-6 absolute  bottom-1/6 items-start text-background hidden left-22 z-10 min-w-1/5 max-w-3/6 p-4 text-left">
          <Link to={`/blog/${activeBlog.slug}`}>
            <p className="text-[60px] leading-16 font-bold drop-shadow-2xl line-clamp-2">
              {activeBlog.title}
            </p>
          </Link>
          <p className="text-[20px] font-semibold [text-shadow:0_1px_0_rgb(0_0_0)] ">
            {new Date(activeBlog.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      )}

      <Pagination className="hidden lg:flex">
        <div className="absolute gap-2 bottom-20 text-background text-[20px]">
          <div className="flex gap-2">
            {blogs.map((_a, index) => (
              <div
                key={index}
                className="relative aspect-square flex items-center"
              >
                <div
                  className={
                    index === counter
                      ? "absolute opacity-70 inset-0 z-0 bg-primary "
                      : "opacity-0 "
                  }
                ></div>
                <button
                  type="button"
                  key={index + 1}
                  className="relative w-10 z-10"
                  onClick={() => setCounter(index)}
                >
                  {index + 1}
                </button>
              </div>
            ))}
          </div>
        </div>
      </Pagination>

      <div className="absolute bottom-10 left-0">
        <MobileNewsCarousel blogs={blogs} />
      </div>
    </section>
  );
}
