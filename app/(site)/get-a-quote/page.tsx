import type { Metadata } from "next";
import { CheckCircle2, LockKeyhole, Phone } from "lucide-react";
import { QuoteForm } from "@/components/forms/quote-form";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a NeedIt Life quote",
  description:
    "Share a few details and ask the NeedIt Life team about life cover.",
};

export default function GetAQuotePage() {
  return (
    <section className="section-space bg-soft-sage">
      <Container className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-green">
            NeedIt Life enquiry
          </p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-[-0.055em] text-forest-950">
            Start with a few simple details
          </h1>
          <p className="mt-6 text-base leading-8 text-muted">
            This form is designed to collect enough information for the team to
            contact you. It does not ask for detailed medical information or
            calculate a guaranteed premium.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Takes only a few minutes",
              "No detailed medical history in this enquiry form",
              "Your details are only visible to authorised staff",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm font-extrabold text-forest-900"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-green" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-line bg-white p-5">
            <p className="flex items-center gap-2 text-sm font-extrabold text-forest-950">
              <Phone className="h-4 w-4 text-brand-green" /> Prefer to speak
              with someone?
            </p>
            <a
              className="mt-2 block text-xl font-extrabold text-brand-green"
              href={`tel:${siteConfig.newBusinessPhone.replace(/\s/g, "")}`}
            >
              {siteConfig.newBusinessPhone}
            </a>
            <p className="mt-1 text-xs font-semibold text-muted">
              {siteConfig.hours}
            </p>
          </div>
          <p className="mt-5 flex gap-2 text-xs leading-5 text-muted">
            <LockKeyhole className="h-4 w-4 shrink-0 text-brand-green" />
            Your data is protected and will only be used to respond to your
            enquiry.
          </p>
        </div>
        <QuoteForm />
      </Container>
    </section>
  );
}
