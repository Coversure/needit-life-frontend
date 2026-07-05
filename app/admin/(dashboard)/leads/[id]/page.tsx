import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ClipboardCopy, Mail, Phone, ShieldCheck, UserRound } from "lucide-react";
import { mockLeads } from "@/lib/mock-leads";
import { formatNzDate } from "@/lib/utils";

function Detail({ label, value }: { label: string; value: React.ReactNode }) {
  return <div><dt className="text-xs font-extrabold uppercase tracking-[0.12em] text-muted">{label}</dt><dd className="mt-2 break-words text-sm font-extrabold text-forest-950">{value}</dd></div>;
}

export function generateStaticParams() {
  return mockLeads.map((lead) => ({ id: lead.id }));
}

export default async function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lead = mockLeads.find((item) => item.id === id);
  if (!lead) notFound();

  return (
    <div className="max-w-6xl">
      <Link href="/admin/leads" className="inline-flex items-center gap-2 text-sm font-extrabold text-forest-900 hover:text-brand-green"><ArrowLeft className="h-4 w-4" /> Back to leads</Link>
      <div className="mt-6 flex flex-col gap-4 rounded-[1.6rem] border border-line bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div><p className="text-xs font-extrabold uppercase tracking-[0.15em] text-brand-green">{lead.referenceNumber}</p><h1 className="mt-2 text-3xl font-extrabold tracking-[-0.04em] text-forest-950">{lead.firstName} {lead.lastName}</h1><p className="mt-2 text-sm font-semibold text-muted">Submitted {formatNzDate(lead.createdAt)}</p></div>
        <span className="inline-flex items-center gap-2 self-start rounded-full bg-brand-sage px-4 py-2 text-xs font-extrabold text-forest-900 sm:self-auto"><ShieldCheck className="h-4 w-4 text-brand-green" /> Read-only lead</span>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className="rounded-[1.6rem] border border-line bg-white p-6 shadow-sm"><div className="flex items-center gap-3"><UserRound className="h-6 w-6 text-brand-green" /><h2 className="text-xl font-extrabold text-forest-950">Contact information</h2></div><dl className="mt-6 grid gap-6 sm:grid-cols-2"><Detail label="Full name" value={`${lead.firstName} ${lead.lastName}`} /><Detail label="Email" value={<a href={`mailto:${lead.email}`} className="text-brand-green">{lead.email}</a>} /><Detail label="Phone" value={<a href={`tel:${lead.phone.replace(/\s/g, "")}`} className="text-brand-green">{lead.phone}</a>} /><Detail label="Preferred method" value={lead.preferredContactMethod} /><Detail label="Preferred time" value={lead.preferredContactTime} /><Detail label="Age range" value={lead.ageRange} /></dl><div className="mt-6 flex flex-wrap gap-3"><a href={`mailto:${lead.email}`} className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-line px-4 text-xs font-extrabold text-forest-900 hover:bg-soft-sage"><Mail className="h-4 w-4" /> Email</a><a href={`tel:${lead.phone.replace(/\s/g, "")}`} className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-line px-4 text-xs font-extrabold text-forest-900 hover:bg-soft-sage"><Phone className="h-4 w-4" /> Call</a><button type="button" className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-line px-4 text-xs font-extrabold text-forest-900 hover:bg-soft-sage"><ClipboardCopy className="h-4 w-4" /> Copy reference</button></div></section>

        <section className="rounded-[1.6rem] border border-line bg-white p-6 shadow-sm"><div className="flex items-center gap-3"><ShieldCheck className="h-6 w-6 text-brand-green" /><h2 className="text-xl font-extrabold text-forest-950">Quick Life enquiry</h2></div><dl className="mt-6 grid gap-6 sm:grid-cols-2"><Detail label="NZ resident" value={lead.nzResident ? "Yes" : "No"} /><Detail label="Previously declined" value={lead.previouslyDeclined ? "Yes" : "No"} /><Detail label="Cover range" value={lead.coverRange} /><Detail label="Source" value={lead.source} /><Detail label="Landing page" value={lead.landingPage} /><Detail label="Campaign" value={lead.utmCampaign ?? "Not supplied"} /></dl></section>

        <section className="rounded-[1.6rem] border border-line bg-white p-6 shadow-sm lg:col-span-2"><div className="flex items-center gap-3"><CheckCircle2 className="h-6 w-6 text-brand-green" /><h2 className="text-xl font-extrabold text-forest-950">Consent record</h2></div><dl className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"><Detail label="Privacy accepted" value={formatNzDate(lead.privacyAcceptedAt)} /><Detail label="Contact consent" value={formatNzDate(lead.contactConsentAt)} /><Detail label="Marketing consent" value={lead.marketingConsent ? "Yes" : "No"} /><Detail label="Consent version" value={lead.consentVersion} /></dl></section>
      </div>
    </div>
  );
}
