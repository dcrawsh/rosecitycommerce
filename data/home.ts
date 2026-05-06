export const builtForPortlandTeams = [
  "Home services and trades: remodelers, painters, HVAC, electricians, and landscapers that need more qualified local leads.",
  "Professional services: law, accounting, therapy, clinics, and consultants that need clear websites and intake workflows.",
  "Food, retail, and maker brands: coffee shops, bakeries, boutiques, and local product brands that want stronger ecommerce sales."
] as const;

export const capabilityBuckets = [
  {
    title: "Storefronts",
    outcome:
      "Build or improve Shopify storefronts so customers can browse products, understand options, and check out without friction.",
    deliverable: "Typical work: Shopify builds, migrations, theme updates, PDPs, collections, and product galleries."
  },
  {
    title: "Performance",
    outcome:
      "Tighten slow or messy ecommerce experiences by removing bottlenecks in themes, scripts, images, and templates.",
    deliverable: "Typical work: Core Web Vitals cleanup, mobile PDP fixes, app/script audits, and analytics checks."
  },
  {
    title: "Product Data",
    outcome:
      "Organize product information so catalogs, metafields, feeds, and internal tools stay easier to manage.",
    deliverable: "Typical work: metafield planning, product imports, sync tooling, feed cleanup, and admin workflows."
  },
  {
    title: "Websites & Automation",
    outcome:
      "Rebuild small business websites and connect forms, email, task systems, and notifications around the way the team works.",
    deliverable: "Typical work: WordPress to Next.js migrations, lead-gen sites, form routing, and Slack/Asana alerts."
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
  "Direct two-person team",
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
