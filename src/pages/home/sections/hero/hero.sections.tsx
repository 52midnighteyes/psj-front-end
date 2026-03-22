import {
  takeFiveBlogs,
  type IBlogListItem,
} from "@/api/blog/takeFiveBlogs.api";

import { useEffect, useState } from "react";
import { MobileNewsCarousel } from "./components/MobileNewsCarousel.props";
import { Pagination } from "@/components/ui/pagination";
import { Link } from "react-router";

export default function HeroSection() {
  const [counter, setCounter] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [blogs, setBlogs] = useState<IBlogListItem[]>([]);

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

  useEffect(() => {
    if (blogs.length === 0) return;

    setIsLoaded(false);

    let loadedCount = 0;

    blogs.forEach((src) => {
      const img = new Image();
      img.src = src.image;
      img.onload = () => {
        loadedCount += 1;

        if (loadedCount === blogs.length) {
          setIsLoaded(true);
        }
      };
    });
  }, [blogs]);

  useEffect(() => {
    if (!isLoaded || blogs.length === 0) return;

    const interval = setInterval(() => {
      setCounter((prev) => (prev + 1) % blogs.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isLoaded, counter, blogs.length]);

  return (
    <section
      className="relative bg-cover bg-no-repeat bg-top flex min-h-160 min-w-full flex-col lg:px-22 items-center justify-center bg-primary lg:min-h-230 p-6"
      style={{
        backgroundImage: isLoaded ? `url('${activeBlog.image}')` : "none",
      }}
    >
      {/* gradasi hitam transparan */}
      <div className="absolute z-0 items-start inset-0 bg-[url(grad2.png)] opacity-60 bg-cover bg-bottom"></div>

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
              <div className="relative aspect-square flex items-center">
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

      <MobileNewsCarousel blogs={blogs} />
    </section>
  );
}
