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
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-850 px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-700" />
          </span>
          <span className="text-xs font-medium tracking-wide text-purple-200 font-mono">
            Now accepting architecture partners
          </span>
        </div>

        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-gray-50 sm:text-5xl lg:text-6xl">
          Open Markets Exchange Governance and Access
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-gray-100 sm:text-lg">
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
            className="rounded-full px-7 border-gray-800 bg-transparent text-gray-100 hover:bg-gray-850 hover:text-gray-50"
          >
            Review the Technical Overview
          </Button>
        </div>
      </div>
    </section>
  );
}
