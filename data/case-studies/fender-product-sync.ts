import { CaseStudy } from "@/data/case-studies/types";

const fenderPortfolioDisclaimer =
  "Completed as part of an in-house ecommerce engineering team and included here as a professional portfolio project.";

export const fenderProductSyncPlatform: CaseStudy = {
  slug: "fender-product-data-translation-sync-platform",
  title: "Product Data and Translation Sync Platform",
  client: "Fender in-house ecommerce engineering team",
  businessType: "IN-HOUSE SHOPIFY PLUS ENGINEERING",
  excerpt:
    "Led development of a product-ingestion platform that synchronized enterprise catalog data across Fender's Shopify Plus storefronts.",
  cardImpact:
    "Enabled non-engineering teams to run and monitor multi-store product and translation updates.",
  impactSummary:
    "Gave ecommerce teams a reliable way to manage product data, translations, and metafields without routine engineering support.",
  disclaimer: fenderPortfolioDisclaimer,
  tags: ["Shopify Plus", "Architecture", "AWS Lambda", "GraphQL", "Automation", "PIM"],
  context:
    "Fender needed consistent product information across Shopify Plus storefronts, brands, regions, and locales, with source data managed in enterprise systems outside Shopify.",
  problem:
    "Fragmented updates across stores and locales created extra work, inconsistent data, and an engineering bottleneck. Teams also lacked clear status when only part of a multi-product or multi-locale operation completed.",
  solution: [
    "Led the product-ingestion platform from architecture through implementation",
    "Built Node.js services on AWS Lambda to integrate with internal PIM APIs and Shopify Admin GraphQL APIs",
    "Created a transformation layer for product specifications, translations, metafields, and catalog data before writes reached Shopify",
    "Implemented validated catalog-ingestion workflows across storefronts and locales",
    "Built a Vite admin application using Shopify Polaris for store selection, SKU targeting, sync monitoring, and error reporting",
    "Supported partial success so teams could see which products or locales completed and which needed follow-up",
    "Partnered with ecommerce, merchandising, and IT on reusable workflows for specifications, translations, metafields, and catalog updates"
  ],
  results: [
    "Reduced manual catalog maintenance across storefronts and regions",
    "Improved consistency for localized product data and Shopify metafields",
    "Enabled non-engineering teams to run targeted updates through an internal admin tool",
    "Made synchronization status, errors, and partial results visible",
    "Created a reusable integration layer between enterprise product data and Shopify Plus"
  ],
  sections: [
    {
      title: "Context",
      intro: [
        "Fender operated multi-brand, multi-region storefronts on Shopify Plus. Product specifications, translations, metafields, and catalog data originated in enterprise systems and needed to reach the correct stores and locales.",
        "Ecommerce and merchandising teams needed to run targeted updates and understand their status without relying on an engineer for routine changes."
      ]
    },
    {
      title: "Problem",
      intro: [
        "Manual updates across storefronts and locales were slow and prone to inconsistency. Specifications, localized content, and metafields also had to be transformed into Shopify's expected data shapes.",
        "Batch operations could succeed for some products or locales and fail for others. Teams needed enough detail to resolve those failures without treating every run as all-or-nothing."
      ]
    },
    {
      title: "Architecture",
      subsections: [
        {
          title: "Operator-Facing Admin Application",
          body: [
            "Built an internal React application with Vite and Shopify Polaris that turned the integration into a controlled workflow for ecommerce and merchandising teams."
          ],
          bullets: [
            "Store and locale selection",
            "Targeted SKU operations",
            "Technical-spec and translation synchronization",
            "Metafield and catalog update workflows",
            "Status, error, and partial-success visibility"
          ]
        },
        {
          title: "Node.js and AWS Lambda Services",
          body: [
            "Built microservice-style Node.js endpoints on AWS Lambda to separate admin actions from ingestion and Shopify writes. The services read from internal PIM APIs and sent validated, transformed data through Shopify Admin GraphQL."
          ]
        },
        {
          title: "Validation and Transformation",
          body: [
            "Created a boundary between upstream product data and Shopify-specific requirements. Specifications, translations, metafields, and catalog attributes were normalized before any storefront write.",
            "Separating enterprise data from regional merchandising requirements made the integration easier to extend across stores."
          ]
        },
        {
          title: "Operational Reliability",
          body: [
            "Validation, monitoring, and error reporting were built into the workflow. Partial-success handling identified which products or locales completed and which required follow-up."
          ]
        }
      ]
    },
    {
      title: "Broader Shopify Plus Platform Responsibilities",
      intro:
        "This application sat within broader Shopify Plus work at Fender that included checkout and customer account extensions, Shopify Flow, Admin GraphQL, and enterprise integrations. Those capabilities were platform responsibilities, not all features of the synchronization application."
    },
    {
      title: "Leadership and Collaboration",
      subsections: [
        {
          title: "Technical Ownership",
          body: [
            "I led the product-ingestion platform and partnered with ecommerce, merchandising, and IT to align the architecture with operating needs.",
            "We established reusable patterns for ingestion, transformation, Shopify writes, and status reporting instead of building one-off scripts for each storefront."
          ]
        }
      ]
    },
    {
      title: "Results",
      subsections: [
        {
          title: "Operational and Engineering Impact",
          bullets: [
            "Reduced manual catalog maintenance across storefronts and regions",
            "Enabled ecommerce teams to run targeted updates without routine engineering support",
            "Improved consistency for localized product data and Shopify metafields",
            "Made product, store, and locale status and errors visible",
            "Created reusable multi-store workflows and a maintainable Shopify Plus integration"
          ]
        }
      ]
    }
  ],
  sidebarHighlights: [
    "Shopify Plus multi-store architecture",
    "React, Vite, and Shopify Polaris admin interface",
    "Node.js services on AWS Lambda",
    "PIM ingestion and data transformation",
    "Shopify Admin GraphQL writes",
    "Validation and partial-success handling",
    "Operator-facing status and error reporting",
    "Cross-functional technical leadership"
  ],
  stack: [
    "Shopify Plus",
    "Shopify Admin GraphQL",
    "AWS Lambda",
    "Node.js",
    "React",
    "Vite",
    "Shopify Polaris",
    "PIM APIs"
  ],
  image: "/images/fender-product-sync.png",
  imagePosition: "center"
};
