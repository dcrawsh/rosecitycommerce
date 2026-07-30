import { CaseStudy } from "@/data/case-studies/types";

const fenderPortfolioDisclaimer =
  "Completed as part of an in-house ecommerce engineering team and included here as a professional portfolio project.";

export const fenderProductSyncPlatform: CaseStudy = {
  slug: "fender-product-data-translation-sync-platform",
  title: "Product Data and Translation Sync Platform",
  client: "Fender in-house ecommerce engineering team",
  businessType: "IN-HOUSE SHOPIFY PLUS ENGINEERING",
  excerpt:
    "Led development of an internal product-ingestion and synchronization platform connecting enterprise product data with Fender's multi-brand, multi-region Shopify Plus storefronts.",
  cardImpact:
    "Enabled non-engineering teams to run and monitor multi-store product and translation updates.",
  impactSummary:
    "Turned recurring product, translation, and metafield maintenance into a reliable self-service workflow with validation, operational status, error reporting, and partial-success visibility.",
  disclaimer: fenderPortfolioDisclaimer,
  tags: ["Shopify Plus", "Architecture", "AWS Lambda", "GraphQL", "Automation", "PIM"],
  context:
    "Fender's brands and regions depended on consistent product information across multiple Shopify Plus storefronts, languages, locales, and merchandising contexts, with source data managed in enterprise product systems outside Shopify.",
  problem:
    "Manual and fragmented updates across stores and locales created operational overhead, increased the risk of inconsistent product data, and made engineering a bottleneck for controlled catalog changes. Operators also needed clear visibility when only part of a multi-product or multi-locale operation completed.",
  solution: [
    "Led the product-ingestion platform from architecture through implementation",
    "Built Node.js services on AWS Lambda to integrate with internal PIM APIs and Shopify Admin GraphQL APIs",
    "Created a transformation layer for product specifications, translations, metafields, and catalog data before writes reached Shopify",
    "Implemented validated catalog-ingestion and synchronization workflows across storefronts and localization requirements",
    "Built a Vite admin application using Shopify Polaris for store selection, SKU targeting, sync monitoring, and error reporting",
    "Supported partial-success handling so teams could see which products or locales completed and which needed follow-up",
    "Enabled self-service workflows for tech-spec synchronization, translation synchronization, metafield management, and multi-store catalog updates",
    "Partnered with ecommerce, merchandising, and IT stakeholders to make the workflow useful to operators without exposing proprietary system details"
  ],
  results: [
    "Reduced manual catalog maintenance across storefronts and regions",
    "Improved consistency for localized product data and Shopify metafields",
    "Enabled non-technical teams to execute targeted catalog updates through an internal admin tool",
    "Increased reliability of product data deployments by making sync status and errors visible",
    "Created reusable multi-store workflows and a maintainable integration layer between enterprise product data and Shopify Plus"
  ],
  sections: [
    {
      title: "Context",
      intro: [
        "Fender operated multi-brand, multi-region ecommerce experiences on Shopify Plus. Product specifications, translations, metafields, and catalog data originated in enterprise systems and needed to reach the correct storefronts and locales consistently.",
        "Merchandising and ecommerce teams needed a reliable way to run targeted updates and understand their status without depending on an engineer for every routine catalog operation."
      ]
    },
    {
      title: "Problem",
      intro: [
        "Manual and fragmented maintenance across storefronts and locales introduced operational overhead and made inconsistencies more likely. Product specifications, localized content, and metafields all had to be transformed into the shape expected by Shopify.",
        "A batch could also succeed for some products or locales while failing for others. Treating the entire operation as a single pass/fail event would leave operators without the detail needed to follow up safely.",
        "The platform therefore needed to make a complex enterprise workflow understandable and operable while preventing engineering from becoming the bottleneck."
      ]
    },
    {
      title: "Architecture",
      subsections: [
        {
          title: "Operator-Facing Admin Application",
          body: [
            "Built an internal React application with Vite and Shopify Polaris. The interface let operators select stores and locales, target SKUs, initiate synchronization workflows, and review status and errors.",
            "The admin experience translated integration details into a controlled self-service workflow for ecommerce and merchandising teams."
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
            "Built microservice-style Node.js endpoints on AWS Lambda to separate operator actions from product-data ingestion and Shopify writes.",
            "The services integrated with internal PIM APIs, validated and transformed enterprise product data, and sent the resulting updates through Shopify Admin GraphQL."
          ]
        },
        {
          title: "Validation and Transformation",
          body: [
            "Created a transformation boundary between upstream product data and Shopify-specific requirements. Product specifications, translations, metafields, and catalog attributes were normalized before any writes reached a storefront.",
            "This kept upstream enterprise data concerns separate from regional Shopify merchandising requirements and made the integration easier to extend across stores."
          ]
        },
        {
          title: "Operational Reliability",
          body: [
            "Validation, monitoring, and visible error reporting were part of the workflow rather than afterthoughts.",
            "Partial-success handling showed operators which products or locales completed and which required follow-up, avoiding an opaque all-or-nothing result without exposing confidential implementation details."
          ]
        }
      ]
    },
    {
      title: "Broader Shopify Plus Platform Responsibilities",
      intro: [
        "The synchronization application was one part of my wider Shopify Plus work at Fender. Across the platform, that work included checkout extensions, customer account extensions, Shopify Flow integrations, Shopify Admin GraphQL, and deep API integrations.",
        "Those broader responsibilities also included multi-brand and multi-region storefront work and integrations involving SAP, Zuora, Stripe, PIM systems, Segment, Avo, Firebase, OAuth/SSO, and AWS Lambda. These capabilities were not all implemented inside the product-sync application itself."
      ]
    },
    {
      title: "Leadership and Collaboration",
      subsections: [
        {
          title: "Technical Ownership",
          body: [
            "Led the product-ingestion platform and partnered with ecommerce, merchandising, and IT stakeholders to align the architecture with real operating workflows.",
            "Established reusable implementation patterns for product ingestion, transformation, Shopify writes, and operator-facing status instead of creating one-off scripts for each storefront."
          ]
        },
        {
          title: "Team Enablement",
          body: [
            "The platform enabled non-engineers to run and monitor controlled product-data workflows directly.",
            "Across Fender technical initiatives, I mentored an in-house junior engineer and coordinated an offshore contractor team of four developers, supporting shared patterns and maintainable delivery."
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
            "Increased merchandising autonomy through a controlled self-service admin workflow",
            "Improved consistency for localized product data and Shopify metafields",
            "Made product, store, and locale status and errors visible to operators",
            "Supported partial success so follow-up work could be targeted",
            "Created reusable multi-store workflows and a maintainable integration boundary between enterprise product data and Shopify Plus"
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
