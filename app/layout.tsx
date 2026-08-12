import type { Metadata } from "next";
import { Syne, Jost } from "next/font/google";
import "./globals.css";

const fontSyne = Syne({
  variable: "--font-Syne",
  subsets: ["latin"],
});

const fontJost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alchemia Dance Studio Września",
  description: "Szkoła tańca Alchemia Września",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${fontSyne.variable} ${fontJost.variable}`}>
        {children}
      </body>
    </html>
  );
}
