@AGENTS.md

# Edward Cadiz — Portfolio

Editorial-minimal: light background, hairline dividers, divide-y rows instead of cards, oversized display headings, marquee tickers.

## Stack

Next.js 16 App Router · Tailwind CSS v4 (`@import "tailwindcss"`, no config file) · Framer Motion 12 · Lucide React · TypeScript. Fonts via `next/font/google` in `app/layout.tsx`.

## Color System — Tuscan Sunset

Defined as CSS variables in `app/globals.css`. Never use colors outside this table; never use Tailwind stock colors (slate/gray/etc.).

| Variable   | Hex       | Usage |
|------------|-----------|-------|
| `--bg`     | `#FFF8F2` | Page background |
| `--ink`    | `#2A0E06` | Primary text, dark UI marks |
| `--accent` | `#E35336` | Italic heading lines, CTAs, active filters, hovers, scrollbar hover |
| `--peach`  | `#FFD3AC` | Photo placeholder bg, marquee dividers (✦/·), bullet ◆, quote marks, scrollbar thumb, text on sienna |
| `--mauve`  | `#9988A1` | Muted text, nav links, chip text, eyebrow labels |
| `--sienna` | `#8A2B0E` | Contact + Footer dark section backgrounds |
| `--border` | `#EAC8B0` | All rules, dividers, chip borders |
| `--tint`   | `#FFF0E4` | Hover backgrounds |

Dark sections (Contact, Footer) use peach-tinted text at opacities (`text-[#FFD3AC]/60` etc.) — never mauve, which fails contrast on sienna. Scrollbar and `::selection` are themed in globals.css; keep them in sync with palette changes.

## Layout Rhythm

- Container: `.wrap` = `mx-auto max-w-[1400px] px-5 sm:px-8 md:px-10 lg:px-16` — every section
- Section padding: `py-14 sm:py-20 md:py-24` — every section (Footer: `py-12 sm:py-16`)
- Section roots get the `.rule` top border
- Shared utilities in globals.css: `.rule`, `.chip`, `.hover-line`, `.marquee-inner` — never re-implement inline

## Conventions

- Headings: bold line + `<br/>` + `font-extralight italic text-[#E35336]` line
- Labels: uppercase 11px tracked (`text-[11px] uppercase tracking-widest`)
- Animations: `whileInView` with `viewport={{ once: true }}`, y:16→0, stagger ~0.05s
- Grids declare the full breakpoint ladder (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`); stat/link rows get `flex-wrap`
- Hero photo: `next/image` `fill priority` with `sizes`; separate mobile (stacked) and desktop (side column) treatments
- Headings scale with `clamp()`
- Section content lives in `data/*.ts`; components map over data (Projects/Services/Skills currently keep local arrays — fine, but don't duplicate)

## Fonts

`layout.tsx` holds 6 commented font pairings (active: Outfit + DM Sans). Switch by uncommenting one block's import + both consts. Components only reference `--font-display` / `--font-body`.

## Sections (page.tsx order)

Navbar · Hero · Services (accordion) · Projects (filterable rows; per-project `accent` hover tint applied at `+"28"` alpha) · Experience · Skills (capability grid + tools marquee) · Testimonials · Contact (sienna) · Footer (sienna, ghost watermark name)

## Workflow

After any site-wide change: grep for leftover old values, then `npx tsc --noEmit` must pass clean.
