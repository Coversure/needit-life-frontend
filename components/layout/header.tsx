"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";
import { mainNavigation } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/95 backdrop-blur-xl shadow-md">
      <Container className="flex min-h-20 items-center justify-between gap-5">
        <Link href="/" aria-label="NeedIt Life home" className="shrink-0">
          <Image
            src="/images/needit-life-logo.png"
            alt="NeedIt Life"
            width={210}
            height={70}
            priority
            className="h-auto w-[150px] sm:w-[170px]"
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {mainNavigation.map((item) => {
            const isHashLink = item.href.includes("#");
            const basePath = item.href.split("#")[0] || "/";

            const active = !isHashLink
              ? basePath === "/"
                ? pathname === "/"
                : pathname === basePath || pathname.startsWith(`${basePath}/`)
              : false;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative py-7 text-sm font-bold text-ink transition hover:text-brand-green",
                  active && "text-forest-900",
                )}
              >
                {item.label}

                {active && (
                  <span className="absolute inset-x-0 bottom-4 mx-auto h-0.5 w-7 rounded-full bg-brand-green" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink
            href="/book-an-appointment"
            className="px-6 text-md md:text-base font-semibold"
            // className="inline-flex min-h-12 items-center gap-2 rounded-2xl border border-line px-4 text-sm md:text-base font-bold text-forest-900 transition hover:border-brand-green hover:bg-brand-sage"
          >
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            Book an Appointment
          </ButtonLink>
          {/* <ButtonLink
            href="/get-a-quote"
            className="px-6 text-md md:text-base font-semibold"
          >
            Get a Quote
          </ButtonLink> */}
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-forest-900 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-line bg-white lg:hidden">
          <Container className="py-5">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {mainNavigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-bold text-forest-900 hover:bg-brand-sage"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 grid gap-3 border-t border-line pt-4 sm:grid-cols-2">
              <Link
                href="/book-an-appointment"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-line px-4 font-extrabold text-forest-900"
              >
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Book an Appointment
              </Link>
              <ButtonLink href="/get-a-quote" className="w-full" arrow>
                Get a Quote
              </ButtonLink>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
