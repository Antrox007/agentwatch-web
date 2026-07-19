type IconProps = { className?: string };

const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconPulse({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 12h4l2 7 4-14 2 7h6" />
    </svg>
  );
}

export function IconGauge({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 13.5 15.5 9" />
      <path d="M4 15a8 8 0 1 1 16 0" />
      <path d="M4 15h1M19 15h1M12 5v1" />
    </svg>
  );
}

export function IconCoin({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8M9.5 10a2.5 2 0 0 1 2.5-1.5c1.5 0 2.5.7 2.5 1.8s-1 1.5-2.5 1.7-2.5.7-2.5 1.8S10.5 16 12 16a2.5 2 0 0 0 2.5-1.5" />
    </svg>
  );
}

export function IconTree({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="12" r="2" />
      <path d="M6 8v8M6 12h10M14 10l2 1.2" />
    </svg>
  );
}

export function IconBell({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 9a5 5 0 0 1 10 0c0 4 1.5 5.5 1.5 5.5H5.5S7 13 7 9Z" />
      <path d="M10 17.5a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.5 19 6v6c0 5-3 7.5-7 8.5-4-1-7-3.5-7-8.5V6l7-2.5Z" />
      <path d="M9.5 12 11 13.5 14.5 10" />
    </svg>
  );
}

export function IconGitHub({ className }: IconProps) {
  return (
    <svg {...base} strokeWidth={1.4} className={className}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.4c0-.9.3-1.6.8-2-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.3a11.6 11.6 0 0 1 6 0c2.4-1.6 3.4-1.3 3.4-1.3.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.7-2.9 5.7-5.6 6 .4.4.8 1.2.8 2.4V21" />
    </svg>
  );
}
