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
      top: "top-16 sm:top-20 lg:top-24",
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
      top: "top-18 sm:top-24 lg:top-28",
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
      top: "top-20 sm:top-28 lg:top-32",
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
      top: "top-22 sm:top-32 lg:top-36",
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
              className={`sticky ${wing.theme.top} ${wing.theme.zIndex} mb-8 sm:mb-12 lg:mb-16 w-full`}
            >
              <div
                className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border ${wing.theme.border} ${wing.theme.bg} shadow-2xl shadow-slate-900/10 transition-transform duration-500 ease-out`}
              >
                {/* Background Watermark Numeral */}
                <div className="pointer-events-none absolute -right-2 -top-6 sm:-right-4 sm:-top-10 lg:-right-8 lg:-top-16 opacity-[0.03]">
                  <span className="font-heading text-7xl sm:text-9xl lg:text-[18rem] font-black tracking-tighter">
                    {wing.index}
                  </span>
                </div>

                <div className="relative p-5 sm:p-8 lg:p-14 flex flex-col lg:flex-row gap-5 sm:gap-8 lg:gap-14">
                  {/* Left Column: Title & Intro */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-5 lg:mb-6">
                      <div className={`flex size-11 sm:size-14 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl ${wing.theme.iconBg}`}>
                        <wing.icon className={`size-5.5 sm:size-7 ${wing.theme.accent}`} aria-hidden="true" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase text-muted">
                          {wing.index} / 04
                        </span>
                        <h3 className="mt-0.5 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                          {wing.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs sm:text-sm font-semibold tracking-wide text-slate-700 shadow-xs">
                      {wing.grades}
                    </div>

                    <p className="mt-3 sm:mt-5 lg:mt-8 text-xs sm:text-sm lg:text-base leading-relaxed text-slate-600">
                      {wing.description}
                    </p>
                  </div>

                  {/* Right Column: Highlights */}
                  <div className="flex-1 lg:pl-8 lg:border-l lg:border-slate-200/60 flex flex-col justify-between">
                    <div>
                      <h4 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-foreground mb-2.5 sm:mb-4 lg:mb-6">
                        Curriculum Highlights
                      </h4>
                      <ul className="space-y-2 sm:space-y-2.5 lg:space-y-4">
                        {wing.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2.5 sm:gap-3">
                            <CheckCircle2 className={`mt-0.5 size-4 sm:size-4.5 lg:size-5 shrink-0 ${wing.theme.accent}`} aria-hidden="true" />
                            <span className="text-xs sm:text-sm lg:text-base font-medium text-slate-700 leading-snug">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-4 sm:mt-6 lg:mt-8 pt-2">
                      <a
                        href="#admissions"
                        className={`inline-flex items-center gap-2 rounded-full px-5 py-2 sm:px-6 sm:py-2.5 lg:py-3 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all active:scale-95 border-2 ${wing.theme.border} text-foreground hover:bg-white`}
                      >
                        Inquire Now
                        <svg className="size-3.5 sm:size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
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
