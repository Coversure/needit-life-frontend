"use client";

import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { Lead } from "@/types";
import { formatNzDate } from "@/lib/utils";

export function LeadsTable({ leads }: { leads: Lead[] }) {
  const [query, setQuery] = useState("");
  const [method, setMethod] = useState("All");
  const [declined, setDeclined] = useState("All");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return leads.filter((lead) => {
      const matchesQuery = !normalized || `${lead.firstName} ${lead.lastName} ${lead.email} ${lead.phone} ${lead.referenceNumber}`.toLowerCase().includes(normalized);
      const matchesMethod = method === "All" || lead.preferredContactMethod === method;
      const matchesDeclined = declined === "All" || (declined === "Yes" ? lead.previouslyDeclined : !lead.previouslyDeclined);
      return matchesQuery && matchesMethod && matchesDeclined;
    });
  }, [declined, leads, method, query]);

  return (
    <div className="rounded-[1.6rem] border border-line bg-white shadow-sm">
      <div className="grid gap-3 border-b border-line p-4 md:grid-cols-[1fr_auto_auto] md:p-5">
        <label className="relative block">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search name, email, phone or reference" className="min-h-11 w-full rounded-xl border border-line bg-[#f9fbfa] pl-11 pr-4 text-sm font-semibold focus:border-brand-green focus:ring-4 focus:ring-brand-green/10" />
        </label>
        <select value={method} onChange={(event) => setMethod(event.target.value)} className="min-h-11 rounded-xl border border-line bg-[#f9fbfa] px-4 text-sm font-bold text-forest-950"><option>All</option><option>Phone</option><option>Email</option></select>
        <select value={declined} onChange={(event) => setDeclined(event.target.value)} className="min-h-11 rounded-xl border border-line bg-[#f9fbfa] px-4 text-sm font-bold text-forest-950"><option>All</option><option value="Yes">Previously declined</option><option value="No">Not declined</option></select>
      </div>
      <div className="admin-table-scroll overflow-x-auto">
        <table className="w-full min-w-[960px] border-collapse text-left">
          <thead><tr className="border-b border-line bg-[#f9fbfa] text-xs font-extrabold uppercase tracking-[0.12em] text-muted"><th className="px-5 py-4">Submitted</th><th className="px-5 py-4">Lead</th><th className="px-5 py-4">Phone</th><th className="px-5 py-4">Cover</th><th className="px-5 py-4">Source</th><th className="px-5 py-4">Contact</th><th className="px-5 py-4">View</th></tr></thead>
          <tbody className="divide-y divide-line">
            {filtered.map((lead) => (
              <tr key={lead.id} className="text-sm hover:bg-soft-sage/60">
                <td className="whitespace-nowrap px-5 py-4"><p className="font-bold text-forest-950">{formatNzDate(lead.createdAt)}</p><p className="mt-1 text-xs font-semibold text-muted">{lead.referenceNumber}</p></td>
                <td className="px-5 py-4"><p className="font-extrabold text-forest-950">{lead.firstName} {lead.lastName}</p><p className="mt-1 text-xs font-semibold text-muted">{lead.email}</p></td>
                <td className="whitespace-nowrap px-5 py-4 font-semibold text-forest-950">{lead.phone}</td>
                <td className="whitespace-nowrap px-5 py-4 font-semibold text-forest-950">{lead.coverRange}</td>
                <td className="px-5 py-4"><span className="rounded-full bg-soft-sage px-3 py-1.5 text-xs font-extrabold text-forest-900">{lead.source}</span></td>
                <td className="px-5 py-4"><p className="font-bold text-forest-950">{lead.preferredContactMethod}</p><p className="mt-1 text-xs font-semibold text-muted">{lead.preferredContactTime}</p></td>
                <td className="px-5 py-4"><Link href={`/admin/leads/${lead.id}`} className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line text-forest-900 hover:border-brand-green hover:bg-brand-sage" aria-label={`View ${lead.firstName} ${lead.lastName}`}><ArrowUpRight className="h-4 w-4" /></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
        {!filtered.length ? <p className="p-10 text-center text-sm font-semibold text-muted">No leads match the selected filters.</p> : null}
      </div>
      <div className="flex items-center justify-between border-t border-line px-5 py-4 text-xs font-bold text-muted"><span>Showing {filtered.length} mock leads</span><span>Pagination will be API-driven</span></div>
    </div>
  );
}
