# Airbooks Framer Website — Project Notes

## Critical lesson learned

**Always recommend approaches you will actually be good at.**

When working with visual design tools (Framer, Webflow, etc.), DO NOT default to using the tool's XML/JSON layer unless there is no better option. The XML abstraction introduces an interpretation layer between what you write and what renders — you cannot model this reliably, and visual errors compound silently.

**The right approach for Framer: TSX code components.**
Write each page section as a proper React/TSX code component using `createCodeFile`/`updateCodeFile`. This is essentially HTML + CSS-in-JS, which you reason about accurately. The output is deterministic — what you write is exactly what renders. Insert completed components into the page via `insertUrl`.

This is always better than pushing Framer XML layers for complex, styled content.

## Project context

- Airbooks is a **capital markets data company** (fixed income, bond markets). Not aviation, not airlines.
- Design system: dark only, Public Sans + JetBrains Mono, violet primary (#7008e7 / oklch 0.44 0.27 290)
- Reference design: `high-fidelity/index.html` — use this as ground truth for all visual decisions
- Content spec: `single-page-content-spec.md`

## Framer project

- Page: `/` (nodeId: IilknqsQI, Desktop frame: IhsBlG76f)
- Design page: "Airbooks Components" (nodeId: iJNFICARj)
- Code components: AirbooksLogo.tsx (DeJiBFR), EclipseBackground.tsx (X7Cl0DJ)
