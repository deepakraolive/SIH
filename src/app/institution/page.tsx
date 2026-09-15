import React from "react";
import InstitutionPortal from "@/components/institution/InstitutionPortal";
import Link from "next/link";

export const metadata = {
  title: "Financial Institution Portal | GramVest",
  description:
    "Institutional underwriting console for Commercial Banks, Impact Investors, and Government Channelizing Agencies deploying capital into verified rural MSMEs.",
};

export default function InstitutionPage() {
  return (
    <main className="min-h-screen bg-[#fff8f2] text-[#1d1b18]">
      {/* Top Utility Nav */}
      <header className="sticky top-0 z-40 bg-[#fff8f2]/90 backdrop-blur-md border-b border-[#ede3d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#c75d3e] flex items-center justify-center text-white font-bold text-base">
              G
            </div>
            <span className="font-extrabold text-lg tracking-tight">
              Gram<span className="text-[#c75d3e]">Vest</span>
            </span>
            <span className="font-mono text-[11px] bg-[#151311] text-white px-2 py-0.5 rounded-md ml-2">
              INSTITUTION PORTAL
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs font-bold text-[#706c63] hover:text-[#1d1b18] px-3 py-1.5 rounded-md border border-[#ddd6c9] bg-white transition-colors"
            >
              ← Back to MSME Landing Page
            </Link>
          </div>
        </div>
      </header>

      <InstitutionPortal />
    </main>
  );
}
