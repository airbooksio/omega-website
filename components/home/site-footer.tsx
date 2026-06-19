import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-border pt-14 pb-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/airbooks/AB-Logo_Vertical_Dark.svg"
            alt="Airbooks"
            width={37}
            height={36}
          />
          <span className="max-w-[280px] text-body-sm leading-snug text-muted-foreground">
            Better access to capital markets infrastructure.
          </span>
        </div>
        <span className="font-mono text-overline uppercase text-muted-foreground">
          © 2026 Airbooks, Inc.
        </span>
      </div>
    </footer>
  );
}
