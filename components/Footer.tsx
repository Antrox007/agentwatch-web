import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-3 text-center">
        <p className="font-[family-name:var(--font-data)] text-[11px] text-text-tertiary">
          AgentWatch · v0.1.0 · local-first, no telemetry
        </p>
        <div className="flex items-center gap-4 text-[11px] text-text-tertiary">
          <Link href="/impressum" className="transition-colors hover:text-text-secondary">
            Impressum
          </Link>
          <Link href="/datenschutz" className="transition-colors hover:text-text-secondary">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
