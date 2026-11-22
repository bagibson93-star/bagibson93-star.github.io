import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { site } from "@/content";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

export const metadata: Metadata = {
  title: site.seoTitle,
  description: site.seoDescription,
  openGraph: { title: site.seoTitle, description: site.seoDescription, type: "website" },
};

export const viewport: Viewport = {
  themeColor: "#07090f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
