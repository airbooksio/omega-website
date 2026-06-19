# Airbooks Website — Content Outline (Draft v2)

**Status:** Draft for review
**Last updated:** 2026-04
**Supersedes:** "AirBooks Website Outline & Copy (Revamped).pdf" (treat as legacy)

**Voice & copy principle:** Don't narrate the structure. Don't editorialize the substance. State the thing and trust the reader. Cut every word that's *about* the content rather than *being* the content. The audience is capital markets pros — they'll fill in "and that's bad" themselves.

---

## Strategic frame

This site has to land for two distinct visitors at once:

1. **Capital markets practitioners** evaluating tooling — sell-side syndicate desks, buy-side PMs and traders, fintech partners. They need to see real products, real workflows, a credible alternative to the entrenched stack they hate, and a low-friction path to "talk to us."
2. **Investors and strategic partners** doing diligence. They need to see a confident business strategy, a defensible wedge, real traction, and a credible team — without us splashing financials or partner names a public page shouldn't carry.

**Tone:** Confident, specific, plainspoken. We are an experienced team executing a focused thesis — not a generic "open platform" pitch and not a manifesto. Talk like operators, not vendors.

**Positioning principles (per strategy review):**

- Airbooks is the protagonist. OMEGA is one of several differentiators, not a co-hero.
- Fixed-income capital markets infrastructure is the broad positioning; muni primary is shown as the first deployment / proof point, not the whole story.
- We imply the entrenched-vendor problem without naming Ipreo / S&P Global.
- Public site is user-focused. Investor content lives on its own page with a gated "request deck" path.

---

## Sitemap (proposed)

| Path | Purpose | Primary audience |
|---|---|---|
| `/` | Home — full narrative, conversion to demo | Practitioners (primary), investors (secondary) |
| `/platform` | The open platform / how OMEGA works at a level that's still public | Practitioners, technical evaluators |
| `/products` | Product overview — Postgame, Thunderwriter Pro, Buyside Suite, Sync Bridge | Practitioners |
| `/company` | About, mission, team, leadership | Both |
| `/investors` | Investor-facing page with thesis, traction (general), partnership types, request-deck form | Investors, strategic partners |
| `/contact` | Demo request + general contact | Both |

**Decision needed:** confirm this sitemap before we go deeper than the home page draft below.

---

## 1. Navigation

**Logo:** Airbooks (note: deck uses "Airbooks", current site uses "AirBooks" — recommend standardizing on **Airbooks** to match the deck and current branding)

**Links:** Platform · Products · Company · Investors

**Primary CTA (button):** Request a Demo

---

## 2. Home Page

### 2.1 Hero

**Headline:** Capital markets infrastructure, finally on your terms.

**Sub-headline (3 variants — pick one or remix):**

- **A.** Modern workflow applications for fixed-income capital markets, built on open infrastructure you control.
- **B.** Better tools for fixed-income teams, on infrastructure that hands data control back to the market.
- **C.** Workflow software fixed-income teams have been asking for — on open infrastructure that hands data control back to the market.

(Recommendation: **A** — tightest, leads with the product/infra duality without padding.)

**Primary CTA:** Request a Demo
**Secondary link:** See how it works → (anchors to "How it works" section)

**Visual direction:** Use one of the high-level architectural diagrams from the pitch deck — likely the OMEGA-as-platform-layer view with apps stacked above and the network/governance layer below. Cleans up nicely as a hero visual and signals "real infrastructure" immediately. The buy-vs-build "Choose Your Own Adventure" spectrum diagram could also work and might be a better fit for the Approach or Why Airbooks section.

---

### 2.2 The Problem

**Section headline:** Fixed-income markets are running on infrastructure built for a different era.

**Intro paragraph:**

Capital markets teams have two options today: rent workflows from a single entrenched vendor, or build internally and watch software without market connectivity fail to gain traction. Neither is working.

**Three-card layout:**

1. **Vendor lock-in is the default.**
   The incumbent bundles aging applications with the network layer the market depends on. There's no à la carte.

2. **Internal builds can't escape it.**
   The largest firms have built their own tools. Software without market connectivity is an island.

3. **Your data isn't yours.**
   Transaction data is surrendered to a single vendor and resold back as analytics.

---

### 2.3 Our Approach

**Section headline:** Better software, on infrastructure the market can finally trust.

**Intro:**

We build the workflow applications fixed-income teams need, and the open data and governance layer underneath that hands data control back to the market.

