export type ServicePackage = {
  slug: string;
  title: "Launch" | "Sell" | "Automate" | "Optimize";
  summary: string;
  idealFor: string;
  timeline: string;
  deliverables: string[];
  startingAt: string;
};

export const servicePackages: ServicePackage[] = [
  {
    slug: "launch",
    title: "Launch",
    summary: "Website and landing page builds focused on lead generation and trust.",
    idealFor: "Local teams that need a modern web presence that turns visitors into inquiries.",
    timeline: "2-4 weeks",
    deliverables: [
      "Marketing site or landing page",
      "Forms, scheduling, and reviews integration",
      "Basic technical SEO setup"
    ],
    startingAt: "$2,500"
  },
  {
    slug: "sell",
    title: "Sell",
    summary: "Shopify builds, migrations, and conversion-focused ecommerce improvements.",
    idealFor: "Brands ready to improve online sales without overcomplicating their stack.",
    timeline: "3-8 weeks",
    deliverables: [
      "Shopify build/upgrade or migration support",
      "Merchandising and collection optimization",
      "Checkout and conversion flow improvements"
    ],
    startingAt: "$4,500"
  },
  {
    slug: "automate",
    title: "Automate",
    summary: "Connect your tools once so lead routing and team workflows run automatically.",
    idealFor: "Small teams losing time to repetitive manual follow-up and handoff tasks.",
    timeline: "1-3 weeks",
    deliverables: [
      "Slack/Asana/Jira workflow setup",
      "Mailchimp or Klaviyo lead handoff",
      "Form -> task -> notification automations"
    ],
    startingAt: "$1,800"
  },
  {
    slug: "optimize",
    title: "Optimize",
    summary: "Improve traffic quality, conversion confidence, and reporting clarity.",
    idealFor: "Teams that want better SEO and cleaner measurement before scaling spend.",
    timeline: "2-6 weeks",
    deliverables: [
      "Local SEO and technical SEO fixes",
      "Speed and performance tuning",
      "GA4/GTM/Segment tracking cleanup + dashboard"
    ],
    startingAt: "$2,200"
  }
];
