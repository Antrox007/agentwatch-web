// Main mark — an EKG-style pulse line. Bare glyph, no squircle/tile
// container (that read as a foreign home-screen element pasted onto the
// page), soft glow matching the rest of the site's dot/icon language.
export function Logo({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={{ filter: "drop-shadow(0 0 4px color-mix(in srgb, var(--ready) 55%, transparent))" }}
    >
      <path
        d="M1.5 12.5H6.5L8.5 6.5L12 18.5L14.5 10.5L16.2 12.5H22.5"
        fill="none"
        stroke="var(--ready)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
