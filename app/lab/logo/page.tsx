import {
  LogoBeacon,
  LogoBinoculars,
  LogoEye,
  LogoFlame,
  LogoLighthouse,
  LogoOwl,
  LogoPeriscope,
  LogoPill,
  LogoPulse,
  LogoRadar,
  LogoReticle,
  LogoSignal,
  LogoTerminal,
  LogoTriad,
  LogoWatchdog,
  LogoWatchtower,
  LogoWristwatch,
} from "@/components/lab/LogoIcons";

const ITEMS = [
  { label: "Eye", Icon: LogoEye, note: "\"Watch\" taken literally — a single glowing eye." },
  { label: "Radar sweep", Icon: LogoRadar, note: "Scanning, live monitoring, a sweep + blip." },
  { label: "Pulse line", Icon: LogoPulse, note: "EKG-style heartbeat — the app is alive." },
  { label: "Terminal prompt", Icon: LogoTerminal, note: "Ties directly to Claude Code's CLI identity." },
  { label: "Dynamic pill", Icon: LogoPill, note: "The product's own signature UI shape, abstracted." },
  { label: "Signal bars", Icon: LogoSignal, note: "Receiving live data from every session." },
  { label: "Owl", Icon: LogoOwl, note: "Vigilance / watching-over, geometric not cute." },
  { label: "Orbiting triad", Icon: LogoTriad, note: "The three states, watched together — uses the real status colors on purpose." },
  { label: "Reticle", Icon: LogoReticle, note: "Precision watching, a target lock." },
  { label: "Flame, refined", Icon: LogoFlame, note: "Same idea as the current emoji mark, redrawn in the new pixel/neon language." },
  { label: "Lighthouse", Icon: LogoLighthouse, note: "Watches over, warns, guides — the most literal \"watch\" structure." },
  { label: "Watchtower", Icon: LogoWatchtower, note: "A lookout structure standing guard." },
  { label: "Wristwatch", Icon: LogoWristwatch, note: "The other meaning of \"watch\" — a clock face + hands." },
  { label: "Watchdog", Icon: LogoWatchdog, note: "The idiom, and a real term for a monitoring process (\"watchdog timer\")." },
  { label: "Periscope", Icon: LogoPeriscope, note: "Watching without being seen." },
  { label: "Binoculars", Icon: LogoBinoculars, note: "The classic watching-from-a-distance tool." },
  { label: "Beacon", Icon: LogoBeacon, note: "A simpler cousin of the lighthouse — light broadcasting outward." },
];

export default function LogoLabPage() {
  return (
    <main className="min-h-dvh px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="font-[family-name:var(--font-data)] text-[11px] tracking-wide text-text-tertiary">
          internal preview — not linked from the public site
        </p>
        <h1
          className="mt-3 text-3xl font-semibold text-text-primary"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Logo lab — {ITEMS.length} app-icon concepts
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
          Replacing the current flame emoji with a real mark in the pixel
          + neon-glow style, consistent with the status icons. Deliberately
          not reusing blue/orange/green (those already mean
          working/waiting/ready) except where the concept is specifically
          about the three states together. The last seven lean into the
          word "watch" itself — both the watching-over and the timepiece
          meaning.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ label, Icon, note }) => (
            <div key={label} className="glass rounded-2xl p-6 text-center">
              <div className="flex h-20 items-center justify-center">
                <Icon size={56} />
              </div>
              <p className="mt-4 text-[15px] font-semibold text-text-primary">
                {label}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-text-secondary">
                {note}
              </p>

              <div className="mt-5 border-t border-white/[0.07] pt-4">
                <p className="mb-2 font-[family-name:var(--font-data)] text-[10px] text-text-tertiary">
                  at app-icon scale (24px)
                </p>
                <div className="glass-strong inline-flex items-center gap-2 rounded-full px-3 py-1.5">
                  <Icon size={24} />
                  <span className="font-[family-name:var(--font-data)] text-[11px] text-text-secondary">
                    AgentWatch
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
