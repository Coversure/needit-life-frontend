import type { Metadata } from "next";
import {
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircleQuestion,
  HeartPulse,
  ShieldCheck,
  Users,
} from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how NeedIt Life helps New Zealanders access straightforward guaranteed-acceptance life insurance, including people who may have previously been declined because of their medical history.",
};

const values = [
  {
    icon: Clock,
    title: "Fast, simple process",
    text: (
      <>
        Apply in minutes with{" "}
        <strong className="font-extrabold text-forest-900">
          no medical exams
        </strong>{" "}
        and no lengthy underwriting.
      </>
    ),
  },
  {
    icon: MapPin,
    title: "Local support",
    text: (
      <>
        A{" "}
        <strong className="font-extrabold text-forest-900">
          New Zealand based team
        </strong>{" "}
        is on hand to help you choose the right cover.
      </>
    ),
  },
  {
    icon: MessageCircleQuestion,
    title: "No judgement, no jargon",
    text: (
      <>
        We explain your options in{" "}
        <strong className="font-extrabold text-forest-900">
          plain language
        </strong>
        , whatever your health or insurance history.
      </>
    ),
  },
];

const coverFeatures = [
  {
    title: "Guaranteed acceptance",
    text: (
      <>
        No medical exams. No underwriting. Eligibility is confirmed through
        simple application questions.
      </>
    ),
  },
  {
    title: "Flexible cover amounts",
    text: (
      <>
        Choose cover from{" "}
        <strong className="font-extrabold text-forest-900">
          $50,000 up to $300,000
        </strong>{" "}
        per insured person.
      </>
    ),
  },
  {
    title: "Death and terminal illness protection",
    text: (
      <>
        A{" "}
        <strong className="font-extrabold text-forest-900">
          one off lump sum benefit
        </strong>{" "}
        paid for any purpose: mortgage, debts, everyday costs or funeral
        expenses.
      </>
    ),
  },
  {
    title: "Lifetime protection",
    text: (
      <>
        Cover stays in place{" "}
        <strong className="font-extrabold text-forest-900">for life</strong>{" "}
        while premiums are paid, with an automatic 3% annual benefit increase
        (opt out available).
      </>
    ),
  },
];

