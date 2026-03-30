import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { optimizeCloudinaryImage } from "@/lib/cloudinary";

export function PersijaAcademySection() {
  const data = {
    title: "Persija Academy: The First Piece of the Pro Journey",
    content:
      "We build a structured development environment where young players are shaped through coaching quality, discipline, education, and character. With a clear long-term vision, we prepare them to become future professionals capable of representing Persija and contributing to the national team.",
    image:
      "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774241407/whatsapp-image-2025-07-03-at-1546001751559502_ma2smp.jpg",
  };
  return (
    <section className="relative min-w-screen p-8 lg:px-22 min-h-200 items-center overflow-hidden bg-secondary flex text-center justify-center ">
      <img
        src={optimizeCloudinaryImage(
          "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774247340/1854faaa-ed45-4a79-a0a4-42e6d3d70c76_mgqtuk.jpg",
          { width: 1600, height: 1200, gravity: "auto" },
        )}
        className="absolute inset-0 h-full w-full opacity-26 object-bottom object-cover z-0 rotate-180"
      />
      <div className="w-full h-full flex flex-col gap-4 lg:gap-12 relative z-10 justify-center items-center lg:flex-row">
        <div className="relative z-0 max-w-180 lg:max-w-1/2">
          <img
            src={optimizeCloudinaryImage(data.image, {
              width: 960,
              height: 1200,
              gravity: "auto",
            })}
            alt="persija academy"
            className="object-cover object-center w-full h-full drop-shadow-2xl rounded-2xl"
          />
        </div>

        <div className="relative z-10 flex flex-col gap-2 lg:max-w-1/2 lg:text-left ">
          <h1 className="uppercase font-bold text-primary text-[36px]">
            {data.title}
          </h1>
          <p className="leading-6 mb-6">{data.content}</p>
          <Link to="/academy" className="w-full ">
            <Button className="w-full h-9 hover:scale-105 transition-all duration-300 hover:drop-shadow-2xl font-semibold ">
              Discover More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
