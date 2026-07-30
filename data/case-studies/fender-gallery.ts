import { CaseStudy } from "@/data/case-studies/types";

const fenderPortfolioDisclaimer =
  "Built as part of Fender's in-house ecommerce engineering team and presented here as a professional case study.";

export const fenderPdpMediaGallery: CaseStudy = {
  slug: "fender-custom-pdp-media-gallery-platform-architecture",
  title: "Custom PDP Media Gallery Across Fender and Sub-Brands",
  client: "Fender in-house ecommerce engineering team",
  businessType: "IN-HOUSE COMMERCE ARCHITECTURE",
  excerpt:
    "Designed and evolved reusable React media architecture across Fender, Jackson, and PreSonus storefronts, preserving the core experience through an SFCC-to-Shopify Plus migration.",
  cardImpact:
    "The same rendering architecture served multiple brands and survived the move from SFCC to Shopify Plus.",
  impactSummary:
    "Separated media rendering from commerce-platform adapters, reducing lock-in and avoiding a gallery rewrite during the migration.",
  disclaimer: fenderPortfolioDisclaimer,
  tags: ["Shopify Plus", "Architecture", "React", "Liquid", "PDP", "Product Media"],
  context:
    "Fender, Jackson, and PreSonus needed rich PDP media across multiple storefronts and a path from Salesforce Commerce Cloud to Shopify Plus.",
  problem:
    "The original media experiences were difficult to evolve. Coupling the next implementation to SFCC would duplicate work across brands and force another rewrite during the platform migration.",
  solution: [
    "Built the original gallery as a React application injected into Salesforce Commerce Cloud PDPs",
    "Kept the React rendering layer independent while commerce-specific adapters handled data ingestion",
    "Normalized product media before it reached the gallery instead of binding the UI to SFCC or Shopify data shapes",
    "Moved from SFCC to Shopify Plus while preserving the core interaction and rendering logic",
    "Supported PDP images, videos, YouTube embeds, variant-specific media, bundle products, and 360-degree media experiences",
    "Integrated React with Shopify Liquid storefronts and reused the same architecture across Fender, Jackson, and PreSonus"
  ],
  results: [
    "Preserved a complex PDP media experience through the SFCC-to-Shopify Plus migration",
    "Reduced platform lock-in by keeping rendering logic separate from commerce-specific data shapes",
    "Shared one implementation pattern across multiple brands and storefronts",
    "Simplified future enhancements for new media formats and PDP merchandising needs",
    "Enabled richer product experiences without rewriting the core gallery for each storefront"
  ],
  sections: [
    {
      title: "Context",
      intro: [
        "Fender, Jackson, and PreSonus needed rich product media across multiple storefronts while the commerce platform moved from Salesforce Commerce Cloud to Shopify Plus.",
        "I treated the gallery as reusable frontend architecture rather than a platform-specific component. The rendering model stayed in place while commerce-specific data ingestion changed around it."
      ]
    },
    {
      title: "Problem",
      intro: [
        "The original media experiences were difficult to evolve. Several brands shared core requirements but had different catalogs and storefront implementations.",
        "Binding the gallery to SFCC data would have increased lock-in and forced a rewrite during the migration. The design also needed to accommodate new media and merchandising requirements over time."
      ]
    },
    {
      title: "Solution",
      subsections: [
        {
          title: "Platform-Independent Media Model",
          body: [
            "Kept media rendering separate from commerce-platform ingestion. Adapters normalized product and media data before it reached React, so the gallery never depended on SFCC or Shopify response shapes.",
            "When Shopify Plus replaced SFCC, the adapter changed while the rendering layer and core interactions largely remained."
          ]
        },
        {
          title: "React Within Commerce Storefronts",
          body: [
            "Built the original gallery as a React application injected into SFCC PDPs, then integrated it with Shopify Liquid storefronts.",
            "React owned the interactive media layer; each commerce platform continued to own page composition and product context."
          ]
        },
        {
          title: "Rich, Variant-Driven Product Media",
          body: [
            "Because the gallery consumed normalized data, one rendering system could support varied media without introducing platform-specific behavior."
          ],
          bullets: [
            "Product and variant images",
            "Video and YouTube embeds",
            "Variant-specific media changes",
            "Bundle-product media",
            "360-degree product experiences",
            "Shared behavior across Fender, Jackson, and PreSonus"
          ]
        },
        {
          title: "Performance-Aware Evolution",
          body: [
            "The same boundary later supported the server-rendered primary-image and hydration strategy described in the Large-Scale Ecommerce Performance Optimization case study.",
            "We improved initial rendering and Core Web Vitals without replacing the interactive gallery."
          ]
        }
      ]
    },
    {
      title: "Architecture Ownership and Collaboration",
      intro: [
        "I owned the architectural direction and balanced the long-term migration path with the media needs of Fender, Jackson, and PreSonus.",
        "The project established a shared pattern for React inside commerce templates and avoided separate implementations for each brand."
      ]
    },
    {
      title: "Results",
      subsections: [
        {
          title: "Platform and Product Impact",
          bullets: [
            "Preserved the gallery's core rendering and interactions through the SFCC-to-Shopify Plus migration",
            "Reduced platform lock-in by separating normalized media data from rendering",
            "Shared one implementation pattern across Fender, Jackson, and PreSonus storefronts",
            "Supported images, video, YouTube, variant-driven media, bundles, and 360-degree experiences",
            "Created a foundation for the later PDP performance and hydration improvements"
          ]
        }
      ]
    }
  ],
  sidebarHighlights: [
    "Reusable React media architecture",
    "Shopify Liquid integration",
    "SFCC-to-Shopify Plus migration",
    "Platform-independent data normalization",
    "Fender, Jackson, and PreSonus reuse",
    "Variant-driven rich media",
    "Reduced platform lock-in",
    "Performance-compatible architecture"
  ],
  stack: ["React", "TypeScript", "Shopify Plus", "Liquid", "Salesforce Commerce Cloud"],
  image: "/images/fender-pdp-gallery.png",
  imagePosition: "center"
};
