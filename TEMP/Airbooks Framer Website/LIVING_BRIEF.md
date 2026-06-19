# LIVING_BRIEF.md
*Per-project state document. Read at session start; append to at session end.*

---

## 1. Project Identity

**Product:** Airbooks — a single-page marketing website for a fixed-income capital markets infrastructure / access platform. Positions Airbooks as a partner that opens up access to the infrastructure capital markets already run on (apps + the OMEGA open access protocol).

**Audience:** Capital markets practitioners (sell-side syndicate desks, buy-side PMs and traders, issuers) evaluating tooling, plus investors and strategic partners doing diligence. Operator voice — "talk like the desks, not like vendors."

**Density:** Content-sparse. Single-page marketing site with ~8 sections (Hero → Problem → Approach → OMEGA → Applications → Why Airbooks → Final CTA → Footer). Not a dashboard or content-heavy product UI.

**Theme:** Dark only. Single dark theme; no light-mode toggle. Matches the v4 wireframe direction (which already had dark hero and final CTA sections) and the broader fintech/infrastructure category convention.

**Stance:** Balanced — confident but quiet. Roughly center on expressive ↔ utilitarian, leaning slightly utilitarian. Type-driven hierarchy, restrained accent color, no theatrics. The personality comes from a saturated violet primary (#7008e7) and intentional typographic contrast (warm geometric humanist logo against neutral workhorse body text), not from decorative elements.

**Technology:**
- **Source of truth for tokens:** CSS custom properties (per the campaign spec), generated via Style Dictionary in Step 7.
- **Wireframe layer:** Static HTML/CSS in `wireframes/index.html` + `wireframes/styles.css`. Used for review and iteration outside Framer.
- **Deployment target:** Framer. The "live" expression of the design system lives in Framer's Color Styles, Text Styles, and Components — mirrored manually from the CSS tokens for now.

---

## 2. Key Decisions

**Color:**
- Primary: **#7008e7** (deep saturated violet) — used at full chroma at interactive elements only.
- Theme: dark only.
- OKLCH commitment level: **Level 2 — Committed.** Surfaces have visible violet hue affinity (hue 290°, chroma 0.025–0.030 — maximum relative chroma at each L value in dark mode). Neutrals reinforce the primary; they are not generic gray.
- Secondary: **steel cyan-blue** (oklch(0.62 0.10 220)) — distinct hue from primary, used sparingly. Provisional; may not survive the final system if not earned.
- Semantic palette: error (warm red, hue 25°), success (desaturated green, hue 150°), warning (amber, hue 80°). Provisional values to be confirmed in Step 4.
- Colors to avoid: none specified by the user.

**Typography:**
- Headings and body: **Public Sans** — geometric sans with a full weight range (300–800). Used at weight 700 for hero H1, weight 600 for hero H1 `.emp` spans, weight 500 for section H2s, weight 700 for item h3s, and weight 300 for all body paragraphs and ledes.
- Eyebrows / accent: **JetBrains Mono** — monospaced, weight 500, uppercase, tracking +0.08em, rendered in `--color-accent` (punchy violet). Used for section eyebrows, application card tags, revenue labels, and footer copyright.
- No other typefaces in the system. Poppins is not used.
- Hierarchy approach: weight contrast within a single family (300 body vs. 700 h3 vs. 500 H2 vs. 700 H1). Eyebrow register shift achieved via monospace family switch rather than size alone.

**Spacing:** [to be determined — token generation in later phase].

**Shape:**
- Sharp ↔ rounded placement: **lean sharp, with a clear hierarchy** — not uniform across components.
- Radius scale (provisional, locked in Step 6): radius-none 0px (inline tags), radius-sm 4px (buttons, inputs, tooltips), radius-md 8px (cards, panels, popovers), radius-lg 12px (modals, dialogs), radius-xl 16px (reserved), radius-full 9999px (pill badges only).
- Elevation: minimal on dark — lift conveyed primarily by surface lightness shift. shadow-sm and shadow-md reserved for actually-floating elements (popovers, modals).

**Motion:** [to be determined — out of scope for the bootstrap campaign].

**Tokens:**
- Format: DTCG JSON in `tokens/` is the source of truth. CSS custom properties and JSON are compiled outputs in `dist/`.
- Build tooling: Style Dictionary v5 via `npm run tokens`. Config at `style-dictionary.config.mjs`. Outputs preserve reference graph (`outputReferences: true`) in CSS.
- File layout: tiered primitive → semantic → component. `tokens/primitive/font.json`, `tokens/semantic/{color,typography,shape}.json`, `tokens/component/{button,input}.json`.
- Outputs: `dist/tokens.css` (CSS custom properties on :root, all references preserved as var() chains), `dist/tokens.json` (nested JSON tree, references resolved). JSON is the recommended input for manual Framer mirror.
- Framer mirror: still manual. Tokens in Framer's Color Styles / Text Styles are sourced from `dist/tokens.json` and re-applied when the JSON changes.

---

## 3. Current State

**Token files:**
- `tokens/` — DTCG JSON source of truth, tiered primitive / semantic / component. `npm run tokens` compiles to `dist/`.
- `style-dictionary.config.mjs` — build config (CSS + JSON outputs, references preserved).
- `package.json` — installs `style-dictionary` v5 as a devDependency, exposes `npm run tokens` / `tokens:watch` / `tokens:clean`.
- `dist/tokens.css` and `dist/tokens.json` — generated outputs (run `npm install` then `npm run tokens` to produce).
- `src/styles/tokens/colors.css` · `typography.css` · `shape.css` — original hand-written annotated reference files (kept as bridge during migration; archive after `dist/tokens.css` parity is verified).
- `wireframes/styles.css` — wireframe-only, separate concern.

**Components implemented:** None yet — only static wireframe HTML/CSS placeholders for the single page.

**Components stubbed:** None.

**Known gaps:**
- Token architecture not yet established.
- No design system in Framer yet beyond the inherited template (Surface Day/Night, Border Day/Night, Switzer/Satoshi text styles) — none of which we're keeping.
- Wireframe is currently light-themed; needs to be re-skinned dark once tokens land.

---

## 4. Open Questions

- [ ] Secondary / accent color, if any (Step 2 to propose).
- [ ] Whether the system needs a data-vis or chart palette (probably not for the marketing site; defer).
- [ ] Final workflow for syncing CSS tokens ↔ Framer styles (manual mirror is the working assumption).
- [ ] Component count estimate beyond the marketing site (defer until/if a product UI is in scope).
- [ ] Whether a monospace typographic role is needed (Step 5).

---

## 5. Decision Log

*2026-05-19 — Context established — Single-page marketing site for Airbooks (fixed-income capital markets infrastructure). Dark-only theme. Balanced confident-quiet stance, leaning slightly utilitarian. Primary color #7008e7 (saturated violet). Typography: Poppins for logotype only, Inter for body/headings. Deployment target: Framer; CSS tokens as source of truth.*

*2026-05-19 — Visual language established — Level 2 Committed OKLCH (violet-tinted dark surfaces, hue 290°). Primary #7008e7 used at full chroma at interactive elements only. Inter at 400/500/600 across all roles, hierarchy expressed through weight + tracking contrast. Radius hierarchy 0/4/8/12 (sharp at tags, soft at modals — not uniform). Aesthetic frame: Swiss/International + Editorial + Functionalist restraint. style-preview.html approved by user.*

*2026-05-19 — DESIGN.md generated — Full token scaffold per the design-md alpha spec. All visual values mirrored from style-preview.html (hex approximations of OKLCH targets). Provisional values flagged: 4px-base spacing scale (derived from preview padding), secondary color, semantic palette, button/input component tokens. Spacing requires explicit confirmation before Phase 4.*

*2026-05-19 — Color scheme generated — Named-palette architecture, single dark theme. All semantic role pairs (background + on-*) defined with explicit OKLCH values; sRGB hex approximations as documentation. Contrast verified inline for every pair; AA or AAA passing across the system. One known limitation flagged: primary-fill vs base-surface = ~2.0:1, acceptable per WCAG 1.4.11 textual-component exception (white-on-violet text label is 8.6:1 AAA), but documented as a constraint — color-only affordances must use a derived lifted primary (border-focus token) or one of the semantic colors.*

*2026-05-19 — Type scale generated — Hybrid hand-tuned editorial scale, 12 named roles (wordmark, display, heading-lg/sm, body-lg/md/emphasis/sm, label, eyebrow, caption, code). Tight Major-Second ratio at the base (≈1.08–1.14 from eyebrow → body-lg), larger jumps into display (1.64–1.78). Hierarchy expressed through weight (400/500/600) + tracking variation, not size alone. Line heights verified against legibility constraints (display 1.05, heading 1.15–1.25, body 1.45–1.55, label 1.2–1.45). Letter spacing moves in correct direction at extremes (negative on display, positive on label/eyebrow/caption).*

*2026-05-19 — Shape tokens generated — Six-step radius scale (0/4/8/12/16/full), sharp-leaning with deliberate hierarchy: tags 0, buttons/inputs 4, cards/popovers 8, modals 12. Role-named semantic aliases (radius-interactive/container/overlay/pill/data/tag) layered over size-named primitives. Two border widths (default 1px, focus 2px). Three elevation steps (none / sm / md). On dark surfaces, elevation is conveyed primarily through surface lightness shift; shadow tokens reserved for actually-floating elements only (modals, popovers, dropdowns).*

*2026-05-19 — Style Dictionary configured — Migrated hand-written CSS token files to DTCG JSON sources under `tokens/` (tiered primitive / semantic / component). Style Dictionary v5 config at root, ESM. Outputs: dist/tokens.css (CSS custom properties, references preserved via outputReferences) and dist/tokens.json (nested tree, references resolved). package.json adds style-dictionary as devDep with npm run tokens. JSON output is the canonical input for manual Framer Color Styles / Text Styles mirror. tokens/README.md documents conventions and migration path; src/styles/tokens/*.css files retained as annotated reference during migration.*

*2026-05-19 — Phase 4 plan revised — Skipping React component scaffold (shadcn etc.) because deployment target is Framer-via-MCP, not a separate web app. Replacing with: (4a) high-fidelity HTML mockup of the single-page spec as a visual reference; (4b) Framer migration plan; (4c) execute via Framer MCP with check-ins; (4d optional) lightweight docs page.*

*2026-05-19 — Phase 4a complete — Built high-fidelity mockup applying the full design system to the v4 content spec. Dark theme throughout with violet-tinted surfaces; alternating section background rhythm (surface / surface-raised); Final CTA on primary-container as a brand moment; type roles applied (display, heading-lg, heading-sm, body-lg, body-md, body-emphasis, body-sm, label, eyebrow, caption); sharp radius hierarchy (tags 0, buttons 4, cards 8); minimal shadow strategy. All tokens declared inline in :root for portability; mirror sources are the JSON tokens.*

*2026-05-19 — Project layout reorganized — Split low-fi wireframe and high-fi mockup into separate directories. wireframes/ restored to original low-fi state (working). high-fidelity/ created at project root holding the new mockup (index.html + README). Each directory is self-contained; both remain accessible.*

*2026-05-19 — Style bug fix — Hi-fi mockup had a CSS comment that contained the substring `*/` inside `tokens/**.json` style text — closing the comment block prematurely and breaking the entire stylesheet. Reworded the comment to remove the embedded close-comment sequence.*

*2026-05-19 — Phase 4a-v2 — Expressive revision of high-fidelity mockup. Brand SVGs and decorative motifs supplied by user (horizontal/vertical/icon logos, three eclipse motifs, one gradient bg) staged under high-fidelity/assets/. Changes applied: single dark surface throughout with subtle horizontal section borders (no more alternating); Poppins 800 for hero H1 (clamped to 96px max) and Poppins 700 for section H2 (clamped to 56px); hero emphasis driven by color contrast (bright vs. faint) on "capital markets" and "on your terms" rather than weight; brand-tinted (lifted violet) section eyebrows; cards removed from Problem / Approach / Open Platform / Why Airbooks sections (content sits directly on bg with vertical dividers); Lucide icons (shield-check, network, users-round) added to Open Platform pillars; Applications cards retained with violet-tinted directional lighting border (upper-left bright → lower-right dark) and no divider above the revenue label; Applications closing tagline restyled with violet accent rule and italic emphasis; Final CTA section on subtly lifted surface with gradient-bg-1 layered; horizontal logo in header, small vertical logo inline with tagline in footer; subtle parallax on hero eclipse motif (35% scroll factor); increased size contrast between impact typography and content (clamped responsive scales).*

*2026-05-19 — Phase 4a-v4 — Polish pass on split-section layout. Removed sticky positioning from split-left columns (now scrolls with the page). Centered the Applications eyebrow/H2/lede above the cards. Reduced split-content type by one step (h3 22→19, body 16→15, emphasis 17→15) for stronger contrast against section H2s. Hero H1 reduced to clamp(44, 6vw, 80) and forced line breaks removed (no more `&nbsp;` in emphasized phrases; let the heading flow naturally).*

*2026-05-19 — Phase 4a-v4b — Split-grid ratio flipped to 60/40 favoring the left (heading + caption) column over the right (item block) column (was 1fr / 1.25fr ≈ 44/56). The heading and lede now get more breathing room; the item list is more compact.*

*2026-05-19 — Phase 4a-v3 — Layout restructure and typography swap. (a) Body font changed from Inter to PT Sans (400/700 only — PT Sans has no medium); body emphasis now uses weight 700 instead of 500. (b) Eyebrow / accent text switched to JetBrains Mono 500 at uppercase with reduced tracking (+0.08em); color shifted to a punchier `--color-accent` (oklch(0.74 0.22 290), ~7.2:1 vs surface). (c) Hero H1 emphasis now uses weight contrast (Poppins 300 default vs Poppins 800 highlights) instead of color difference; all hero H1 text reads in full on-surface tone. (d) Surface tokens lightened by +0.03 L across the stack: surface 0.16→0.19, surface-raised 0.19→0.22, surface-overlay 0.26→0.29, surface-sunken 0.12→0.15, primary-container 0.28→0.31. (e) New hero eclipse motif (`bg-eclipse-v2.svg`) supplied and wired up. (f) Body content sections (Problem, Approach, Open Platform, Why Airbooks) restructured as two-column split: left = sticky anchor with eyebrow/H2/lede, right = vertically-stacked items separated by thin top borders, with conclusive statements (like the Approach closing line) anchored to the bottom of the right column under a violet accent rule. Open Platform items lead with a Lucide icon inline-left. Applications section retains its 4-card layout. (g) Nav becomes transparent at scrollY=0 and fades in to its blurred/bordered state once the user scrolls past 20px. The canonical tokens in `tokens/**.json` and `src/styles/tokens/*.css` are now slightly behind the mockup (lighter surfaces, JetBrains Mono accent, PT Sans body) — sync once direction is stable.*

*2026-05-20 — Phase 4a-v5 — Interaction polish and typography consolidation. (a) Typeface stack consolidated to Public Sans (headings + body) + JetBrains Mono (eyebrows/accents). Poppins, PT Sans, PT Serif, and Inter all removed. Body paragraphs at weight 300 (light); hero H1 at 700 with .emp spans at 600; section H2 at 500; item h3s at 700/19px. (b) Hero placeholder box removed; hero content centered (max-width 760px). Hero background SVG moved from inline img to CSS ::before pseudo-element at 50% opacity; parallax JS updated to target .hero via --parallax-y custom property. (c) Nav changed to position: fixed overlapping the hero, transparent-to-frosted-glass transition on scroll at 50% surface opacity. (d) Why Airbooks restructured as 4-column horizontal grid below centered heading. (e) CTA section given inset appearance: margin-inline, border-radius 20px, 1px border, footer border-top removed. (f) Third Open Platform icon changed from users-round to landmark. (g) Approach closing separator changed from --color-accent to --color-border. (h) Split-right column given padding-top: 38px to align content with H2 baseline. (i) All documentation (tokens, DESIGN.md, LIVING_BRIEF.md, README.md) synced to match mockup state.*

*2026-05-20 — Phase 4a-v6 — Visual refinements and Framer prep. (a) Hero eclipse background changed from `bg-eclipse-v2.svg` to `bg-eclipse-circle.svg`; ::before repositioned to full-bleed centered coverage (top: -50%, bottom: -50%, width: max(200%, 1728px), background-size: 175% 80%, background-position: center center, no aspect-ratio constraint, opacity: 1). Hero itself given background-color: surface-raised so the SVG composites against a lighter ground. (b) Parallax direction reversed — background now moves upward as user scrolls (−0.35 multiplier), creating a depth-recession effect. (c) Hero H1 simplified to plain text — .emp emphasis spans removed. (d) "Why us, why now." heading changed to question mark. (e) App card borders thinned from 1.5px to 0.5px. (f) All split-section item dividers, Approach closing separator, and Why Airbooks item tops changed from plain 1px solid to 0.5px gradient border-image matching the app card directional violet gradient (to right: bright violet → dim border color). (g) Mobile body section padding doubled: body sections (.section:not(.hero):not(.cta)) get padding-inline: 40px at ≤768px (vs. the global 20px gutter). (h) All documentation synced to match.*
