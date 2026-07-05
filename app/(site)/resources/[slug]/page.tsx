import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock3 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { getResource, resources } from "@/lib/resources";

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return {};
  return { title: resource.title, description: resource.excerpt };
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  return (
    <article className="bg-white">
      <header className="border-b border-line bg-soft-sage py-16 sm:py-24">
        <Container className="max-w-4xl">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-forest-900 hover:text-brand-green"
          >
            <ArrowLeft className="h-4 w-4" /> All resources
          </Link>
          <p className="mt-10 text-sm font-extrabold uppercase tracking-[0.18em] text-brand-green">
            {resource.category}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.05em] text-forest-950 sm:text-6xl">
            {resource.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            {resource.excerpt}
          </p>
          <p className="mt-6 flex items-center gap-2 text-sm font-bold text-forest-900">
            <Clock3 className="h-4 w-4 text-brand-green" />
            {resource.readTime}
          </p>
        </Container>
      </header>
      <Container className="max-w-3xl py-14 sm:py-20">
        <div className="rounded-2xl border border-brand-green/20 bg-brand-sage p-5 text-sm leading-7 text-forest-900">
          This article provides general information only. Product definitions,
          eligibility and claims are governed by the approved policy wording.
        </div>
        <div className="mt-10 space-y-12">
          {resource.body.map((section) => (
            <section key={section.heading}>
              <h2 className="text-3xl font-extrabold tracking-[-0.035em] text-forest-950">
                {section.heading}
              </h2>
              <div className="mt-5 space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-14 rounded-[1.8rem] bg-forest-950 p-7 text-white sm:p-9">
          <h2 className="text-2xl font-extrabold">
            Have a question about NeedIt Life?
          </h2>
          <p className="mt-3 text-sm leading-7 text-white/70">
            The team can explain the current product information and direct you
            to the formal documents.
          </p>
          <ButtonLink
            href="/get-a-quote"
            className="mt-6 bg-brand-lime text-forest-950 hover:bg-white"
            arrow
          >
            Start an enquiry
          </ButtonLink>
        </div>
      </Container>
    </article>
  );
}
