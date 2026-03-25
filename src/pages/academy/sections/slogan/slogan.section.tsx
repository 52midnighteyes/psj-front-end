const academyMarquee = [
  "Earn the Badge, Carry the Pride",
  "Where Pride Meets Purpose",
  "Built for Those Who Want More",
  "A Place for Future Persija",
  "Wear the Crest with Purpose",
  "Proud to Train the Persija Way",
  "For Those Ready to Represent",
  "More Than an Academy, A Standard",
  "Where Ambition Belongs",
  "The Pride Begins Here",
];

type SponsorsSectionProps = {
  color: "primary" | "secondary" | "foreground" | "background";
};

export function SloganSection({ color }: SponsorsSectionProps) {
  const duplicatedSponsors = [...academyMarquee, ...academyMarquee];

  const bgColorClass = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    foreground: "bg-foreground",
    background: "bg-background",
  };

  return (
    <section
      className={`${bgColorClass[color]} relative select-none min-h-12 overflow-hidden`}
    >
      <img
        src="https://res.cloudinary.com/dhjorpzhh/image/upload/v1774187413/db1084e5-e807-44aa-a085-4d79cec7efda_kdqfg9.jpg"
        className="absolute inset-0 h-full w-full opacity-10 object-cover z-0"
      />

      <ul className="flex min-w-full w-max items-center  text-[24px] uppercase py-6 animate-infinite-scroll">
        {duplicatedSponsors.map((a, index) => (
          <li
            key={`${a}-${index}`}
            className={
              index % 2 == 0
                ? "ml-15 shrink-0 flex "
                : "ml-15 shrink-0 flex text-background"
            }
          >
            <p className="mr-15  ">⚽︎</p>
            <p className="transition-transform hover:scale-105 duration-300 font-bold">
              {a}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
