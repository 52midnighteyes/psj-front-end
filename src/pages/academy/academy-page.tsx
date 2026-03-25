import { AlumniSection } from "./sections/alumni/alumni.section";
import { BenefitSection } from "./sections/benefit/benefit.section";
import { HeroAcademy } from "./sections/hero/hero-academy.section";
import { SloganSection } from "./sections/slogan/slogan.section";

export function AcademyPage() {
  return (
    <>
      <HeroAcademy />
      <SloganSection color="primary" />
      <BenefitSection />
      <AlumniSection />
    </>
  );
}
