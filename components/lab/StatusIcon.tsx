"use client";

import { useEffect, useState } from "react";
import { PixelSprite } from "./PixelSprite";
import {
  ANVIL_DOWN,
  ANVIL_UP,
  ARROW_UP,
  BELL,
  BOLT,
  CHEST_CLOSED,
  CHEST_OPEN,
  COIN,
  CURSOR_PROMPT,
  DOT_CORE,
  EXCLAIM,
  FIRE_A,
  FIRE_B,
  FLAG,
  FLASK,
  FLOPPY,
  GEAR,
  HEART,
  HOURGLASS_A,
  HOURGLASS_B,
  MOON,
  ORB,
  QBLOCK,
  RADAR_RING,
  SPROUT_1,
  SPROUT_2,
  SPROUT_3,
  STAR,
} from "./statusIconGrids";

const PS = 7; // pixel size for the lab grid display

function useFrameCycle<T>(frames: T[], intervalMs: number) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % frames.length), intervalMs);
    return () => clearInterval(id);
  }, [frames.length, intervalMs]);
  return frames[i];
}

function AnvilIcon() {
  const frame = useFrameCycle([ANVIL_UP, ANVIL_DOWN], 420);
  return <PixelSprite grid={frame} pixelSize={PS} />;
}

function HourglassIcon() {
  const frame = useFrameCycle([HOURGLASS_A, HOURGLASS_B], 900);
  return <PixelSprite grid={frame} pixelSize={PS} />;
}

function SproutIcon() {
  const frame = useFrameCycle([SPROUT_1, SPROUT_2, SPROUT_2, SPROUT_3, SPROUT_3, SPROUT_3], 500);
  return <PixelSprite grid={frame} pixelSize={PS} />;
}

function CampfireIcon() {
  const frame = useFrameCycle([FIRE_A, FIRE_B], 260);
  return <PixelSprite grid={frame} pixelSize={PS} />;
}

function ChestIcon() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 500);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="relative">
      <PixelSprite grid={open ? CHEST_OPEN : CHEST_CLOSED} pixelSize={PS} />
      {open &&
        [0, 1].map((i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              width: 3,
              height: 3,
              left: 14 + i * 20,
              top: 4,
              background: "var(--waiting)",
              animation: `icon-rise-fade 1.6s ease-out ${i * 0.5}s infinite`,
            }}
          />
        ))}
    </div>
  );
}

