"use client";

import React from "react";
import Link from "next/link";
import HeroSlideshowBanner from "@/components/landing/HeroSlideshowBanner";
import BusinessCycleVisualizer from "@/components/landing/BusinessCycleVisualizer";
import MarketRadarTeaser from "@/components/landing/MarketRadarTeaser";
import FaqSection from "@/components/landing/FaqSection";

export default function LandingPage() {
  return (
    <div className="bg-[#fff8f2] text-[#1d1b18] min-h-screen selection:bg-[#c75d3e] selection:text-white flex flex-col justify-between">
      
      {/* Top Coordinate & Compliance Bar */}
      <div className="bg-[#151311] text-[#a89f91] font-mono text-[11px] px-4 sm:px-8 py-1.5 border-b border-[#332d27] flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <span>[SYS-26091] PUNJAB RURAL DECISION ENGINE</span>
          <span className="hidden sm:inline">LAT: 30.9010° N • LONG: 75.8573° E</span>
          <span className="text-[#c75d3e] inline-flex items-center gap-1.5 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c75d3e] animate-pulse" />
            PAU BENCHMARK VERIFIED
          </span>
        </div>
        <div>
          <span>RBI PSL COMPLIANT • ZERO NUMERICAL HALLUCINATION</span>
        </div>
      </div>

      {/* Main Top Header Navigation */}
      <header className="sticky top-0 z-50 bg-[#fff8f2]/95 backdrop-blur-md border-b border-[#ede3d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo - Official logo from https://github.com/Quantumspectra7/Webapp_demo */}
          <Link href="/" className="flex items-center py-1 group">
            <img
              src="/gramvest_logo3.png"
              alt="GramVest"
              className="h-11 sm:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Clean Nav Links (Simulator removed, FAQ added) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#382f29]">
            <a href="#overview" className="hover:text-[#c75d3e] transition-colors">
              Overview
            </a>
            <a href="#business-cycle" className="hover:text-[#c75d3e] transition-colors">
              Business Cycle
            </a>
            <a href="#market-radar" className="hover:text-[#c75d3e] transition-colors">
              Catchment Radar
            </a>
            <a
              href="/faqs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c75d3e] transition-colors"
              title="Open Complete FAQ in a new page"
            >
              FAQ
            </a>
          </nav>

          {/* 3 Nav Logins: 1. User Login, 2. Institution Login, 3. Dashboard (Clean Neutral Styling, No Orange) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* 1. User Login (Opens dedicated /login page) */}
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

            {/* 2. Institution Login (Opens dedicated /institution page in a new tab) */}
            <Link
              href="/institution"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 bg-white border-[1.5px] border-[#e2dbce] hover:border-[#1d1b18]/40 hover:bg-[#faf7f2] text-[#1d1b18] text-xs sm:text-[13.5px] font-bold px-3.5 sm:px-4 py-2 rounded-xl shadow-xs transition-all whitespace-nowrap"
              title="Open Institution Portal in a different page"
            >
              <svg className="w-4 h-4 text-[#2b2723] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M15 10v11M12 3l9 7H3z" />
              </svg>
              <span>Institution Login</span>
            </Link>

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

      {/* Main Experience */}
      <main>
        {/* 1st Section: Top Hero Slideshow with Background Animation (Small Business Grows Big) */}
        <HeroSlideshowBanner />

        {/* 2nd Section: The Cycle of Business & Capital Structuring Engine */}
        <div id="business-cycle">
          <BusinessCycleVisualizer />
        </div>

        {/* 3rd Section: Spatial Catchment Feasibility Radar */}
        <div id="market-radar">
          <MarketRadarTeaser />
        </div>

        {/* 4th Section: Frequently Asked Questions (from Quantumspectra7/Webapp_demo) */}
        <FaqSection />
      </main>

      {/* Global Footer */}
      <footer className="bg-[#151311] text-[#a89f91] py-16 border-t border-[#332d27] text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  Gram<span className="text-[#c75d3e]">Vest</span>
                </span>
                <span className="font-mono text-[10px] bg-white/10 text-white px-2 py-0.5 rounded">
                  SIH 26091
                </span>
              </div>
              <p className="text-xs text-[#a89f91] leading-relaxed">
                Smart India Hackathon 2026 Problem Statement 26091. Transforming rural micro-entrepreneurs into bank-funded enterprises through spatial feasibility, sovereign subsidy matching, and institutional capital underwriting.
              </p>
              <div className="font-mono text-[11px] text-[#c75d3e] font-bold">
                ✓ 100% Deterministic Calculations
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                Platform Navigation
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#overview" className="hover:text-white transition-colors">Overview</a></li>
                <li><a href="#business-cycle" className="hover:text-white transition-colors">Business Cycle &amp; Capital Structuring</a></li>
                <li><a href="#market-radar" className="hover:text-white transition-colors">Spatial Catchment Radar</a></li>
                <li><Link href="/faqs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Frequently Asked Questions ↗</Link></li>
                <li><Link href="/institution" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Institutional Lender Portal ↗</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                Sovereign Schemes
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#overview" className="hover:text-white transition-colors">PMEGP 35% Capital Grant</a></li>
                <li><a href="#overview" className="hover:text-white transition-colors">AIF 3% Interest Subvention</a></li>
                <li><a href="#overview" className="hover:text-white transition-colors">PMFME Micro Subsidy</a></li>
                <li><a href="#overview" className="hover:text-white transition-colors">CGTMSE Collateral Guarantee</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                Institutional Network
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li><Link href="/institution" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">State Bank of India Lead District</Link></li>
                <li><Link href="/institution" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Punjab Gramin Bank</Link></li>
                <li><Link href="/institution" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">NABARD Rural Infrastructure</Link></li>
                <li><Link href="/institution" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">SIDBI Concessional Window</Link></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-[#332d27] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs">
            <span>© 2026 GRAMVEST • SMART INDIA HACKATHON 2026</span>
            <span>PUNJAB AGRICULTURAL UNIVERSITY (PAU) BENCHMARKS • FASTAPI &amp; REACT 19</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
