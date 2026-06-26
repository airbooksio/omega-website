import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-start overflow-hidden px-6 pt-48 pb-16 text-center">
      {/* Maskless eclipse-circle (planet is a filled shape, not an SVG mask) so
          Safari renders it correctly. Scale/position is a first pass to tune. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/bg-eclipse-circle-nomask.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[1083px] max-w-none -translate-x-1/2 -translate-y-1/2 sm:w-[1368px] lg:w-[1520px]"
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Access capital markets infrastructure, finally on your terms.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-foreground sm:text-lg">
          Modern applications and an open protocol that give fixed-income teams
          cleaner, faster, more controllable access to the infrastructure
          capital markets already run on.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="px-7 gap-2">
            <a href="mailto:will@airbooks.io">
              Get in touch
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="px-7 border-[var(--ds-palette-neutral-850)] bg-transparent text-foreground hover:bg-muted hover:text-foreground"
          >
            <a href="#approach">See how it works</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
