import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-soft-sage p-5"><div className="w-full max-w-md rounded-[2rem] border border-line bg-white p-7 shadow-xl sm:p-9"><Image src="/images/needit-life-logo.png" alt="NeedIt Life" width={180} height={60} className="h-auto w-40" /><div className="mt-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sage text-brand-green"><Mail className="h-6 w-6" /></div><h1 className="mt-5 text-3xl font-extrabold tracking-[-0.04em] text-forest-950">Reset your password</h1><p className="mt-3 text-sm leading-6 text-muted">Enter your authorised email address. The production version will send a secure reset link through Supabase Auth.</p><form className="mt-7"><label><span className="mb-2 block text-sm font-extrabold text-forest-950">Email address</span><input required type="email" className="min-h-12 w-full rounded-2xl border border-line px-4 text-sm font-semibold focus:border-brand-green focus:ring-4 focus:ring-brand-green/10" /></label><button type="submit" className="mt-5 min-h-12 w-full rounded-2xl bg-forest-900 px-5 text-sm font-extrabold text-white">Send reset link</button></form><Link href="/admin" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-brand-green"><ArrowLeft className="h-4 w-4" /> Back to sign in</Link></div></main>
  );
}
