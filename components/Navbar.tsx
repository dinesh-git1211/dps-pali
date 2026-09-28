"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Campus", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ── Scroll detection for sticky shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); // initial check
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close mobile menu on route-change / resize ── */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLinkClick = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-sm"
          : "bg-white"
      }`}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* ── Logo ── */}
        <a
          href="#hero"
          className="flex shrink-0 items-center gap-3 rounded-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label="DPS Pali District — Home"
          onClick={handleLinkClick}
        >
          <Image
            src="/logo.png"
            alt=""
            width={48}
            height={52}
            className="h-12 w-auto"
            aria-hidden="true"
            priority
          />
          <div className="hidden min-[420px]:block">
            <p className="font-heading text-base font-bold leading-tight text-primary">
              DPS Pali District
            </p>
            <p className="text-xs font-medium text-muted">
              Excellence in Education
            </p>
          </div>
        </a>

        {/* ── Desktop Links ── */}
        <ul className="hidden items-center gap-1 md:flex" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-primary-light hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA + Mobile Toggle ── */}
        <div className="flex items-center gap-3">
          <a
            href="#admissions"
            className="hidden rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-accent-hover focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:inline-flex"
          >
            Apply Now
          </a>

          {/* ── Hamburger Button ── */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              /* X icon */
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Panel ── */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${
          mobileOpen
            ? "max-h-[400px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="border-t border-border px-4 pb-4 pt-2">
          <ul className="flex flex-col gap-1" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-colors duration-200 hover:bg-primary-light hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  onClick={handleLinkClick}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 border-t border-border pt-3">
            <a
              href="#admissions"
              className="flex w-full items-center justify-center rounded-lg bg-accent px-5 py-3 text-base font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-accent-hover focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              onClick={handleLinkClick}
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
