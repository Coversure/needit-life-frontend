import type { Metadata } from "next";
import { CheckCircle2, Eye, HandHeart, Leaf, ShieldCheck } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how NeedIt Life helps New Zealanders explore straightforward life cover with clear information and local support.",
};

const values = [
  {
    icon: Eye,
    title: "Clear information",
    text: "We explain the important features, waiting periods and exclusions in language that is easier to understand.",
  },
  {
    icon: HandHeart,
    title: "Respectful support",
    text: "Every person deserves to be treated with care, regardless of their medical history or previous insurance experience.",
  },
  {
    icon: ShieldCheck,
    title: "Dependable protection",
    text: "We help customers understand their cover and what support is available throughout the life of their policy.",
  },
];

const benefits = [
  "Straightforward cover",
  "Options for people with pre-existing conditions",
  "A simple application process",
  "New Zealand-based customer support",
  "Clear information about waiting periods and exclusions",
  "Support for customers and their families when it matters",
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About NeedIt Life"
        title="Life cover made clearer for real life"
        description="NeedIt Life helps New Zealanders explore straightforward life cover with clear information, respectful support and a simpler application experience."
      />

      <section className="section-space bg-white">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="soft-grid relative min-h-[420px] overflow-hidden rounded-[2rem] bg-forest-950 p-9 text-white">
            <Leaf className="h-12 w-12 text-brand-lime" />

            <p className="mt-24 text-sm font-extrabold uppercase tracking-[0.18em] text-brand-lime">
              Our purpose
            </p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em]">
              Help more New Zealanders find a path to protection
            </h2>

            <p className="mt-5 text-base leading-8 text-white/70">
              Life does not always follow a simple path. NeedIt Life exists to
              help people understand their cover options and feel supported
              while making an important decision for themselves and their
              families.
            </p>
          </div>

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-green">
              Who we are
            </p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] text-forest-950">
              Straightforward protection backed by real support
            </h2>

            <p className="mt-5 text-base leading-8 text-muted">
              We provide access to quick cover for people looking for a simpler
              way to protect the people who matter most.
            </p>

            <p className="mt-4 text-base leading-8 text-muted">
              NeedIt Life provides an option for people who have previously
              found it difficult to obtain life cover because of their health or
              medical history. Eligibility, waiting periods, exclusions and
              policy terms apply.
            </p>

            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm font-extrabold text-forest-900"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <ButtonLink
              href="/quick-life-insurance"
              variant="secondary"
              className="mt-8"
              arrow
            >
              Explore NeedIt Life
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="section-space bg-soft-sage">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-green">
              What matters to us
            </p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] text-forest-950">
              A more human approach to life cover
            </h2>

            <p className="mt-4 text-base leading-8 text-muted">
              We want customers to feel informed, respected and supported from
              their first enquiry through to the moments when their cover may be
              needed.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-[1.75rem] border border-line bg-white p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Icon className="h-6 w-6 text-brand-green" />
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-forest-950">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space bg-white">
        <Container className="rounded-[2rem] bg-forest-950 px-7 py-12 text-center text-white sm:px-12">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-lime">
            Protection for real life
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-[-0.045em]">
            Understand your options and take the next step with confidence
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70">
            Explore how NeedIt Life works, including eligibility, cover amounts,
            waiting periods and important exclusions.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/get-a-quote" variant="primary" arrow>
              Check your options
            </ButtonLink>

            <ButtonLink href="/contact" variant="light">
              Contact our team
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
