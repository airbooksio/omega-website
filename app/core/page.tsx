import type { Metadata } from "next";
import { SiteNav } from "@/components/home/site-nav";
import { Hero } from "@/components/hero";
import { AudienceStrip } from "@/components/audience-strip";
import { ProofStrip } from "@/components/proof-strip";
import { Pillars } from "@/components/pillars";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: { absolute: "Omega Core — Open Markets Exchange, Governance & Access" },
  description:
    "Neutral market infrastructure that standardizes cross-firm exchange APIs, centralizes governance, and gives each participant direct control over access to its data.",
  alternates: { canonical: "/core" },
};

export default function CorePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <AudienceStrip />
      <ProofStrip />
      <Pillars />
      <CtaSection />
      <Footer />
    </main>
  );
}
