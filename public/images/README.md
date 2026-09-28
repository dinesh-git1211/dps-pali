# DPS Pali District — Image Asset Directory

Place real high-resolution photographs into this folder using the designated filenames below. The website components are wired with automatic fallbacks and will immediately render the real images as soon as they are added.

---

## 📸 Image Slots & Recommended Specifications

### 1. Hero Campus Background
- **Path:** `/public/images/hero-campus.jpg`
- **Recommended Size:** `1920 × 1080 px` (16:9 landscape)
- **Subject:** Main front facade of the school building, entrance gate, or wide campus view taken in morning light.
- **Used In:** `components/Hero.tsx`

### 2. Principal Portrait
- **Path:** `/public/images/principal.jpg`
- **Recommended Size:** `400 × 400 px` (1:1 square)
- **Subject:** Formal headshot/portrait of the Principal on a neutral or institutional background.
- **Used In:** `components/AboutVision.tsx`

### 3. School Life Feature Strip
- **Path:** `/public/images/school-life/classroom.jpg` (`800 × 600 px` - 4:3) — Students engaged in AC classroom.
- **Path:** `/public/images/school-life/lab.jpg` (`800 × 600 px` - 4:3) — Science or computer practical session.
- **Path:** `/public/images/school-life/sports.jpg` (`800 × 600 px` - 4:3) — Sports ground or outdoor activity.
- **Used In:** `components/AboutVision.tsx`

### 4. Campus Facilities
- `/public/images/facilities/classroom.jpg` (`800 × 533 px` - 3:2) — AC Classrooms
- `/public/images/facilities/lab.jpg` (`800 × 533 px` - 3:2) — Science & Computer Lab
- `/public/images/facilities/library.jpg` (`800 × 533 px` - 3:2) — Library & Media Centre
- `/public/images/facilities/sports.jpg` (`800 × 533 px` - 3:2) — Sports Complex & Playground
- `/public/images/facilities/transport.jpg` (`800 × 533 px` - 3:2) — School Buses & Transport
- `/public/images/facilities/arts.jpg` (`800 × 533 px` - 3:2) — Activity, Music & Arts Hall
- `/public/images/facilities/cafeteria.jpg` (`800 × 533 px` - 3:2) — Dining & Cafeteria
- `/public/images/facilities/security.jpg` (`800 × 533 px` - 3:2) — Safety & Security Systems
- **Used In:** `components/CampusFacilities.tsx`

### 5. Campus Life Gallery
- `/public/images/gallery/annual-day.jpg` (`800 × 600 px`) — Annual Day Celebrations & Stage
- `/public/images/gallery/sports-day.jpg` (`800 × 600 px`) — Athletic Meet & Sports Day
- `/public/images/gallery/science-exhibition.jpg` (`800 × 600 px`) — Science Fair & Student Projects
- `/public/images/gallery/republic-day.jpg` (`800 × 600 px`) — National Festivals & Flag Hoisting
- `/public/images/gallery/computer-lab.jpg` (`800 × 600 px`) — Digital Learning & IT Lab
- `/public/images/gallery/campus-view.jpg` (`800 × 600 px`) — Wide Green Campus & Gardens
- **Used In:** `components/Gallery.tsx`

### 6. Admissions Welcome Banner
- **Path:** `/public/images/admissions-welcome.jpg`
- **Recommended Size:** `800 × 500 px` (16:10)
- **Subject:** Welcoming front desk, student interaction, or campus tour.
- **Used In:** `components/Admissions.tsx`

---

*Note: All images are automatically optimized, converted to modern formats (WebP/AVIF), and served responsively by Next.js App Router.*
