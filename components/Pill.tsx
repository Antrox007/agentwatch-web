"use client";

import { useEffect, useState } from "react";

type DotState = "working" | "waiting" | "ready" | "idle";

type Frame = {
  dots: DotState[];
  caption: string | null;
};

const SCRIPT: Frame[] = [
  { dots: ["working", "working", "idle"], caption: null },
  { dots: ["working", "waiting", "idle"], caption: "agentwatch — waiting for input" },
  { dots: ["working", "waiting", "idle"], caption: null },
  { dots: ["working", "ready", "idle"], caption: "desert-front — done, 3 files changed" },
  { dots: ["working", "working", "ready"], caption: null },
];

const DOT_COLOR: Record<DotState, string> = {
  working: "var(--working)",
  waiting: "var(--waiting)",
  ready: "var(--ready)",
  idle: "rgba(255,255,255,0.18)",
};

export function Pill() {
  const [frame, setFrame] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) return;
    const id = setInterval(() => {
      setFrame((f) => (f + 1) % SCRIPT.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  const current = SCRIPT[reduced ? 0 : frame];
  const expanded = Boolean(current.caption);

  const dots = (
    <div className="flex items-center gap-3">
      {current.dots.map((state, i) => (
        <span
          key={i}
          className="relative flex h-3 w-3 items-center justify-center"
        >
          <span
            className="block h-3 w-3 rounded-full"
            style={{
              background: DOT_COLOR[state],
              animation:
                !reduced && state === "waiting"
                  ? "pulse-dot 1.4s ease-in-out infinite"
                  : undefined,
              boxShadow:
                state !== "idle"
                  ? `0 0 12px color-mix(in srgb, ${DOT_COLOR[state]} 65%, transparent)`
                  : undefined,
            }}
          />
        </span>
      ))}
    </div>
  );

  return (
    // Sizer reserves the tallest/widest (expanded) footprint so the pill's own
    // grow/shrink animation never pushes surrounding page content — both
    // children are stacked in the same grid cell (row 1 / col 1).
    <div className="grid justify-items-center">
      <div
        aria-hidden
        className="invisible col-start-1 row-start-1 flex w-[19rem] flex-col items-center rounded-[28px] px-5 py-3"
      >
        {dots}
        <p className="mt-2 whitespace-nowrap text-[11px]">reserved</p>
      </div>

      <div
        className={`glass-strong col-start-1 row-start-1 flex flex-col items-center self-start rounded-[28px] px-5 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.45)] transition-[width,padding] duration-500 ease-out ${
          expanded ? "w-[19rem]" : "w-[9.5rem]"
        }`}
        role="img"
        aria-label="AgentWatch live status pill showing session states"
      >
        {dots}
        {expanded && (
          <p className="mt-2 whitespace-nowrap font-[family-name:var(--font-data)] text-[11px] tracking-tight text-text-secondary animate-rise">
            {current.caption}
          </p>
        )}
      </div>
    </div>
  );
}
