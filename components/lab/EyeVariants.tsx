// 15 genuinely distinct takes on the eye concept — varying overall shape,
// pupil style, framing, and a couple of animated ones. Same pixel/neon
// language as the rest.

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
const C = "#a78bfa";

function Frame({
  size,
  color = C,
  tight = 1,
  children,
}: {
  size: number;
  color?: string;
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

// shared almond eyelid bands, reused by several variants
function AlmondLids({ topY, botY, span = 12 }: { topY: number; botY: number; span?: number }) {
  const half = span / 2;
  return (
    <>
      <rect x={16 - half + 4} y={topY} width={span - 8} height="2" fill={C} />
      <rect x={16 - half} y={topY + 2} width={span} height={botY - topY - 4} fill={C} />
      <rect x={16 - half + 4} y={botY - 2} width={span - 8} height="2" fill={C} />
    </>
  );
}

// 1. Classic almond, dot pupil.
export function EY01Classic({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <AlmondLids topY={11} botY={21} />
      <PixelCircle cx={16} cy={16} rOuter={4} rInner={2.2} fill={BG} />
      <rect x="15" y="15" width="2" height="2" fill={C} />
    </Frame>
  );
}

// 2. Perfectly round eye — full circle, not tapered.
export function EY02Round({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <PixelCircle cx={16} cy={16} rOuter={10} rInner={7} fill={C} />
      <PixelCircle cx={16} cy={16} rOuter={4.5} rInner={2.5} fill={BG} />
      <rect x="15" y="15" width="2" height="2" fill={C} />
    </Frame>
  );
}

// 3. Narrow slit — cat-eye, mostly closed band.
export function EY03Slit({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      {/* tapered cat-eye lids, pointed at both corners */}
      <polygon
        points="2,16 9,13.5 23,13.5 30,16 23,18.5 9,18.5"
        fill={C}
      />
      <rect x="14.5" y="14.5" width="3" height="3" fill={BG} />
    </Frame>
  );
}

// 4. Wide & alert — bigger, more open, with a brow line above.
export function EY04Wide({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <rect x="6" y="7" width="20" height="2" fill={C} opacity={0.6} />
      <AlmondLids topY={9} botY={23} span={16} />
      <PixelCircle cx={16} cy={16} rOuter={5} rInner={3} fill={BG} />
      <rect x="14.5" y="14.5" width="2.5" height="2.5" fill={C} />
    </Frame>
  );
}

// 5. Sleepy / half-lid — calm, mostly-closed watching.
export function EY05Sleepy({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      {/* tapered lids like the slit eye, just shorter/thicker — reads as
          "closing" rather than a plain bar */}
      <polygon
        points="4,16 10,13.5 22,13.5 28,16 22,18.5 10,18.5"
        fill={C}
      />
      <rect x="13" y="14.7" width="6" height="2.6" fill={BG} opacity={0.7} />
      <rect x="14.7" y="15.3" width="2.6" height="1.4" fill={C} opacity={0.6} />
    </Frame>
  );
}

// 6. Camera lens / aperture — mechanical, concentric rings.
export function EY06Lens({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <PixelCircle cx={16} cy={16} rOuter={11} rInner={9} fill={C} />
      <PixelCircle cx={16} cy={16} rOuter={8} rInner={6.5} fill={BG} />
      <PixelCircle cx={16} cy={16} rOuter={5.5} rInner={4} fill={C} />
      <PixelCircle cx={16} cy={16} rOuter={2.5} rInner={1.4} fill={BG} />
    </Frame>
  );
}

// 7. Diamond / angular — straight edges, no curves.
export function EY07Diamond({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <polygon points="16,9 26,16 16,23 6,16" fill={C} />
      <polygon points="16,13 20,16 16,19 12,16" fill={BG} />
      <rect x="15" y="15" width="2" height="2" fill={C} />
    </Frame>
  );
}

// 8. Reptile slit-pupil — round iris, vertical slit pupil.
export function EY08Reptile({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <PixelCircle cx={16} cy={16} rOuter={10} rInner={7} fill={C} />
      {/* tapered vertical slit, not a plain rect — reads as a pupil */}
      <polygon points="16,9 18,13 18,19 16,23 14,19 14,13" fill={BG} />
    </Frame>
  );
}

// 9. Radar-scan — almond eye with a rotating sweep line inside.
export function EY09Radar({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <AlmondLids topY={11} botY={21} />
      <PixelCircle cx={16} cy={16} rOuter={4} rInner={2.2} fill={BG} />
      <g style={{ transformOrigin: "50% 50%", animation: "icon-orbit 2.4s linear infinite" }}>
        <rect x="15.3" y="12.5" width="1.4" height="3.5" fill={C} />
      </g>
    </Frame>
  );
}

// 10. Crosshair pupil — a "+" instead of a dot, ties to precision watching.
export function EY10Crosshair({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <AlmondLids topY={11} botY={21} />
      <PixelCircle cx={16} cy={16} rOuter={4.5} rInner={2.5} fill={BG} />
      <rect x="15.3" y="13" width="1.4" height="6" fill={C} />
      <rect x="13" y="15.3" width="6" height="1.4" fill={C} />
    </Frame>
  );
}

// 11. Blinking — animated, periodically closes and reopens.
export function EY11Blink({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <g style={{ transformOrigin: "50% 50%", animation: "icon-eye-blink 3.2s ease-in-out infinite" }}>
        <AlmondLids topY={11} botY={21} />
        <PixelCircle cx={16} cy={16} rOuter={4} rInner={2.2} fill={BG} />
        <rect x="15" y="15" width="2" height="2" fill={C} />
      </g>
    </Frame>
  );
}

// 12. Scanning pupil — animated, pupil looks left and right.
export function EY12Scanning({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <AlmondLids topY={11} botY={21} />
      <g style={{ animation: "icon-eye-scan 2.6s ease-in-out infinite" }}>
        <PixelCircle cx={16} cy={16} rOuter={4} rInner={2.2} fill={BG} />
        <rect x="15" y="15" width="2" height="2" fill={C} />
      </g>
    </Frame>
  );
}

// 13. Diamond / gem frame — eye set inside a gem outline.
export function EY13GemFrame({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size} tight={0.9}>
      <polygon
        points="16,2 27,16 16,30 5,16"
        fill="none"
        stroke={C}
        strokeWidth="1.6"
        strokeLinejoin="miter"
      />
      <AlmondLids topY={13} botY={21} span={10} />
      <PixelCircle cx={16} cy={17} rOuter={3.2} rInner={1.8} fill={BG} />
      <rect x="15.2" y="16.2" width="1.6" height="1.6" fill={C} />
    </Frame>
  );
}

// 14. Circular badge frame — eye set inside a coin/seal ring.
export function EY14BadgeFrame({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size} tight={0.9}>
      <PixelCircle cx={16} cy={16} rOuter={14} rInner={12} fill={C} />
      <PixelCircle cx={16} cy={16} rOuter={11.5} rInner={9.5} fill={BG} />
      <AlmondLids topY={12} botY={20} span={11} />
      <PixelCircle cx={16} cy={16} rOuter={3.2} rInner={1.8} fill={BG} />
      <rect x="15.2" y="15.2" width="1.6" height="1.6" fill={C} />
    </Frame>
  );
}

// 15. Target / bullseye pupil — concentric ring pupil instead of a dot.
export function EY15Bullseye({ size = 56 }: { size?: number }) {
  return (
    <Frame size={size}>
      <AlmondLids topY={10} botY={22} span={15} />
      <PixelCircle cx={16} cy={16} rOuter={5.5} rInner={3.5} fill={BG} />
      <PixelCircle cx={16} cy={16} rOuter={4} rInner={2.5} fill={C} />
      <PixelCircle cx={16} cy={16} rOuter={2.2} rInner={1.2} fill={BG} />
      <rect x="15.3" y="15.3" width="1.4" height="1.4" fill={C} />
    </Frame>
  );
}
