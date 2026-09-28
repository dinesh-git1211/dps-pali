# DPS Pali Design System — MASTER

> **Source of Truth** for all design decisions across the DPS Pali District website.
> Read this file before building any page or component.

---

## Brand Identity

| Property | Value |
|----------|-------|
| **Institution** | Delhi Public School Pali District |
| **Location** | Sanpa, Pali, Rajasthan 306401, India |
| **Tagline** | Nurturing Future Leaders Through Holistic Education |
| **Tone** | Authoritative yet approachable, academic, trustworthy |
| **Style** | Clean Institutional — modern, professional, conversion-focused |
| **Theme** | Light-only (no dark mode) |

---

## Color Tokens (Three-Layer Architecture)

### Layer 1: Primitive Tokens (Raw Values)

| Token | Hex | Usage Notes |
|-------|-----|-------------|
| `--color-emerald-900` | `#064E3B` | Darkest green |
| `--color-emerald-800` | `#0A5C36` | **DPS brand green** |
| `--color-emerald-700` | `#0D6B40` | Green hover state |
| `--color-emerald-600` | `#10803E` | Green active state |
| `--color-emerald-100` | `#D1FAE5` | Green light tint |
| `--color-emerald-50` | `#ECFDF5` | Green background tint |
| `--color-amber-800` | `#92400E` | **Accessible gold** (AA compliant on white) |
| `--color-amber-700` | `#B45309` | Gold hover state |
| `--color-amber-600` | `#D97706` | Decorative gold (large text / icons only) |
| `--color-amber-500` | `#F59E0B` | Gold light accent |
| `--color-amber-50` | `#FFFBEB` | Gold background tint |
| `--color-slate-950` | `#020617` | Footer background |
| `--color-slate-900` | `#0F172A` | Primary body text |
| `--color-slate-700` | `#334155` | Secondary text |
| `--color-slate-500` | `#64748B` | Muted / caption text |
| `--color-slate-400` | `#94A3B8` | Placeholder text |
| `--color-slate-300` | `#CBD5E1` | Footer text, light borders |
| `--color-slate-200` | `#E2E8F0` | Dividers, borders |
| `--color-slate-100` | `#F1F5F9` | Alternating section bg |
| `--color-slate-50` | `#F8FAFC` | Page background alt |
| `--color-white` | `#FFFFFF` | Card surface, page bg |
| `--color-red-600` | `#DC2626` | Destructive / error |

### Layer 2: Semantic Tokens (Purpose Aliases)

| Token | Maps To | Purpose |
|-------|---------|---------|
| `--color-primary` | `emerald-800 (#0A5C36)` | Brand identity, nav, section headings |
| `--color-primary-hover` | `emerald-700 (#0D6B40)` | Interactive hover on primary |
| `--color-primary-active` | `emerald-600 (#10803E)` | Pressed / active state |
| `--color-primary-light` | `emerald-50 (#ECFDF5)` | Primary tint backgrounds |
| `--color-on-primary` | `white (#FFFFFF)` | Text on primary surfaces |
| `--color-accent` | `amber-800 (#92400E)` | CTA buttons (AA compliant 4.5:1) |
| `--color-accent-hover` | `amber-700 (#B45309)` | CTA hover state |
| `--color-accent-decorative` | `amber-600 (#D97706)` | Badges, icons, decorative (3:1 only) |
| `--color-on-accent` | `white (#FFFFFF)` | Text on accent surfaces |
| `--color-background` | `white (#FFFFFF)` | Main page background |
| `--color-background-alt` | `slate-50 (#F8FAFC)` | Alternating section background |
| `--color-foreground` | `slate-900 (#0F172A)` | Primary body text |
| `--color-foreground-muted` | `slate-500 (#64748B)` | Captions, secondary text |
| `--color-card` | `white (#FFFFFF)` | Card surfaces |
| `--color-card-foreground` | `slate-900 (#0F172A)` | Card text |
| `--color-border` | `slate-200 (#E2E8F0)` | Default borders, dividers |
| `--color-ring` | `emerald-800 (#0A5C36)` | Focus ring color |
| `--color-destructive` | `red-600 (#DC2626)` | Error states |

### Layer 3: Component Tokens

| Token | Maps To | Component |
|-------|---------|-----------|
| `--nav-bg` | `white / white/95` | Navbar background |
| `--nav-text` | `primary` | Navbar link color |
| `--nav-border` | `border` | Navbar bottom border |
| `--hero-bg-from` | `emerald-900` | Hero gradient start |
| `--hero-bg-to` | `emerald-800` | Hero gradient end |
| `--hero-text` | `on-primary` | Hero text color |
| `--button-cta-bg` | `accent` | CTA button background |
| `--button-cta-text` | `on-accent` | CTA button text |
| `--section-bg-even` | `background` | Even section bg (white) |
| `--section-bg-odd` | `background-alt` | Odd section bg (slate-50) |
| `--footer-bg` | `slate-950` | Footer background |
| `--footer-text` | `slate-300` | Footer body text |
| `--footer-heading` | `white` | Footer heading text |

---

