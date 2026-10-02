import {
  Palette,
  BookOpenCheck,
  FlaskConical,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

const WINGS = [
  {
    index: "01",
    icon: Palette,
    title: "Pre-Primary Wing",
    grades: "Nursery – KG",
    theme: {
      bg: "bg-[#FDFBF7]",
      accent: "text-amber-700",
      border: "border-amber-200/60",
      iconBg: "bg-amber-100",
      zIndex: "z-10",
      top: "top-24 sm:top-28",
    },
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
    index: "02",
    icon: BookOpenCheck,
    title: "Primary Wing",
    grades: "Classes I – V",
    theme: {
      bg: "bg-[#F4FBF7]",
      accent: "text-emerald-700",
      border: "border-emerald-200/60",
      iconBg: "bg-emerald-100",
      zIndex: "z-20",
      top: "top-28 sm:top-32",
    },
    description:
      "A strong academic foundation with CBSE-aligned curriculum, smart classrooms, and experiential learning that builds curiosity and confidence.",
    highlights: [
      "CBSE-aligned academics",
      "Smart AC classrooms",
      "Value education & life skills",
      "Regular assessments & parent connect",
    ],
  },
  {
    index: "03",
    icon: FlaskConical,
    title: "Middle School",
    grades: "Classes VI – VIII",
    theme: {
      bg: "bg-[#F8FAFC]",
      accent: "text-slate-700",
      border: "border-slate-200/80",
      iconBg: "bg-slate-200",
      zIndex: "z-30",
      top: "top-32 sm:top-36",
    },
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
    index: "04",
    icon: GraduationCap,
    title: "Senior Secondary",
    grades: "Classes IX – XII",
    theme: {
      bg: "bg-[#FEF9EE]",
      accent: "text-[#92400E]",
      border: "border-amber-300/50",
      iconBg: "bg-amber-200",
      zIndex: "z-40",
      top: "top-36 sm:top-40",
    },
    description:
      "Board examination preparation with specialized Science, Commerce, and Humanities streams, career counselling, and a results-driven approach that shapes future-ready graduates.",
    highlights: [
      "Science, Commerce & Humanities streams",
      "CBSE Board exam preparation",
      "Career counselling & guidance",
      "Advanced lab sessions & projects",
    ],
  },
] as const;

export default function AcademicWings() {
  return (
    <section
      id="academics"
      className="relative scroll-mt-24 bg-editorial-cream pb-32 pt-20 sm:pb-40 sm:pt-28"
      aria-labelledby="academics-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-24">
          <p className="font-mono text-sm font-bold uppercase tracking-widest text-accent-decorative">
            Academic Horizon
          </p>
          <h2
            id="academics-heading"
            className="mt-4 font-heading text-4xl font-black uppercase tracking-tighter text-foreground sm:text-5xl lg:text-6xl"
          >
            A Journey of <span className="text-primary italic font-serif tracking-tight">Excellence</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            From playful discovery to pre-university mastery, explore our comprehensive CBSE curriculum tailored for every stage of development.
          </p>
        </div>

        {/* ── Sticky Stacking Cards Container ── */}
        <div className="relative mx-auto max-w-5xl pb-10">
          {WINGS.map((wing) => (
            <article
              key={wing.title}
              className={`sticky ${wing.theme.top} ${wing.theme.zIndex} mb-8 sm:mb-12 w-full`}
            >
              <div
                className={`relative overflow-hidden rounded-3xl border ${wing.theme.border} ${wing.theme.bg} shadow-2xl shadow-slate-900/10 transition-transform duration-500 ease-out`}
              >
                {/* Background Watermark Numeral */}
                <div className="pointer-events-none absolute -right-4 -top-12 opacity-[0.03] sm:-right-8 sm:-top-16">
                  <span className="font-heading text-[12rem] font-black sm:text-[18rem] tracking-tighter">
                    {wing.index}
                  </span>
                </div>

                <div className="relative p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row gap-10 lg:gap-16">
                  {/* Left Column: Title & Intro */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${wing.theme.iconBg}`}>
                        <wing.icon className={`size-7 ${wing.theme.accent}`} aria-hidden="true" />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-bold tracking-widest uppercase text-muted">
                          {wing.index} / 04
                        </span>
                        <h3 className="mt-1 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                          {wing.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/50 px-4 py-1.5 text-sm font-semibold tracking-wide text-slate-700 shadow-sm">
                      {wing.grades}
                    </div>

                    <p className="mt-8 text-lg leading-relaxed text-slate-600 sm:text-xl">
                      {wing.description}
                    </p>
                  </div>

                  {/* Right Column: Highlights */}
                  <div className="flex-1 lg:pl-10 lg:border-l lg:border-slate-200/60">
                    <h4 className="font-mono text-sm font-bold uppercase tracking-widest text-foreground mb-6">
                      Curriculum Highlights
                    </h4>
                    <ul className="space-y-4">
                      {wing.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <CheckCircle2 className={`mt-0.5 size-5 shrink-0 ${wing.theme.accent}`} aria-hidden="true" />
                          <span className="text-base font-medium text-slate-700">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-10">
                      <a
                        href="#admissions"
                        className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all active:scale-95 border-2 ${wing.theme.border} text-foreground hover:bg-white`}
                      >
                        Inquire Now
                        <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
