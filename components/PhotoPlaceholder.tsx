"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, LucideIcon } from "lucide-react";

interface PhotoPlaceholderProps {
  src?: string;
  alt: string;
  label: string;
  badge?: string;
  recommendedSize?: string;
  aspectRatio?: string;
  className?: string;
  icon?: LucideIcon;
  priority?: boolean;
  theme?: "light" | "dark";
  fill?: boolean;
}

export default function PhotoPlaceholder({
  src,
  alt,
  label,
  badge,
  recommendedSize,
  aspectRatio = "aspect-[16/10]",
  className = "",
  icon: Icon = Camera,
  priority = false,
  theme = "light",
}: PhotoPlaceholderProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const shouldRenderImage = src && !hasError;

  return (
    <div
      className={`group relative overflow-hidden rounded-xl ${aspectRatio} ${className} ${
        theme === "dark"
          ? "border border-white/10 bg-linear-to-br from-slate-950 via-emerald-950 to-slate-900 text-white"
          : "border border-slate-200/90 bg-linear-to-br from-slate-50 via-emerald-50/40 to-slate-100 text-slate-800"
      }`}
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className={`pointer-events-none absolute inset-0 ${
          theme === "dark" ? "opacity-[0.06]" : "opacity-[0.04]"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Shimmer Accent on hover */}
      <div
        className="pointer-events-none absolute -inset-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:translate-x-full"
        aria-hidden="true"
      />

      {/* Real Image Layer if provided and successfully loaded */}
      {shouldRenderImage && (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-all duration-500 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          } group-hover:scale-105`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}

      {/* Skeleton Content (Visible when no real image or during initial state) */}
      {(!shouldRenderImage || !isLoaded) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          {/* Top Badge */}
          {badge && (
            <span
              className={`absolute left-3 top-3 inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${
                theme === "dark"
                  ? "bg-white/10 text-emerald-300 backdrop-blur-md"
                  : "bg-primary-light text-primary"
              }`}
            >
              {badge}
            </span>
          )}

          {/* Central Camera/Icon Bubble */}
          <div
            className={`relative mb-3 flex size-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 sm:size-14 ${
              theme === "dark"
                ? "border border-white/15 bg-white/10 text-emerald-300 shadow-inner"
                : "border border-primary/20 bg-white text-primary shadow-sm"
            }`}
          >
            <Icon className="size-6 sm:size-7" aria-hidden="true" />
            <span className="absolute -bottom-1 -right-1 flex size-3.5 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-white ring-2 ring-white">
              +
            </span>
          </div>

          {/* Label */}
          <p
            className={`font-heading text-sm font-semibold tracking-tight sm:text-base ${
              theme === "dark" ? "text-white" : "text-foreground"
            }`}
          >
            {label}
          </p>

          {/* Recommended Resolution Tag */}
          {recommendedSize && (
            <span
              className={`mt-1.5 inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-medium ${
                theme === "dark"
                  ? "bg-black/40 text-slate-300"
                  : "bg-slate-200/70 text-slate-600"
              }`}
            >
              Rec: {recommendedSize}
            </span>
          )}

          {/* Hover Hint */}
          <div
            className={`absolute bottom-2.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${
              theme === "dark" ? "text-emerald-200/90" : "text-primary"
            }`}
          >
            <span className="text-[11px] font-medium tracking-wide">
              {src ? `Upload to: ${src}` : "Drop real photo here"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
