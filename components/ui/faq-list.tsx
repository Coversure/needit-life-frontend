"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Faq = {
  id?: string;
  category: string;
  question: string;
  answer: string;
  action?: {
    label: string;
    href: string;
    target?: "_blank" | "_self";
  };
};

export function FaqList({ faqs }: { faqs: Faq[] }) {
  const categories = [
    "All",
    ...Array.from(new Set(faqs.map((faq) => faq.category))),
  ];

  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(faqs[0]?.question ?? null);

  useEffect(() => {
    const openFaqFromHash = () => {
      const hash = window.location.hash.replace("#", "");

      if (!hash) return;

      const faq = faqs.find((item) => item.id === hash);

      if (!faq) return;

      setCategory("All");
      setQuery("");
      setOpen(faq.question);

      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    };

    openFaqFromHash();

    window.addEventListener("hashchange", openFaqFromHash);

    return () => {
      window.removeEventListener("hashchange", openFaqFromHash);
    };
  }, [faqs]);

  const filtered = useMemo(() => {
    const normalizedQuery = query.toLowerCase().trim();

    return faqs.filter((faq) => {
      const matchesCategory = category === "All" || faq.category === category;

      const searchableText = `
        ${faq.question}
        ${faq.answer}
        ${faq.category}
        ${faq.action?.label ?? ""}
      `;

      const matchesQuery =
        !normalizedQuery ||
        searchableText.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, faqs, query]);

  return (
    <div className="mx-auto max-w-6xl">
      <div className="rounded-[1.75rem] border border-line bg-white p-5 shadow-md sm:p-6 lg:p-8">
        <div className="flex flex-col gap-5">
          <label className="relative block">
            <span className="sr-only">Search frequently asked questions</span>

            <Search
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted sm:left-5 sm:h-6 sm:w-6"
              aria-hidden="true"
            />

            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search frequently asked questions"
              className="min-h-14 w-full rounded-2xl border border-line bg-warm-white pl-12 pr-5 text-base font-semibold text-forest-950 outline-none transition placeholder:font-medium placeholder:text-muted/80 focus:border-brand-green focus:ring-4 focus:ring-brand-green/10 sm:min-h-16 sm:pl-14 sm:text-lg"
            />
          </label>

          <div
            className="flex flex-wrap gap-2.5"
            aria-label="Filter questions by category"
          >
            {categories.map((item) => {
              const active = category === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  aria-pressed={active}
                  className={cn(
                    "rounded-full border px-4 py-2.5 text-sm font-extrabold transition sm:px-5 sm:py-3 sm:text-base",
                    active
                      ? "border-forest-900 bg-forest-900 text-white shadow-sm"
                      : "border-transparent bg-soft-sage text-forest-900 hover:border-brand-green/20 hover:bg-brand-sage",
                  )}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
        {filtered.length ? (
          filtered.map((faq) => {
            const active = open === faq.question;

            return (
              <article
                key={faq.question}
                id={faq.id}
                className={cn(
                  "scroll-mt-28 overflow-hidden rounded-[1.5rem] border bg-white shadow-sm transition sm:rounded-[1.75rem]",
                  active
                    ? "border-brand-green/40 shadow-md"
                    : "border-line hover:border-brand-green/25 hover:shadow-md",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(active ? null : faq.question)}
                  className="flex w-full items-start justify-between gap-5 px-5 py-6 text-left sm:px-7 sm:py-7 lg:px-9 lg:py-8"
                  aria-expanded={active}
                >
                  <span className="min-w-0">
                    <span className="mb-2.5 block text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green sm:text-sm">
                      {faq.category}
                    </span>

                    <span className="block text-lg font-extrabold leading-7 text-forest-950 sm:text-xl sm:leading-8 lg:text-2xl lg:leading-9">
                      {faq.question}
                    </span>
                  </span>

                  <span
                    className={cn(
                      "mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition sm:h-11 sm:w-11",
                      active
                        ? "bg-forest-900 text-white"
                        : "bg-soft-sage text-brand-green",
                    )}
                  >
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform duration-300 sm:h-6 sm:w-6",
                        active && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                  </span>
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    active
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-line/70 px-5 py-6 sm:px-7 sm:py-7 lg:px-9 lg:py-8">
                      <p className="max-w-4xl text-base leading-8 text-muted sm:text-lg sm:leading-9 lg:text-[1.2rem] lg:leading-9">
                        {faq.answer}
                      </p>

                      {faq.action && (
                        <div className="mt-6">
                          <ButtonLink
                            href={faq.action.href}
                            target={faq.action.target}
                            variant="primary"
                            arrow
                          >
                            {faq.action.label}
                          </ButtonLink>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })
        ) : (
          <div className="rounded-[1.75rem] border border-line bg-white px-6 py-14 text-center shadow-sm sm:py-16">
            <p className="text-lg font-extrabold text-forest-950 sm:text-xl">
              No questions found
            </p>

            <p className="mt-2 text-base leading-7 text-muted sm:text-lg">
              Try changing your search or selecting a different category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
