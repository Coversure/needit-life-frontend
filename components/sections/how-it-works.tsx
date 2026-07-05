import {
  CheckCircle2,
  ClipboardCheck,
  Laptop,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/container";

const steps = [
  {
    icon: Laptop,
    title: "Check your options",
    text: "Answer a few simple questions to see what cover you may qualify for.",
  },
  {
    icon: ClipboardCheck,
    title: "Review the details",
    text: "We'll show you your options clearly with no impact to your credit.",
  },
  {
    icon: ShieldCheck,
    title: "Apply for cover",
    text: "If you're happy, you're covered. Peace of mind for you and your family.",
  },
];

const benefits = [
  "We consider more than just a medical history.",
  "We're here to say yes when others say no.",
  "We treat you with respect, empathy and understanding.",
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-space scroll-mt-24 bg-warm-white"
    >
      <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        {/* How it works */}
        <div className="rounded-2xl border border-gray-200/70 bg-white px-5 py-7 shadow-lg lg:px-7 lg:py-8">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-forest-950 sm:text-4xl">
              How it works
            </h2>

            <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-brand-green/80 sm:mx-0" />
          </div>

          <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-3 md:gap-5 lg:mt-15 lg:gap-7">
            {steps.map(({ icon: Icon, title, text }, index) => (
              <article
                key={title}
                className="relative rounded-2xl border border-brand-sage bg-warm-white px-5 py-7 md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0"
              >
                <span className="absolute top-4 left-4 flex h-9 w-9 items-center justify-center rounded-full bg-brand-green text-base font-extrabold text-white md:-top-5 md:-left-2 md:h-10 md:w-10 md:text-lg">
                  {index + 1}
                </span>

                <div className="flex flex-col items-center pt-2 text-center md:pt-0">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-sage text-brand-green sm:h-18 sm:w-18 md:h-20 md:w-20">
                    <Icon
                      className="h-8 w-8 md:h-15 md:w-15"
                      strokeWidth={1.4}
                      aria-hidden="true"
                    />
                  </span>

                  <h3 className="mt-5 text-lg font-extrabold text-forest-950">
                    {title}
                  </h3>

                  <p className="mt-2 max-w-sm leading-6 text-muted text-base md:text-[16px]">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-7 border-t border-gray-200 pt-6 text-center text-base font-extrabold text-forest-900 sm:text-lg">
            It&apos;s quick, simple and designed to{" "}
            <span className="text-brand-green">give you clarity</span>
          </p>
        </div>

        {/* Built for real life */}
        <aside className="overflow-hidden rounded-2xl border border-green-200/70 bg-soft-sage px-5 py-7 shadow-md lg:px-8 lg:py-8">
          <div className="flex h-full flex-col">
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:text-left">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-900 text-brand-lime">
                <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
              </div>

              <h2 className="text-2xl font-extrabold tracking-[-0.035em] text-forest-950 sm:text-3xl">
                Built for real life.
                <br />
                <span className="text-brand-green">
                  Here when life is complicated.
                </span>
              </h2>
            </div>

            <p className="mt-8 leading-6 text-muted text-base md:text-[16px] sm:leading-7">
              Traditional life insurance doesn&apos;t always work for everyone.
              That&apos;s why NeedIt Life exists — to give more New Zealanders
              access to the protection they deserve.
            </p>

            <ul className="mt-6 space-y-4 sm:mt-7">
              {benefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm md:text-base font-bold leading-6 text-forest-900"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-green"
                    aria-hidden="true"
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </Container>
    </section>
  );
}
