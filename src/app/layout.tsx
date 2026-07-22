import type { Metadata } from "next";
import { Fraunces, Figtree, Montserrat } from "next/font/google";
import "./globals.css";

// larken (display serif) -> Fraunces; degular (sans) -> Figtree
const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home - Whissel Beer Group | San Diego",
  description:
    "The #1 residential real estate team in San Diego County. Bringing you more options, deeper expertise and proven results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${figtree.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#ede5dd] text-[#2a241f]">
        {children}
      </body>
    </html>
  );
}
