import { CaseStudy } from "@/data/case-studies/types";

export const northstar: CaseStudy = {
  slug: "northstar-home-sfcc-performance-analytics",
  title: "SFCC performance sprint with measurable checkout gains",
  client: "Northstar Home",
  excerpt:
    "Stabilized SFCC storefront performance, reduced cart friction, and restored trustworthy reporting.",
  tags: ["SFCC", "CRO", "Analytics"],
  context:
    "A home goods retailer on SFCC saw rising ad spend but flat revenue growth due to slow category pages and inconsistent tracking across locale sites.",
  goals: [
    "Lower template render bottlenecks",
    "Reduce checkout abandonment",
    "Standardize event tracking across locales"
  ],
  workDone: [
    "Optimized cartridge-level asset loading and deferred non-critical scripts",
    "Simplified multi-step checkout UI and improved error handling",
    "Defined shared analytics schema across locales and channel touchpoints",
    "Delivered dashboard views for acquisition and merchandising teams"
  ],
  stack: ["SFCC", "ISML", "SCAPI", "GA4", "GTM", "BigQuery"],
  metrics: [
    { label: "Checkout completion", before: "47%", after: "58%", delta: "+11 pts" },
    { label: "Category page load", before: "3.7s", after: "2.3s", delta: "-37.8%" },
    { label: "Tracked revenue confidence", before: "71%", after: "94%", delta: "+23 pts" }
  ],
  lessons: [
    "Small checkout friction points become major revenue leaks at scale.",
    "Shared data contracts reduce reporting conflicts between teams."
  ],
  image: "/images/case-northstar.svg"
};
