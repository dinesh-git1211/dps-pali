"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import TiltCard from "@/components/TiltCard";
import { BookOpenCheck, Play, Pause } from "lucide-react";

/* ────────────────────────────────────────────────────────────────
   Statistics shown in the hero section.
   Update these values as the school grows.
   ──────────────────────────────────────────────────────────────── */
const STATS = [
  { value: "1200+", label: "Students Enrolled" },
  { value: "50+", label: "Expert Faculty" },
  { value: "26:1", label: "Student-Teacher Ratio" },
  { value: "100%", label: "Board Pass Rate" },
] as const;

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasVideoError, setHasVideoError] = useState(false);

  /* ── Honor prefers-reduced-motion & ensure autoplay ── */
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay may be deferred until user interaction
      });
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }

    const handleChange = () => {
      if (motionQuery.matches && videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    motionQuery.addEventListener("change", handleChange);
    return () => motionQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <div className="px-3 sm:px-6 pt-3 sm:pt-4 bg-editorial-cream">
      <section
        id="hero"
        className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-hero-from to-hero-to min-h-[92vh] flex flex-col justify-between"
        aria-label="Welcome to DPS Pali District"
      >
        {/* ── Background Video & Poster Layer ── */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          {!hasVideoError && (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              poster="/images/hero-campus.svg"
              onError={(e) => {
                console.warn("Hero video playback issue:", e);
                setHasVideoError(true);
              }}
              className="h-full w-full object-cover opacity-70 scale-105 transition-opacity duration-700"
            >
              <source src="/videos/hero-campus.mp4" type="video/mp4" />
            </video>
          )}

          {/* Fallback Static Poster Image */}
          {hasVideoError && (
            <Image
              src="/images/hero-campus.svg"
              alt="DPS Pali District Campus Facade"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-30 scale-105"
            />
          )}

          {/* Emerald & Dark Vignette for contrast with white headline */}
          <div className="absolute inset-0 bg-linear-to-b from-hero-from/50 via-hero-from/30 to-hero-to/60" />
          <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-black/20 to-black/60" />
        </div>

        {/* ── Main content ── */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 flex-1 flex flex-col items-center justify-center text-center mt-12 sm:mt-16">
          
          {/* Logo with 3D Float */}
          <div className="mb-8 animate-float-slow sm:mb-12">
            <Image
              src="/logo.png"
              alt="DPS Pali District crest"
              width={100}
              height={110}
              className="h-24 w-auto drop-shadow-2xl sm:h-32 lg:h-40"
              style={{ width: "auto" }}
              priority
            />
          </div>

          {/* Location badge & Photo indicator */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-md shadow-xs">
              <svg
                className="size-4 text-amber-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <span className="text-[11px] font-bold tracking-widest uppercase text-white/90 sm:text-xs">
                Est. Pali, Rajasthan
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-950/40 px-3 py-1.5 text-[11px] font-bold tracking-widest uppercase text-emerald-200/90 backdrop-blur-md">
              <BookOpenCheck className="size-3.5 text-amber-400" aria-hidden="true" />
              <span>CBSE Affiliated</span>
            </div>
            
            <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-950/40 px-3 py-1.5 text-[11px] font-bold tracking-widest uppercase text-amber-400 backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-amber-500"></span>
              </span>
              <span>Admissions 2026–27 Open</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-6xl font-black uppercase leading-[0.95] tracking-tighter text-white drop-shadow-sm sm:text-7xl lg:text-[8rem]">
            Delhi Public
            <span className="mt-1 block text-emerald-100 sm:mt-2">
              School
            </span>
          </h1>

          {/* Tagline */}
          <p className="mx-auto mt-6 sm:mt-8 max-w-2xl font-mono text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-widest leading-relaxed text-emerald-100/95">
            <span className="block sm:inline">Service Before Self</span>
            <span className="hidden mx-2 text-amber-500 sm:inline" aria-hidden="true">•</span>
            <span className="block sm:inline mt-1 sm:mt-0">Architects of Intellect</span>
          </p>

          {/* CTA Buttons with 3D Tap Feedback */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-4">
            <a
              href="#admissions"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-amber-950/30 transition-all duration-200 hover:bg-accent-hover hover:shadow-xl active:scale-95 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-primary motion-reduce:transition-none"
            >
              Apply for Admission
            </a>
            <a
              href="#facilities"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm shadow-md transition-all duration-200 hover:border-white/50 hover:bg-white/20 active:scale-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary motion-reduce:transition-none"
            >
              Explore Campus
            </a>
          </div>
        </div>

        {/* ── Stats Row with 3D TiltCards & Glassmorphism ── */}
        <div className="mx-auto mt-14 max-w-3xl sm:mt-16">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {STATS.map(({ value, label }) => (
              <TiltCard key={label} scale={1.04} maxTilt={6}>
                <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-5 text-center backdrop-blur-md shadow-lg shadow-emerald-950/20 transition-all duration-300 hover:bg-white/15 hover:border-white/35">
                  <p className="font-heading text-2xl font-bold text-white sm:text-3xl">
                    {value}
                  </p>
                  <p className="mt-1 text-xs font-medium tracking-wide text-emerald-200 sm:text-sm">
                    {label}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      {/* ── Video Pause / Play Accessible Toggle ── */}
      <div className="absolute bottom-6 right-4 z-20 sm:bottom-8 sm:right-6">
        <button
          type="button"
          onClick={toggleVideo}
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
          className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/40 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md shadow-md transition-all hover:bg-black/60 active:scale-95 focus-visible:ring-2 focus-visible:ring-white"
        >
          {isPlaying ? (
            <>
              <Pause className="size-3.5 text-amber-400" aria-hidden="true" />
              <span className="hidden sm:inline">Pause Video</span>
            </>
          ) : (
            <>
              <Play className="size-3.5 text-emerald-400" aria-hidden="true" />
              <span className="hidden sm:inline">Play Video</span>
            </>
          )}
        </button>
      </div>
    </section>
  </div>
  );
}