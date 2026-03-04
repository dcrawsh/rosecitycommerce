export const builtForPortlandTeams = [
  "Home services and trades: remodelers, painters, HVAC, electricians, and landscapers that need more qualified local leads.",
  "Professional services: law, accounting, therapy, clinics, and consultants that need clear websites and intake workflows.",
  "Food, retail, and maker brands: coffee shops, bakeries, boutiques, and local product brands that want stronger ecommerce sales."
] as const;

export const capabilityBuckets = [
  {
    title: "Websites",
    outcome:
      "Build clear, fast websites that help people trust your business and contact you faster.",
    deliverable: "Example deliverable: Lead-gen site with forms, scheduling, and review highlights."
  },
  {
    title: "Ecommerce",
    outcome:
      "Launch or improve Shopify stores so customers find products quickly and complete checkout with less friction.",
    deliverable: "Example deliverable: Shopify build or migration with merchandising and checkout fixes."
  },
  {
    title: "Integrations & Automations",
    outcome:
      "Set up once and let it run: connect your tools so leads, tasks, and follow-ups move automatically.",
    deliverable: "Example deliverable: Form -> Mailchimp/Klaviyo -> Asana/Jira task -> Slack alert."
  },
  {
    title: "Growth & Measurement",
    outcome:
      "Improve visibility and decision-making with local SEO, cleaner tracking, and practical reporting.",
    deliverable: "Example deliverable: GA4/GTM cleanup and dashboard tied to leads or sales."
  }
] as const;

export const processSteps = [
  {
    title: "Quick audit",
    description: "Review your current site, tools, and bottlenecks to identify the highest-impact next move."
  },
  {
    title: "Plan + estimate",
    description: "Translate priorities into a clear scope, timeline, and pricing before development starts."
  },
  {
    title: "Build + integrate",
    description: "Implement the website, ecommerce updates, and automations with practical handoff documentation."
  },
  {
    title: "Launch + iterate",
    description: "Ship confidently, monitor outcomes, and improve based on real lead and sales data."
  }
] as const;

export const platformBadges = [
  "Shopify",
  "SFCC",
  "Next.js",
  "Google Analytics (GA4)",
  "GTM",
  "Segment",
  "Mailchimp",
  "Klaviyo",
  "Asana",
  "Jira",
  "Slack",
  "Google Ads"
] as const;

export const trustStats = [
  "Portland-based support",
  "Direct senior engineering partner",
  "Web + ecommerce + automation",
  "Built for small teams"
] as const;

export const packages: Array<{
  name: string;
  startingAt: string;
  summary: string;
  features: string[];
  featured?: boolean;
}> = [
  {
    name: "Starter",
    startingAt: "$2,500",
    summary: "Fast kickoff package",
    features: ["Scoping", "Build", "Launch"]
  }
];
