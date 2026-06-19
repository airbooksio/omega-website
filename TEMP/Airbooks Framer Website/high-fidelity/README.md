# Airbooks Website — High-Fidelity Design

Working visual reference for the Airbooks single-page marketing site.

## Files

- `index.html` — the home page mockup. Self-contained; all design tokens declared inline in `:root`.
- `assets/` — brand and decorative SVGs (logos, eclipse motifs, gradient).

## Design state (v0.4)

**Typography stack**
- **Public Sans** — all headings and body text. Hero H1 at weight 700 (plain text, no emphasis spans). Section H2s at weight 500. Item h3s at weight 700. Body paragraphs at weight 300. The full weight range (300–800) plus italic variants are loaded from Google Fonts.
- **JetBrains Mono** — small accent text: section eyebrows, application card tags, application card revenue labels, footer copyright. 12px, weight 500, uppercase, tracking +0.08em. Color `--color-accent` (punchy violet, ~7.2:1 vs base surface).

**Surfaces**
- Lightened by +0.03 L across the stack from the original spec. Base surface is at L=0.19; raised at 0.22; overlay at 0.29; sunken at 0.15.
- Hero section has `background-color: var(--color-surface-raised)` (one step up from base), so the eclipse SVG composites against a slightly lighter ground.

**Section structure**
- Single dark surface throughout. Subtle 1px horizontal borders between sections.
- **Hero** — content centered (max-width of the container). Background SVG (`bg-eclipse-circle.svg`) loaded via CSS `::before` pseudo-element at full opacity (`opacity: 1`), positioned with `top: -50%; bottom: -50%` and `width: max(200%, 1728px)` for full-bleed coverage, `background-size: 175% 80%; background-position: center center` to center the circle motif. Parallax reverses as user scrolls — background moves upward (recedes), giving a depth-recession feel rather than pulling toward the viewer. Nav overlaps the hero, starting at viewport top.
- **Problem / Approach / Open Platform** — 2-column split layout (3fr / 2fr grid):
  - **Left column:** eyebrow + H2 + lede paragraph.
  - **Right column:** vertically-stacked items separated by gradient top borders. Starts 38px below the left column's top edge (aligning body text with the H2, not the eyebrow). Item titles at Public Sans 700/19px; body at Public Sans 300/15px muted. Open Platform items lead with a Lucide icon (shield-check / network / landmark) in a small violet-tinted square.
  - **Approach closing statement** sits at the end of the right column behind the same gradient divider as the items above it.
- **Applications** — centered eyebrow/H2/lede above a 4-card horizontal grid.
- **Why Airbooks** — centered "Why us, why now?" heading above a horizontal 4-column grid.
- **Final CTA** — inset card: `margin-inline`, `border-radius: 20px`, `border: 1px solid var(--color-border)`, on `--color-surface-raised` with gradient SVG layered behind. No border on footer.

**Borders and dividers**
- Section-level borders: 1px solid `--color-border` (plain).
- Split-section item dividers (between items, and before the closing statement), and Why Airbooks item tops: 0.5px, gradient border-image — same directional violet as the app cards: `linear-gradient(to right, oklch(0.70 0.22 290 / 0.85) 0%, oklch(0.55 0.18 290 / 0.45) 22%, oklch(0.34 0.06 290) 55%, var(--color-border) 100%)`.
- Application cards: 0.5px gradient border (135deg, upper-left bright violet → lower-right dim).

**Nav behavior**
- Fixed (overlaps the hero section). Transparent at the top of the page (no background, no border).
- Fades in to 50% opacity frosted glass state once the user scrolls past 20px.

**Responsive / mobile**
- ≤1024px: 2-col app cards, 2-col why-items, split gap tightens to 56px.
- ≤860px: split sections collapse to single column.
- ≤768px: section padding 80px; base gutter 20px; body sections get `padding-inline: 40px` (overrides the 20px base, doubling the visible side margin); app cards and why-items go single column.
- ≤480px: nav links hidden.

## Tokens

Inlined in `:root` for portability. The source of truth is `tokens/**.json` at the project root. Both are in sync as of v0.4.

## Viewing

```
open high-fidelity/index.html
```

No build step. Google Fonts load over the network. SVG assets load from `assets/`.
