import type { Metadata } from "next";
import {
  Building2,
  CalendarCheck2,
  Clock3,
  Home,
  Laptop2,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Request an appointment with a financial adviser to discuss the NeedIt Life product in the office, online through Microsoft Teams, or at your home.",
};

const meetingOptions = [
  {
    icon: Building2,
    title: "In the office",
    text: "Meet with a financial adviser at 17 Lambie Drive.",
  },
  {
    icon: Laptop2,
    title: "Online via Microsoft Teams",
    text: "Speak face to face online using a secure Teams meeting link.",
  },
  {
    icon: Home,
    title: "At your home",
    text: "Request an in-person visit at the address you provide, subject to confirmation.",
  },
];

export default function BookAnAppointmentPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-forest-950 py-16 text-white sm:py-20">
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-brand-lime/15 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-brand-green/10 blur-3xl" />
        <Container className="relative grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-lime">
              Speak with a financial adviser
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Book a time to talk about NeedIt Life
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              Choose a preferred date, time and meeting option. An adviser will
              contact you to confirm the appointment and answer your questions.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/12 bg-white/8 p-6 backdrop-blur sm:p-7">
            <CalendarCheck2 className="h-9 w-9 text-brand-lime" />
            <h2 className="mt-5 text-2xl font-extrabold">Before you submit</h2>
            <ul className="mt-5 space-y-4 text-sm md:text-base leading-6 text-white/72">
              <li className="flex gap-5">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-brand-lime" />
                Your chosen date and time are a preference until the adviser
                confirms availability.
              </li>
              <li className="flex gap-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-lime" />
                Home visits may depend on location and adviser availability.
              </li>
              <li className="flex gap-5">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-lime" />
                Do not include detailed medical information in this form.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="section-space bg-soft-sage">
        <Container>
          <div className="mx-auto max-w-4xl">
            <AppointmentForm />
          </div>
        </Container>
      </section>
    </>
  );
}
