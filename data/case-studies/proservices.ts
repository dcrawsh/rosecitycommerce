import { CaseStudy } from "@/data/case-studies/types";

export const proServicesIntake: CaseStudy = {
  slug: "professional-services-intake-routing",
  title: "Professional services site with intake and routing",
  client: "Professional Services Firm (anonymized)",
  businessType: "Professional services",
  excerpt: "Built a clearer intake flow with scheduling and CRM routing.",
  tags: ["Websites", "Automation", "Tracking"],
  context:
    "A services firm needed a better way to qualify inbound leads before meetings.",
  problem:
    "Website inquiries lacked structure, creating scheduling friction and inconsistent handoff to sales staff.",
  solution: [
    "Built a focused services site with intent-based intake forms",
    "Connected forms to scheduling and CRM routing",
    "Added Slack notifications for high-value requests",
    "Set up source and conversion reporting"
  ],
  results: [
    "+33% increase in qualified consult requests",
    "Scheduling no-show rate reduced by 18%",
    "Faster lead handoff from marketing to intake"
  ],
  stack: ["Next.js", "Calendly", "CRM", "Slack", "GA4"],
  image: "/images/case-northstar.svg"
};
