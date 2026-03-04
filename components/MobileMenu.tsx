"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/config/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-controls="mobile-nav"
        aria-expanded={open}
        aria-label="Toggle menu"
        className="rounded-md border border-border bg-white px-3 py-2 text-sm font-medium text-charcoal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        Menu
      </button>
      {open ? (
        <div
          className="absolute left-0 right-0 top-full border-b border-border bg-paper-50 p-5 shadow-md"
          id="mobile-nav"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-forest-900"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#free-audit"
              onClick={() => setOpen(false)}
              className="inline-flex w-fit items-center rounded-md bg-copper-500 px-4 py-2 text-sm font-semibold text-paper-50"
            >
              Request a free audit
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
