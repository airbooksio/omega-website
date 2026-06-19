import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[55vh] flex-col items-center justify-start px-6 pt-48 pb-16 text-center overflow-hidden"
      style={{
        backgroundImage: "url('/bg-eclipse.svg')",
        backgroundPosition: "center -6rem",
        backgroundRepeat: "no-repeat",
      }}
    >
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
          <Button asChild size="lg" className="rounded-full px-7 gap-2">
            <a href="mailto:hello@airbooks.io">
              Get in touch
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-7 border-border bg-transparent text-foreground hover:bg-muted hover:text-foreground"
          >
            <a href="#approach">See how it works</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
