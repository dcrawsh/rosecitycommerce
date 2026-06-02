import { CaseStudy } from "@/data/case-studies/types";

const fenderPortfolioDisclaimer =
  "Completed as part of an in-house ecommerce engineering team and included here as a professional portfolio project.";

export const fenderProductSyncPlatform: CaseStudy = {
  slug: "fender-product-data-translation-sync-platform",
  title: "Product Data and Translation Sync Platform",
  client: "Fender in-house ecommerce engineering team",
  businessType: "IN-HOUSE ECOMMERCE ENGINEERING",
  excerpt:
    "Built an internal synchronization platform for product specifications, translations, metafields, and catalog data between a PIM system and multiple Shopify storefronts.",
  impactSummary:
    "This project turned recurring catalog maintenance into a more reliable self-service workflow for merchandising and ecommerce teams.",
  disclaimer: fenderPortfolioDisclaimer,
  tags: ["Shopify", "AWS Lambda", "Polaris", "GraphQL", "Admin Tools", "Automation", "PIM"],
  context:
    "Fender brands and regions depended on consistent product information across multiple Shopify storefronts, languages, and merchandising contexts, with source data managed outside Shopify in a PIM.",
  problem:
    "Manual updates across stores and languages created operational overhead, increased the risk of inconsistent product data, and limited how quickly merchandising teams could make controlled catalog changes without engineering support.",
  solution: [
    "Built AWS Lambda services to integrate with internal PIM APIs and Shopify Admin GraphQL APIs",
    "Created a transformation layer for product specifications, translations, metafields, and catalog data before writes reached Shopify",
    "Implemented catalog ingestion and sync workflows that supported multiple storefronts and localization requirements",
    "Built a Vite admin application using Shopify Polaris for store selection, SKU targeting, sync monitoring, and error reporting",
    "Supported partial-success handling so teams could see which products or locales completed and which needed follow-up",
    "Enabled self-service workflows for tech spec synchronization, translation synchronization, metafield management, and multi-store catalog updates"
  ],
  results: [
    "Reduced manual catalog maintenance across storefronts and regions",
    "Improved consistency for localized product data and Shopify metafields",
    "Enabled non-technical teams to execute targeted catalog updates through an internal admin tool",
    "Increased reliability of product data deployments by making sync status and errors visible",
    "Created a more maintainable integration layer between PIM data and Shopify storefront requirements"
  ],
  stack: ["AWS Lambda", "Node.js", "Shopify Admin API", "GraphQL", "Vite", "Polaris", "PIM APIs"],
  image: "/images/fender-product-sync.png",
  imagePosition: "center"
};
