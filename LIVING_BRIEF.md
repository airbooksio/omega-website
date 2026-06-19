# Omega Website — Living Brief

> Reconstructed from the codebase on 2026-06-19 (project was not built with Sistema; no prior brief existed). This is the design-system system-of-record. Update it as decisions change.

## Product identity

A dark-theme marketing site for **Airbooks**, a capital-markets (fixed-income) data company offering modern applications + an open protocol (**OMEGA** — Open Markets Exchange, Governance & Access) for cleaner, more controllable access to capital-markets infrastructure.
- **`/`** — Airbooks homepage (migrated from `TEMP/Airbooks Framer Website/high-fidelity/index.html`).
- **`/core`** — the original OMEGA marketing page (moved here, unchanged).
- The final site will be a **synthesis** of both designs (color-keying session pending).

## Key decisions (by area)

### Tokens / architecture
- **DTCG JSON is the source of truth**, in `tokens/src/*.json` (`color`, `typography`, `shape`, `spacing`).
- **Style Dictionary v4** (`sd.config.mjs`, `npm run tokens`) compiles them to `app/tokens.generated.css` as `--ds-*` CSS custom properties (218 vars). The file is auto-generated — never hand-edit.
- [app/globals.css](app/globals.css) (Tailwind v4 `@theme inline`) maps the Tailwind theme onto the `--ds-*` vars: shadcn semantic names (`bg-background`, `bg-primary`…), new DS role names (`bg-surface`, `text-on-surface-muted`, `bg-success`…), the `text-<role>` type scale, radius, and shadows.
- Three-tier model: **primitive ramps** (`palette.*`, 19-stop) → **semantic roles** (`color.*`) → component usage. Components must consume semantic roles, never primitives (Step 2 audit fixes pending).

### Color
- **Dark-only.** Generated via Sistema palette API. Seeds: **primary `#7008e7`** (violet brand), **neutral `#717172`** (intentionally desaturated — hue-affinity guideline deliberately declined by owner). Secondary = **blue** (`#2563eb` ramp) for a distinct second hue (matches existing audience accents). Feedback = red/amber/green from Sistema library.
- Commitment level: **Committed** (dark neutral surfaces, saturated violet primary).
- Layered surfaces: `surface #101011` / `surface-raised #212121` / `surface-overlay #2d2d2e`. Every `on-*` pairing WCAG AA-verified via the Sistema contrast API (lowest passing pair 5.1:1; `warning` uses dark text since white fails).
- shadcn aliases re-pointed onto roles (`--background→surface`, `--primary→primary`, `--secondary→secondary(blue)`, `--muted-foreground→on-surface-muted`, `--ring→border-focus`, `--destructive→error`, …).

### Typography
- DM Sans (sans) / DM Mono (mono). **Modular Major Third (1.25)**, 16px base, hand-tuned to clean px.
- 11 named roles: `display, heading-lg, heading-md, heading-sm, body-lg, body, body-sm, label, overline, caption, code`. Weight (400/500/600), size, and tracking all vary across roles; line-height calibrated per size; tracking negative at display sizes, positive at small. Exposed as `text-<role>` utilities.

### Shape
- Radius hierarchy (`shape.json`): `none 0 / sm 4 / md 6 / lg 8 / xl 12 / full 9999`. Moderately rounded (8px containers) with pill CTAs as a reserved high-emphasis signal. Three dark-tuned elevation shadows (`sm/md/lg`).

### Spacing
- 4px base. Balanced tier for component-internal spacing, extended (80/96/128) for section rhythm — deliberate mixed density. Semantic aliases: `page-gutter=24`, `section-gap=96`, `component-gap=16`.

### Component stack
- shadcn/ui + Radix + class-variance-authority installed.

## Current state

