export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-6">
          <span className="font-mono text-sm font-medium tracking-widest text-foreground uppercase">
            OMEGA
          </span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span className="hidden text-xs text-muted-foreground sm:block">
            Open Markets Exchange Governance and Access
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
