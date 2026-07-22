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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://texas-ace-team.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Texas Ace Team — DFW Real Estate",
    template: "%s · Texas Ace Team",
  },
  description:
    "A team of realtors in the Dallas–Fort Worth area. Buying, selling, done right.",
  keywords: [
    "DFW real estate",
    "Dallas realtor",
    "Fort Worth homes",
    "Texas Ace Team",
    "buy a home DFW",
    "sell a home DFW",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Texas Ace Team",
    title: "Texas Ace Team — Realtors in the DFW area",
    description:
      "Buying, selling, done right. 500+ five-star reviews across the Dallas–Fort Worth metroplex.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Texas Ace Team — Realtors in the DFW area",
    description:
      "Buying, selling, done right across the Dallas–Fort Worth metroplex.",
  },
  robots: { index: true, follow: true },
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
