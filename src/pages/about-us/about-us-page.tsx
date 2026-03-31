import { SponsorsSection } from "../home/sections/sponsors/sponsors.section";
import { HeroAboutUsSection } from "./sections/hero/hero-about-us.section";
import { PlayerSection } from "./sections/players/players.section";
import { Seo } from "@/components/seo.comp";

export function AboutUsPage() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Persija Jakarta, the club identity, history, and squad profile that shape one of Indonesia's most iconic football teams."
        path="/about-us"
        keywords={[
          "About Persija Jakarta",
          "Persija squad",
          "Persija players",
          "Indonesian football club",
        ]}
      />
      <HeroAboutUsSection />
      <SponsorsSection color="background" />
      <PlayerSection />
    </>
  );
}
