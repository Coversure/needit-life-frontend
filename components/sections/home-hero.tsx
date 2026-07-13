import Image from "next/image";
import { Calendar, Star, Heart, Leaf, CircleDollarSign } from "lucide-react";
import { NewZealandIcon } from "@/components/ui/Icons";
import { SimpleApplicationIcon } from "@/components/ui/Icons";
import { ButtonLink } from "@/components/ui/button";

const panelItems = [
  { icon: CircleDollarSign, label: "Cover up to $300,000" },
  {
    icon: Calendar,
    label: "Pre-existing conditions covered after 2 years",
  },
  { icon: NewZealandIcon, label: "NZ based support" },
  { icon: SimpleApplicationIcon, label: "Simple application" },
  { icon: Heart, label: "No judgement. Real cover." },
];

function TrustpilotRating({ responsive = false }: { responsive?: boolean }) {
  return (
    <div
      className={
        responsive
          ? "mt-12 flex flex-wrap items-center gap-x-3 gap-y-2"
          : "mt-10 flex flex-wrap items-center gap-x-4 gap-y-2"
      }
      aria-label="Rated 4.8 out of 5 on Trustpilot"
    >
      <span
        className={
          responsive
            ? "text-sm font-semibold text-forest-950"
            : "text-[15px] font-semibold text-forest-950"
        }
      >
        Rated 4.8 out of 5
      </span>

      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={
              responsive
                ? "flex size-6 items-center justify-center rounded bg-brand-green"
                : "flex size-7 items-center justify-center rounded bg-brand-green"
            }
          >
            <Star
              className={
                responsive
                  ? "size-4 fill-white text-white"
                  : "size-[18px] fill-white text-white"
              }
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </span>
        ))}
      </div>

      <div className="flex items-center gap-1">
        <Star
          className={
            responsive
              ? "size-5 fill-brand-green text-brand-green"
              : "size-6 fill-brand-green text-brand-green"
          }
          aria-hidden="true"
        />

        <span
          className={
            responsive
              ? "text-base font-semibold text-forest-950"
              : "text-[18px] font-semibold text-forest-950"
          }
        >
          Trustpilot
        </span>
      </div>
    </div>
  );
}