**Two-column layout:**

**Column 1 — Workflow software that wins on its merits.**
Applications designed by people who have run the desks themselves: post-trade allocation, competitive bidding, primary calendar management, order entry, and more. The tools your team would build internally if you weren't worried about losing market connectivity. We compete on quality, not on contractual lock-in.

**Column 2 — Open infrastructure that hands control back to the market.**
Underneath the apps sits OMEGA: an API-first, governed protocol for capital markets data, built on three principles — *interoperability* through common data contracts, *data sovereignty* through participant-owned access controls, and *federated governance* by the market, not a single vendor.

**Tagline / closing line:** *You pick the apps. You own the data. You keep the option to leave.*

---

### 2.4 Products

**Section headline:** Built for the work your team actually does.

**Intro:**
Each product solves a workflow today's infrastructure has ignored or underbuilt. They run independently, integrate with existing systems, and get better on OMEGA — but don't require it.

**Product cards (4):**

**Postgame**
*Post-trade allocation, automated.*
The most manual process in the primary market — final allocation, designations, audit trail — in a single collaborative environment. Replaces spreadsheets and phone calls with a clean, auditable record.
*For: Sell-side syndicate desks, allocations, compliance.*

**Thunderwriter Pro**
*Competitive bidding management.*
The first dedicated platform for it in municipals. Project bidding levels across multiple dealers, see real-time win-probability feedback, and skip the low-conviction bids.
*For: Underwriters, competitive desks.*

**Buyside Suite**
*Primary calendar, order entry, and competitive management — built for the buy side.*
Three integrated tools: a primary market viewer; the first market-wide electronic order entry system in municipals; and a competitive bid manager. Plugs into existing OMS infrastructure.
*For: Asset managers, buy-side PMs, traders.*

**Sync Bridge**
*Don't choose between old and new.*
Real-time bridge that runs Airbooks applications alongside your existing infrastructure. Adopt OMEGA on your timeline.
*For: Any firm currently locked into legacy infrastructure.*

> **Open question for John:** the current site invents two products ("Allocate" and "Connect"). Pitch deck names the real ones above. I've drafted with the real names because they signal real progress and credibility — but flag if you want to keep abstracted names or use a different framing for any of these on the public site.

---

### 2.5 The Open Platform (OMEGA, briefly)

**Section headline:** Open infrastructure, by design.

**Intro:**
Behind every Airbooks application is OMEGA — the Open Markets Exchange, Governance & Access protocol.

**Three-feature layout:**

1. **You own and control your data.**
   Zero-trust by default. Granular, participant-managed access controls. No proprietary formats, no exit fees, no analytics built from your own data and sold back to you.

2. **Built for interoperability.**
   API-first, mapped to common standards (ICMA, CDM, DTCC, MSRB). Connect any system, ingest from any source. Third parties — including your own teams — can build on top.

3. **Governed by the market, not a vendor.**
   OMEGA's governance layer is designed to be run by a non-profit consortium of market participants, with default policies open to all. Shared rules, individual control, no single point of capture.

**Link:** Read the platform overview → `/platform`

---

### 2.6 Proof Points

**Section headline:** Starting where the pain is most acute.

**Intro:**
The $500 billion U.S. municipal primary market is our beachhead — a market locked into a single vendor where every participant agrees the status quo is broken. The playbook extends directly into corporate IG, high yield, and private credit.

**Stat strip (3 stats):**

- **$586B** — U.S. municipal issuance in 2025 (record, +14% YoY)
- **20–30 yrs** — Age of the workflow apps current participants are forced to use
- **Built for what's next** — A protocol designed for AI agents, DLT, and tokenization — not retrofitted onto legacy infrastructure

**Body:**
Airbooks's apps and OMEGA are deployed today alongside top-tier broker-dealers and electronic trading platforms in the municipal market, with active engagement across sell-side and buy-side. The model extends to adjacent fixed-income asset classes.

> **Open question for John:** I've kept partner names off the public page since the deck calls them out as still-in-progress (BofA SAFE, Tradeweb partnership). Confirm whether we can publicly say "in active deployment with major broker-dealers" or whether we need to soften further. If/when partnerships are signed and announceable, we'd add a logo strip here.

---

### 2.7 Why Airbooks

**Section headline:** Why us, why now.

**Four-card layout:**

1. **Decades of operator-built expertise.**
   Founded by capital markets veterans who have run the desks, built the tools, and consulted on this problem for over a decade.

