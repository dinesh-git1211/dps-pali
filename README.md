# Delhi Public School, Pali District

> **Motto:** *"Service Before Self"*  
> **Location:** Opposite Punagar Mataji Temple, NH-162, Jaipur–Ajmer Road, Sanpa, Pali District, Rajasthan – 306401  
> **Contact:** +91 91161 26001 | delhipublicschoolpali@gmail.com  
> **Affiliation:** Central Board of Secondary Education (CBSE), New Delhi  

A modern, accessible, and high-converting official website for **Delhi Public School Pali District**, built with **Next.js 16 App Router**, **React 19**, and **Tailwind CSS v4**.

---

## 🌟 Key Features

- **Modern Institutional Design:** Deep DPS emerald green (`#0A5C36`), accessible warm gold/amber (`#92400E`), and crisp slate typography following WCAG 2.1 AA contrast standards.
- **Sticky Smooth-Scroll Navigation:** Fixed navbar with scroll-aware glass shadow, responsive mobile slide-out menu, and offset scroll anchors (`scroll-mt-24`).
- **High-Impact Hero:** Emerald gradient backdrop layered with campus photo skeleton, official DPS crest, location badge, dual call-to-actions, and live key statistics.
- **About & Vision:** School motto, 3-pillar philosophy cards (Vision, Mission, Values), Principal's message card with portrait frame, and a 3-photo campus life feature strip.
- **Academic Wings:** Pre-Primary, Primary, Middle, and Senior Secondary (Science, Commerce, and Humanities streams) with curriculum highlights and CBSE notice.
- **World-Class Campus Facilities:** 8 photo skeleton cards for AC Classrooms, Science & Computer Labs, Library & Media Centre, Sports Complex, GPS Transport, Arts Hall, Cafeteria, and Safety.
- **Campus Life Gallery:** Interactive photo gallery featuring category filters (*All, Campus, Academics, Events & Sports*) and a lightbox preview modal.
- **Admissions 2026–27:** 3-step admission process guide, required documents checklist, and an interactive 6-field inquiry form with client-side validation, error summary, and confirmation modal.
- **Comprehensive Footer:** CBSE affiliation notice, direct Google Maps directions link, office hours, and contact details.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org) with Turbopack
- **Library:** [React 19](https://react.dev)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) (CSS tokens via `@theme inline`)
- **Typography:** [Poppins & Open Sans](https://fonts.google.com) via `next/font/google`
- **Icons:** [Lucide React](https://lucide.dev)
- **Language:** TypeScript

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org) (v18.17+ or v20+) and `npm` installed.

### Installation

```bash
# Clone the repository
git clone https://github.com/dinesh-git1211/DPS.git
cd DPS

# Install dependencies
npm install

# Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the site.

### Production Build

```bash
# Generate optimized production build
npm run build

# Start production server
npm run start

# Run lint checks
npm run lint
```

---

## 📸 Image Assets & Photo Slots

The site features built-in photo placeholder skeletons ready to receive real campus photographs without any code modifications:

| Slot | Path | Ideal Resolution | Description |
|---|---|---|---|
| **Hero Campus** | `public/images/hero-campus.jpg` | `1920 × 1080 px` | Main school building facade & entrance |
| **Principal** | `public/images/principal.jpg` | `400 × 400 px` | Formal portrait of the Principal |
| **Facilities** | `public/images/facilities/*.jpg` | `800 × 533 px` | Classrooms, Labs, Library, Sports grounds |
| **School Life** | `public/images/school-life/*.jpg` | `800 × 600 px` | Students in action, classroom, sports |
| **Gallery** | `public/images/gallery/*.jpg` | `800 × 600 px` | Annual Day, Athletic Meet, Science Fair |
| **Admissions** | `public/images/admissions-welcome.jpg` | `800 × 500 px` | Campus tour & admissions desk |

Detailed image instructions are documented in [`public/images/README.md`](public/images/README.md).

---

## 📄 License

© Delhi Public School Pali District. All rights reserved.
