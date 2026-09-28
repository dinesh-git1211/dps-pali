import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Award,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────────
   Quick navigation links
   ──────────────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Campus", href: "#facilities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Admissions", href: "#admissions" },
] as const;

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=DPS+Pali+District+Sanpa+Pali+Rajasthan+306401";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 bg-footer-bg text-footer-text"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* ── Column 1: School Identity ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm">
                <Image
                  src="/logo.png"
                  alt="DPS logo"
                  width={40}
                  height={40}
                  className="size-full object-contain"
                />
              </div>
              <div>
                <p className="font-heading text-base font-bold text-white">
                  DPS Pali District
                </p>
                <p className="text-xs text-slate-400">
                  Excellence in Education
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Delhi Public School Pali District is committed to nurturing future
              leaders through holistic education, modern infrastructure, and an
              unwavering focus on academic excellence.
            </p>
            {/* CBSE affiliation notice */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1.5">
              <Award className="size-4 text-accent-decorative" aria-hidden="true" />
              <span className="text-xs font-medium text-slate-300">
                CBSE Affiliated School
              </span>
            </div>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-white focus-visible:rounded focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-footer-bg"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Contact Info ── */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4" role="list">
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 size-5 shrink-0 text-accent-decorative"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-slate-400">
                  Opposite Punagar Mataji Temple, NH-162, Jaipur–Ajmer Road,
                  Sanpa, Pali District, Rajasthan&nbsp;–&nbsp;306401
                </span>
              </li>
              <li>
                <a
                  href="tel:+919116126001"
                  className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white focus-visible:rounded focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-footer-bg"
                >
                  <Phone className="size-5 shrink-0 text-accent-decorative" aria-hidden="true" />
                  +91 91161 26001
                </a>
              </li>
              <li>
                <a
                  href="mailto:delhipublicschoolpali@gmail.com"
                  className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white focus-visible:rounded focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-footer-bg"
                >
                  <Mail className="size-5 shrink-0 text-accent-decorative" aria-hidden="true" />
                  delhipublicschoolpali@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* ── Column 4: Office Hours + Map ── */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Office Hours
            </h3>
            <div className="mt-4 flex items-start gap-3">
              <Clock
                className="mt-0.5 size-5 shrink-0 text-accent-decorative"
                aria-hidden="true"
              />
              <div className="text-sm text-slate-400">
                <p>Monday – Saturday</p>
                <p className="font-medium text-slate-300">
                  8:00 AM – 4:00 PM
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Sunday &amp; Public Holidays: Closed
                </p>
              </div>
            </div>

            {/* Google Maps direction button */}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:border-slate-600 hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-footer-bg"
            >
              <MapPin className="size-4" aria-hidden="true" />
              Get Directions
              <ExternalLink className="size-3.5 text-slate-400" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 border-t border-slate-800 pt-6 sm:flex sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Delhi Public School Pali District. All
            rights reserved.
          </p>
          <p className="mt-2 text-xs text-slate-600 sm:mt-0">
            Affiliated to CBSE, New Delhi
          </p>
        </div>
      </div>
    </footer>
  );
}