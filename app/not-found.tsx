import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-soft-sage p-6 text-center">
      <div className="max-w-lg">
        <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-green">404</p>
        <h1 className="mt-4 text-5xl font-extrabold tracking-[-0.05em] text-forest-950">This page could not be found</h1>
        <p className="mt-5 text-base leading-8 text-muted">The link may be outdated, or the page may have moved as part of the NeedIt Life rebrand.</p>
        <Link href="/" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-2xl bg-brand-green px-6 text-sm font-extrabold text-white">Return home</Link>
      </div>
    </main>
  );
}
