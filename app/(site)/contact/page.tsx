import type { Metadata } from "next";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact NeedIt Life about a new Quick Life enquiry, an existing policy, a claim or a complaint.",
};

const contacts = [
  { title: "New Quick Life enquiries", phone: siteConfig.newBusinessPhone, text: siteConfig.hours },
  { title: "Existing customers", phone: siteConfig.existingCustomerPhone, text: siteConfig.hours },
  { title: "Claims", phone: siteConfig.existingCustomerPhone, text: "Select the claims option when prompted." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact NeedIt Life" title="Talk with the right team" description="Choose the contact option that matches your enquiry, or send a message using the form below." />
      <section className="section-space bg-soft-sage">
        <Container className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-4">
            {contacts.map((contact) => (
              <article key={contact.title} className="rounded-[1.6rem] border border-line bg-white p-6">
                <Phone className="h-6 w-6 text-brand-green" />
                <h2 className="mt-4 text-lg font-extrabold text-forest-950">{contact.title}</h2>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="mt-2 block text-xl font-extrabold text-brand-green">{contact.phone}</a>
                <p className="mt-2 text-sm leading-6 text-muted">{contact.text}</p>
              </article>
            ))}
            <article className="rounded-[1.6rem] bg-forest-950 p-6 text-white">
              <Mail className="h-6 w-6 text-brand-lime" />
              <h2 className="mt-4 text-lg font-extrabold">General email</h2>
              <a href={`mailto:${siteConfig.email}`} className="mt-2 block break-all text-base font-extrabold text-brand-lime">{siteConfig.email}</a>
              <p className="mt-3 text-sm leading-6 text-white/65">Do not include detailed medical information in an unencrypted email.</p>
            </article>
            <p className="flex gap-2 px-2 text-xs leading-5 text-muted"><ShieldCheck className="h-4 w-4 shrink-0 text-brand-green" />Contact details are configurable and should be verified before launch.</p>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
