import { CalendarDays, CalendarRange, Inbox, Users } from "lucide-react";
import { LeadsTable } from "@/components/admin/leads-table";
import { leadSummary, mockLeads } from "@/lib/mock-leads";

const cards = [
  { label: "Total leads", value: leadSummary.total, icon: Users },
  { label: "Received today", value: leadSummary.today, icon: Inbox },
  { label: "This week", value: leadSummary.thisWeek, icon: CalendarDays },
  { label: "This month", value: leadSummary.thisMonth, icon: CalendarRange },
];

export default function LeadsPage() {
  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm font-extrabold uppercase tracking-[0.15em] text-brand-green">Read-only records</p><h1 className="mt-2 text-3xl font-extrabold tracking-[-0.04em] text-forest-950">Website leads</h1><p className="mt-2 text-sm leading-6 text-muted">Review enquiries without opening or editing the Supabase database.</p></div><span className="rounded-full border border-brand-green/20 bg-brand-sage px-4 py-2 text-xs font-extrabold text-forest-900">Mock frontend data</span></div>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{cards.map(({ label, value, icon: Icon }) => <article key={label} className="rounded-[1.4rem] border border-line bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-sage text-brand-green"><Icon className="h-5 w-5" /></span><span className="text-3xl font-extrabold tracking-[-0.04em] text-forest-950">{value}</span></div><p className="mt-4 text-sm font-extrabold text-muted">{label}</p></article>)}</div>
      <div className="mt-7"><LeadsTable leads={mockLeads} /></div>
    </div>
  );
}
