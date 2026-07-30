import { CaseStudy } from "@/data/case-studies/types";

const fenderPortfolioDisclaimer =
  "Completed as part of an in-house ecommerce engineering team and included here as a professional portfolio project.";

export const fenderPdpMediaGallery: CaseStudy = {
  slug: "fender-custom-pdp-media-gallery-platform-architecture",
  title: "Custom PDP Media Gallery Across Fender and Sub-Brands",
  client: "Fender in-house ecommerce engineering team",
  businessType: "IN-HOUSE COMMERCE ARCHITECTURE",
  excerpt:
    "Designed and evolved reusable React media architecture across Fender, Jackson, and PreSonus storefronts, preserving the core experience through an SFCC-to-Shopify Plus migration.",
  cardImpact:
    "Reusable React/Liquid architecture built for multi-brand reuse and the move from SFCC to Shopify Plus.",
  impactSummary:
    "Separated platform-specific product data from media rendering so rich PDP experiences could move between commerce platforms and evolve across brands without rewriting the core gallery.",
  disclaimer: fenderPortfolioDisclaimer,
  tags: ["Shopify Plus", "Architecture", "React", "Liquid", "PDP", "Product Media"],
  context:
    "Fender, Jackson, and PreSonus needed a product media experience that could support rich PDP content across multiple storefronts while remaining maintainable through a migration from Salesforce Commerce Cloud to Shopify Plus.",
  problem:
    "The original PDP media experiences were difficult to evolve, multiple brands shared similar requirements, and the long-term implementation needed to avoid being tightly coupled to Salesforce Commerce Cloud as platform migration work became a business reality.",
  solution: [
    "Built the original gallery as a React application injected into Salesforce Commerce Cloud PDPs",
    "Separated gallery presentation from data ingestion so media rendering was not dependent on a single commerce platform",
    "Normalized product media data before it reached the gallery instead of binding the UI to SFCC or Shopify-specific structures",
    "Migrated the gallery architecture from SFCC to Shopify Plus while preserving core interaction and rendering logic",
    "Supported PDP images, videos, YouTube embeds, variant-specific media, bundle products, and 360-degree media experiences",
    "Integrated React with Shopify Liquid storefronts and reused the same architecture across Fender, Jackson, and PreSonus"
  ],
  results: [
    "Successfully moved a complex PDP media experience between commerce platforms",
    "Reduced platform lock-in by keeping rendering logic separate from commerce-specific data shapes",
    "Shared one implementation pattern across multiple brands and storefronts",
    "Simplified future enhancements for new media formats and PDP merchandising needs",
    "Enabled richer product experiences without rewriting the core gallery for each storefront"
  ],
  sections: [
    {
      title: "Architecture and Migration Context",
      intro: [
        "Fender, Jackson, and PreSonus needed rich product media across multiple storefronts. The experience had to support changing merchandising requirements while the underlying commerce platform moved from Salesforce Commerce Cloud to Shopify Plus.",
        "I designed and evolved the gallery as reusable frontend architecture rather than a platform-bound UI component. That decision allowed the interaction and rendering model to survive the migration while commerce-specific data ingestion changed around it."
      ]
    },
    {
      title: "Problem",
      intro: [
        "The original media experiences were difficult to evolve, and several brands shared requirements without having identical catalogs or storefront implementations.",
        "Binding the gallery directly to SFCC data structures would have increased platform lock-in and forced a rewrite during the Shopify Plus migration. The architecture also needed room for variant-driven images, video, YouTube embeds, bundle products, and 360-degree media."
      ]
    },
    {
      title: "Solution",
      subsections: [
        {
          title: "Platform-Independent Media Model",
          body: [
            "Separated gallery presentation from commerce-platform ingestion. Product and media data were normalized before reaching React, keeping the rendering layer independent of SFCC- or Shopify-specific response shapes.",
            "This boundary let platform adapters change while the core gallery behavior remained reusable."
          ]
        },
        {
          title: "React Within Commerce Storefronts",
          body: [
            "Built the original gallery as a React application injected into SFCC PDPs, then integrated the same architectural pattern into Shopify Liquid storefronts.",
            "React handled the interactive media experience while the surrounding commerce platform continued to own page composition and product context."
          ]
        },
        {
          title: "Rich, Variant-Driven Product Media",
          bullets: [
            "Product and variant images",
            "Video and YouTube embeds",
            "Variant-specific media changes",
            "Bundle-product media",
            "360-degree product experiences",
            "Reusable behavior across Fender, Jackson, and PreSonus"
          ]
        },
        {
          title: "Performance-Aware Evolution",
          body: [
            "The gallery architecture later supported the server-rendered primary-image and hydration strategy described in the Large-Scale Ecommerce Performance Optimization case study.",
            "Keeping the media boundary maintainable made it possible to improve initial rendering and Core Web Vitals without discarding the full interactive gallery."
          ]
        }
      ]
    },
    {
      title: "Architecture Ownership and Collaboration",
      intro: [
        "I owned the architectural direction needed to keep the gallery portable, reusable, and compatible with multiple brand requirements.",
        "The work established shared implementation patterns for React inside commerce templates and reduced the need for brand-specific rewrites as the platform and media requirements evolved."
      ]
    },
    {
      title: "Results",
      subsections: [
        {
          title: "Platform and Product Impact",
          bullets: [
            "Successfully moved a complex PDP media experience from SFCC to Shopify Plus",
            "Reduced platform lock-in through normalized, platform-independent media data",
            "Reused one architectural pattern across Fender, Jackson, and PreSonus storefronts",
            "Supported images, video, YouTube, variant-driven media, bundles, and 360-degree experiences",
            "Simplified future enhancements without rewriting the core gallery for each storefront",
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
