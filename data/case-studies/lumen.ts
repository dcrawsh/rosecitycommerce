import { CaseStudy } from "@/data/case-studies/types";

export const lumen: CaseStudy = {
  slug: "lumen-pets-seo-cro-compound-growth",
  title: "SEO and CRO cleanup for stronger organic ecommerce growth",
  client: "Lumen Pets",
  businessType: "DTC pet products brand",
  challenge:
    "Indexing issues and weak collection-to-product funnels reduced qualified organic revenue.",
  excerpt:
    "Technical SEO fixes and conversion improvements that increased organic traffic quality.",
  tags: ["SEO", "CRO", "Shopify", "Analytics"],
  context:
    "The brand needed technical cleanup tied directly to revenue pages, not just reporting metrics.",
  goals: [
    "Improve crawl health and indexed page quality",
    "Increase organic sessions to money pages",
    "Improve conversion from SEO landing traffic"
  ],
  workDone: [
    "Resolved canonical conflicts and orphaned collection issues",
    "Improved schema and internal linking on key templates",
    "Restructured collection layouts around purchase intent",
    "Connected SEO landing paths to clearer merchandising flows"
  ],
  measurableImprovement:
    "Indexed pages, organic traffic, and SEO landing conversion all improved after technical and UX updates.",
  stack: ["Shopify", "Search Console", "Screaming Frog", "GA4", "GTM"],
  metrics: [
    { label: "Indexed valid pages", before: "1,240", after: "1,710", delta: "+37.9%" },
    { label: "Organic sessions", before: "52k/mo", after: "69k/mo", delta: "+32.7%" },
    { label: "SEO landing CVR", before: "1.2%", after: "1.8%", delta: "+50.0%" }
  ],
  lessons: [
    "SEO work produces stronger returns when templates are conversion-oriented.",
    "Technical fixes should map directly to ecommerce revenue pages."
  ],
  image: "/images/case-lumen.svg"
};
