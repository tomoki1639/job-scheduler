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
  title: "就活・学業管理システム",
  description: "就活と学業を一元管理",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="glass sticky top-0 z-50 mx-4 mt-4 mb-2 rounded-2xl">
          <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
            <span className="font-bold text-white text-lg">就活・学業管理</span>
            <div className="flex gap-1">
              <a href="/" className="text-sm font-medium text-white/70 hover:text-white transition-colors px-3 py-1.5 rounded-xl hover:bg-white/10">
                <span className="hidden sm:inline">カレンダー</span>
              </a>
              <a href="/timetable" className="text-sm font-medium text-white/70 hover:text-white transition-colors px-3 py-1.5 rounded-xl hover:bg-white/10">
                <span className="hidden sm:inline">時間割</span>
              </a>
              <a href="/es" className="text-sm font-medium text-white/70 hover:text-white transition-colors px-3 py-1.5 rounded-xl hover:bg-white/10">
                <span className="hidden sm:inline">ES管理</span>
              </a>
            </div>
          </div>
        </nav>
        <div className="max-w-5xl mx-auto px-4 pb-8">
          {children}
        </div>
      </body>
    </html>
  );
}