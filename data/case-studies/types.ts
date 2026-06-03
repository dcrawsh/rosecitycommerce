export type CaseStudyTag =
  | "Websites"
  | "Shopify"
  | "Automation"
  | "SEO"
  | "Merchandising"
  | "Subscriptions"
  | "Ecommerce Operations"
  | "WordPress"
  | "WP-CLI"
  | "Debugging"
  | "Infrastructure"
  | "Maintenance"
  | "Next.js"
  | "Content"
  | "Music"
  | "Editorial"
  | "Branding"
  | "Localization"
  | "Small Business"
  | "Responsive Design"
  | "React"
  | "A/B Testing"
  | "Analytics"
  | "Storybook"
  | "Retention"
  | "Liquid"
  | "SFCC"
  | "Product Media"
  | "PDP"
  | "Frontend Architecture"
  | "AWS Lambda"
  | "Polaris"
  | "GraphQL"
  | "Admin Tools"
  | "PIM"
  | "Performance"
  | "Core Web Vitals"
  | "Frontend"
  | "Web Performance"
  | "TypeScript"
  | "Canvas"
  | "PostHog"
  | "Cloudflare"
  | "Ecommerce";

export type CaseStudySection = {
  title: string;
  intro?: string | string[];
  video?: { src: string; title?: string };
  subsections?: Array<{
    title: string;
    body?: string[];
    bullets?: string[];
    table?: {
      headers: string[];
      rows: string[][];
    };
  }>;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  businessType: string;
  excerpt: string;
  impactSummary?: string;
  disclaimer?: string;
  url?: string;
  featured?: boolean;
  tags: CaseStudyTag[];
  context: string;
  problem: string;
  solution: string[];
  results: string[];
  sections?: CaseStudySection[];
  sidebarHighlights?: string[];
  metricGroups?: Array<{
    title: string;
    metrics: Array<{
      label: string;
      before: string;
      after: string;
      improvement: string;
    }>;
  }>;
  stack: string[];
  image: string;
  imagePosition?: string;
};
