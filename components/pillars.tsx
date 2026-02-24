import { ArrowRightLeft, Scale, Lock } from "lucide-react";

const pillars = [
  {
    icon: ArrowRightLeft,
    title: "Exchange",
    description:
      "One interoperable API and SDK surface for market structure and transactional workflows, so institutions integrate once instead of rebuilding bilateral interfaces.",
    details: [
      "Shared APIs and SDKs for market workflows",
      "Canonical endpoints for structured data",
      "Eliminate bilateral integration overhead",
    ],
  },
  {
    icon: Scale,
    title: "Governance",
    description:
      "A central conglomerate of market participants governs policies, data contracts, dictionaries, and reference standards to remove semantic drift across firms.",
    details: [
      "Consortium-led rulemaking and standards",
      "Policy lifecycle management",
      "Schema and reference data alignment",
    ],
  },
  {
    icon: Lock,
    title: "Access",
    description:
      "Each participant controls access to participant-owned data under shared policy semantics, with auditable, policy-driven authorization at runtime.",
    details: [
      "Participant-controlled authorization",
      "Auditable runtime decisions",
      "Shared policy semantic boundaries",
    ],
  },
];

export function Pillars() {
  return (
    <section id="pillars" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-xl">
          <p className="mb-3 text-xs font-medium tracking-widest text-muted-foreground uppercase font-mono">
            Three Pillars
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Standardize the Market Interface, Not Just the Data Store
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            OMEGA is a three-pillar platform for Exchange, Governance, and
            Access, designed to reduce fragmentation while preserving
            institutional control and compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative flex flex-col rounded-lg border border-border bg-card p-8 transition-colors hover:border-foreground/20"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-secondary">
                <pillar.icon className="size-5 text-foreground" />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {pillar.title}
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>

              <div className="mt-auto border-t border-border pt-6">
                <ul className="flex flex-col gap-3">
                  {pillar.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
