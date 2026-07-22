import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

// Single committed family — modern grotesque with optical sizing.
// Weight contrast (not italic serifs) carries the hierarchy.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Texas Ace Team — DFW Real Estate",
  description:
    "A team of realtors in the Dallas–Fort Worth area. Buying, selling, done right.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f4f3f0] text-[#161311]">
        {children}
      </body>
    </html>
  );
}
