export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-[family-name:var(--font-data)] text-[11px] text-text-tertiary">
          AgentWatch · v0.1.0 · local-first, no telemetry
        </p>
        <p className="text-[12px] text-text-tertiary">
          Windows variant of{" "}
          <a
            href="https://github.com/ingo-eichhorst/Irrlicht"
            className="text-text-secondary underline decoration-white/20 underline-offset-2 transition-colors hover:text-text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Irrlicht
          </a>
        </p>
      </div>
    </footer>
  );
}
