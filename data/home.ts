export const capabilityBuckets = [
  {
    title: "Build & Integrations",
    items: [
      "Shopify theme and section development",
      "SFCC cartridge and site enhancements",
      "Headless and API integrations",
      "PIM/ERP integration support"
    ]
  },
  {
    title: "Optimize & CRO",
    items: [
      "Speed and Core Web Vitals improvements",
      "UX and checkout flow refinement",
      "Experiment and test planning",
      "Merchandising architecture"
    ]
  },
  {
    title: "Growth & Marketing",
    items: [
      "Technical SEO and on-page improvements",
      "Google Ads support and landing alignment",
      "Email/SMS lifecycle fundamentals",
      "Tracking and attribution cleanup"
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
  "Shopify + SFCC experience",
  "Senior engineer-led delivery",
  "Performance + growth integrated",
  "Built to work with existing teams"
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
