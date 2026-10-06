import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["700", "800"] });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Arvin John D. Guanzon — BSIT Developer",
  description: "Portfolio of Arvin John D. Guanzon, BSIT 3rd year student & developer. PHP, Java, Python, MySQL, REST APIs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${space.variable}`}>
      <body className="font-body grain bg-ink antialiased">{children}</body>
    </html>
  );
}
