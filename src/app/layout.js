import localFont from "next/font/local";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-retro-pop",
  display: "swap",
});

export const metadata = {
  title: "xbrainspacex",
  description: "welcome to my page!!☆",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
