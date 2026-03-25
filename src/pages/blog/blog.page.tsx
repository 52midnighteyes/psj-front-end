import { getBlogBySlug, type IBlog } from "@/api/blog/getBlogBySlug.api";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import {
  takeFiveBlogs,
  type IBlogListItem,
} from "@/api/blog/takeFiveBlogs.api";
import { Skeleton } from "@/components/ui/skeleton";
import { MobileNewsCarousel } from "../home/sections/hero/components/MobileNewsCarousel.props";

export function BlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [error, setError] = useState(false);
  const [blogs, setBlogs] = useState<IBlogListItem[]>([]);
  const [latestLoaded, setLatestLoaded] = useState(false);

  useEffect(() => {
    const getLatestBlog = async () => {
      const response = await takeFiveBlogs();
      if (!response) return;

      setBlogs(response.data.data);
      setLatestLoaded(true);
    };

    getLatestBlog();
  }, [slug]);

  useEffect(() => {
    if (!slug) return;

    const getBlog = async () => {
      try {
        const response = await getBlogBySlug(slug);
        console.log(response);
        if (!response) {
          setError(true);
          return;
        }

        setBlog(response.data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
    getBlog();
  }, [slug]);

  if (error) return <section></section>;
  if (!blog)
    return (
      <section className="min-w-screen min-h-screen flex flex-col items-center justify-center bg-secondary">
        <div className="flex w-full max-w-xs flex-col gap-2">
          <Skeleton className="bg-primary/80 h-4 w-full" />
          <Skeleton className="bg-primary/80 h-4 w-full" />
          <Skeleton className="bg-primary/80 h-4 w-3/4" />
        </div>
      </section>
    );

  return (
    <section className="flex min-h-screen bg-secondary flex-col">
      <div className="relative md:px-22 lg:py-12 p-8 items-end justify-center lg:justify-start flex w-full shrink-0 lg:min-h-150 h-full min-h-100 ">
        <div className="absolute z-1 inset-0 bg-[url(/grad2.png)] opacity-60 bg-cover bg-bottom"></div>

        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 z-0 h-full w-full object-top object-cover"
        />

        <p className="z-10 h-fit lg:max-w-2/4 relative text-[24px] lg:text-[40px] uppercase font-semibold text-background">
          {blog.title}
          <div className="flex w-fit py-1 text-[9px] lg:text-[12px] font-semibold text-gray-300 uppercase gap-2">
            <p className="flex">author: {blog.author}</p>
            {blog.updatedAt ? null : (
              <p className="flex">
                "published:"{" "}
                {new Date(blog.createdAt).toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            )}

            <p>|</p>
            {blog.updatedAt ? (
              <p className="flex">
                updated at:{" "}
                {new Date(blog.updatedAt).toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            ) : null}
          </div>
        </p>
      </div>

      <div className="relative min-h-0 justify-between md:px-22 lg:pr-10 p-6 gap-22 flex flex-col lg:flex-row">
        <p className="w-full lg:max-w-5/7 whitespace-pre-wrap">
          <p className="text-[10px] mb-4 text-gray-500">
            CATEGORY: {blog.category}
          </p>
          {blog.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </p>

        {latestLoaded ? (
          <div className="w-full hidden lg:flex flex-col gap-2 max-w-2/9">
            <p className="bg-primary drop-shadow-2xl justify-center flex font-bold p-2 text-background text-[16px]">
              LATEST NEWS
            </p>
            <div className="flex flex-col gap-3 ">
              {blogs.map((a, i) => (
                <Link to={`/blog/${a.slug}`}>
                  <div className="w-full gap-4 min-h-25 flex items-center bg-secondary hover:bg-white hover:scale-105 transition-all duration-300 drop-shadow-2xl">
                    <div className="h-25 min-w-4/10 aspect-square overflow-hidden ">
                      <img
                        src={a.image}
                        alt=""
                        className="scale-105 object-cover h-25"
                      />
                    </div>

                    <div className="flex flex-col gap-1 p-2">
                      <p className="text-[12px] font-semibold">{a.title}</p>
                      <p className="text-[8px] text-primary font-medium uppercase">
                        {new Date(a.createdAt).toLocaleString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="lg:hidden overflow-visible mb-8">
        <MobileNewsCarousel blogs={blogs} />
      </div>
    </section>
  );
}
