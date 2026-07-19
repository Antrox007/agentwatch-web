import type { ReactNode } from "react";
import { Pill } from "./Pill";
import { Taskbar } from "./Taskbar";
import { WindowsWallpaper } from "./WindowsWallpaper";

export function LaptopMockup({ children }: { children?: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-4xl">
      {/* screen */}
      <div
        className="relative rounded-[26px] p-3 shadow-[0_45px_110px_rgba(0,0,0,0.6)] ring-1 ring-black/10 sm:p-4"
        style={{
          background:
            "linear-gradient(160deg, #e2e4e8 0%, #c6c9cf 45%, #a9acb3 100%)",
        }}
      >
        <div
          className="absolute left-1/2 top-2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-black/25 sm:top-2.5"
          aria-hidden
        />
        <div className="relative h-[360px] overflow-hidden rounded-2xl sm:h-[420px]">
          <WindowsWallpaper />

          <div className="absolute inset-x-0 top-5 flex justify-center sm:top-7">
            <Pill />
          </div>

          <div className="absolute inset-x-0 top-24 bottom-14 flex items-center justify-center px-6 sm:top-28">
            {children}
          </div>

          <Taskbar />
        </div>
      </div>

      {/* base / hinge — makes it read as a laptop, not just a monitor */}
      <div
        className="relative mx-auto h-[12px] w-[103%] -translate-x-[1.5%] rounded-b-[10px] sm:h-[14px]"
        style={{
          background: "linear-gradient(to bottom, #b3b6bc 0%, #8b8e95 100%)",
        }}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-white/40" />
        <div className="absolute left-1/2 top-0 h-[4px] w-16 -translate-x-1/2 rounded-b-[4px] bg-black/20" />
      </div>
    </div>
  );
}
