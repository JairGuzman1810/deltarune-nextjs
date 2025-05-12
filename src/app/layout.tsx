import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

// font8bitOperatorPlus - Local 8-bit pixel font used for retro theme
const font8bitOperatorPlus = localFont({
  src: "../../public/fonts/8bitOperatorPlus-Bold.woff",
});

// metadata - SEO and social metadata for the site
export const metadata: Metadata = {
  metadataBase: new URL("https://localhost:3000"),

  title: "DELTARUNE for Nintendo Switch, PC / Mac, and PlayStation",
  description:
    "UNDERTALE's parallel story, DELTARUNE. Meet new and old characters in a tale that steps closer to its end, chapter by chapter. Dodge bullets in nonviolent RPG battles as you listen to funky, funky music.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "article",
    url: "/",
    siteName: "DELTARUNE",
    title: "DELTARUNE for Nintendo Switch, PC / Mac, and PlayStation",
    description:
      "UNDERTALE's parallel story, DELTARUNE. Meet new and old characters in a tale that steps closer to its end, chapter by chapter. Dodge bullets in nonviolent RPG battles as you listen to funky, funky music.",
    images: "./assets/images/social-logo.png",
    locale: "en_US",
    publishedTime: "2025-05-09T15:00:21+00:00",
  },

  twitter: {
    card: "summary",
    site: "@deltarune",
    title: "DELTARUNE for Nintendo Switch, PC / Mac, and PlayStation",
    images: "./assets/images/social-logo.png",
  },
};

// RootLayout - Wraps all pages and applies font globally
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font8bitOperatorPlus.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
