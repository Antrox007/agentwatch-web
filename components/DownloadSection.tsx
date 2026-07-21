import { CopyPrompt } from "./CopyPrompt";

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
            Already have Claude Code open? Paste this and it&apos;ll fetch and
            install the right build for your machine.
          </p>

          <div className="mx-auto mt-7 max-w-lg">
            <CopyPrompt />
          </div>

          <p className="mx-auto mt-8 max-w-md text-[12.5px] leading-relaxed text-text-tertiary">
            Installers ship unsigned — depending on how it&apos;s launched,
            Windows SmartScreen may still warn on first run. Choose{" "}
            <span className="text-text-secondary">More info → Run anyway</span>.
            The source is public — see the GitHub link above if you&apos;d
            rather build it yourself or grab the installer manually.
          </p>
        </div>
      </div>
    </section>
  );
}
