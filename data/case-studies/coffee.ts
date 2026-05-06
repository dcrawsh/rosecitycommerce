import { CaseStudy } from "@/data/case-studies/types";

export const coffeeSubscriptions: CaseStudy = {
  slug: "coffee-brand-shopify-subscriptions",
  title: "Shopify storefront build or migration",
  client: "Representative project category",
  businessType: "Shopify / ecommerce",
  excerpt: "A storefront project pattern for product discovery, merchandising, subscriptions, and checkout clarity.",
  tags: ["Shopify", "CRO", "Tracking"],
  context:
    "Growing ecommerce brands often need a cleaner storefront when product count, apps, or merchandising needs outgrow the original theme.",
  problem:
    "Product pages, collections, and subscription or variant flows can become confusing as the catalog and tech stack expand.",
  solution: [
    "Build or migrate the Shopify theme around the current catalog and buying paths",
    "Improve product templates, variant selection, galleries, and subscription messaging",
    "Clean up collection filtering and merchandising rules",
    "Verify checkout, email, and analytics events before launch"
  ],
  results: [
    "Platform, theme, and app stack needed",
    "Approved before/after screenshots needed",
    "Real launch scope and measurable outcomes needed"
  ],
  stack: ["Shopify", "Klaviyo", "GA4", "GTM"],
  image: "/images/case-lumen.svg"
};
