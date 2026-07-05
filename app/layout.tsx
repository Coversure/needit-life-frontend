import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "NeedIt Life | Quick Life cover for real life",
    template: "%s | NeedIt Life",
  },
  description:
    "Straightforward Quick Life cover for New Zealanders who want a simpler path to protection.",
  applicationName: "NeedIt Life",
  openGraph: {
    type: "website",
    locale: "en_NZ",
    siteName: "NeedIt Life",
    images: [
      {
        url: "/images/family-hero.webp",
        width: 1916,
        height: 821,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/family-hero.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ">
      <body className={`${dmSans.variable} ${dmSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
