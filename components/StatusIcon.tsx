"use client";

import { useId } from "react";

export type Status = "working" | "waiting" | "ready";

const TOOTH_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

function glow(color: string) {
  return `drop-shadow(0 0 4px color-mix(in srgb, ${color} 55%, transparent))`;
}

function GearGlyph({ size, animate }: { size: number; animate: boolean }) {
  // Real transparent hole via SVG mask (not a background-colored dot) —
  // works regardless of what's behind it. Unique id per instance since
  // several gears can render on the same page at once (mask ids must be
  // unique in the DOM or they silently collide).
  const maskId = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{
        filter: glow("var(--working)"),
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
      <g fill="var(--working)" mask={`url(#${maskId})`}>
        {TOOTH_ANGLES.map((a) => (
          <rect key={a} x="10.6" y="0.6" width="2.8" height="4.6" rx="1.3" transform={`rotate(${a} 12 12)`} />
        ))}
        <circle cx="12" cy="12" r="7.4" />
      </g>
    </svg>
  );
}

function CheckGlyph({ size, animate }: { size: number; animate: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{
        filter: glow("var(--ready)"),
        animation: animate ? "apple-pop-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both" : undefined,
      }}
    >
      <path
        d="M4.5 12.5L9.5 17.5L19.5 6"
        fill="none"
        stroke="var(--ready)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExclaimGlyph({ size, animate }: { size: number; animate: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{
        filter: glow("var(--waiting)"),
        animation: animate ? "apple-nudge 2.2s ease-in-out infinite" : undefined,
      }}
    >
      <rect x="10.3" y="3" width="3.4" height="12.5" rx="1.7" fill="var(--waiting)" />
      <circle cx="12" cy="19.3" r="1.9" fill="var(--waiting)" />
    </svg>
  );
}

export function StatusIcon({
  status,
  size = 16,
  animate = true,
  className,
}: {
  status: Status;
  size?: number;
  animate?: boolean;
  className?: string;
}) {
  const Glyph = status === "working" ? GearGlyph : status === "waiting" ? ExclaimGlyph : CheckGlyph;
  return (
    <span className={className} style={{ display: "inline-flex", lineHeight: 0 }}>
      <Glyph size={size} animate={animate} />
    </span>
  );
}
