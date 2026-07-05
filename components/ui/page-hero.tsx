import { Container } from "@/components/ui/container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-soft-sage py-18 sm:py-24">
      <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-lime/10 blur-3xl" />
      <Container className="relative max-w-4xl text-center">
        <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-brand-green">
          {eyebrow}
        </p>
        <h1 className="text-balance text-4xl font-extrabold tracking-[-0.045em] text-forest-950 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-8 text-muted sm:text-lg">
          {description}
        </p>
      </Container>
    </section>
  );
}