- **Implemented & shipped:** 7 custom sections — [navbar](components/navbar.tsx), [hero](components/hero.tsx), [audience-strip](components/audience-strip.tsx), [proof-strip](components/proof-strip.tsx), [pillars](components/pillars.tsx), [cta-section](components/cta-section.tsx), [footer](components/footer.tsx) — assembled in [app/page.tsx](app/page.tsx). Of the shadcn library, only [ui/button](components/ui/button.tsx) is actually used (3×).
- **Token pipeline:** `tokens/src/*.json` → Style Dictionary → `app/tokens.generated.css` → `@theme` in `globals.css`. Build verified (`npm run build` passes; tokens resolve in compiled CSS).
- **Components consume semantic roles only.** The 73 primitive usages were migrated to semantic utilities and the transitional `gray-*`/`purple-*`/`blue-*` re-skin mappings removed from `@theme`. Custom sections now use `text-foreground`, `text-muted-foreground`, `bg-card`, `bg-background`, `bg-primary`, `text-primary`, `text-on-primary-container`, `text-secondary`, `text-on-secondary-container`, `bg-muted`, `border-border`, etc.
- **Stubbed / dormant:** 67 other `components/ui/*` files installed but imported nowhere. Legacy light theme `styles/globals.css` unused.
- **Missing:** `DESIGN.md` / documentation layer (partially addressed by this brief); light theme not wired.

## Open questions

- **Color synthesis (next session):** the Airbooks homepage was mapped onto our **desaturated-neutral** surfaces, but its source design used **violet-tinted** surfaces (`oklch … 0.028 290`). Reconcile — re-tint our neutral tokens, or keep neutral? Affects both pages.
- **Brand-accent text:** eyebrows use `text-primary` (#7208ea), low-contrast on dark (~2.5:1) on both pages. The Airbooks source used a brighter accent. Likely need a new "accent / brand-on-dark text" role (Step 3 will flag).
- **Hero/heading sizing:** mapped to our type scale (`display` 60px, `heading-lg` 36px) — smaller than the Airbooks source (up to 80/56px). Tune the `display`/`heading-lg` tokens if more drama wanted.
- Is a **light theme** required, or is dark-only the intended final state?
- Should the 67 unused `ui/` components be **kept** or **pruned**?
- Repo has **both `package-lock.json` and `pnpm-lock.yaml`** — which is canonical?

## Decision log

- 2026-06-19 — Living brief reconstructed from code; project predates Sistema, no prior brief.
- 2026-06-19 — Session-start — audit scope set to entire component surface (7 custom sections + token layer + all 68 `ui/` components).
- 2026-06-19 — Token coverage audit — 73 blocking (color primitives bypassing semantic tokens in custom sections), 0 recommended in shipped code, ~57 minor (arbitrary values in unused `ui/` boilerplate). No hex/rgb/inline-color values anywhere.
- 2026-06-19 — Token pipeline established — Style Dictionary v4 (DTCG `tokens/src/*.json` → `app/tokens.generated.css` → Tailwind `@theme`). Foundations reset before audit fixes.
- 2026-06-19 — Color scheme generated — layered/contextual roles, dark-only, Committed level, primary `#7008e7` (violet) + desaturated neutral `#717172` + blue secondary; all `on-*` pairs WCAG AA verified.
- 2026-06-19 — Type scale generated — modular Major Third (1.25), 16px base, DM Sans/DM Mono, 11 named roles.
- 2026-06-19 — Shape tokens generated — moderately-rounded personality (none/sm4/md6/lg8/xl12/full), 3 dark-tuned elevation shadows.
- 2026-06-19 — Spacing tokens generated — 4px base, balanced+extended mixed-density scale, 3 semantic layout aliases.
- 2026-06-19 — Token coverage remediation — migrated all 73 primitive color usages to semantic roles across 8 files; removed transitional re-skin mappings; build passes. Step 2 findings resolved.
- 2026-06-19 — Homepage migration — converted the Airbooks static page to Next.js (`components/home/*`, new `/` page); moved Omega homepage to `/core`; mapped onto our tokens + DM Sans/Mono; preserved gradient-border cards, eclipse parallax, gradient dividers/CTA (`gradient-accent-*` utilities). Assets in `public/airbooks/`. TEMP kept for reference. Both routes build.
