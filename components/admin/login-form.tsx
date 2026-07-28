"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, LogIn, Mail } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";

export function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        setLoading(true);
        setError("");

        const formData = new FormData(event.currentTarget);
        const email = String(formData.get("email") ?? "");
        const password = String(formData.get("password") ?? "");

        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        setLoading(false);

        if (error) {
          setError(error.message);
          return;
        }

        router.push("/admin/leads");
        router.refresh();
      }}
      className="mt-7"
    >
      <label className="block">
        <span className="mb-2 block text-sm font-extrabold text-forest-950">
          Email address
        </span>
        <span className="relative block">
          <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
          <input
            name="email"
            required
            type="email"
            autoComplete="email"
            className="min-h-12 w-full rounded-2xl border border-line bg-white pl-12 pr-4 text-sm font-semibold focus:border-brand-green focus:ring-4 focus:ring-brand-green/10"
            placeholder="admin@needitlife.co.nz"
          />
        </span>
      </label>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-extrabold text-forest-950">
          Password
        </span>
        <span className="relative block">
          <LockKeyhole className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
          <input
            name="password"
            required
            minLength={8}
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            className="min-h-12 w-full rounded-2xl border border-line bg-white pl-12 pr-12 text-sm font-semibold focus:border-brand-green focus:ring-4 focus:ring-brand-green/10"
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setShowPassword((value) => !value)}
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl text-muted hover:bg-soft-sage"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </span>
      </label>

      {error ? (
        <p className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-800">
          {error}
        </p>
      ) : null}

      <div className="mt-4 flex items-center justify-between gap-4">
        <label className="flex items-center gap-2 text-sm font-semibold text-muted">
          <input
            type="checkbox"
            className="h-4 w-4 accent-[var(--green-600)]"
          />
          Remember me
        </label>
        <Link
          href="/admin/forgot-password"
          className="text-sm font-extrabold text-brand-green hover:text-forest-700"
        >
          Forgot password?
        </Link>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-forest-900 px-5 text-sm font-extrabold text-white hover:bg-forest-800 disabled:cursor-wait disabled:opacity-70"
      >
        {loading ? "Signing in..." : "Sign in"}
        {!loading ? <LogIn className="h-4 w-4" /> : null}
      </button>
    </form>
  );
}
