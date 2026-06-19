"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      if (bgRef.current) {
        // Drive both axes through the same `transform` property. The element
        // keeps X centered here rather than via a Tailwind `-translate-x`
        // utility (which uses the separate `translate` property and would
        // compose, shifting the eclipse off-screen after hydration).
        bgRef.current.style.transform = `translate(-50%, ${window.scrollY * -0.35}px)`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative overflow-hidden bg-card pt-36 pb-24 text-center">
      {/* Parallax eclipse */}
      <div
        ref={bgRef}
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-50%] bottom-[-50%] z-0 w-[max(200%,1728px)] bg-center bg-no-repeat"
        style={{
          aspectRatio: "1728 / 700",
          backgroundImage: "url('/airbooks/bg-eclipse-circle.svg')",
          backgroundSize: "175% 80%",
          transform: "translate(-50%, 0)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-display text-balance text-foreground">
            Access capital markets infrastructure, finally on your terms.
          </h1>
          <p className="mx-auto mt-8 mb-10 max-w-2xl text-body-lg text-pretty text-muted-foreground">
            Modern applications and an open protocol that give fixed-income teams
            cleaner, faster, more controllable access to the infrastructure
            capital markets already run on.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Button asChild size="lg">
              <a href="mailto:hello@airbooks.io">Get in touch</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#approach">See how it works</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
