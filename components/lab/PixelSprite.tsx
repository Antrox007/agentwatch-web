export type PixelGrid = string[][];

const PALETTE: Record<string, string> = {
  h: "#3a3f4a", // hair
  b: "#e3bd93", // skin
  bd: "#c99b6d", // skin shadow
  s: "#c7cad1", // shirt base
  sd: "#9ba0aa", // shirt shadow
  k: "#1c1e24", // outline / shoes
  e: "#181a1f", // eyes
  w: "var(--working)",
  o: "var(--waiting)",
  g: "var(--ready)",
  scr: "#8fd0ff", // laptop screen glow
  lap: "#2b2e36", // laptop body

  // icon palette
  metal: "#8a919c",
  metalD: "#5c626c",
  metalL: "#c3c9d1",
  gold: "#f0b93a",
  goldD: "#c98f1c",
  brown: "#8a5a34",
  brownD: "#5e3c22",
  red: "#ef4444",
  redD: "#a92828",
  white: "#f5f6f8",
  cream: "#f2e6c9",
  green: "var(--ready)",
  blue: "var(--working)",
  orange: "var(--waiting)",
  ink: "#14161b",
  glass: "#9fd8e8",
  water: "#3f8fd6",
};

export function PixelSprite({
  grid,
  pixelSize = 6,
  className,
  paletteOverride,
}: {
  grid: PixelGrid;
  pixelSize?: number;
  className?: string;
  paletteOverride?: Record<string, string>;
}) {
  const cols = grid[0]?.length ?? 0;
  const palette = { ...PALETTE, ...paletteOverride };
  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, ${pixelSize}px)`,
        gridAutoRows: `${pixelSize}px`,
        imageRendering: "pixelated",
      }}
    >
      {grid.flatMap((row, y) =>
        row.map((cell, x) => (
          <div
            key={`${x}-${y}`}
            style={{
              background: cell ? (palette[cell] ?? cell) : "transparent",
            }}
          />
        )),
      )}
    </div>
  );
}
