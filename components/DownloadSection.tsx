import { IconGitHub } from "./icons";

const RELEASES_URL = "https://github.com/Antrox007/AgentWatch/releases/latest";

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
            Open source. Installers for x64 and ARM64 are attached to
            every release on GitHub — no separate download host.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href={RELEASES_URL}
              className="flex items-center justify-center gap-2.5 rounded-full border border-white/[0.14] bg-white/[0.08] px-7 py-3.5 text-sm font-medium text-text-primary transition-colors hover:bg-white/[0.14]"
            >
              <IconGitHub className="h-[18px] w-[18px]" />
              View releases on GitHub
            </a>
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
