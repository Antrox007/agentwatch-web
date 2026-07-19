import { MascotDemo } from "@/components/lab/MascotDemo";
import {
  ROUND_DONE,
  ROUND_IDLE,
  ROUND_WORKING,
  VISOR_DONE,
  VISOR_IDLE,
  VISOR_WORKING,
} from "@/components/lab/robotGrids";

const RECOLOR_PALETTE = {
  h: "#4a5568",
  b: "#c7cdd6",
  bd: "#9aa1ac",
  s: "#2d3340",
  sd: "#1c2028",
  k: "#0e1015",
  e: "var(--working)",
};

const VISOR_GRIDS = { idle: VISOR_IDLE, working: VISOR_WORKING, done: VISOR_DONE };
const ROUND_GRIDS = { idle: ROUND_IDLE, working: ROUND_WORKING, done: ROUND_DONE };

export default function LabPage() {
  return (
    <main className="min-h-dvh px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <p className="font-[family-name:var(--font-data)] text-[11px] tracking-wide text-text-tertiary">
          internal preview — not linked from the public site
        </p>
        <h1
          className="mt-3 text-3xl font-semibold text-text-primary"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Mascot lab — robot direction
        </h1>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-text-secondary">
          Three robot takes on a per-session character to replace the plain
          status dots. Click the buttons under each one to step through
          idle → working → done.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <MascotDemo
            title="A — Visor Bot"
            grids={VISOR_GRIDS}
            shoulderRow={6}
            accent="var(--working)"
          />
          <MascotDemo
            title="B — Round Bot"
            grids={ROUND_GRIDS}
            shoulderRow={6}
            accent="var(--ready)"
          />
          <MascotDemo title="C — Simple Bot" paletteOverride={RECOLOR_PALETTE} />
        </div>

        <div className="glass mt-8 rounded-2xl p-6 text-left text-[13px] leading-relaxed text-text-secondary">
          <p className="font-semibold text-text-primary">The three takes</p>
          <ul className="mt-2 list-disc space-y-1 pl-4">
            <li>
              <span className="text-text-primary">A — Visor Bot</span> —
              blocky head, antenna, a single glowing horizontal visor
              instead of eyes. Reads as more "machine," less "face."
            </li>
            <li>
              <span className="text-text-primary">B — Round Bot</span> —
              rounder dome head, antenna ball, two separate round glowing
              eyes. Friendlier, more approachable.
            </li>
            <li>
              <span className="text-text-primary">C — Simple Bot</span> —
              the original human rig, just recolored metal grey. Cheapest
              to build, least distinctly "robot."
            </li>
          </ul>
          <p className="mt-4">
            All three share the same animated states: closed
            visor/eyes + floating &quot;z&quot;s while idle, a small laptop
            with bouncing typing dots while working, a raised arm with a
            couple of wobble swings + spark when done. Once you pick a
            direction this still needs to be ported into the actual
            Tauri/React app — this is only the website's preview.
          </p>
        </div>
      </div>
    </main>
  );
}
