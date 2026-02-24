import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section
      id="cta"
      className="border-t border-border bg-primary px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-medium tracking-widest text-primary-foreground/60 uppercase font-mono">
          Get Started
        </p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
          A Governed Exchange Layer for Capital Markets Interoperability
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-primary-foreground/70">
          OMEGA aligns institutions on one exchange contract, one governance
          process, and one access model, without requiring each firm to negotiate
          policy and schema rules bilaterally.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full px-7 gap-2"
          >
            Book an Architecture Session
            <ArrowRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-7 border-primary-foreground/20 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            Review the Technical Overview
          </Button>
        </div>
      </div>
    </section>
  );
}
