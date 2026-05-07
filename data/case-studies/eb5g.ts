import { CaseStudy } from "@/data/case-studies/types";

export const eb5gRecovery: CaseStudy = {
  slug: "eb5g-wordpress-production-recovery-plugin-conflict",
  title: "WordPress production recovery and plugin conflict remediation for EB5G",
  client: "EB5G",
  businessType: "WEBSITE RECOVERY / WORDPRESS",
  excerpt:
    "Recovered a broken WordPress site after failed core/plugin updates by rolling back the environment, isolating plugin conflicts, and restoring site/admin functionality.",
  impactSummary:
    "This was a recovery project where the priority was restoring production access and admin usability without forcing a full rebuild.",
  tags: ["WordPress", "WP-CLI", "Debugging", "Infrastructure", "Maintenance"],
  context:
    "EB5G experienced a production outage after internal staff updated WordPress core and multiple plugins simultaneously on a site running a custom theme.",
  problem:
    "The site began returning 500 errors and the WordPress admin became inaccessible, preventing normal rollback or troubleshooting through the dashboard.",
  solution: [
    "Connected directly to the server environment over SSH",
    "Used WP-CLI and server-level access to stabilize the WordPress installation",
    "Rolled back WordPress/plugin updates to restore basic functionality",
    "Re-enabled plugins incrementally to isolate the breaking dependency",
    "Identified a problematic plugin that conflicted with the custom theme and updated stack",
    "Helped replace the outdated plugin with a safer alternative compatible with the site architecture",
    "Restored both frontend site access and WordPress admin usability"
  ],
  results: [
    "Recovered a production WordPress site from a full outage state",
    "Restored admin access without requiring a full rebuild",
    "Identified the root-cause plugin conflict through controlled rollback/testing",
    "Improved long-term maintainability by replacing an outdated dependency",
    "Reduced future update risk through safer plugin management practices"
  ],
  stack: ["WordPress", "WP-CLI", "SSH", "PHP", "Plugin debugging", "Production recovery"],
  image: "/images/eb5g-projects.png",
  imagePosition: "top"
};
