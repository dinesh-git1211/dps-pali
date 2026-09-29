import Image from "next/image";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import TiltCard from "@/components/TiltCard";
import {
  BookOpen,
  Target,
  Heart,
  Quote,
  Award,
  Sparkles,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────────
   Core values displayed as icon cards
   ──────────────────────────────────────────────────────────────── */
const PILLARS = [
  {
    icon: Target,
    title: "Our Vision",
    description:
      "To be a centre of excellence that nurtures globally competent individuals rooted in Indian values, capable of leading with integrity and compassion.",
  },
  {
    icon: BookOpen,
    title: "Our Mission",
    description:
      "To provide holistic, child-centric education that develops critical thinking, creativity, and character — empowering every student to reach their fullest potential.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, discipline, respect, inclusivity, and a relentless pursuit of excellence form the bedrock of the DPS Pali community.",
  },
] as const;

export default function AboutVision() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden overflow-x-hidden bg-white py-20 sm:py-24"
      aria-labelledby="about-heading"
    >
      {/* ── Ambient Depth Orbs ── */}
      <div
        className="pointer-events-none absolute -left-24 top-1/4 size-72 rounded-full bg-emerald-500/10 blur-[80px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-1/4 size-72 rounded-full bg-amber-400/10 blur-[80px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-decorative">
            About Our School
          </p>
          <h2
            id="about-heading"
            className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Shaping Minds, Building Character
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Delhi Public School Pali District stands as a beacon of quality
            education in western Rajasthan, committed to the holistic
            development of every child under the motto —
          </p>
          <p className="mt-3 font-heading text-xl font-semibold italic text-primary">
            &ldquo;Service Before Self&rdquo;
          </p>
        </div>

        {/* ── Vision / Mission / Values Cards with 3D Tilt ── */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, description }) => (
            <TiltCard key={title} scale={1.03} maxTilt={6}>
              <div className="group h-full rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:border-emerald-200 sm:p-8">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary-light text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* ── Principal's Message ── */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-border bg-section-alt shadow-sm lg:flex">
          {/* Left — decorative panel with Principal portrait frame */}
          <div className="flex flex-col items-center justify-center bg-primary px-8 py-10 text-center lg:w-80 lg:shrink-0">
            <div className="group relative size-28 overflow-hidden rounded-full border-4 border-white/30 bg-emerald-950/50 shadow-md">
              <Image
                src="/images/principal.svg"
                alt="Principal Portrait — DPS Pali District"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-2 text-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <span className="text-[10px] font-bold text-amber-300">Photo Slot</span>
                <span className="text-[9px] text-white">400×400 px</span>
              </div>
            </div>
            <p className="mt-4 font-heading text-lg font-semibold text-white">
              From the Principal&apos;s Desk
            </p>
            <div className="mt-2 flex items-center gap-1.5 text-emerald-200">
              <Award className="size-4" aria-hidden="true" />
              <span className="text-sm font-medium">DPS Pali District</span>
            </div>
          </div>

          {/* Right — message content */}
          <div className="relative flex flex-col justify-center px-8 py-10 lg:px-12">
            <Quote
              className="absolute right-6 top-6 size-10 text-primary/10"
              aria-hidden="true"
            />
            <blockquote className="relative text-base leading-relaxed text-slate-700 sm:text-lg">
              <p>
                At DPS Pali District, we believe that true education extends far
                beyond textbooks. Our mission is to cultivate curiosity, build
                resilience, and foster a deep sense of responsibility in every
                student.
              </p>
              <p className="mt-4">
                Guided by the DPS philosophy of &ldquo;Service Before
                Self,&rdquo; our dedicated faculty and modern infrastructure
                create an environment where young minds are empowered to dream
                big and achieve bigger. We invite you to be a part of this
                transformative journey.
              </p>
            </blockquote>
            <div className="mt-6 border-t border-border pt-4">
              <p className="font-heading text-sm font-semibold text-foreground">
                The Principal
              </p>
              <p className="text-sm text-muted">
                Delhi Public School, Pali District
              </p>
            </div>
          </div>
        </div>

        {/* ── Life at DPS Pali — 3-Photo Feature Strip ── */}
        <div className="mt-16">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-decorative">
                Campus Highlights
              </p>
              <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                Life &amp; Learning at DPS Pali
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted">
              <Sparkles className="size-4 text-accent-decorative" aria-hidden="true" />
              <span>Sanpa Campus, Rajasthan</span>
            </div>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <TiltCard scale={1.03} maxTilt={6}>
              <PhotoPlaceholder
                src="/images/school-life/classroom.svg"
                alt="Classroom experience in AC classrooms"
                label="Classroom Experience"
                badge="AC Classrooms"
                recommendedSize="800 × 600 px"
                aspectRatio="aspect-[4/3]"
              />
            </TiltCard>
            <TiltCard scale={1.03} maxTilt={6}>
              <PhotoPlaceholder
                src="/images/school-life/lab.svg"
                alt="Science and computer lab sessions"
                label="Labs & Discovery"
                badge="Science & IT Labs"
                recommendedSize="800 × 600 px"
                aspectRatio="aspect-[4/3]"
              />
            </TiltCard>
            <TiltCard scale={1.03} maxTilt={6}>
              <PhotoPlaceholder
                src="/images/school-life/sports.svg"
                alt="Sports and physical activities"
                label="Sports & Athletics"
                badge="Sports Ground"
                recommendedSize="800 × 600 px"
                aspectRatio="aspect-[4/3]"
              />
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
