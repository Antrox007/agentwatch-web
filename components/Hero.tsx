import { Pill } from "./Pill";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-40 pb-28 sm:pt-48 sm:pb-36">
      <div
        className="glow-field"
        style={{
          background:
            "radial-gradient(38% 55% at 22% 30%, color-mix(in srgb, var(--working) 55%, transparent), transparent 70%), radial-gradient(32% 45% at 78% 20%, color-mix(in srgb, var(--waiting) 45%, transparent), transparent 70%), radial-gradient(30% 45% at 55% 60%, color-mix(in srgb, var(--ready) 40%, transparent), transparent 70%)",
          animation: "drift 18s ease-in-out infinite",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="animate-rise">
          <Pill />
        </div>

        <h1
          className="mt-10 text-balance text-[2.75rem] leading-[1.05] font-semibold tracking-tight text-text-primary animate-rise sm:text-6xl"
          style={{ fontFamily: "var(--font-display)", animationDelay: "0.08s" }}
        >
          Every Claude Code session,
          <br />
          <span className="text-text-secondary">watched live.</span>
        </h1>

        <p
          className="mt-6 max-w-xl text-balance text-[1.0625rem] leading-relaxed text-text-secondary animate-rise sm:text-lg"
          style={{ animationDelay: "0.16s" }}
        >
          A dynamic island for your terminal. Status, context pressure,
          token cost and rate limits for every running agent — on Windows,
          read-only, without a single background poll.
        </p>

        <div
          className="mt-9 flex flex-col items-center gap-3 animate-rise sm:flex-row"
          style={{ animationDelay: "0.24s" }}
        >
          <a
            href="#download"
            className="glass-strong rounded-full px-6 py-3 text-sm font-medium text-text-primary transition-transform duration-300 hover:scale-[1.03] hover:bg-[var(--glass-fill-strong)]"
          >
            Get AgentWatch
          </a>
          <a
            href="#architecture"
            className="rounded-full px-6 py-3 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
          >
            How it works →
          </a>
        </div>

        <p
          className="mt-5 font-[family-name:var(--font-data)] text-xs tracking-wide text-text-tertiary animate-rise"
          style={{ animationDelay: "0.3s" }}
        >
          Windows · ARM64 &amp; x64 · local-first · no telemetry
        </p>
      </div>
    </section>
  );
}
