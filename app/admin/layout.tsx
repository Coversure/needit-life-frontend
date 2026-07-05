import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Lead Administration", template: "%s | NeedIt Life Admin" },
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
