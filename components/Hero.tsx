"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import TiltCard from "@/components/TiltCard";
import { Camera, Play, Pause } from "lucide-react";

/* ────────────────────────────────────────────────────────────────
   Statistics shown in the hero section.
   Update these values as the school grows.
   ──────────────────────────────────────────────────────────────── */
const STATS = [
  { value: "500+", label: "Students Enrolled" },
  { value: "50+", label: "Expert Faculty" },
  { value: "15:1", label: "Student-Teacher Ratio" },
  { value: "100%", label: "Board Pass Rate" },
] as const;

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasVideoError, setHasVideoError] = useState(false);

  /* ── Honor prefers-reduced-motion ── */
  useEffect(() => {
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
    <section
      id="hero"
      className="relative overflow-hidden overflow-x-hidden bg-linear-to-br from-hero-from to-hero-to"
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
            onError={() => setHasVideoError(true)}
            className="h-full w-full object-cover opacity-25 mix-blend-luminosity scale-105"
          >
            <source src="/videos/hero-campus.mp4" type="video/mp4" />
            <source src="/videos/hero-campus.webm" type="video/webm" />
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
            className="object-cover opacity-20 mix-blend-luminosity scale-105"
          />
        )}

        {/* Emerald vignette for 100% WCAG AAA readability */}
        <div className="absolute inset-0 bg-linear-to-b from-hero-from/85 via-hero-from/90 to-hero-to/95" />
      </div>

      {/* ── 3D Ambient Glowing Depth Orbs ── */}
      <div
        className="pointer-events-none absolute -left-20 -top-20 size-80 rounded-full bg-emerald-400/20 blur-[90px] animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/3 size-80 rounded-full bg-amber-400/15 blur-[90px] animate-pulse-glow"
        style={{ animationDelay: "2.5s" }}
        aria-hidden="true"
      />

      {/* ── Decorative pattern overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="flex flex-col items-center text-center">
          {/* Logo with 3D Float */}
          <div className="mb-6 animate-float-slow sm:mb-8">
            <Image
              src="/logo.png"
              alt="DPS Pali District crest"
              width={100}
              height={110}
              className="h-24 w-auto drop-shadow-2xl sm:h-28 lg:h-32"
              style={{ width: "auto" }}
              priority
            />
          </div>

          {/* Location badge & Photo indicator */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm shadow-xs">
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
              <span className="text-xs font-medium tracking-wide text-white/90 sm:text-sm">
                Sanpa, Pali, Rajasthan 306401
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-xs font-medium text-emerald-200/90 backdrop-blur-sm">
              <Camera className="size-3.5 text-amber-400" aria-hidden="true" />
              <span>Campus Tour / Video Slot</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
            Delhi Public School
            <span className="mt-1 block text-emerald-100 sm:mt-2">
              Pali District
            </span>
          </h1>

          {/* Tagline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-emerald-100/95 sm:text-xl">
            Nurturing future leaders through holistic education, modern campus
            facilities, and unwavering commitment to academic excellence under
            the CBSE curriculum.
          </p>

          {/* CTA Buttons with 3D Tap Feedback */}
          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:gap-4">
            <a
              href="#admissions"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-amber-950/20 transition-all duration-200 hover:bg-accent-hover hover:shadow-xl active:scale-95 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-primary motion-reduce:transition-none"
            >
              <svg
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
              Apply for Admission
            </a>
            <a
              href="#facilities"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm shadow-md transition-all duration-200 hover:border-white/50 hover:bg-white/20 active:scale-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary motion-reduce:transition-none"
            >
              <svg
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21"
                />
              </svg>
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

      {/* ── Bottom wave / curve ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L60 52C120 44 240 28 360 22C480 16 600 20 720 26C840 32 960 40 1080 42C1200 44 1320 40 1380 38L1440 36V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
