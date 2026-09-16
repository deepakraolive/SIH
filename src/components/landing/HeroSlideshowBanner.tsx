"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import BusinessGrowthAnimation from "./BusinessGrowthAnimation";

interface SchemeItem {
  ticker: string;
  badge: string;
  title: string;
  desc: string;
  maxCost: string;
  subsidyVal: string;
  debtRatio: string;
  authority: string;
}

const SCHEMES: SchemeItem[] = [
  {
    ticker: "PMEGP-RURAL",
    badge: "35% CAPITAL SUBSIDY",
    title: "Prime Minister Employment Generation",
    desc: "Non-repayable capital grant for rural manufacturing and agro-processing up to ₹50 Lakh project cost.",
    maxCost: "₹50.0 Lakh",
    subsidyVal: "Up to ₹17.5 Lakh",
    debtRatio: "60% – 65% Bank Debt",
    authority: "KVIC / DIC Punjab",
  },
  {
    ticker: "AIF-AGRI",
    badge: "3% SUBVENTION",
    title: "Agriculture Infrastructure Fund",
    desc: "Interest subvention and credit guarantee for post-harvest cold storage, bulk milk chillers, and primary processing.",
    maxCost: "₹2.00 Crore",
    subsidyVal: "3.0% p.a. Relief",
    debtRatio: "7-Year Tenure",
    authority: "Ministry of Agriculture",
  },
  {
    ticker: "PMFME-ODOP",
    badge: "35% CREDIT LINKED",
    title: "Micro Food Processing Scheme",
    desc: "Specialized assistance for One District One Product (ODOP) spice mills, mustard oil expellers, and rural bakeries.",
    maxCost: "₹10.0 Lakh Cap",
    subsidyVal: "35% of Outlay",
    debtRatio: "90% Concessional",
    authority: "MoFPI / Punjab Agro",
  },
];

