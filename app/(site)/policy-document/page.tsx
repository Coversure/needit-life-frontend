import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Quick Life Policy Document",
  description:
    "Read the Quick Life Insurance Policy Wording, including benefits, terms, conditions, exclusions and definitions.",
};

const policyDocument = "/documents/quicklife-policy-wording.pdf";

export default function PolicyDocumentPage() {
  return (
    <>
      <section className="bg-warm-white py-10 sm:py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.16em] text-brand-green">
                  Policy document
                </p>

                <h1 className="text-3xl font-extrabold tracking-tight text-forest-950 sm:text-4xl lg:text-5xl">
                  Quick Life Insurance Policy Wording
                </h1>

                <p className="mt-4 max-w-3xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  Read the full Quick Life Insurance Policy Wording below,
                  including the benefits, terms, conditions, exclusions, waiting
                  periods and definitions that apply.
                </p>
              </div>

              <ButtonLink
                href={policyDocument}
                target="_blank"
                variant="secondary"
                className="shrink-0"
              >
                Open PDF
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-line bg-white shadow-md sm:rounded-[1.75rem]">
              <iframe
                src={`${policyDocument}#view=FitH`}
                title="Quick Life Insurance Policy Wording"
                className="h-[75vh] min-h-[650px] w-full lg:h-[85vh]"
              />
            </div>

            <div className="mt-5 rounded-2xl border border-line bg-white px-5 py-4 text-sm leading-6 text-muted">
              <p>
                If the document does not display correctly in your browser, use
                the{" "}
                <a
                  href={policyDocument}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-brand-green underline underline-offset-4"
                >
                  Open PDF
                </a>{" "}
                link to view it directly.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
