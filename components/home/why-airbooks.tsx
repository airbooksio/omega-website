const items = [
  {
    title: "Decades of operator-built expertise.",
    body: "Founded by capital markets veterans who have run the desks, built the tools, and consulted on this problem for over a decade.",
  },
  {
    title: "Open access by design, not by marketing.",
    body: "Clean off-ramps, open standards, no proprietary data formats. Our success has to come from the quality of the access we deliver — and we're fine with that.",
  },
  {
    title: "Live in the market today.",
    body: "Not slideware. Active engagements across sell-side, buy-side, and issuer teams in the municipal market, with the access layer underneath in initial deployment.",
  },
  {
    title: "Built for the AI era.",
    body: "Capital markets data in clean schemas, with real governance. The access foundation AI-driven workflows, agentic tools, and tokenized settlement need.",
  },
];

export function WhyAirbooks() {
  return (
    <section id="why-airbooks" className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <span className="mb-6 block font-mono text-overline uppercase text-primary">
          Why Airbooks
        </span>
        <h2 className="max-w-[16ch] text-heading-lg text-balance text-foreground">
          Why us, why now?
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="gradient-accent-divider pt-7">
              <h3 className="mb-2.5 text-heading-sm text-foreground">
                {item.title}
              </h3>
              <p className="text-body-sm text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
