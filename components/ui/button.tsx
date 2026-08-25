import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-brand-green text-white shadow-[0_14px_30px_rgba(70,168,50,0.22)] hover:bg-forest-700",
  secondary:
    "border border-brand-green bg-white text-forest-900 hover:bg-brand-sage",
  dark: "bg-forest-900 text-white hover:bg-forest-800",
  ghost: "text-forest-900 hover:bg-brand-sage",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  arrow = false,
  target,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  arrow?: boolean;
  target?: "_blank" | "_self";
}) {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-base transition duration-200 focus-visible:outline-2",
        variants[variant],
        className,
      )}
    >
      {children}

      {arrow ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
    </Link>
  );
}
