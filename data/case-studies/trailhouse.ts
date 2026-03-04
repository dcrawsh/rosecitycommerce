import { CaseStudy } from "@/data/case-studies/types";

export const trailhouse: CaseStudy = {
  slug: "trailhouse-outfitters-shopify-growth-rebuild",
  title: "Portland outdoor brand Shopify rebuild with higher conversion",
  client: "Trailhouse Outfitters",
  businessType: "Outdoor apparel ecommerce brand",
  challenge:
    "Slow product pages, inconsistent analytics, and paid landing page friction were limiting revenue growth.",
  excerpt:
    "Shopify rebuild and tracking cleanup that improved conversion and reduced paid waste.",
  tags: ["Shopify", "CRO", "Analytics", "Ads"],
  context:
    "The team needed senior implementation support without slowing existing campaigns and merchandising releases.",
  goals: [
    "Increase mobile conversion rate",
    "Improve page speed on core revenue templates",
    "Clean attribution for paid channels"
  ],
  workDone: [
    "Rebuilt key Shopify templates with modular, conversion-focused sections",
    "Improved product page hierarchy and add-to-cart clarity",
    "Implemented GA4 + GTM event schema and validation",
    "Aligned paid landing pages with ad intent"
  ],
  measurableImprovement:
    "Conversion improved, pages loaded faster, and CPA dropped after storefront and measurement updates.",
  stack: ["Shopify", "Liquid", "GA4", "GTM", "Google Ads", "Looker Studio"],
  metrics: [
    { label: "Conversion rate", before: "1.9%", after: "2.6%", delta: "+36.8%" },
    { label: "Mobile LCP", before: "4.2s", after: "2.6s", delta: "-38.1%" },
    { label: "Paid CPA", before: "$74", after: "$58", delta: "-21.6%" }
  ],
  lessons: [
    "Performance and merchandising improvements compound when analytics is reliable.",
    "Clearer PDP structure outperformed promotional clutter."
  ],
  image: "/images/case-trailhouse.svg"
};
