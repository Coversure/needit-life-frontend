"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const inputClass =
  "min-h-12 w-full rounded-2xl border border-line bg-white px-4 text-sm font-semibold text-ink transition placeholder:text-muted/60 focus:border-brand-green focus:ring-4 focus:ring-brand-green/10";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="rounded-[2rem] border border-line bg-white p-6 shadow-xl sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-forest-950">Send a message</h2>
      <p className="mt-2 text-sm leading-6 text-muted">This frontend preview does not send or store messages.</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label>
          <span className="mb-2 block text-sm font-extrabold text-forest-950">First name</span>
          <input required className={inputClass} autoComplete="given-name" />
        </label>
        <label>
          <span className="mb-2 block text-sm font-extrabold text-forest-950">Last name</span>
          <input required className={inputClass} autoComplete="family-name" />
        </label>
        <label>
          <span className="mb-2 block text-sm font-extrabold text-forest-950">Email</span>
          <input required type="email" className={inputClass} autoComplete="email" />
        </label>
        <label>
          <span className="mb-2 block text-sm font-extrabold text-forest-950">Phone</span>
          <input type="tel" className={inputClass} autoComplete="tel" />
        </label>
        <label className="sm:col-span-2">
          <span className="mb-2 block text-sm font-extrabold text-forest-950">What can we help with?</span>
          <select className={inputClass} defaultValue="">
            <option value="" disabled>Choose a topic</option>
            <option>New Quick Life enquiry</option>
            <option>Existing policy</option>
            <option>Claims</option>
            <option>Complaint</option>
            <option>General question</option>
          </select>
        </label>
        <label className="sm:col-span-2">
          <span className="mb-2 block text-sm font-extrabold text-forest-950">Message</span>
          <textarea required rows={6} className={`${inputClass} py-3`} />
        </label>
      </div>
      <label className="mt-5 flex gap-3 text-sm leading-6 text-muted">
        <input required type="checkbox" className="mt-1 h-4 w-4 accent-[var(--green-600)]" />
        <span>I have read the privacy statement and agree that NeedIt Life may contact me about this message.</span>
      </label>
      <button type="submit" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-brand-green px-6 text-sm font-extrabold text-white hover:bg-forest-700">
        Send message <Send className="h-4 w-4" />
      </button>
      {sent ? <p className="mt-4 rounded-xl bg-brand-sage p-4 text-sm font-bold text-forest-900">Preview submitted. Connect the Express API to send this message in production.</p> : null}
    </form>
  );
}
