export const capabilityBuckets = [
  {
    title: "Build",
    items: [
      "Shopify store builds for Portland brands ready to sell online",
      "Ecommerce site development focused on clean, maintainable storefronts",
      "Integrations that connect your storefront, operations, and marketing tools"
    ]
  },
  {
    title: "Optimize",
    items: [
      "Improve conversion with faster pages and better product layouts",
      "Site speed improvements that reduce bounce and increase add-to-cart",
      "UX and checkout optimization to remove purchase friction"
    ]
  },
  {
    title: "Grow",
    items: [
      "Technical SEO improvements that increase qualified organic traffic",
      "Google Ads support aligned to landing pages and conversion goals",
      "Product feed optimization to improve visibility and paid efficiency"
    ]
  },
  {
    title: "Measure",
    items: [
      "GA4 setup and analytics cleanup for reliable reporting",
      "Conversion tracking that reflects real business outcomes",
      "Dashboards your team can actually use for decision-making"
    ]
  }
] as const;

export const processSteps = [
  {
    title: "Audit",
    description:
      "Assess storefront performance, funnel friction, and data quality to identify where revenue is leaking."
  },
  {
    title: "Plan",
    description:
      "Prioritize opportunities by impact and effort, then align implementation with your team cadence."
  },
  {
    title: "Build",
    description:
      "Ship technical improvements across storefront, integrations, and measurement stack with clean QA."
  },
  {
    title: "Optimize",
    description:
      "Measure results, iterate with experiments, and scale what works across channels and templates."
  }
] as const;

type PricingPackage = {
  name: string;
  startingAt: string;
  summary: string;
  features: string[];
  featured?: boolean;
};

export const packages: PricingPackage[] = [
  {
    name: "Sprint",
    startingAt: "$3,500",
    summary: "Focused fix for a high-impact bottleneck.",
    features: [
      "1 core objective",
      "Audit + implementation",
      "2-week turnaround",
      "Outcome recap"
    ]
  },
  {
    name: "Growth Build",
    startingAt: "$8,500",
    summary: "Storefront + measurement upgrades for compounding gains.",
    features: [
      "Cross-functional roadmap",
      "Dev + CRO execution",
      "Tracking and attribution cleanup",
      "4-6 week engagement"
    ],
    featured: true
  },
  {
    name: "Ongoing Optimization",
    startingAt: "$2,800/mo",
    summary: "Monthly iteration for speed, conversion, and marketing efficiency.",
    features: [
      "Experiment backlog",
      "Performance and SEO maintenance",
      "Channel landing page support",
      "Monthly reporting"
    ]
  }
];

export const trustStats = [
  "Portland-based ecommerce consultant",
  "Shopify + Salesforce Commerce Cloud",
  "Senior engineer-led delivery",
  "Fast storefronts, higher conversion, clear analytics"
] as const;

export const platformBadges = [
  "Shopify",
  "SFCC",
  "GA4",
  "GTM",
  "Segment",
  "Klaviyo",
  "Google Ads"
] as const;
