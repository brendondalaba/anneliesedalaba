import type { Metadata } from "next";
import { Manrope, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";

const bodySans = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const displaySerif = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anneliese Dalaba | Christian Fiction & Memoir Author",
  description:
    "Faith-filled historical romance and uplifting memoirs by author Anneliese Dalaba. Discover the Arranged Marriage series, new releases, and newsletter updates.",
  icons: {
    icon: "/adalaba-tab-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodySans.variable} ${displaySerif.variable} ${greatVibes.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
