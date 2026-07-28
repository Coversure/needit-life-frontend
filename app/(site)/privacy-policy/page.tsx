import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How NeedIt Life collects, uses, stores, discloses and protects personal information.",
};

const sections = [
  {
    title: "About this Privacy Policy",
    content: (
      <>
        <p>
          This Privacy Policy explains how Coversure Financial Services Limited
          collects, uses, stores, discloses and protects personal information in
          connection with NeedIt Life.
        </p>

        <p className="mt-4">
          NeedIt Life is a trading name of{" "}
          <strong>Coversure Financial Services Limited</strong> (NZBN
          9429047688780, FSP722232).
        </p>

        <p className="mt-4">
          This Privacy Policy applies to your use of the NeedIt Life website,
          insurance applications, enquiries, communications and any other
          interactions you have with us.
        </p>

        <p className="mt-4">
          We handle personal information in accordance with the Privacy Act 2020
          and other applicable New Zealand laws.
        </p>
      </>
    ),
  },
  {
    title: "Personal information we collect",
    content: (
      <>
        <p>
          We only collect personal information that is reasonably necessary for
          the services we provide. The information we collect depends on the
          nature of your relationship with us and the services you request.
        </p>

        <p className="mt-4">This may include:</p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Your name, date of birth and contact details.</li>
          <li>Your occupation and employment information.</li>
          <li>
            Information about your personal circumstances and insurance needs.
          </li>
          <li>
            Financial information relevant to an insurance application or
            enquiry.
          </li>
          <li>
            Health or medical information where required for insurance purposes.
          </li>
          <li>
            Records of your consent, enquiries, applications and communications
            with us.
          </li>
          <li>
            Technical information such as your IP address, device information,
            browser type and website activity.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Information you provide to us",
    content: (
      <>
        <p>
          We collect personal information that you provide when you use the
          NeedIt Life website, submit an enquiry, complete an insurance
          application, request advice or communicate with us.
        </p>

        <p className="mt-4">
          You are responsible for ensuring that the information you provide is
          accurate, complete and current.
        </p>

        <p className="mt-4">
          If you provide personal information about another person, you must
          have their authority to provide that information to us.
        </p>
      </>
    ),
  },
  {
    title: "Information collected from third parties",
    content: (
      <>
        <p>
          Where necessary, we may collect personal information about you from
          third parties, including:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Insurers and reinsurers.</li>
          <li>Financial Advisers and Nominated Representatives.</li>
          <li>Medical professionals.</li>
          <li>Claims assessors.</li>
          <li>Referral partners.</li>
          <li>Identity verification providers.</li>
          <li>Government agencies or public records.</li>
          <li>Technology and service providers.</li>
        </ul>

        <p className="mt-4">
          We will only collect information from third parties with your consent
          or where collection is otherwise permitted by law.
        </p>
      </>
    ),
  },
  {
    title: "Sensitive personal information",
    content: (
      <>
        <p>
          We may collect sensitive personal information, including health and
          medical information, where it is required to assess an insurance
          application, administer a policy or process a claim.
        </p>

        <p className="mt-4">
          Sensitive information will only be collected with your consent or
          where permitted by law. We take additional care when storing, using
          and disclosing this information.
        </p>
      </>
    ),
  },
  {
    title: "Website, cookies and analytics",
    content: (
      <>
        <p>
          When you use the NeedIt Life website, we may automatically collect
          technical information about your visit.
        </p>

        <p className="mt-4">This may include:</p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Your IP address.</li>
          <li>Your browser and device type.</li>
          <li>The pages you visit.</li>
          <li>The date and time of your visit.</li>
          <li>The website or advertisement that referred you to us.</li>
          <li>Your interactions with website forms and features.</li>
        </ul>

        <p className="mt-4">
          We may use cookies, analytics tools and similar technologies to
          operate the website, improve performance, understand how visitors use
          the site and protect the website from fraud or misuse.
        </p>

        <p className="mt-4">
          You can adjust your browser settings to block or delete cookies.
          However, some website features may not function correctly if cookies
          are disabled.
        </p>
      </>
    ),
  },
  {
    title: "How we use personal information",
    content: (
      <>
        <p>
          We use personal information only for the purposes for which it was
          collected or for another purpose permitted by law.
        </p>

        <p className="mt-4">We may use your personal information to:</p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Respond to your questions and enquiries.</li>
          <li>
            Assess your eligibility for insurance products available through
            NeedIt Life.
          </li>
          <li>
            Provide financial advice where advice has been requested or is
            otherwise provided.
          </li>
          <li>Submit and manage insurance applications on your behalf.</li>
          <li>
            Allow an insurer to assess risk, eligibility, policy terms and
            premiums.
          </li>
          <li>Administer and support your insurance policy.</li>
          <li>Manage renewals, policy changes and customer support.</li>
          <li>Assess, manage and process insurance claims.</li>
          <li>Verify your identity and prevent fraud or misuse.</li>
          <li>
            Comply with legal, regulatory, reporting and record-keeping
            obligations.
          </li>
          <li>
            Improve our website, systems, services and customer experience.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Marketing communications",
    content: (
      <>
        <p>
          With your consent, we may use your personal information to send you
          information about products, services and updates that may be relevant
          to you.
        </p>

        <p className="mt-4">
          Consent to receive marketing communications is optional. You may
          withdraw your consent at any time by:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Using the unsubscribe link in an email.</li>
          <li>Following the opt-out instructions in a message.</li>
          <li>Contacting us directly.</li>
        </ul>

        <p className="mt-4">
          Unsubscribing from marketing communications will not prevent us from
          contacting you about an existing enquiry, application, policy or
          service request.
        </p>
      </>
    ),
  },
  {
    title: "AI and other technology tools",
    content: (
      <>
        <p>
          We may use secure technology tools, including AI-assisted tools, to
          help record, transcribe, summarise or review meetings and
          communications.
        </p>

        <p className="mt-4">
          These tools may be used to improve accuracy, maintain records,
          streamline administration and support the services we provide.
        </p>

        <p className="mt-4">
          Some technology providers may process or store information outside New
          Zealand. Where personal information is handled by an overseas
          provider, we take reasonable steps to ensure appropriate privacy and
          security safeguards are in place.
        </p>

        <p className="mt-4">
          Where your consent is required for a particular use, such as recording
          a meeting, you may withdraw that consent by notifying us. Withdrawing
          consent may affect our ability to provide some services.
        </p>
      </>
    ),
  },
  {
    title: "Disclosure of personal information",
    content: (
      <>
        <p>
          We may disclose your personal information where this is necessary to
          provide our services, arrange insurance or comply with our legal
          obligations.
        </p>

        <p className="mt-4">Your personal information may be disclosed to:</p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Insurers and reinsurers.</li>
          <li>Financial Advisers and Nominated Representatives.</li>
          <li>Claims assessors and investigators.</li>
          <li>Medical professionals and health service providers.</li>
          <li>Identity verification and fraud prevention providers.</li>
          <li>
            IT, website hosting, database, email and communications providers.
          </li>
          <li>Professional advisers, including lawyers and accountants.</li>
          <li>
            Government agencies, regulators, law enforcement agencies and
            courts.
          </li>
          <li>Other parties where you have provided your consent.</li>
        </ul>

        <p className="mt-4">
          Third-party service providers are expected to protect your personal
          information and only use it for the purpose for which it was
          disclosed.
        </p>
      </>
    ),
  },
  {
    title: "Insurance provider",
    content: (
      <>
        <p>
          NeedIt Life distributes and promotes insurance products issued by{" "}
          <strong>Momentum Life Limited</strong> (NZBN 9429041981658,
          FSP472286).
        </p>

        <p className="mt-4">
          Where you apply for an insurance product, your personal information
          may be provided to Momentum Life Limited so it can assess your
          application, issue and administer your policy, provide customer
          support and assess any future claim.
        </p>

        <p className="mt-4">
          Momentum Life Limited may also collect, use, hold and disclose your
          information in accordance with its own privacy policy.
        </p>
      </>
    ),
  },
  {
    title: "Overseas storage and disclosure",
    content: (
      <>
        <p>
          Some of our insurers, reinsurers, technology providers and other
          service providers may be located outside New Zealand or may store
          information using systems located overseas.
        </p>

        <p className="mt-4">
          Where personal information is disclosed or stored outside New Zealand,
          we take reasonable steps to ensure the recipient is subject to privacy
          safeguards that are comparable to those required under New Zealand
          law.
        </p>
      </>
    ),
  },
  {
    title: "If you do not provide information",
    content: (
      <>
        <p>
          You are not required to provide personal information to us. However,
          if you choose not to provide information that is reasonably required,
          we may be unable to:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Respond fully to your enquiry.</li>
          <li>Provide financial advice.</li>
          <li>Assess your eligibility for insurance.</li>
          <li>Arrange or administer insurance cover.</li>
          <li>Assist with policy changes or customer support.</li>
          <li>Assess or process a claim.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Security of personal information",
    content: (
      <>
        <p>
          We take reasonable steps to protect personal information from loss,
          misuse, unauthorised access, modification or disclosure.
        </p>

        <p className="mt-4">
          These measures may include access controls, secure systems,
          authentication requirements, staff permissions, monitoring and
          contractual obligations placed on service providers.
        </p>

        <p className="mt-4">
          No method of transmitting or storing information is completely secure.
          You should take reasonable steps to protect your account, devices,
          passwords and personal information.
        </p>
      </>
    ),
  },
  {
    title: "Retention of personal information",
    content: (
      <>
        <p>
          We retain personal information only for as long as reasonably
          necessary to provide our services and meet our legal, regulatory,
          insurance and record-keeping obligations.
        </p>

        <p className="mt-4">
          In most cases, client records will be retained for a minimum of seven
          years. Information may be retained for longer where this is required
          by law or reasonably necessary in connection with an insurance policy,
          complaint, claim or legal matter.
        </p>

        <p className="mt-4">
          When information is no longer required, we will take reasonable steps
          to securely delete it, destroy it or remove identifying details.
        </p>
      </>
    ),
  },
  {
    title: "Privacy breaches",
    content: (
      <>
        <p>
          If a privacy breach occurs, we will assess the nature and impact of
          the breach and take reasonable steps to contain and address it.
        </p>

        <p className="mt-4">
          Where a privacy breach has caused, or is likely to cause, serious
          harm, we will notify affected individuals and the Office of the
          Privacy Commissioner in accordance with the Privacy Act 2020.
        </p>
      </>
    ),
  },
  {
    title: "Accessing and correcting your information",
    content: (
      <>
        <p>
          You may request access to personal information we hold about you. You
          may also ask us to correct information that you believe is inaccurate,
          incomplete or out of date.
        </p>

        <p className="mt-4">
          We may need to verify your identity before responding to a request.
          Some requests may be refused or limited where permitted by law.
        </p>

        <p className="mt-4">
          If we do not make a correction you have requested, you may ask us to
          attach a statement of correction to the information.
        </p>
      </>
    ),
  },
  {
    title: "Changes to this Privacy Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          to our services, systems, providers or legal obligations.
        </p>

        <p className="mt-4">
          The latest version will be published on the NeedIt Life website. We
          recommend reviewing this policy periodically.
        </p>
      </>
    ),
  },
  {
    title: "Contact us",
    content: (
      <>
        <p>
          If you have any questions, concerns or complaints about this Privacy
          Policy or how we handle your personal information, please contact our
          Privacy Officer:
        </p>

        <div className="mt-6 rounded-2xl border border-line bg-sage-100 p-6">
          <p className="font-bold text-forest-950">
            Coversure Financial Services Limited
          </p>

          <div className="mt-3 space-y-2">
            <p>Unit 5/17 Lambie Drive</p>
            <p>Manukau, Auckland 2010</p>

            <p className="pt-2">
              <strong>Phone:</strong>{" "}
              <a
                href="tel:0800121254"
                className="text-brand-green hover:underline"
              >
                0800 121 254
              </a>
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:coverme@coversure.co.nz"
                className="text-brand-green hover:underline"
              >
                coverme@coversure.co.nz
              </a>
            </p>
          </div>
        </div>

        <p className="mt-5">
          We will acknowledge your complaint within a reasonable timeframe and
          aim to resolve it within 20 working days.
        </p>
      </>
    ),
  },
  {
    title: "Office of the Privacy Commissioner",
    content: (
      <>
        <p>
          If your privacy concern is not resolved to your satisfaction, you may
          contact the Office of the Privacy Commissioner.
        </p>

        <div className="mt-6 rounded-2xl border border-line bg-sage-100 p-6">
          <p className="font-bold text-forest-950">
            Office of the Privacy Commissioner
          </p>

          <div className="mt-3 space-y-2">
            <p>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:0800803809"
                className="text-brand-green hover:underline"
              >
                0800 803 909
              </a>
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:enquiries@privacy.org.nz"
                className="text-brand-green hover:underline"
              >
                enquiries@privacy.org.nz
              </a>
            </p>

            <p>
              <strong>Website:</strong>{" "}
              <a
                href="https://www.privacy.org.nz"
                target="_blank"
                rel="noreferrer"
                className="text-brand-green hover:underline"
              >
                privacy.org.nz
              </a>
            </p>
          </div>
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="How we handle your personal information"
        description="Effective from 29 April 2026"
      />

      <section className="section-space bg-warm-white">
        <Container className="max-w-5xl">
          <div className="rounded-[2rem] border border-line bg-white p-7 shadow-sm sm:p-10">
            <div className="space-y-12">
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
          </div>
        </Container>
      </section>
    </>
  );
}
