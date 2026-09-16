"use client";

import React from "react";
import BusinessGrowthAnimation from "./BusinessGrowthAnimation";

export default function HeroSlideshowBanner() {
  return (
    <section className="relative bg-[#fff8f2] border-b border-[#e7e1d8] overflow-hidden" id="overview">
      
      {/* Background Canvas Animation: Small Business Grows Big */}
      <BusinessGrowthAnimation />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-7">
          
          {/* Badge: Hyper-Local Rural Business Decision Engine • SIH 26091 */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fbebe4] border border-[#c75d3e]/25 text-[#9d3e21] text-xs font-mono uppercase tracking-wider font-bold shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#c75d3e] animate-pulse" />
            <span>Hyper-Local Rural Business Decision Engine</span>
            <span className="text-[10px] bg-[#1d1b18] text-white px-2 py-0.5 rounded-md ml-1 font-mono">
              SIH 26091
            </span>
          </div>

          {/* High-Impact Headline: Stop guessing mandi demand. */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#1d1b18] tracking-tight leading-[1.08]">
            Stop guessing mandi demand.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-[#605a52] max-w-3xl mx-auto leading-relaxed font-medium">
            GramVest eliminates trial-and-error for rural entrepreneurs by modeling genuine village footfall, 3-phase power grid reliability, and auto-matching qualifying sovereign capital subsidies (<span className="text-[#1d1b18] font-bold">PMEGP, AIF, PMFME</span>).
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#business-cycle"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#c75d3e] hover:bg-[#b04f32] text-white text-sm font-bold shadow-md shadow-[#c75d3e]/25 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Explore The Business Cycle</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#faqs"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white border border-[#ddd6c9] hover:bg-[#faf7f2] text-[#1d1b18] text-sm font-bold transition-colors flex items-center justify-center gap-2"
            >
              <span>Frequently Asked Questions</span>
              <svg
                className="w-4 h-4 text-[#706c63]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </a>
          </div>

          {/* Clean Metric Cards (21shares aesthetic • Terracotta & Charcoal • Zero Green) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-8 border-t border-[#ede3d8]/80 text-left">
            <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-xs border border-[#ede3d8] shadow-2xs">
              <span className="text-[10px] font-mono font-bold text-[#706c63] uppercase block">
                Sovereign Grants
              </span>
              <span className="text-xl sm:text-2xl font-black text-[#1d1b18] block mt-1">
                ₹18.4 Cr+
              </span>
              <span className="text-[10px] text-[#c75d3e] font-bold mt-0.5 block">
                Mapped &amp; Verified
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-xs border border-[#ede3d8] shadow-2xs">
              <span className="text-[10px] font-mono font-bold text-[#706c63] uppercase block">
                Panchayats Tracked
              </span>
              <span className="text-xl sm:text-2xl font-black text-[#1d1b18] block mt-1">
                14,200+
              </span>
              <span className="text-[10px] text-[#c75d3e] font-bold mt-0.5 block">
                PSPCL Feeder Feeds
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-xs border border-[#ede3d8] shadow-2xs">
              <span className="text-[10px] font-mono font-bold text-[#706c63] uppercase block">
                Average Solvency
              </span>
              <span className="text-xl sm:text-2xl font-black text-[#1d1b18] block mt-1">
                1.82x DSCR
              </span>
              <span className="text-[10px] text-[#c75d3e] font-bold mt-0.5 block">
                Above 1.30x Hurdle
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-xs border border-[#ede3d8] shadow-2xs">
              <span className="text-[10px] font-mono font-bold text-[#706c63] uppercase block">
                Broker Commission
              </span>
              <span className="text-xl sm:text-2xl font-black text-[#c75d3e] block mt-1">
                0% Fee
              </span>
              <span className="text-[10px] text-[#706c63] font-bold mt-0.5 block">
                Direct Sovereign Routing
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
