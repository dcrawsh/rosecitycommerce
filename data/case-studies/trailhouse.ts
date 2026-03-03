import { CaseStudy } from "@/data/case-studies/types";

export const trailhouse: CaseStudy = {
  slug: "trailhouse-outfitters-shopify-growth-rebuild",
  title: "Shopify rebuild that lifted conversion and cut paid waste",
  client: "Trailhouse Outfitters",
  excerpt:
    "Replatformed a slowing storefront, tightened analytics, and improved paid landing flow.",
  tags: ["Shopify", "CRO", "Analytics", "Ads"],
  context:
    "An outdoor apparel brand on an aging theme had slow PDPs, unreliable campaign attribution, and checkout drop-off during mobile sessions.",
  goals: [
    "Increase mobile conversion rate",
    "Improve page speed on core revenue templates",
    "Clean attribution for paid channels"
  ],
  workDone: [
    "Built a lean Shopify OS 2.0 theme architecture with modular sections",
    "Refactored PDP content hierarchy for faster scan and stronger add-to-cart intent",
    "Implemented GA4 + GTM event schema with server-side purchase validation",
    "Reworked Google Ads landing pages and audience exclusions"
  ],
  stack: ["Shopify", "Liquid", "GA4", "GTM", "Google Ads", "Looker Studio"],
  metrics: [
    { label: "Conversion rate", before: "1.9%", after: "2.6%", delta: "+36.8%" },
    { label: "Mobile LCP", before: "4.2s", after: "2.6s", delta: "-38.1%" },
    { label: "Paid CPA", before: "$74", after: "$58", delta: "-21.6%" }
  ],
  lessons: [
    "Performance and merchandising changes compound when analytics is clean.",
    "Fewer, clearer PDP decisions outperformed adding more promotional clutter."
  ],
  image: "/images/case-trailhouse.svg"
};
