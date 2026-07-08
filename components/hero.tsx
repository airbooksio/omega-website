import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[55vh] flex-col items-center justify-start overflow-hidden px-6 pt-48 pb-16 text-center">
      {/* Maskless eclipse — full-width in Safari (masked SVG was confined). */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/bg-eclipse-nomask.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-6rem] z-0 w-[1040px] max-w-none -translate-x-1/2 sm:w-[1382px] lg:w-[1728px]"
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-xs font-medium tracking-wide text-on-primary-container">
            Now accepting architecture partners
          </span>
        </div>

        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Open Markets Exchange Governance and Access
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-foreground sm:text-lg">
          OMEGA is neutral market infrastructure that standardizes cross-firm
          exchange APIs, centralizes governance through a participant consortium,
          and gives each participant direct control over access to its own data.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button size="lg" className="px-7 gap-2">
            Book an Architecture Session
            <ArrowRight className="size-4" />
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="px-7 border-[var(--ds-palette-neutral-850)] bg-transparent text-foreground hover:bg-muted hover:text-foreground"
          >
            <a href="https://core.omega-markets.com">Review the Technical Overview</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
