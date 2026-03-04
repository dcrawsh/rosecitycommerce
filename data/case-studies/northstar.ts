import { CaseStudy } from "@/data/case-studies/types";

export const northstar: CaseStudy = {
  slug: "northstar-home-sfcc-performance-analytics",
  title: "SFCC optimization that improved checkout completion",
  client: "Northstar Home",
  businessType: "Home goods retailer",
  challenge:
    "Slow category templates and inconsistent analytics across locales were hurting conversion and decision-making.",
  excerpt:
    "SFCC performance and analytics work that increased checkout completion and reporting confidence.",
  tags: ["SFCC", "CRO", "Analytics"],
  context:
    "The company needed a senior developer who could work with existing teams and stabilize both performance and measurement.",
  goals: [
    "Lower template render bottlenecks",
    "Reduce checkout abandonment",
    "Standardize event tracking across locales"
  ],
  workDone: [
    "Optimized SFCC template asset loading and deferred non-critical scripts",
    "Simplified checkout interaction flow and error handling",
    "Standardized analytics schema across locale sites",
    "Delivered practical dashboards for ecommerce and marketing"
  ],
  measurableImprovement:
    "Checkout completion and template speed improved while tracked revenue confidence increased.",
  stack: ["SFCC", "ISML", "SCAPI", "GA4", "GTM", "BigQuery"],
  metrics: [
    { label: "Checkout completion", before: "47%", after: "58%", delta: "+11 pts" },
    { label: "Category page load", before: "3.7s", after: "2.3s", delta: "-37.8%" },
    { label: "Tracked revenue confidence", before: "71%", after: "94%", delta: "+23 pts" }
  ],
  lessons: [
    "Small checkout friction points create meaningful revenue loss at scale.",
    "Shared tracking contracts reduce cross-team reporting issues."
  ],
  image: "/images/case-northstar.svg"
};
