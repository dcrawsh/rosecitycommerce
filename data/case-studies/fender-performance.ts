import { CaseStudy } from "@/data/case-studies/types";

const fenderPortfolioDisclaimer =
  "Completed as part of an in-house ecommerce engineering team and included here as a professional portfolio project.";

export const fenderPerformanceOptimization: CaseStudy = {
  slug: "fender-large-scale-ecommerce-performance-optimization",
  title: "Large-Scale Ecommerce Performance Optimization",
  client: "Fender in-house ecommerce engineering team",
  businessType: "IN-HOUSE ECOMMERCE ENGINEERING",
  excerpt:
    "Led performance initiatives across Fender's global ecommerce storefronts, improving page-load speed, Core Web Vitals, product discovery, media delivery, and frontend maintainability.",
  impactSummary:
    "Reduced homepage load time from approximately 10 seconds to 4 seconds, cut PDP Largest Contentful Paint by more than 50%, improved PDP Cumulative Layout Shift by more than 90%, and improved sitewide LCP by approximately 30–40%.",
  disclaimer: fenderPortfolioDisclaimer,
  tags: ["Performance", "Core Web Vitals", "Shopify", "Frontend", "Web Performance", "Cloudflare"],
  context:
    "Fender's ecommerce properties supported high-traffic storefronts with media-rich product pages, long-form marketing pages, product recommendation rails, localized content, and third-party integrations.",
  problem:
    "The challenge was to improve both measured and perceived performance without limiting the flexibility needed by merchandising and marketing teams.",
  solution: [
    "Prioritized high-engagement product rails and reduced product fetching and rendering for deeply nested recommendations",
    "Server-rendered the primary PDP image in a dimensionally matched skeleton before the React gallery initialized",
    "Introduced Cloudflare Image Resizing to deliver appropriately sized and optimized storefront imagery",
    "Implemented asynchronous product-tile loading and stable skeleton states across collection and marketing pages",
    "Refactored carousel and gallery logic to reduce unnecessary rendering and improve maintainability",
    "Evaluated third-party scripts and storefront integrations for performance impact",
    "Applied React, Liquid, code-splitting, and responsive-image optimization patterns across shared storefront functionality"
  ],
  results: [
    "Reduced homepage and marketing-page load time from approximately 10 seconds to 4 seconds",
    "Reduced PDP Largest Contentful Paint by more than 50%",
    "Improved PDP Cumulative Layout Shift by more than 90%",
    "Improved sitewide Largest Contentful Paint by approximately 30–40%",
    "Reduced frontend rebuild time from approximately 20 seconds to 2 seconds",
    "Used customer-behavior data to eliminate low-value product loading",
    "Improved perceived performance while preserving merchandising flexibility",
    "Created reusable performance patterns across multiple ecommerce experiences"
  ],
  sections: [
    {
      title: "Context",
      intro: [
        "Fender's ecommerce properties supported high-traffic storefronts with media-rich product pages, long-form marketing pages, product recommendation rails, localized content, and third-party integrations.",
        "The challenge was to improve both measured and perceived performance without limiting the flexibility needed by merchandising and marketing teams."
      ]
    },
    {
      title: "Homepage and Marketing Page Performance",
      subsections: [
        {
          title: "Problem",
          body: [
            "Long-form marketing pages contained numerous product rails, including deeply nested recommendations farther down the page.",
            "Loading all of those products as customers scrolled introduced repeated loading states, additional network requests, and unnecessary frontend work."
          ]
        },
        {
          title: "Data-Driven Decision",
          body: [
            "Analytics showed that only 0.3% of visitors clicked a product rail. Of the visitors who did, 99% clicked one of the first two product rails.",
            "Based on that behavior, I recommended reducing or removing product loading from deeper, lower-engagement sections rather than continuing to optimize loading states that almost no customers interacted with."
          ]
        },
        {
          title: "Solution",
          bullets: [
            "Progressively lazy-loaded product tiles on marketing pages",
            "Prioritized the first product rails, where nearly all engagement occurred",
            "Reduced product fetching and rendering for deeply nested rails",
            "Minimized repeated loading states as customers moved through the page",
            "Reduced unnecessary API requests and client-side rendering work"
          ]
        },
        {
          title: "Result",
          body: [
            "Reduced homepage and marketing-page load time from approximately 10 seconds to 4 seconds while preserving the product-discovery experiences customers actually used."
          ]
        }
      ]
    },
    {
      title: "Product Detail Page Core Web Vitals",
      subsections: [
        {
          title: "Problem",
          body: [
            "The primary PDP image was rendered inside a React-powered media gallery.",
            "Because the gallery mounted after the initial server-rendered page, customers could experience a delayed hero image and visible layout movement during hydration. This negatively affected both Largest Contentful Paint and Cumulative Layout Shift."
          ]
        },
        {
          title: "Solution",
          body: [
            "Created a server-rendered, hydrated skeleton that included the primary product image before the React gallery initialized.",
            "The server-rendered image matched the gallery's final dimensions, placement, and visual presentation. When React mounted, the full gallery replaced the skeleton seamlessly without a visible jump or duplicate loading experience."
          ],
          bullets: [
            "Displayed the main product image immediately",
            "Reserved the gallery's final layout space before hydration",
            "Avoided a blank or unstable media region",
            "Prevented the React gallery from visibly shifting the page",
            "Made the initial server-rendered experience nearly indistinguishable from the hydrated application"
          ]
        },
        {
          title: "Result",
          bullets: [
            "Reduced PDP Largest Contentful Paint by more than 50%",
            "Improved Cumulative Layout Shift by more than 90%",
            "Created a faster and more stable initial product-page experience",
            "Preserved the full React gallery experience, including variant-driven media and interactive product views"
          ]
        }
      ]
    },
    {
      title: "Sitewide Image Delivery",
      subsections: [
        {
          title: "Problem",
          body: [
            "Large ecommerce imagery was being delivered without consistently matching each asset to the exact size and format needed by the customer's device and layout.",
            "That increased transfer size and delayed the rendering of key visual content across the storefront."
          ]
        },
        {
          title: "Solution",
          body: [
            "Introduced Cloudflare Image Resizing to dynamically deliver appropriately sized and optimized assets.",
            "The implementation allowed storefront components to request images based on their rendered dimensions rather than relying on oversized source assets."
          ]
        },
        {
          title: "Result",
          body: [
            "Improved Largest Contentful Paint by approximately 30–40% across the site, with particularly strong gains on image-heavy ecommerce pages."
          ]
        }
      ]
    },
    {
      title: "Additional Improvements",
      subsections: [
        {
          title: "Storefront and Developer Performance",
          bullets: [
            "Implemented asynchronous product-tile loading for collection and marketing pages",
            "Added skeleton states and reserved dimensions to reduce perceived latency and content movement",
            "Improved media-loading priority for primary PDP content",
            "Refactored carousel and gallery logic to reduce unnecessary rendering",
            "Evaluated third-party scripts and storefront integrations for performance impact",
            "Applied React and Liquid optimization patterns across shared storefront functionality",
            "Improved Safari behavior and cross-browser reliability",
            "Reduced frontend rebuild time from approximately 20 seconds to 2 seconds through code splitting and architectural improvements"
          ]
        }
      ]
    },
    {
      title: "Results",
      subsections: [
        {
          title: "Measured and Organizational Impact",
          bullets: [
            "Reduced homepage and marketing-page load time from approximately 10 seconds to 4 seconds",
            "Reduced PDP Largest Contentful Paint by more than 50%",
            "Improved PDP Cumulative Layout Shift by more than 90%",
            "Improved sitewide Largest Contentful Paint by approximately 30–40%",
            "Reduced frontend rebuild time from approximately 20 seconds to 2 seconds",
            "Used customer-behavior data to eliminate low-value product loading",
            "Improved perceived performance while preserving merchandising flexibility",
            "Created reusable performance patterns across multiple ecommerce experiences"
          ]
        }
      ]
    }
  ],
  sidebarHighlights: [
    "Analytics-driven product-loading strategy",
    "Progressive product-rail lazy loading",
    "Server-rendered PDP image skeleton",
    "Hydration-safe gallery replacement",
    "Cloudflare Image Resizing",
    "Responsive image delivery",
    "React and Liquid optimization",
    "Code splitting and faster rebuilds",
    "Cross-browser reliability"
  ],
  metricGroups: [
    {
      title: "Customer Experience",
      metrics: [
        {
          label: "Homepage and marketing-page load time",
          before: "≈10 seconds",
          after: "≈4 seconds",
          improvement: "≈60% faster"
        },
        {
          label: "PDP Largest Contentful Paint",
          before: "Baseline",
          after: "Less than half",
          improvement: ">50% reduction"
        },
        {
          label: "PDP Cumulative Layout Shift",
          before: "Baseline",
          after: "Less than one-tenth",
          improvement: ">90% improvement"
        },
        {
          label: "Sitewide Largest Contentful Paint",
          before: "Baseline",
          after: "Optimized image delivery",
          improvement: "≈30–40% improvement"
        }
      ]
    },
    {
      title: "Developer Experience",
      metrics: [
        {
          label: "Frontend rebuild time",
          before: "≈20 seconds",
          after: "≈2 seconds",
          improvement: "≈90% faster"
        }
      ]
    }
  ],
  stack: [
    "Shopify",
    "Liquid",
    "React",
    "TypeScript",
    "Cloudflare Image Resizing",
    "Performance APIs",
    "Core Web Vitals",
    "Analytics",
    "Code Splitting",
    "Responsive Images"
  ],
  image: "/images/fender-homepage-performance.png",
  imagePosition: "center"
};
