import type { Metadata } from "next";
import { ClipboardList, FileCheck2, HeartHandshake, PhoneCall } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Claims",
  description: "How to notify the NeedIt Life claims team and what to expect during the claims process.",
};

const steps = [
  { icon: PhoneCall, title: "Contact the claims team", text: `Call ${siteConfig.existingCustomerPhone} or email ${siteConfig.claimsEmail} to let the team know you need to make a claim.` },
  { icon: ClipboardList, title: "Receive the correct forms", text: "A claims team member can explain which form and supporting documents apply to the claim." },
  { icon: FileCheck2, title: "Submit the information", text: "Return the completed form and requested evidence using the secure method provided by the claims team." },
];

export default function ClaimsPage() {
  return (
    <>
      <PageHero eyebrow="Claims support" title="We are here to guide you through the next steps" description="Making a claim can happen at a difficult time. Contact the team first so they can explain the process and the documents required." />
      <section className="section-space bg-soft-sage">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="rounded-[1.75rem] border border-line bg-white p-7">
                <div className="flex items-center justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sage text-brand-green"><Icon className="h-6 w-6" /></span><span className="text-sm font-extrabold text-brand-green">0{index + 1}</span></div>
                <h2 className="mt-6 text-xl font-extrabold text-forest-950">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-6 rounded-[2rem] bg-forest-950 p-8 text-white lg:grid-cols-[1fr_auto] lg:items-center sm:p-10">
            <div><HeartHandshake className="h-8 w-8 text-brand-lime" /><h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em]">Start by speaking with the claims team</h2><p className="mt-3 text-sm leading-7 text-white/70">Do not send sensitive medical or identity information to an unverified email address. Confirm the secure submission method with the claims team.</p></div>
            <div className="flex flex-col gap-3"><a href={`tel:${siteConfig.existingCustomerPhone.replace(/\s/g, "")}`} className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-brand-lime px-6 text-sm font-extrabold text-forest-950">Call {siteConfig.existingCustomerPhone}</a><ButtonLink href="/resources/documents-and-forms" variant="secondary" className="border-white/25 bg-transparent text-white hover:bg-white/10">View claim forms</ButtonLink></div>
          </div>
        </Container>
      </section>
    </>
  );
}