const customerBenefits = [
  "No medical examinations",
  "No medical underwriting",
  "Guaranteed acceptance for eligible applicants",
  "Available to New Zealand residents aged 18 to 65",
  "Individual and joint policy options",
  "New Zealand based customer support",
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About NeedIt Life"
        title="A path to protection for more New Zealanders"
        description="Guaranteed acceptance life insurance, including for people who have previously been declined cover because of their medical history. No exams. No medical underwriting."
      />

      {/* Who we are — paired with the benefits checklist */}
      <section className="section-space bg-warm-white border-b border-line">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-sm md:text-base font-extrabold uppercase tracking-[0.18em] text-brand-green">
              Who we are
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-forest-950 sm:text-4xl lg:text-[2.75rem]">
              Straightforward life cover for real life
            </h2>

            <div className="mt-6 space-y-5 text-base md:text-lg leading-8 text-muted">
              <p>
                NeedIt Life gives everyday New Zealanders a simpler way to
                protect their family:{" "}
                <strong className="font-extrabold text-forest-900">
                  guaranteed acceptance life insurance
                </strong>{" "}
                with no medical exams and no medical underwriting.
              </p>

              <p>
                Even if you have a{" "}
                <strong className="font-extrabold text-forest-900">
                  pre existing condition
                </strong>{" "}
                or have{" "}
                <strong className="font-extrabold text-forest-900">
                  been declined
                </strong>{" "}
                elsewhere, you may still be eligible.
              </p>
            </div>

            <ButtonLink
              href="/get-a-quote"
              variant="primary"
              className="mt-8 font-semibold"
              arrow
            >
              Explore your cover options
            </ButtonLink>
          </div>

          <aside className="rounded-[2rem] border border-line bg-soft-sage p-7 shadow-sm sm:p-8">
            <p className="text-sm md:text-base font-extrabold uppercase tracking-[0.16em] text-brand-green">
              At a glance
            </p>
            <h3 className="mt-2 text-xl font-extrabold tracking-[-0.03em] text-forest-950">
              What makes our cover different
            </h3>

            <ul className="mt-6 space-y-3">
              {customerBenefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-line bg-white px-4 py-3.5 text-sm md:text-base font-extrabold leading-6 text-forest-900 shadow-sm"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-green"
                    aria-hidden="true"
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>

      {/* Our purpose — standalone full width statement */}
      <section className="section-space bg-white pb-0">
        <Container>
          <div className="soft-grid relative overflow-hidden rounded-[2rem] bg-forest-950 px-7 py-8 text-white shadow-xl shadow-forest-950/10 sm:px-12 sm:py-16 lg:px-20">
            <div
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-brand-lime/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center gap-3">
                <HeartPulse
                  className="h-6 w-6 text-brand-lime"
                  aria-hidden="true"
                />
                <p className="text-sm md:text-base font-extrabold uppercase tracking-[0.18em] text-brand-lime sm:text-base">
                  Our purpose
                </p>
              </div>

              <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-[2.65rem]">
                Helping people find protection when other options may not be
                available
              </h2>

              <p className="mx-auto mt-10 max-w-2xl text-base md:text-lg leading-8 text-white/75 ">
                Health history should not be the reason someone has{" "}
                <strong className="font-extrabold text-white">
                  no protection at all
                </strong>
                . NeedIt Life exists to close that gap.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space bg-soft-sage">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm md:text-base font-extrabold uppercase tracking-[0.18em] text-brand-green">
              Why NeedIt Life
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-forest-950 sm:text-4xl lg:text-[2.75rem]">
              Life insurance should not feel out of reach
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg leading-8 text-muted">
              A{" "}
              <strong className="font-extrabold text-forest-900">
                more accessible alternative
              </strong>{" "}
              for people whose health or medical history has made getting
              covered difficult.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {coverFeatures.map(({ title, text }, index) => (
              <article
                key={title}
                className="group h-full rounded-[1.75rem] border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-base font-extrabold text-brand-green transition duration-300 group-hover:bg-brand-green group-hover:text-white">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold leading-snug text-forest-950">
                      {title}
                    </h3>

                    <p className="mt-5 text-base md:text-[17px] leading-7 text-muted sm:text-base">
                      {text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space bg-white">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-sm md:text-base font-extrabold uppercase tracking-[0.18em] text-brand-green">
              How the cover helps
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-forest-950 sm:text-4xl lg:text-[2.75rem]">
              Financial support when it matters most
            </h2>

            <div className="mt-6 space-y-5 text-base md:text-lg leading-8 text-muted ">
              <p>
                The policy pays a{" "}
                <strong className="font-extrabold text-forest-900">
                  one off lump sum benefit
                </strong>{" "}
                if the insured person passes away or is diagnosed with a
                terminal illness that meets the policy definition.
              </p>

              <p>
                It is not restricted to a particular expense. It can help with
                mortgage or rent, household costs, outstanding debts, funeral
                expenses or other financial needs.
              </p>

              <p>
                Cover can remain in place{" "}
                <strong className="font-extrabold text-forest-900">
                  for life
                </strong>{" "}
                while premiums continue to be paid, with an{" "}
                <strong className="font-extrabold text-forest-900">
                  automatic annual benefit increase of 3%
                </strong>{" "}
                (opt out available).
              </p>
            </div>

            <ButtonLink
              href="/get-a-quote"
              variant="primary"
              className="mt-8 font-semibold"
              arrow
            >
              Get a life insurance quote
            </ButtonLink>
          </div>

          <aside className="rounded-[2rem] border border-line bg-soft-sage p-7 shadow-sm sm:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white">
                <Users
                  className="h-7 w-7 text-brand-green"
                  aria-hidden="true"
                />
              </div>

              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-brand-green">
                  Eligibility
                </p>
                <h3 className="mt-1 text-2xl font-extrabold tracking-[-0.035em] text-forest-950">
                  Who can apply?
                </h3>
              </div>
            </div>

            <ul className="mt-7 space-y-3">
              <li className="flex gap-3 rounded-2xl bg-white p-4 text-sm md:text-base font-bold leading-7 text-forest-900 shadow-sm">
                <CheckCircle2
                  className="mt-1 h-5 w-5 shrink-0 text-brand-green"
                  aria-hidden="true"
                />

                <span>
                  <strong className="font-extrabold">
                    New Zealand residents
                  </strong>{" "}
                  aged 18 to 65.
                </span>
              </li>

              <li className="flex gap-3 rounded-2xl bg-white p-4 text-sm md:text-base font-bold leading-7 text-forest-900 shadow-sm">
                <CheckCircle2
                  className="mt-1 h-5 w-5 shrink-0 text-brand-green"
                  aria-hidden="true"
                />

                <span>
                  Applicants seeking an{" "}
                  <strong className="font-extrabold">
                    individual or joint policy
                  </strong>
                  .
                </span>
              </li>

              <li className="flex gap-3 rounded-2xl bg-white p-4 text-sm md:text-base font-bold leading-7 text-forest-900 shadow-sm">
                <CheckCircle2
                  className="mt-1 h-5 w-5 shrink-0 text-brand-green"
                  aria-hidden="true"
                />

                <span>
                  People with{" "}
                  <strong className="font-extrabold">
                    pre existing medical conditions
                  </strong>
                  , subject to applicable waiting periods, exclusions and policy
                  terms.
                </span>
              </li>
            </ul>

            <div className="mt-6 rounded-2xl border border-line bg-warm-white p-5 shadow-md">
              <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-amber-800">
                Important eligibility note
              </p>
              <p className="mt-2 text-sm md:text-base leading-7 text-amber-950/80">
                Cover is{" "}
                <strong className="font-extrabold text-amber-950">
                  not available
                </strong>{" "}
                to an applicant who has been diagnosed with a terminal illness
                or is receiving palliative or hospice care when they apply.
              </p>
            </div>
          </aside>
        </Container>
      </section>

      {/* What matters to us — now focused on why customers choose NeedIt Life
          as the channel, rather than restating the product benefits again */}
      <section className="section-space bg-soft-sage">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm md:text-base font-extrabold uppercase tracking-[0.18em] text-brand-green">
              What matters to us
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-forest-950 sm:text-4xl lg:text-[2.75rem]">
              A more understanding approach to life cover
            </h2>

            <p className="mt-5 text-base md:text-lg leading-8 text-muted ">
              We want every customer to feel{" "}
              <strong className="font-extrabold text-forest-900">
                informed, respected and supported
              </strong>{" "}
              when considering protection for themselves and their family.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="h-full rounded-[1.75rem] border border-line bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100">
                  <Icon
                    className="h-6 w-6 text-brand-green"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-forest-950">
                  {title}
                </h3>

                <p className="mt-3 text-sm md:text-[17px] leading-7 text-muted">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space bg-white">
        <Container className="relative overflow-hidden rounded-[2rem] bg-forest-950 px-7 py-12 text-center text-white shadow-xl shadow-forest-950/10 sm:px-12 sm:py-16">
          <div
            className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="text-sm md:text-base font-extrabold uppercase tracking-[0.18em] text-brand-lime">
              Protection for real life
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-[2.75rem]">
              <span className="text-brand-lime">Previously declined</span> for
              life insurance? There may still be an option available
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/75 ">
              Learn more about{" "}
              <strong className="font-extrabold text-white">
                guaranteed acceptance
              </strong>
              , available cover amounts, waiting periods, exclusions and the
              important conditions that apply to your policy.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/get-a-quote" variant="primary" arrow>
                Check your options
              </ButtonLink>

              <ButtonLink href="/book-an-appointment" variant="secondary">
                Book an appointment
              </ButtonLink>
            </div>

            <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <p className="text-sm leading-6 text-white/60">
                Eligibility requirements, premiums, waiting periods, exclusions
                and policy terms apply.{" "}
                <strong className="font-extrabold text-white/80">
                  Guaranteed acceptance
                </strong>{" "}
                does not mean every claim is automatically covered. Please
                review the policy wording before applying.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
