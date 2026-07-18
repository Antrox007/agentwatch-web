type Pressure = "green" | "orange" | "red";

type Row = {
  project: string;
  branch: string;
  status: "working" | "waiting" | "ready";
  subagents: number;
  context: number;
  pressure: Pressure;
  tokens: string;
  cost: string;
};

const ROWS: Row[] = [
  {
    project: "desert-front",
    branch: "feature/checkout",
    status: "ready",
    subagents: 1,
    context: 18,
    pressure: "green",
    tokens: "24.1k",
    cost: "$0.31",
  },
  {
    project: "solid-rings-theme",
    branch: "main",
    status: "working",
    subagents: 2,
    context: 63,
    pressure: "orange",
    tokens: "128.4k",
    cost: "$2.14",
  },
  {
    project: "agentwatch",
    branch: "main",
    status: "waiting",
    subagents: 3,
    context: 86,
    pressure: "red",
    tokens: "342.9k",
    cost: "$6.02",
  },
];

const STATUS_LABEL: Record<Row["status"], string> = {
  working: "working",
  waiting: "waiting for input",
  ready: "ready",
};

const STATUS_COLOR: Record<Row["status"], string> = {
  working: "var(--working)",
  waiting: "var(--waiting)",
  ready: "var(--ready)",
};

const PRESSURE_COLOR: Record<Pressure, string> = {
  green: "var(--ready)",
  orange: "var(--waiting)",
  red: "#ff453a",
};

export function DashboardMockup() {
  return (
    <section className="px-6 pb-28">
      <div className="glass mx-auto max-w-4xl rounded-3xl p-1.5 shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
        <div className="rounded-[20px] bg-[var(--panel)]/70 px-5 py-4 sm:px-7 sm:py-6">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-sm font-medium text-text-secondary">
              Sessions
            </span>
            <span className="flex items-center gap-2 font-[family-name:var(--font-data)] text-[11px] tracking-wide text-text-tertiary">
              <span
                className="h-1.5 w-1.5 rounded-full bg-[var(--ready)]"
                style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
              />
              LIVE · file watcher
            </span>
          </div>

          <div className="flex flex-col divide-y divide-white/[0.06]">
            {ROWS.map((row) => (
              <div
                key={row.project}
                className="grid grid-cols-2 items-center gap-x-4 gap-y-2 py-4 sm:grid-cols-[1.4fr_0.9fr_1.3fr_0.7fr_0.7fr]"
              >
                <div className="col-span-2 flex items-center gap-2.5 sm:col-span-1">
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{
                      background: STATUS_COLOR[row.status],
                      boxShadow: `0 0 8px color-mix(in srgb, ${STATUS_COLOR[row.status]} 60%, transparent)`,
                    }}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-text-primary">
                      {row.project}
                    </p>
                    <p className="truncate font-[family-name:var(--font-data)] text-[11px] text-text-tertiary">
                      {row.branch}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-text-secondary">
                  {STATUS_LABEL[row.status]}
                </p>

                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-full min-w-16 overflow-hidden rounded-full bg-white/[0.07]">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${row.context}%`,
                        background: PRESSURE_COLOR[row.pressure],
                      }}
                    />
                  </div>
                  <span className="font-[family-name:var(--font-data)] text-[11px] text-text-tertiary">
                    {row.context}%
                  </span>
                </div>

                <p className="font-[family-name:var(--font-data)] text-[11px] text-text-secondary">
                  {row.subagents} sub
                </p>

                <div className="text-right sm:text-left">
                  <p className="font-[family-name:var(--font-data)] text-xs text-text-secondary">
                    {row.tokens}
                  </p>
                  <p className="font-[family-name:var(--font-data)] text-[11px] text-text-tertiary">
                    {row.cost}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="mx-auto mt-4 max-w-4xl px-1 font-[family-name:var(--font-data)] text-[11px] text-text-tertiary">
        Illustrative — AgentWatch reads only your local session files, never sends this data anywhere.
      </p>
    </section>
  );
}
