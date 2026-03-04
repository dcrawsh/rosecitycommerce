export type ServiceCategory = "Build" | "Optimize" | "Grow" | "Measure";

export type ServiceItem = {
  slug: string;
  title: string;
  category: ServiceCategory;
  outcome: string;
  details: string[];
};

export const services: ServiceItem[] = [
  {
    slug: "shopify-store-builds",
    title: "Shopify store builds",
    category: "Build",
    outcome: "Launch a storefront that is fast, stable, and ready to convert from day one.",
    details: [
      "Theme architecture",
      "Collection/PDP template setup",
      "Essential app and system integrations"
    ]
  },
  {
    slug: "ecommerce-site-development",
    title: "Ecommerce site development",
    category: "Build",
    outcome: "Ship clean ecommerce experiences without bloated code or fragile setup.",
    details: [
      "Custom sections and templates",
      "Headless/API work where needed",
      "Maintainable code handoff"
    ]
  },
  {
    slug: "integrations",
    title: "Integrations",
    category: "Build",
    outcome: "Connect your storefront with the tools your team already depends on.",
    details: [
      "ERP/PIM integration support",
      "Marketing and analytics connections",
      "Data flow validation"
    ]
  },
  {
    slug: "cro",
    title: "CRO",
    category: "Optimize",
    outcome: "Improve conversion with faster pages and better product layouts.",
    details: [
      "Funnel audits",
      "PDP/collection UX improvements",
      "Prioritized test backlog"
    ]
  },
  {
    slug: "site-speed-improvements",
    title: "Site speed improvements",
    category: "Optimize",
    outcome: "Reduce load times so more visitors stay engaged and buy.",
    details: [
      "Core Web Vitals fixes",
      "Image and script optimization",
      "Template-level performance tuning"
    ]
  },
  {
    slug: "ux-improvements",
    title: "UX improvements",
    category: "Optimize",
    outcome: "Make key buying actions clearer so customers move through the funnel faster.",
    details: [
      "Navigation and merchandising UX",
      "Mobile-first refinements",
      "Form and error-state cleanup"
    ]
  },
  {
    slug: "checkout-optimization",
    title: "Checkout optimization",
    category: "Optimize",
    outcome: "Recover lost revenue by reducing checkout friction and abandonment.",
    details: [
      "Checkout flow simplification",
      "Trust and clarity improvements",
      "Tracking for checkout drop-off"
    ]
  },
  {
    slug: "seo",
    title: "SEO",
    category: "Grow",
    outcome: "Increase qualified traffic with technical SEO that supports ecommerce revenue pages.",
    details: [
      "Technical SEO audits",
      "On-page and schema updates",
      "Crawl and indexing fixes"
    ]
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    category: "Grow",
    outcome: "Reduce paid waste and improve campaign efficiency with better landing alignment.",
    details: [
      "Account structure support",
      "Conversion-focused landing pages",
      "Tracking validation"
    ]
  },
  {
    slug: "product-feed-optimization",
    title: "Product feed optimization",
    category: "Grow",
    outcome: "Improve feed quality so Shopping campaigns reach the right buyers.",
    details: [
      "Feed title and attribute cleanup",
      "Catalog diagnostics",
      "Merchant Center alignment"
    ]
  },
  {
    slug: "ga4-setup",
    title: "GA4 setup",
    category: "Measure",
    outcome: "Get reliable reporting that matches what is happening in your store.",
    details: [
      "GA4 architecture and events",
      "Ecommerce event validation",
      "Attribution baseline"
    ]
  },
  {
    slug: "conversion-tracking",
    title: "Conversion tracking",
    category: "Measure",
    outcome: "Track the actions that matter so ad and SEO decisions are based on real data.",
    details: [
      "GTM implementation",
      "Channel conversion alignment",
      "Debug and QA"
    ]
  },
  {
    slug: "dashboards",
    title: "Dashboards",
    category: "Measure",
    outcome: "Give your team clear weekly visibility into performance and revenue drivers.",
    details: [
      "Executive KPI dashboard",
      "Channel and funnel views",
      "Custom reporting logic"
    ]
  },
  {
    slug: "analytics-cleanup",
    title: "Analytics cleanup",
    category: "Measure",
    outcome: "Fix inconsistent analytics so teams and vendors stop debating the numbers.",
    details: [
      "Event schema cleanup",
      "Deduplication and naming standards",
      "Documentation for handoff"
    ]
  }
];
