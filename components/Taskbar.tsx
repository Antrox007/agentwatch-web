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

function WifiIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
    >
      <path d="M4 9a12 12 0 0 1 16 0" />
      <path d="M7.2 12.6a8 8 0 0 1 9.6 0" />
      <path d="M10.4 16a4 4 0 0 1 3.2 0" />
      <circle cx="12" cy="19" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function VolumeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10v4h3.5L12 17.5v-11L7.5 10Z" />
      <path d="M16 9.5a4 4 0 0 1 0 5" />
    </svg>
  );
}

export function Taskbar() {
  return (
    <div className="absolute inset-x-0 bottom-0 flex h-14 items-center border-t border-white/[0.08] bg-black/40 backdrop-blur-xl">
      <div className="flex flex-1 items-center justify-center gap-3">
        <StartIcon className="h-[18px] w-[18px] text-white/75" />
        <SearchIcon className="h-4 w-4 text-white/50" />
        <div className="ml-1 flex gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="h-4 w-4 rounded-[4px] bg-white/[0.14]"
            />
          ))}
        </div>
      </div>
      <div className="mr-5 hidden items-center gap-3 sm:flex">
        <WifiIcon className="h-[15px] w-[15px] text-white/45" />
        <VolumeIcon className="h-[15px] w-[15px] text-white/45" />
        <span className="font-[family-name:var(--font-data)] text-[11px] text-white/45">
          10:41
        </span>
      </div>
    </div>
  );
}
