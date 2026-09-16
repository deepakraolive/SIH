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

          <div className="flex items-center gap-2 sm:gap-3">
            {/* 1. User Login / Portal */}
            <Link
              href="/"
              className="text-xs font-bold text-[#706c63] hover:text-[#1d1b18] px-2.5 py-1.5 rounded-md hover:bg-[#f3ede6] transition-colors flex items-center gap-1"
            >
              <svg className="w-3.5 h-3.5 text-[#706c63]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>User Login</span>
            </Link>

            {/* 2. Dashboard Login (Redirects to https://github.com/Quantumspectra7/Webapp_demo) */}
            <a
              href="https://github.com/Quantumspectra7/Webapp_demo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#1d1b18] hover:text-[#c75d3e] px-2.5 py-1.5 rounded-md border border-[#ddd6c9] bg-white transition-colors flex items-center gap-1 group"
              title="Open Webapp Demo Dashboard on GitHub"
            >
              <svg className="w-3.5 h-3.5 text-[#706c63] group-hover:text-[#c75d3e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="9" rx="1" />
                <rect x="14" y="3" width="7" height="5" rx="1" />
                <rect x="14" y="12" width="7" height="9" rx="1" />
                <rect x="3" y="16" width="7" height="5" rx="1" />
              </svg>
              <span>Dashboard</span>
              <svg className="w-3 h-3 text-[#706c63] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>

            {/* 3. Active Institution Portal */}
            <span className="bg-[#c75d3e] text-white text-xs font-bold px-3 py-1.5 rounded-md flex items-center gap-1 shadow-2xs">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M15 10v11M12 3l9 7H3z" />
              </svg>
              <span>Institution Portal</span>
            </span>
          </div>
        </div>
      </header>

      <InstitutionPortal />
    </main>
  );
}
