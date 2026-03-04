import { CaseStudy } from "@/data/case-studies/types";

export const sfccSupport: CaseStudy = {
  slug: "sfcc-team-support-analytics-cleanup",
  title: "SFCC team support and analytics cleanup",
  client: "Enterprise Retail Team (anonymized)",
  businessType: "Multi-brand ecommerce",
  excerpt: "Senior SFCC support that improved stability and reporting confidence.",
  tags: ["SFCC", "Tracking", "CRO"],
  context:
    "An internal SFCC team needed senior support for storefront optimization and cleaner analytics.",
  problem:
    "Template performance issues and inconsistent event tracking created release risk and reporting disputes.",
  solution: [
    "Provided cartridge-level performance improvements",
    "Standardized critical ecommerce tracking events",
    "Supported QA and release hardening across core funnels"
  ],
  results: [
    "Category template speed improved by 31%",
    "Checkout completion increased by 9 points",
    "Reporting discrepancies reduced across teams"
  ],
  stack: ["SFCC", "ISML", "GA4", "GTM", "BigQuery"],
  image: "/images/case-northstar.svg"
};