function VerticalBenefitsPanel({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-4xl bg-forest-900/96 px-5 py-7 text-white shadow-2xl shadow-white/60 ${className}`}
    >
      <Leaf className="mb-3 h-8 w-8 text-brand-lime" aria-hidden="true" />

      <div className="divide-y divide-brand-green/80">
        {panelItems.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-4 py-3 first:pt-0 last:pb-0"
          >
            <Icon className="h-8 w-8 shrink-0 text-white" aria-hidden="true" />

            <span className="text-sm leading-5">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResponsiveHeroContent() {
  return (
    <div className="relative z-10 bg-white px-5 py-9 sm:px-8 sm:py-11 md:px-10 md:py-12 lg:flex lg:min-h-[680px] lg:w-[52%] lg:flex-col lg:justify-center lg:bg-transparent lg:bg-[linear-gradient(to_right,#fff_0%,#fff_82%,rgba(255,255,255,0.96)_87%,rgba(255,255,255,0.78)_91%,rgba(255,255,255,0.5)_95%,rgba(255,255,255,0.2)_98%,transparent_100%)] lg:px-8 lg:py-10 min-[1200px]:min-h-[740px] min-[1200px]:w-[50%] min-[1200px]:px-10">
      <div className="w-full">
        <div className="mb-3 flex items-center gap-3 md:gap-4">
          <span className="h-0.5 w-9 shrink-0 rounded-full bg-brand-green md:w-11" />

          <p className="text-sm font-bold text-forest-900 md:text-base">
            Life cover when others say no.
          </p>
        </div>

        <h1 className="text-balance text-[2.75rem] font-bold leading-[0.98] tracking-[-0.055em] text-forest-950 min-[420px]:text-5xl md:text-6xl lg:text-[3.25rem] min-[1200px]:text-[3.65rem]">
          Life cover <br />
          when others <br />
          <span className="text-brand-green">say no.</span>
        </h1>

        <h2 className="mt-6 text-xl font-bold leading-tight text-ink md:mt-7 md:text-2xl lg:text-[1.2rem] min-[1200px]:text-[1.35rem]">
          You may still qualify for life cover.
        </h2>

        <p className="mt-3 max-w-2xl text-[15px] leading-6 text-gray-700 sm:text-base md:mt-4 md:text-lg md:leading-7 lg:max-w-[450px] lg:text-[15px] lg:leading-6 min-[1200px]:max-w-[500px] min-[1200px]:text-base">
          NeedIt Life is designed for people with pre-existing conditions,
          previous declines, or a complicated medical history. No judgement.
          Real cover. Peace of mind for your family.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink
            href="/get-a-quote"
            className="text-md min-w-48 font-semibold md:text-lg"
            arrow
          >
            Get a Quote
          </ButtonLink>

          <ButtonLink
            href="/#how-it-works"
            variant="secondary"
            className="text-md min-w-48 font-semibold md:text-lg"
          >
            How It Works
          </ButtonLink>
        </div>

        <TrustpilotRating responsive />
      </div>
    </div>
  );
}

export function HomeHero() {
  return (
    <>
      {/* Mobile, tablet, and compact desktop layout */}
      <section className="relative overflow-hidden bg-white shadow-md min-[1440px]:hidden">
        <ResponsiveHeroContent />

        <div className="relative h-[320px] overflow-hidden min-[420px]:h-[360px] sm:h-[410px] md:h-[500px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[55%] min-[1200px]:w-[57%]">
          <Image
            src="/images/family-hero-cropped.webp"
            alt="A family spending time together near the New Zealand coast"
            priority
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 100vw, (max-width: 1199px) 55vw, 57vw"
            className="origin-center scale-[1.05] object-cover object-[60%_center] md:scale-[1.04] md:object-[58%_45%] lg:origin-right lg:scale-[1.03] lg:object-[40%_center] min-[1200px]:scale-[1.06] min-[1200px]:object-[65%_center]"
          />

          {/* Mobile and tablet portrait overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-white/15 via-transparent to-forest-950/15 lg:hidden" />

          {/* Compact desktop overlay */}
          <div className="absolute inset-0 hidden bg-[linear-gradient(to_right,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.55)_12%,rgba(255,255,255,0.12)_25%,transparent_45%)] lg:block" />
        </div>

        {/* Compact desktop benefits */}
        {/* <VerticalBenefitsPanel className="absolute right-4 top-1/2 z-20 hidden w-[180px] -translate-y-1/2 lg:block min-[1200px]:right-6 min-[1200px]:w-[200px]" /> */}
      </section>

      {/* Large desktop layout — unchanged from 1440px upward */}
      <section className="relative hidden h-screen overflow-hidden bg-black/5 shadow-md min-[1440px]:block">
        <div className="flex h-full w-full flex-row items-center justify-between bg-white">
          <Image
            src="/images/family-hero.png"
            alt="A family spending time together near the New Zealand coast"
            priority
            fill
            sizes="55vw"
            className="origin-right scale-[1.25] object-cover object-right"
          />

          <div className="z-10 flex h-full w-[40%] flex-col items-center gap-4 bg-linear-to-r from-white via-white to-white/60">
            <div className="w-full py-10 pr-2 pl-20">
              <div className="mb-3 flex items-center gap-4">
                <span className="h-0.5 w-11 rounded-full bg-brand-green" />

                <p className="text-sm font-bold text-forest-900 md:text-[17px]">
                  Life cover when others say no.
                </p>
              </div>

              <h1 className="text-balance text-5xl leading-[0.98] font-bold tracking-[-0.055em] text-forest-950 sm:text-6xl lg:text-[4.4rem]">
                Life cover <br />
                when others <br />
                <span className="text-brand-green">say no.</span>
              </h1>

              <h2 className="mt-7 text-xl font-bold text-ink sm:text-2xl">
                You may still qualify for life cover.
              </h2>

              <p className="mt-4 w-full text-base leading-6 text-gray-700 sm:text-lg">
                NeedIt Life is designed for people with pre-existing conditions,
                previous declines, or a complicated medical history. No
                judgement. Real cover. Peace of mind for your family.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  href="/get-a-quote"
                  className="text-md min-w-48 font-semibold md:text-lg"
                  arrow
                >
                  Get a Quote
                </ButtonLink>

                <ButtonLink
                  href="/#how-it-works"
                  variant="secondary"
                  className="text-md min-w-48 font-semibold md:text-lg"
                >
                  How It Works
                </ButtonLink>
              </div>

              <TrustpilotRating />
            </div>
          </div>

          <div className="flex h-full w-[60%] flex-col items-center gap-4">
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.45)_3%,rgba(255,255,255,0.1)_8%,transparent_100%)]" />

              <VerticalBenefitsPanel className="absolute right-15 bottom-5 lg:top-1/2 lg:bottom-auto lg:w-[210px] lg:-translate-y-1/2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
