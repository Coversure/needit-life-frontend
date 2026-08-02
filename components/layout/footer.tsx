import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { Container } from "@/components/ui/container";
import { footerNavigation } from "@/lib/site";
import { ButtonLink } from "../ui/button";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h2 className="text-sm font-extrabold uppercase tracking-[0.16em] text-white/55">
        {title}
      </h2>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className="text-sm font-semibold text-white/80 transition hover:text-white"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-forest-950 text-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.25fr_2fr]">
        <div>
          <Image
            src="/images/needit-life-logo.png"
            alt="NeedIt Life"
            width={220}
            height={72}
            className="h-auto w-44 brightness-0 invert"
          />
          <div>
            <p className="mt-6 max-w-md text-sm md:text-lg leading-7 text-white/70">
              Proudly New Zealand Owned & Operated
            </p>
          </div>
          <p className="mt-6 max-w-md text-sm md:text-lg leading-7 text-white/70">
            Local support. Real people. Real cover.
          </p>
          <div className="mt-7 flex flex-col gap-3 w-fit">
            <ButtonLink
              href="/book-an-appointment"
              className="px-6 text-md md:text-base font-semibold hover:bg-soft-sage hover:text-forest-950"
            >
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Book an Appointment
            </ButtonLink>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
          <FooterColumn title="NeedIt Life" links={footerNavigation.cover} />
          <FooterColumn title="Support" links={footerNavigation.support} />
          <FooterColumn title="Legal" links={footerNavigation.legal} />
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-8 text-xs leading-6 text-white/55">
          <p className="max-w-8xl md:text-left">
            Need It Life insurance products are underwritten and issued by{" "}
            <span>
              <a
                href="https://momentumlife.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/80 transition hover:text-white"
              >
                Momentum Life Limited
              </a>
            </span>{" "}
            (NZBN 9429041981658, FSP472286) and promoted and distributed by{" "}
            <span>
              <a
                href="https://coversure.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/80 transition hover:text-white"
              >
                Coversure Financial Services Limited
              </a>
            </span>{" "}
            (NZBN 9429047688780, FSP722232). ~ The information on this website
            is intended as general information only and does not take into
            account your personal objectives, financial situation, or needs. It
            is not personalised financial advice. ~ Before purchasing any
            insurance product, please read the relevant{" "}
            <span>
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/80 transition hover:text-white"
              >
                Policy Document
              </a>
            </span>{" "}
            , including the terms, conditions, exclusions, limitations, and
            premiums, to determine whether the cover is right for you. ~ If you
            would like personalised financial advice, you can request this
            through our website. With your consent, your details may be referred
            to a licensed Financial Adviser at Coversure. ~ Pease refer to our{" "}
            <span>
              <a
                href="/financial-advice-disclosure"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/80 transition hover:text-white"
              >
                Disclosure Statement
              </a>
            </span>{" "}
            ,{" "}
            <span>
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/80 transition hover:text-white"
              >
                Privacy Policy
              </a>
            </span>{" "}
            , and{" "}
            <span>
              <a
                href="/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/80 transition hover:text-white"
              >
                Terms of Use
              </a>
            </span>{" "}
            for further information.
          </p>
          <p className="font-bold text-white/80 pt-5">
            © {new Date().getFullYear()} NeedIt Life. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
