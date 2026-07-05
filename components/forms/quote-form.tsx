"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Check, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";

const quoteSchema = z.object({
  firstName: z.string().trim().min(2, "Enter your first name"),
  lastName: z.string().trim().min(2, "Enter your last name"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().min(8, "Enter a valid phone number"),
  preferredContactMethod: z.enum(["phone", "email"]),
  ageRange: z.string().min(1, "Choose an age range"),
  nzResident: z.enum(["yes", "no"]),
  previouslyDeclined: z.enum(["yes", "no", "unsure"]),
  coverRange: z.string().min(1, "Choose an approximate cover amount"),
  preferredContactTime: z.string().min(1, "Choose a preferred contact time"),
  privacyAccepted: z.boolean().refine((value) => value, { message: "You must accept the privacy statement" }),
  contactConsent: z.boolean().refine((value) => value, { message: "You must agree to be contacted" }),
  marketingConsent: z.boolean(),
});

type QuoteValues = z.infer<typeof quoteSchema>;

const stepFields: Array<Array<keyof QuoteValues>> = [
  ["firstName", "lastName", "email", "phone", "preferredContactMethod"],
  ["ageRange", "nzResident", "previouslyDeclined", "coverRange", "preferredContactTime"],
  ["privacyAccepted", "contactConsent", "marketingConsent"],
];

function FieldError({ message }: { message?: string }) {
  return message ? <p className="mt-2 text-sm font-semibold text-red-700">{message}</p> : null;
}

const inputClass =
  "min-h-12 w-full rounded-2xl border border-line bg-white px-4 text-sm font-semibold text-ink transition placeholder:text-muted/60 focus:border-brand-green focus:ring-4 focus:ring-brand-green/10";

export function QuoteForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    control,
    formState: { errors },
  } = useForm<QuoteValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      preferredContactMethod: "phone",
      nzResident: "yes",
      previouslyDeclined: "unsure",
      marketingConsent: false,
      privacyAccepted: false,
      contactConsent: false,
    },
  });

  const progress = useMemo(() => ((step + 1) / 3) * 100, [step]);
  const selectedMethod = useWatch({ control, name: "preferredContactMethod" });

  async function nextStep() {
    const valid = await trigger(stepFields[step], { shouldFocus: true });
    if (valid) setStep((current) => Math.min(current + 1, 2));
  }

  async function onSubmit(values: QuoteValues) {
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 650));
    console.info("Frontend preview submission", values);
    const ref = "NL-PREVIEW-001";
    router.push(`/thank-you?ref=${ref}`);
  }

  return (
    <div className="rounded-[2rem] border border-line bg-white p-5 shadow-[0_24px_70px_rgba(5,45,38,0.10)] sm:p-8">
      <div className="flex items-center justify-between gap-5">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-green">Step {step + 1} of 3</p>
          <h2 className="mt-1 text-2xl font-extrabold tracking-[-0.03em] text-forest-950">
            {step === 0 ? "Your contact details" : step === 1 ? "A little about your enquiry" : "Review your consent"}
          </h2>
        </div>
        <ShieldCheck className="h-8 w-8 shrink-0 text-brand-green" />
      </div>
      <div className="mt-6 h-2 overflow-hidden rounded-full bg-soft-sage">
        <div className="h-full rounded-full bg-brand-green transition-all" style={{ width: `${progress}%` }} />
      </div>

      <form className="mt-8" onSubmit={handleSubmit(onSubmit)} noValidate>
        {step === 0 ? (
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-extrabold text-forest-950">First name</span>
              <input {...register("firstName")} className={inputClass} autoComplete="given-name" />
              <FieldError message={errors.firstName?.message} />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-extrabold text-forest-950">Last name</span>
              <input {...register("lastName")} className={inputClass} autoComplete="family-name" />
              <FieldError message={errors.lastName?.message} />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-extrabold text-forest-950">Email address</span>
              <input {...register("email")} type="email" className={inputClass} autoComplete="email" />
              <FieldError message={errors.email?.message} />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-extrabold text-forest-950">Mobile number</span>
              <input {...register("phone")} type="tel" className={inputClass} autoComplete="tel" />
              <FieldError message={errors.phone?.message} />
            </label>
            <fieldset className="sm:col-span-2">
              <legend className="mb-3 text-sm font-extrabold text-forest-950">How would you prefer us to contact you?</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["phone", "Phone call"],
                  ["email", "Email"],
                ].map(([value, label]) => (
                  <label key={value} className={cn("flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition", selectedMethod === value ? "border-brand-green bg-brand-sage" : "border-line bg-white hover:border-brand-green/50")}>
                    <input {...register("preferredContactMethod")} type="radio" value={value} className="h-4 w-4 accent-[var(--green-600)]" />
                    <span className="text-sm font-extrabold text-forest-950">{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-extrabold text-forest-950">Age range</span>
              <select {...register("ageRange")} className={inputClass} defaultValue="">
                <option value="" disabled>Select an age range</option>
                <option>18–24</option><option>25–34</option><option>35–44</option><option>45–54</option><option>55–64</option><option>65+</option>
              </select>
              <FieldError message={errors.ageRange?.message} />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-extrabold text-forest-950">Approximate cover amount</span>
              <select {...register("coverRange")} className={inputClass} defaultValue="">
                <option value="" disabled>Select an amount</option>
                <option>$50,000–$100,000</option><option>$100,000–$200,000</option><option>$200,000–$300,000</option><option>Not sure yet</option>
              </select>
              <FieldError message={errors.coverRange?.message} />
            </label>
            <fieldset>
              <legend className="mb-3 text-sm font-extrabold text-forest-950">Are you a New Zealand resident?</legend>
              <div className="flex gap-3">
                {[["yes", "Yes"], ["no", "No"]].map(([value, label]) => (
                  <label key={value} className="flex flex-1 cursor-pointer items-center gap-3 rounded-2xl border border-line p-4 hover:border-brand-green/50">
                    <input {...register("nzResident")} type="radio" value={value} className="h-4 w-4 accent-[var(--green-600)]" />
                    <span className="text-sm font-bold">{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="mb-3 text-sm font-extrabold text-forest-950">Have you previously been declined?</legend>
              <div className="grid grid-cols-3 gap-2">
                {[["yes", "Yes"], ["no", "No"], ["unsure", "Unsure"]].map(([value, label]) => (
                  <label key={value} className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-line p-4 hover:border-brand-green/50">
                    <input {...register("previouslyDeclined")} type="radio" value={value} className="h-4 w-4 accent-[var(--green-600)]" />
                    <span className="text-sm font-bold">{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-extrabold text-forest-950">Best time to contact you</span>
              <select {...register("preferredContactTime")} className={inputClass} defaultValue="">
                <option value="" disabled>Select a time</option>
                <option>Morning</option><option>Afternoon</option><option>Evening</option><option>Any time</option>
              </select>
              <FieldError message={errors.preferredContactTime?.message} />
            </label>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="space-y-4">
            <div className="rounded-2xl bg-soft-sage p-5 text-sm leading-6 text-muted">
              <p className="font-extrabold text-forest-950">What happens after you submit?</p>
              <p className="mt-2">This preview records an enquiry only. In the connected version, your details will be sent securely to the NeedIt Life API and stored in the leads database for an authorised team member to view.</p>
            </div>
            <label className="flex cursor-pointer gap-3 rounded-2xl border border-line p-4">
              <input {...register("privacyAccepted")} type="checkbox" className="mt-1 h-4 w-4 accent-[var(--green-600)]" />
              <span className="text-sm leading-6 text-muted">I have read and accept the <a className="font-extrabold text-forest-900 underline" href="/privacy-policy">privacy statement</a>.</span>
            </label>
            <FieldError message={errors.privacyAccepted?.message} />
            <label className="flex cursor-pointer gap-3 rounded-2xl border border-line p-4">
              <input {...register("contactConsent")} type="checkbox" className="mt-1 h-4 w-4 accent-[var(--green-600)]" />
              <span className="text-sm leading-6 text-muted">I agree that NeedIt Life may contact me about this Quick Life enquiry.</span>
            </label>
            <FieldError message={errors.contactConsent?.message} />
            <label className="flex cursor-pointer gap-3 rounded-2xl border border-line p-4">
              <input {...register("marketingConsent")} type="checkbox" className="mt-1 h-4 w-4 accent-[var(--green-600)]" />
              <span className="text-sm leading-6 text-muted">I would also like to receive occasional helpful information and updates. This is optional.</span>
            </label>
          </div>
        ) : null}

        <div className="mt-8 flex flex-col-reverse gap-3 border-t border-line pt-6 sm:flex-row sm:justify-between">
          {step > 0 ? (
            <button type="button" onClick={() => setStep((current) => current - 1)} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-line px-5 text-sm font-extrabold text-forest-900 hover:bg-soft-sage">
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
          ) : <span />}
          {step < 2 ? (
            <button type="button" onClick={nextStep} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-brand-green px-6 text-sm font-extrabold text-white hover:bg-forest-700">
              Continue <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button type="submit" disabled={submitting} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-brand-green px-6 text-sm font-extrabold text-white hover:bg-forest-700 disabled:cursor-wait disabled:opacity-70">
              {submitting ? "Submitting..." : "Submit enquiry"} {!submitting ? <Check className="h-4 w-4" /> : null}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
