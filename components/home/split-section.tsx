import type { ReactNode } from "react";

export type SplitItem = {
  icon?: ReactNode;
  title: string;
  paragraphs: ReactNode[];
  /** Emphasized closing line rendered as a block under the paragraphs. */
  strong?: string;
};

type SplitSectionProps = {
  id: string;
  eyebrow: string;
  heading: ReactNode;
  lede: ReactNode;
  items: SplitItem[];
  /** Optional closing statement appended below the right-hand list. */
  closing?: string;
};

export function SplitSection({
  id,
  eyebrow,
  heading,
  lede,
  items,
  closing,
}: SplitSectionProps) {
  return (
    <section id={id} className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[3fr_2fr] lg:gap-24">
          {/* Left anchor */}
          <div>
            <span className="mb-6 block font-mono text-overline uppercase text-primary">
              {eyebrow}
            </span>
            <h2 className="mb-7 max-w-[16ch] text-heading-lg text-balance text-foreground">
              {heading}
            </h2>
            <p className="max-w-[44ch] text-body-lg text-pretty text-muted-foreground">
              {lede}
            </p>
          </div>

          {/* Right list */}
          <div className="flex flex-col lg:pt-9">
            {items.map((item, i) => (
              <div
                key={item.title}
                className={`flex items-start gap-5 ${
                  i === 0
                    ? "pb-8"
                    : "gradient-accent-divider py-8 last:pb-0"
                }`}
              >
                {item.icon && (
                  <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-primary-container text-on-primary-container [&_svg]:size-5">
                    {item.icon}
                  </span>
                )}
                <div className="flex-1">
                  <h3 className="mb-2.5 text-heading-sm text-foreground">
                    {item.title}
                  </h3>
                  {item.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className="text-body-sm text-muted-foreground [&+p]:mt-3"
                    >
                      {p}
                    </p>
                  ))}
                  {item.strong && (
                    <strong className="mt-3.5 block text-body-sm font-semibold text-foreground">
                      {item.strong}
                    </strong>
                  )}
                </div>
              </div>
            ))}

            {closing && (
              <p className="gradient-accent-divider mt-2 max-w-[38ch] pt-10 text-body-lg font-medium text-foreground">
                {closing}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
