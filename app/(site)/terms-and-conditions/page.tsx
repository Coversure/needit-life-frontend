import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Website Terms & Conditions",
  description:
    "The terms and conditions that apply when using the NeedIt Life website.",
};

const sections = [
  {
    title: "Acceptance of these Terms",
    content: (
      <>
        <p>Welcome to the NeedIt Life website.</p>

        <p className="mt-4">
          NeedIt Life is a brand operated by{" "}
          <strong>Coversure Financial Services Limited</strong> (NZBN
          9429047688780, FSP722232).
        </p>

        <p className="mt-4">
          The Quick Life insurance product featured on this website is
          underwritten and issued by <strong>Momentum Life Limited</strong>{" "}
          (NZBN 9429041981658, FSP472286), a licensed New Zealand insurer.
        </p>

        <p className="mt-4">
          By accessing or using this website, you agree to be bound by these
          Website Terms &amp; Conditions. If you do not agree with these terms,
          please do not use this website.
        </p>

        <p className="mt-4">
          Coversure Financial Services Limited may amend these Website Terms
          &amp; Conditions at any time by publishing an updated version on this
          website. Your continued use of the website constitutes acceptance of
          any changes.
        </p>
      </>
    ),
  },
  {
    title: "Website Content",
    content: (
      <>
        <p>
          Unless otherwise stated, all content on this website, including text,
          graphics, images, logos, icons, branding, software, documents and
          other materials (“Content”), is owned by or licensed to Coversure
          Financial Services Limited or its licensors and is protected by New
          Zealand intellectual property laws.
        </p>

        <p className="mt-4 font-semibold text-forest-950">You may:</p>

        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>View this website for your personal use.</li>
          <li>
            Download or print Policy Wordings and other documents for your
            personal reference.
          </li>
        </ul>

        <p className="mt-6 font-semibold text-forest-950">You must not:</p>

        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            Copy, reproduce, modify, republish, distribute or commercially
            exploit any Content without prior written permission.
          </li>
          <li>
            Use any Content in a manner that infringes intellectual property
            rights or is otherwise unlawful.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Policy Wordings",
    content: (
      <>
        <p>
          This website provides access to the current Policy Wording for Quick
          Life.
        </p>

        <p className="mt-4">
          If you already hold a policy, the terms and conditions applicable to
          your cover are those contained in the Policy Wording issued when your
          policy commenced, or as subsequently amended in accordance with your
          policy.
        </p>

        <p className="mt-4">
          If you are unsure which Policy Wording applies to your policy, please
          contact us.
        </p>
      </>
    ),
  },
  {
    title: "Third-Party Websites",
    content: (
      <>
        <p>
          This website may contain links to third-party websites for your
          convenience.
        </p>

        <p className="mt-4">
          NeedIt Life and Coversure Financial Services Limited do not control
          these websites and are not responsible for their content, accuracy,
          availability, privacy practices or security. The inclusion of a link
          does not imply endorsement of the third-party website or its products
          or services.
        </p>

        <p className="mt-4">
          Accessing third-party websites is at your own risk.
        </p>
      </>
    ),
  },
  {
    title: "Website Availability",
    content: (
      <>
        <p>
          While we take reasonable care to ensure this website remains available
          and operates correctly, we do not guarantee uninterrupted access or
          that the website will always be free from errors, viruses or other
          harmful components.
        </p>

        <p className="mt-4">
          We may suspend, modify or withdraw any part of the website without
          prior notice.
        </p>
      </>
    ),
  },
  {
    title: "Disclaimer",
    content: (
      <>
        <p>
          The information on this website is provided in good faith and is
          intended to be accurate at the time it is published.
        </p>

        <p className="mt-4">
          To the extent permitted by law, neither Coversure Financial Services
          Limited nor Momentum Life Limited makes any representation or warranty
          that the information on this website is complete, accurate or suitable
          for every person’s circumstances.
        </p>
      </>
    ),
  },
  {
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by New Zealand law, Coversure
          Financial Services Limited, Momentum Life Limited and their respective
          directors, employees, agents and related companies exclude liability
          for any direct, indirect, incidental, consequential or special loss or
          damage arising from:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Your use of this website.</li>
          <li>Your inability to access this website.</li>
          <li>Errors or omissions in the website content.</li>
          <li>Reliance on information contained on this website.</li>
          <li>Any technical failure or interruption affecting the website.</li>
        </ul>

        <p className="mt-4">
          Nothing in these Website Terms &amp; Conditions limits or excludes any
          rights that cannot lawfully be excluded under New Zealand legislation,
          including the Consumer Guarantees Act 1993 or the Fair Trading Act
          1986 where applicable.
        </p>
      </>
    ),
  },
  {
    title: "General Information Only",
    content: (
      <>
        <p>
          The information available on this website is general information only
          and does not constitute personalised financial advice. It has been
          prepared without considering your individual objectives, financial
          situation or insurance needs.
        </p>

        <p className="mt-4">
          NeedIt Life provides information about the Quick Life insurance
          product only and does not compare products offered by other insurers.
        </p>

        <p className="mt-4">
          Before purchasing any insurance product, you should carefully read the
          applicable Policy Wording and consider whether the product is
          appropriate for your circumstances.
        </p>

        <p className="mt-4">
          If you would like personalised financial advice, you can request a
          referral to a Financial Adviser at Coversure Financial Services
          Limited.
        </p>
      </>
    ),
  },
  {
    title: "Privacy",
    content: (
      <p>
        Your use of this website is also governed by our Privacy Policy, which
        explains how we collect, use, disclose and protect your personal
        information.
      </p>
    ),
  },
  {
    title: "Governing Law",
    content: (
      <p>
        These Website Terms &amp; Conditions are governed by the laws of New
        Zealand. Any disputes arising from the use of this website will be
        subject to the non-exclusive jurisdiction of the New Zealand courts.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Website terms"
        title="Website Terms & Conditions"
        description="The terms that apply when you access or use the NeedIt Life website."
      />

      <section className="section-space bg-warm-white">
        <Container className="max-w-6xl">
          <div className="space-y-12 px-4 sm:px-8 lg:px-20">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-forest-950">
                  {section.title}
                </h2>

                <div className="mt-5 text-base leading-8 text-muted">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
