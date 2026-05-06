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
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-white text-charcoal-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <span className="sr-only">Menu</span>
        <span aria-hidden="true" className="flex flex-col gap-1">
          <span className="block h-0.5 w-5 rounded-full bg-current" />
          <span className="block h-0.5 w-5 rounded-full bg-current" />
          <span className="block h-0.5 w-5 rounded-full bg-current" />
        </span>
      </button>
      {open ? (
        <div
          className="absolute left-0 right-0 top-full w-screen border-b border-border bg-paper-50 p-5 shadow-md"
          id="mobile-nav"
        >
          <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block w-full rounded-md px-1 py-2 text-base font-semibold text-forest-900"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#free-audit"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-copper-500 px-4 py-3 text-sm font-semibold text-paper-50"
            >
              Request a free audit
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
