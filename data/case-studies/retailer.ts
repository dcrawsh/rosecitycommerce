import { CaseStudy } from "@/data/case-studies/types";

export const retailerSpeedCRO: CaseStudy = {
  slug: "local-retailer-shopify-speed-cro",
  title: "Local retailer speed and conversion cleanup",
  client: "Local Retail Brand (anonymized)",
  businessType: "Retail / ecommerce",
  excerpt: "Reduced storefront load time and improved mobile conversion flow.",
  tags: ["Shopify", "CRO", "SEO"],
  context:
    "A local retailer expanded online quickly and performance degraded as apps and scripts grew.",
  problem:
    "Slow mobile pages and weak PDP hierarchy were reducing add-to-cart and checkout completion.",
  solution: [
    "Optimized image, script, and template loading",
    "Refined mobile PDP layout and add-to-cart placement",
    "Removed redundant app scripts and simplified theme logic"
  ],
  results: [
    "Mobile LCP improved from 4.5s to 2.7s",
    "+22% lift in mobile add-to-cart rate",
    "Lower bounce on high-intent landing pages"
  ],
  stack: ["Shopify", "GA4", "GTM", "Search Console"],
  image: "/images/case-trailhouse.svg"
};
