export type CaseStudyTag =
  | "Websites"
  | "Shopify"
  | "SFCC"
  | "Automation"
  | "SEO"
  | "Ads"
  | "Tracking"
  | "CRO"
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
  | "Responsive Design";

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  businessType: string;
  excerpt: string;
  tags: CaseStudyTag[];
  context: string;
  problem: string;
  solution: string[];
  results: string[];
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
};
