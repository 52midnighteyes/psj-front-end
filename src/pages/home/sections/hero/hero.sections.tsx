import Navbar from "@/components/navbar.comp";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const persijaNews = [
  {
    category: "Match Preview",
    title: "Persija Jakarta Prepare for Key Clash Against Rival Side",
    date: "March 12, 2026",
  },
  {
    category: "Transfer News",
    title: "Persija Jakarta Linked with Experienced Foreign Midfielder",
    date: "February 28, 2026",
  },
  {
    category: "Club Update",
    title: "Persija Announce New Training Program Ahead of Busy Schedule",
    date: "January 15, 2026",
  },
  {
    category: "Injury Report",
    title: "Persija Defender Ruled Out for Two Weeks After Training Knock",
    date: "March 3, 2026",
  },
];

const bgPictures: string[] = [
  "https://res.cloudinary.com/dhjorpzhh/image/upload/f_auto,q_auto,w_1600/v1773268783/14_iby6qa.jpg",
  "https://res.cloudinary.com/dhjorpzhh/image/upload/f_auto,q_auto,w_1600/v1773268782/img-7542-copy1763660729_r0kyy9.jpg",
  "https://res.cloudinary.com/dhjorpzhh/image/upload/f_auto,q_auto,w_1600/v1773268782/dsc00865-copy1767172478_1_vdkh9p.jpg",
  "https://res.cloudinary.com/dhjorpzhh/image/upload/f_auto,q_auto,w_1600/v1773268782/psj08549-copy1769275114_e2uyko.jpg",
  "https://res.cloudinary.com/dhjorpzhh/image/upload/f_auto,q_auto,w_1600/v1773268782/img-6351-copy1761954632_skqk0l.jpg",
];

const data = [];
export default function HeroSection() {
  const [counter, setCounter] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    let loadedCount = 0;

    bgPictures.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount += 1;

        if (loadedCount === bgPictures.length) {
          setIsLoaded(true);
        }
      };
    });
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const interval = setInterval(() => {
      setCounter((prev) => (prev + 1) % bgPictures.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isLoaded]);

  return (
    <section
      className="relative bg-cover bg-no-repeat bg-top flex min-h-160 w-full flex-col items-center justify-center bg-primary lg:min-h-210 p-6"
      style={{
        backgroundImage: isLoaded ? `url('${bgPictures[counter]}')` : "none",
      }}
    >
      <div className="absolute -z-10 inset-0 bg-[url(grad2.png)] opacity-60 bg-cover bg-bottom"></div>

      <div className="w-screen min-h-160 flex flex-col overflow-visible justify-end">
        <Carousel className="w-screen lg:hidden ">
          <CarouselContent className="-ml-3">
            {persijaNews.map((a, index) => (
              <CarouselItem
                key={index}
                className="pl-3 basis-1/3 min-h-59 min-w-91"
              >
                <Card className="h-full rounded-none">
                  <CardContent className="flex min-h-40 p-6 flex-col justify-between ">
                    <div className="space-y-2">
                      <p className="text-sm text-primary">{a.category}</p>
                      <h3 className="text-[28px] text-pri font-semibold leading-tight">
                        {a.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{a.date}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
