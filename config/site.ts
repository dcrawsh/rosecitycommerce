export const siteConfig = {
  name: "Rose City Commerce",
  tagline: "Build + optimize + measure + scale.",
  description:
    "Senior eCommerce engineering and growth support for Shopify and Salesforce Commerce Cloud teams.",
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
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
] as const;
