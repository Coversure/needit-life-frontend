import type { Metadata } from "next";
import { CalendarCheck2, Clock3, Mail, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Appointment Request Received",
  robots: { index: false, follow: false },
};

export default async function AppointmentRequestedPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;

  return (
    <section className="section-space bg-soft-sage">
      <Container className="max-w-3xl">
        <div className="rounded-[2.2rem] border border-line bg-white p-8 text-center shadow-xl sm:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-sage text-brand-green">
            <CalendarCheck2 className="h-10 w-10" />
          </div>

          <p className="mt-7 text-sm font-extrabold uppercase tracking-[0.18em] text-brand-green">
            Request received
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.045em] text-forest-950 sm:text-5xl">
            Your appointment request has been sent
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted">
            A NeedIt Life adviser will review your preferred date, time and
            meeting method, then contact you to confirm the appointment.
          </p>

          {ref ? (
            <p className="mx-auto mt-5 inline-flex rounded-full bg-soft-sage px-4 py-2 text-sm font-extrabold text-forest-900">
              Reference: {ref}
            </p>
          ) : null}

          <div className="mt-8 grid gap-4 text-left sm:grid-cols-3">
            <div className="rounded-2xl border border-line p-5">
              <Clock3 className="h-6 w-6 text-brand-green" />
              <h2 className="mt-4 font-extrabold text-forest-950">
                Confirmation
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                The requested date and time are confirmed only after the adviser
                contacts you.
              </p>
            </div>

            <div className="rounded-2xl border border-line p-5">
              <Mail className="h-6 w-6 text-brand-green" />
              <h2 className="mt-4 font-extrabold text-forest-950">
                Teams appointments
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                A Microsoft Teams link will be sent to the email address you
                provided.
              </p>
            </div>

            <div className="rounded-2xl border border-line p-5">
              <Phone className="h-6 w-6 text-brand-green" />
              <h2 className="mt-4 font-extrabold text-forest-950">
                Need help?
              </h2>
              {/* <a
                href={`tel:${siteConfig.newBusinessPhone.replace(/\s/g, "")}`}
                className="mt-2 block text-sm font-extrabold text-brand-green"
              >
                Call {siteConfig.newBusinessPhone}
              </a> */}
              <ButtonLink
                href="/contact"
                className="mt-4 px-6 text-md md:text-base font-semibold"
              >
                Contact Us
              </ButtonLink>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/" variant="secondary">
              Return home
            </ButtonLink>
            {/* <ButtonLink href="/needit-life-insurance" arrow>
              Learn about NeedIt Life
            </ButtonLink> */}
          </div>
        </div>
      </Container>
    </section>
  );
}