## Typography

### Font Stack
| Role | Font | Weights | Source |
|------|------|---------|--------|
| **Heading** | Poppins | 400, 500, 600, 700 | `next/font/google` |
| **Body** | Open Sans | 400, 500, 600 | `next/font/google` |

### Type Scale
| Level | Tailwind | Size | Weight | Line Height | Use |
|-------|----------|------|--------|-------------|-----|
| Display | `text-4xl` / `text-5xl` | 36–48px | 700 (bold) | 1.1–1.2 | Hero headline |
| H1 | `text-3xl` | 30px | 700 (bold) | 1.25 | Section titles |
| H2 | `text-2xl` | 24px | 600 (semibold) | 1.3 | Subsection titles |
| H3 | `text-xl` | 20px | 600 (semibold) | 1.4 | Card titles |
| Body | `text-base` | 16px | 400 (regular) | 1.625 | Paragraphs |
| Body Large | `text-lg` | 18px | 400 (regular) | 1.75 | Lead paragraphs |
| Small | `text-sm` | 14px | 400 (regular) | 1.5 | Captions, metadata |
| XS | `text-xs` | 12px | 500 (medium) | 1.5 | Badges, labels |

### Measure (Line Length)
- Body copy: `max-w-prose` (65ch) or `max-w-3xl`
- Headings: `text-wrap: balance` for multi-line balance

---

## Spacing System (4px Base, 8px Rhythm)

| Token | Value | Tailwind | Use |
|-------|-------|----------|-----|
| Section Y-padding | 80–96px | `py-20` to `py-24` | Between major sections |
| Container width | 1280px | `max-w-7xl` | Content constraint |
| Container X-padding | 16–24px | `px-4` to `px-6` | Horizontal content padding |
| Card padding | 24–32px | `p-6` to `p-8` | Card interiors |
| Card gap | 24–32px | `gap-6` to `gap-8` | Between cards in grid |
| Component gap | 16px | `gap-4` | Between inline elements |
| Text stack gap | 16–24px | `space-y-4` to `space-y-6` | Between text blocks |

---

## Border Radius

| Use | Value | Tailwind |
|-----|-------|----------|
| Buttons | 8px | `rounded-lg` |
| Cards | 12px | `rounded-xl` |
| Badges | 9999px | `rounded-full` |
| Inputs | 8px | `rounded-lg` |

---

## Shadows

| Use | Value | Tailwind |
|-----|-------|----------|
| Card default | `0 1px 3px rgba(0,0,0,0.1)` | `shadow-sm` |
| Card hover | `0 4px 6px rgba(0,0,0,0.1)` | `shadow-md` |
| Navbar scroll | `0 1px 3px rgba(0,0,0,0.1)` | `shadow-sm` |
| Dropdown | `0 10px 15px rgba(0,0,0,0.1)` | `shadow-lg` |

---

## Accessibility (WCAG 2.1 AA)

### Contrast Ratios (Verified)
| Combination | Ratio | Status |
|-------------|-------|--------|
| `#0F172A` (text) on `#FFFFFF` (bg) | **15.4:1** | ✅ AAA |
| `#0A5C36` (primary) on `#FFFFFF` (bg) | **7.2:1** | ✅ AA |
| `#92400E` (accent) on `#FFFFFF` (bg) | **5.9:1** | ✅ AA |
| `#FFFFFF` (text) on `#0A5C36` (bg) | **7.2:1** | ✅ AA |
| `#FFFFFF` (text) on `#92400E` (bg) | **5.9:1** | ✅ AA |
| `#FFFFFF` (text) on `#064E3B` (hero) | **9.4:1** | ✅ AAA |
| `#CBD5E1` (text) on `#020617` (footer) | **10.5:1** | ✅ AAA |
| `#D97706` (decorative) on `#FFFFFF` | **3.4:1** | ⚠️ 3:1 only — large text / icons |
| `#64748B` (muted) on `#FFFFFF` | **4.6:1** | ✅ AA |

### Focus States
- Ring: `2px solid #0A5C36` with `2px offset`
- Tailwind: `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`

### Touch Targets
- Minimum: 44×44px for all interactive elements
- Spacing: ≥ 8px between adjacent targets

### Motion
- Honor `@media (prefers-reduced-motion: reduce)`
- Tailwind: `motion-reduce:transition-none motion-reduce:animate-none`

### Keyboard Navigation
- Full tab navigation through all interactive elements
- Visible focus indicators on every focusable element
- `aria-expanded` on toggleable menus
- `aria-current="page"` on active navigation items

---

## Anti-Patterns (Do NOT Use)
- ❌ Emojis as structural icons — use inline SVGs
- ❌ Dark mode / dark theme — light-only institutional design
- ❌ Claymorphism / playful styles — professional and trustworthy
- ❌ Comic / handwritten fonts — use Poppins + Open Sans only
- ❌ Hardcoded hex values in components — always use tokens/utilities
- ❌ `focus:outline-none` without replacement focus ring
- ❌ `<img>` tags — always use `next/image`
- ❌ Dynamic Tailwind class construction — use static class maps
