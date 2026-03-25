import { useEffect, useState } from "react";

export function HeroAcademy() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative flex min-h-160 min-w-screen items-center justify-center overflow-hidden bg-primary px-6 py-25 lg:min-h-230 lg:px-22">
      <img
        src="https://res.cloudinary.com/dhjorpzhh/image/upload/v1774417993/Eyes_in_the_sky_%EF%B8%8F_Persija_kawli3.jpg"
        alt="Persija Academy background"
        className={
          isLoaded
            ? "absolute inset-0 h-full w-full scale-[1.2] object-cover object-top blur-sm transition-all duration-4500"
            : "absolute inset-0 h-full w-full scale-105 object-cover object-top blur-sm transition-all duration-4500"
        }
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-8 text-background lg:flex-row-reverse lg:gap-20">
        <div className="w-full overflow-hidden lg:max-w-1/2">
          <img
            src="https://res.cloudinary.com/dhjorpzhh/image/upload/v1774177418/whatsapp-image-2024-10-20-at-1257061729408157_xevrkj.jpg"
            alt="Persija Academy player"
            className="h-full w-full scale-105 object-cover drop-shadow-2xl top-0"
          />
        </div>

        <div className="flex w-full max-w-2xl flex-col items-center gap-3 p-4 text-center drop-shadow-2xl lg:max-w-1/2 lg:items-start lg:text-left backdrop-blur-md">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-background/70">
            Persija Development
          </p>

          <h1 className="text-[42px] font-bold leading-none text-white lg:text-[50px]">
            PERSIJA ACADEMY
          </h1>

          <p className="text-[18px] leading-relaxed text-background/90">
            We believe Persija Academy is where young players grow with clear
            purpose, proper guidance, and strong values. We create an
            environment that helps them develop technique, discipline,
            confidence, and a deeper understanding of the game through
            structured coaching and competitive learning. More than training for
            matches, we focus on building character and mentality that can carry
            them further in football and in life. Through Persija Academy, we
            offer a pathway that feels serious, trusted, and connected to the
            long-term future of Persija, preparing the next generation to grow
            with pride and responsibility.
          </p>
        </div>
      </div>
    </section>
  );
}
