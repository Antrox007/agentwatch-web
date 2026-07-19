import type { ReactNode } from "react";
import { Pill } from "./Pill";
import { Taskbar } from "./Taskbar";
import { WindowsWallpaper } from "./WindowsWallpaper";

export function LaptopMockup({ children }: { children?: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-4xl">
      {/* screen */}
      <div className="relative rounded-[26px] bg-[#0e0f13] p-3 shadow-[0_45px_110px_rgba(0,0,0,0.6)] ring-1 ring-white/[0.08] sm:p-4">
        <div
          className="absolute left-1/2 top-2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-white/20 sm:top-2.5"
          aria-hidden
        />
        <div className="relative h-[360px] overflow-hidden rounded-2xl sm:h-[420px]">
          <WindowsWallpaper />
          <div className="absolute inset-0 bottom-14 flex flex-col items-center justify-center gap-7 px-6 sm:gap-8">
            <Pill />
            {children}
          </div>
          <Taskbar />
        </div>
      </div>

      {/* base / hinge — makes it read as a laptop, not just a monitor */}
      <div className="relative mx-auto h-[12px] w-[103%] -translate-x-[1.5%] rounded-b-[10px] bg-gradient-to-b from-[#1b1c20] to-[#0b0c0f] sm:h-[14px]">
        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.06]" />
        <div className="absolute left-1/2 top-0 h-[4px] w-16 -translate-x-1/2 rounded-b-[4px] bg-black/50" />
      </div>
    </div>
  );
}
