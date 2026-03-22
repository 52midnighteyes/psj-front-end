import { AppDownload } from "./sections/application-download/appDownload.section";
import { OverviewSection } from "./sections/company-overview/overview.section";
import HeroSection from "./sections/hero/hero.sections";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <AppDownload />
    </>
  );
}
