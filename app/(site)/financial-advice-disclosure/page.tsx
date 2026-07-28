import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Financial Advice Disclosure",
  description: "Financial advice disclosure information for NeedIt Life.",
};

export default function FinancialAdviceDisclosurePage() {
  return (
    <>
      <PageHero
        eyebrow="Disclosure Statement"
        title="Financial Advice Disclosure Statement"
        description="Prepared on 26 July 2026"
      />

      <section className="section-space bg-warm-white">
        <Container className="max-w-6xl">
          <div className="rounded-[2rem] border border-line bg-white shadow-sm py-10 px-20">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-brand-green" />
              <h2 className="text-2xl font-extrabold text-forest-950">
                Licence status and conditions
              </h2>
            </div>

            <div className="mt-8 space-y-10 text-muted">
              <section>
                <p className="leading-7">
                  NeedIt Life is a trading name of{" "}
                  <span>
                    <a
                      href="https://coversure.co.nz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold transition hover:font-bold"
                    >
                      Coversure Financial Services Limited
                    </a>
                  </span>{" "}
                  (NZBN 9429047688780, FSP722232) ("we", "us" or "our").
                </p>

                <p className="mt-4 leading-7">
                  We are registered on the Financial Service Providers Register
                  and are licensed by the Financial Markets Authority to provide
                  a financial advice service.
                </p>

                <p className="mt-4 leading-7">
                  We engage our staff as Financial Advisers and Nominated
                  Representatives to provide financial advice on our behalf.
                </p>

                <p className="mt-4 leading-7">
                  We are a distributor and promoter of insurance products issued
                  by{" "}
                  <span>
                    <a
                      href="https://momentumlife.co.nz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold transition hover:font-bold"
                    >
                      Momentum Life Limited
                    </a>
                  </span>{" "}
                  (NZBN 9429041981658, FSP472286). Neither we nor our staff
                  provide financial advice on behalf of the insurer.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-forest-950">
                  Our duties
                </h3>

                <p className="mt-4 leading-7">
                  Under the Financial Markets Conduct Act 2013 we are required
                  to:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
                  <li>Treat you fairly.</li>
                  <li>Be honest with you.</li>
                  <li>Provide financial advice that is suitable for you.</li>
                  <li>Protect your privacy and confidential information.</li>
                  <li>
                    Maintain the competence and skill required to provide
                    financial advice.
                  </li>
                </ul>

                <p className="mt-6 leading-7">
                  We must also maintain the ethical and behavioural standards
                  required under the Financial Markets Conduct Act 2013 and the
                  Code of Professional Conduct for Financial Advice Services.
                  This means Coversure Financial Services Limited and our
                  Financial Advisers will:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-6 leading-7">
                  <li>
                    Meet the required standards of competence, knowledge and
                    skill.
                  </li>
                  <li>Give priority to our clients' interests.</li>
                  <li>Exercise care, diligence and skill.</li>
                  <li>
                    Meet the standards of ethical behaviour, conduct and client
                    care required under the Code.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-forest-950">
                  Nature and scope of our financial advice
                </h3>

                <p className="mt-4 leading-7">
                  NeedIt Life is designed for customers who wish to purchase
                  eligible insurance products through a simple online process.
                </p>

                <p className="mt-4 leading-7">
                  Where financial advice is provided, it is provided by or on
                  behalf of Coversure Financial Services Limited.
                </p>

                <p className="mt-4 leading-7">
                  Our advice is limited to the insurance products available
                  through NeedIt Life and does not include advice on products
                  offered by other insurers or providers.
                </p>

                <p className="mt-4 leading-7">
                  Any advice we provide is based solely on the information you
                  choose to provide. If you wish to consider options outside
                  NeedIt Life, have complex circumstances or require advice
                  tailored to your wider financial objectives and insurance
                  needs, we recommend speaking with one of our Financial
                  Advisers.
                </p>

                <p className="mt-4 leading-7">
                  If the information you provide is incomplete or inaccurate, we
                  may be unable to provide suitable advice or recommend an
                  appropriate product.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-forest-950">
                  Fees or expenses
                </h3>

                <p className="mt-4 leading-7">
                  We do not charge any fee or other amount for financial advice
                  provided through NeedIt Life.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-forest-950">
                  Reliability history
                </h3>

                <p className="mt-4 leading-7">
                  Coversure Financial Services Limited, including our Financial
                  Advisers and Nominated Representatives, have not been subject
                  to any reliability events. This includes professional
                  indemnity insurance or negligence claims, dispute resolution
                  actions or disciplinary actions.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-forest-950">
                  Conflicts of interest, commissions and incentive payments
                </h3>

                <p className="mt-4 leading-7">
                  As a general rule, we do not participate in provider-funded
                  conferences, entertainment, functions or sales incentive
                  campaigns. Our staff may occasionally accept modest
                  refreshments, such as a cup of coffee or similar hospitality,
                  which are considered immaterial and are not intended to create
                  any real or perceived conflict of interest.
                </p>

                <p className="mt-4 leading-7">
                  The insurer pays us a commission of up to <strong>70%</strong>{" "}
                  of the annual premium together with a renewal commission of{" "}
                  <strong>8%</strong>.
                </p>

                <p className="mt-4 leading-7">
                  If an actual or potential conflict of interest arises, we will
                  promptly disclose it to you and seek to manage or avoid that
                  conflict wherever possible.
                </p>

                <p className="mt-4 leading-7">
                  We manage conflicts by ensuring our Financial Advisers and
                  Nominated Representatives give priority to our clients'
                  interests. If a conflict cannot be managed to your
                  satisfaction, we will withdraw from acting for you and assist
                  with the appointment of another adviser where appropriate.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-forest-950">
                  Complaints handling
                </h3>

                <p className="mt-4 leading-7">
                  If you have a concern or complaint about our service or your
                  product, please contact:
                </p>

                <div className="mt-5 rounded-xl border border-line bg-soft-sage p-5">
                  <p className="font-semibold text-forest-950">Jason Venu</p>
                  <p>Director</p>
                  <p>Coversure Financial Services Limited</p>

                  <div className="mt-4 space-y-1">
                    <p>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:jason@coversure.co.nz"
                        className="text-brand-green hover:underline"
                      >
                        jason@coversure.co.nz
                      </a>
                    </p>
                    <p>
                      <strong>Phone:</strong> 021 238 0610
                    </p>
                  </div>
                </div>

                <p className="mt-5 leading-7">
                  If your complaint cannot be resolved through our internal
                  complaints process, it becomes a dispute.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-forest-950">
                  Dispute resolution
                </h3>

                <ol className="mt-5 list-decimal space-y-3 pl-6 leading-7">
                  <li>
                    Notify us that your complaint has not been resolved and is
                    now a dispute.
                  </li>
                  <li>
                    We will confirm our internal complaints process, expected
                    timeframes and details of our dispute resolution scheme.
                  </li>
                  <li>
                    If necessary, you may also contact the product provider
                    directly through their own complaints process.
                  </li>
                  <li>
                    If the dispute remains unresolved, you may refer the matter
                    to the Financial Disputes Resolution Service (FDRS). Their
                    service is free to you, as we pay the membership costs.
                  </li>
                </ol>

                <div className="mt-6 rounded-xl border border-line bg-soft-sage p-5">
                  <h4 className="font-semibold text-forest-950">
                    Financial Disputes Resolution Service
                  </h4>

                  <div className="mt-3 space-y-2">
                    <p>
                      <strong>Address:</strong> Freepost 231075, PO Box 2272,
                      Wellington 6140
                    </p>
                    <p>
                      <strong>Phone:</strong> 0508 337 337
                    </p>
                    <p>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:enquiries@fdrs.org.nz"
                        className="text-brand-green hover:underline"
                      >
                        enquiries@fdrs.org.nz
                      </a>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
