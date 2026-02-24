import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 pt-24 pb-16 text-center overflow-hidden">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-[#6100FF]/[0.06]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#0075FF]/[0.04]" />
      </div>

      {/* Grid lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full border border-border/30" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full border border-border/20" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[200px] w-[200px] rounded-full border border-border/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#313549] px-4 py-1.5" style={{ backgroundColor: "#23273D" }}>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6100FF] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#6100FF]" />
          </span>
          <span className="text-xs font-medium tracking-wide text-[#A5A5A5] font-mono">
            Now accepting architecture partners
          </span>
        </div>

        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-[#F9F9F9] sm:text-5xl lg:text-6xl">
          Open Markets Exchange Governance and Access
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[#A5A5A5] sm:text-lg">
          OMEGA is neutral market infrastructure that standardizes cross-firm
          exchange APIs, centralizes governance through a participant consortium,
          and gives each participant direct control over access to its own data.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button size="lg" className="rounded-full px-7 gap-2">
            Book an Architecture Session
            <ArrowRight className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-7 border-[#313549] bg-transparent text-[#EFEFEF] hover:bg-[#23273D] hover:text-[#F9F9F9]"
          >
            Review the Technical Overview
          </Button>
        </div>
      </div>
    </section>
  );
}
