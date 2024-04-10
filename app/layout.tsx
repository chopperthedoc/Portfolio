import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Filip Ores",
  description: "Mein eigenes Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-200">
        <Navbar />
        <main className="relative overflow-hidden ">{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
