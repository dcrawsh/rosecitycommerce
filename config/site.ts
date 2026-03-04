export const siteConfig = {
  name: "Rose City Commerce",
  tagline: "Helping Portland businesses sell online.",
  description:
    "Portland ecommerce consulting for Shopify development, CRO, SEO, analytics, and performance improvements.",
  url: "https://rosecitycommerce.com",
  email: "hello@rosecitycommerce.com",
  location: "Portland, OR",
  bookingUrl: "https://cal.com/rosecitycommerce/intro",
  socials: {
    linkedin: "https://linkedin.com/in/placeholder",
    github: "https://github.com/placeholder"
  }
} as const;

export const navItems = [
  { label: "Free Audit", href: "/#free-audit" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
] as const;
