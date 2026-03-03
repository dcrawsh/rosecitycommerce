import { CaseStudy } from "@/data/case-studies/types";

export const lumen: CaseStudy = {
  slug: "lumen-pets-seo-cro-compound-growth",
  title: "Technical SEO and CRO cleanup that increased qualified traffic",
  client: "Lumen Pets",
  excerpt:
    "Fixed crawl/indexing blockers and strengthened conversion paths for organic traffic.",
  tags: ["SEO", "CRO", "Shopify", "Analytics"],
  context:
    "A fast-growing DTC brand had duplicate collections, weak schema, and unclear collection-to-PDP funnels, limiting organic growth and conversion efficiency.",
  goals: [
    "Improve crawl health and indexed page quality",
    "Increase organic sessions to money pages",
    "Improve conversion from SEO landing traffic"
  ],
  workDone: [
    "Audited and resolved canonical conflicts and orphaned collections",
    "Implemented structured data enhancements and internal linking improvements",
    "Reorganized collection templates around intent and margin priorities",
    "Connected SEO landing flows to clear merchandising paths"
  ],
  stack: ["Shopify", "Search Console", "Screaming Frog", "GA4", "GTM"],
  metrics: [
    { label: "Indexed valid pages", before: "1,240", after: "1,710", delta: "+37.9%" },
    { label: "Organic sessions", before: "52k/mo", after: "69k/mo", delta: "+32.7%" },
    { label: "SEO landing CVR", before: "1.2%", after: "1.8%", delta: "+50.0%" }
  ],
  lessons: [
    "SEO wins matter more when templates are built for conversion intent.",
    "Technical cleanup should map directly to revenue pages, not vanity metrics."
  ],
  image: "/images/case-lumen.svg"
};
