import {
  takeFiveBlogs,
  type IBlogListItem,
} from "@/api/blog/takeFiveBlogs.api";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function FeaturedBlogSection() {
  const [blog, setBlog] = useState<IBlogListItem | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getBlog = async () => {
      const response = await takeFiveBlogs();

      console.log(response?.data.data[0], "ini liat woy");
      if (!response) {
        setIsError(true);
        return;
      }
      setBlog(response.data.data[0]);
      setIsLoaded(true);
    };

    getBlog();
  }, []);

  if (isError || !isLoaded)
    return (
      <div className="relative bg-cover bg-no-repeat bg-top flex min-h-160 min-w-screen flex-col lg:px-22 items-center justify-center bg-[url('/13.jpg')] lg:min-h-230 p-6"></div>
    );

  return (
    <section
      className="relative bg-cover bg-no-repeat bg-top flex min-h-160 min-w-screen flex-col lg:px-22 items-center justify-center bg-primary lg:min-h-230 p-6"
      style={{
        backgroundImage: `url('${blog?.image}')`,
      }}
    >
      <div className="absolute inset-0 bg-black/45" />
      <div>
        <div className="lg:flex flex-col gap-6 absolute bottom-8 w-full  lg:bottom-1/6 items-start text-background left-4 flex-wrap lg:left-22 z-10 lg:min-w-1/5 lg:max-w-4/6 p-4 text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-background/70">
            Latest News{" "}
          </p>
          <Link to={`/blog/${blog?.slug}`}>
            <p className="lg:text-[60px] text-[24px] lg:leading-16 font-bold drop-shadow-2xl lg:line-clamp-3">
              {blog?.title}
            </p>
          </Link>
          <p className="text-[20px] font-semibold [text-shadow:0_1px_0_rgb(0_0_0)] ">
            {blog?.createdAt
              ? new Date(blog.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              : null}
          </p>
        </div>
      </div>
    </section>
  );
}
