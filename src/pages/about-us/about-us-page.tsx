import { SponsorsSection } from "../home/sections/sponsors/sponsors.section";
import { HeroAboutUsSection } from "./sections/hero/hero-about-us.section";
import { PlayerSection } from "./sections/players/players.section";

export function AboutUsPage() {
  return (
    <>
      <HeroAboutUsSection />
      <SponsorsSection color="background" />
      <PlayerSection />
    </>
  );
}
