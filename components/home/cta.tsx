import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="px-6 pb-24 lg:pb-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border bg-card px-6 py-24 text-center lg:py-32">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/airbooks/gradient-bg-1.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 size-full object-cover opacity-55"
        />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="mx-auto max-w-[18ch] text-heading-lg text-balance text-foreground">
            Better access starts with a conversation.
          </h2>
          <p className="mx-auto mt-6 mb-10 max-w-[580px] text-body-lg text-pretty text-muted-foreground">
            Tell us where access is gated, where data&apos;s leaking value, or
            where outcomes are slipping. We&apos;ll come to you.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-on-primary-container"
          >
            <a href="mailto:hello@airbooks.io">Get in touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
