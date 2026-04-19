import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Analicia L.",
  description:
    "Product manager, 0–1 builder, and AI-supported product studio by Analicia Lane.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-[#02154A] text-white">
          <header className="relative z-50">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
              <Link
                href="/"
                className="text-sm font-medium tracking-[0.18em] text-white/90 uppercase"
              >
                Analicia
              </Link>

              <details className="mobile-nav relative md:hidden">
                <summary className="flex h-11 w-11 list-none items-center justify-center rounded-full border border-white/12 bg-white/8 text-white/80 transition hover:border-white/20 hover:bg-white/12 hover:text-white focus-visible:outline-none">
                  <span className="sr-only">Open navigation menu</span>
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4 7h16M4 12h16M4 17h16"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                </summary>

                <nav
                  aria-label="Mobile"
                  className="mobile-nav-menu absolute right-0 top-full mt-3 min-w-40 rounded-2xl border border-white/12 bg-[#031d59]/95 p-2 text-sm text-white/80 shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur"
                >
                  <Link
                    className="block rounded-xl px-3 py-2 transition hover:bg-white/8 hover:text-[#2ED9C7]"
                    href="/kits"
                  >
                    Kits
                  </Link>
                  <Link
                    className="block rounded-xl px-3 py-2 transition hover:bg-white/8 hover:text-[#2ED9C7]"
                    href="/notes"
                  >
                    Notes
                  </Link>
                  <Link
                    className="block rounded-xl px-3 py-2 transition hover:bg-white/8 hover:text-[#2ED9C7]"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </nav>
              </details>

              <nav className="hidden items-center gap-6 text-sm text-white/75 md:flex">
                <Link className="transition hover:text-[#2ED9C7]" href="/labs">
                  Lab
                </Link>
                <Link className="transition hover:text-[#2ED9C7]" href="/kits">
                  Kits
                </Link>
                <Link className="transition hover:text-[#2ED9C7]" href="/notes">
                  Notes
                </Link>
                <Link className="transition hover:text-[#2ED9C7]" href="/contact">
                  Contact
                </Link>
              </nav>
            </div>
          </header>

          <div className="flex-1">{children}</div>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
