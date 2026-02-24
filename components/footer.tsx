import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-[#313549] px-6 py-12" style={{ backgroundColor: "#0D1123" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-6">
          <Image
            src="/omega-logo.svg"
            alt="Omega"
            width={100}
            height={28}
          />
          <span className="hidden h-4 w-px bg-[#313549] sm:block" />
          <span className="hidden text-xs text-[#A5A5A5] sm:block">
            Open Markets Exchange Governance and Access
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-xs text-[#A5A5A5] transition-colors hover:text-[#F9F9F9]"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-xs text-[#A5A5A5] transition-colors hover:text-[#F9F9F9]"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-xs text-[#A5A5A5] transition-colors hover:text-[#F9F9F9]"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
