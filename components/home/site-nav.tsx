"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/core", label: "Omega Core" },
];

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-background/50 backdrop-blur-md backdrop-saturate-150 border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-5">
        <Link href="/" className="flex items-center" aria-label="Airbooks home">
          <Image
            src="/omega-logo-new.svg"
            alt="Airbooks"
            width={119}
            height={34}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-label font-semibold text-foreground transition-colors hover:text-foreground/70"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="outline">
              <a href="https://core.omega-markets.com/">Log in</a>
            </Button>
            <Button asChild size="sm">
              <a href="mailto:will@airbooks.io">Contact</a>
            </Button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-label font-semibold text-foreground hover:text-foreground/70"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" variant="outline" className="w-fit">
              <a href="https://core.omega-markets.com/" onClick={() => setMobileOpen(false)}>
                Log in
              </a>
            </Button>
            <Button asChild size="sm" className="w-fit">
              <a
                href="mailto:will@airbooks.io"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