2. **Open by design, not by marketing.**
   Clean off-ramps, open standards, no proprietary data formats. Our success has to come from the quality of our products — and we're fine with that.

3. **Real products, shipping now.**
   Not slideware. Postgame, Thunderwriter Pro, the Buyside Suite, and the Sync Bridge are deployed or production-ready today, with the protocol layer underneath in initial deployment.

4. **Built for the AI era.**
   Capital markets data in clean schemas, with real governance. The foundation AI-driven workflows, agentic tools, and tokenized settlement need.

---

### 2.8 Final CTA

**Headline (2 options):**

- **A.** See it in action.
- **B.** Talk to the team.

**Sub-headline:** Tell us about your workflow. Demos are run by someone who's actually worked a desk — not a sales rep with a script.

**Form fields:**
- Name
- Company
- Email
- Role (optional dropdown: Sell-side / Buy-side / Issuer / Vendor / Investor / Other)
- What's your biggest workflow pain? (optional text)

**Button:** Schedule My Demo

---

### 2.9 Footer

**Left column:** Airbooks logo + tagline ("Open infrastructure for fixed-income capital markets.") + © 2026 Airbooks, Inc.

**Column — Product:** Platform · Products · Postgame · Thunderwriter Pro · Buyside Suite · Sync Bridge

**Column — Company:** About · Investors · Careers · Contact

**Column — Legal:** Privacy Policy · Terms of Service · Open Source Commitment

**Social:** LinkedIn

---

## 3. Other Pages — Quick Outlines

These need their own deeper drafts; below is the structure for each.

### `/platform`
- Hero: "OMEGA — Open Markets Exchange, Governance & Access"
- The three pillars (Exchange / Governance / Access) — explain each cleanly
- Architectural diagram (use the cleaner version from the deck)
- Standards alignment (ICMA / CDM / DTCC / MSRB)
- Governance model (federated, non-profit consortium)
- Developer-friendly callouts (API-first, OpenAPI v3.1, OPA / Rego policies)
- CTA: Request technical overview

### `/products`
- Detail pages for each of the four products. Each gets:
  - Hero, problem-it-solves, screenshot, key features, integration notes, CTA
- This is also where we'd add new products as they ship.

### `/company`
- Mission and origin story (concise — one paragraph, not a manifesto)
- Leadership: Will MacPherson, Matt Hodgson — short bios
- Team strengths (without naming individuals beyond leadership)
- Press / external mentions if any
- Careers link

### `/investors`
- Headline: Building the foundational data layer for fixed-income capital markets.
- The thesis (1 paragraph): the lock-in problem, the wedge, why now, why us.
- Traction (qualitative — "active engagement with top broker-dealers and a leading electronic trading platform"; no SAFE terms, no partner names unless cleared)
- Market opportunity (general framing — fixed income TAM, beachhead → expansion logic)
- Team / advisors
- **Gated CTA:** "Request investor materials" → form (name, firm, role, email, intended use). Sends you a notification; you respond manually with the deck.

### `/contact`
- Three paths: Schedule a demo · Investor inquiries · General / press
- Direct form for each

---

## Open questions / decisions for John

1. **Sitemap** — confirm the six pages above. We could collapse `/products` into the home and skip a separate page, if you'd rather the home do the heavy lifting.
2. **Hero headline** — pick from A/B/C above (or write your own — these are starting points).
3. **Product names on the public site** — keep real names (Postgame, Thunderwriter Pro, Buyside Suite, Sync Bridge) or use abstracted ones?
4. **Brand spelling** — confirm "Airbooks" (deck) vs. "AirBooks" (current site).
5. **Partner mentions** — what's the public stance for now? "Active engagement with major broker-dealers" without names is what I've drafted. Push or pull from there.
6. **Visuals** — the current site's holographic-shape imagery should be replaced. Do you have product screenshots, brand visuals, or do we need to plan that as a follow-up?
7. **Investor page tone** — comfortable with "Request investor materials" gated form, or want a different approach (e.g. just "Contact: investors@airbooks.io")?
8. **"Sync Bridge"** — happy with that name on the public site? The deck calls it the "Ipreo Sync Bridge," but per our positioning we shouldn't name Ipreo publicly. "Sync Bridge" or "Legacy Bridge" both work — confirm.

Once we lock these in I'll do a v2 pass with cleaner copy and we can move into Framer planning.
