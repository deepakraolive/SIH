"use client";

import React, { useState } from "react";
import Link from "next/link";
import HeroSlideshowBanner from "@/components/landing/HeroSlideshowBanner";
import BusinessCycleVisualizer from "@/components/landing/BusinessCycleVisualizer";
import MarketRadarTeaser from "@/components/landing/MarketRadarTeaser";

export default function LandingPage() {
  const [isUserLoginOpen, setIsUserLoginOpen] = useState(false);
  const [userPhone, setUserPhone] = useState("");
  const [userOtp, setUserOtp] = useState("");
  const [loginStep, setLoginStep] = useState<"phone" | "otp">("phone");
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  return (
    <div className="bg-[#fff8f2] text-[#1d1b18] min-h-screen selection:bg-[#c75d3e] selection:text-white">
      
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
      <header className="sticky top-0 z-50 bg-[#fff8f2]/90 backdrop-blur-md border-b border-[#ede3d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c75d3e] to-[#9d3e21] flex items-center justify-center text-white shadow-md shadow-[#c75d3e]/25 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path d="M3 21h18" />
                <path d="M5 21V7l7-4 7 4v14" />
                <path d="M9 10a3 3 0 1 0 6 0" />
                <path d="M9 21v-4a3 3 0 0 1 6 0v4" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-[#1d1b18]">
                  Gram<span className="text-[#c75d3e]">Vest</span>
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-[#d4e6c1]/60 text-[#3a6b4c] border border-[#3a6b4c]/20">
                  LIVE
                </span>
              </div>
              <p className="text-[11px] font-semibold text-[#706c63] uppercase tracking-wider">
                Rural Feasibility Radar
              </p>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#382f29]">
            <a href="#schemes" className="hover:text-[#c75d3e] transition-colors">
              Govt Schemes
            </a>
            <a href="#business-cycle" className="hover:text-[#c75d3e] transition-colors">
              Business Cycle
            </a>
            <a href="#market-radar" className="hover:text-[#c75d3e] transition-colors">
              Catchment Radar
            </a>
          </nav>

          {/* 3 Nav Logins: 1. User Login, 2. Institution Login (Identical styling), 3. Dashboard */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* 1. User Login (Opens dedicated /login page) */}
            <Link
              href="/login"
              className="flex items-center gap-1.5 sm:gap-2 bg-[#c25838] hover:bg-[#b04f32] text-white text-xs sm:text-[13.5px] font-bold px-3.5 sm:px-4 py-2 rounded-xl shadow-xs shadow-[#c25838]/20 transition-all whitespace-nowrap"
              title="Open MSME Entrepreneur Login Page"
            >
              <svg className="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
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
              className="flex items-center gap-1.5 sm:gap-2 bg-[#c25838] hover:bg-[#b04f32] text-white text-xs sm:text-[13.5px] font-bold px-3.5 sm:px-4 py-2 rounded-xl shadow-xs shadow-[#c25838]/20 transition-all whitespace-nowrap"
              title="Open Institution Portal in a different page"
            >
              <svg className="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M15 10v11M12 3l9 7H3z" />
              </svg>
              <span>Institution Login</span>
            </Link>

            {/* 3. Dashboard (Redirects to https://webapp-demo-eta.vercel.app/) */}
            <a
              href="https://webapp-demo-eta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 bg-white border-[1.5px] border-[#e2dbce] hover:border-[#c25838]/50 hover:bg-[#faf7f2] text-[#1d1b18] text-xs sm:text-[13.5px] font-bold px-3.5 sm:px-4 py-2 rounded-xl shadow-xs transition-all whitespace-nowrap group"
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

      {/* User Login Modal */}
      {isUserLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#fff8f2] border border-[#ede3d8] rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setIsUserLoginOpen(false)}
              className="absolute top-4 right-4 text-[#706c63] hover:text-[#1d1b18] w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#f3ede6] transition-colors font-bold"
            >
              ✕
            </button>

            <div className="mb-5">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#fbebe4] text-[#9d3e21] text-[11px] font-mono font-bold uppercase tracking-wider mb-2">
                MSME Entrepreneur Portal
              </span>
              <h3 className="text-xl font-extrabold text-[#1d1b18] tracking-tight">
                User Login
              </h3>
              <p className="text-xs text-[#706c63] mt-1">
                Sign in to view your feasibility scorecard, track subsidy claims, and access bank-ready DPRs.
              </p>
            </div>

            {loginStep === "phone" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#1d1b18] uppercase tracking-wider mb-1.5">
                    Mobile Number / Aadhaar
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-[#ddd6c9] bg-[#f3ede6] text-xs font-bold text-[#706c63]">
                      +91
                    </span>
                    <input
                      type="text"
                      placeholder="98765 43210"
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      className="w-full bg-white border border-[#ddd6c9] rounded-r-lg px-3.5 py-2.5 text-sm font-semibold text-[#1d1b18] outline-none focus:border-[#c75d3e]"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setLoginStep("otp")}
                  className="w-full bg-[#c75d3e] hover:bg-[#b04f32] text-white font-bold text-sm py-2.5 rounded-lg shadow-sm transition-all"
                >
                  Send OTP Verification Code
                </button>

                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#ede3d8]" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-2 bg-[#fff8f2] text-[#706c63] font-mono">OR FAST DEMO</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setLoggedInUser("Gurpreet Singh (Dairy MSME)");
                    setIsUserLoginOpen(false);
                  }}
                  className="w-full bg-white hover:bg-[#f3ede6] border border-[#ddd6c9] text-[#1d1b18] font-bold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>⚡ Quick Demo Login: Gurpreet Singh</span>
                  <span className="text-[10px] text-[#3a6b4c] font-mono font-bold bg-[#d4e6c1]/60 px-1.5 py-0.5 rounded">
                    Score: 74/100
                  </span>
                </button>
              </div>
            )}

            {loginStep === "otp" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#1d1b18] uppercase tracking-wider mb-1.5">
                    Enter 4-Digit OTP
                  </label>
                  <p className="text-xs text-[#706c63] mb-2">
                    Code sent to +91 {userPhone || "98765 43210"} (Demo OTP: 1234)
                  </p>
                  <input
                    type="text"
                    maxLength={4}
                    placeholder="1234"
                    value={userOtp}
                    onChange={(e) => setUserOtp(e.target.value)}
                    className="w-full bg-white border border-[#ddd6c9] rounded-lg px-3.5 py-2.5 text-center text-lg font-mono font-bold tracking-widest text-[#1d1b18] outline-none focus:border-[#c75d3e]"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setLoggedInUser(userPhone ? `User (${userPhone.slice(-4)})` : "Gurpreet Singh");
                    setLoginStep("phone");
                    setIsUserLoginOpen(false);
                  }}
                  className="w-full bg-[#c75d3e] hover:bg-[#b04f32] text-white font-bold text-sm py-2.5 rounded-lg shadow-sm transition-all"
                >
                  Verify &amp; Enter Portal
                </button>

                <button
                  type="button"
                  onClick={() => setLoginStep("phone")}
                  className="w-full text-xs font-bold text-[#706c63] hover:text-[#1d1b18] text-center"
                >
                  ← Back to mobile number
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Experience */}
      <main>
        {/* Top Hero Slideshow: Kinetic Typography, What We Do, Govt Schemes & Financing Options */}
        <HeroSlideshowBanner />

        {/* The Cycle of Business & Interactive Capital Structuring Engine */}
        <BusinessCycleVisualizer />

        {/* Spatial Catchment Intelligence Teaser */}
        <MarketRadarTeaser />
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
              <div className="font-mono text-[11px] text-[#8ed081]">
                ✓ 100% Deterministic Calculations
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                Platform Navigation
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">Enterprise Growth Simulator</a></li>
                <li><a href="#schemes" className="hover:text-white transition-colors">Sovereign Scheme Directory</a></li>
                <li><a href="#business-cycle" className="hover:text-white transition-colors">Business Cycle &amp; Capital Structuring</a></li>
                <li><Link href="/institution" className="hover:text-white transition-colors">Institutional Lender Portal</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                Sovereign Schemes
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#schemes" className="hover:text-white transition-colors">PMEGP 35% Capital Grant</a></li>
                <li><a href="#schemes" className="hover:text-white transition-colors">AIF 3% Interest Subvention</a></li>
                <li><a href="#schemes" className="hover:text-white transition-colors">PMFME Micro Subsidy</a></li>
                <li><a href="#schemes" className="hover:text-white transition-colors">CGTMSE Collateral Guarantee</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                Institutional Network
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li><Link href="/institution" className="hover:text-white transition-colors">State Bank of India Lead District</Link></li>
                <li><Link href="/institution" className="hover:text-white transition-colors">Punjab Gramin Bank</Link></li>
                <li><Link href="/institution" className="hover:text-white transition-colors">NABARD Rural Infrastructure</Link></li>
                <li><Link href="/institution" className="hover:text-white transition-colors">SIDBI Concessional Window</Link></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-[#332d27] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs">
            <span>© 2026 GRAMVEST • SMART INDIA HACKATHON 2026</span>
            <span>PUNJAB AGRICULTURAL UNIVERSITY (PAU) BENCHMARKS • FASTAPI & REACT 19</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
