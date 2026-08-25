import type { Metadata } from "next";

import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { FaqList } from "@/components/ui/faq-list";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Quick Life, including eligibility, guaranteed acceptance, cover amounts, premiums, waiting periods, exclusions and claims.",
};

const faqs = [
  {
    category: "About Quick Life",
    question: "What is Quick Life?",
    answer:
      "Quick Life is a life insurance product designed to provide simple, affordable life cover. It pays a lump sum if the life insured passes away or is diagnosed with a terminal illness, subject to the terms and conditions of the policy. Quick Life is issued and underwritten by Momentum Life Limited (FSP472286), while NeedIt Life provides the customer-facing distribution of Quick Life Insurance.",
  },
  {
    category: "About Quick Life",
    question: "What is NeedIt Life?",
    answer:
      "NeedIt Life is operated by Coversure Financial Services Limited (FSP722232), a licensed Financial Advice Provider. Coversure distributes Quick Life Insurance through the NeedIt Life brand, while Momentum Life Limited provides and underwrites the insurance cover.",
  },
  {
    category: "Cover",
    question: "How does Quick Life work?",
    answer:
      "Quick Life pays a lump sum if the life insured passes away or is diagnosed with a terminal illness, provided the claim meets the terms and conditions of the policy. The benefit is paid to the policy owner or nominated beneficiary, depending on the circumstances.",
  },
  {
    category: "Eligibility",
    question: "Who can apply?",
    answer:
      "Quick Life is available to eligible New Zealand residents aged 18 to 65. Under the Policy Wording, a New Zealander includes someone who permanently resides in New Zealand and holds New Zealand or Australian citizenship, a New Zealand permanent resident visa, or a temporary work visa and has been in New Zealand for at least six months.",
  },
  {
    category: "Eligibility",
    question: "Is acceptance guaranteed?",
    answer:
      "Yes. If you meet the eligibility requirements and are aged between 18 and 65, acceptance is guaranteed. There are no detailed health questions or medical examinations required. However, waiting periods and exclusions still apply, including conditions relating to pre-existing medical conditions.",
  },
  {
    category: "Cover",
    question: "How much cover can I get?",
    answer:
      "You can choose a benefit amount between $50,000 and $300,000 for each life insured. Automatic annual increases may increase the benefit beyond this amount over time, up to a maximum of $500,000 for each life insured.",
  },
  {
    category: "Cover",
    question: "Can I insure my partner?",
    answer:
      "Yes. Quick Life can cover you individually or you and your eligible partner under the same policy. A $50 annual partner discount applies when your partner is added to the same policy.",
  },
  {
    category: "Cover",
    question: "Does my cover increase over time?",
    answer:
      "Yes. Your life benefit automatically increases by 3% on each policy anniversary to help your cover keep pace with inflation. Automatic increases continue until the life insured turns 75 or reaches the maximum benefit of $500,000, whichever happens first. You can opt out of an increase for a particular year without losing eligibility for future increases.",
  },
  {
    category: "Cover",
    question: "How long does my cover last?",
    answer:
      "Quick Life can provide cover for life, provided the policy remains active and premiums are kept up to date. Premiums generally increase as you get older until age 75. Once you turn 75, your premiums are fixed for the remaining life of the policy.",
  },
  {
    category: "Cover",
    question: "What happens to my cover when I turn 75?",
    answer:
      "Once you turn 75, $20,000 of your benefit becomes free. You have the option to elect a free $20,000 funeral benefit or continue your Quick Life cover with the free $20,000 component included. Your premiums are also fixed from age 75.",
  },
  {
    category: "Cover",
    question: "Am I covered overseas?",
    answer:
      "Quick Life provides worldwide cover, 24 hours a day, 7 days a week. However, you should tell Momentum Life if you plan to be outside New Zealand for more than six months or if you will be working overseas for any period, as specific conditions may apply.",
  },
  {
    category: "Premiums",
    question: "How are my premiums calculated?",
    answer:
      "Your premium is based on factors including the life insured's age, gender, smoking status and benefit amount. Premiums generally increase each year as you get older and may also increase when your benefit increases by 3% each year. Once you turn 75, your premiums are fixed.",
  },
  {
    category: "Premiums",
    question: "How often can I pay my premiums?",
    answer:
      "You can choose to pay your premiums fortnightly, monthly or annually. You can also ask to change your payment frequency.",
  },
  {
    category: "Waiting periods",
    question: "Are there any waiting periods?",
    answer:
      "Yes. Quick Life operates with two stages of cover. During the first two years, you are covered for accidental death and new medical conditions that arise after your policy starts. Claims relating to pre-existing medical conditions, suicide or intentional self-harm are not covered during this period. After two years, cover can include pre-existing conditions, although some specific conditions and other policy exclusions may still apply.",
  },
  {
    category: "Waiting periods",
    question:
      "What happens if I die from a pre-existing condition within the first two years?",
    answer:
      "If the life insured passes away from a pre-existing medical condition within the first 24 months and no benefit is payable, the premiums paid will be refunded, subject to the Policy Wording.",
  },
  {
    category: "Exclusions",
    question: "What isn't covered?",
    answer:
      "Some claims are excluded. During the first two years, this includes claims relating to suicide, intentional self-harm and pre-existing medical conditions. Other exclusions can apply at any time, including claims caused by criminal or illegal activity, war or war-like activity, terrorism, certain dangerous occupations or pastimes, and the effects of alcohol or drugs unless a prescribed drug was taken exactly as instructed. Please read the Policy Wording for the full terms, definitions and exclusions.",
  },
  {
    category: "Claims",
    question: "When will Quick Life pay a benefit?",
    answer:
      "Subject to the terms of the policy, a Quick Life benefit may be paid if the life insured passes away or is diagnosed with a terminal illness. A terminal illness is defined in the Policy Wording as an illness that, even with treatment, is expected to result in death within 12 months and is confirmed by an approved medical practitioner.",
  },
  {
    category: "Claims",
    question: "Who receives the benefit?",
    answer:
      "If a nominated beneficiary is listed on the policy, the life benefit will generally be paid to that beneficiary when the life insured passes away. If no beneficiary is nominated, the benefit may be paid to the policy owner or their estate, depending on the circumstances.",
  },
  {
    category: "Claims",
    question: "How do I make a claim?",
    answer:
      "To begin a claim, contact Momentum Life. You may be asked to provide supporting information such as medical documentation, test results, a death certificate, confirmation of diagnosis or other relevant information. Once a claim has been approved, payment is usually made within 48 hours in New Zealand dollars.",
  },
  {
    category: "Policy",
    question: "Can I cancel my policy?",
    answer:
      "Yes. You have 30 days from your policy start date to review your cover. If you cancel within this period and haven't made a claim, you can receive a full refund of premiums paid. After the first 30 days, you can still cancel your policy, but premiums already paid will not normally be refunded.",
  },
  {
    category: "Policy",
    question: "Does Quick Life have a cash or surrender value?",
    answer:
      "No. Quick Life is a protection policy and does not build up a cash or surrender value. Depending on how long you keep the policy, the total premiums you pay may be more than the benefit ultimately paid.",
  },
  {
    category: "Financial advice",
    question: "Is this personalised financial advice?",
    answer:
      "No. The information provided on this website is general in nature and does not constitute personalised financial advice. It does not take into account your individual objectives, financial situation or insurance needs. If you're unsure whether Quick Life is suitable for you, you may wish to speak with a financial adviser.",
  },
  {
    id: "policy-wording",
    category: "Policy documents",
    question: "Where can I read the Policy Wording?",
    answer:
      "The Quick Life Policy Wording contains the full benefits, terms, conditions, exclusions, waiting periods and definitions that apply to your policy. We recommend reading it carefully before applying so you understand how the cover works, including when a benefit will and won't be paid.",
    action: {
      label: "View Policy Wording",
      href: "/documents/quicklife-policy-wording.pdf",
      target: "_blank" as const,
    },
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently asked questions"
        title="The details people ask about most"
        description="Find answers to common questions about Quick Life, including eligibility, cover, premiums, waiting periods, exclusions and claims."
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
