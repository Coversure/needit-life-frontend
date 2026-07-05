"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, LogOut, Menu, Users } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Dashboard", href: "/admin/dashboard", icon: BarChart3 },
  { label: "Leads", href: "/admin/leads", icon: Users },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const sidebar = (
    <>
      <div className="flex min-h-20 items-center border-b border-white/10 px-6">
        <Image src="/images/needit-life-logo.png" alt="NeedIt Life" width={180} height={60} className="h-auto w-36 brightness-0 invert" />
      </div>
      <div className="px-4 py-6">
        <p className="px-3 text-xs font-extrabold uppercase tracking-[0.16em] text-white/40">Lead administration</p>
        <nav className="mt-4 space-y-1">
          {nav.map(({ label, href, icon: Icon }) => {
            const active = pathname.startsWith(href);
            return (
              <Link key={href} href={href} onClick={() => setOpen(false)} className={cn("flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-extrabold transition", active ? "bg-white text-forest-950" : "text-white/70 hover:bg-white/10 hover:text-white")}>
                <Icon className="h-5 w-5" /> {label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="mt-auto border-t border-white/10 p-4">
        <Link href="/admin" className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-extrabold text-white/70 hover:bg-white/10 hover:text-white"><LogOut className="h-5 w-5" /> Sign out</Link>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-[#f3f6f4] lg:grid lg:grid-cols-[260px_1fr]">
      <aside className="hidden min-h-screen flex-col bg-forest-950 lg:flex">{sidebar}</aside>
      {open ? <div className="fixed inset-0 z-50 lg:hidden"><button type="button" aria-label="Close menu" className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} /><aside className="relative flex h-full w-[280px] flex-col bg-forest-950 shadow-2xl">{sidebar}</aside></div> : null}
      <div className="min-w-0">
        <header className="sticky top-0 z-30 flex min-h-20 items-center justify-between border-b border-line bg-white/95 px-4 backdrop-blur sm:px-7 lg:px-10">
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setOpen(true)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-forest-950 lg:hidden" aria-label="Open menu"><Menu className="h-5 w-5" /></button>
            <div><p className="text-xs font-extrabold uppercase tracking-[0.15em] text-brand-green">NeedIt Life</p><p className="font-extrabold text-forest-950">Lead dashboard</p></div>
          </div>
          <div className="flex items-center gap-3"><div className="hidden text-right sm:block"><p className="text-sm font-extrabold text-forest-950">Preview Admin</p><p className="text-xs font-semibold text-muted">Read-only access</p></div><span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-sage text-sm font-extrabold text-forest-900">PA</span></div>
        </header>
        <main className="p-4 sm:p-7 lg:p-10">{children}</main>
      </div>
    </div>
  );
}
