"use client";

import { useState } from "react";
import { Mascot, type MascotGrids, type MascotState } from "./Mascot";

const STATES: { key: MascotState; label: string }[] = [
  { key: "idle", label: "idle / sleeping" },
  { key: "working", label: "working / typing" },
  { key: "done", label: "done / waving" },
];

export function MascotDemo({
  title,
  accent = "var(--working)",
  paletteOverride,
  grids,
  shoulderRow,
}: {
  title: string;
  accent?: string;
  paletteOverride?: Record<string, string>;
  grids?: MascotGrids;
  shoulderRow?: number;
}) {
  const [state, setState] = useState<MascotState>("idle");

  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="text-[15px] font-semibold text-text-primary">{title}</h3>

      <div className="mt-6 flex h-[150px] items-center justify-center">
        <Mascot
          state={state}
          accent={accent}
          paletteOverride={paletteOverride}
          grids={grids}
          shoulderRow={shoulderRow}
        />
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {STATES.map((s) => (
          <button
            key={s.key}
            type="button"
            onClick={() => setState(s.key)}
            className={`rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors ${
              state === s.key
                ? "bg-white/[0.14] text-text-primary"
                : "bg-white/[0.04] text-text-tertiary hover:text-text-secondary"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}
