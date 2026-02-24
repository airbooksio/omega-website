"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled 
        ? 'bg-gray-950/90 backdrop-blur-md border-b border-gray-800' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center">
          <Image
            src="/omega-logo.svg"
            alt="Omega"
            width={120}
            height={34}
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#pillars"
            className="text-sm text-gray-300 transition-colors hover:text-gray-50"
          >
            Platform
          </a>
          <a
            href="#proof"
            className="text-sm text-gray-300 transition-colors hover:text-gray-50"
          >
            Principles
          </a>
          <a
            href="#cta"
            className="text-sm text-gray-300 transition-colors hover:text-gray-50"
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
          className="md:hidden text-gray-50"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={`px-6 pb-6 md:hidden transition-colors duration-300 ${
          isScrolled 
            ? 'border-t border-gray-800 bg-gray-950' 
            : 'border-t border-gray-800/20 bg-gray-950/50 backdrop-blur-md'
        }`}>
          <div className="flex flex-col gap-4 pt-4">
            <a
              href="#pillars"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-gray-300 hover:text-gray-50"
            >
              Platform
            </a>
            <a
              href="#proof"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-gray-300 hover:text-gray-50"
            >
              Principles
            </a>
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-gray-300 hover:text-gray-50"
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
