// Precise, geometrically-constructed SVG icons rendered pixel-art style:
// shape-rendering="crispEdges" disables anti-aliasing (hard, stepped edges
// instead of smooth blends), no rounded corners, and the hub/hole circles
// are built as stepped octagons (stacked rects) rather than true curves —
// the standard way a "circle" reads as pixel art at low resolution.
//
// Neon treatment: layered drop-shadow() blurs (tight + wide) around each
// icon's own state color, using the app's actual signature colors instead
// of neutral metal grey — a glowing blue gear reads as "working" on its
// own, before you even register the shape.

const TOOTH_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

function neonGlow(color: string) {
  return `drop-shadow(0 0 0.75px ${color}) drop-shadow(0 0 2px ${color}) drop-shadow(0 0 4.5px color-mix(in srgb, ${color} 65%, transparent))`;
}

// Stepped "pixel circle": three horizontal bands stacked vertically
// (narrow cap / wide middle / narrow cap) — the standard low-res way to
// draw a round shape out of rectangles.
function PixelCircle({
  cx,
  cy,
  rOuter,
  rInner,
  fill,
}: {
  cx: number;
  cy: number;
  rOuter: number;
  rInner: number;
  fill: string;
}) {
  const capH = rOuter - rInner;
  return (
    <g fill={fill}>
      <rect x={cx - rOuter} y={cy - rInner} width={rOuter * 2} height={rInner * 2} />
      <rect x={cx - rInner} y={cy - rOuter} width={rInner * 2} height={capH} />
      <rect x={cx - rInner} y={cy + rInner} width={rInner * 2} height={capH} />
    </g>
  );
}

export function GearIcon({ size = 48 }: { size?: number }) {
  const color = "var(--working)";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      shapeRendering="crispEdges"
      style={{
        animation: "icon-spin 2s linear infinite",
        transformOrigin: "50% 50%",
        filter: neonGlow(color),
      }}
    >
      {TOOTH_ANGLES.map((angle) => (
        <rect
          key={angle}
          x="13.5"
          y="1.5"
          width="5"
          height="6.5"
          fill={color}
          transform={`rotate(${angle} 16 16)`}
        />
      ))}
      <PixelCircle cx={16} cy={16} rOuter={9.5} rInner={6} fill={color} />
      <PixelCircle cx={16} cy={16} rOuter={4.5} rInner={2.5} fill="#0a0d18" />
    </svg>
  );
}

export function CheckIcon({ size = 48, floating = true }: { size?: number; floating?: boolean }) {
  const color = "var(--ready)";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      shapeRendering="crispEdges"
      style={{
        filter: neonGlow(color),
        ...(floating ? { animation: "icon-bob 1.6s ease-in-out infinite" } : {}),
      }}
    >
      <polyline
        points="5,17 13,25 27,7"
        fill="none"
        stroke={color}
        strokeWidth="6.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export function ExclaimIcon({ size = 48, floating = true }: { size?: number; floating?: boolean }) {
  const color = "var(--waiting)";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      shapeRendering="crispEdges"
      style={{
        filter: neonGlow(color),
        ...(floating ? { animation: "icon-bob 1.6s ease-in-out infinite" } : {}),
      }}
    >
      <rect x="12" y="3" width="8" height="17" fill={color} />
      <rect x="12" y="24" width="8" height="7" fill={color} />
    </svg>
  );
}
