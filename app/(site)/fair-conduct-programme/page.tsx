import type { Metadata } from "next";
import { CheckCircle2, HandHeart, Scale, Shield } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = { title: "Fair Conduct Programme", description: "How NeedIt Life intends to support fair customer outcomes." };

const principles = [
  { icon: HandHeart, title: "Treat customers fairly", text: "Communications, service and decisions should consider the interests of customers throughout the relationship." },
  { icon: Scale, title: "Design and distribute responsibly", text: "Products should be offered to people for whom they may be appropriate, with limitations explained clearly." },
  { icon: Shield, title: "Support vulnerable customers", text: "Processes should recognise that illness, bereavement, financial pressure or accessibility needs can affect how support is provided." },
];

export default function FairConductPage() {
  return (
    <><PageHero eyebrow="Fair conduct" title="A programme focused on fair customer outcomes" description="The final Fair Conduct Programme content should reflect the approved governance, product, service and monitoring arrangements of the licensed entity." /><section className="section-space bg-soft-sage"><Container><div className="grid gap-5 md:grid-cols-3">{principles.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-[1.75rem] border border-line bg-white p-7"><Icon className="h-8 w-8 text-brand-green" /><h2 className="mt-5 text-xl font-extrabold text-forest-950">{title}</h2><p className="mt-3 text-sm leading-7 text-muted">{text}</p></article>)}</div><div className="mt-8 flex gap-4 rounded-[1.75rem] bg-forest-950 p-7 text-white"><CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-brand-lime" /><div><h2 className="text-xl font-extrabold">Governance content to confirm</h2><p className="mt-2 text-sm leading-7 text-white/70">Before launch, add the approved explanation of oversight, staff training, product review, complaints monitoring, claims practices, remediation and reporting.</p></div></div></Container></section></>
  );
}
