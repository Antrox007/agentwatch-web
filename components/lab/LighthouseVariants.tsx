// 15 genuinely distinct takes on the lighthouse concept — varying
// proportions, beam treatment, roof style, stripe pattern, fill style,
// base, and small added details. Same pixel/neon language as the rest.

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
const C = "#38bdf8";

function Frame({
  size,
  color = C,
  tight = 1,
  style,
  children,
}: {
  size: number;
  color?: string;
  tight?: number;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      shapeRendering="crispEdges"
      style={{ filter: neonGlow(color, tight), ...style }}
    >
      {children}
    </svg>
  );
}

// 1. Classic — striped tower, symmetric-ish single beam, pointed roof.
export function LH01Classic({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <polygon points="16,3 21,8 11,8" fill={C} />
      <rect x="13" y="8" width="6" height="2" fill={C} />
      <rect x="11" y="10" width="10" height="4" fill={C} />
      <rect x="13" y="14" width="6" height="14" fill={C} />
      <rect x="13" y="18" width="6" height="3" fill={BG} />
      <rect x="13" y="23" width="6" height="3" fill={BG} />
      <polygon points="9,28 23,28 21,31 11,31" fill={C} />
      <polygon points="11,12 1,6 1,11" fill={C} opacity={0.45} />
    </Frame>
  );
}

// 2. No beam — clean silhouette, no light cone at all.
export function LH02NoBeam({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <polygon points="16,3 21,8 11,8" fill={C} />
      <rect x="13" y="8" width="6" height="2" fill={C} />
      <rect x="11" y="10" width="10" height="4" fill={C} />
      <rect x="13" y="14" width="6" height="14" fill={C} />
      <rect x="13" y="18" width="6" height="3" fill={BG} />
      <rect x="13" y="23" width="6" height="3" fill={BG} />
      <polygon points="9,28 23,28 21,31 11,31" fill={C} />
    </Frame>
  );
}

// 3. Single beam, right side only — asymmetric, directional.
export function LH03SingleBeam({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <polygon points="16,3 21,8 11,8" fill={C} />
      <rect x="13" y="8" width="6" height="2" fill={C} />
      <rect x="11" y="10" width="10" height="4" fill={C} />
      <rect x="13" y="14" width="6" height="14" fill={C} />
      <rect x="13" y="18" width="6" height="3" fill={BG} />
      <rect x="13" y="23" width="6" height="3" fill={BG} />
      <polygon points="9,28 23,28 21,31 11,31" fill={C} />
      <polygon points="21,12 31,6 31,11" fill={C} opacity={0.5} />
    </Frame>
  );
}

// 4. Rotating beam — animated sweep around the lantern point.
export function LH04Rotating({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <polygon points="16,3 21,8 11,8" fill={C} />
      <rect x="13" y="8" width="6" height="2" fill={C} />
      <rect x="11" y="10" width="10" height="4" fill={C} />
      <rect x="13" y="14" width="6" height="14" fill={C} />
      <rect x="13" y="18" width="6" height="3" fill={BG} />
      <rect x="13" y="23" width="6" height="3" fill={BG} />
      <polygon points="9,28 23,28 21,31 11,31" fill={C} />
      <g style={{ transformOrigin: "16px 12px", animation: "icon-spin 3s linear infinite" }}>
        <polygon points="16,12 30,8 30,16" fill={C} opacity={0.45} />
      </g>
    </Frame>
  );
}

// 5. Pulsing lamp — glow breathes, no directional beam.
export function LH05Pulsing({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <polygon points="16,3 21,8 11,8" fill={C} />
      <rect x="13" y="8" width="6" height="2" fill={C} />
      <g style={{ transformOrigin: "16px 12px", animation: "icon-pulse-scale 1.4s ease-in-out infinite" }}>
        <rect x="11" y="10" width="10" height="4" fill={C} />
      </g>
      <rect x="13" y="14" width="6" height="14" fill={C} />
      <rect x="13" y="18" width="6" height="3" fill={BG} />
      <rect x="13" y="23" width="6" height="3" fill={BG} />
      <polygon points="9,28 23,28 21,31 11,31" fill={C} />
    </Frame>
  );
}

// 6. Tall & thin — elegant, exaggerated proportions.
export function LH06Tall({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <polygon points="16,1 19,5 13,5" fill={C} />
      <rect x="14" y="5" width="4" height="2" fill={C} />
      <rect x="12.5" y="7" width="7" height="3" fill={C} />
      <rect x="14" y="10" width="4" height="18" fill={C} />
      <rect x="14" y="14" width="4" height="2.5" fill={BG} />
      <rect x="14" y="19" width="4" height="2.5" fill={BG} />
      <rect x="14" y="24" width="4" height="2.5" fill={BG} />
      <polygon points="11,28 21,28 19,31 13,31" fill={C} />
      <polygon points="12.5,8.5 2,3 2,8" fill={C} opacity={0.45} />
    </Frame>
  );
}

// 7. Short & stout — chunky, bold.
export function LH07Stout({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <polygon points="16,7 22,12 10,12" fill={C} />
      <rect x="9" y="12" width="14" height="5" fill={C} />
      <rect x="10" y="17" width="12" height="11" fill={C} />
      <rect x="10" y="20" width="12" height="3" fill={BG} />
      <rect x="10" y="25" width="12" height="3" fill={BG} />
      <polygon points="7,28 25,28 22,31 10,31" fill={C} />
      <polygon points="9,15 1,10 1,15" fill={C} opacity={0.45} />
    </Frame>
  );
}

