import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative border-t border-border px-6 py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#12172B" }}
    >
      {/* Subtle purple glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-[#6100FF]/[0.06]" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-medium tracking-widest text-[#8B3DFF] uppercase font-mono">
          Get Started
        </p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          A Governed Exchange Layer for Capital Markets Interoperability
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
          OMEGA aligns institutions on one exchange contract, one governance
          process, and one access model, without requiring each firm to negotiate
          policy and schema rules bilaterally.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="rounded-full px-7 gap-2"
          >
            Book an Architecture Session
            <ArrowRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-7 border-border text-foreground hover:bg-secondary hover:text-foreground"
          >
            Review the Technical Overview
          </Button>
        </div>
      </div>
    </section>
  );
}
