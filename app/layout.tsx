import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ScrollToTop from "@/app/components/ScrollToTop";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Wylie Mechanical | HVAC Services in Cornwall, ON",
  description:
    "Reliable HVAC services in Cornwall, ON. AC installation, heating repair, heat pumps, indoor air quality, tankless water heaters & more. Call Wylie Mechanical today!",
  keywords: [
    "HVAC Cornwall ON",
    "AC repair Cornwall",
    "heating services Cornwall ON",
    "heat pump installation",
    "Wylie Mechanical",
    "furnace repair Cornwall",
    "indoor air quality",
    "tankless water heaters Cornwall",
  ],
  openGraph: {
    title: "Wylie Mechanical | HVAC Services in Cornwall, ON",
    description:
      "Reliable HVAC services in Cornwall, ON. AC installation, heating repair, heat pumps & more.",
    url: "https://www.wyliemechanical.com",
    siteName: "Wylie Mechanical",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollToTop />
        {children}
        {/* form-relay.js must load after the DOM so it can capture submit events */}
        <Script src="/form-relay.js" strategy="afterInteractive" id="form-relay" />
      </body>
    </html>
  );
}
