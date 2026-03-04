import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { caseStudies } from "@/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/services",
    "/work",
    "/about",
    "/contact",
    "/portland-websites",
    "/shopify-developer-portland",
    "/portland-small-business-automation"
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7
  }));

  const studyPages = caseStudies.map((study) => ({
    url: `${siteConfig.url}/work/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticPages, ...studyPages];
}
