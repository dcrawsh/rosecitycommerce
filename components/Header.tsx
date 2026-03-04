import Link from "next/link";
import { navItems, siteConfig } from "@/config/site";
import { Button } from "@/components/Button";
import { MobileMenu } from "@/components/MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="font-sans text-base font-bold text-forest-900">
          {siteConfig.brandName}
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-forest-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/#free-audit" variant="secondary" className="px-4 py-2 text-sm">
            Request a free audit
          </Button>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
