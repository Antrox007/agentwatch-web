type DotState = "working" | "waiting" | "ready";

const DOT_COLOR: Record<DotState, string> = {
  working: "var(--working)",
  waiting: "var(--waiting)",
  ready: "var(--ready)",
};

function Dot({ state, pulse }: { state: DotState; pulse?: boolean }) {
  return (
    <span
      className="h-2 w-2 shrink-0 rounded-full"
      style={{
        background: DOT_COLOR[state],
        boxShadow: `0 0 8px color-mix(in srgb, ${DOT_COLOR[state]} 60%, transparent)`,
        animation: pulse ? "pulse-dot 1.6s ease-in-out infinite" : undefined,
      }}
    />
  );
}

const visualBase = "rounded-xl bg-black/20 px-4 py-3";

export function RealtimeVisual() {
  return (
    <div className={`${visualBase} flex items-center justify-around`}>
      {(["working", "waiting", "ready"] as const).map((s) => (
        <div key={s} className="flex flex-col items-center gap-1.5">
          <Dot state={s} pulse={s === "waiting"} />
          <span className="font-[family-name:var(--font-data)] text-[9px] text-text-tertiary">
            {s}
          </span>
        </div>
      ))}
    </div>
  );
}

export function ContextPressureVisual() {
  return (
    <div className={visualBase}>
      <div className="mb-2 flex items-center justify-between">
        <span className="font-[family-name:var(--font-data)] text-[10px] text-text-tertiary">
          context
        </span>
        <span className="font-[family-name:var(--font-data)] text-[10px] text-[var(--waiting)]">
          72%
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
        <div
          className="h-full rounded-full"
          style={{ width: "72%", background: "var(--waiting)" }}
        />
      </div>
    </div>
  );
}

export function CostVisual() {
  const rows = [
    { label: "input", value: "$1.20" },
    { label: "output", value: "$3.40" },
    { label: "cache read", value: "$0.08" },
    { label: "cache write", value: "$1.34" },
  ];
  return (
    <div className={`${visualBase} font-[family-name:var(--font-data)] text-[10px]`}>
      {rows.map((r) => (
        <div key={r.label} className="flex justify-between py-0.5 text-text-tertiary">
          <span>{r.label}</span>
          <span className="text-text-secondary">{r.value}</span>
        </div>
      ))}
      <div className="mt-1 flex justify-between border-t border-white/[0.08] pt-1.5 text-text-primary">
        <span>total</span>
        <span>$6.02</span>
      </div>
    </div>
  );
}

export function SubagentTreeVisual() {
  return (
    <div className={`${visualBase} font-[family-name:var(--font-data)] text-[10px] text-text-secondary`}>
      <div className="flex items-center gap-2">
        <Dot state="working" />
        main session
      </div>
      <div className="mt-1 ml-[3px] border-l border-white/[0.12] pl-3">
        <div className="flex items-center gap-2 py-0.5">
          <Dot state="ready" />
          Explore
        </div>
        <div className="flex items-center gap-2 py-0.5">
          <Dot state="working" />
          Plan
        </div>
      </div>
    </div>
  );
}

export function SignalsVisual() {
  return (
    <div className={`${visualBase} flex items-center justify-center`}>
      <div className="glass-strong flex items-center gap-2 rounded-full px-3 py-1.5">
        <Dot state="ready" />
        <span className="font-[family-name:var(--font-data)] text-[9px] text-text-secondary">
          projects: done
        </span>
      </div>
    </div>
  );
}

export function LocalFirstVisual() {
  const paths = ["~/.claude/sessions", "~/.claude/projects"];
  return (
    <div className={`${visualBase} font-[family-name:var(--font-data)] text-[9.5px] text-text-tertiary`}>
      {paths.map((p) => (
        <div key={p} className="flex items-center gap-2 py-0.5">
          <Dot state="ready" />
          <span className="truncate">{p}</span>
          <span className="ml-auto shrink-0 text-text-secondary">read-only</span>
        </div>
      ))}
    </div>
  );
}
