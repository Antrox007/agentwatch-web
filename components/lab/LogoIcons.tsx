// Ten genuinely distinct app-icon/logo concepts, same pixel-art + neon-glow
// language as the status icons, but deliberately NOT using the three status
// colors (blue/orange/green already mean "working/waiting/ready") — each
// gets its own signature color so the logo reads as "the app," not "a
// state."

function neonGlow(color: string, tight = 1) {
  return `drop-shadow(0 0 ${0.75 * tight}px ${color}) drop-shadow(0 0 ${2 * tight}px ${color}) drop-shadow(0 0 ${4.5 * tight}px color-mix(in srgb, ${color} 65%, transparent))`;
}

function PixelCircle({
  cx,
  cy,
  rOuter,
  rInner,
  fill,
  opacity,
}: {
  cx: number;
  cy: number;
  rOuter: number;
  rInner: number;
  fill: string;
  opacity?: number;
}) {
  const capH = rOuter - rInner;
  return (
    <g fill={fill} opacity={opacity}>
      <rect x={cx - rOuter} y={cy - rInner} width={rOuter * 2} height={rInner * 2} />
      <rect x={cx - rInner} y={cy - rOuter} width={rInner * 2} height={capH} />
      <rect x={cx - rInner} y={cy + rInner} width={rInner * 2} height={capH} />
    </g>
  );
}

const BG = "#0a0d18";

function Frame({
  size,
  color,
  tight = 1,
  children,
}: {
  size: number;
  color: string;
  tight?: number;
  children: React.ReactNode;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      shapeRendering="crispEdges"
      style={{ filter: neonGlow(color, tight) }}
    >
      {children}
    </svg>
  );
}

// 1. Eye — "Watch" taken literally.
export function LogoEye({ size = 48 }: { size?: number }) {
  const c = "#a78bfa";
  return (
    <Frame size={size} color={c}>
      <rect x="10" y="11" width="12" height="2" fill={c} />
      <rect x="6" y="13" width="20" height="6" fill={c} />
      <rect x="10" y="19" width="12" height="2" fill={c} />
      <PixelCircle cx={16} cy={16} rOuter={4} rInner={2.2} fill={BG} />
      <rect x="15" y="15" width="2" height="2" fill={c} />
    </Frame>
  );
}

// 2. Radar sweep — scanning / monitoring.
export function LogoRadar({ size = 48 }: { size?: number }) {
  const c = "#22d3ee";
  return (
    <Frame size={size} color={c}>
      {/* ring = big filled circle with a smaller background-filled circle
          punched on top — PixelCircle alone only ever fills solid */}
      <PixelCircle cx={16} cy={16} rOuter={13} rInner={11} fill={c} />
      <PixelCircle cx={16} cy={16} rOuter={9.5} rInner={7.5} fill={BG} />
      <rect x="15" y="15" width="2" height="2" fill={c} />
      <polygon points="16,16 16,3 23,7" fill={c} opacity="0.6" />
      <rect x="23" y="8" width="2.5" height="2.5" fill={c} />
    </Frame>
  );
}

// 3. Pulse line — live-activity monitor (EKG style).
export function LogoPulse({ size = 48 }: { size?: number }) {
  const c = "#f472b6";
  return (
    <Frame size={size} color={c}>
      <polyline
        points="2,17 9,17 12,9 16,25 19,17 23,17 26,11 30,17"
        fill="none"
        stroke={c}
        strokeWidth="2.6"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </Frame>
  );
}

// 4. Terminal prompt — Claude Code / CLI identity.
export function LogoTerminal({ size = 48 }: { size?: number }) {
  const c = "#e5e7eb";
  return (
    <Frame size={size} color={c}>
      <polyline
        points="6,9 15,16 6,23"
        fill="none"
        stroke={c}
        strokeWidth="3.2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <rect x="17" y="21" width="10" height="3" fill={c} />
    </Frame>
  );
}

// 5. Dynamic island pill — the product's own signature shape, abstracted.
export function LogoPill({ size = 48 }: { size?: number }) {
  const c = "#a78bfa";
  return (
    <Frame size={size} color={c} tight={0.9}>
      <rect x="4" y="12" width="24" height="8" rx="4" fill="none" stroke={c} strokeWidth="2.4" />
      <circle cx="12" cy="16" r="2" fill="var(--working)" />
      <circle cx="20" cy="16" r="2" fill="var(--ready)" />
    </Frame>
  );
}

