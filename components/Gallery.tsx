"use client";

import { useState } from "react";
import Image from "next/image";
import TiltCard from "@/components/TiltCard";
import { Eye, X } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "Campus" | "Academics" | "Events & Sports";
  description: string;
  imageSrc: string;
  recommendedSize: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "annual-day",
    title: "Annual Day & Cultural Celebrations",
    category: "Events & Sports",
    description:
      "Vibrant student performances, theatrical plays, music, and stage honors showcasing student creativity.",
    imageSrc: "/images/gallery/annual-day.svg",
    recommendedSize: "800 × 600 px",
  },
  {
    id: "sports-day",
    title: "Annual Athletic Meet & Sports",
    category: "Events & Sports",
    description:
      "Track and field competitions, football tournaments, and athletic achievements on the school grounds.",
    imageSrc: "/images/gallery/sports-day.svg",
    recommendedSize: "800 × 600 px",
  },
  {
    id: "science-exhibition",
    title: "Science & Innovation Fair",
    category: "Academics",
    description:
      "Student working models, robotics projects, and practical scientific experiments presented to parents.",
    imageSrc: "/images/gallery/science-exhibition.svg",
    recommendedSize: "800 × 600 px",
  },
  {
    id: "republic-day",
    title: "National Festivals & Ceremonies",
    category: "Events & Sports",
    description:
      "Patriotic flag hoisting, march past, and cultural addresses celebrating Indian national pride.",
    imageSrc: "/images/gallery/republic-day.svg",
    recommendedSize: "800 × 600 px",
  },
  {
    id: "computer-lab",
    title: "Digital Learning & IT Practical",
    category: "Academics",
    description:
      "Students exploring coding, multimedia, and digital literacy in the modern computer laboratory.",
    imageSrc: "/images/gallery/computer-lab.svg",
    recommendedSize: "800 × 600 px",
  },
  {
    id: "campus-view",
    title: "Sprawling Campus",
    category: "Campus",
    description:
      "Wide campus panorama showing the serene school building, manicured trees, and open sports field.",
    imageSrc: "/images/gallery/campus-view.svg",
    recommendedSize: "800 × 600 px",
  },
];

const CATEGORIES = ["All", "Campus", "Academics", "Events & Sports"] as const;

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="gallery"
      className="relative scroll-mt-24 overflow-hidden overflow-x-hidden bg-editorial-cream py-20 sm:py-24"
      aria-labelledby="gallery-heading"
    >
      {/* ── Ambient Depth Orbs ── */}
      <div
        className="pointer-events-none absolute -right-24 top-1/4 size-72 rounded-full bg-emerald-500/10 blur-[80px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-1/4 size-72 rounded-full bg-amber-400/10 blur-[80px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-decorative">
            School Life in Pictures
          </p>
          <h2
            id="gallery-heading"
            className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Campus Life &amp; Highlights
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Glimpses of daily life, academic discovery, athletic milestones,
            and cultural celebrations at DPS Pali District.
          </p>
        </div>

        {/* ── Filter Tabs with Tap Feedback ── */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-100 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ── Photo Skeletons Grid with 3D TiltCards ── */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <TiltCard key={item.id} scale={1.03} maxTilt={6}>
              <div
                onClick={() => setSelectedItem(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedItem(item);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View photo: ${item.title}`}
                className="group relative h-full cursor-pointer overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:border-emerald-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {/* Photo Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Category Badge */}
                  <span className="absolute left-3 top-3 z-10 inline-flex items-center rounded-full bg-black/50 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur-md">
                    {item.category}
                  </span>

                  {/* Hover overlay with Eye icon */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-primary shadow-lg">
                      <Eye className="size-4" aria-hidden="true" />
                      <span>Preview Slot</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <span className="shrink-0 rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500">
                      {item.recommendedSize}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* ── Lightbox Modal Dialog ── */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              aria-label="Close photo preview"
              className="absolute right-3 top-3 z-20 flex size-9 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="size-5" aria-hidden="true" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-full bg-slate-950">
              <Image
                src={selectedItem.imageSrc}
                alt={selectedItem.title}
                fill
                className="object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                {selectedItem.category}
              </span>
            </div>

            {/* Modal Details */}
            <div className="p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 id="modal-title" className="font-heading text-xl font-bold text-foreground">
                  {selectedItem.title}
                </h3>
                <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
                  Rec: {selectedItem.recommendedSize}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {selectedItem.description}
              </p>
              <div className="mt-4 rounded-lg bg-slate-50 p-3 text-xs text-slate-600">
                <p className="font-medium text-slate-900">Drop-in Location:</p>
                <code className="mt-1 block font-mono text-[11px] text-primary">
                  public{selectedItem.imageSrc}
                </code>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}