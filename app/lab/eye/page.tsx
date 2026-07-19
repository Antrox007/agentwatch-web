import {
  EY01Classic,
  EY02Round,
  EY03Slit,
  EY04Wide,
  EY05Sleepy,
  EY06Lens,
  EY07Diamond,
  EY08Reptile,
  EY09Radar,
  EY10Crosshair,
  EY11Blink,
  EY12Scanning,
  EY13GemFrame,
  EY14BadgeFrame,
  EY15Bullseye,
} from "@/components/lab/EyeVariants";

const ITEMS = [
  { label: "01 — Classic almond", Icon: EY01Classic, note: "Baseline almond shape, simple dot pupil." },
  { label: "02 — Perfectly round", Icon: EY02Round, note: "Full circle, not tapered — softer, rounder." },
  { label: "03 — Narrow slit", Icon: EY03Slit, note: "Cat-eye, mostly-closed band." },
  { label: "04 — Wide & alert", Icon: EY04Wide, note: "Bigger, more open, with a brow line above." },
  { label: "05 — Sleepy / half-lid", Icon: EY05Sleepy, note: "Calm, mostly-closed watching." },
  { label: "06 — Camera lens", Icon: EY06Lens, note: "Mechanical, concentric aperture rings." },
  { label: "07 — Diamond / angular", Icon: EY07Diamond, note: "Straight edges, no curves at all." },
  { label: "08 — Reptile slit-pupil", Icon: EY08Reptile, note: "Round iris, vertical slit pupil." },
  { label: "09 — Radar scan", Icon: EY09Radar, note: "A rotating sweep line inside the eye." },
  { label: "10 — Crosshair pupil", Icon: EY10Crosshair, note: "A \"+\" instead of a dot — precision watching." },
  { label: "11 — Blinking", Icon: EY11Blink, note: "Animated — periodically closes and reopens." },
  { label: "12 — Scanning pupil", Icon: EY12Scanning, note: "Animated — the pupil looks left and right." },
  { label: "13 — Gem frame", Icon: EY13GemFrame, note: "Eye set inside a diamond/gem outline." },
  { label: "14 — Badge frame", Icon: EY14BadgeFrame, note: "Eye set inside a coin/seal ring." },
  { label: "15 — Bullseye pupil", Icon: EY15Bullseye, note: "Concentric ring pupil instead of a dot." },
];

export default function EyeLabPage() {
  return (
    <main className="min-h-dvh px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="font-[family-name:var(--font-data)] text-[11px] tracking-wide text-text-tertiary">
          internal preview — not linked from the public site
        </p>
        <h1
          className="mt-3 text-3xl font-semibold text-text-primary"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Eye lab — {ITEMS.length} variants
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
          Varied across overall shape, pupil style, framing, and a couple
          of animated ones.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ label, Icon, note }) => (
            <div key={label} className="glass rounded-2xl p-6 text-center">
              <div className="flex h-20 items-center justify-center">
                <Icon size={56} />
              </div>
              <p className="mt-4 text-[15px] font-semibold text-text-primary">
                {label}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-text-secondary">
                {note}
              </p>

              <div className="mt-5 border-t border-white/[0.07] pt-4">
                <p className="mb-2 font-[family-name:var(--font-data)] text-[10px] text-text-tertiary">
                  at app-icon scale (24px)
                </p>
                <div className="glass-strong inline-flex items-center gap-2 rounded-full px-3 py-1.5">
                  <Icon size={24} />
                  <span className="font-[family-name:var(--font-data)] text-[11px] text-text-secondary">
                    AgentWatch
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