// 8. Domed roof — rounded lantern cap instead of a pointed triangle.
export function LH08Domed({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <PixelCircle cx={16} cy={7} rOuter={5} rInner={3} fill={C} />
      <rect x="11" y="10" width="10" height="4" fill={C} />
      <rect x="13" y="14" width="6" height="14" fill={C} />
      <rect x="13" y="18" width="6" height="3" fill={BG} />
      <rect x="13" y="23" width="6" height="3" fill={BG} />
      <polygon points="9,28 23,28 21,31 11,31" fill={C} />
      <polygon points="11,12 1,6 1,11" fill={C} opacity={0.45} />
    </Frame>
  );
}

// 9. Flat top — no roof at all, modern/minimal lantern box.
export function LH09FlatTop({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <rect x="10" y="6" width="12" height="8" fill={C} />
      <rect x="13" y="8" width="6" height="4" fill={BG} />
      <rect x="13" y="14" width="6" height="14" fill={C} />
      <rect x="13" y="18" width="6" height="3" fill={BG} />
      <rect x="13" y="23" width="6" height="3" fill={BG} />
      <polygon points="9,28 23,28 21,31 11,31" fill={C} />
    </Frame>
  );
}

// 10. Diagonal stripe — a single diagonal band instead of horizontal rings.
export function LH10Diagonal({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <polygon points="16,3 21,8 11,8" fill={C} />
      <rect x="13" y="8" width="6" height="2" fill={C} />
      <rect x="11" y="10" width="10" height="4" fill={C} />
      <rect x="13" y="14" width="6" height="14" fill={C} />
      <polygon points="14.5,14 19,14 15,28 13,28" fill={BG} />
      <polygon points="9,28 23,28 21,31 11,31" fill={C} />
    </Frame>
  );
}

// 11. Outline only — hollow stroke tower instead of a filled silhouette.
export function LH11Outline({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size} tight={0.85}>
      <polygon points="16,3 21,8 11,8" fill="none" stroke={C} strokeWidth="1.6" strokeLinejoin="miter" />
      <rect x="11" y="10" width="10" height="4" fill="none" stroke={C} strokeWidth="1.6" />
      <rect x="13" y="14" width="6" height="14" fill="none" stroke={C} strokeWidth="1.6" />
      <polygon points="9,28 23,28 21,31 11,31" fill="none" stroke={C} strokeWidth="1.6" strokeLinejoin="miter" />
    </Frame>
  );
}

// 12. Rocky base — sits on a small cliff/rock cluster instead of a flare.
export function LH12RockyBase({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <polygon points="16,3 21,8 11,8" fill={C} />
      <rect x="13" y="8" width="6" height="2" fill={C} />
      <rect x="11" y="10" width="10" height="4" fill={C} />
      <rect x="13" y="14" width="6" height="12" fill={C} />
      <rect x="13" y="18" width="6" height="3" fill={BG} />
      <polygon points="6,31 10,24 14,27 16,22 19,27 23,24 27,31" fill={C} />
      <polygon points="11,12 1,6 1,11" fill={C} opacity={0.45} />
    </Frame>
  );
}

// 13. Minimal abstract — reduced to a triangle + a dot, works even tiny.
export function LH13Minimal({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <circle cx="16" cy="8" r="3" fill={C} />
      <polygon points="16,13 24,30 8,30" fill={C} />
    </Frame>
  );
}

// 14. Soft radial glow — a circular halo instead of a triangular beam cone.
export function LH14RadialGlow({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <PixelCircle cx={16} cy={12} rOuter={11} rInner={9} fill={C} opacity={0.25} />
      <polygon points="16,3 21,8 11,8" fill={C} />
      <rect x="13" y="8" width="6" height="2" fill={C} />
      <rect x="11" y="10" width="10" height="4" fill={C} />
      <rect x="13" y="14" width="6" height="14" fill={C} />
      <rect x="13" y="18" width="6" height="3" fill={BG} />
      <rect x="13" y="23" width="6" height="3" fill={BG} />
      <polygon points="9,28 23,28 21,31 11,31" fill={C} />
    </Frame>
  );
}

// 15. Flag on top — small pennant added for extra character.
export function LH15Flag({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <rect x="15" y="0" width="1.4" height="4" fill={C} />
      <polygon points="16.4,0.5 21,2 16.4,3.5" fill={C} opacity={0.7} />
      <polygon points="16,5 21,10 11,10" fill={C} />
      <rect x="13" y="10" width="6" height="2" fill={C} />
      <rect x="11" y="12" width="10" height="4" fill={C} />
      <rect x="13" y="16" width="6" height="12" fill={C} />
      <rect x="13" y="19" width="6" height="3" fill={BG} />
      <rect x="13" y="24" width="6" height="2" fill={BG} />
      <polygon points="9,28 23,28 21,31 11,31" fill={C} />
      <polygon points="11,14 1,8 1,13" fill={C} opacity={0.45} />
    </Frame>
  );
}
