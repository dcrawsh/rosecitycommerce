export const siteConfig = {
  brandName: "Rose City Commerce",
  tagline: "Websites and digital tools for Portland businesses.",
  description:
    "Rose City Commerce builds websites, ecommerce systems, and practical automations for small and medium Portland teams.",
  url: "https://rosecitycommerce.com",
  location: "Portland, OR",
  serviceArea: ["Portland", "Beaverton", "Hillsboro", "Vancouver WA"],
  contactEmail: "rosecitycommerce@gmail.com",
  bookingUrl: "https://cal.com/rosecitycommerce/intro",
  socials: {
    linkedin: "https://linkedin.com/in/placeholder",
    github: "https://github.com/placeholder"
  }
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
] as const;