export function StatusIcon({ id }: { id: string }) {
  switch (id) {
    case "gear":
      return (
        <div style={{ animation: "icon-spin 1.6s linear infinite" }}>
          <PixelSprite grid={GEAR} pixelSize={PS} />
        </div>
      );

    case "anvil":
      return <AnvilIcon />;

    case "hourglass":
      return <HourglassIcon />;

    case "cursor":
      return (
        <div className="flex items-end gap-1">
          <PixelSprite grid={CURSOR_PROMPT} pixelSize={PS * 0.8} />
          <span
            style={{
              width: PS * 1.6,
              height: PS * 4,
              background: "var(--ready)",
              animation: "icon-blink 1.1s steps(1) infinite",
            }}
          />
        </div>
      );

    case "zzz":
      return (
        <div className="relative h-16 w-16">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="absolute font-[family-name:var(--font-data)] font-bold text-text-secondary"
              style={{
                fontSize: 12 + i * 3,
                left: 8 + i * 9,
                top: 24 - i * 10,
                animation: `mascot-float-fade 2.2s ease-in-out ${i * 0.7}s infinite`,
              }}
            >
              z
            </span>
          ))}
        </div>
      );

    case "bell":
      return (
        <div style={{ animation: "icon-wobble-small 1.6s ease-in-out infinite", transformOrigin: "50% 0%" }}>
          <PixelSprite grid={BELL} pixelSize={PS} />
        </div>
      );

    case "coin":
      return (
        <div style={{ animation: "icon-scale-x 1.1s linear infinite" }}>
          <PixelSprite grid={COIN} pixelSize={PS} />
        </div>
      );

    case "exclaim":
      return (
        <div style={{ animation: "icon-bob 1.3s ease-in-out infinite" }}>
          <PixelSprite grid={EXCLAIM} pixelSize={PS} />
        </div>
      );

    case "star":
      return (
        <div className="relative" style={{ animation: "icon-overshoot-in 0.5s ease-out both" }}>
          <PixelSprite grid={STAR} pixelSize={PS} />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.85) 50%, transparent 60%)",
              animation: "icon-shimmer-sweep 2.6s ease-in-out infinite",
              mixBlendMode: "overlay",
            }}
          />
        </div>
      );

    case "floppy":
      return (
        <div style={{ animation: "icon-squash-drop 2.8s ease-out infinite" }}>
          <PixelSprite grid={FLOPPY} pixelSize={PS} />
        </div>
      );

    case "arrow":
      return (
        <div style={{ animation: "icon-rise-fade 1.4s ease-in-out infinite" }}>
          <PixelSprite grid={ARROW_UP} pixelSize={PS} />
        </div>
      );

    case "heart":
      return (
        <div style={{ animation: "icon-heartbeat 1.6s ease-in-out infinite" }}>
          <PixelSprite grid={HEART} pixelSize={PS} />
        </div>
      );

    case "radar":
      return (
        <div className="relative">
          <PixelSprite grid={RADAR_RING} pixelSize={PS} />
          <div
            className="absolute left-1/2 top-1/2 origin-bottom"
            style={{
              width: 1.5,
              height: PS * 3.5,
              background: "linear-gradient(to top, var(--ready), transparent)",
              transform: "translateX(-50%)",
              animation: "icon-orbit 1.8s linear infinite",
            }}
          />
        </div>
      );

    case "moon":
      return (
        <div className="relative">
          <PixelSprite grid={MOON} pixelSize={PS} />
          <span
            className="absolute rounded-full bg-white"
            style={{
              width: 3,
              height: 3,
              right: 2,
              top: 2,
              animation: "icon-pulse-scale 1.8s ease-in-out infinite",
            }}
          />
        </div>
      );

    case "flask":
      return (
        <div className="relative">
          <PixelSprite grid={FLASK} pixelSize={PS} />
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="absolute rounded-full bg-white/80"
              style={{
                width: 3,
                height: 3,
                left: 16 + i * 8,
                bottom: 8,
                animation: `icon-rise-fade 1.4s ease-in ${i * 0.4}s infinite`,
              }}
            />
          ))}
        </div>
      );

    case "bolt":
      return (
        <div style={{ animation: "icon-flash 0.9s ease-in-out infinite" }}>
          <PixelSprite grid={BOLT} pixelSize={PS} />
        </div>
      );

    case "chest":
      return <ChestIcon />;

    case "flag":
      return (
        <div
          style={{
            animation: "icon-bob 2.2s ease-in-out infinite",
            animationDelay: "0.6s",
          }}
        >
          <PixelSprite grid={FLAG} pixelSize={PS} />
        </div>
      );

    case "qblock":
      return (
        <div style={{ animation: "icon-pulse-scale 1.4s ease-in-out infinite" }}>
          <PixelSprite grid={QBLOCK} pixelSize={PS} />
        </div>
      );

    case "sonar":
      return (
        <div className="relative flex h-8 w-8 items-center justify-center">
          <span
            className="absolute rounded-full border border-[var(--ready)]"
            style={{ width: 22, height: 22, animation: "icon-ping 1.8s ease-out infinite" }}
          />
          <PixelSprite grid={DOT_CORE} pixelSize={PS * 0.7} />
        </div>
      );

    case "sprout":
      return <SproutIcon />;

    case "campfire":
      return <CampfireIcon />;

    case "orb":
      return (
        <div className="relative">
          <PixelSprite grid={ORB} pixelSize={PS} />
          <div
            className="absolute rounded-[3px]"
            style={{
              inset: PS,
              background: "color-mix(in srgb, var(--working) 70%, white)",
              animation: "icon-fill-rise 2.4s ease-in-out infinite",
              mixBlendMode: "screen",
            }}
          />
        </div>
      );

    case "eq":
      return (
        <div className="flex h-10 items-end gap-1">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="w-2 rounded-[1px]"
              style={{
                height: "100%",
                background: "var(--working)",
                transformOrigin: "bottom",
                animation: `icon-scale-x 0.6s ease-in-out ${i * 0.12}s infinite alternate`,
                transform: "scaleY(0.4)",
              }}
            />
          ))}
        </div>
      );

    case "orbit":
      return (
        <div className="relative h-9 w-9" style={{ animation: "icon-orbit 1.6s linear infinite" }}>
          {[0, 120, 240].map((deg, i) => (
            <span
              key={deg}
              className="absolute left-1/2 top-1/2 rounded-full"
              style={{
                width: 5,
                height: 5,
                background: "var(--working)",
                opacity: 1 - i * 0.25,
                transform: `rotate(${deg}deg) translate(14px) rotate(-${deg}deg)`,
              }}
            />
          ))}
        </div>
      );

    case "bubble":
      return (
        <div className="glass-strong flex items-center gap-1.5 rounded-full px-3 py-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-text-secondary"
              style={{ animation: `icon-pulse-scale 1s ease-in-out ${i * 0.15}s infinite` }}
            />
          ))}
        </div>
      );

    default:
      return null;
  }
}
