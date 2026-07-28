import type { Lead } from "@/types";
import { supabase } from "@/lib/supabase/client";

type ApiLead = {
  id: string;
  referenceNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContactMethod: "phone" | "email";
  preferredContactTime: string;
  ageRange: string;
  nzResident: boolean;
  previouslyDeclined: boolean | null;
  coverRange: string;
  source: string;
  landingPage: string;
  utmSource?: string | null;
  utmMedium?: string | null;
  utmCampaign?: string | null;
  createdAt: string;
  consent?: {
    privacyAcceptedAt?: string;
    contactConsentAt?: string;
    marketingConsent?: boolean;
    consentVersion?: string;
  };
};

export type LeadSummary = {
  total: number;
  today: number;
  thisWeek: number;
  thisMonth: number;
};

function getApiUrl() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("Missing NEXT_PUBLIC_API_URL.");
  }

  return apiUrl;
}

async function getAccessToken() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.access_token) {
    throw new Error("You need to sign in first.");
  }

  return session.access_token;
}

function mapLead(lead: ApiLead): Lead {
  return {
    id: lead.id,
    referenceNumber: lead.referenceNumber,
    firstName: lead.firstName,
    lastName: lead.lastName,
    email: lead.email,
    phone: lead.phone,
    preferredContactMethod:
      lead.preferredContactMethod === "email" ? "Email" : "Phone",
    preferredContactTime: lead.preferredContactTime,
    ageRange: lead.ageRange,
    nzResident: lead.nzResident,
    previouslyDeclined: Boolean(lead.previouslyDeclined),
    coverRange: lead.coverRange,
    source: lead.source,
    landingPage: lead.landingPage,
    utmSource: lead.utmSource ?? undefined,
    utmMedium: lead.utmMedium ?? undefined,
    utmCampaign: lead.utmCampaign ?? undefined,
    privacyAcceptedAt: lead.consent?.privacyAcceptedAt ?? lead.createdAt,
    contactConsentAt: lead.consent?.contactConsentAt ?? lead.createdAt,
    marketingConsent: lead.consent?.marketingConsent ?? false,
    consentVersion: lead.consent?.consentVersion ?? "Not supplied",
    createdAt: lead.createdAt,
  };
}

async function authedFetch<T>(path: string): Promise<T> {
  const token = await getAccessToken();

  const response = await fetch(`${getApiUrl()}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(result?.error?.message ?? "Unable to load admin data.");
  }

  return result as T;
}

export async function getAdminLeads() {
  const result = await authedFetch<{
    data: {
      items: ApiLead[];
      pagination: {
        page: number;
        pageSize: number;
        totalItems: number;
        totalPages: number;
      };
    };
  }>("/admin/leads?page=1&pageSize=100&sort=newest");

  return {
    leads: result.data.items.map(mapLead),
    pagination: result.data.pagination,
  };
}

export async function getAdminLead(id: string) {
  const result = await authedFetch<{ data: ApiLead }>(`/admin/leads/${id}`);

  return mapLead(result.data);
}

export async function getLeadSummary() {
  const result = await authedFetch<{ data: LeadSummary }>(
    "/admin/leads/summary",
  );

  return result.data;
}
