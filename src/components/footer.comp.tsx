import { Link } from "react-router";

const links = [
  { name: "ABOUT US", link: "/about-us" },
  { name: "ACADEMY", link: "/academy" },
  { name: "MANAGEMENT", link: "/management" },
  { name: "BLOG", link: "/blogs" },
];

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="min-w-screen relative bottom-0 right-0 bg-foreground text-background">
      <div className="mx-auto flex w-full pt-10 flex-col justify-between gap-10 p-6 lg:flex-row lg:px-22">
        <div className="flex max-w-md flex-col items-center gap-4 lg:items-start">
          <img
            src="/persija-dummy.png"
            alt="Persija Jakarta"
            className="h-16 w-16 object-cover"
          />

          <div className="flex flex-col items-center justify-center space-y-2 lg:items-start">
            <h2 className="text-2xl font-semibold tracking-tight">
              PERSIJA JAKARTA
            </h2>
            <p className="text-center text-sm leading-relaxed text-background/70 lg:text-left">
              We are more than a club—we represent ambition, legacy, identity,
              and a passion that lives far beyond the game.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-x-12 gap-y-3 text-sm lg:flex-col lg:text-right">
          {links.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="font-semibold transition-opacity duration-200 hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t-2 border-secondary/50 p-6 lg:px-22">
        <p className="text-center text-xs text-background/60">
          © {year}{" "}
          <span className="font-semibold text-primary">Persija Jakarta.</span>{" "}
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
