import { useEffect, useState } from "react";

export function ManagementHeroSection() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative flex min-h-160 min-w-screen items-center justify-center overflow-hidden bg-primary px-6 py-25 lg:min-h-230 lg:px-22">
      <img
        src="https://res.cloudinary.com/dhjorpzhh/image/upload/v1774417280/dsc08718-copy1763215780_cvodhq.jpg"
        alt="Persija management background"
        className={
          isLoaded
            ? "absolute inset-0 h-full w-full scale-115 object-cover object-center blur-sm transition-all duration-4500"
            : "absolute inset-0 h-full w-full scale-105 object-cover object-center blur-sm transition-all duration-4500"
        }
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex w-full flex-col items-center justify-center gap-8 text-background lg:flex-row lg:gap-16">
        <div className="flex w-full max-w-md items-center justify-center overflow-hidden">
          <img
            src="https://res.cloudinary.com/dhjorpzhh/image/upload/v1774395950/logo_persija_s9bx8v.webp"
            alt="Persija Jakarta logo"
            className="w-50 drop-shadow-2xl lg:w-72"
          />
        </div>

        <div className="flex w-full max-w-2xl flex-col items-center gap-3 p-4 text-center drop-shadow-2xl lg:items-start lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-background/70">
            Behind the Club
          </p>

          <h1 className="text-[42px] font-bold uppercase leading-none text-white lg:text-[56px]">
            Management
          </h1>

          <p className="text-[17px] leading-relaxed text-background/90 lg:text-[18px]">
            Strong management is what keeps a club moving with direction beyond
            the pitch. Behind every season, there are important decisions that
            shape the future, from contract renewals and squad planning to
            scouting, recruitment, operations, and long-term development. It is
            the work behind the scenes that helps maintain stability, protect
            standards, and build a team capable of competing at the highest
            level.
          </p>
        </div>
      </div>
    </section>
  );
}
