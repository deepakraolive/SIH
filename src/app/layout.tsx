import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GramVest — Rural Business Decision Engine & Institution Portal | SIH 2026",
  description:
    "AI-Driven Hyper-Local Business Advisory & Financial Structuring Assistant for Rural Micro-Entrepreneurs (MSMEs) and Financial Institutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#fff8f2] text-[#1d1b18]">
        {children}
      </body>
    </html>
  );
}
