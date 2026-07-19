import {
  AppleCheck,
  AppleEye,
  AppleExclaim,
  AppleGear,
  AppleLighthouse,
  ApplePulse,
  AppleRadar,
  AppleTerminal,
  AppleWatch,
} from "@/components/lab/AppleIcons";

const ROWS = [
  { icon: AppleGear, project: "storefront", branch: "feature/checkout", label: "arbeitet", tokens: "24.1k", cost: "$0.31" },
  { icon: AppleExclaim, project: "billing-api", branch: "main", label: "wartet auf Eingabe", tokens: "128.4k", cost: "$2.14" },
  { icon: AppleCheck, project: "agentwatch", branch: "main", label: "bereit", tokens: "342.9k", cost: "$6.02" },
];

const LOGOS = [
  { label: "Eye", Icon: AppleEye },
  { label: "Lighthouse", Icon: AppleLighthouse },
  { label: "Watch", Icon: AppleWatch },
  { label: "Pulse", Icon: ApplePulse },
  { label: "Terminal", Icon: AppleTerminal },
  { label: "Radar", Icon: AppleRadar },
];

export default function BridgeLabPage() {
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
          Apple icons, inside the actual site
        </h1>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-text-secondary">
          Dropped the squircle tile entirely — it read as a foreign
          home-screen element pasted onto the page. These are bare
          SF-Symbols-style glyphs (smooth curves, rounded caps, no pixel
          grid) with only a soft color glow, same treatment as the site's
          existing dots and icons, just with real shape instead of a
          plain circle.
        </p>

        {/* the actual pill, with bare Apple-style glyphs instead of dots */}
        <div className="relative mt-12 overflow-hidden rounded-3xl px-6 py-16">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 60% at 30% 20%, color-mix(in srgb, var(--working) 22%, transparent), transparent 70%), radial-gradient(50% 50% at 75% 70%, color-mix(in srgb, var(--ready) 18%, transparent), transparent 70%), var(--void)",
            }}
          />
          <div className="relative flex justify-center">
            <div className="glass-strong flex items-center gap-4 rounded-[28px] px-5 py-3">
              <AppleGear size={26} />
              <AppleExclaim size={26} />
              <AppleCheck size={26} />
            </div>
          </div>
        </div>

        {/* a dashboard-style session list, same tiles at row scale */}
        <div className="glass mt-8 rounded-3xl p-1.5 shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
          <div className="rounded-[20px] bg-[var(--panel)]/70 px-5 py-4 sm:px-7 sm:py-6">
            <div className="mb-5 text-sm font-medium text-text-secondary">
              Sessions
            </div>
            <div className="flex flex-col divide-y divide-white/[0.06]">
              {ROWS.map((row) => (
                <div key={row.project} className="flex items-center gap-4 py-4">
                  <row.icon size={34} animate={false} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-text-primary">
                      {row.project}
                      <span className="ml-2 font-[family-name:var(--font-data)] text-[11px] text-text-tertiary">
                        {row.branch}
                      </span>
                    </p>
                    <p className="text-xs text-text-secondary">{row.label}</p>
                  </div>
                  <div className="text-right">
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

        <p className="mx-auto mt-6 max-w-xl text-center text-[13px] leading-relaxed text-text-secondary">
          Same signature colors as the rest of the site, same soft glow
          language as the existing dots — just an actual gear/check/
          exclamation shape instead of a plain circle.
        </p>

        {/* the main icon / logo — shown where 🔥 currently sits, in the
            app's actual dashboard title bar */}
        <h2
          className="mt-16 text-2xl font-semibold text-text-primary"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Main icon, same title bar
        </h2>
        <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-text-secondary">
          Where the flame emoji sits today, next to the wordmark.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {LOGOS.map(({ label, Icon }) => (
            <div key={label} className="glass rounded-2xl px-5 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon size={20} />
                  <span className="text-[15px] font-semibold text-text-primary">
                    AgentWatch
                  </span>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-0.5 font-[family-name:var(--font-data)] text-[10px] text-text-tertiary">
                  DEMO
                </span>
              </div>
              <p className="mt-3 text-[12px] text-text-tertiary">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
