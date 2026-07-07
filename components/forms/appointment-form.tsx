"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Building2,
  CalendarDays,
  Check,
  Clock3,
  Home,
  Laptop2,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";

const appointmentMethods = [
  {
    value: "office",
    label: "In office",
    description: "Meet with an adviser at 17 Lambie Drive.",
    icon: Building2,
  },
  {
    value: "teams",
    label: "Online via Microsoft Teams",
    description: "A Teams meeting link will be sent to your email address.",
    icon: Laptop2,
  },
  {
    value: "home",
    label: "In person at your home",
    description:
      "An adviser can meet you at the address provided, subject to confirmation.",
    icon: Home,
  },
] as const;

const timeOptions = [
  "9:00 am",
  "9:30 am",
  "10:00 am",
  "10:30 am",
  "11:00 am",
  "11:30 am",
  "12:00 pm",
  "12:30 pm",
  "1:00 pm",
  "1:30 pm",
  "2:00 pm",
  "2:30 pm",
  "3:00 pm",
  "3:30 pm",
  "4:00 pm",
  "4:30 pm",
] as const;

function nzToday() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Pacific/Auckland",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

const appointmentSchema = z.object({
  firstName: z.string().trim().min(2, "Enter your first name").max(80),
  lastName: z.string().trim().min(2, "Enter your last name").max(80),
  email: z.string().trim().email("Enter a valid email address").max(254),
  phone: z
    .string()
    .trim()
    .min(8, "Enter a valid phone number")
    .max(30)
    .regex(/^[+\d][\d\s().-]+$/, "Enter a valid phone number"),
  streetAddress: z.string().trim().min(3, "Enter your street address").max(160),
  suburb: z.string().trim().min(2, "Enter your suburb").max(100),
  city: z.string().trim().min(2, "Enter your city").max(100),
  postcode: z
    .string()
    .trim()
    .regex(/^\d{4}$/, "Enter a 4-digit postcode"),
  preferredDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Choose a preferred date")
    .refine((value) => value >= nzToday(), "Choose a date from today onwards"),
  preferredTime: z.string().min(1, "Choose a preferred time"),
  meetingMethod: z.enum(["office", "teams", "home"]),
  notes: z
    .string()
    .trim()
    .max(1000, "Keep your note under 1,000 characters")
    .optional(),
  privacyAccepted: z
    .boolean()
    .refine((value) => value, {
      message: "You must accept the privacy statement",
    }),
  contactConsent: z
    .boolean()
    .refine((value) => value, { message: "You must agree to be contacted" }),
  website: z.string().max(0).optional(),
});

type AppointmentValues = z.infer<typeof appointmentSchema>;

const inputClass =
  "min-h-12 w-full rounded-2xl border border-line bg-white px-4 text-sm font-semibold text-ink transition placeholder:text-muted/60 focus:border-brand-green focus:ring-4 focus:ring-brand-green/10";

function FieldError({ message }: { message?: string }) {
  return message ? (
    <p className="mt-2 text-sm font-semibold text-red-700">{message}</p>
  ) : null;
}

