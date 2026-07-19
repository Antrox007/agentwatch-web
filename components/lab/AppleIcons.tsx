// Apple/SF-Symbols-style glyphs — smooth curves, rounded caps/joins, no
// pixel grid, no crispEdges. Deliberately no squircle/tile container: the
// rest of the site's own icons (nav, feature grid) are bare glyphs sitting
// directly on the glass surface, and a solid colored box read as a foreign
// "home screen icon" element pasted onto the page. A soft single-layer
// glow (matching the existing .dot / pill glow) is the only "chrome."

import { useId } from "react";

function glow(color: string) {
  return `drop-shadow(0 0 4px color-mix(in srgb, ${color} 55%, transparent))`;
}

// --- Status icons (these are the ones that actually ship) ---

export function AppleGear({
  size = 24,
  color = "var(--working)",
  animate = true,
}: {
  size?: number;
  color?: string;
  animate?: boolean;
}) {
  const teeth = [0, 45, 90, 135, 180, 225, 270, 315];
  // Real transparent hole via an SVG mask (not a background-colored dot) —
  // works regardless of what's actually behind the icon, since there's no
  // fixed tile color to fake it with anymore. Unique id per instance:
  // multiple gears render on the same page (pill + dashboard row) and SVG
  // mask ids must be unique in the DOM or they silently collide.
  const maskId = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{
        filter: glow(color),
        animation: animate ? "icon-spin 3.5s linear infinite" : undefined,
        transformOrigin: "50% 50%",
      }}
    >
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <circle cx="12" cy="12" r="3.1" fill="black" />
        </mask>
      </defs>
      <g fill={color} mask={`url(#${maskId})`}>
        {teeth.map((a) => (
          <rect key={a} x="10.6" y="0.6" width="2.8" height="4.6" rx="1.3" transform={`rotate(${a} 12 12)`} />
        ))}
        <circle cx="12" cy="12" r="7.4" />
      </g>
    </svg>
  );
}

export function AppleCheck({
  size = 24,
  color = "var(--ready)",
  animate = true,
}: {
  size?: number;
  color?: string;
  animate?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{
        filter: glow(color),
        animation: animate ? "apple-pop-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both" : undefined,
      }}
    >
      <path
        d="M4.5 12.5L9.5 17.5L19.5 6"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AppleExclaim({
  size = 24,
  color = "var(--waiting)",
  animate = true,
}: {
  size?: number;
  color?: string;
  animate?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{
        filter: glow(color),
        animation: animate ? "apple-nudge 2.2s ease-in-out infinite" : undefined,
      }}
    >
      <rect x="10.3" y="3" width="3.4" height="12.5" rx="1.7" fill={color} />
      <circle cx="12" cy="19.3" r="1.9" fill={color} />
    </svg>
  );
}

// --- Logo / app-icon concepts, same bare-glyph language ---

export function AppleEye({ size = 32, color = "#a78bfa" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ filter: glow(color) }}>
      <path
        d="M2 12C4.5 7 8 4.5 12 4.5S19.5 7 22 12C19.5 17 16 19.5 12 19.5S4.5 17 2 12Z"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3.4" fill={color} />
    </svg>
  );
}

export function AppleLighthouse({ size = 32, color = "var(--working)" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ filter: glow(color) }}>
      <path d="M12 1.5L15.5 5.5H8.5Z" fill={color} />
      <rect x="9" y="5.5" width="6" height="3" rx="0.6" fill={color} />
      <path d="M9.6 8.7H14.4L16 20.5C16 21 15.6 21.5 15 21.5H9C8.4 21.5 8 21 8 20.5Z" fill={color} />
      <rect x="9.9" y="11.5" width="4.2" height="1.8" rx="0.4" fill="var(--void, #06070a)" />
      <rect x="9.9" y="15.5" width="4.2" height="1.8" rx="0.4" fill="var(--void, #06070a)" />
      <path d="M8.7 8.5L2.5 5.2V10.5Z" fill={color} opacity="0.4" />
    </svg>
  );
}

export function AppleWatch({ size = 32, color = "#a78bfa" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ filter: glow(color) }}>
      <rect x="9.3" y="0.8" width="5.4" height="4" rx="1.6" fill={color} />
      <rect x="9.3" y="19.2" width="5.4" height="4" rx="1.6" fill={color} />
      <circle cx="12" cy="12" r="8.6" fill="none" stroke={color} strokeWidth="1.8" />
      <path
        d="M12 7.2V12L15.4 13.8"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ApplePulse({ size = 32, color = "var(--ready)" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ filter: glow(color) }}>
      <path
        d="M1.5 12.5H6.5L8.5 6.5L12 18.5L14.5 10.5L16.2 12.5H22.5"
        fill="none"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AppleTerminal({ size = 32, color = "#e5e7eb" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ filter: glow(color) }}>
      <path
        d="M5 6.5L11 12L5 17.5"
        fill="none"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="12.5" y="16" width="8" height="2.6" rx="1.3" fill={color} />
    </svg>
  );
}

export function AppleRadar({ size = 32, color = "#22d3ee" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ filter: glow(color) }}>
      <circle cx="12" cy="12" r="9.5" fill="none" stroke={color} strokeWidth="1.4" opacity="0.45" />
      <circle cx="12" cy="12" r="6" fill="none" stroke={color} strokeWidth="1.4" opacity="0.7" />
      <circle cx="12" cy="12" r="1.7" fill={color} />
      <path
        d="M12 12L19 8"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        style={{ transformOrigin: "12px 12px", animation: "icon-spin 2.4s linear infinite" }}
      />
    </svg>
  );
}