// 6. Signal bars — receiving live data from your sessions.
export function LogoSignal({ size = 48 }: { size?: number }) {
  const c = "#22d3ee";
  return (
    <Frame size={size} color={c}>
      <rect x="5" y="20" width="4" height="6" fill={c} />
      <rect x="12" y="15" width="4" height="11" fill={c} />
      <rect x="19" y="9" width="4" height="17" fill={c} />
      <rect x="26" y="4" width="4" height="22" fill={c} opacity="0.5" />
    </Frame>
  );
}

// 7. Owl — vigilance / watching-over mascot, kept minimal-geometric.
export function LogoOwl({ size = 48 }: { size?: number }) {
  const c = "#fbbf24";
  return (
    <Frame size={size} color={c}>
      {/* ear tufts poke out above the head silhouette, not overlapping it */}
      <polygon points="6,10 11,10 6,2" fill={c} />
      <polygon points="26,10 21,10 26,2" fill={c} />
      <PixelCircle cx={16} cy={19} rOuter={11} rInner={7} fill={c} />
      <PixelCircle cx={10.5} cy={18} rOuter={4.5} rInner={2.5} fill={BG} />
      <PixelCircle cx={21.5} cy={18} rOuter={4.5} rInner={2.5} fill={BG} />
      <circle cx="10.5" cy="18" r="1.8" fill={c} />
      <circle cx="21.5" cy="18" r="1.8" fill={c} />
      <polygon points="14,22 18,22 16,26" fill={c} />
    </Frame>
  );
}

// 8. Orbiting triad — the three states, watched together (uses the real
// status colors on purpose — this one IS about the states as a set).
export function LogoTriad({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" shapeRendering="crispEdges">
      <g style={{ filter: neonGlow("var(--working)") }}>
        <circle cx="16" cy="7" r="3.4" fill="var(--working)" />
      </g>
      <g style={{ filter: neonGlow("var(--waiting)") }}>
        <circle cx="25.5" cy="22.5" r="3.4" fill="var(--waiting)" />
      </g>
      <g style={{ filter: neonGlow("var(--ready)") }}>
        <circle cx="6.5" cy="22.5" r="3.4" fill="var(--ready)" />
      </g>
    </svg>
  );
}

// 9. Reticle — precision-watching / target lock.
export function LogoReticle({ size = 48 }: { size?: number }) {
  const c = "#e5e7eb";
  return (
    <Frame size={size} color={c}>
      <PixelCircle cx={16} cy={16} rOuter={13} rInner={11.5} fill={c} />
      <PixelCircle cx={16} cy={16} rOuter={10} rInner={8.5} fill={BG} />
      <PixelCircle cx={16} cy={16} rOuter={7} rInner={5.5} fill={c} />
      <PixelCircle cx={16} cy={16} rOuter={4} rInner={2.5} fill={BG} />
      <rect x="15" y="15" width="2" height="2" fill={c} />
      <rect x="14" y="0" width="4" height="4" fill={c} />
      <rect x="14" y="28" width="4" height="4" fill={c} />
      <rect x="0" y="14" width="4" height="4" fill={c} />
      <rect x="28" y="14" width="4" height="4" fill={c} />
    </Frame>
  );
}

// 10. Flame, refined — continuity with the current app mark, redrawn in
// the new pixel/neon language instead of the flat emoji.
export function LogoFlame({ size = 48 }: { size?: number }) {
  const c = "#fb7185";
  return (
    <Frame size={size} color={c}>
      <polygon
        points="16,3 21,12 26,18 23,27 9,27 6,18 11,12 13,17 15,10"
        fill={c}
      />
      <polygon points="16,14 19,19 17,25 12,25 11,19 14,17" fill="#fde68a" opacity="0.85" />
    </Frame>
  );
}

// --- Round 2: concepts tied to the word "watch" itself (watching-over AND
// the timepiece meaning), not just "monitoring" in the abstract. ---

// 11. Lighthouse — watches over, warns, guides. The most literal "watch"
// structure there is.
export function LogoLighthouse({ size = 48 }: { size?: number }) {
  const c = "#38bdf8";
  return (
    <Frame size={size} color={c}>
      <polygon points="16,3 21,8 11,8" fill={c} />
      <rect x="13" y="8" width="6" height="2" fill={c} />
      <rect x="11" y="10" width="10" height="4" fill={c} />
      <rect x="13" y="14" width="6" height="14" fill={c} />
      <rect x="13" y="18" width="6" height="3" fill={BG} />
      <rect x="13" y="23" width="6" height="3" fill={BG} />
      <polygon points="9,28 23,28 21,31 11,31" fill={c} />
      <polygon points="11,12 1,6 1,11" fill={c} opacity="0.45" />
    </Frame>
  );
}

