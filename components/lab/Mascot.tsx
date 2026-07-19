"use client";

import type { PixelGrid } from "./PixelSprite";
import { DONE_GRID, IDLE_GRID, LAPTOP_GRID, WORKING_GRID } from "./mascotGrids";
import { PixelSprite } from "./PixelSprite";

export type MascotState = "idle" | "working" | "done";

export type MascotGrids = {
  idle: PixelGrid;
  working: PixelGrid;
  done: PixelGrid;
};

const DEFAULT_GRIDS: MascotGrids = {
  idle: IDLE_GRID,
  working: WORKING_GRID,
  done: DONE_GRID,
};

export function Mascot({
  state,
  pixelSize = 8,
  accent = "var(--working)",
  paletteOverride,
  grids = DEFAULT_GRIDS,
  /** row (0-indexed) of the shoulder the laptop/raised-arm anchor to */
  shoulderRow = 5,
}: {
  state: MascotState;
  pixelSize?: number;
  accent?: string;
  paletteOverride?: Record<string, string>;
  grids?: MascotGrids;
  shoulderRow?: number;
}) {
  const rows = grids[state].length;
  const width = state === "working" ? 10 * pixelSize + pixelSize * 6.5 : 10 * pixelSize;

  return (
    <div className="relative" style={{ width, height: rows * pixelSize }}>
      {/* Zzz — idle only */}
      {state === "idle" && (
        <div className="pointer-events-none absolute -right-1 -top-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="absolute font-[family-name:var(--font-data)] text-[11px] font-bold text-text-tertiary"
              style={{
                animation: `mascot-float-fade 2.4s ease-in-out ${i * 0.8}s infinite`,
                right: i * 4,
              }}
            >
              z
            </span>
          ))}
        </div>
      )}

      <div
        style={{
          animation:
            state === "idle"
              ? "mascot-breathe 3.2s ease-in-out infinite"
              : state === "done"
                ? "mascot-wobble 0.9s ease-in-out 2"
                : undefined,
          transformOrigin: "50% 100%",
        }}
      >
        <PixelSprite
          grid={grids[state]}
          pixelSize={pixelSize}
          paletteOverride={paletteOverride}
        />
      </div>

      {/* laptop + typing hands — working only */}
      {state === "working" && (
        <div
          className="absolute"
          style={{ left: 9.5 * pixelSize, top: (shoulderRow + 1.5) * pixelSize }}
        >
          <PixelSprite grid={LAPTOP_GRID} pixelSize={pixelSize * 0.85} />
          <span
            className="absolute rounded-[1px]"
            style={{
              width: pixelSize * 0.6,
              height: pixelSize * 0.6,
              left: pixelSize * 0.9,
              top: pixelSize * -0.3,
              background: accent,
              animation: "mascot-bounce 0.35s ease-in-out infinite",
            }}
          />
          <span
            className="absolute rounded-[1px]"
            style={{
              width: pixelSize * 0.6,
              height: pixelSize * 0.6,
              left: pixelSize * 2.2,
              top: pixelSize * -0.3,
              background: accent,
              animation: "mascot-bounce 0.35s ease-in-out 0.17s infinite",
            }}
          />
        </div>
      )}

      {/* sparkle — done only */}
      {state === "done" && (
        <span
          className="absolute h-1.5 w-1.5 rounded-full"
          style={{
            left: 9.6 * pixelSize,
            top: -0.3 * pixelSize,
            background: "var(--ready)",
            boxShadow: "0 0 8px color-mix(in srgb, var(--ready) 70%, transparent)",
            animation: "mascot-glow 0.7s ease-in-out infinite",
          }}
        />
      )}
    </div>
  );
}
