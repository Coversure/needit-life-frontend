import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { footerNavigation, siteConfig } from "@/lib/site";

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
              Proudly New Zealand
            </p>
          </div>
          <p className="mt-6 max-w-md text-sm md:text-lg leading-7 text-white/70">
            Local support. Real people. Real cover.
          </p>
          <div className="mt-7 space-y-3 text-sm font-semibold text-white/80">
            <a
              className="flex items-center gap-3 hover:text-white"
              href={`tel:${siteConfig.newBusinessPhone.replace(/\s/g, "")}`}
            >
              <Phone className="h-4 w-4 text-brand-lime" />{" "}
              {siteConfig.newBusinessPhone}
            </a>
            <a
              className="flex items-center gap-3 hover:text-white"
              href={`mailto:${siteConfig.email}`}
            >
              <Mail className="h-4 w-4 text-brand-lime" /> {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <FooterColumn title="NeedIt Life" links={footerNavigation.cover} />
          <FooterColumn title="NeedIt Life" links={footerNavigation.company} />
          <FooterColumn title="Resources" links={footerNavigation.resources} />
          <FooterColumn title="Support" links={footerNavigation.support} />
          <FooterColumn title="Legal" links={footerNavigation.legal} />
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-xs leading-6 text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} NeedIt Life. All rights reserved.</p>
          <p className="max-w-3xl md:text-right">
            Prototype content for review. Product eligibility, exclusions,
            waiting periods and benefits are subject to the approved policy
            wording. NeedIt Life branding and legal entity details must be
            confirmed before launch.
          </p>
        </Container>
      </div>
    </footer>
  );
}
