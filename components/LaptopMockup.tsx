import { Pill } from "./Pill";
import { Taskbar } from "./Taskbar";
import { WindowsWallpaper } from "./WindowsWallpaper";

export function LaptopMockup() {
  return (
    <div className="mx-auto w-full max-w-[28rem]">
      {/* screen */}
      <div className="relative rounded-[20px] bg-[#0e0f13] p-[10px] shadow-[0_35px_90px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.08]">
        <div
          className="absolute left-1/2 top-[5px] h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-white/20"
          aria-hidden
        />
        <div className="relative h-[190px] overflow-hidden rounded-[10px] sm:h-[212px]">
          <WindowsWallpaper />
          <div className="absolute inset-x-0 top-3 flex justify-center">
            <Pill />
          </div>
          <Taskbar />
        </div>
      </div>

      {/* base / hinge — makes it read as a laptop, not just a monitor */}
      <div className="relative mx-auto h-[9px] w-[104%] -translate-x-[2%] rounded-b-[8px] bg-gradient-to-b from-[#1b1c20] to-[#0b0c0f]">
        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.06]" />
        <div className="absolute left-1/2 top-0 h-[3px] w-12 -translate-x-1/2 rounded-b-[3px] bg-black/50" />
      </div>
    </div>
  );
}
