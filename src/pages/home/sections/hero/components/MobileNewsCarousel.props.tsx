import type { IBlogListItem } from "@/api/blog/takeFiveBlogs.api";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Link } from "react-router";

interface MobileNewsCarouselProps {
  blogs: IBlogListItem[];
}

export function MobileNewsCarousel({ blogs }: MobileNewsCarouselProps) {
  return (
    <div className="w-screen min-h-160 flex flex-col overflow-visible justify-end">
      <Carousel className="w-screen lg:hidden ">
        <CarouselContent className="-ml-3">
          {blogs.map((a) => (
            <CarouselItem
              key={a.slug}
              className="pl-3 basis-1/3 min-h-59 min-w-91"
            >
              <Link to={`/blog/${a.slug}`}>
                <Card className="h-full rounded-none">
                  <CardContent className="flex h-full min-h-40 p-6 flex-col justify-between ">
                    <p className="text-sm text-primary">{a.category}</p>
                    <h3 className="text-[28px] text-pri font-semibold leading-tight line-clamp-2">
                      {a.title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {new Date(a.createdAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
