export type Lead = {
  id: string;
  referenceNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContactMethod: "Phone" | "Email";
  preferredContactTime: string;
  ageRange: string;
  nzResident: boolean;
  previouslyDeclined: boolean;
  coverRange: string;
  source: string;
  landingPage: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  privacyAcceptedAt: string;
  contactConsentAt: string;
  marketingConsent: boolean;
  consentVersion: string;
  createdAt: string;
};

export type ResourceArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
  body: Array<{ heading: string; paragraphs: string[] }>;
};
