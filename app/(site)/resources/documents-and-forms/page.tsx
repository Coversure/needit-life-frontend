import type { Metadata } from "next";
import { Download, FileCheck2, FileText, ShieldAlert } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Documents and Forms",
  description: "NeedIt Life policy documents, customer forms and claims forms.",
};

const groups = [
  {
    title: "NeedIt Life product documents",
    icon: FileText,
    items: [
      "NeedIt Life policy wording",
      "NeedIt Life product brochure",
      "Key features and exclusions summary",
    ],
  },
  {
    title: "Managing your policy",
    icon: FileCheck2,
    items: [
      "Beneficiary nomination form",
      "Direct debit form",
      "Change of details form",
      "Non-smoking declaration",
    ],
  },
  {
    title: "Claims forms",
    icon: ShieldAlert,
    items: [
      "Life and accidental death claim form",
      "Terminal illness claim form",
      "Authority to obtain information",
    ],
  },
];

export default function DocumentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Documents and forms"
        title="Find the document you need"
        description="Payload CMS will allow authorised editors to upload and replace approved policy documents without changing the frontend code."
      />
      <section className="section-space bg-soft-sage">
        <Container className="space-y-6">
          {groups.map(({ title, icon: Icon, items }) => (
            <section
              key={title}
              className="rounded-[1.8rem] border border-line bg-white p-6 sm:p-8"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sage text-brand-green">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-forest-950">
                  {title}
                </h2>
              </div>
              <div className="mt-6 divide-y divide-line rounded-2xl border border-line">
                {items.map((item) => (
                  <div
                    key={item}
                    className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="text-sm font-extrabold text-forest-950">
                      {item}
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-muted">
                      <Download className="h-4 w-4" /> Document supplied through
                      Payload
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
            No policy PDFs are bundled in this frontend prototype. Upload only
            current, approved documents when the Payload CMS repository is
            connected.
          </p>
        </Container>
      </section>
    </>
  );
}
