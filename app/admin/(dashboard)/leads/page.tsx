"use client";

import { useEffect, useState } from "react";
import { CalendarDays, CalendarRange, Inbox, Users } from "lucide-react";
import { LeadsTable } from "@/components/admin/leads-table";
import {
  getAdminLeads,
  getLeadSummary,
  type LeadSummary,
} from "@/lib/admin-api";
import type { Lead } from "@/types";

const emptySummary: LeadSummary = {
  total: 0,
  today: 0,
  thisWeek: 0,
  thisMonth: 0,
};

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [summary, setSummary] = useState<LeadSummary>(emptySummary);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadAdminData() {
      try {
        setError("");

        const [leadsResult, summaryResult] = await Promise.all([
          getAdminLeads(),
          getLeadSummary(),
        ]);

        setLeads(leadsResult.leads);
        setSummary(summaryResult);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Unable to load admin data.",
        );
      } finally {
        setLoading(false);
      }
    }

    void loadAdminData();
  }, []);

  const cards = [
    { label: "Total leads", value: summary.total, icon: Users },
    { label: "Received today", value: summary.today, icon: Inbox },
    { label: "This week", value: summary.thisWeek, icon: CalendarDays },
    { label: "This month", value: summary.thisMonth, icon: CalendarRange },
  ];

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.15em] text-brand-green">
            Read-only records
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-[-0.04em] text-forest-950">
            Website leads
          </h1>
          <p className="mt-2 text-sm leading-6 text-muted">
            Review enquiries without opening or editing the Supabase database.
          </p>
        </div>

        <span className="rounded-full border border-brand-green/20 bg-brand-sage px-4 py-2 text-xs font-extrabold text-forest-900">
          Live API data
        </span>
      </div>

      {error ? (
        <p className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-800">
          {error}
        </p>
      ) : null}

      <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map(({ label, value, icon: Icon }) => (
          <article
            key={label}
            className="rounded-[1.4rem] border border-line bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-sage text-brand-green">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-3xl font-extrabold tracking-[-0.04em] text-forest-950">
                {loading ? "…" : value}
              </span>
            </div>
            <p className="mt-4 text-sm font-extrabold text-muted">{label}</p>
          </article>
        ))}
      </div>

      <div className="mt-7">
        {loading ? (
          <p className="rounded-[1.6rem] border border-line bg-white p-6 text-sm font-semibold text-muted shadow-sm">
            Loading live leads...
          </p>
        ) : (
          <LeadsTable leads={leads} />
        )}
      </div>
    </div>
  );
}
