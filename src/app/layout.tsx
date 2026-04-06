import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OrganizationSchema } from "@/components/SchemaMarkup";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "STATUS — DIY Ductless Mini-Split Heat Pump Systems | Save $3,000+",
  description:
    "Save $3,000+ on DIY ductless mini-split systems. Pre-charged linesets — no HVAC certification needed. Up to 24 SEER2 efficiency. Free 3-day shipping. 7-year compressor warranty. Assembled in the USA.",
  keywords: ["DIY mini split", "ductless mini split", "DIY heat pump", "mini split installation", "pre-charged lineset", "ductless AC", "mini split air conditioner", "wall mounted heat pump", "ceiling cassette mini split"],
  openGraph: {
    title: "STATUS — DIY Ductless Mini-Split Heat Pump Systems",
    description: "Professional HVAC at DIY prices. Save $3,000+ with pre-charged, easy-install ductless mini-split systems. No HVAC certification needed.",
    type: "website",
    siteName: "STATUS",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "STATUS — DIY Ductless Mini-Split Systems | Save $3,000+",
    description: "Professional HVAC at DIY prices. Pre-charged linesets, no certification needed. Free 3-day shipping.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://statushvac.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <OrganizationSchema />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
