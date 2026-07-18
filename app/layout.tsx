import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AgentWatch — Live monitor for Claude Code sessions",
  description:
    "A dynamic island for your terminal. AgentWatch watches every Claude Code session on Windows in real time — status, context pressure, token cost, rate limits — without polling, without telemetry.",
  metadataBase: new URL("https://agentwatch-web.vercel.app"),
  openGraph: {
    title: "AgentWatch — Live monitor for Claude Code sessions",
    description:
      "Status, context pressure, cost and rate limits for every Claude Code session, live, on Windows.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#06070a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
