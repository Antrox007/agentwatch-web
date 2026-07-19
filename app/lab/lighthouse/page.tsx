import {
  LH01Classic,
  LH02NoBeam,
  LH03SingleBeam,
  LH04Rotating,
  LH05Pulsing,
  LH06Tall,
  LH07Stout,
  LH08Domed,
  LH09FlatTop,
  LH10Diagonal,
  LH11Outline,
  LH12RockyBase,
  LH13Minimal,
  LH14RadialGlow,
  LH15Flag,
} from "@/components/lab/LighthouseVariants";

const ITEMS = [
  { label: "01 — Classic", Icon: LH01Classic, note: "Striped tower, single faint beam, pointed roof. The baseline." },
  { label: "02 — No beam", Icon: LH02NoBeam, note: "Clean silhouette, no light cone — reads well even tiny." },
  { label: "03 — Single beam (right)", Icon: LH03SingleBeam, note: "Asymmetric, more directional/dynamic." },
  { label: "04 — Rotating beam", Icon: LH04Rotating, note: "Animated sweep around the lantern point." },
  { label: "05 — Pulsing lamp", Icon: LH05Pulsing, note: "Glow breathes at the lantern, no beam cone." },
  { label: "06 — Tall & thin", Icon: LH06Tall, note: "Elegant, exaggerated proportions." },
  { label: "07 — Short & stout", Icon: LH07Stout, note: "Chunky, bold, reads well at small sizes." },
  { label: "08 — Domed roof", Icon: LH08Domed, note: "Rounded lantern cap instead of a pointed roof." },
  { label: "09 — Flat top", Icon: LH09FlatTop, note: "No roof at all — modern, minimal lantern box." },
  { label: "10 — Diagonal stripe", Icon: LH10Diagonal, note: "One diagonal band instead of horizontal rings." },
  { label: "11 — Outline only", Icon: LH11Outline, note: "Hollow stroke tower instead of a filled silhouette." },
  { label: "12 — Rocky base", Icon: LH12RockyBase, note: "Sits on a small cliff/rock cluster." },
  { label: "13 — Minimal abstract", Icon: LH13Minimal, note: "Reduced to a triangle + a dot. Works even at 12px." },
  { label: "14 — Radial glow", Icon: LH14RadialGlow, note: "Circular halo instead of a triangular beam." },
  { label: "15 — Flag on top", Icon: LH15Flag, note: "Small pennant added for extra character." },
];

export default function LighthouseLabPage() {
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
          Lighthouse lab — {ITEMS.length} variants
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
          Same core idea, varied across proportions, beam treatment, roof
          style, stripe pattern, fill style, base, and small details.
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
