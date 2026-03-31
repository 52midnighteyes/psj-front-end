import { AlumniSection } from "./sections/alumni/alumni.section";
import { BenefitSection } from "./sections/benefit/benefit.section";
import { HeroAcademy } from "./sections/hero/hero-academy.section";
import { SloganSection } from "./sections/slogan/slogan.section";
import { Seo } from "@/components/seo.comp";

export function AcademyPage() {
  return (
    <>
      <Seo
        title="Academy"
        description="Discover Persija Academy, its player development pathway, featured programs, and alumni shaping the future of Persija Jakarta."
        path="/academy"
        keywords={[
          "Persija Academy",
          "football academy Jakarta",
          "youth development Persija",
          "Persija alumni",
        ]}
      />
      <HeroAcademy />
      <SloganSection color="primary" />
      <BenefitSection />
      <AlumniSection />
    </>
  );
}
