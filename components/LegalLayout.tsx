import Link from "next/link";
import { Logo } from "./Logo";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-[13px] text-text-secondary transition-colors hover:text-text-primary"
        >
          <Logo size={16} />
          AgentWatch
        </Link>
        <h1
          className="text-2xl font-semibold text-text-primary sm:text-3xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h1>
        <p className="mt-2 text-[12.5px] text-text-tertiary">Stand: {updated}</p>
        <div className="mt-10">{children}</div>
      </div>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8 first:mt-0">
      <h2 className="text-[15px] font-semibold text-text-primary">{title}</h2>
      <div className="mt-2 space-y-3 text-[13.5px] leading-relaxed text-text-secondary">
        {children}
      </div>
    </section>
  );
}
