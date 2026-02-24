import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative border-t border-gray-800 bg-gray-900 px-6 py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: "url('/bg-eclipse-circle.svg')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "80rem 80rem",
      }}
    >
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-medium tracking-widest text-purple-500 uppercase font-mono">
          Get Started
        </p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-gray-50 sm:text-4xl">
          A Governed Exchange Layer for Capital Markets Interoperability
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-gray-300">
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
            className="rounded-full px-7 border-gray-800 bg-transparent text-gray-100 hover:bg-gray-850 hover:text-gray-50"
          >
            Review the Technical Overview
          </Button>
        </div>
      </div>
    </section>
  );
}
