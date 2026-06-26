import { Building2, Landmark, TrendingUp, Network } from "lucide-react";

const audiences = [
  { icon: Landmark, label: "Banks" },
  { icon: TrendingUp, label: "Broker / Dealers" },
  { icon: Building2, label: "Investment Firms" },
  { icon: Network, label: "Market Infrastructure" },
];

export function AudienceStrip() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-center text-xs font-medium tracking-widest text-on-secondary-container uppercase">
          Built for
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {audiences.map((a) => (
            <div
              key={a.label}
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <a.icon className="size-5 text-secondary" />
              <span className="text-sm font-medium text-on-secondary-container">{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
