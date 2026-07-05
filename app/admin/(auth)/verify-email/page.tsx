import Image from "next/image";
import Link from "next/link";
import { MailCheck } from "lucide-react";

export default function VerifyEmailPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-soft-sage p-5"><div className="w-full max-w-md rounded-[2rem] border border-line bg-white p-8 text-center shadow-xl"><Image src="/images/needit-life-logo.png" alt="NeedIt Life" width={180} height={60} className="mx-auto h-auto w-40" /><div className="mx-auto mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-brand-sage text-brand-green"><MailCheck className="h-8 w-8" /></div><h1 className="mt-5 text-3xl font-extrabold tracking-[-0.04em] text-forest-950">Check your email</h1><p className="mt-3 text-sm leading-7 text-muted">Use the verification link sent to your invited administrator address. This screen will be connected to Supabase Auth later.</p><Link href="/admin" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-2xl bg-forest-900 px-6 text-sm font-extrabold text-white">Return to sign in</Link></div></main>
  );
}
