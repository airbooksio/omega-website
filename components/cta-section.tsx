import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative border-t border-[#313549] px-6 py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#12172B" }}
    >
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-medium tracking-widest text-[#8B3DFF] uppercase font-mono">
          Get Started
        </p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-[#F9F9F9] sm:text-4xl">
          A Governed Exchange Layer for Capital Markets Interoperability
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-[#A5A5A5]">
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
            className="rounded-full px-7 border-[#313549] bg-transparent text-[#EFEFEF] hover:bg-[#23273D] hover:text-[#F9F9F9]"
          >
            Review the Technical Overview
          </Button>
        </div>
      </div>
    </section>
  );
}
