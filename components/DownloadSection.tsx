const RELEASES_BASE = "https://github.com/Antrox007/AgentWatch/releases/latest/download";

const DOWNLOADS = [
  { label: "Download for x64", href: `${RELEASES_BASE}/AgentWatch-x64-setup.exe` },
  { label: "Download for ARM64", href: `${RELEASES_BASE}/AgentWatch-arm64-setup.exe` },
] as const;

export function DownloadSection() {
  return (
    <section id="download" className="scroll-mt-28 px-6 pb-32">
      <div className="glass-strong relative mx-auto max-w-2xl overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-14">
        <div
          className="glow-field"
          style={{
            background:
              "radial-gradient(45% 60% at 50% 0%, color-mix(in srgb, var(--working) 40%, transparent), transparent 70%)",
          }}
          aria-hidden
        />
        <div className="relative">
          <h2
            className="text-2xl font-semibold text-text-primary sm:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get AgentWatch
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-text-secondary">
            Open source, built straight from{" "}
            <a
              href="https://github.com/Antrox007/AgentWatch"
              className="text-text-primary underline decoration-white/25 underline-offset-2 hover:decoration-white/60"
            >
              GitHub
            </a>
            . Windows only, for now — x64 and ARM64.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {DOWNLOADS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.08] px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-white/[0.14] sm:w-auto"
              >
                {label}
              </a>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-md text-[12.5px] leading-relaxed text-text-tertiary">
            Installers ship unsigned — Windows SmartScreen will warn on
            first launch. Choose{" "}
            <span className="text-text-secondary">More info → Run anyway</span>.
            The source is public, so you can build it yourself instead.
          </p>
        </div>
      </div>
    </section>
  );
}
