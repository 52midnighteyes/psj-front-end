import { AppDownload } from "./sections/application-download/appDownload.section";
import { OverviewSection } from "./sections/company-overview/overview.section";
import HeroSection from "./sections/hero/hero.sections";
import { NextMatchSection } from "./sections/next-match/nextMatc.section";
import { PersijaAcademySection } from "./sections/persija-academy/persija-academy.section";
import { SponsorsSection } from "./sections/sponsors/sponsors.section";
import { ShopSection } from "./shop/shop.section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NextMatchSection />
      <OverviewSection />
      <SponsorsSection />
      <PersijaAcademySection />
      <AppDownload />
      <ShopSection />
    </>
  );
}
