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
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center py-1 group">
              <img
                src="/gramvest_logo3.png"
                alt="GramVest"
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
            <span className="font-mono text-[11px] bg-[#151311] text-white px-2.5 py-1 rounded-md hidden sm:inline-block">
              INSTITUTION PORTAL
            </span>
          </div>

          {/* 3 Nav Logins: 1. User Login, 2. Institution Portal (Active), 3. Dashboard (Simple Styling) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* 1. User Login / Portal */}
            <Link
              href="/login"
              className="flex items-center gap-1.5 sm:gap-2 bg-white border-[1.5px] border-[#e2dbce] hover:border-[#1d1b18]/40 hover:bg-[#faf7f2] text-[#1d1b18] text-xs sm:text-[13.5px] font-bold px-3.5 sm:px-4 py-2 rounded-xl shadow-xs transition-all whitespace-nowrap"
              title="Open MSME Entrepreneur Login Page"
            >
              <svg className="w-4 h-4 text-[#2b2723] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>User Login</span>
            </Link>

            {/* 2. Active Institution Portal */}
            <div className="flex items-center gap-1.5 sm:gap-2 bg-[#faf7f2] border-[1.5px] border-[#1d1b18] text-[#1d1b18] text-xs sm:text-[13.5px] font-bold px-3.5 sm:px-4 py-2 rounded-xl shadow-xs whitespace-nowrap">
              <svg className="w-4 h-4 text-[#1d1b18] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M15 10v11M12 3l9 7H3z" />
              </svg>
              <span>Institution Login</span>
            </div>

            {/* 3. Dashboard (Redirects to https://webapp-demo-eta.vercel.app/) */}
            <a
              href="https://webapp-demo-eta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 bg-white border-[1.5px] border-[#e2dbce] hover:border-[#1d1b18]/40 hover:bg-[#faf7f2] text-[#1d1b18] text-xs sm:text-[13.5px] font-bold px-3.5 sm:px-4 py-2 rounded-xl shadow-xs transition-all whitespace-nowrap group"
              title="Open Webapp Demo Dashboard"
            >
              <svg className="w-4 h-4 text-[#3a3530] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
              <span>Dashboard</span>
              <svg className="w-3.5 h-3.5 text-[#5c544d] ml-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <InstitutionPortal />
    </main>
  );
}
