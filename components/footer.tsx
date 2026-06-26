import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-6">
          <Image
            src="/omega-logo-new.svg"
            alt="Omega"
            width={98}
            height={28}
          />
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span className="hidden text-xs text-muted-foreground sm:block">
            Open Markets Exchange Governance and Access
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://core.omega-markets.com/privacy"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy
          </a>
          <a
            href="https://core.omega-markets.com/terms"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Terms
          </a>
          <a
            href="mailto:will@airbooks.io"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
