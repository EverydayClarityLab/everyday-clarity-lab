import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
        <div className="min-h-screen bg-[#02154A] text-white">
          <header className="relative z-50">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
              <a
                href="/"
                className="text-sm font-medium tracking-[0.18em] text-white/90 uppercase"
              >
                Analicia
              </a>

              <nav className="flex items-center gap-6 text-sm text-white/75">
                <a className="transition hover:text-[#2ED9C7]" href="/labs">
                  Lab
                </a>
                <a className="transition hover:text-[#2ED9C7]" href="/kits">
                  Kits
                </a>
                <a className="transition hover:text-[#2ED9C7]" href="/notes">
                  Notes
                </a>
                <a className="transition hover:text-[#2ED9C7]" href="/contact">
                  Contact
                </a>
              </nav>
            </div>
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}