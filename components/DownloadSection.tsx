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
            Native installers are building. Windows only, for now — ARM64
            and x64.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <span
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-6 py-3 text-sm font-medium text-text-tertiary sm:w-auto"
              aria-disabled
            >
              Download for ARM64
              <span className="font-[family-name:var(--font-data)] text-[10px] uppercase tracking-wider text-text-tertiary/80">
                soon
              </span>
            </span>
            <span
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-6 py-3 text-sm font-medium text-text-tertiary sm:w-auto"
              aria-disabled
            >
              Download for x64
              <span className="font-[family-name:var(--font-data)] text-[10px] uppercase tracking-wider text-text-tertiary/80">
                soon
              </span>
            </span>
          </div>

          <p className="mx-auto mt-8 max-w-md text-[12.5px] leading-relaxed text-text-tertiary">
            Installers ship unsigned for now — Windows SmartScreen will
            warn on first launch. Choose{" "}
            <span className="text-text-secondary">More info → Run anyway</span>{" "}
            once a build is live. Code signing is planned.
          </p>
        </div>
      </div>
    </section>
  );
}
