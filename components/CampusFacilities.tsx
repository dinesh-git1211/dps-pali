import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import TiltCard from "@/components/TiltCard";
import {
  Snowflake,
  Microscope,
  BookOpen,
  Trophy,
  Bus,
  Utensils,
  Music,
  ShieldCheck,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────────
   Campus facility data with photo skeleton slots
   ──────────────────────────────────────────────────────────────── */
const FACILITIES = [
  {
    icon: Snowflake,
    title: "AC Classrooms",
    description:
      "Air-conditioned classrooms equipped with modern teaching aids, ensuring a comfortable and focused learning environment throughout the year.",
    badge: "Comfort",
    imageSrc: "/images/facilities/classroom.svg",
    imageSize: "800 × 533 px",
  },
  {
    icon: Microscope,
    title: "Science & Computer Lab",
    description:
      "Well-equipped science laboratories and a modern computer lab with dedicated workstations that foster hands-on experimentation and digital literacy.",
    badge: "Learning",
    imageSrc: "/images/facilities/lab.svg",
    imageSize: "800 × 533 px",
  },
  {
    icon: BookOpen,
    title: "Library & Media Centre",
    description:
      "A curated collection of 5,000+ books, journals, and digital resources with dedicated reading corners and a quiet study zone.",
    badge: "Knowledge",
    imageSrc: "/images/facilities/library.svg",
    imageSize: "800 × 533 px",
  },
  {
    icon: Trophy,
    title: "Sports Complex",
    description:
      "Multi-sport grounds for cricket, football, basketball, and athletics with professional coaching and inter-school competition preparation.",
    badge: "Sports",
    imageSrc: "/images/facilities/sports.svg",
    imageSize: "800 × 533 px",
  },
  {
    icon: Bus,
    title: "GPS-Enabled Transport",
    description:
      "A fleet of school buses covering major routes across Pali district, equipped with GPS tracking and trained attendants for safe commutes.",
    badge: "Safety",
    imageSrc: "/images/facilities/transport.svg",
    imageSize: "800 × 533 px",
  },
  {
    icon: Music,
    title: "Activity & Arts Hall",
    description:
      "Dedicated spaces for music, dance, drama, and visual arts — nurturing creativity and self-expression alongside academics.",
    badge: "Arts",
    imageSrc: "/images/facilities/arts.svg",
    imageSize: "800 × 533 px",
  },
  {
    icon: Utensils,
    title: "Hygienic Cafeteria",
    description:
      "A clean, supervised dining space serving nutritious meals and snacks, maintained to the highest hygiene standards.",
    badge: "Wellness",
    imageSrc: "/images/facilities/cafeteria.svg",
    imageSize: "800 × 533 px",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Security",
    description:
      "CCTV surveillance, secure campus perimeter, fire safety systems, and trained staff ensuring a safe learning environment at all times.",
    badge: "Security",
    imageSrc: "/images/facilities/security.svg",
    imageSize: "800 × 533 px",
  },
] as const;

export default function CampusFacilities() {
  return (
    <section
      id="facilities"
      className="relative scroll-mt-24 overflow-hidden overflow-x-hidden bg-white py-20 sm:py-24"
      aria-labelledby="facilities-heading"
    >
      {/* ── Ambient Depth Orbs ── */}
      <div
        className="pointer-events-none absolute -right-24 top-1/3 size-80 rounded-full bg-emerald-500/10 blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-1/3 size-80 rounded-full bg-amber-400/10 blur-[90px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-decorative">
            Our Campus
          </p>
          <h2
            id="facilities-heading"
            className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            World-Class Facilities
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            A modern campus designed to support every dimension of a student&apos;s
            growth — academic, creative, athletic, and personal.
          </p>
        </div>

        {/* ── Facility Cards Grid with 3D TiltCards ── */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FACILITIES.map(
            ({ icon: Icon, title, description, badge, imageSrc, imageSize }) => (
              <TiltCard key={title} scale={1.03} maxTilt={6}>
                <article
                  className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:border-emerald-200"
                >
                  {/* Photo Skeleton Header */}
                  <div className="relative">
                    <PhotoPlaceholder
                      src={imageSrc}
                      alt={title}
                      label={title}
                      badge={badge}
                      recommendedSize={imageSize}
                      aspectRatio="aspect-[16/10]"
                      className="rounded-b-none border-0 border-b border-border"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                        <Icon className="size-4" aria-hidden="true" />
                      </div>
                      <h3 className="font-heading text-base font-semibold text-foreground">
                        {title}
                      </h3>
                    </div>

                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                      {description}
                    </p>
                  </div>
                </article>
              </TiltCard>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
