"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

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
  const growthDataMap: Record<number, {
    tag: string;
    title: string;
    desc: string;
    scaleMetric: string;
    subMetric: string;
    dscr: string;
    radius: string;
  }> = {
    1: {
      tag: "1. Seed Phase",
      title: "Grassroots Savings (₹1.0L)",
      desc: "Unorganized dairy stall with volatile mandi pricing, high spoilage, and zero formal bank access.",
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
    <section className="relative bg-[#fcfaf7] border-b border-[#e7e1d8] overflow-hidden">
      {/* Topology-inspired ambient grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ede6dc_1px,transparent_1px),linear-gradient(to_bottom,#ede6dc_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Main Slideshow Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 relative z-10">
        
        {/* Top Slideshow Navigation Tabs (KKR & 21shares style) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-[#e7e1d8] pb-4">
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto w-full sm:w-auto">
            <button
              onClick={() => selectSlide(0)}
              className={`text-xs sm:text-sm font-bold tracking-tight px-3 py-1.5 rounded-lg transition-all flex items-center gap-2 shrink-0 ${
                activeSlide === 0
                  ? "bg-[#1d1b18] text-white shadow-xs"
                  : "text-[#706c63] hover:text-[#1d1b18]"
              }`}
            >
              <span className="font-mono text-[11px] opacity-75">01</span>
              <span>What We Do &amp; Scaling MSMEs</span>
            </button>

            <button
              onClick={() => selectSlide(1)}
              className={`text-xs sm:text-sm font-bold tracking-tight px-3 py-1.5 rounded-lg transition-all flex items-center gap-2 shrink-0 ${
                activeSlide === 1
                  ? "bg-[#1d1b18] text-white shadow-xs"
                  : "text-[#706c63] hover:text-[#1d1b18]"
              }`}
            >
              <span className="font-mono text-[11px] opacity-75">02</span>
              <span>Government Schemes &amp; Subsidies</span>
            </button>

            <button
              onClick={() => selectSlide(2)}
              className={`text-xs sm:text-sm font-bold tracking-tight px-3 py-1.5 rounded-lg transition-all flex items-center gap-2 shrink-0 ${
                activeSlide === 2
                  ? "bg-[#1d1b18] text-white shadow-xs"
                  : "text-[#706c63] hover:text-[#1d1b18]"
              }`}
            >
              <span className="font-mono text-[11px] opacity-75">03</span>
              <span>Concessional Financing Options</span>
            </button>
          </div>

          {/* KKR Progress & Play Controls */}
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

            <div className="flex items-center gap-1.5 w-24">
              {[0, 1, 2].map((idx) => (
                <div
                  key={idx}
                  onClick={() => selectSlide(idx)}
                  className="h-1 flex-1 bg-[#ddd6c9] rounded-full overflow-hidden cursor-pointer relative"
                >
                  <div
                    className="h-full bg-[#c75d3e] rounded-full transition-all duration-100"
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
        {/* SLIDE 1: WHAT WE DO & SCALING SMALL BUSINESS BIG (KKR + TOPOLOGY) */}
        {/* ================================================================= */}
        {activeSlide === 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-fade-in">
            {/* Left Headline & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fbebe4] border border-[#c75d3e]/25 text-[#9d3e21] text-[11px] font-mono uppercase tracking-wider font-bold">
                <span className="w-2 h-2 rounded-full bg-[#c75d3e] animate-pulse" />
                <span>Hyper-Local Decision Engine</span>
              </div>

              {/* KKR-Style Kinetic High-Impact Typography */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1d1b18] leading-[1.12]">
                  We help small businesses{" "}
                  <span className="text-[#c75d3e] underline decoration-[#c75d3e]/30 decoration-wavy">
                    grow big
                  </span>
                  .
                </h1>
                <p className="text-lg sm:text-xl font-medium text-[#706c63] leading-snug">
                  From streamlining project viability and unlocking government subsidies to securing institutional bank finance.
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#706c63] max-w-xl leading-relaxed">
                60% of rural micro-enterprises default in Year 1 due to blind competition. GramVest combines APMC mandi data, OpenStreetMap spatial buffers, and deterministic financial engineering to turn village ideas into bank-approved enterprises in 5 minutes.
              </p>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#business-cycle"
                  className="bg-[#c75d3e] hover:bg-[#b04f32] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md shadow-[#c75d3e]/25 transition-all flex items-center gap-2 group"
                >
                  <span>Explore The Business Cycle</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                <Link
                  href="/institution"
                  className="bg-white hover:bg-[#f3ede6] text-[#1d1b18] border border-[#ddd6c9] font-bold text-sm px-5 py-3.5 rounded-xl transition-all flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-[#706c63]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M15 10v11M12 3l9 7H3z" />
                  </svg>
                  <span>Institution Portal</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Stage: The "Small Business Growing Big" Kinetic Visual (KKR-style portal) */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-[#e7e1d8] rounded-3xl p-6 sm:p-7 shadow-xl shadow-[#1d1b18]/5 relative overflow-hidden">
                
                {/* Stage Controls */}
                <div className="flex items-center justify-between border-b border-[#ede7e1] pb-3 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#3a6b4c] animate-ping" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1d1b18]">
                      Growth Simulator
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    {[1, 2, 3].map((stg) => (
                      <button
                        key={stg}
                        onClick={() => setGrowthStage(stg)}
                        className={`text-xs font-bold px-2.5 py-1 rounded-md transition-all ${
                          growthStage === stg
                            ? "bg-[#c75d3e] text-white"
                            : "bg-[#f3ede6] text-[#706c63] hover:text-[#1d1b18]"
                        }`}
                      >
                        Stage {stg}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Central Expanding Circular Visual Portal (KKR-inspired) */}
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
                          : "w-44 h-44 bg-gradient-to-br from-[#fbebe4] to-[#d4e6c1] border-[#3a6b4c] scale-110 shadow-[#3a6b4c]/30"
                      }`}
                    >
                      {growthStage === 1 && (
                        <div className="text-center p-2">
                          <span className="text-2xl">🌱</span>
                          <span className="text-[10px] font-bold text-[#706c63] uppercase block mt-1">
                            Grassroots
                          </span>
                        </div>
                      )}
                      {growthStage === 2 && (
                        <div className="text-center p-2">
                          <span className="text-3xl">📊</span>
                          <span className="text-[10px] font-bold text-[#c75d3e] uppercase block mt-1">
                            Feasibility Cleared
                          </span>
                        </div>
                      )}
                      {growthStage === 3 && (
                        <div className="text-center p-2">
                          <span className="text-4xl">🏭</span>
                          <span className="text-[10px] font-bold text-[#3a6b4c] uppercase block mt-1">
                            Scaled ₹50L Plant
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom Floating Badge */}
                  <div className="bg-white/95 backdrop-blur-sm border border-[#e7e1d8] rounded-xl px-3 py-1.5 shadow-2xs self-end">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#706c63] block">
                      DSCR SOLVENCY
                    </span>
                    <span className="text-xs font-extrabold text-[#3a6b4c]">
                      {growthData.dscr}
                    </span>
                  </div>

                  {/* Description Box */}
                  <div className="w-full bg-white/90 border border-[#e7e1d8] rounded-xl p-3 text-xs text-[#1d1b18] mt-3">
                    <strong className="text-[#c75d3e] block mb-0.5">{growthData.title}</strong>
                    {growthData.desc}
                  </div>
                </div>

                {/* Bottom Metric Strip */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-[#f9f5f0] border border-[#e7e1d8] rounded-xl p-3 text-center">
                    <div className="font-mono text-sm sm:text-base font-extrabold text-[#1d1b18]">
                      {growthData.scaleMetric}
                    </div>
                    <div className="text-[10px] font-bold text-[#706c63] uppercase">
                      Enterprise Scale
                    </div>
                  </div>
                  <div className="bg-[#f9f5f0] border border-[#e7e1d8] rounded-xl p-3 text-center">
                    <div className="font-mono text-sm sm:text-base font-extrabold text-[#3a6b4c]">
                      {growthData.subMetric}
                    </div>
                    <div className="text-[10px] font-bold text-[#706c63] uppercase">
                      Sovereign Benefit
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* SLIDE 2: CURRENT GOVERNMENT SCHEMES & SUBSIDIES (21SHARES STYLE) */}
        {/* ================================================================= */}
        {activeSlide === 1 && (
          <div className="space-y-8 animate-fade-in">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fbebe4] border border-[#c75d3e]/25 text-[#9d3e21] text-[11px] font-mono uppercase tracking-wider font-bold mb-3">
                <span>Direct Sovereign Routing</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1b18] tracking-tight">
                Current Government Schemes &amp; Subsidies
              </h2>
              <p className="text-sm sm:text-base text-[#706c63] mt-2">
                We eliminate agents and commissions. GramVest deterministically routes your project parameters to official central and state capital subsidy portals.
              </p>
            </div>

            {/* 21shares-style Scheme Product Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SCHEMES.map((scheme, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e7e1d8] rounded-2xl p-6 shadow-xs hover:shadow-lg hover:border-[#c75d3e] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold bg-[#f9f5f0] border border-[#ddd6c9] px-2.5 py-1 rounded-md text-[#1d1b18]">
                        {scheme.ticker}
                      </span>
                      <span className="bg-[#d4e6c1]/70 text-[#3a6b4c] text-xs font-extrabold px-3 py-1 rounded-full border border-[#3a6b4c]/20">
                        {scheme.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#1d1b18] mb-2 group-hover:text-[#c75d3e] transition-colors">
                      {scheme.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#706c63] leading-relaxed mb-6">
                      {scheme.desc}
                    </p>

                    <div className="bg-[#f9f5f0] rounded-xl p-3.5 grid grid-cols-2 gap-3 mb-5 font-mono text-xs">
                      <div>
                        <div className="text-[10px] font-sans font-bold uppercase text-[#706c63]">
                          Max Project Size
                        </div>
                        <div className="font-extrabold text-[#1d1b18]">
                          {scheme.maxCost}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-sans font-bold uppercase text-[#706c63]">
                          Grant Amount
                        </div>
                        <div className="font-extrabold text-[#3a6b4c]">
                          {scheme.subsidyVal}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#ede7e1]">
                    <span className="text-xs font-semibold text-[#706c63]">
                      {scheme.authority}
                    </span>
                    <a
                      href="#business-cycle"
                      className="text-xs font-bold text-[#c75d3e] hover:text-[#9d3e21] flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
                    >
                      Calculate Grant →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* SLIDE 3: FINANCING OPTIONS & CONCESSIONAL DEBT TIERS              */}
        {/* ================================================================= */}
        {activeSlide === 2 && (
          <div className="space-y-8 animate-fade-in">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fbebe4] border border-[#c75d3e]/25 text-[#9d3e21] text-[11px] font-mono uppercase tracking-wider font-bold mb-3">
                <span>Concessional Credit Architecture</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1b18] tracking-tight">
                Financing Options &amp; Concessional Lending
              </h2>
              <p className="text-sm sm:text-base text-[#706c63] mt-2">
                Under State Channelizing Agency and Lead District Bank guidelines, rural entrepreneurs access multi-tiered concessional rates with statutory moratoriums.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Micro Finance Tier */}
              <div className="bg-white border border-[#e7e1d8] rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs font-bold text-[#706c63] uppercase tracking-wider mb-2">
                    Tier 1 • Micro Finance (≤ ₹1.40L)
                  </div>
                  <div className="font-mono text-3xl font-extrabold text-[#1d1b18] mb-4">
                    6.5% <span className="text-xs font-normal text-[#706c63]">p.a. concessional</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#706c63] mb-6">
                    <li className="flex items-center gap-2">
                      <span className="text-[#3a6b4c] font-bold">✓</span> Up to ₹1,40,000 credit limit
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#3a6b4c] font-bold">✓</span> 3-Year quarterly repayment
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#3a6b4c] font-bold">✓</span> 3-Month initial moratorium
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#3a6b4c] font-bold">✓</span> No physical collateral required
                    </li>
                  </ul>
                </div>
                <div className="text-[11px] font-mono text-[#706c63] pt-3 border-t border-[#ede7e1]">
                  State Channelizing Concession
                </div>
              </div>

              {/* Term Loan Tier */}
              <div className="bg-white border-2 border-[#c75d3e] rounded-2xl p-6 flex flex-col justify-between shadow-lg shadow-[#c75d3e]/10">
                <div>
                  <div className="font-mono text-xs font-bold text-[#c75d3e] uppercase tracking-wider mb-2">
                    Tier 2 • MSME Term Loan (₹1.4L - ₹50L)
                  </div>
                  <div className="font-mono text-3xl font-extrabold text-[#1d1b18] mb-4">
                    8.0% <span className="text-xs font-normal text-[#706c63]">p.a. term debt</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#706c63] mb-6">
                    <li className="flex items-center gap-2">
                      <span className="text-[#3a6b4c] font-bold">✓</span> Up to ₹50,00,000 project capital
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#3a6b4c] font-bold">✓</span> 7-Year amortization tenure
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#3a6b4c] font-bold">✓</span> 6-Month machinery grace period
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#3a6b4c] font-bold">✓</span> CGTMSE credit guarantee backed
                    </li>
                  </ul>
                </div>
                <div className="text-[11px] font-mono text-[#c75d3e] pt-3 border-t border-[#ede7e1]">
                  Lead District Bank Standard
                </div>
              </div>

              {/* Co-Financing & Impact Equity Tier */}
              <div className="bg-white border border-[#e7e1d8] rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs font-bold text-[#706c63] uppercase tracking-wider mb-2">
                    Tier 3 • Co-Investment &amp; Growth Tranche
                  </div>
                  <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[#1d1b18] mb-4">
                    Syndicated <span className="text-xs font-normal text-[#706c63]">Debt + Equity</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#706c63] mb-6">
                    <li className="flex items-center gap-2">
                      <span className="text-[#3a6b4c] font-bold">✓</span> Venture Debt &amp; Impact Angels
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#3a6b4c] font-bold">✓</span> Ticket sizes ₹20L to ₹1.5 Crore
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#3a6b4c] font-bold">✓</span> Mezzanine cash-flow sharing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#3a6b4c] font-bold">✓</span> Direct Institution Portal access
                    </li>
                  </ul>
                </div>
                <div className="text-[11px] font-mono text-[#706c63] pt-3 border-t border-[#ede7e1]">
                  Institutional Syndication Desk
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
