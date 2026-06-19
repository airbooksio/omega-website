---
version: alpha
name: Airbooks
description: Dark-only, Level 2 Committed design system for the Airbooks single-page marketing website. Swiss/International typographic structure with editorial composition and functionalist restraint. Saturated violet primary; violet-tinted dark surfaces; sharp-leaning radius hierarchy; Public Sans system-wide for headings and body; JetBrains Mono for eyebrows and accent text.

colors:
  # Primary — saturated violet, full chroma at interactive elements only
  primary: "#7008e7"
  primary-hover: "#8927ff"
  on-primary: "#ffffff"
  primary-container: "#2e2247"
  on-primary-container: "#c4afef"

  # Secondary — steel cyan-blue counterpoint (provisional; may not survive)
  secondary: "#65a3c4"
  secondary-hover: "#7eb6d2"
  on-secondary: "#0d141b"
  secondary-container: "#27384a"
  on-secondary-container: "#b8d2e3"

  # Surfaces — violet-tinted dark, hue 290°, max relative chroma at each L
  surface-sunken: "#100d15"
  surface: "#15121b"
  surface-raised: "#1d1a25"
  surface-overlay: "#25212f"

  # Text on surface — three weights of emphasis
  on-surface: "#f4f3f6"
  on-surface-muted: "#ada8b5"
  on-surface-faint: "#736f7c"

  # Borders
  border: "#383540"
  border-strong: "#4b4754"
  border-focus: "#a98aff"

  # Semantic — error, success, warning + paired surfaces
  error: "#d65d4e"
  on-error: "#fff8f6"
  error-container: "#3d1d19"
  on-error-container: "#f4c2b9"
  success: "#5cb985"
  on-success: "#091711"
  success-container: "#1b3d2a"
  on-success-container: "#c1eccf"
  warning: "#d9aa54"
  on-warning: "#1a1207"
  warning-container: "#3d2e13"
  on-warning-container: "#f0d9a4"

typography:
  # Display — hero H1, used once per page
  display:
    fontFamily: Public Sans
    fontSize: clamp(44px, 6vw, 80px)
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: -0.025em
  display-emp:
    fontFamily: Public Sans
    fontSize: clamp(44px, 6vw, 80px)
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: -0.03em
    note: Applied to .emp spans inside the hero H1.

  # Headings — section and card titles
  heading-lg:
    fontFamily: Public Sans
    fontSize: clamp(36px, 4.4vw, 56px)
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: -0.025em
  heading-sm:
    fontFamily: Public Sans
    fontSize: 19px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: -0.005em

  # Body — lede, paragraph, emphasis
  body-lg:
    fontFamily: Public Sans
    fontSize: 19px
    fontWeight: 300
    lineHeight: 1.55
    letterSpacing: 0em
    note: Section lede paragraphs; split-closing statement.
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: 0em
  body-sm:
    fontFamily: Public Sans
    fontSize: 15px
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: 0em
    note: Split-section item body paragraphs.
  body-emphasis:
    fontFamily: Public Sans
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0em

  # Small text — labels, eyebrows, captions
  label:
    fontFamily: Public Sans
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.02em
  eyebrow:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.08em
    textTransform: uppercase
    color: --color-accent (oklch(0.74 0.22 290))
  caption:
    fontFamily: Public Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0.01em

  # Code — system mono fallback
  code:
    fontFamily: ui-monospace, 'SF Mono', Menlo, Consolas, monospace
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px

spacing:
  # [TBD] Provisional 4px-base scale, derived from style-preview.html. Confirm before Phase 4.
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  gutter: 24px

elevation:
  none: none
  sm: 0 1px 2px 0 rgba(0, 0, 0, 0.40)
  md: 0 6px 16px -4px rgba(0, 0, 0, 0.50)

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: 10px 18px
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: 10px 18px
    typography: "{typography.label}"
  button-secondary-hover:
    backgroundColor: "{colors.surface-overlay}"
  input-default:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: 10px 12px
    typography: "{typography.body-md}"
---

# Airbooks Design System

## Overview

A dark-only design system for a fixed-income capital markets infrastructure marketing site. The brand stance is **confident but quiet** — operator voice, not consumer marketing.

The system's visual character draws from three aesthetic frames:

- **Swiss / International Typographic Style.** Hierarchy and structure carry the design. Generous use of typographic weight contrast; restraint in chrome.
- **Editorial / Magazine.** Typography is the primary design medium. The single-page marketing site reads as content-first, not as an interface with content inside it.
- **Functionalist restraint.** Every visual element has a reason to exist. Selectively borrowed — we don't take Functionalism's chroma limits, because the brand color earns its presence.

