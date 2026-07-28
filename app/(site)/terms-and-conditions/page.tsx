import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for using the NeedIt Life website.",
};

const sections = [
  {
    title: "About these terms",
    content: (
      <>
        <p>
          These Terms and Conditions govern your use of the NeedIt Life website.
        </p>

        <p className="mt-4">
          NeedIt Life is a trading name of{" "}
          <strong>Coversure Financial Services Limited</strong> (NZBN
          9429047688780, FSP722232). By accessing or using this website, you
          agree to be bound by these Terms and Conditions.
        </p>

        <p className="mt-4">
          If you do not agree with these terms, please stop using this website.
        </p>
      </>
    ),
  },

  {
    title: "Purpose of this website",
    content: (
      <>
        <p>
          NeedIt Life provides information about insurance products and allows
          eligible customers to apply for insurance online.
        </p>

        <p className="mt-4">
          The information on this website is intended to help you understand the
          products available through NeedIt Life. It should be read alongside
          the relevant Product Disclosure Statement, policy wording and any
          other documents provided during the application process.
        </p>
      </>
    ),
  },

  {
    title: "Financial advice",
    content: (
      <>
        <p>
          Where financial advice is provided through this website, it is
          provided by or on behalf of Coversure Financial Services Limited.
        </p>

        <p className="mt-4">
          Our advice is limited to the insurance products available through
          NeedIt Life and does not include products offered by other insurers.
        </p>

        <p className="mt-4">
          Any advice is based solely on the information you provide. If your
          circumstances are more complex or you require broader insurance
          advice, you should speak with one of our Financial Advisers.
        </p>
      </>
    ),
  },

  {
    title: "No guarantee of cover",
    content: (
      <>
        <p>
          Using this website or submitting an application does not guarantee
          that insurance cover will be offered.
        </p>

        <p className="mt-4">
          Acceptance, premiums, policy terms and future claims remain subject to
          the insurer's underwriting requirements, policy terms and applicable
          law.
        </p>
      </>
    ),
  },

  {
    title: "Accuracy of information",
    content: (
      <>
        <p>
          We take reasonable care to ensure the information on this website is
          accurate and up to date.
        </p>

        <p className="mt-4">
          However, we do not guarantee that all information is complete,
          current, or free from errors. We may update, change or remove website
          content at any time without notice.
        </p>
      </>
    ),
  },

  {
    title: "Your responsibilities",
    content: (
      <>
        <p>
          You are responsible for ensuring that any information you provide is
          accurate, complete and current.
        </p>

        <p className="mt-4">
          Providing incomplete or incorrect information may affect our ability
          to provide financial advice or the insurer's ability to assess your
          application or future claim.
        </p>
      </>
    ),
  },

  {
    title: "Intellectual property",
    content: (
      <>
        <p>
          Unless otherwise stated, all content on this website, including text,
          graphics, logos, images, branding and design, is owned by or licensed
          to Coversure Financial Services Limited.
        </p>

        <p className="mt-4">
          You may view or print material for your personal use only. You must
          not reproduce, modify, distribute or commercially use any website
          content without our prior written permission.
        </p>
      </>
    ),
  },

  {
    title: "Links to other websites",
    content: (
      <>
        <p>
          This website may contain links to third-party websites for your
          convenience.
        </p>

        <p className="mt-4">
          We are not responsible for the content, security, availability or
          privacy practices of third-party websites, and linking to them does
          not imply endorsement.
        </p>
      </>
    ),
  },

  {
    title: "Privacy",
    content: (
      <>
        <p>
          Your privacy is important to us. Our collection, use and disclosure of
          personal information is governed by our Privacy Policy and the Privacy
          Act 2020.
        </p>
      </>
    ),
  },

  {
    title: "Limitation of liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by New Zealand law, Coversure
          Financial Services Limited is not liable for any loss or damage
          arising from your use of this website, including interruptions,
          inaccuracies or reliance on website content.
        </p>

        <p className="mt-4">
          Nothing in these Terms excludes any rights you may have under the
          Consumer Guarantees Act 1993, the Fair Trading Act 1986 or any other
          law that cannot legally be excluded.
        </p>
      </>
    ),
  },

  {
    title: "Changes to these terms",
    content: (
      <>
        <p>
          We may update these Terms and Conditions from time to time. Any
          changes will take effect once published on this website.
        </p>
      </>
    ),
  },

  {
    title: "Governing law",
    content: (
      <>
        <p>
          These Terms and Conditions are governed by the laws of New Zealand.
          Any disputes relating to these terms will be subject to the
          jurisdiction of the New Zealand courts.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Website Terms"
        title="Terms and Conditions"
        description="The terms that apply when you use the NeedIt Life website."
      />

      <section className="section-space bg-warm-white">
        <Container className="max-w-6xl">
          <div className="space-y-12 px-20">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-forest-950">
                  {section.title}
                </h2>

                <div className="mt-5 space-y-4 text-base leading-8 text-muted">
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
