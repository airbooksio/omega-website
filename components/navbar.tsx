"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="font-mono text-sm font-medium tracking-widest text-foreground uppercase">
            OMEGA
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#pillars"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Platform
          </a>
          <a
            href="#proof"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Principles
          </a>
          <a
            href="#cta"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
          <Button size="sm" className="rounded-full px-5">
            Book a Session
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            <a
              href="#pillars"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Platform
            </a>
            <a
              href="#proof"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Principles
            </a>
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Contact
            </a>
            <Button
              size="sm"
              className="rounded-full w-fit px-5"
              onClick={() => setMobileOpen(false)}
            >
              Book a Session
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
