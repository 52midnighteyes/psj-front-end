import { SponsorsSection } from "../home/sections/sponsors/sponsors.section";
import { ManagementHeroSection } from "./hero/management-hero.section";
import { StaffSection } from "./staff/staff.section";
import { Seo } from "@/components/seo.comp";

export function ManagementPage() {
  return (
    <>
      <Seo
        title="Management"
        description="Meet the Persija Jakarta management and staff behind the club's operations, structure, and long-term direction."
        path="/management"
        keywords={[
          "Persija management",
          "Persija staff",
          "club operations",
          "Jakarta football management",
        ]}
      />
      <ManagementHeroSection />
      <SponsorsSection color="secondary" />
      <StaffSection />
    </>
  );
}
