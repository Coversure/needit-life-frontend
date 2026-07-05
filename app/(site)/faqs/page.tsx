import type { Metadata } from "next";
import { FaqList } from "@/components/ui/faq-list";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about NeedIt Life eligibility, waiting periods, premiums, claims and applications.",
};

const faqs = [
  {
    category: "Eligibility",
    question: "Who can apply for NeedIt Life?",
    answer:
      "The approved product rules set the age, residency and other eligibility requirements. This prototype assumes the product is intended for eligible New Zealand residents, but the exact limits must be confirmed against current documents.",
  },
  {
    category: "Eligibility",
    question: "Can I apply with a pre-existing condition?",
    answer:
      "You may still be able to apply. A waiting period or exclusion can apply to claims connected with a condition that existed before cover began.",
  },
  {
    category: "Applications",
    question: "What if I have previously been declined?",
    answer:
      "A previous decline does not necessarily prevent you from enquiring. NeedIt Life uses a different acceptance approach from fully underwritten life insurance.",
  },
  {
    category: "Applications",
    question: "Will I need a medical examination?",
    answer:
      "The current NeedIt Life positioning describes a simplified application without traditional medical underwriting. The final wording should be checked against the current application process.",
  },
  {
    category: "Cover",
    question: "How much cover is available?",
    answer:
      "Current marketing information describes individual cover options from $50,000 up to $300,000. Joint-cover limits and availability should be confirmed in the approved product material.",
  },
  {
    category: "Cover",
    question: "What does terminal illness cover mean?",
    answer:
      "A terminal illness benefit may be payable when the insured person meets the policy definition and all claim requirements. The precise medical definition is in the policy wording.",
  },
  {
    category: "Waiting periods",
    question: "How does the pre-existing condition period work?",
    answer:
      "Claims connected with a condition that existed before the policy started may be excluded during an initial period. Accidental death can be treated differently, depending on the policy.",
  },
  {
    category: "Premiums",
    question: "How is my premium calculated?",
    answer:
      "Premiums can depend on factors such as age, cover amount and product pricing. The team should provide the actual premium and explain how it may change over time.",
  },
  {
    category: "Claims",
    question: "How do I make a claim?",
    answer:
      "Contact the claims team as soon as practical. They can explain the forms, evidence and next steps. The Claims page contains the current contact details.",
  },
  // { category: "Existing policy", question: "Does the NeedIt Life rebrand change my existing policy?", answer: "The rebrand should not be described as changing contractual rights unless the legal documents say so. Existing customers should receive a formal explanation of the brand and legal entity relationship." },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently asked questions"
        title="The details people ask about most"
        description="Search NeedIt Life questions by topic and review the formal policy documents before making a decision."
      />
      <section className="section-space bg-soft-sage">
        <Container>
          <FaqList faqs={faqs} />
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
