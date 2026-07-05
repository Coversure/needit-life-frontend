import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = { title: "Terms and Conditions", description: "Draft website terms for NeedIt Life." };

const sections = [
  ["About this website", "These terms are intended to govern the use of the NeedIt Life website. The final version must identify the correct legal owner, trading name, New Zealand registration details and contact information."],
  ["General information only", "Website content summarises products and services. It does not replace the policy wording, a formal quotation, disclosure information or personalised financial advice."],
  ["No guarantee of acceptance", "Submitting a form does not guarantee cover, a particular premium or payment of a future claim. Eligibility and claims are subject to the application, policy terms and applicable law."],
  ["Accuracy and availability", "The business should take reasonable care to keep information current but may update or remove website content. Material product changes should be reflected promptly and reviewed through the CMS publishing workflow."],
  ["Intellectual property", "Brand assets, text, layout and other website material may be protected by intellectual property rights. Reuse requires permission unless permitted by law."],
  ["External links", "Links to third-party websites are provided for convenience. The final terms should explain the limits of responsibility for third-party content and services."],
  ["Governing law", "The final terms should specify New Zealand law and the applicable courts, subject to any mandatory consumer protections."],
];

export default function TermsPage() {
  return (
    <><PageHero eyebrow="Website terms" title="Terms and conditions" description="This development draft must be replaced or approved by the business's legal and compliance reviewers before launch." /><Container className="max-w-4xl py-14 sm:py-20"><div className="space-y-10">{sections.map(([title, text]) => <section key={title}><h2 className="text-2xl font-extrabold tracking-[-0.03em] text-forest-950">{title}</h2><p className="mt-4 text-base leading-8 text-muted">{text}</p></section>)}</div></Container></>
  );
}
