import { CaseStudy } from "@/data/case-studies/types";

export const retailerSpeedCRO: CaseStudy = {
  slug: "local-retailer-shopify-speed-cro",
  title: "Ecommerce performance and PDP cleanup",
  client: "Representative project category",
  businessType: "Performance / product pages",
  excerpt: "A focused optimization project for slow storefronts, heavy app scripts, and unclear product pages.",
  tags: ["Shopify", "CRO", "SEO"],
  context:
    "Storefronts often slow down after years of theme edits, app installs, tracking scripts, and content changes.",
  problem:
    "Slow mobile pages and unclear product-page hierarchy make it harder for shoppers to compare products and move toward checkout.",
  solution: [
    "Audit image, script, app, and template loading",
    "Refine mobile PDP layout, gallery behavior, and add-to-cart placement",
    "Remove redundant scripts and simplify theme logic where possible",
    "Check product schema, tracking events, and key landing pages"
  ],
  results: [
    "Before/after performance data needed",
    "Approved screenshots or Lighthouse/PageSpeed captures needed",
    "Storefront constraints and app stack needed"
  ],
  stack: ["Shopify", "GA4", "GTM", "Search Console"],
  image: "/images/case-trailhouse.svg"
};
