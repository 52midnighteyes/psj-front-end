import { useEffect, useState } from "react";
import { optimizeCloudinaryImage } from "@/lib/cloudinary";

export function HeroAboutUsSection() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative flex min-h-160 min-w-screen items-center justify-center overflow-hidden bg-primary px-6 py-22 lg:min-h-230 lg:px-22">
      <img
        src={optimizeCloudinaryImage(
          "https://res.cloudinary.com/dhjorpzhh/image/upload/v1773949543/dsc05368-11772514035_vv5cus.jpg",
          { width: 1920, height: 1080, gravity: "auto" },
        )}
        alt="Persija Jakarta background"
        className={
          isLoaded
            ? "absolute inset-0 z-0 h-full w-full scale-[1.3] object-cover object-top blur-sm transition-all duration-4500 ease-out"
            : "absolute inset-0 z-0 h-full w-full scale-[1.1] object-cover object-top blur-sm transition-all duration-4500 ease-out"
        }
      />

      <div className="absolute inset-0 z-0 bg-black/25" />

      <div className="relative z-20 flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20">
        <div className="flex w-full justify-center lg:max-w-[28%]">
          <img
            src={optimizeCloudinaryImage(
              "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774395950/logo_persija_s9bx8v.webp",
              { width: 420, crop: "limit" },
            )}
            alt="Persija Jakarta logo"
            className="w-40 select-none drop-shadow-2xl lg:w-full lg:max-w-xs"
          />
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-3 p-4 text-center backdrop-blur-md lg:max-w-1/2 lg:items-start lg:justify-start lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-background/70">
            About Persija
          </p>

          <h1 className="text-[42px] font-bold text-white lg:text-[50px]">
            PERSIJA JAKARTA
          </h1>

          <p className="text-[18px] leading-relaxed text-background/90">
            We are more than a club. Persija Jakarta is a symbol of pride,
            identity, and belonging that lives far beyond the pitch. We carry
            the spirit of a city, the passion of generations, and a legacy that
            continues to shape Indonesian football. What we represent is bigger
            than results. We stand for loyalty, resilience, ambition, and unity.
            In every match, every challenge, and every step forward, we carry
            the meaning behind the badge and the pride of Jakarta. We do not
            simply play the game. We represent a culture, a community, and a
            purpose that will always be greater than football itself.
          </p>
        </div>
      </div>
    </section>
  );
}
