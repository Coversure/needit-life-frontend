import type { ResourceArticle } from "@/types";

export const resources: ResourceArticle[] = [
  {
    slug: "life-cover-with-a-pre-existing-condition",
    category: "Eligibility",
    title: "Can you get life cover with a pre-existing condition?",
    excerpt:
      "A pre-existing condition does not always close the door on life cover. Learn what waiting periods, exclusions and policy terms can mean.",
    readTime: "5 min read",
    publishedAt: "2026-06-24",
    body: [
      {
        heading: "A medical history does not tell the whole story",
        paragraphs: [
          "Traditional life insurance often asks detailed medical questions before cover is offered. Quick Life takes a different approach, with an easier application pathway designed for people who may have found traditional underwriting difficult.",
          "The important detail is how the policy treats conditions that existed before cover began. A waiting period or exclusion may apply, so the policy wording should always be read carefully before a decision is made.",
        ],
      },
      {
        heading: "Questions worth asking",
        paragraphs: [
          "Ask when cover starts, what counts as a pre-existing condition, how terminal illness claims are treated and which events are excluded during an initial period.",
          "A clear explanation should help you understand both what is covered and what is not. This article is general information and does not replace the policy wording or personalised advice.",
        ],
      },
    ],
  },
  {
    slug: "life-cover-after-a-previous-decline",
    category: "Applications",
    title: "What happens if you were previously declined for life insurance?",
    excerpt:
      "A previous decline can be discouraging, but it may not be the end of your search. Here are practical next steps.",
    readTime: "4 min read",
    publishedAt: "2026-06-18",
    body: [
      {
        heading: "Understand why the earlier application was declined",
        paragraphs: [
          "Insurers assess applications differently. A decline may relate to medical information, occupation, lifestyle or the type and amount of cover requested.",
          "Knowing the reason can help you ask better questions when considering another product. Keep any previous correspondence and make sure future applications are answered accurately.",
        ],
      },
      {
        heading: "Look for products with a different acceptance approach",
        paragraphs: [
          "Some products are designed to reduce or remove medical underwriting. They may use waiting periods or other policy conditions instead.",
          "Compare the cover amount, premium, exclusions and claims conditions rather than focusing only on whether acceptance is simple.",
        ],
      },
    ],
  },
  {
    slug: "understanding-life-insurance-waiting-periods",
    category: "Policy basics",
    title: "Understanding life insurance waiting periods",
    excerpt:
      "Waiting periods can affect when some causes of death or illness become covered. This guide explains the basics in plain language.",
    readTime: "6 min read",
    publishedAt: "2026-06-10",
    body: [
      {
        heading: "What a waiting period does",
        paragraphs: [
          "A waiting period is a defined time after a policy starts when certain claims may not be payable. It is often used in products that offer simplified or guaranteed acceptance.",
          "Accidental death may be treated differently from death connected to a pre-existing condition, depending on the policy. The exact definitions matter.",
        ],
      },
      {
        heading: "Read the policy wording before applying",
        paragraphs: [
          "Marketing summaries are useful, but the policy wording is the legal document that explains eligibility, exclusions and claims requirements.",
          "Ask for help if any term is unclear. A good provider should explain the waiting period without minimising its importance.",
        ],
      },
    ],
  },
];

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}
