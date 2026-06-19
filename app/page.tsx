import type { Metadata } from "next";
import { ShieldCheck, Network, Landmark } from "lucide-react";
import { SiteNav } from "@/components/home/site-nav";
import { Hero } from "@/components/home/hero";
import { SplitSection } from "@/components/home/split-section";
import { Applications } from "@/components/home/applications";
import { WhyAirbooks } from "@/components/home/why-airbooks";
import { Cta } from "@/components/home/cta";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Airbooks — Access capital markets infrastructure, finally on your terms.",
  description:
    "Modern applications and an open protocol that give fixed-income teams cleaner, faster, more controllable access to the infrastructure capital markets already run on.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />

      <SplitSection
        id="problem"
        eyebrow="The Problem"
        heading="Capital markets infrastructure is gated, bundled, and built for a different era."
        lede="Capital markets teams have two options today: rent workflows from a single entrenched vendor, or build internally and watch software without market connectivity fail to gain traction. Neither is working."
        items={[
          {
            title: "Gated by a single vendor.",
            paragraphs: [
              "The incumbent bundles aging applications with the network layer the market depends on. Either you take both, or you don't get connected.",
            ],
          },
          {
            title: "You can't build your own way in.",
            paragraphs: [
              "The largest firms have built their own tools. Software without market connectivity is an island.",
            ],
          },
          {
            title: "Your own data is sold back to you.",
            paragraphs: [
              "Transaction data is surrendered to a single vendor and resold back as analytics.",
            ],
          },
        ]}
      />

      <SplitSection
        id="approach"
        eyebrow="Our Approach"
        heading="We partner with the market to open it up — not just sell into it."
        lede="We sit down with sell-side, buy-side, and issuer teams to find where access is gated, where data is leaking value, and where outcomes are slipping. Then we work shoulder-to-shoulder with you to fix it. What we measure doesn't change from engagement to engagement: the outcome on your desk."
        items={[
          {
            title: "Partnership, not procurement.",
            paragraphs: [
              "We don't sell off a shelf. Every engagement is a working relationship with your team, scoped around the access and outcomes you need. The methods flex. The relationship doesn't.",
            ],
            strong: "How we deliver is a conversation. Whether we deliver isn't.",
          },
          {
            title: "Outcomes are the deliverable.",
            paragraphs: [
              "Better access. Faster execution. Margin recovered. Data control regained. If we don't move a number that matters to your desk, we haven't done the job — regardless of what shipped to get there.",
            ],
          },
        ]}
        closing="You set the outcomes. You own the data. You keep the option to leave."
      />

      <SplitSection
        id="platform"
        eyebrow="The Open Platform"
        heading="An open access layer, by design."
        lede={
          <>
            Behind every Airbooks application is OMEGA — the Open Markets
            Exchange, Governance &amp; Access protocol.{" "}
            <span className="font-medium text-foreground">
              Access is in the name for a reason.
            </span>
          </>
        }
        items={[
          {
            icon: <ShieldCheck strokeWidth={2} />,
            title: "You control who gets access to your data.",
            paragraphs: [
              "Zero-trust by default. Granular, participant-managed access controls. No proprietary formats, no exit fees, no analytics built from your own data and sold back to you.",
            ],
          },
          {
            icon: <Network strokeWidth={2} />,
            title: "Built for interoperability.",
            paragraphs: [
              "API-first, mapped to common standards (ICMA, CDM, DTCC, MSRB). Connect any system, ingest from any source. Third parties — including your own teams — can build on top.",
            ],
          },
          {
            icon: <Landmark strokeWidth={2} />,
            title: "Governed by the market, not a vendor.",
            paragraphs: [
              "OMEGA's governance layer is designed to be run by a non-profit consortium of market participants, with default policies open to all. Shared rules, individual control, no single point of capture.",
            ],
          },
        ]}
      />

      <Applications />
      <WhyAirbooks />
      <Cta />
      <Footer />
    </main>
  );
}
