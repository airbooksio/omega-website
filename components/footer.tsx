import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-gray-900 bg-gray-900 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-6">
          <Image
            src="/omega-logo.svg"
            alt="Omega"
            width={100}
            height={28}
          />
          <span className="hidden h-4 w-px bg-gray-800 sm:block" />
          <span className="hidden text-xs text-gray-300 sm:block">
            Open Markets Exchange Governance and Access
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-xs text-gray-300 transition-colors hover:text-gray-50"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-xs text-gray-300 transition-colors hover:text-gray-50"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-xs text-gray-300 transition-colors hover:text-gray-50"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
