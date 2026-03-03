export type ServiceItem = {
  slug: string;
  title: string;
  problem: string;
  outcomes: string[];
  deliverables: string[];
  idealFor: string;
  timeline: string;
};

export const services: ServiceItem[] = [
  {
    slug: "shopify",
    title: "Shopify Development",
    problem: "Your store is hard to maintain, slow to iterate, or blocked by app conflicts.",
    outcomes: [
      "Faster shipping of merchandising and campaign updates",
      "Cleaner theme architecture and fewer breakages",
      "Improved conversion paths across PDP, cart, and checkout"
    ],
    deliverables: [
      "Theme sections and templates",
      "App integrations and QA",
      "Checkout extensibility planning",
      "Performance and tracking baseline"
    ],
    idealFor: "Brands on Shopify needing senior-level ownership without hiring a full internal team.",
    timeline: "2-8 weeks depending on scope"
  },
  {
    slug: "sfcc",
    title: "Salesforce Commerce Cloud",
    problem: "Your SFCC site has slow release cycles, technical debt, or integration blind spots.",
    outcomes: [
      "More stable storefront performance",
      "Better integration reliability across systems",
      "Faster iteration on revenue-critical templates"
    ],
    deliverables: [
      "Cartridge and site enhancements",
      "Integration hardening",
      "Template and asset optimization",
      "Analytics instrumentation"
    ],
    idealFor: "Teams that need senior SFCC support integrated with existing engineering and agency partners.",
    timeline: "3-10 weeks"
  },
  {
    slug: "cro",
    title: "CRO & UX",
    problem: "Traffic is growing but conversion is flat or inconsistent.",
    outcomes: [
      "Higher conversion from existing traffic",
      "Lower checkout abandonment",
      "Clearer experimentation roadmap"
    ],
    deliverables: [
      "CRO audit with prioritized backlog",
      "UX fixes for key funnel pages",
      "A/B testing plan",
      "Merchandising recommendations"
    ],
    idealFor: "Brands with steady traffic who want more revenue without relying only on more ad spend.",
    timeline: "2-6 weeks"
  },
  {
    slug: "performance",
    title: "Performance Engineering",
    problem: "Slow pages hurt conversion, rankings, and ad efficiency.",
    outcomes: [
      "Improved Core Web Vitals",
      "Faster interactive experiences on mobile",
      "Lower bounce on landing pages"
    ],
    deliverables: [
      "Template-level speed audit",
      "Image and asset strategy",
      "Script and bundle cleanup",
      "Caching recommendations"
    ],
    idealFor: "Stores with good products but weak speed metrics.",
    timeline: "1-4 weeks"
  },
  {
    slug: "seo",
    title: "Technical SEO",
    problem: "Search visibility is limited by crawl/indexing and template issues.",
    outcomes: [
      "Cleaner crawl paths and indexing",
      "Better relevance on priority collection and product pages",
      "Safer migrations with ranking protection"
    ],
    deliverables: [
      "Technical SEO audit",
      "On-page and schema recommendations",
      "Internal linking and IA improvements",
      "Migration support plans"
    ],
    idealFor: "Teams seeing SEO plateaus or preparing for major storefront changes.",
    timeline: "2-6 weeks"
  },
  {
    slug: "analytics",
    title: "Analytics & Tracking",
    problem: "Reporting is fragmented and attribution can’t be trusted.",
    outcomes: [
      "Reliable revenue and funnel reporting",
      "Clear campaign and channel attribution",
      "Shared event schema for teams and vendors"
    ],
    deliverables: [
      "GA4/GTM setup or repair",
      "Event naming schema",
      "Segment routing",
      "Dashboard foundation"
    ],
    idealFor: "Brands making decisions from conflicting data sources.",
    timeline: "1-5 weeks"
  },
  {
    slug: "google-ads",
    title: "Google Ads Support",
    problem: "Paid spend rises while efficiency and measurement lag.",
    outcomes: [
      "Lower wasted spend",
      "Better feed and campaign structure",
      "Higher intent alignment between ad and landing page"
    ],
    deliverables: [
      "Account setup or restructure",
      "Shopping feed support",
      "Landing page alignment",
      "Conversion tracking validation"
    ],
    idealFor: "Teams who need paid support tied tightly to storefront and data quality.",
    timeline: "2-8 weeks"
  },
  {
    slug: "lifecycle",
    title: "Lifecycle Basics (Optional)",
    problem: "Post-purchase and retention flows are underdeveloped.",
    outcomes: [
      "Higher repeat purchase contribution",
      "Improved campaign-to-site consistency",
      "Foundational lifecycle automations"
    ],
    deliverables: [
      "Klaviyo/email/SMS baseline",
      "Core flow setup guidance",
      "Audience and segmentation mapping",
      "Measurement framework"
    ],
    idealFor: "Brands that want practical lifecycle fundamentals before scaling complex automation.",
    timeline: "1-4 weeks"
  }
];
