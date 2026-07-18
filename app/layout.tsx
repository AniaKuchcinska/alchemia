import type { Metadata } from "next";
import { Montserrat, Jost } from "next/font/google";
import "./globals.css";

const fontMontserrat = Montserrat({
  variable: "--font-montserrat",
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
      <body className={`${fontMontserrat.variable} ${fontJost.variable}`}>
        {children}
      </body>
    </html>
  );
}
