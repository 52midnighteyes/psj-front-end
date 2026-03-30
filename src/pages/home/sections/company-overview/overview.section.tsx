import { optimizeCloudinaryImage } from "@/lib/cloudinary";

export function OverviewSection() {
  const companyOverviewData = [
    {
      title: "Beyond Football",
      content:
        "We are more than a football club. We carry legacy, identity, and pride shaped across generations. What we represent goes far beyond the pitch, living in the hearts of our people and holding a place that continues to matter deeply in Indonesian football.",
      image:
        "https://res.cloudinary.com/dhjorpzhh/image/upload/v1773268782/dsc00865-copy1767172478_1_vdkh9p.jpg",
    },
    {
      title: "Youth Development",
      content:
        "We believe the future of this club must be built with purpose. Through youth development, we nurture talent with discipline, character, and mentality, creating a pathway for the next generation to grow, compete, and carry our standards forward with pride.",
      image:
        "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774177418/whatsapp-image-2024-10-20-at-1257061729408157_xevrkj.jpg",
    },
    {
      title: "Pride & Identity",
      content:
        "We are united by more than football. We share an identity built on pride, loyalty, and belonging. Across generations and backgrounds, this club brings people together through a bond that lives beyond the game and becomes part of who we are.",
      image:
        "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774177383/dsc097001724294619_km5gjp.jpg",
    },
  ];

  return (
    <section className="relative pb-20 min-w-screen p-8 lg:px-22 min-h-220 items-start bg-primary flex text-center justify-center">
      <img
        src={optimizeCloudinaryImage(
          "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774187413/db1084e5-e807-44aa-a085-4d79cec7efda_kdqfg9.jpg",
          { width: 1600, height: 1200, gravity: "auto" },
        )}
        className="absolute inset-0 h-full w-full opacity-15 object-cover z-0"
      />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row justify-between ">
        <div className="flex flex-col gap-3 w-full text-left lg:max-w-1/2">
          <h1 className="text-[24px] text-left text-secondary font-semibold opacity-80">
            PERSIJA JAKARTA
          </h1>
          <p className="text-[35px] text-background font-semibold">
            We are more than a club—
            <span className=" text-secondary font-normal text-">
              we represent ambition, legacy, identity, and a passion that lives
              far beyond the game.
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full text-foreground lg:max-w-1/2">
          {companyOverviewData.map((a, i) => (
            <div
              className="flex flex-col bg-background p-6 gap-4 text-backgroun rounded-2xl items-cente transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_25px_rgba(0,0,0,0.15)] lg:min-h-70 lg:flex-row"
              key={i}
            >
              <div className=" w-full h-full lg:max-w-2/5 overflow-hidden rounded-2xl ">
                <img
                  src={optimizeCloudinaryImage(a.image, {
                    width: 720,
                    height: 720,
                    gravity: "auto",
                  })}
                  className="object-cover object-top h-full w-full"
                  alt={`image of ${a.title}`}
                />
              </div>
              <div className="flex items-center justify-center h-full flex-col lg:max-w-3/5">
                <h2 className="font-bold text-[24px]">{a.title}</h2>
                <p className="text-[16px] lg:px-8">{a.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
