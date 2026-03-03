import Link from "next/link";
import { navItems, siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-paper-100 py-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-2">
        <div>
          <p className="font-sans text-lg font-bold text-forest-900">{siteConfig.name}</p>
          <p className="mt-2 max-w-sm text-sm text-slate-700">{siteConfig.description}</p>
          <p className="mt-3 text-sm text-slate-700">{siteConfig.location}</p>
        </div>
        <div className="grid gap-4 text-sm">
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="font-semibold text-charcoal-900 hover:text-forest-900">
                {item.label}
              </Link>
            ))}
          </div>
          <a className="text-slate-700 underline-offset-4 hover:underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          <p className="text-xs text-slate-700">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
