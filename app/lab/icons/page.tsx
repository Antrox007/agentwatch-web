import { CheckIcon, ExclaimIcon, GearIcon } from "@/components/lab/PreciseIcons";

const ITEMS = [
  {
    label: "Gear",
    state: "working",
    Icon: GearIcon,
    note: "Continuous rotation while a session is actively processing.",
  },
  {
    label: "Checkmark",
    state: "done / ready",
    Icon: CheckIcon,
    note: "Gentle float once a session finishes.",
  },
  {
    label: "Exclamation mark",
    state: "waiting for input",
    Icon: ExclaimIcon,
    note: "Gentle float while a session needs your attention.",
  },
];

export default function IconLabPage() {
  return (
    <main className="min-h-dvh px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="font-[family-name:var(--font-data)] text-[11px] tracking-wide text-text-tertiary">
          internal preview — not linked from the public site
        </p>
        <h1
          className="mt-3 text-3xl font-semibold text-text-primary"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Icon lab — v2, precise shapes
        </h1>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-text-secondary">
          Back to exactly the three you asked for, built as exact SVG
          geometry instead of hand-guessed pixel grids — that's what made
          the last batch not actually read as their shapes. Large version
          for review, small version at roughly the real pill scale.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {ITEMS.map(({ label, state, Icon, note }) => (
            <div key={label} className="glass rounded-2xl p-6 text-center">
              <div className="flex h-20 items-center justify-center">
                <Icon size={56} />
              </div>
              <p className="mt-4 text-[15px] font-semibold text-text-primary">
                {label}
              </p>
              <p className="mt-0.5 font-[family-name:var(--font-data)] text-[11px] tracking-wide text-text-tertiary">
                {state}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-text-secondary">
                {note}
              </p>

              <div className="mt-5 border-t border-white/[0.07] pt-4">
                <p className="mb-2 font-[family-name:var(--font-data)] text-[10px] text-text-tertiary">
                  at pill scale (18px)
                </p>
                <div className="glass-strong inline-flex items-center gap-2 rounded-full px-3 py-1.5">
                  <Icon size={18} />
                  <span className="font-[family-name:var(--font-data)] text-[11px] text-text-secondary">
                    agentwatch
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
