import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import VantaBackground from "@/components/VantaBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpsPortal | Restaurant Operations & QR Ordering Engine",
  description:
    "Unified POS, real-time Kitchen Display System (KDS), QR table ordering, and live analytics for high-velocity restaurants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // scroll-pt-24 keeps anchor targets from hiding under the fixed navbar
    <html lang="en" className="dark scroll-smooth scroll-pt-24">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white min-h-screen`}>
        <VantaBackground />
        <Navbar />
        <main className="relative min-h-screen pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}