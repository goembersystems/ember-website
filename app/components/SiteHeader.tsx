"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import EmberLogo from "./EmberLogo";
import {
  CONTACT_SECTION_ID,
  LEADFLOW_INTEREST_QUERY,
  LEADFLOW_PATH,
} from "../lib/siteConstants";

type NavLink = {
  href: string;
  label: string;
  emphasize?: boolean;
};

type SiteHeaderProps = {
  variant?: "home" | "leadflow";
};

const HOME_LINKS: NavLink[] = [
  { href: "#services", label: "Services" },
  { href: LEADFLOW_PATH, label: "LeadFlow", emphasize: true },
  { href: "#portfolio", label: "Work" },
  { href: "#why-ember", label: "Why Ember" },
  { href: "#estimator", label: "Estimate" },
  { href: "#faq", label: "FAQ" },
  { href: "#consultation", label: "Consult" },
];

const LEADFLOW_LINKS: NavLink[] = [
  { href: LEADFLOW_PATH, label: "LeadFlow", emphasize: true },
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Work" },
  {
    href: `/?interest=${LEADFLOW_INTEREST_QUERY}#${CONTACT_SECTION_ID}`,
    label: "Contact",
  },
];

export default function SiteHeader({ variant = "home" }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const links = variant === "leadflow" ? LEADFLOW_LINKS : HOME_LINKS;
  const ctaHref =
    variant === "leadflow"
      ? `#${CONTACT_SECTION_ID}`
      : `#${CONTACT_SECTION_ID}`;
  const ctaLabel = variant === "leadflow" ? "Get LeadFlow" : "Book a Free Consultation";
  const ctaShortLabel = variant === "leadflow" ? "Get LeadFlow" : "Consult";

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-5 py-4 sm:gap-4 sm:px-8 lg:px-12">
        <Link
          aria-label="Ember Systems"
          className="flex min-w-0 items-center gap-2.5 sm:gap-3"
          href="/"
          onClick={closeMenu}
        >
          <EmberLogo priority />
          <span className="truncate text-sm font-semibold tracking-wide text-white sm:text-base">
            Ember Systems
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm text-zinc-400 xl:flex"
        >
          {links.map((link) => (
            <a
              className={`transition hover:text-white ${
                link.emphasize ? "text-orange-200 hover:text-orange-100" : ""
              }`}
              href={link.href}
              key={`${link.href}-${link.label}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            className="rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-black transition hover:bg-orange-100 sm:px-5 sm:py-3"
            href={ctaHref}
            onClick={closeMenu}
          >
            <span className="sm:hidden">{ctaShortLabel}</span>
            <span className="hidden sm:inline">{ctaLabel}</span>
          </a>

          <button
            aria-controls="mobile-nav"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white transition hover:border-orange-300/30 hover:bg-orange-400/10 xl:hidden"
            onClick={() => setOpen((current) => !current)}
            type="button"
          >
            <span aria-hidden="true" className="text-lg leading-none">
              {open ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div
          className="border-t border-white/[0.06] bg-black/95 xl:hidden"
          id="mobile-nav"
        >
          <nav
            aria-label="Mobile"
            className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8"
          >
            {links.map((link) => (
              <a
                className={`rounded-xl px-4 py-3 text-base font-medium transition hover:bg-white/[0.04] ${
                  link.emphasize ? "text-orange-200" : "text-zinc-200"
                }`}
                href={link.href}
                key={`mobile-${link.href}-${link.label}`}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              className="mt-2 rounded-full bg-orange-300 px-4 py-3 text-center text-sm font-semibold text-black transition hover:bg-orange-200"
              href={
                variant === "leadflow"
                  ? `#${CONTACT_SECTION_ID}`
                  : LEADFLOW_PATH
              }
              onClick={closeMenu}
            >
              {variant === "leadflow"
                ? "Talk to Ember"
                : "Explore Ember LeadFlow"}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
