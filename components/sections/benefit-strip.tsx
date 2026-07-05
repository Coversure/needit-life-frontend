import { CalendarDays, FileText, Heart, CircleDollarSign } from "lucide-react";
import { NewZealandIcon } from "../ui/Icons";

const benefits = [
  {
    icon: CircleDollarSign,
    title: "Cover up to $300,000",
    text: "Financial protection for your loved ones.",
  },
  {
    icon: CalendarDays,
    title: "Pre-existing conditions covered after 2 years",
    text: "We cover many conditions after a short waiting period.",
  },
  {
    icon: FileText,
    title: "Simple application",
    text: "Quick, straightforward and 100% online.",
  },
  {
    icon: Heart,
    title: "Affordable premiums",
    text: "Competitive rates that fit your budget.",
  },
  {
    icon: NewZealandIcon,
    title: "NZ based support",
    text: "Local team, here when you need us.",
  },
];

export function BenefitStrip() {
  return (
    <div className="relative z-20 -mt-7 px-4 pb-8 sm:px-10 lg:-mt-8">
      <div className="grid grid-responsive-two overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-lg">
        {benefits.map(({ icon: Icon, title, text }, index) => (
          <article
            key={title}
            className="relative flex gap-2 border-b border-line p-4 last:border-b-0 sm:border-b-0 sm:p-6 lg:px-5 lg:py-5"
          >
            {index > 0 ? (
              <span className="absolute left-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-line lg:block" />
            ) : null}

            <div className="flex flex-row items-center gap-4">
              <Icon
                className="h-9 w-9 shrink-0 text-brand-green sm:h-10 sm:w-10 md:h-12 md:w-12"
                strokeWidth={1.8}
                aria-hidden="true"
              />

              <div className="flex min-w-0 flex-col">
                <h3 className="text-[15px] font-extrabold leading-5 text-forest-950 sm:text-base md:text-lg">
                  {title}
                </h3>

                <p className="mt-1.5 text-sm md:text-[16px] lg:text-base leading-5 text-muted sm:mt-2 sm:leading-6">
                  {text}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
