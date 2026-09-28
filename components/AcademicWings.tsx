import {
  Palette,
  BookOpenCheck,
  FlaskConical,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────────
   Academic wing data — update freely as programs evolve
   ──────────────────────────────────────────────────────────────── */
const WINGS = [
  {
    icon: Palette,
    title: "Pre-Primary Wing",
    grades: "Nursery – KG",
    color: "bg-amber-50 text-amber-800 border-amber-200",
    accentBar: "bg-accent-decorative",
    description:
      "A joyful, play-based learning environment where little learners explore language, numbers, art, and social skills through structured activities and creative play.",
    highlights: [
      "Activity-based curriculum",
      "Dedicated play zones & sand pit",
      "Story-telling & phonics foundation",
      "Art, craft & music sessions",
    ],
  },
  {
    icon: BookOpenCheck,
    title: "Primary Wing",
    grades: "Classes I – V",
    color: "bg-emerald-50 text-emerald-800 border-emerald-200",
    accentBar: "bg-primary",
    description:
      "A strong academic foundation with CBSE-aligned curriculum, smart classrooms, and experiential learning that builds curiosity and confidence.",
    highlights: [
      "CBSE-aligned academics",
      "Smart classroom instruction",
      "Value education & life skills",
      "Regular assessments & parent connect",
    ],
  },
  {
    icon: FlaskConical,
    title: "Middle School",
    grades: "Classes VI – VIII",
    color: "bg-blue-50 text-blue-800 border-blue-200",
    accentBar: "bg-blue-600",
    description:
      "An inquiry-driven stage that deepens subject mastery through well-equipped science and computer labs, project-based learning, and competitive exam preparation.",
    highlights: [
      "Inquiry-based learning approach",
      "Science & computer lab practicals",
      "Olympiad & competitive prep",
      "Sports & co-curricular activities",
    ],
  },
  {
    icon: GraduationCap,
    title: "Senior Secondary",
    grades: "Classes IX – XII",
    color: "bg-purple-50 text-purple-800 border-purple-200",
    accentBar: "bg-purple-600",
    description:
      "Board examination preparation with specialized Science, Commerce, and Humanities streams, career counselling, and a results-driven approach that shapes future-ready graduates.",
    highlights: [
      "Science, Commerce & Humanities streams",
      "CBSE Board exam preparation",
      "Career counselling & guidance",
      "Practical lab sessions & projects",
    ],
  },
] as const;

export default function AcademicWings() {
  return (
    <section
      id="academics"
      className="scroll-mt-24 bg-section-alt py-20 sm:py-24"
      aria-labelledby="academics-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-decorative">
            Academics
          </p>
          <h2
            id="academics-heading"
            className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Academic Wings &amp; Curriculum
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            From nurturing curiosity in our youngest learners to preparing
            senior students for board examinations and beyond — every wing is
            designed with purpose and care.
          </p>
        </div>

        {/* ── Wing Cards Grid ── */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {WINGS.map(
            ({
              icon: Icon,
              title,
              grades,
              color,
              accentBar,
              description,
              highlights,
            }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                {/* Top color accent bar */}
                <div className={`h-1.5 ${accentBar}`} aria-hidden="true" />

                <div className="p-6 sm:p-8">
                  {/* Icon + title row */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`inline-flex size-12 shrink-0 items-center justify-center rounded-lg border ${color}`}
                    >
                      <Icon className="size-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        {title}
                      </h3>
                      <span className="mt-0.5 inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                        {grades}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {description}
                  </p>

                  {/* Highlights list */}
                  <ul className="mt-5 space-y-2.5" role="list">
                    {highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ),
          )}
        </div>

        {/* ── Curriculum highlights banner ── */}
        <div className="mt-12 rounded-xl border border-primary/20 bg-primary-light px-6 py-6 sm:flex sm:items-center sm:justify-between sm:px-8">
          <div>
            <h3 className="font-heading text-lg font-semibold text-primary">
              CBSE Affiliated Curriculum
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Our curriculum integrates NCERT guidelines with experiential
              learning, STEM labs, and 21st-century skill development.
            </p>
          </div>
          <a
            href="#admissions"
            className="mt-4 inline-flex shrink-0 items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:mt-0"
          >
            Begin Admission Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}
