import {
  AppleCheck,
  AppleExclaim,
  AppleEye,
  AppleGear,
  AppleLighthouse,
  ApplePulse,
  AppleRadar,
  AppleTerminal,
  AppleWatch,
} from "@/components/lab/AppleIcons";

const STATUS_ITEMS = [
  { label: "Gear — working", Icon: AppleGear, note: "Smooth continuous rotation, SF-Symbols-style teeth." },
  { label: "Checkmark — done", Icon: AppleCheck, note: "Soft spring pop-in, rounded stroke." },
  { label: "Exclamation — waiting", Icon: AppleExclaim, note: "A gentle single nudge, not a bob loop." },
];

const LOGO_ITEMS = [
  { label: "Eye", Icon: AppleEye },
  { label: "Lighthouse", Icon: AppleLighthouse },
  { label: "Watch", Icon: AppleWatch },
  { label: "Pulse", Icon: ApplePulse },
  { label: "Terminal", Icon: AppleTerminal },
  { label: "Radar", Icon: AppleRadar },
];

export default function AppleLabPage() {
  return (
    <main className="min-h-dvh px-6 py-16" style={{ background: "#e8e9ed" }}>
      <div className="mx-auto max-w-5xl">
        <p className="font-[family-name:var(--font-data)] text-[11px] tracking-wide text-neutral-500">
          internal preview — not linked from the public site
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-neutral-900">
          Apple-style icon lab
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-neutral-600">
          Dropped the pixel/neon direction entirely — squircle tile,
          gradient fill, glossy top highlight, soft drop shadow, smooth
          SF-Symbols-style glyph. Light background here on purpose, since
          this is exactly how these would sit on a home screen or in a
          system tray, not on the dark site itself.
        </p>

        <h2 className="mt-10 text-[13px] font-semibold tracking-wide text-neutral-500 uppercase">
          Status icons — what actually ships
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {STATUS_ITEMS.map(({ label, Icon, note }) => (
            <div key={label} className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="flex h-28 items-center justify-center">
                <Icon size={88} />
              </div>
              <p className="mt-4 text-[15px] font-semibold text-neutral-900">{label}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-neutral-600">{note}</p>
              <div className="mt-5 flex items-center justify-center gap-2 border-t border-neutral-100 pt-4">
                <Icon size={22} />
                <span className="text-[12px] text-neutral-500">at pill scale</span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-[13px] font-semibold tracking-wide text-neutral-500 uppercase">
          Logo concepts, same tile language
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-5 sm:grid-cols-3">
          {LOGO_ITEMS.map(({ label, Icon }) => (
            <div key={label} className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="flex h-24 items-center justify-center">
                <Icon size={80} />
              </div>
              <p className="mt-4 text-[14px] font-semibold text-neutral-900">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
