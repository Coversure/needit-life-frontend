import { BenefitStrip } from "@/components/sections/benefit-strip";
import { FinalCta } from "@/components/sections/final-cta";
import { HomeHero } from "@/components/sections/home-hero";
import { HowItWorks } from "@/components/sections/how-it-works";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <BenefitStrip />
      <HowItWorks />
      <FinalCta />
    </>
  );
}
