import { CaseStudy } from "@/data/case-studies/types";

const fenderPortfolioDisclaimer =
  "Completed as part of an in-house ecommerce engineering team and included here as a professional portfolio project.";

export const fenderPerformanceOptimization: CaseStudy = {
  slug: "fender-large-scale-ecommerce-performance-optimization",
  title: "Large-Scale Ecommerce Performance Optimization",
  client: "Fender in-house ecommerce engineering team",
  businessType: "IN-HOUSE ECOMMERCE ENGINEERING",
  excerpt:
    "Led performance initiatives across Fender ecommerce properties focused on Core Web Vitals, PDP experiences, collection pages, media delivery, and frontend architecture.",
  impactSummary:
    "The work balanced speed, maintainability, and merchandising flexibility across high-traffic ecommerce storefronts with rich product experiences.",
  disclaimer: fenderPortfolioDisclaimer,
  tags: ["Performance", "Core Web Vitals", "Shopify", "Frontend", "Web Performance"],
  context:
    "Fender ecommerce properties served large global storefronts where product discovery, PDP media, merchandising modules, and third-party integrations all affected customer experience and frontend maintainability.",
  problem:
    "The storefronts needed better real and perceived performance without reducing merchandising flexibility. Rich media, product-heavy pages, carousels, third-party scripts, and layout instability all required ongoing architectural attention.",
  solution: [
    "Improved PDP gallery performance through smarter rendering, loading, and media handling strategies",
    "Used skeleton loading and layout stabilization patterns to improve perceived performance and reduce content shifts",
    "Optimized Largest Contentful Paint by improving image handling, media priority, and initial page composition",
    "Implemented async product tile loading and collection page improvements for faster product discovery",
    "Refactored carousel and media experiences to reduce unnecessary work and improve maintainability",
    "Evaluated third-party scripts and storefront integrations for performance impact",
    "Applied React and Liquid optimization techniques to keep dynamic ecommerce experiences responsive and easier to evolve"
  ],
  results: [
    "Delivered significant Core Web Vitals improvements without exposing confidential metrics",
    "Created faster product discovery experiences on PDP and collection surfaces",
    "Reduced layout shift and improved perceived performance for media-heavy pages",
    "Improved maintainability of frontend systems that supported ongoing merchandising needs",
    "Helped establish performance-conscious development standards across ecommerce projects"
  ],
  stack: ["Shopify", "Liquid", "React", "TypeScript", "Performance APIs", "Core Web Vitals"],
  image: "/images/fender-homepage-performance.png",
  imagePosition: "center"
};
