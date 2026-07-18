const COLUMNS = [
  {
    label: "Backend",
    tag: "Rust · Tauri 2",
    lines: [
      "notify file watcher on ~/.claude/sessions",
      "sysinfo process liveness check",
      "Transcript parser + snapshot aggregator",
      "Tray icon, notifications, statusline bridge",
    ],
  },
  {
    label: "Frontend",
    tag: "React · TypeScript · Vite",
    lines: [
      "Dark dashboard rendering live snapshots",
      "\"Dynamic Island\" pill — separate always-on-top window",
      "Anchored flyout, not a floating window",
      "Renders only what the backend already computed",
    ],
  },
  {
    label: "Data sources",
    tag: "read-only",
    lines: [
      "~/.claude/sessions/<pid>.json — live status",
      "~/.claude/projects/*.jsonl — tokens, model, branch",
      "*/subagents/*.meta.json — nested agent state",
      "statusline output — rate limit, opt-in",
    ],
  },
] as const;

export function Architecture() {
  return (
    <section id="architecture" className="scroll-mt-28 px-6 pb-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 max-w-lg">
          <h2
            className="text-2xl font-semibold text-text-primary sm:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Native, and nothing else
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
            No server, no daemon phoning home. A Rust core watches your
            filesystem; a thin React shell renders what it finds.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.label} className="glass rounded-2xl p-6">
              <div className="flex items-baseline justify-between">
                <h3
                  className="text-[15px] font-semibold text-text-primary"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {col.label}
                </h3>
              </div>
              <p className="mt-1 font-[family-name:var(--font-data)] text-[11px] tracking-wide text-text-tertiary">
                {col.tag}
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.lines.map((line) => (
                  <li
                    key={line}
                    className="border-t border-white/[0.06] pt-2.5 text-[13px] leading-relaxed text-text-secondary first:border-t-0 first:pt-0"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
