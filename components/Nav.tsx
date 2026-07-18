export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-6 pt-5">
      <nav className="glass flex w-full max-w-3xl items-center justify-between rounded-full px-5 py-2.5">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-working shadow-[0_0_8px_color-mix(in_srgb,var(--working)_65%,transparent)]" />
          <span
            className="text-[14px] font-semibold tracking-tight text-text-primary"
            style={{ fontFamily: "var(--font-display)" }}
          >
            AgentWatch
          </span>
        </a>
        <div className="flex items-center gap-6">
          <a
            href="#features"
            className="hidden text-[13px] text-text-secondary transition-colors hover:text-text-primary sm:block"
          >
            Features
          </a>
          <a
            href="#architecture"
            className="hidden text-[13px] text-text-secondary transition-colors hover:text-text-primary sm:block"
          >
            Architecture
          </a>
          <a
            href="#download"
            className="rounded-full bg-white/[0.08] px-4 py-1.5 text-[13px] font-medium text-text-primary transition-colors hover:bg-white/[0.14]"
          >
            Get it
          </a>
        </div>
      </nav>
    </header>
  );
}
