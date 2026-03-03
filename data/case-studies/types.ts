export type CaseStudyTag =
  | "Shopify"
  | "SFCC"
  | "CRO"
  | "SEO"
  | "Ads"
  | "Analytics";

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  excerpt: string;
  tags: CaseStudyTag[];
  context: string;
  goals: string[];
  workDone: string[];
  stack: string[];
  metrics: {
    label: string;
    before: string;
    after: string;
    delta: string;
  }[];
  lessons: string[];
  image: string;
};
