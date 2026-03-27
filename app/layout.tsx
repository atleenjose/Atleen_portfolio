import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atleen Jose — Business Intelligence & Analytics",
  description:
    "Portfolio of Atleen Jose — Graduate student in Business Analytics at Temple University. Specializing in data pipelines, analytics dashboards, AI/NLP systems, and business intelligence.",
  keywords: [
    "Business Intelligence",
    "Data Analytics",
    "Tableau",
    "SQL",
    "Python",
    "Machine Learning",
    "NLP",
    "BigQuery",
    "Temple University",
  ],
  authors: [{ name: "Atleen Jose" }],
  openGraph: {
    title: "Atleen Jose — Business Intelligence & Analytics",
    description:
      "Data pipelines, analytics dashboards, AI/NLP systems, and business intelligence. Graduate student at Temple University Fox School of Business.",
    url: "https://atleenportfolio1.vercel.app",
    siteName: "Atleen Jose Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Atleen Jose — Business Intelligence & Analytics",
    description:
      "Data pipelines, analytics dashboards, AI/NLP systems, and business intelligence.",
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
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-gray-200 antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
