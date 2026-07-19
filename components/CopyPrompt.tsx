"use client";

import { useState } from "react";

const PROMPT =
  "Download the latest AgentWatch installer for my system from https://github.com/Antrox007/AgentWatch/releases/latest (pick x64 or ARM64 based on my CPU), then run the installer.";

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12.5 10 17.5 19 7" />
    </svg>
  );
}

export function CopyPrompt() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-strong flex flex-col gap-3 overflow-hidden rounded-2xl px-5 py-4 text-left sm:flex-row sm:items-start">
      <p className="min-w-0 flex-1 break-words font-[family-name:var(--font-data)] text-[12.5px] leading-relaxed text-text-secondary">
        {PROMPT}
      </p>
      <button
        type="button"
        onClick={handleCopy}
        className="flex shrink-0 items-center justify-center gap-1.5 self-start rounded-full bg-white/[0.1] px-3.5 py-2 text-[12px] font-medium text-text-primary transition-colors hover:bg-white/[0.16]"
      >
        {copied ? (
          <CheckIcon className="h-3.5 w-3.5 text-[var(--ready)]" />
        ) : (
          <CopyIcon className="h-3.5 w-3.5" />
        )}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
