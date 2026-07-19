import Image from "next/image";

// Fixed design canvas the whole desktop layout is authored against. Every
// position below is expressed in these pixel units, then converted to
// percentages so the canvas scales fluidly — the numbers are pixel-accurate
// against the real screenshots (captured via Playwright against the actual
// running app, see public/explainer/*.png), not eyeballed.
const CANVAS_W = 1040;
const CANVAS_H = 700;

const ISLAND_BOX = { left: 390, top: 24, width: 260, height: 107.5 };
const DASHBOARD_BOX = { left: 290, top: 190, width: 460, height: 468.5 };

type Callout = {
  id: string;
  title: string;
  body: string;
  /** Where the label block sits (canvas px). */
  label: { x: number; y: number; align: "left" | "right" };
  /** Where the leader line bends before running to the target. */
  bend: { x: number; y: number };
  /** The exact point on the screenshot being annotated (canvas px). */
  target: { x: number; y: number };
};

const CALLOUTS: Callout[] = [
  {
    id: "local",
    title: "Local-first",
    body: "Reads ~/.claude/projects directly. No server round-trip, no telemetry.",
    label: { x: 40, y: 80, align: "left" },
    bend: { x: 282, y: 80 },
    target: { x: 316, y: 213 },
  },
  {
    id: "status",
    title: "Status at a glance",
    body: "Working, waiting, ready — one glance tells you where to go next.",
    label: { x: 40, y: 290, align: "left" },
    bend: { x: 286, y: 290 },
    target: { x: 320, y: 378 },
  },
  {
    id: "context",
    title: "Context pressure",
    body: "Green to orange to red before silent auto-compaction hits.",
    label: { x: 40, y: 480, align: "left" },
    bend: { x: 352, y: 480 },
    target: { x: 435, y: 547 },
  },
  {
    id: "subagents",
    title: "Subagents",
    body: "Expand any session to see nested workflow agents, live.",
    label: { x: 1000, y: 250, align: "right" },
    bend: { x: 718, y: 250 },
    target: { x: 628, y: 359 },
  },
  {
    id: "cost",
    title: "Live cost",
    body: "Cumulative cost per session, updated in real time.",
    label: { x: 1000, y: 440, align: "right" },
    bend: { x: 700, y: 440 },
    target: { x: 639, y: 382 },
  },
];

function pct(value: number, total: number): string {
  return `${(value / total) * 100}%`;
}

function LeaderLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
      preserveAspectRatio="none"
      aria-hidden
    >
      {/* island -> dashboard connector */}
      <line
        x1={CANVAS_W / 2}
        y1={ISLAND_BOX.top + ISLAND_BOX.height}
        x2={CANVAS_W / 2}
        y2={DASHBOARD_BOX.top}
        stroke="var(--glass-border)"
        strokeWidth={1.5}
        strokeDasharray="3 4"
        vectorEffect="non-scaling-stroke"
      />
      {CALLOUTS.map((c) => (
        <g key={c.id}>
          <path
            d={`M ${c.label.align === "left" ? c.label.x + 190 : c.label.x - 10} ${c.label.y} L ${c.bend.x} ${c.bend.y} L ${c.target.x} ${c.target.y}`}
            fill="none"
            stroke="var(--glass-border)"
            strokeWidth={1.25}
            vectorEffect="non-scaling-stroke"
          />
          <circle cx={c.target.x} cy={c.target.y} r={4} fill="var(--void)" stroke="var(--working)" strokeWidth={1.5} />
        </g>
      ))}
    </svg>
  );
}

function DesktopExplainer() {
  return (
    <div
      className="relative mx-auto hidden w-full sm:block"
      style={{ maxWidth: CANVAS_W, aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}
    >
      <LeaderLines />

      <div
        className="absolute"
        style={{
          left: pct(ISLAND_BOX.left, CANVAS_W),
          top: pct(ISLAND_BOX.top, CANVAS_H),
          width: pct(ISLAND_BOX.width, CANVAS_W),
          height: pct(ISLAND_BOX.height, CANVAS_H),
        }}
      >
        <Image
          src="/explainer/island.png"
          alt="AgentWatch's always-on pill, showing four session states at a glance"
          fill
          sizes="(min-width: 640px) 260px, 0px"
          className="object-contain"
        />
      </div>

      <div
        className="absolute overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
        style={{
          left: pct(DASHBOARD_BOX.left, CANVAS_W),
          top: pct(DASHBOARD_BOX.top, CANVAS_H),
          width: pct(DASHBOARD_BOX.width, CANVAS_W),
          height: pct(DASHBOARD_BOX.height, CANVAS_H),
        }}
      >
        <Image
          src="/explainer/dashboard.png"
          alt="The real AgentWatch dashboard, showing two projects with live status, context and cost"
          fill
          sizes="(min-width: 640px) 460px, 0px"
          className="object-cover"
        />
      </div>

      {CALLOUTS.map((c) => (
        <div
          key={c.id}
          className="absolute w-[210px]"
          style={{
            left: pct(c.label.align === "left" ? c.label.x : c.label.x - 210, CANVAS_W),
            top: pct(c.label.y, CANVAS_H),
            transform: "translateY(-50%)",
            textAlign: c.label.align,
          }}
        >
          <p
            className="text-[13px] font-semibold text-text-primary"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {c.title}
          </p>
          <p className="mt-1 text-[12.5px] leading-snug text-text-secondary">{c.body}</p>
        </div>
      ))}
    </div>
  );
}

function MobileExplainer() {
  return (
    <div className="sm:hidden">
      <div className="mx-auto w-[220px]">
        <Image
          src="/explainer/island.png"
          alt="AgentWatch's always-on pill, showing four session states at a glance"
          width={987}
          height={408}
          className="h-auto w-full"
        />
      </div>
      <div className="mt-4 overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
        <Image
          src="/explainer/dashboard.png"
          alt="The real AgentWatch dashboard, showing two projects with live status, context and cost"
          width={1320}
          height={1344}
          className="h-auto w-full"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4">
        {CALLOUTS.map((c) => (
          <div key={c.id} className="glass rounded-xl p-4">
            <p
              className="text-[13px] font-semibold text-text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {c.title}
            </p>
            <p className="mt-1 text-[13px] leading-relaxed text-text-secondary">{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ExplainerVisual() {
  return (
    <section id="how-it-works" className="scroll-mt-28 px-6 pb-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 max-w-lg">
          <h2
            className="text-2xl font-semibold text-text-primary sm:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            See it in action
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
            The pill lives at the top of your screen. Click it and the
            dashboard drops down — same data, same colors, same numbers
            you&apos;ll see on your own machine.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl">
        <DesktopExplainer />
        <MobileExplainer />
      </div>
    </section>
  );
}
