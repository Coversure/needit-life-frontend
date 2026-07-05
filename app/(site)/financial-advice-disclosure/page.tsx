import type { Metadata } from "next";
import { AlertTriangle, FileText } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = { title: "Financial Advice Disclosure", description: "Financial advice disclosure information for NeedIt Life." };

export default function FinancialAdviceDisclosurePage() {
  return (
    <><PageHero eyebrow="Disclosure information" title="Financial advice disclosure" description="Visitors should be able to understand who provides advice, how the provider is paid and how to raise a concern." /><section className="section-space bg-soft-sage"><Container className="max-w-4xl"><div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-7 text-amber-950"><AlertTriangle className="h-7 w-7" /><h2 className="mt-4 text-2xl font-extrabold">Approved disclosure content required</h2><p className="mt-3 text-sm leading-7">The frontend intentionally does not invent FSP numbers, licence details, commissions, conflicts or adviser responsibilities. Replace this panel with the current approved disclosure statement before launch.</p></div><div className="mt-6 rounded-[2rem] border border-line bg-white p-7"><FileText className="h-7 w-7 text-brand-green" /><h2 className="mt-4 text-2xl font-extrabold text-forest-950">Planned CMS fields</h2><ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-muted"><li>Financial advice provider and licence details</li><li>Nature and scope of advice</li><li>Fees, commissions and other incentives</li><li>Conflicts of interest and how they are managed</li><li>Duties, complaints process and dispute resolution</li><li>Downloadable approved PDF and last-updated date</li></ul></div></Container></section></>
  );
}
