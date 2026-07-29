import type { Metadata } from "next";

import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { FaqList } from "@/components/ui/faq-list";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Quick Life, including eligibility, guaranteed acceptance, cover amounts, premiums, waiting periods and exclusions.",
};

const faqs = [
  {
    category: "About Quick Life",
    question: "What is Quick Life?",
    answer:
      "Quick Life is an easy-acceptance life insurance product designed to make protecting your loved ones simple and affordable. Quick Life is underwritten and issued by Momentum Life Limited (NZBN 9429041981658, FSP472286) and is promoted and distributed by Coversure Financial Services Limited (NZBN 9429047688780, FSP722232) under the NeedIt Life brand.",
  },
  {
    category: "About Quick Life",
    question: "What is NeedIt Life?",
    answer:
      "NeedIt Life is a brand of Coversure Financial Services Limited, created to make purchasing life insurance quick, simple and accessible online for everyday New Zealanders.",
  },
  {
    category: "Cover",
    question: "How does Quick Life work?",
    answer:
      "Quick Life pays a one-off lump sum if the life insured passes away or is diagnosed with a terminal illness, as defined in the Policy Wording. Your family can use the payment in whatever way they need, including covering everyday living expenses, paying off debt, meeting funeral costs or helping maintain financial security during a difficult time.",
  },
  {
    category: "Eligibility",
    question: "Who can apply?",
    answer:
      "You may be eligible to apply if you are a New Zealand resident, are aged between 18 and 65 years, and have not been diagnosed with a terminal illness or been receiving palliative or hospice care when you apply.",
  },
  {
    category: "Eligibility",
    question: "Is acceptance guaranteed?",
    answer:
      "Yes. Quick Life offers guaranteed acceptance for eligible applicants. There are no medical examinations or medical underwriting required. Your eligibility is confirmed through a simple application process.",
  },
  {
    category: "Cover",
    question: "How much cover can I get?",
    answer:
      "You can choose cover from $50,000 up to $300,000 for each life insured. Joint policies are available with up to $500,000 in total cover.",
  },
  {
    category: "Cover",
    question: "Can I insure my partner?",
    answer:
      "Yes. Quick Life is available as either an individual policy or a joint policy for eligible applicants.",
  },
  {
    category: "Cover",
    question: "Does my cover increase over time?",
    answer:
      "Yes. Your cover automatically increases by 3% each year to help keep pace with inflation. You can choose to opt out of these annual increases.",
  },
  {
    category: "Cover",
    question: "How long does my cover last?",
    answer:
      "Quick Life provides lifetime cover, provided your premiums continue to be paid and your policy remains in force. From age 75, your policy also includes a complimentary $20,000 Lifetime Benefit. Premiums increase with age until age 75 and then remain level thereafter.",
  },
  {
    category: "Premiums",
    question: "How are my premiums calculated?",
    answer:
      "Your premium depends on your age, gender, smoking status and the amount of cover you choose.",
  },
  {
    category: "Premiums",
    question: "How can I pay my premiums?",
    answer:
      "You can pay your premiums fortnightly, monthly or annually. Payments can be made by Direct Debit or Credit Card.",
  },
  {
    category: "Waiting periods",
    question: "Are there any waiting periods?",
    answer:
      "Yes. A two-year waiting period applies to claims arising from suicide or intentional self-inflicted injury and pre-existing conditions. Please refer to the Policy Wording for the complete terms and details.",
  },
  {
    category: "Exclusions",
    question: "What isn’t covered?",
    answer:
      "Quick Life does not provide cover for claims resulting from suicide or intentional self-inflicted injury during the first two years, pre-existing conditions during the first two years, war or acts of terrorism, criminal activity, or drug or alcohol misuse unless medication has been prescribed and taken as directed. Please refer to the Policy Wording for the complete terms, conditions, exclusions and definitions.",
  },
  {
    category: "Financial advice",
    question: "Is this personalised financial advice?",
    answer:
      "No. The information provided on this website is general in nature and does not constitute personalised financial advice. It has been prepared without considering your individual objectives, financial situation or insurance needs. If you would like personalised financial advice before deciding whether Quick Life is right for you, you can request a referral to a Financial Adviser at Coversure Financial Services Limited.",
  },
  {
    category: "Policy documents",
    question: "Where can I read the Policy Wording?",
    answer:
      "The Quick Life Policy Wording contains the full benefits, terms, conditions, exclusions, waiting periods and definitions that apply to the policy. We recommend reading the Policy Wording carefully before applying so you understand what is and isn’t covered.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently asked questions"
        title="The details people ask about most"
        description="Find answers to common questions about Quick Life, including eligibility, cover, premiums, waiting periods and exclusions."
      />

      <section className="section-space bg-warm-white">
        <Container>
          <FaqList faqs={faqs} />
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
