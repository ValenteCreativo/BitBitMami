// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GardenScene from "./components/GardenScene";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BitBitMami",
  description: "Follow the white rabbit into your Bitcoin wonderland",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Render GardenScene una sola vez como fondo global */}
        <GardenScene zoom={0} theme="spring" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
