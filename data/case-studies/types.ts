export type CaseStudyTag =
  | "Websites"
  | "Shopify"
  | "SFCC"
  | "Automation"
  | "SEO"
  | "Ads"
  | "Tracking"
  | "CRO";

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
  stack: string[];
  image: string;
};
