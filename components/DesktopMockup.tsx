import { Pill } from "./Pill";

function StartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.3" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.3" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.3" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.3" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
    >
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-3.7-3.7" />
    </svg>
  );
}

export function DesktopMockup() {
  return (
    <div className="mx-auto w-full max-w-[25rem]">
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
        <div
          className="relative h-[184px] sm:h-[208px]"
          style={{
            background:
              "linear-gradient(160deg, #0c1a30 0%, #142238 45%, #0a1120 100%)",
          }}
        >
          {/* faint hints of other open windows behind the pill */}
          <div className="absolute left-[7%] top-[26%] h-16 w-[36%] rounded-lg bg-white/[0.045]" />
          <div className="absolute right-[8%] top-[34%] h-20 w-[32%] rounded-lg bg-white/[0.05]" />

          {/* the real Pill component, anchored top-center — exactly where it
              lives as an always-on-top window on an actual Windows desktop */}
          <div className="absolute inset-x-0 top-3 flex origin-top scale-[0.82] justify-center sm:scale-90">
            <Pill />
          </div>

          {/* simplified Windows 11 taskbar for context */}
          <div className="absolute inset-x-0 bottom-0 flex h-9 items-center justify-center gap-2.5 border-t border-white/[0.07] bg-black/35 backdrop-blur-md">
            <StartIcon className="h-3.5 w-3.5 text-white/60" />
            <SearchIcon className="h-3 w-3 text-white/45" />
            <div className="ml-1 flex gap-1.5">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="h-3 w-3 rounded-[3px] bg-white/[0.12]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center font-[family-name:var(--font-data)] text-[10.5px] tracking-wide text-text-tertiary">
        pinned to the top of your screen, above everything else
      </p>
    </div>
  );
}
