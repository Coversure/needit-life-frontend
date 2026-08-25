import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function FinalCta() {
  return (
    <section className="bg-soft-sage py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2.25rem] bg-forest-900 px-7 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16">
          {/* <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[42px] border-brand-lime/15" /> */}
          <div className="relative max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-lime">
              Take the next step
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl">
              See whether NeedIt Life could suit you
            </h2>
            <p className="mt-5 text-base leading-7 text-white/70">
              Share a few details and the team can talk you through the product,
              its limitations and what happens next.
            </p>
          </div>
          <div className="relative mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col">
            <ButtonLink
              href="https://needitlife.mll.net.nz/life-insurance/"
              target="_blank"
              variant="primary"
              className="font-semibold"
              arrow
            >
              Get a quote
            </ButtonLink>
            <ButtonLink
              href="/book-an-appointment"
              variant="secondary"
              className="font-semibold hover:bg-white/50 hover:text-white"
              arrow
            >
              Speak with a financial adviser
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
