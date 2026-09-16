"use client";

import React from "react";
import Link from "next/link";
import BannerSlideshowSection from "@/components/landing/BannerSlideshowSection";

export default function LandingPage() {
  return (
    <div className="bg-[#fff8f2] text-[#1d1b18] min-h-screen selection:bg-[#c75d3e] selection:text-white flex flex-col justify-between">
      
      {/* Topology-style Technical Coordinate Bar */}
      <div className="bg-[#151311] text-[#a89f91] font-mono text-[11px] px-4 sm:px-8 py-1.5 border-b border-[#332d27] flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <span>[SYS-26091] PUNJAB RURAL DECISION ENGINE</span>
          <span className="hidden sm:inline">LAT: 30.9010° N • LONG: 75.8573° E</span>
          <span className="text-[#8ed081] inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8ed081] animate-pulse" />
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

          {/* Clean Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#382f29]">
            <a href="#hero-section" className="hover:text-[#c75d3e] transition-colors">
              Overview
            </a>
            <a href="#slideshow-section" className="hover:text-[#c75d3e] transition-colors">
              What We Do
            </a>
            <a
              href="https://webapp-demo-eta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c75d3e] transition-colors"
            >
              Simulator ↗
            </a>
          </nav>

          {/* 3 Nav Logins: 1. User Login, 2. Institution Login, 3. Dashboard (Simple Clean Styling) */}
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
        
        {/* ========================================================================= */}
        {/* FIRST SECTION (Built clean from scratch)                                  */}
        {/* ========================================================================= */}
        <section id="hero-section" className="relative py-16 sm:py-24 overflow-hidden border-b border-[#ede3d8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-7">
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#e2dbce] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#3a6b4c] animate-pulse" />
                <span className="text-xs font-mono font-bold text-[#1d1b18] uppercase tracking-wider">
                  Hyper-Local Rural Business Decision Engine
                </span>
                <span className="text-[10px] font-mono font-bold bg-[#f4eee6] text-[#706c63] px-2 py-0.5 rounded-md">
                  SIH 26091
                </span>
              </div>

              {/* Headline - Typography inspired by 21shares.com & kkr.com */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#1d1b18] tracking-tight leading-[1.08]">
                Stop guessing mandi demand. <br />
                <span className="text-[#3a6b4c]">Grow small business big.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-xl text-[#605a52] max-w-2xl mx-auto leading-relaxed font-medium">
                GramVest eliminates trial-and-error for rural entrepreneurs by modeling genuine village footfall, 3-phase power grid reliability, and pre-qualifying sovereign capital subsidies (<span className="text-[#1d1b18] font-bold">PMEGP, AIF, PMFME</span>).
              </p>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
                <a
                  href="#slideshow-section"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#1d1b18] hover:bg-black text-white text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <span>See How Small Business Grows Big</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>

                <a
                  href="https://webapp-demo-eta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white border border-[#e2dbce] hover:border-[#1d1b18]/40 hover:bg-[#faf7f2] text-[#1d1b18] text-sm font-bold transition-all flex items-center justify-center gap-2"
                >
                  <span>Open Catchment Simulator</span>
                  <svg className="w-4 h-4 text-[#706c63]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>

              {/* Clean Metric Cards (21shares aesthetic) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-8 border-t border-[#ede3d8]/80 text-left">
                <div className="p-4 rounded-2xl bg-white border border-[#ede3d8]">
                  <span className="text-[10px] font-mono font-bold text-[#706c63] uppercase block">Sovereign Grants</span>
                  <span className="text-xl sm:text-2xl font-black text-[#1d1b18] block mt-1">₹18.4 Cr+</span>
                  <span className="text-[10px] text-[#3a6b4c] font-bold mt-0.5 block">Mapped &amp; Verified</span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#ede3d8]">
                  <span className="text-[10px] font-mono font-bold text-[#706c63] uppercase block">Panchayats Tracked</span>
                  <span className="text-xl sm:text-2xl font-black text-[#1d1b18] block mt-1">14,200+</span>
                  <span className="text-[10px] text-[#3a6b4c] font-bold mt-0.5 block">PSPCL Feeder Feeds</span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#ede3d8]">
                  <span className="text-[10px] font-mono font-bold text-[#706c63] uppercase block">Average Solvency</span>
                  <span className="text-xl sm:text-2xl font-black text-[#1d1b18] block mt-1">1.82x DSCR</span>
                  <span className="text-[10px] text-[#3a6b4c] font-bold mt-0.5 block">Above 1.30x Hurdle</span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#ede3d8]">
                  <span className="text-[10px] font-mono font-bold text-[#706c63] uppercase block">Broker Commission</span>
                  <span className="text-xl sm:text-2xl font-black text-[#3a6b4c] block mt-1">0% Fee</span>
                  <span className="text-[10px] text-[#706c63] font-bold mt-0.5 block">Direct Sovereign Routing</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* AFTER FIRST SECTION: SLIDESHOW BANNER SECTION                             */}
        {/* Banner 1: Animation of What We Do (Small Business Grows Big)              */}
        {/* ========================================================================= */}
        <div id="slideshow-section">
          <BannerSlideshowSection />
        </div>

      </main>

      {/* Global Footer */}
      <footer className="bg-[#151311] text-[#a89f91] py-14 border-t border-[#332d27] text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-[#2a2520]">
            <div>
              <img
                src="/gramvest_logo3.png"
                alt="GramVest"
                className="h-10 w-auto object-contain brightness-0 invert opacity-90"
              />
              <p className="text-xs text-[#a89f91] mt-2 max-w-md">
                Smart India Hackathon 2026 Problem Statement 26091. Transforming rural micro-enterprises into bank-funded ventures through spatial feasibility and direct sovereign subsidy integration.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
              <a href="#hero-section" className="hover:text-white transition-colors">Overview</a>
              <a href="#slideshow-section" className="hover:text-white transition-colors">What We Do</a>
              <Link href="/login" className="hover:text-white transition-colors">User Login</Link>
              <Link href="/institution" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Institution Portal ↗</Link>
              <a href="https://webapp-demo-eta.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Dashboard Demo ↗</a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[11px] text-[#787167]">
            <span>© 2026 GRAMVEST • SMART INDIA HACKATHON 2026</span>
            <span>PUNJAB AGRICULTURAL UNIVERSITY (PAU) BENCHMARKS • FASTAPI &amp; REACT 19</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
