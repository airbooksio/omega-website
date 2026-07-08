import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section id="cta" className="px-6 pb-24 lg:pb-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border bg-card px-6 py-24 text-center lg:py-32">
        {/* Maskless glow SVG. bg-eclipse-circle.svg uses an SVG <mask> that
            Safari mis-renders (even via <img>); this asset is filters-only and
            renders correctly across browsers (same one the homepage CTA uses). */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/airbooks/gradient-bg-1.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 size-full object-cover opacity-60"
        />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-medium tracking-widest text-primary uppercase">
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
            className="px-7 gap-2"
          >
            Book an Architecture Session
            <ArrowRight className="size-4" />
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="px-7 border-[var(--ds-palette-neutral-850)] bg-transparent text-foreground hover:bg-muted hover:text-foreground"
          >
            <a href="https://core.omega-markets.com">Review the Technical Overview</a>
          </Button>
        </div>
      </div>
      </div>
    </section>
  );
}
