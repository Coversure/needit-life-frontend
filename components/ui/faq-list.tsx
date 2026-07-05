"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";

type Faq = { category: string; question: string; answer: string };

export function FaqList({ faqs }: { faqs: Faq[] }) {
  const categories = ["All", ...Array.from(new Set(faqs.map((faq) => faq.category)))];
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(faqs[0]?.question ?? null);

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    return faqs.filter((faq) => {
      const matchesCategory = category === "All" || faq.category === category;
      const matchesQuery = !normalized || `${faq.question} ${faq.answer}`.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, faqs, query]);

  return (
    <div>
      <div className="rounded-[1.5rem] border border-line bg-white p-4 sm:flex sm:items-center sm:justify-between sm:gap-5">
        <label className="relative block flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search questions"
            className="min-h-12 w-full rounded-2xl border border-line bg-warm-white pl-12 pr-4 text-sm font-semibold focus:border-brand-green focus:ring-4 focus:ring-brand-green/10"
          />
        </label>
        <div className="mt-4 flex flex-wrap gap-2 sm:mt-0 sm:justify-end">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-extrabold transition",
                category === item ? "bg-forest-900 text-white" : "bg-soft-sage text-forest-900 hover:bg-brand-sage",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 divide-y divide-line rounded-[1.75rem] border border-line bg-white px-5 sm:px-8">
        {filtered.length ? filtered.map((faq) => {
          const active = open === faq.question;
          return (
            <article key={faq.question}>
              <button type="button" onClick={() => setOpen(active ? null : faq.question)} className="flex w-full items-start justify-between gap-5 py-6 text-left" aria-expanded={active}>
                <span>
                  <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.15em] text-brand-green">{faq.category}</span>
                  <span className="font-extrabold leading-6 text-forest-950">{faq.question}</span>
                </span>
                <ChevronDown className={cn("mt-1 h-5 w-5 shrink-0 text-brand-green transition", active && "rotate-180")} />
              </button>
              {active ? <p className="-mt-1 max-w-3xl pb-7 text-sm leading-7 text-muted">{faq.answer}</p> : null}
            </article>
          );
        }) : <p className="py-10 text-center text-sm font-semibold text-muted">No questions match your search.</p>}
      </div>
    </div>
  );
}
