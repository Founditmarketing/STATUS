import type { Metadata, Viewport } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import CartDrawer from "@/components/CartDrawer";
import { OrganizationSchema } from "@/components/SchemaMarkup";
import { CartProvider } from "@/lib/cart-context";
import { ToastProvider } from "@/components/Toast";
import EmailPopup from "@/components/EmailPopup";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://statushvac.com"),
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
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${outfit.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        <div className="w-full max-w-[100vw]" style={{ overflowX: 'clip' }}>
        <OrganizationSchema />
        <CartProvider>
          <ToastProvider>
            {/* Skip navigation — accessibility */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
            >
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
            <CartDrawer />
            <EmailPopup />
          </ToastProvider>
        </CartProvider>
        </div>
      </body>
    </html>
  );
}
