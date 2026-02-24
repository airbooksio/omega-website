import { ShieldCheck, Code2, FileCheck, GitBranch } from "lucide-react";

const proofs = [
  {
    icon: ShieldCheck,
    text: "Neutral governance, not vendor-defined semantics",
  },
  {
    icon: Code2,
    text: "SDK-first integration, not ad-hoc SQL coupling",
  },
  {
    icon: FileCheck,
    text: "Policy-driven authorization with auditable runtime decisions",
  },
  {
    icon: GitBranch,
    text: "Built for multi-party market workflows",
  },
];

export function ProofStrip() {
  return (
    <section id="proof" className="bg-gray-900">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
        {proofs.map((proof, i) => (
          <div
            key={i}
            className="flex items-start gap-4 border-b border-gray-950 px-6 py-8 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0 last:border-b-0"
          >
            <proof.icon className="mt-0.5 size-5 shrink-0 text-purple-500" />
            <p className="text-sm leading-relaxed text-purple-200">
              {proof.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
