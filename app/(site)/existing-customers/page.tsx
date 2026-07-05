import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Headphones, LifeBuoy, ReceiptText } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Existing Customers",
  description: "Support information for existing Momentum Life and Quick Life customers during the NeedIt Life rebrand.",
};

const support = [
  { icon: LifeBuoy, title: "Make a claim", text: "Find claims contact details and understand the first steps.", href: "/claims" },
  { icon: FileText, title: "Documents and forms", text: "Access policy wording, beneficiary forms and other customer documents.", href: "/resources/documents-and-forms" },
  { icon: ReceiptText, title: "Raise a complaint", text: "Learn how the complaints process works and how to contact the team.", href: "/complaints" },
  { icon: Headphones, title: "Contact customer support", text: `Call ${siteConfig.existingCustomerPhone} during business hours.`, href: "/contact" },
];

export default function ExistingCustomersPage() {
  return (
    <>
      <PageHero eyebrow="Existing customers" title="Your policy support, all in one place" description="This page is designed to help current Momentum Life and Quick Life customers find support during the NeedIt Life rebrand." />
      <section className="section-space bg-white">
        <Container>
          <div className="rounded-[2rem] border border-brand-green/20 bg-brand-sage p-7 sm:p-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-green">Rebrand notice</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-forest-950">NeedIt Life and Momentum Life</h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-muted">This prototype assumes NeedIt Life will become the customer-facing brand for the same business. The final website must clearly state whether the legal insurer, policy terms, payment details and claims contacts remain unchanged. Existing customers should receive formally approved wording before the rebrand goes live.</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {support.map(({ icon: Icon, title, text, href }) => (
              <Link key={title} href={href} className="group flex items-start gap-5 rounded-[1.7rem] border border-line bg-warm-white p-6 transition hover:border-brand-green/40 hover:shadow-lg">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-sage text-brand-green"><Icon className="h-6 w-6" /></span>
                <span className="flex-1"><span className="block text-xl font-extrabold text-forest-950">{title}</span><span className="mt-2 block text-sm leading-6 text-muted">{text}</span></span>
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-brand-green" />
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
