import { Package, Server, SlidersHorizontal, Code2 } from "lucide-react";

const cards = [
  {
    icon: Package,
    tag: "Full Buy",
    title: "Regional dealers, issuers, buy-side.",
    body: "Turnkey software, hosted by us, with the workflow you need covered out of the box.",
    revenue: "SaaS / per-transaction",
  },
  {
    icon: Server,
    tag: "Hybrid",
    title: "Firms that want to host themselves.",
    body: "License the same software to run inside your environment. Same product, your infrastructure, your control.",
    revenue: "License fee",
  },
  {
    icon: SlidersHorizontal,
    tag: "Hybrid",
    title: "Teams that need it tailored.",
    body: "Services-led engagement that shapes the software around your specific workflows. We work shoulder-to-shoulder with your team.",
    revenue: "Services fee",
  },
  {
    icon: Code2,
    tag: "Full Build",
    title: "Top dealers with internal tech orgs.",
    body: "Build on our APIs directly. Your engineers, our access layer.",
    revenue: "Network fees",
  },
];

export function Applications() {
  return (
    <section id="applications" className="border-t border-border px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-xl">
          <span className="mb-3 block text-overline uppercase text-primary">
            Applications
          </span>
          <h2 className="text-heading-lg text-balance text-foreground">
            Full coverage. Full spectrum.
          </h2>
          <p className="mt-4 text-body-lg text-pretty text-muted-foreground">
            From regional dealers that want it turnkey to top dealers building on
            our APIs themselves, we engage at every point on the build-vs-buy
            spectrum — so every participant in the market has a way to work with
            us.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative flex flex-col rounded-lg border border-border bg-card p-8 transition-colors transition-shadow hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <card.icon className="size-5 text-primary" />
              </div>

              <h3 className="mb-3 text-heading-sm text-foreground">
                {card.title}
              </h3>

              <p className="mb-6 text-body-sm text-muted-foreground">
                {card.body}
              </p>

              <div className="mt-auto border-t border-border pt-6">
                <span className="block text-overline uppercase text-on-primary-container">
                  {card.tag}
                </span>
                <span className="mt-1.5 block text-body-sm text-muted-foreground">
                  {card.revenue}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-[760px] text-center">
          <div className="mx-auto mb-7 h-px w-14 bg-primary" />
          <p className="text-heading-md font-normal text-balance text-foreground">
            Every participant across the build-to-buy spectrum —{" "}
            <em className="font-bold italic">
              evolving with the market as AI democratizes software.
            </em>
          </p>
        </div>
      </div>
    </section>
  );
}
