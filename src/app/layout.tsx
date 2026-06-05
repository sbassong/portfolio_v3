import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sambassong.com"),
  title: "Sam Bassong — Software Developer",
  description: "Portfolio of Sam Bassong — software developer building thoughtful digital products.",
  authors: [{ name: "Sam Bassong", url: "https://sambassong.com" }],
  openGraph: {
    type: "website",
    url: "https://sambassong.com",
    siteName: "Sam Bassong",
    title: "Sam Bassong — Software Developer",
    description: "Portfolio of Sam Bassong — software developer building thoughtful digital products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam Bassong — Software Developer",
    description: "Portfolio of Sam Bassong — software developer building thoughtful digital products.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Providers>
          <Navbar />
          <main id="main-content" className="flex-1 pt-16">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
