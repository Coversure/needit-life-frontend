import type { Metadata } from "next";
import {
  CalendarClock,
  CheckCircle2,
  CircleDollarSign,
  FileCheck2,
  HeartPulse,
  ShieldCheck,
  Users,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "NeedIt Life Insurance",
  description:
    "Learn how NeedIt Life works, who it may suit, and which waiting periods and exclusions to review before applying.",
};

const features = [
  {
    icon: ShieldCheck,
    title: "A simpler application pathway",
    text: "NeedIt Life is designed to reduce the medical underwriting usually associated with traditional life cover.",
  },
  {
    icon: CircleDollarSign,
    title: "Cover options up to $300,000",
    text: "Choose an amount that reflects the support you want to leave behind, subject to current product limits.",
  },
  {
    icon: HeartPulse,
    title: "Death and terminal illness benefits",
    text: "A lump-sum benefit may be payable when the policy definitions and claims requirements are met.",
  },
  {
    icon: Users,
    title: "Individual or joint applications",
    text: "Ask the team about the current options for one person or two people applying together.",
  },
];

const details = [
  {
    icon: FileCheck2,
    title: "Eligibility",
    items: [
      "Designed for eligible New Zealand residents",
      "Current age limits apply",
      "Acceptance remains subject to the product rules",
    ],
  },
  {
    icon: CalendarClock,
    title: "Waiting periods and exclusions",
    items: [
      "Pre-existing conditions may be subject to an initial period",
      "Accidental and non-accidental claims may be treated differently",
      "The approved policy wording always takes priority",
    ],
  },
  {
    icon: CircleDollarSign,
    title: "Premiums and cover",
    items: [
      "Premiums depend on the current pricing rules",
      "Cover continues only while premiums and policy conditions are met",
      "Ask how premium changes may work over time",
    ],
  },
];

export default function QuickLifePage() {
  return (
    <>
      <PageHero
        eyebrow="NeedIt Life Insurance"
        title="A simpler way to explore life cover"
        description="NeedIt Life is designed for New Zealanders who want straightforward protection information, including people who may have a complicated medical history or a previous decline."
      />

      <section className="section-space bg-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-[1.7rem] border border-line bg-warm-white p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sage text-brand-green">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h2 className="mt-5 text-lg font-extrabold text-forest-950">
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space bg-soft-sage">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-green">
              Before you apply
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] text-forest-950 sm:text-5xl">
              Understand both the benefit and the limitations
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              Easier acceptance can come with waiting periods and exclusions.
              These details should be explained as clearly as the headline cover
              amount.
            </p>
            <ButtonLink href="/get-a-quote" className="mt-8" arrow>
              Start an enquiry
            </ButtonLink>
          </div>

          <div className="space-y-5">
            {details.map(({ icon: Icon, title, items }) => (
              <article
                key={title}
                className="rounded-[1.75rem] border border-line bg-white p-7 sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sage text-brand-green">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-forest-950">
                    {title}
                  </h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-muted"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* <section className="section-space bg-white">
        <Container className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-[2rem] bg-forest-950 p-8 text-white sm:p-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-lime">Pre-existing conditions</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em]">What the initial period can mean</h2>
            <p className="mt-5 text-sm leading-7 text-white/70">
              A claim connected with a condition that existed before the policy began may not be covered during an initial period. The exact definition, duration and exceptions must come from the approved policy wording.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Accidental death may be treated differently. Ask the team to explain this distinction before you apply.
            </p>
          </article>
          <article className="rounded-[2rem] border border-line bg-warm-white p-8 sm:p-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-green">Important document</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-forest-950">Read the policy wording</h2>
            <p className="mt-5 text-sm leading-7 text-muted">
              The website provides a summary only. Definitions, exclusions, premium terms, claims requirements and cancellation rights are set out in the formal policy wording.
            </p>
            <ButtonLink href="/resources/documents-and-forms" variant="secondary" className="mt-7" arrow>
              View documents and forms
            </ButtonLink>
          </article>
        </Container>
      </section> */}

      <FinalCta />
    </>
  );
}
