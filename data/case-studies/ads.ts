import { CaseStudy } from "@/data/case-studies/types";

export const adsTrackingFix: CaseStudy = {
  slug: "google-ads-tracking-landing-page-fix",
  title: "Google Ads tracking and landing page fix",
  client: "Portland SMB (anonymized)",
  businessType: "Home + pro services mix",
  excerpt: "Fixed conversion tracking and aligned landing pages to paid intent.",
  tags: ["Ads", "Tracking", "Websites"],
  context:
    "The business was running Google Ads but could not trust conversion data.",
  problem:
    "Campaign performance looked inconsistent because form and call conversions were partially tracked.",
  solution: [
    "Rebuilt landing page structure for clearer offer flow",
    "Implemented conversion tracking cleanup in GTM/GA4",
    "Mapped ad groups to page intent and improved CTA clarity"
  ],
  results: [
    "Tracked conversion volume increased by 46% (measurement fix)",
    "Cost per qualified lead improved by 23%",
    "Better visibility into high-performing ad groups"
  ],
  stack: ["Google Ads", "GA4", "GTM", "Landing Pages"],
  image: "/images/case-lumen.svg"
};