export default function HeroSlideshowBanner() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const totalSlides = 3;
  const slideDuration = 6500; // 6.5s per slide

  // Automatic slide rotation without top bulky buttons
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 100 / (slideDuration / 50);
      });
    }, 50);

    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
      setProgress(0);
    }, slideDuration);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [totalSlides]);

  return (
    <section className="relative bg-[#fff8f2] border-b border-[#e7e1d8] overflow-hidden min-h-[580px] flex flex-col justify-between" id="overview">
      
      {/* Background Canvas Animation: Small Business Grows Big */}
      <BusinessGrowthAnimation />

      {/* Main Slides Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 relative z-10 w-full my-auto">
        
        {/* ================================================================= */}
        {/* SLIDE 1: WHAT WE DO & SCALING SMALL BUSINESS BIG                  */}
        {/* ================================================================= */}
        {activeSlide === 0 && (
          <div className="max-w-4xl mx-auto text-center space-y-7 animate-fade-in">
            
            {/* Badge: Hyper-Local Rural Business Decision Engine • SIH 26091 */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fbebe4] border border-[#c75d3e]/25 text-[#9d3e21] text-xs font-mono uppercase tracking-wider font-bold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#c75d3e] animate-pulse" />
              <span>Hyper-Local Rural Business Decision Engine</span>
              <span className="text-[10px] bg-[#1d1b18] text-white px-2 py-0.5 rounded-md ml-1 font-mono">
                SIH 26091
              </span>
            </div>

            {/* High-Impact Headline: We help small business grow big */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#1d1b18] tracking-tight leading-[1.08]">
              We help small business <span className="text-[#c75d3e]">grow big</span>.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-[#605a52] max-w-3xl mx-auto leading-relaxed font-medium">
              GramVest transforms grassroots rural micro-enterprises into bank-funded ventures by streamlining feasibility, verifying 3-phase power grid reliability, and auto-matching sovereign capital subsidies (<span className="text-[#1d1b18] font-bold">PMEGP, AIF, PMFME</span>).
            </p>

            {/* Action CTAs (No simulator button!) */}
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

            {/* Clean Metric Cards (21shares aesthetic • Zero Green) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-[#ede3d8]/80 text-left">
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
        )}

        {/* ================================================================= */}
        {/* SLIDE 2: GOVERNMENT SCHEMES & CAPITAL SUBSIDIES                   */}
        {/* ================================================================= */}
        {activeSlide === 1 && (
          <div className="animate-fade-in space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fbebe4] border border-[#c75d3e]/25 text-[#9d3e21] text-[11px] font-mono uppercase tracking-wider font-bold">
                  Sovereign Capital Subsidies
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#1d1b18] mt-2">
                  Pre-Integrated Sovereign Grant Matrix
                </h2>
                <p className="text-sm sm:text-base text-[#706c63] mt-1">
                  Matched deterministically to applicant social demographic and tehsil industrial boundaries.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#706c63]">
                  100% NON-REPAYABLE GRANTS
                </span>
              </div>
            </div>

            {/* Scheme Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SCHEMES.map((sch) => (
                <div
                  key={sch.ticker}
                  className="bg-white/95 backdrop-blur-sm border border-[#e7e1d8] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#c75d3e]/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#706c63]">
                        {sch.ticker}
                      </span>
                      <span className="bg-[#fbebe4] text-[#9d3e21] text-xs font-extrabold px-3 py-1 rounded-full border border-[#c75d3e]/20">
                        {sch.badge}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-base text-[#1d1b18] leading-tight">
                      {sch.title}
                    </h3>

                    <p className="text-xs text-[#706c63] leading-relaxed">
                      {sch.desc}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#ede7e1] space-y-2 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#706c63]">MAX PROJECT COST:</span>
                      <span className="font-bold text-[#1d1b18]">{sch.maxCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#706c63]">SUBSIDY VALUE:</span>
                      <div className="font-extrabold text-[#c75d3e]">
                        {sch.subsidyVal}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#706c63]">DEBT RATIO:</span>
                      <span className="font-bold text-[#1d1b18]">{sch.debtRatio}</span>
                    </div>
                    <div className="flex justify-between pt-1 text-[11px] text-[#706c63]">
                      <span>AUTHORITY:</span>
                      <span className="font-semibold text-[#1d1b18]">{sch.authority}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* SLIDE 3: CONCESSIONAL INSTITUTIONAL FINANCING OPTIONS             */}
        {/* ================================================================= */}
        {activeSlide === 2 && (
          <div className="animate-fade-in space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fbebe4] border border-[#c75d3e]/25 text-[#9d3e21] text-[11px] font-mono uppercase tracking-wider font-bold">
                  Institutional Credit Desk
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#1d1b18] mt-2">
                  Institutional Concessional Financing
                </h2>
                <p className="text-sm sm:text-base text-[#706c63] mt-1">
                  Bridging rural entrepreneurs to RBI Priority Sector Lending (PSL) windows.
                </p>
              </div>

              <Link
                href="/institution"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1d1b18] hover:bg-black text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
              >
                <span>Access Institution Portal</span>
                <span>↗</span>
              </Link>
            </div>

            {/* Tier Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Micro Credit */}
              <div className="bg-white/95 backdrop-blur-sm border border-[#e7e1d8] rounded-2xl p-6 shadow-sm space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#fbebe4] text-[#c75d3e] font-extrabold flex items-center justify-center text-sm font-mono">
                  T1
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-[#1d1b18]">
                    Micro-KCC &amp; Mudra Shishu
                  </h3>
                  <p className="text-xs text-[#706c63] mt-1 leading-relaxed">
                    Designed for working capital bridging, raw milk procurement, and local seed inventories.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#ede7e1] space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-[#706c63]">
                    <span className="text-[#c75d3e] font-bold">✓</span> Up to ₹1,40,000 credit limit
                  </div>
                  <div className="flex items-center gap-2 text-[#706c63]">
                    <span className="text-[#c75d3e] font-bold">✓</span> 3-Year quarterly repayment
                  </div>
                  <div className="flex items-center gap-2 text-[#706c63]">
                    <span className="text-[#c75d3e] font-bold">✓</span> 3-Month initial moratorium
                  </div>
                  <div className="flex items-center gap-2 text-[#706c63]">
                    <span className="text-[#c75d3e] font-bold">✓</span> No physical collateral required
                  </div>
                </div>
              </div>

              {/* Card 2: Term Loans & CGTMSE */}
              <div className="bg-white/95 backdrop-blur-sm border-2 border-[#c75d3e] rounded-2xl p-6 shadow-md relative space-y-4">
                <div className="absolute top-4 right-4 bg-[#c75d3e] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                  MOST POPULAR
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#c75d3e] text-white font-extrabold flex items-center justify-center text-sm font-mono">
                  T2
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-[#1d1b18]">
                    CGTMSE Bank Term Loan
                  </h3>
                  <p className="text-xs text-[#706c63] mt-1 leading-relaxed">
                    Credit-linked CaPEx for Bulk Milk Chillers, Spice Mills, and cold storage machinery.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#ede7e1] space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-[#706c63]">
                    <span className="text-[#c75d3e] font-bold">✓</span> Up to ₹50,00,000 project capital
                  </div>
                  <div className="flex items-center gap-2 text-[#706c63]">
                    <span className="text-[#c75d3e] font-bold">✓</span> 7-Year amortization tenure
                  </div>
                  <div className="flex items-center gap-2 text-[#706c63]">
                    <span className="text-[#c75d3e] font-bold">✓</span> 6-Month machinery grace period
                  </div>
                  <div className="flex items-center gap-2 text-[#706c63]">
                    <span className="text-[#c75d3e] font-bold">✓</span> CGTMSE credit guarantee backed
                  </div>
                </div>
              </div>

              {/* Card 3: Cluster Financing */}
              <div className="bg-white/95 backdrop-blur-sm border border-[#e7e1d8] rounded-2xl p-6 shadow-sm space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#1d1b18] text-white font-extrabold flex items-center justify-center text-sm font-mono">
                  T3
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-[#1d1b18]">
                    FPO &amp; Cluster Financing
                  </h3>
                  <p className="text-xs text-[#706c63] mt-1 leading-relaxed">
                    Dedicated syndication for Farmer Producer Organizations and multi-panchayat processing hubs.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#ede7e1] space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-[#706c63]">
                    <span className="text-[#c75d3e] font-bold">✓</span> Venture Debt &amp; Impact Angels
                  </div>
                  <div className="flex items-center gap-2 text-[#706c63]">
                    <span className="text-[#c75d3e] font-bold">✓</span> Ticket sizes ₹20L to ₹1.5 Crore
                  </div>
                  <div className="flex items-center gap-2 text-[#706c63]">
                    <span className="text-[#c75d3e] font-bold">✓</span> Mezzanine cash-flow sharing
                  </div>
                  <div className="flex items-center gap-2 text-[#706c63]">
                    <span className="text-[#c75d3e] font-bold">✓</span> Direct Institution Portal access
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* Subtle, Minimal Slide Dots (Zero bulky buttons at the top) */}
      <div className="relative z-10 pb-6 flex items-center justify-center gap-2">
        {[0, 1, 2].map((idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveSlide(idx);
              setProgress(0);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer overflow-hidden ${
              activeSlide === idx ? "w-10 bg-[#ede3d8]" : "w-3 bg-[#ede3d8] hover:bg-[#c75d3e]/40"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          >
            {activeSlide === idx && (
              <div
                className="h-full bg-[#c75d3e] transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        ))}
      </div>

    </section>
  );
}
