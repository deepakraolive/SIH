"use client";

import React from "react";
import Link from "next/link";
import KKRHeroBanner from "@/components/landing/KKRHeroBanner";
import SchemeFinancingBanners from "@/components/landing/SchemeFinancingBanners";
import BusinessCycleVisualizer from "@/components/landing/BusinessCycleVisualizer";
import MarketRadarTeaser from "@/components/landing/MarketRadarTeaser";

export default function LandingPage() {
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
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#382f29]">
            <a href="#schemes" className="hover:text-[#c75d3e] transition-colors">
              Govt Schemes
            </a>
            <a href="#business-cycle" className="hover:text-[#c75d3e] transition-colors">
              Business Cycle
            </a>
            <a href="#market-radar" className="hover:text-[#c75d3e] transition-colors">
              Catchment Radar
            </a>
            <Link href="/institution" className="hover:text-[#c75d3e] transition-colors">
              Lender Portal
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/institution"
              className="text-xs sm:text-sm font-bold text-[#1d1b18] hover:text-[#c75d3e] transition-colors px-3 py-2"
            >
              Institution Login
            </Link>

            <Link
              href="/onboarding"
              className="bg-[#c75d3e] hover:bg-[#b04f32] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-lg shadow-md shadow-[#c75d3e]/20 transition-all flex items-center gap-1.5"
            >
              <span>Start Feasibility Check</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>
      </header>

      {/* Module 1 Components */}
      <main>
        {/* Banner 1: KKR-inspired Kinetic Hero Animation */}
        <KKRHeroBanner />

        {/* Banner 2 & 3: Current Government Schemes & Concessional Financing Options */}
        <SchemeFinancingBanners />

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
                Platform Modules
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">Module 1: Landing Page</a></li>
                <li><a href="#schemes" className="hover:text-white transition-colors">Module 1: Scheme Banners</a></li>
                <li><a href="#business-cycle" className="hover:text-white transition-colors">Module 1: Business Cycle</a></li>
                <li><Link href="/institution" className="hover:text-white transition-colors">Module 4: Institution Login</Link></li>
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
