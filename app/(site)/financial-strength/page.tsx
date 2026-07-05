import type { Metadata } from "next";
import { BarChart3, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = { title: "Financial Strength", description: "Financial strength and insurer information for NeedIt Life." };

export default function FinancialStrengthPage() {
  return (
    <><PageHero eyebrow="Financial strength" title="Understanding the insurer behind the policy" description="Financial strength information should identify the legal insurer, rating agency, rating scale and date of the current rating." /><section className="section-space bg-white"><Container className="grid gap-6 lg:grid-cols-2"><article className="rounded-[2rem] bg-forest-950 p-8 text-white"><ShieldCheck className="h-9 w-9 text-brand-lime" /><h2 className="mt-5 text-3xl font-extrabold tracking-[-0.04em]">Legal insurer</h2><p className="mt-4 text-sm leading-7 text-white/70">This prototype currently treats Momentum Life Limited as the expected legal entity behind the NeedIt Life brand. Confirm the insurer name and required statutory wording before publication.</p></article><article className="rounded-[2rem] border border-line bg-soft-sage p-8"><BarChart3 className="h-9 w-9 text-brand-green" /><h2 className="mt-5 text-3xl font-extrabold tracking-[-0.04em] text-forest-950">Current rating</h2><p className="mt-4 text-sm leading-7 text-muted">The exact rating, rating agency, scale and solvency disclosure are deliberately not hard-coded. Payload should store the reviewed values and a visible last-updated date.</p></article></Container></section></>
  );
}
