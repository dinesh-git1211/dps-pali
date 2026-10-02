import { ClipboardList, Users, BadgeCheck } from "lucide-react";
import AdmissionsForm from "@/components/AdmissionsForm";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import TiltCard from "@/components/TiltCard";

/* ────────────────────────────────────────────────────────────────
   3-step admission process
   ──────────────────────────────────────────────────────────────── */
const STEPS = [
  {
    step: 1,
    icon: ClipboardList,
    title: "Inquiry",
    description:
      "Fill the admission inquiry form below with your child's details. Our team will reach out within 48 hours.",
  },
  {
    step: 2,
    icon: Users,
    title: "Interaction",
    description:
      "Visit the campus for an orientation session, meet the faculty, and attend an interaction with the student.",
  },
  {
    step: 3,
    icon: BadgeCheck,
    title: "Enrollment",
    description:
      "Complete the admission formalities, submit required documents, and welcome your child to the DPS family.",
  },
] as const;

export default function Admissions() {
  return (
    <section
      id="admissions"
      className="relative scroll-mt-24 overflow-hidden overflow-x-hidden bg-editorial-cream py-20 sm:py-24"
      aria-labelledby="admissions-heading"
    >
      {/* ── Ambient Depth Orbs ── */}
      <div
        className="pointer-events-none absolute -left-20 top-1/3 size-72 rounded-full bg-emerald-500/10 blur-[80px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-1/3 size-72 rounded-full bg-amber-400/10 blur-[80px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-decorative">
            Join Us
          </p>
          <h2
            id="admissions-heading"
            className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Admissions 2026–27
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Applications are now open. Begin your child&apos;s journey towards
            excellence in three simple steps.
          </p>
        </div>

        {/* ── 3-Step Process with 3D TiltCards ── */}
        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
          {STEPS.map(({ step, icon: Icon, title, description }) => (
            <TiltCard key={step} scale={1.03} maxTilt={6}>
              <div className="relative h-full rounded-xl border border-border bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:border-emerald-200">
                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full border-2 border-primary bg-primary-light transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-7 text-primary" aria-hidden="true" />
                </div>
                <span className="inline-block rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-white">
                  Step {step}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* ── Form + Info Row ── */}
        <div className="mx-auto mt-16 max-w-5xl gap-10 lg:flex">
          {/* Left — Form */}
          <div className="flex-1">
            <AdmissionsForm />
          </div>

          {/* Right — Documents & Info */}
          <aside className="mt-10 shrink-0 lg:mt-0 lg:w-72">
            {/* Campus Tour & Visit Photo Frame with 3D Tilt */}
            <TiltCard scale={1.03} maxTilt={5}>
              <div className="mb-5 overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/5 hover:border-emerald-200">
                <PhotoPlaceholder
                  src="/images/admissions-welcome.svg"
                  alt="Admissions Counseling & Campus Tour"
                  label="Admissions Counseling"
                  badge="Campus Visit"
                  recommendedSize="800 × 500 px"
                  aspectRatio="aspect-[16/10]"
                />
                <div className="p-4">
                  <p className="font-heading text-sm font-semibold text-foreground">
                    Schedule a Campus Tour
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    Experience our AC classrooms and laboratories in person at Sanpa, Pali.
                  </p>
                </div>
              </div>
            </TiltCard>

            <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
              <h3 className="font-heading text-base font-semibold text-foreground">
                Documents Required
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted" role="list">
                {[
                  "Birth Certificate",
                  "Previous Report Card",
                  "Transfer Certificate (if applicable)",
                  "Aadhaar Card (Student & Parent)",
                  "4 Passport-size Photographs",
                  "Address Proof",
                ].map((doc) => (
                  <li key={doc} className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 rounded-xl border border-border bg-white p-6 shadow-sm">
              <h3 className="font-heading text-base font-semibold text-foreground">
                Need Help?
              </h3>
              <p className="mt-2 text-sm text-muted">
                Call our admissions office for any queries:
              </p>
              <a
                href="tel:+919116126001"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                +91 91161 26001
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
