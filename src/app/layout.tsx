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
        <nav className="bg-white border-b px-4 py-3 flex gap-6">
          <a href="/" className="font-medium text-gray-700 hover:text-blue-600">
            📅 カレンダー
          </a>
          <a href="/timetable" className="font-medium text-gray-700 hover:text-blue-600">
            📚 時間割
          </a>
          <a href="/es" className="font-medium text-gray-700 hover:text-blue-600">
          📝 ES管理
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}