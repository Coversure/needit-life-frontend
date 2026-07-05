import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/container";
import { resources } from "@/lib/resources";

export function ResourcesPreview() {
  return (
    <section className="section-space bg-soft-sage">
      <Container>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-green">Helpful reading</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] text-forest-950">Life cover, explained clearly</h2>
          </div>
          <Link href="/resources" className="inline-flex items-center gap-2 font-extrabold text-forest-900 hover:text-brand-green">
            Browse all resources <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {resources.map((resource) => (
            <Link key={resource.slug} href={`/resources/${resource.slug}`} className="group rounded-[1.75rem] border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sage text-brand-green">
                <BookOpen className="h-6 w-6" />
              </div>
              <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">{resource.category}</p>
              <h3 className="mt-3 text-xl font-extrabold leading-7 text-forest-950 group-hover:text-brand-green">{resource.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{resource.excerpt}</p>
              <p className="mt-6 text-sm font-bold text-forest-900">{resource.readTime}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
