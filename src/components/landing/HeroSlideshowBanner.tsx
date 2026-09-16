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
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [growthStage, setGrowthStage] = useState<number>(1);

  const totalSlides = 3;
  const slideDuration = 6000; // ms

  useEffect(() => {
    if (!isPlaying) return;

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
  }, [isPlaying, totalSlides]);

  const selectSlide = (index: number) => {
    setActiveSlide(index);
    setProgress(0);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  };

  // Small Business to Big Enterprise Growth Data
  const growthDataMap: Record<
    number,
    {
      tag: string;
      title: string;
      desc: string;
      scaleMetric: string;
      subMetric: string;
      dscr: string;
      radius: string;
    }
  > = {
    1: {
      tag: "1. Seed Phase",
      title: "Grassroots Savings (₹1.0L)",
      desc: "Unorganized village dairy stall with volatile mandi pricing, high spoilage, and zero formal bank access.",
      scaleMetric: "₹1.0L Own Capital",
      subMetric: "Unorganized",
      dscr: "N/A",
      radius: "Local Village Only",
    },
    2: {
      tag: "2. Feasibility Audit",
      title: "10km Catchment Scan",
      desc: "GramVest detects 3,800 L/day unserved milk deficit across 14 Gram Panchayats with 16h 3-phase power feeder.",
      scaleMetric: "3,800 L/Day Deficit",
      subMetric: "High Viability (74/100)",
      dscr: "1.42x Estimated",
      radius: "10km Radius Cleared",
    },
    3: {
      tag: "3. Scaled Enterprise",
      title: "₹10L – ₹50L Modern Plant",
      desc: "Bank-approved 1,000L Bulk Milk Cooler with ₹3.15L PMEGP grant and 1.82x DSCR concessional term loan.",
      scaleMetric: "₹10.0L Project Value",
      subMetric: "₹3.15L Grant Disbursed",
      dscr: "1.82x Solvency Passed",
      radius: "Regional Mandi Hub",
    },
  };

  const growthData = growthDataMap[growthStage] || growthDataMap[1];

  return (
    <section className="relative bg-[#fff8f2] border-b border-[#e7e1d8] overflow-hidden" id="overview">
      
      {/* Background Canvas Animation: Small Business Grows Big */}
      <BusinessGrowthAnimation />

      {/* Main Slideshow Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 relative z-10">
        
        {/* Top Slideshow Navigation Tabs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-[#e7e1d8] pb-4">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto w-full sm:w-auto">
            <button
              onClick={() => selectSlide(0)}
              className={`text-xs sm:text-sm font-bold tracking-tight px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 shrink-0 ${
                activeSlide === 0
                  ? "bg-[#1d1b18] text-white shadow-xs"
                  : "bg-white/80 border border-[#e2dbce] text-[#706c63] hover:text-[#1d1b18]"
              }`}
            >
              <span className="font-mono text-[11px] opacity-75">01</span>
              <span>What We Do &amp; Scaling MSMEs</span>
            </button>

            <button
              onClick={() => selectSlide(1)}
              className={`text-xs sm:text-sm font-bold tracking-tight px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 shrink-0 ${
                activeSlide === 1
                  ? "bg-[#1d1b18] text-white shadow-xs"
                  : "bg-white/80 border border-[#e2dbce] text-[#706c63] hover:text-[#1d1b18]"
              }`}
            >
              <span className="font-mono text-[11px] opacity-75">02</span>
              <span>Government Schemes &amp; Subsidies</span>
            </button>

            <button
              onClick={() => selectSlide(2)}
              className={`text-xs sm:text-sm font-bold tracking-tight px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 shrink-0 ${
                activeSlide === 2
                  ? "bg-[#1d1b18] text-white shadow-xs"
                  : "bg-white/80 border border-[#e2dbce] text-[#706c63] hover:text-[#1d1b18]"
              }`}
            >
              <span className="font-mono text-[11px] opacity-75">03</span>
              <span>Concessional Financing Options</span>
            </button>
          </div>

          {/* Progress & Play Controls */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 rounded-full bg-white border border-[#ddd6c9] flex items-center justify-center text-[#1d1b18] hover:bg-[#f3ede6] transition-colors shadow-2xs"
              title={isPlaying ? "Pause slide rotation" : "Play slide rotation"}
            >
              {isPlaying ? (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </button>

            {/* Segmented Progress Bar */}
            <div className="flex items-center gap-1 w-24">
              {[0, 1, 2].map((idx) => (
                <div
                  key={idx}
                  className="h-1.5 flex-1 bg-[#ddd6c9] rounded-full overflow-hidden"
                >
                  <div
                    className="h-full bg-[#c75d3e] transition-all duration-75"
                    style={{
                      width:
                        activeSlide === idx
                          ? `${progress}%`
                          : activeSlide > idx
                          ? "100%"
                          : "0%",
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={prevSlide}
                className="w-8 h-8 rounded-lg bg-white border border-[#ddd6c9] flex items-center justify-center text-[#1d1b18] hover:bg-[#f3ede6] transition-colors"
                title="Previous Slide"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="w-8 h-8 rounded-lg bg-white border border-[#ddd6c9] flex items-center justify-center text-[#1d1b18] hover:bg-[#f3ede6] transition-colors"
                title="Next Slide"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* SLIDE 1: WHAT WE DO & SCALING SMALL BUSINESS BIG                  */}
        {/* ================================================================= */}
        {activeSlide === 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-fade-in">
            {/* Left Headline & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge: Hyper-Local Rural Business Decision Engine | SIH 26091 */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fbebe4] border border-[#c75d3e]/25 text-[#9d3e21] text-xs font-mono uppercase tracking-wider font-bold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#c75d3e] animate-pulse" />
                <span>Hyper-Local Rural Business Decision Engine</span>
                <span className="text-[10px] bg-[#1d1b18] text-white px-2 py-0.5 rounded-md ml-1 font-mono">
                  SIH 26091
                </span>
              </div>

              {/* High-Impact Headline: Stop guessing mandi demand. */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#1d1b18] tracking-tight leading-[1.08]">
                  Stop guessing mandi demand.
                </h1>
                <p className="text-lg sm:text-xl font-medium text-[#706c63] leading-snug">
                  We turn rural micro-enterprises into bank-funded ventures through spatial feasibility, power feeder telemetry, and sovereign subsidy integration.
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#706c63] max-w-xl leading-relaxed">
                60% of rural micro-enterprises default in Year 1 due to blind competition. GramVest combines APMC mandi arrivals, OpenStreetMap spatial buffers, and deterministic financial underwriting to turn village ideas into bank-approved enterprises in under 3 minutes.
              </p>

              {/* Action CTAs (No simulator button! Explore Business Cycle & View FAQs) */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#business-cycle"
                  className="bg-[#c75d3e] hover:bg-[#b04f32] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md shadow-[#c75d3e]/25 transition-all flex items-center gap-2 group"
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
                  className="bg-white hover:bg-[#faf7f2] text-[#1d1b18] border border-[#ddd6c9] font-bold text-sm px-5 py-3.5 rounded-xl transition-all flex items-center gap-2"
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
            </div>

            {/* Right Visual Stage: The "Small Business Growing Big" Interactive Progression */}
            <div className="lg:col-span-5">
              <div className="bg-white/95 backdrop-blur-sm border border-[#e7e1d8] rounded-3xl p-6 sm:p-7 shadow-xl shadow-[#1d1b18]/5 relative overflow-hidden">
                
                {/* Stage Controls */}
                <div className="flex items-center justify-between border-b border-[#ede7e1] pb-3 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#c75d3e] animate-ping" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1d1b18]">
                      Growth Simulator
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    {[1, 2, 3].map((stg) => (
                      <button
                        key={stg}
                        onClick={() => setGrowthStage(stg)}
                        className={`text-xs font-bold px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                          growthStage === stg
                            ? "bg-[#c75d3e] text-white shadow-xs"
                            : "bg-[#f3ede6] text-[#706c63] hover:text-[#1d1b18]"
                        }`}
                      >
                        Stage {stg}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Central Expanding Circular Visual Portal */}
                <div className="bg-gradient-to-b from-[#f9f5f0] to-[#ede7e1] border border-[#e7e1d8] rounded-2xl p-6 flex flex-col items-center justify-between min-h-[290px] relative overflow-hidden">
                  
                  {/* Top Floating Badge */}
                  <div className="bg-white/95 backdrop-blur-sm border border-[#e7e1d8] rounded-xl px-3 py-1.5 shadow-2xs self-start">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#706c63] block">
                      CATCHMENT RADIUS
                    </span>
                    <span className="text-xs font-extrabold text-[#1d1b18]">
                      {growthData.radius}
                    </span>
                  </div>

                  {/* Expanding Graphic Orb */}
                  <div className="my-4 flex items-center justify-center">
                    <div
                      className={`rounded-full border-4 flex flex-col items-center justify-center transition-all duration-500 shadow-xl ${
                        growthStage === 1
                          ? "w-28 h-28 bg-white border-[#ddd6c9] scale-100 shadow-[#1d1b18]/5"
                          : growthStage === 2
                          ? "w-36 h-36 bg-[#fbebe4] border-[#c75d3e] scale-105 shadow-[#c75d3e]/20"
                          : "w-44 h-44 bg-gradient-to-br from-[#fbebe4] to-[#fcedea] border-[#9d3e21] scale-110 shadow-[#9d3e21]/30"
                      }`}
                    >
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#706c63]">
                        {growthData.tag}
                      </span>
                      <span className="font-mono text-sm sm:text-base font-extrabold text-[#1d1b18] text-center px-2 mt-1">
                        {growthData.scaleMetric}
                      </span>
                      <span className="text-[10px] font-bold text-[#c75d3e] uppercase block mt-1">
                        {growthData.subMetric}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Metrics Pill */}
                  <div className="w-full bg-white/95 backdrop-blur-sm border border-[#e7e1d8] rounded-xl px-4 py-2.5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-[#706c63] uppercase block">
                        SOLVENCY DSCR
                      </span>
                      <span className="text-xs font-extrabold text-[#c75d3e]">
                        {growthData.dscr}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-[#706c63] uppercase block">
                        BANKABILITY
                      </span>
                      <span className="text-xs font-bold text-[#1d1b18]">
                        {growthStage === 1 ? "Sub-Grade" : growthStage === 2 ? "Lender Grade" : "Prime Grade"}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Narrative Description */}
                <div className="mt-4 pt-3 border-t border-[#ede7e1]">
                  <div className="text-xs font-bold text-[#1d1b18]">
                    {growthData.title}
                  </div>
                  <p className="text-xs text-[#706c63] mt-1 leading-relaxed">
                    {growthData.desc}
                  </p>
                </div>

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
    </section>
  );
}
