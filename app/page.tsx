import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AudienceStrip } from "@/components/audience-strip";
import { ProofStrip } from "@/components/proof-strip";
import { Pillars } from "@/components/pillars";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AudienceStrip />
      <ProofStrip />
      <Pillars />
      <CtaSection />
      <Footer />
    </main>
  );
}
