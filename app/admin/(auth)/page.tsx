import Image from "next/image";
import { LockKeyhole } from "lucide-react";
import { LoginForm } from "@/components/admin/login-form";

export default function AdminLoginPage() {
  return (
    <main className="grid min-h-screen bg-soft-sage lg:grid-cols-2">
      <section className="hidden bg-forest-950 p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <Image src="/images/needit-life-logo.png" alt="NeedIt Life" width={220} height={75} className="h-auto w-48 brightness-0 invert" />
        <div className="max-w-xl"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand-lime">Secure lead access</p><h1 className="mt-5 text-5xl font-extrabold tracking-[-0.055em]">View website enquiries without touching the database</h1><p className="mt-6 text-base leading-8 text-white/65">The production dashboard will authenticate authorised users and expose read-only lead endpoints. It will not provide edit or delete actions.</p></div>
        <p className="text-sm font-semibold text-white/50">NeedIt Life administration</p>
      </section>
      <section className="flex items-center justify-center p-5 sm:p-10">
        <div className="w-full max-w-md rounded-[2rem] border border-line bg-white p-7 shadow-xl sm:p-9">
          <Image src="/images/needit-life-logo.png" alt="NeedIt Life" width={180} height={60} className="h-auto w-40 lg:hidden" />
          <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sage text-brand-green lg:mt-0"><LockKeyhole className="h-6 w-6" /></div>
          <h1 className="mt-5 text-3xl font-extrabold tracking-[-0.04em] text-forest-950">Admin sign in</h1>
          <p className="mt-2 text-sm leading-6 text-muted">Use your verified administrator email and password.</p>
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
