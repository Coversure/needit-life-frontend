import type { Metadata } from "next";
import { CheckCircle2, Mail, MessageSquareText, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Complaints",
  description: "How to raise a complaint and what to expect from the NeedIt Life complaint-handling process.",
};

export default function ComplaintsPage() {
  return (
    <>
      <PageHero eyebrow="Complaints" title="Tell us when something has not gone right" description="A clear complaints process helps the business investigate concerns, explain decisions and identify where service should improve." />
      <section className="section-space bg-white">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-[2rem] bg-forest-950 p-8 text-white">
            <MessageSquareText className="h-9 w-9 text-brand-lime" />
            <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.04em]">How to contact us</h2>
            <a href={`tel:${siteConfig.existingCustomerPhone.replace(/\s/g, "")}`} className="mt-6 flex items-center gap-3 text-sm font-extrabold text-white"><Phone className="h-5 w-5 text-brand-lime" /> {siteConfig.existingCustomerPhone}</a>
            <a href={`mailto:${siteConfig.email}`} className="mt-4 flex items-center gap-3 break-all text-sm font-extrabold text-white"><Mail className="h-5 w-5 text-brand-lime" /> {siteConfig.email}</a>
            <p className="mt-6 text-sm leading-7 text-white/65">The final complaints email, postal address and external dispute resolution details must be confirmed from the approved complaints policy.</p>
          </aside>
          <div>
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-forest-950">What happens after you complain</h2>
            <div className="mt-7 space-y-5">
              {[
                ["We acknowledge your complaint", "The team should confirm that the complaint has been received and explain who is handling it."],
                ["We investigate the concern", "Relevant calls, documents, communications and policy information may be reviewed."],
                ["We explain the outcome", "You should receive a clear response, including reasons and any action the business proposes."],
                ["External resolution remains available", "The final page must name the applicable independent dispute resolution scheme and explain when it can be contacted."],
              ].map(([title, text]) => (
                <article key={title} className="flex gap-4 rounded-[1.5rem] border border-line bg-warm-white p-5"><CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-brand-green" /><div><h3 className="font-extrabold text-forest-950">{title}</h3><p className="mt-2 text-sm leading-7 text-muted">{text}</p></div></article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
