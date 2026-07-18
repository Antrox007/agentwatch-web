import {
  IconBell,
  IconCoin,
  IconGauge,
  IconPulse,
  IconShield,
  IconTree,
} from "./icons";

const FEATURES = [
  {
    icon: IconPulse,
    title: "Real-time, not polled",
    body: "A file watcher on ~/.claude reacts the instant a session changes state — working, waiting, or ready.",
  },
  {
    icon: IconGauge,
    title: "Context pressure",
    body: "Green to orange to red before your session hits silent auto-compaction. See it coming, not after.",
  },
  {
    icon: IconCoin,
    title: "Cost per session",
    body: "Cumulative token cost across every turn, split by input, output, cache read and cache write.",
  },
  {
    icon: IconTree,
    title: "Subagent tree",
    body: "Expand any session to see nested workflow agents — type and state, however deep they go.",
  },
  {
    icon: IconBell,
    title: "Signals, not noise",
    body: "The pill pulses and flashes on its own. Toast notifications exist, but stay off by default.",
  },
  {
    icon: IconShield,
    title: "Local-first",
    body: "Reads only local files. No telemetry, no network calls, and credentials.json is never touched.",
  },
] as const;

export function FeatureGrid() {
  return (
    <section id="features" className="scroll-mt-28 px-6 pb-28">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="glass group rounded-2xl p-6 transition-colors duration-300 hover:bg-[var(--glass-fill-strong)]"
            >
              <Icon className="text-text-secondary transition-colors duration-300 group-hover:text-working" />
              <h3
                className="mt-4 text-[15px] font-semibold text-text-primary"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {title}
              </h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-text-secondary">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