// 12. Watchtower — a lookout structure standing guard.
export function LogoWatchtower({ size = 48 }: { size?: number }) {
  const c = "#38bdf8";
  return (
    <Frame size={size} color={c}>
      <polygon points="9,30 23,30 19,13 13,13" fill={c} />
      <rect x="9" y="5" width="14" height="9" fill={c} />
      <rect x="13" y="8" width="6" height="4" fill={BG} />
      <rect x="8" y="4" width="16" height="2" fill={c} />
    </Frame>
  );
}

// 13. Wristwatch — the other meaning of "watch," a clock face + hands.
export function LogoWristwatch({ size = 48 }: { size?: number }) {
  const c = "#38bdf8";
  return (
    <Frame size={size} color={c}>
      <rect x="13" y="1" width="6" height="5" fill={c} />
      <rect x="13" y="26" width="6" height="5" fill={c} />
      <PixelCircle cx={16} cy={16} rOuter={10} rInner={7} fill={c} />
      <PixelCircle cx={16} cy={16} rOuter={7.5} rInner={5} fill={BG} />
      <rect x="15" y="10" width="2" height="7" fill={c} />
      <rect x="16" y="15" width="6" height="2" fill={c} />
      <rect x="29" y="14" width="2" height="4" fill={c} />
    </Frame>
  );
}

// 14. Watchdog — the idiom, and a real term for a monitoring process
// ("watchdog timer"). Double meaning on purpose.
export function LogoWatchdog({ size = 48 }: { size?: number }) {
  const c = "#38bdf8";
  return (
    <Frame size={size} color={c}>
      <polygon points="6,4 13,10 6,13" fill={c} />
      <polygon points="26,4 19,10 26,13" fill={c} />
      <PixelCircle cx={16} cy={19} rOuter={8} rInner={5} fill={c} />
      <rect x="12" y="23" width="8" height="5" rx="2" fill={c} />
      <circle cx="16" cy="27" r="1.4" fill={BG} />
      <circle cx="12" cy="18" r="1.5" fill={BG} />
      <circle cx="20" cy="18" r="1.5" fill={BG} />
    </Frame>
  );
}

// 15. Periscope — watching without being seen.
export function LogoPeriscope({ size = 48 }: { size?: number }) {
  const c = "#38bdf8";
  return (
    <Frame size={size} color={c}>
      <rect x="11" y="27" width="10" height="3" fill={c} />
      <rect x="14" y="12" width="4" height="16" fill={c} />
      <rect x="14" y="6" width="12" height="4" fill={c} />
      <PixelCircle cx={24} cy={5} rOuter={3.5} rInner={2} fill={c} />
    </Frame>
  );
}

// 16. Binoculars — the classic watching-from-a-distance tool.
export function LogoBinoculars({ size = 48 }: { size?: number }) {
  const c = "#38bdf8";
  return (
    <Frame size={size} color={c}>
      <rect x="8" y="10" width="16" height="5" fill={c} />
      <PixelCircle cx={10.5} cy={19} rOuter={6.5} rInner={4.5} fill={c} />
      <PixelCircle cx={21.5} cy={19} rOuter={6.5} rInner={4.5} fill={c} />
      <PixelCircle cx={10.5} cy={19} rOuter={3} rInner={1.6} fill={BG} />
      <PixelCircle cx={21.5} cy={19} rOuter={3} rInner={1.6} fill={BG} />
    </Frame>
  );
}

// 17. Beacon — a simpler cousin of the lighthouse: a light broadcasting
// outward, no tower structure needed.
export function LogoBeacon({ size = 48 }: { size?: number }) {
  const c = "#38bdf8";
  return (
    <Frame size={size} color={c}>
      <rect x="12" y="29" width="8" height="2" fill={c} />
      <rect x="15" y="18" width="2" height="11" fill={c} />
      {/* two actual ring bands (fill + BG-punch, same technique as the
          radar/reticle icons) around the lamp, not overlapping translucent
          discs — those just merged into one blob under the glow filter */}
      <PixelCircle cx={16} cy={11} rOuter={10} rInner={8.5} fill={c} opacity={0.35} />
      <PixelCircle cx={16} cy={11} rOuter={7.5} rInner={6} fill={BG} />
      <PixelCircle cx={16} cy={11} rOuter={6} rInner={4.5} fill={c} opacity={0.55} />
      <PixelCircle cx={16} cy={11} rOuter={4} rInner={3} fill={BG} />
      <PixelCircle cx={16} cy={11} rOuter={3} rInner={1.8} fill={c} />
    </Frame>
  );
}