export function AppointmentForm() {
  const router = useRouter();
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      meetingMethod: "office",
      privacyAccepted: false,
      contactConsent: false,
      notes: "",
      website: "",
    },
  });

  const selectedMethod = useWatch({ control, name: "meetingMethod" });
  const minimumDate = useMemo(() => nzToday(), []);

  async function onSubmit(values: AppointmentValues) {
    setSubmissionError(null);

    try {
      const apiBaseUrl =
        process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api/v1";
      const response = await fetch(`${apiBaseUrl}/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": crypto.randomUUID(),
        },
        body: JSON.stringify({
          ...values,
          source: "Book an Appointment page",
          landingPage: "/book-an-appointment",
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        data?: { referenceNumber?: string };
        error?: { message?: string };
      };

      if (!response.ok || !result.success) {
        throw new Error(
          result.error?.message ??
            "Your appointment request could not be submitted. Please try again.",
        );
      }

      const reference = result.data?.referenceNumber;
      router.push(
        reference
          ? `/appointment-requested?ref=${encodeURIComponent(reference)}`
          : "/appointment-requested",
      );
    } catch (error) {
      setSubmissionError(
        error instanceof Error
          ? error.message
          : "Your appointment request could not be submitted. Please try again.",
      );
    }
  }

  return (
    <form
      className="rounded-[2rem] border border-line bg-white p-5 shadow-[0_24px_70px_rgba(5,45,38,0.10)] sm:p-8"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">
            Appointment request
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-forest-950 sm:text-3xl">
            Choose how and when to meet
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Your preferred date and time will be confirmed by the adviser.
          </p>
        </div>
        <ShieldCheck className="h-8 w-8 shrink-0 text-brand-green" />
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-extrabold text-forest-950">Your details</h3>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <label>
            <span className="mb-2 block text-sm font-extrabold text-forest-950">
              First name
            </span>
            <input
              {...register("firstName")}
              className={inputClass}
              autoComplete="given-name"
            />
            <FieldError message={errors.firstName?.message} />
          </label>

          <label>
            <span className="mb-2 block text-sm font-extrabold text-forest-950">
              Last name
            </span>
            <input
              {...register("lastName")}
              className={inputClass}
              autoComplete="family-name"
            />
            <FieldError message={errors.lastName?.message} />
          </label>

          <label>
            <span className="mb-2 block text-sm font-extrabold text-forest-950">
              Email address
            </span>
            <input
              {...register("email")}
              type="email"
              className={inputClass}
              autoComplete="email"
            />
            <FieldError message={errors.email?.message} />
          </label>

          <label>
            <span className="mb-2 block text-sm font-extrabold text-forest-950">
              Phone number
            </span>
            <input
              {...register("phone")}
              type="tel"
              className={inputClass}
              autoComplete="tel"
              inputMode="tel"
            />
            <FieldError message={errors.phone?.message} />
          </label>
        </div>
      </div>

      <div className="mt-8 border-t border-line pt-8">
        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-brand-green" />
          <h3 className="text-lg font-extrabold text-forest-950">
            Your address
          </h3>
        </div>
        <p className="mt-2 text-sm leading-6 text-muted">
          This is required for identification and for an at-home appointment if
          you select that option.
        </p>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <label className="sm:col-span-2">
            <span className="mb-2 block text-sm font-extrabold text-forest-950">
              Street address
            </span>
            <input
              {...register("streetAddress")}
              className={inputClass}
              autoComplete="street-address"
              placeholder="House number and street"
            />
            <FieldError message={errors.streetAddress?.message} />
          </label>

          <label>
            <span className="mb-2 block text-sm font-extrabold text-forest-950">
              Suburb
            </span>
            <input
              {...register("suburb")}
              className={inputClass}
              autoComplete="address-level3"
            />
            <FieldError message={errors.suburb?.message} />
          </label>

          <label>
            <span className="mb-2 block text-sm font-extrabold text-forest-950">
              City
            </span>
            <input
              {...register("city")}
              className={inputClass}
              autoComplete="address-level2"
            />
            <FieldError message={errors.city?.message} />
          </label>

          <label>
            <span className="mb-2 block text-sm font-extrabold text-forest-950">
              Postcode
            </span>
            <input
              {...register("postcode")}
              className={inputClass}
              autoComplete="postal-code"
              inputMode="numeric"
              maxLength={4}
            />
            <FieldError message={errors.postcode?.message} />
          </label>
        </div>
      </div>

      <div className="mt-8 border-t border-line pt-8">
        <div className="flex items-center gap-3">
          <CalendarDays className="h-5 w-5 text-brand-green" />
          <h3 className="text-lg font-extrabold text-forest-950">
            Preferred date and time
          </h3>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <label>
            <span className="mb-2 block text-sm font-extrabold text-forest-950">
              Preferred date
            </span>
            <input
              {...register("preferredDate")}
              type="date"
              min={minimumDate}
              className={inputClass}
            />
            <FieldError message={errors.preferredDate?.message} />
          </label>

          <label>
            <span className="mb-2 block text-sm font-extrabold text-forest-950">
              Preferred time
            </span>
            <select
              {...register("preferredTime")}
              className={inputClass}
              defaultValue=""
            >
              <option value="" disabled>
                Select a time
              </option>
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <FieldError message={errors.preferredTime?.message} />
          </label>
        </div>
      </div>

      <fieldset className="mt-8 border-t border-line pt-8">
        <legend className="flex items-center gap-3 text-lg font-extrabold text-forest-950">
          <Clock3 className="h-5 w-5 text-brand-green" />
          How would you like to meet?
        </legend>

        <div className="mt-5 grid gap-4">
          {appointmentMethods.map((method) => {
            const Icon = method.icon;
            const selected = selectedMethod === method.value;

            return (
              <label
                key={method.value}
                className={cn(
                  "flex cursor-pointer gap-4 rounded-2xl border p-5 transition",
                  selected
                    ? "border-brand-green bg-brand-sage shadow-[0_12px_30px_rgba(70,168,50,0.10)]"
                    : "border-line bg-white hover:border-brand-green/50",
                )}
              >
                <input
                  {...register("meetingMethod")}
                  type="radio"
                  value={method.value}
                  className="mt-1 h-4 w-4 shrink-0 accent-[var(--green-600)]"
                />
                <Icon
                  className="mt-0.5 h-6 w-6 shrink-0 text-brand-green"
                  aria-hidden="true"
                />
                <span>
                  <span className="block text-sm font-extrabold text-forest-950">
                    {method.label}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-muted">
                    {method.description}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
        <FieldError message={errors.meetingMethod?.message} />
      </fieldset>

      <label className="mt-8 block border-t border-line pt-8">
        <span className="mb-2 block text-sm font-extrabold text-forest-950">
          Is there anything you would like the adviser to know?{" "}
          <span className="font-semibold text-muted">(optional)</span>
        </span>
        <textarea
          {...register("notes")}
          rows={4}
          className={`${inputClass} py-3`}
          placeholder="For example, questions you would like to discuss. Please do not include detailed medical information."
        />
        <FieldError message={errors.notes?.message} />
      </label>

      <input
        {...register("website")}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="mt-8 space-y-4 border-t border-line pt-8">
        <label className="flex cursor-pointer gap-3 rounded-2xl border border-line p-4">
          <input
            {...register("privacyAccepted")}
            type="checkbox"
            className="mt-1 h-4 w-4 shrink-0 accent-[var(--green-600)]"
          />
          <span className="text-sm leading-6 text-muted">
            I have read and accept the{" "}
            <a
              href="/privacy-policy"
              className="font-extrabold text-forest-900 underline"
            >
              privacy statement
            </a>
            .
          </span>
        </label>
        <FieldError message={errors.privacyAccepted?.message} />

        <label className="flex cursor-pointer gap-3 rounded-2xl border border-line p-4">
          <input
            {...register("contactConsent")}
            type="checkbox"
            className="mt-1 h-4 w-4 shrink-0 accent-[var(--green-600)]"
          />
          <span className="text-sm leading-6 text-muted">
            I agree that NeedIt Life may contact me to confirm this appointment
            and discuss the NeedIt Life product.
          </span>
        </label>
        <FieldError message={errors.contactConsent?.message} />
      </div>

      {submissionError ? (
        <p
          role="alert"
          className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-800"
        >
          {submissionError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-brand-green px-6 text-sm font-extrabold text-white transition hover:bg-forest-700 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting ? "Submitting request..." : "Request appointment"}
        {!isSubmitting ? <Check className="h-4 w-4" /> : null}
      </button>
    </form>
  );
}