The system is explicitly *not* fintech-crypto (no glassmorphism, neon, holographic shapes), *not* consumer SaaS (no friendly rounded-everything, pastels, illustrated empty states), and *not* "dark sophisticated" (no near-black + muted gold + heavy shadows). Surfaces are intentionally violet-tinted, never neutral gray.

**Theme scope:** dark only. No light mode in v1. Deployment target is Framer; CSS custom property tokens are the source of truth and are mirrored manually into Framer Color Styles, Text Styles, and Components.

## Colors

The palette is **Level 2 Committed** in OKLCH terms: surfaces carry visible hue affinity to the primary (hue 290°), never falling back to neutral gray. Primary appears at full chroma only at interactive elements — buttons, focus rings, primary links. Everywhere else, the violet is expressed as a quiet whisper in the neutral ramp.

- **Primary (#7008e7) — Saturated violet.** The single hero color. Reserved for primary buttons, focus rings, and the lifted "on-container" foreground. Never used as a surface or text color on body content. Passes 4.9:1 against the base surface; on-primary white text reads at 8.4:1 (AAA).
- **Secondary (#65a3c4) — Steel cyan-blue.** A distinct hue (220°) from primary (290°). Provisional — used sparingly for elements that need to be visually distinct from primary actions without escalating to error. May be retired if it isn't earned by Phase 4.
- **Surfaces (`surface`, `surface-raised`, `surface-overlay`, `surface-sunken`).** Four nested dark surfaces, each at the maximum relative chroma achievable for its lightness value at hue 290°. Differentiation across the stack comes from lightness shift, not shadow or pattern.
- **On-surface text (`on-surface`, `on-surface-muted`, `on-surface-faint`).** Three weights of emphasis: AAA-readable primary (~14.6:1), AAA-readable secondary (~7.5:1), and a fainter tertiary tone (~4.0:1) reserved for disabled labels and tertiary microcopy — never primary body content.
- **Semantic (`error`, `success`, `warning`).** Each at moderate chroma to coexist with the saturated primary without competing. Hues chosen for clear distinction from each other (25° / 150° / 80°) and from the primary (290°).

## Typography

**Public Sans** is the primary typeface for all headings and body text. **JetBrains Mono** is used exclusively for eyebrows, application card tags, revenue labels, and footer copyright — providing a visible typographic register shift at the smallest accent text. No other typefaces are in use.

Hierarchy is expressed through **weight and size variation**, not font-switching. Public Sans's full weight range (300–800) allows dramatic contrast between the light body (300) and the heavy hero H1 (700) within a single cohesive family.

- **Display (Public Sans, clamp(44–80px)/700, lh 1.06, ls −0.025em).** Hero H1. Used once per page. Plain text — no inline emphasis spans.
- **Heading lg (Public Sans, clamp(36–56px)/500, lh 1.06, ls −0.025em).** Section H2s. Weight 500 (medium) gives these large headings a quieter, more architectural feel than a bold.
- **Heading sm (Public Sans, 19px/700, lh 1.3, ls −0.005em).** Split-section item titles and application card titles. Weight 700 creates contrast against the light body text below.
- **Body lg (Public Sans, 19px/300, lh 1.55).** Section lede paragraphs and split-closing italic statements. Same size as heading-sm, differentiated by weight (300 vs 700) and color (muted vs on-surface).
- **Body md (Public Sans, 16px/300, lh 1.6).** Base body text.
- **Body sm (Public Sans, 15px/300, lh 1.6).** Split-section item body paragraphs.
- **Body emphasis (Public Sans, 15px/700, lh 1.6).** Inline strong text inside item paragraphs and lede emphasis spans. Weight contrast, not italic.
- **Label (Public Sans, 13px/500, ls +0.02em).** UI labels, button text. Tracking opens slightly to aid legibility.
- **Eyebrow (JetBrains Mono, 12px/500 UPPERCASE, ls +0.08em, color: --color-accent).** Section eyebrows above H2s. Monospace family creates clear register shift from body sans. Rendered in punchy violet accent (oklch 0.74 0.22 290, ~7.2:1 vs base surface).
- **Caption (Public Sans, 12px/400, ls +0.01em).** Footnotes, microcopy.
- **Code (system `ui-monospace` fallback, 13px/400).** Token names, data labels, tabular numerics.

## Layout

Single-column, max content width **1200px**. The marketing site is content-sparse — generous vertical rhythm is part of the brand stance. Section padding defaults to `128px` top/bottom on desktop (`--section-py`), scaling to 96px at ≤1024px and 80px at ≤768px. Side gutter is 32px on desktop, 20px at ≤768px. Body sections (excluding hero, CTA, footer) get 40px side padding at ≤768px — doubling the visible margin at mobile widths.

A **4px base spacing scale** governs all paddings, gaps, and margins. The scale (xs/sm/md/lg/xl/2xl/3xl/4xl = 4/8/16/24/32/48/64/96) is provisional from the style preview; lock before component scaffolding.

Inside cards: padding `md` (16px) on dense rows, `lg` (24px) on standard cards, `xl` (32px) on emphasis specimens. Grid gap defaults to `md` (16px) for tight grids, `lg` (24px) for default card grids.

## Elevation & Depth

Elevation on dark surfaces is **primarily conveyed through lightness shift across the surface stack** — `surface` → `surface-raised` → `surface-overlay`. Shadow is reserved for elements that are *actually floating* (popovers, modals, dropdowns).

- **None.** Default. Cards, panels, and inline raised surfaces use lightness shift only.
- **shadow-sm.** Subtle. Used for hover lift on cards (when interactive) and for tooltips.
- **shadow-md.** Clear elevation. Used for modals, dialogs, popovers — anything detached from the document flow.

Heavy shadow would push the system toward the "dark sophisticated" second-order trap and is explicitly out of scope.

## Shapes

Radius follows a **clear hierarchy across component types — not a uniform value**. The system leans sharp at the small end (where precision reads as confidence) and softens at the container end (where comfort reads as containment).

- **none (0px) — Inline tags, pills, decorative dividers.** Sharp. Reads as confident, structural.
- **sm (4px) — Buttons, inputs, tooltips.** Precise. The interactive default.
- **md (8px) — Cards, panels, popovers.** Soft enough to read as a container.
- **lg (12px) — Modals, dialogs.** Distinct from cards — reads as a deliberate overlay.
- **xl (16px) — Reserved.** No default use; available for special-purpose surfaces.
- **full (9999px) — Badges, pills with content, avatars.** Specifically for circular/pill shapes.

No component uses a value outside the scale. No component uniformly applies the same radius across categories (e.g., a card and an input should not share radius).

## Components

Component tokens are intentionally minimal in v1 — only buttons and inputs are scoped, because they're the only components with meaningful per-state variation that warrants override slots. Everything else consumes semantic tokens directly.

- **Buttons.** Primary uses brand violet fill; secondary uses transparent fill with strong-border outline. Both at `rounded.sm` (4px) with `label` typography (13/500). 40px minimum height for touch target compliance.
- **Inputs.** `surface-sunken` background (one level below the page surface), default border, `rounded.sm`. Focus ring uses `border-focus` (lifted violet) with 2px stroke and 1px offset. Error state replaces the border with `error`.
- **Cards.** `surface-raised` background, 1px `border` outline, `rounded.md` (8px). Internal padding `lg` to `xl` depending on density. No default shadow.
- **Tags / pills.** `primary-container` background, `on-primary-container` text, `rounded.none` for sharp inline tags or `rounded.full` for pill badges. Uppercase eyebrow typography at `label` size (13/500, tracking +0.1em).

## Do's and Don'ts

- **Do** use the primary color sparingly — interactive elements (buttons, focus rings, primary links) and primary-container tinted backgrounds. Never on body text or large surfaces.
- **Do** maintain WCAG AA contrast (4.5:1 for normal text) at minimum. Use the on-surface ramp's first two tones (`on-surface`, `on-surface-muted`) for any body-readable text.
- **Do** rely on surface lightness shift for elevation, not drop shadow. Reserve `shadow-md` for actually-floating elements.
- **Do** express typographic hierarchy through weight and tracking variation, not size alone. Where two roles share a size, they must differ in weight or tracking.
- **Don't** use any typeface other than Public Sans (headings/body) or JetBrains Mono (eyebrows/accent). Poppins is not in the system.
- **Don't** introduce neutral grays. All neutrals must carry hue affinity to the primary (violet, 290°).
- **Don't** apply a uniform radius across components. The hierarchy (0/4/8/12) is the system; uniform 8px-everywhere would be a regression.
- **Don't** place primary text on `on-surface-faint` (4.0:1, AA large text only). It is exclusively for tertiary and disabled microcopy.
- **Don't** add a third color outside the primary/secondary/semantic system without revisiting the brief. The system is intentionally restrained.
- **Don't** ship decorative elements not described in the token system — gradients, glow effects, abstract shape backgrounds, illustrated empty states. We are explicitly avoiding the fintech-crypto and consumer-SaaS visual tropes.
