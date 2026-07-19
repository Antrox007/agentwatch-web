// An original abstract gradient in the spirit of the Windows 11 "Bloom"
// wallpaper (dark variant) — soft blue/violet/teal blobs with a warm
// highlight, not a reproduction of Microsoft's copyrighted artwork.
export function WindowsWallpaper() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0" style={{ background: "#0a0d18" }} />
      <div
        className="absolute -inset-[15%]"
        style={{
          background: [
            "radial-gradient(38% 46% at 68% 26%, rgba(64,120,230,0.55), transparent 70%)",
            "radial-gradient(42% 50% at 82% 62%, rgba(120,86,224,0.42), transparent 70%)",
            "radial-gradient(36% 44% at 18% 72%, rgba(32,178,182,0.38), transparent 70%)",
            "radial-gradient(26% 32% at 30% 22%, rgba(255,150,180,0.16), transparent 70%)",
            "radial-gradient(18% 22% at 60% 40%, rgba(255,255,255,0.10), transparent 70%)",
          ].join(", "),
          filter: "blur(70px)",
          animation: "drift 30s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 85% at 50% 8%, transparent 45%, rgba(6,7,10,0.92) 100%)",
        }}
      />
    </div>
  );
}
