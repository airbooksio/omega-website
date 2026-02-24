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
        <p className="mb-8 text-center text-xs font-medium tracking-widest text-blue-300 uppercase font-mono">
          Built for
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {audiences.map((a) => (
            <div
              key={a.label}
              className="flex items-center gap-3 text-gray-300 transition-colors hover:text-gray-50"
            >
              <a.icon className="size-5 text-blue-400" />
              <span className="text-sm font-medium text-blue-200">{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
