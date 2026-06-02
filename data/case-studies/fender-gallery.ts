import { CaseStudy } from "@/data/case-studies/types";

const fenderPortfolioDisclaimer =
  "Completed as part of an in-house ecommerce engineering team and included here as a professional portfolio project.";

export const fenderPdpMediaGallery: CaseStudy = {
  slug: "fender-custom-pdp-media-gallery-platform-architecture",
  title: "Custom PDP Media Gallery Across Fender and Sub-Brands",
  client: "Fender in-house ecommerce engineering team",
  businessType: "IN-HOUSE ECOMMERCE ENGINEERING",
  excerpt:
    "Designed and evolved a reusable product media gallery architecture used across Fender and sub-brand storefronts, supporting images, video, 360-degree media, bundles, and future platform migrations.",
  impactSummary:
    "The work focused on keeping PDP media flexible as storefront requirements, brand needs, and commerce platforms changed over time.",
  disclaimer: fenderPortfolioDisclaimer,
  tags: ["React", "Shopify", "Liquid", "SFCC", "Product Media", "PDP", "Frontend Architecture"],
  context:
    "Fender and its sub-brands needed a product media experience that could support rich PDP content across multiple storefronts while remaining maintainable through platform changes.",
  problem:
    "The original PDP media experiences were difficult to evolve, multiple brands shared similar requirements, and the long-term implementation needed to avoid being tightly coupled to Salesforce Commerce Cloud as platform migration work became a business reality.",
  solution: [
    "Built the original gallery as a React application injected into Salesforce Commerce Cloud PDPs",
    "Separated gallery presentation from data ingestion so media rendering was not dependent on a single commerce platform",
    "Normalized product media data before it reached the gallery instead of binding the UI to SFCC or Shopify-specific structures",
    "Migrated the gallery architecture from SFCC to Shopify while preserving core interaction and rendering logic",
    "Supported PDP images, videos, YouTube embeds, variant-specific media, bundle products, and 360-degree media experiences",
    "Injected React into Liquid storefronts and reused the same architecture across multiple Fender and sub-brand storefronts"
  ],
  results: [
    "Successfully moved a complex PDP media experience between commerce platforms",
    "Reduced platform lock-in by keeping rendering logic separate from commerce-specific data shapes",
    "Shared one implementation pattern across multiple brands and storefronts",
    "Simplified future enhancements for new media formats and PDP merchandising needs",
    "Enabled richer product experiences without rewriting the core gallery for each storefront"
  ],
  stack: ["React", "TypeScript", "Shopify", "Liquid", "Salesforce Commerce Cloud"],
  image: "/images/fender-pdp-gallery.png",
  imagePosition: "center"
};
