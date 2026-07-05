"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Can I apply if I have a pre-existing condition?",
    answer:
      "You may still be able to apply. NeedIt Life uses a simpler acceptance approach, but a waiting period or exclusion can apply to claims connected with conditions that existed before cover began.",
  },
  {
    question: "What if I have been declined for life insurance before?",
    answer:
      "A previous decline does not necessarily prevent an enquiry. The suitability of NeedIt Life depends on the current eligibility requirements and policy terms.",
  },
  {
    question: "How much cover can I request?",
    answer:
      "The current product information describes cover options up to $300,000 for an individual. Confirm the available amount and any joint-cover rules in the approved policy documents.",
  },
  {
    question: "Is this an instant online quote?",
    answer:
      "The prototype form collects your details so the team can contact you about NeedIt Life. It does not currently calculate or guarantee a premium online.",
  },
];

export function FaqPreview() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section-space bg-white border-t border-line">
      <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-green">
            FAQs
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] text-forest-950">
            Understand the details before you apply
          </h2>
          <p className="mt-5 text-base md:text-lg leading-7 text-muted">
            Clear explanations help people make better decisions. Start with
            these common NeedIt Life questions.
          </p>
          <ButtonLink
            href="/faqs"
            variant="secondary"
            className="mt-7 font-semibold md:text-base"
            arrow
          >
            View all FAQs
          </ButtonLink>
        </div>
        <div className="divide-y divide-line rounded-[1.75rem] border border-line bg-warm-white px-5 sm:px-7">
          {faqs.map((faq, index) => {
            const active = open === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpen(active ? -1 : index)}
                  aria-expanded={active}
                  className="flex w-full items-center justify-between gap-5 py-6 text-left"
                >
                  <span className="text-base md:text-lg font-extrabold text-forest-950">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-brand-green transition",
                      active && "rotate-180",
                    )}
                  />
                </button>
                {active ? (
                  <p className="-mt-1 pb-6 pr-10 text-base leading-7 text-muted">
                    {faq.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
