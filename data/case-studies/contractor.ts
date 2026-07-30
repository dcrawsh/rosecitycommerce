import { CaseStudy } from "@/data/case-studies/types";

export const contractorLeadGen: CaseStudy = {
  slug: "paint-pdx-wordpress-nextjs-asana-estimates",
  title: "Portland Painting and Restoration WordPress to Next.js migration with Asana estimate flow",
  client: "Portland Painting and Restoration",
  businessType: "Painting contractor / lead generation",
  excerpt: "Migrated a WordPress site to a custom Next.js build and connected estimate requests to an Asana workflow.",
  impactSummary:
    "This project mattered because Portland Painting and Restoration needed a faster site customers could use easily and a clearer estimate flow the team could manage without chasing every lead manually.",
  tags: [
    "Websites",
    "Automation",
    "SEO",
    "Next.js",
    "WordPress",
    "Small Business",
    "Performance",
    "Core Web Vitals"
  ],
  context:
    "Portland Painting and Restoration needed a faster, cleaner website for paintpdx.com and a more organized way to handle estimate requests from the site.",
  problem:
    "The existing WordPress site was slower than it needed to be, and estimate requests needed a clearer handoff into the team's project workflow.",
  solution: [
    "Migrated the site from WordPress to a custom Next.js build",
    "Rebuilt core service pages with faster loading and cleaner page structure",
    "Connected estimate requests to an Asana flow for follow-up ownership",
    "Improved technical SEO fundamentals across key service pages"
  ],
  results: [
    "Moved the site from WordPress to a faster custom Next.js build",
    "Created a clearer estimate-request handoff into Asana",
    "Improved measured performance and SEO scores across priority pages"
  ],
  metricGroups: [
    {
      title: "Home Page",
      metrics: [
        { label: "Performance Score", before: "63/100", after: "98/100", improvement: "+35 points" },
        { label: "SEO Score", before: "77/100", after: "92/100", improvement: "+15 points" },
        { label: "First Contentful Paint", before: "1.3s", after: "0.2s", improvement: "~6.5x faster" },
        { label: "Largest Contentful Paint", before: "6.0s", after: "1.1s", improvement: "~5.5x faster" },
        { label: "Speed Index", before: "12.1s", after: "0.4s", improvement: "~30x faster" }
      ]
    },
    {
      title: "Interior Paint Page",
      metrics: [
        { label: "Performance Score", before: "63/100", after: "99/100", improvement: "+36 points" },
        { label: "SEO Score", before: "77/100", after: "92/100", improvement: "+15 points" },
        { label: "First Contentful Paint", before: "1.2s", after: "0.2s", improvement: "~6x faster" },
        { label: "Largest Contentful Paint", before: "13.9s", after: "0.5s", improvement: "~28x faster" },
        { label: "Speed Index", before: "12.4s", after: "0.3s", improvement: "~41x faster" }
      ]
    }
  ],
  stack: ["Next.js", "Asana", "Technical SEO", "Performance"],
  image: "/images/paint-pdx-home.png",
  imagePosition: "top"
};
