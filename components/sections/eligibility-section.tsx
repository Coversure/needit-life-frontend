import { Check, Clock3, HeartPulse, UserCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

const cards = [
  {
    icon: UserCheck,
    title: "A simpler acceptance approach",
    text: "NeedIt Life is designed to make applying more accessible than fully underwritten life cover.",
  },
  {
    icon: HeartPulse,
    title: "Medical history considered differently",
    text: "A previous condition or decline may not automatically stop you from exploring your options.",
  },
  {
    icon: Clock3,
    title: "An initial period may apply",
    text: "Claims related to pre-existing conditions can be subject to a defined waiting or exclusion period.",
  },
];

export function EligibilitySection() {
  return (
    <section className="section-space bg-forest-950 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-lime">
              Who NeedIt Life may suit
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl">
              A different path to life cover
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
              NeedIt Life may suit New Zealanders who want straightforward cover
              information or have found traditional applications difficult.
            </p>
            <ButtonLink
              href="/quick-life-insurance"
              variant="secondary"
              className="mt-8 border-white/30 bg-white font-semibold md:text-base text-forest-950"
              arrow
            >
              Explore NeedIt Life
            </ButtonLink>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {cards.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-[1.6rem] border border-white/10 bg-white/7 p-6 backdrop-blur"
              >
                <Icon className="h-8 w-8 text-brand-lime" strokeWidth={1.7} />
                <h3 className="mt-5 text-lg font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-10 flex gap-3 p-5 text-sm leading-6 text-white/70">
          <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-lime" />
          <p>
            Eligibility, acceptance, cover and claims remain subject to the
            current policy wording. This prototype content must be reviewed
            before publication.
          </p>
        </div>
      </Container>
    </section>
  );
}
