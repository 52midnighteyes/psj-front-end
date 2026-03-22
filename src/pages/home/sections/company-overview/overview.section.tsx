export function OverviewSection() {
  const companyOverviewData = [
    {
      title: "Beyond Football",
      content:
        "We are more than a football club. We carry history, belief, and identity that have grown across generations. More than competing on the pitch, we represent a presence deeply rooted in Indonesian football, inspiring pride, strengthening communities, and continuing to define what Persija means to so many people.",
      image:
        "https://res.cloudinary.com/dhjorpzhh/image/upload/v1773268782/dsc00865-copy1767172478_1_vdkh9p.jpg",
    },
    {
      title: "Youth Development",
      content:
        "Persija has produced many young talents who have grown into important parts of the game, and we remain fully committed to continuing that path. Through structured development and long-term vision, we focus on nurturing the next generation with the quality, character, discipline, and mentality needed to carry this club forward.",
      image:
        "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774177418/whatsapp-image-2024-10-20-at-1257061729408157_xevrkj.jpg",
    },
    {
      title: "Pride & Identity",
      content:
        "Persija is a passion that lives far beyond the game. It becomes one identity shared by thousands of people, united by the same pride, loyalty, and love. Across different backgrounds and generations, Persija brings us together and turns that connection into something greater than football itself.",
      image:
        "https://res.cloudinary.com/dhjorpzhh/image/upload/v1774177383/dsc097001724294619_km5gjp.jpg",
    },
  ];

  return (
    <section className="relative min-w-full p-8 lg:px-22 min-h-220 items-start bg-secondary flex text-center justify-center">
      {/* <img
        src="https://res.cloudinary.com/dhjorpzhh/image/upload/v1774187413/db1084e5-e807-44aa-a085-4d79cec7efda_kdqfg9.jpg"
        className="absolute inset-0 h-full w-full opacity-10 object-cover z-0"
      /> */}

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row justify-between ">
        <div className="flex flex-col gap-3 w-full text-left lg:max-w-1/2">
          <h1 className="text-[24px] text-left font-semibold opacity-65">
            PERSIJA JAKARTA
          </h1>
          <p className="text-[35px] text-primary font-semibold">
            We are more than a club—
            <span className="text-foreground font-normal text-">
              we represent ambition, legacy, identity, and a passion that lives
              far beyond the game.
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full text-white lg:max-w-1/2">
          {companyOverviewData.map((a, i) => (
            <div
              className="flex flex-col bg-primary p-6 gap-4 text-backgroun rounded-2xl items-center lg:min-h-70 lg:flex-row"
              key={i}
            >
              <div className=" w-full h-full lg:max-w-2/5 overflow-hidden rounded-2xl ">
                <img
                  src={a.image}
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
