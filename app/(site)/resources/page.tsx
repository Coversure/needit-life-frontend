import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, FileText } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { resources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Resources",
  description: "Plain-language guides about life cover, previous declines, pre-existing conditions and waiting periods.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero eyebrow="Guides and resources" title="Life cover information without the jargon" description="Start with practical articles, then review the policy documents or speak with the team about anything that is unclear." />
      <section className="section-space bg-soft-sage">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {resources.map((resource) => (
              <Link key={resource.slug} href={`/resources/${resource.slug}`} className="group flex min-h-[330px] flex-col rounded-[1.8rem] border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sage text-brand-green"><BookOpen className="h-6 w-6" /></span>
                  <ArrowUpRight className="h-5 w-5 text-muted transition group-hover:text-brand-green" />
                </div>
                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">{resource.category}</p>
                <h2 className="mt-3 text-2xl font-extrabold leading-8 tracking-[-0.03em] text-forest-950">{resource.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-7 text-muted">{resource.excerpt}</p>
                <p className="mt-6 text-sm font-extrabold text-forest-900">{resource.readTime}</p>
              </Link>
            ))}
          </div>
          <Link href="/resources/documents-and-forms" className="mt-8 flex items-center justify-between gap-5 rounded-[1.7rem] bg-forest-900 p-6 text-white transition hover:bg-forest-800 sm:p-8">
            <span className="flex items-center gap-5"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-lime"><FileText className="h-6 w-6" /></span><span><span className="block text-xl font-extrabold">Policy documents and forms</span><span className="mt-1 block text-sm text-white/65">Brochures, policy wording, claims and customer forms.</span></span></span>
            <ArrowUpRight className="h-5 w-5 shrink-0" />
          </Link>
        </Container>
      </section>
    </>
  );
}
