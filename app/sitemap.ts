import type { MetadataRoute } from "next";
import { resources } from "@/lib/resources";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/quick-life-insurance",
  "/about-us",
  "/faqs",
  "/resources",
  "/resources/documents-and-forms",
  "/contact",
  "/get-a-quote",
  "/existing-customers",
  "/claims",
  "/complaints",
  "/privacy-policy",
  "/terms-and-conditions",
  "/financial-advice-disclosure",
  "/financial-strength",
  "/fair-conduct-programme",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...routes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : route === "/get-a-quote" ? 0.9 : 0.7,
    })),
    ...resources.map((resource) => ({
      url: `${siteConfig.url}/resources/${resource.slug}`,
      lastModified: new Date(resource.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
