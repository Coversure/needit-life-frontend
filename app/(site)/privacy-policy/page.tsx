import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = { title: "Privacy Policy", description: "How NeedIt Life intends to collect, use, store and protect personal information." };

const sections = [
  ["Information we collect", "The website may collect contact details, general eligibility responses, enquiry preferences, consent records, campaign information and technical information needed to operate and secure the service. The public lead form should not request detailed medical histories."],
  ["Why we collect it", "Information may be used to respond to enquiries, explain Quick Life, administer customer support, prevent misuse, meet legal obligations and improve website performance."],
  ["Who may receive it", "Access should be limited to authorised staff, contracted service providers and other recipients permitted or required by law. The final policy must accurately identify any insurer, adviser, distributor or technology provider involved."],
  ["Storage and security", "The planned system uses an Express API and Supabase PostgreSQL for leads, with a custom read-only admin dashboard. Production locations, retention periods, backups and cross-border disclosures must be confirmed before launch."],
  ["Access and correction", "People may request access to personal information held about them and ask for corrections, subject to applicable New Zealand privacy law."],
  ["Marketing choices", "Consent to receive marketing should be optional and separate from consent to be contacted about a specific enquiry. Every commercial message should provide a working unsubscribe method."],
  ["Contacting the privacy officer", "The final policy must provide the verified privacy contact details and explain how a person can raise a privacy concern."],
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy policy" title="How personal information is handled" description="This is a structured draft for development and compliance review. It is not ready for publication as legal advice." />
      <Container className="max-w-4xl py-14 sm:py-20">
        <p className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm font-semibold leading-7 text-amber-950">Draft status: the final privacy policy must be reviewed against the live data flow, service providers, legal entity, retention rules and New Zealand privacy requirements.</p>
        <div className="mt-10 space-y-10">{sections.map(([title, text]) => <section key={title}><h2 className="text-2xl font-extrabold tracking-[-0.03em] text-forest-950">{title}</h2><p className="mt-4 text-base leading-8 text-muted">{text}</p></section>)}</div>
      </Container>
    </>
  );
}
