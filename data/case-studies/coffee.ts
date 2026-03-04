import { CaseStudy } from "@/data/case-studies/types";

export const coffeeSubscriptions: CaseStudy = {
  slug: "coffee-brand-shopify-subscriptions",
  title: "Coffee brand Shopify upgrade with subscriptions",
  client: "Portland Coffee Brand (anonymized)",
  businessType: "Food & beverage retail",
  excerpt: "Improved subscription flow and product merchandising for repeat sales.",
  tags: ["Shopify", "CRO", "Tracking"],
  context:
    "A growing coffee brand had strong product demand but low subscription conversion.",
  problem:
    "Product pages were cluttered and subscription benefits were unclear, causing lower retention and repeat revenue.",
  solution: [
    "Reworked product templates to prioritize subscription options",
    "Improved collection filtering and merchandising",
    "Added clearer value messaging for recurring orders",
    "Cleaned up subscription event tracking"
  ],
  results: [
    "+28% lift in subscription checkout starts",
    "+17% increase in average order value",
    "Improved repeat purchase visibility in analytics"
  ],
  stack: ["Shopify", "Klaviyo", "GA4", "GTM"],
  image: "/images/case-lumen.svg"
};
