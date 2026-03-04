import { CaseStudy } from "@/data/case-studies/types";

export const contractorLeadGen: CaseStudy = {
  slug: "portland-contractor-lead-gen-mailchimp",
  title: "Portland contractor site with lead automation",
  client: "Portland Contractor (anonymized)",
  businessType: "Home services / remodeling",
  excerpt: "Rebuilt lead-gen site and automated follow-up to reduce missed inquiries.",
  tags: ["Websites", "Automation", "Tracking"],
  context:
    "A small contractor team relied on manual inbox checks and had no clear follow-up workflow.",
  problem:
    "Leads were coming in from multiple forms and calls, but response times were inconsistent and tracking was incomplete.",
  solution: [
    "Built a faster lead-gen website with clearer service pages and CTA hierarchy",
    "Integrated form submissions with Mailchimp audiences",
    "Added automated Slack alerts and task creation for new leads",
    "Implemented basic conversion tracking for quote requests"
  ],
  results: [
    "+41% increase in qualified form submissions",
    "Median lead response time dropped from 19 hours to 3.5 hours",
    "Clear weekly reporting on lead sources"
  ],
  stack: ["Next.js", "Mailchimp", "Slack", "GA4", "GTM"],
  image: "/images/case-trailhouse.svg"
};
