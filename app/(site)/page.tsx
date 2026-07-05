import { BenefitStrip } from "@/components/sections/benefit-strip";
import { EligibilitySection } from "@/components/sections/eligibility-section";
import { FaqPreview } from "@/components/sections/faq-preview";
import { FinalCta } from "@/components/sections/final-cta";
import { HomeHero } from "@/components/sections/home-hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ResourcesPreview } from "@/components/sections/resources-preview";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <BenefitStrip />
      <HowItWorks />
      {/* <EligibilitySection /> */}
      {/* <FaqPreview /> */}
      {/* <ResourcesPreview /> */}
      <FinalCta />
    </>
  );
}
