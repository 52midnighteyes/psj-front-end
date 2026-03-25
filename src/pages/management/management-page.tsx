import { SponsorsSection } from "../home/sections/sponsors/sponsors.section";
import { ManagementHeroSection } from "./hero/management-hero.section";
import { StaffSection } from "./staff/staff.section";

export function ManagementPage() {
  return (
    <>
      <ManagementHeroSection />
      <SponsorsSection color="secondary" />
      <StaffSection />
    </>
  );
}
