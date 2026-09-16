"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface GrowthStage {
  step: number;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  outlay: string;
  revenue: string;
  viability: number;
  subsidy: string;
  dscr: string;
  footprint: string;
  visualGraphic: "seed" | "audit" | "scaled";
}

const GROWTH_STAGES: GrowthStage[] = [
  {
    step: 1,
    badge: "STAGE 01 • THE VILLAGE SEED",
    title: "Raw Micro Venture",
    tagline: "High risk, guessing demand, personal savings at stake.",
    description:
      "A rural entrepreneur starts with ₹1 Lakh personal savings. Without market data, they risk taking 36% informal debt from local arhtiyas and guessing mandi demand.",
    outlay: "₹1,00,000",
    revenue: "₹18,000 / mo",
    viability: 45,
    subsidy: "₹0 (Unclaimed)",
    dscr: "0.85x (Unbankable)",
    footprint: "Single Village (1.5 km)",
    visualGraphic: "seed",
  },
  {
    step: 2,
    badge: "STAGE 02 • GRAMVEST FEASIBILITY ENGINE",
    title: "Spatial Intelligence & Subsidy Unlock",
    tagline: "Scanning 14 panchayats, power telemetry, unlocking 35% PMEGP grant.",
    description:
      "GramVest runs spatial catchment analytics: detects 1,850 L/day unchilled milk deficit, audits PSPCL 3-phase feeder reliability, and auto-compiles a 100% compliant sovereign subsidy dossier.",
    outlay: "₹9,00,000",
    revenue: "₹45,000 / mo",
    viability: 74,
    subsidy: "₹3,15,000 (PMEGP Grant)",
    dscr: "1.62x (Lender Grade)",
    footprint: "5 Panchayats (6 km)",
    visualGraphic: "audit",
  },
  {
    step: 3,
    badge: "STAGE 03 • INSTITUTIONAL BANK SCALE",
    title: "Small Business Grows Big",
    tagline: "Commercial bank term loan, 1,000L cold chain chiller plant, scaled profits.",
    description:
      "Lead District Bank sanctions ₹6.0 Lakh term loan backed by CGTMSE collateral-free guarantee. The micro-unit scales into a modern agro-processing hub with supply chain contracts.",
    outlay: "₹14,50,000",
    revenue: "₹78,000 / mo",
    viability: 87,
    subsidy: "₹5,07,500 Sanctioned",
    dscr: "1.82x (High Solvency)",
    footprint: "14 Panchayats (12 km Regional Hub)",
    visualGraphic: "scaled",
  },
];

export default function BannerSlideshowSection() {
  // Slideshow State
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [growthStageIndex, setGrowthStageIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  const stageDuration = 6000; // 6 seconds per stage in Banner 1 animation

  // Auto-progress stages in Banner 1 animation
  useEffect(() => {
    if (!isPlaying || currentSlide !== 0) return;

    const intervalTime = 50;
    const increment = 100 / (stageDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setGrowthStageIndex((s) => (s + 1) % GROWTH_STAGES.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, currentSlide, growthStageIndex]);

  const activeStage = GROWTH_STAGES[growthStageIndex];

  return (
    <section className="w-full py-16 sm:py-20 bg-[#fbf9f5] border-t border-[#ede3d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Slide Show Header & Navigation Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#e2dbce]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#3a6b4c] animate-pulse" />
              <span className="text-[11px] font-mono font-bold text-[#3a6b4c] uppercase tracking-wider">
                Interactive Showcase • Banner Slideshow
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1d1b18] tracking-tight">
              What We Do: Small Business Grows Big
            </h2>
          </div>

          {/* Slide Tabs (Banner 1 Active; user will specify future slides) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentSlide(0)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                currentSlide === 0
                  ? "bg-[#1d1b18] text-white shadow-sm"
                  : "bg-white border border-[#e2dbce] text-[#706c63] hover:text-[#1d1b18]"
              }`}
            >
              <span>01 What We Do</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3a6b4c]" />
            </button>

            <button
              onClick={() => setCurrentSlide(1)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                currentSlide === 1
                  ? "bg-[#1d1b18] text-white shadow-sm"
                  : "bg-white/60 border border-dashed border-[#e2dbce] text-[#a09a8f] cursor-not-allowed"
              }`}
              title="Slide 2 will be added as specified"
            >
              <span>02 Next Slide</span>
              <span className="text-[10px] font-mono text-[#a09a8f]">(Pending)</span>
            </button>

            {/* Play / Pause Toggle */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-xl bg-white border border-[#e2dbce] hover:bg-[#faf7f2] text-[#1d1b18] transition-colors ml-1"
              title={isPlaying ? "Pause animation" : "Play animation"}
            >
              {isPlaying ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BANNER 1: ANIMATION OF WHAT WE DO (SMALL BUSINESS GROW BIG)               */}
        {/* Aesthetics from 21shares.com • Kinetic Animation from kkr.com • Topology effects */}
        {/* ========================================================================= */}
        {currentSlide === 0 && (
          <div className="bg-white border border-[#e2dbce] rounded-3xl p-6 sm:p-10 shadow-xl shadow-black/3 overflow-hidden">
            
            {/* Top Stage Progression Bar */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
              {GROWTH_STAGES.map((stg, idx) => (
                <button
                  key={stg.step}
                  onClick={() => {
                    setGrowthStageIndex(idx);
                    setProgress(0);
                  }}
                  className={`text-left p-3 sm:p-4 rounded-2xl border transition-all cursor-pointer ${
                    growthStageIndex === idx
                      ? "bg-[#faf7f2] border-[#1d1b18] shadow-xs"
                      : "bg-white border-[#ede3d8] hover:border-[#1d1b18]/40 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold text-[#706c63]">
                      STEP 0{stg.step}
                    </span>
                    {growthStageIndex === idx && (
                      <span className="w-2 h-2 rounded-full bg-[#3a6b4c] animate-ping" />
                    )}
                  </div>
                  <div className="font-extrabold text-xs sm:text-sm text-[#1d1b18] truncate">
                    {stg.title}
                  </div>
                  
                  {/* Progress Line */}
                  <div className="w-full bg-[#ede3d8] h-1 rounded-full mt-2 overflow-hidden">
                    <div
                      className="bg-[#1d1b18] h-full transition-all duration-75"
                      style={{
                        width:
                          growthStageIndex === idx
                            ? `${progress}%`
                            : growthStageIndex > idx
                            ? "100%"
                            : "0%",
                      }}
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Main Animated Display: Left Typography Narrative + Right Topology Visual */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Kinetic Typography & Narrative (kkr.com & 21shares.com style) */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#f4eee6] text-[#1d1b18] text-xs font-mono font-bold tracking-wider">
                    {activeStage.badge}
                  </span>
                  
                  {/* Kinetic Headline */}
                  <h3 className="text-3xl sm:text-4xl font-black text-[#1d1b18] tracking-tight mt-3 leading-tight transition-all duration-300">
                    {activeStage.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg font-semibold text-[#706c63] mt-2 italic leading-snug">
                    &ldquo;{activeStage.tagline}&rdquo;
                  </p>
                </div>

                <p className="text-sm text-[#504b44] leading-relaxed">
                  {activeStage.description}
                </p>

                {/* Real-Time Live Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 bg-[#fbf9f5] border border-[#ede3d8] rounded-2xl">
                    <span className="text-[10px] font-mono text-[#706c63] uppercase block">
                      Capital Outlay
                    </span>
                    <span className="text-lg font-black text-[#1d1b18] block mt-0.5">
                      {activeStage.outlay}
                    </span>
                  </div>

                  <div className="p-3.5 bg-[#fbf9f5] border border-[#ede3d8] rounded-2xl">
                    <span className="text-[10px] font-mono text-[#706c63] uppercase block">
                      Monthly Earnings
                    </span>
                    <span className="text-lg font-black text-[#3a6b4c] block mt-0.5">
                      {activeStage.revenue}
                    </span>
                  </div>

                  <div className="p-3.5 bg-[#fbf9f5] border border-[#ede3d8] rounded-2xl col-span-2 sm:col-span-1">
                    <span className="text-[10px] font-mono text-[#706c63] uppercase block">
                      Viability Rating
                    </span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className={`text-lg font-black ${activeStage.viability >= 70 ? "text-[#3a6b4c]" : "text-[#c25838]"}`}>
                        {activeStage.viability}/100
                      </span>
                      <span className="text-[9px] font-mono font-bold text-[#706c63]">
                        {activeStage.viability >= 70 ? "✓ Bank Ready" : "⚠ Sub-Grade"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subsidies & DSCR Solvency Pill */}
                <div className="p-4 bg-[#f4eee6]/70 border border-[#e2dbce] rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-[10px] font-mono text-[#706c63] block uppercase">
                      Sovereign Subsidy Claim
                    </span>
                    <span className="font-bold text-[#1d1b18]">
                      {activeStage.subsidy}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#706c63] block uppercase">
                      DSCR Solvency Ratio
                    </span>
                    <span className="font-bold text-[#1d1b18]">
                      {activeStage.dscr}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#706c63] block uppercase">
                      Catchment Footprint
                    </span>
                    <span className="font-bold text-[#3a6b4c]">
                      {activeStage.footprint}
                    </span>
                  </div>
                </div>

                {/* Navigation CTA */}
                <div className="flex items-center gap-3 pt-2">
                  <Link
                    href="/login"
                    className="px-5 py-2.5 rounded-xl bg-[#1d1b18] text-white text-xs font-bold hover:bg-black transition-all shadow-sm flex items-center gap-2"
                  >
                    <span>Run Feasibility for Your Business</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>

                  <a
                    href="https://webapp-demo-eta.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-white border border-[#e2dbce] text-[#1d1b18] text-xs font-bold hover:bg-[#faf7f2] transition-colors"
                  >
                    Explore Live Radar ↗
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Topology Node Architecture (topology.vc inspired) */}
              <div className="lg:col-span-6 bg-[#181614] border border-[#2e2a26] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
                
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#8ed081_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="relative z-10 space-y-6">
                  {/* Top Coordinate Header */}
                  <div className="flex items-center justify-between border-b border-[#2e2a26] pb-3 font-mono text-[11px] text-[#a09a8f]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#8ed081] animate-pulse" />
                      <span>TOPOLOGY SIMULATOR • STAGE {activeStage.step}/3</span>
                    </div>
                    <span>PSL TIER-1 VERIFIED</span>
                  </div>

                  {/* Dynamic Growth Architecture Graphic */}
                  <div className="py-4 space-y-4">
                    
                    {/* Node 1: Village Source */}
                    <div className={`p-4 rounded-2xl border transition-all ${
                      activeStage.visualGraphic === "seed"
                        ? "bg-[#25221e] border-[#c25838] ring-2 ring-[#c25838]/30 shadow-lg"
                        : "bg-[#1f1c19] border-[#2e2a26]"
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-[#c25838]/20 text-[#c25838] flex items-center justify-center font-black text-sm">
                            01
                          </div>
                          <div>
                            <div className="font-bold text-sm text-white">
                              Raw Village Milk / Agro Collection
                            </div>
                            <div className="text-[11px] font-mono text-[#a09a8f]">
                              Manual collection • High spoilage risk • ₹18k/mo
                            </div>
                          </div>
                        </div>
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                          activeStage.visualGraphic === "seed" ? "bg-[#c25838] text-white" : "bg-white/10 text-[#a09a8f]"
                        }`}>
                          {activeStage.visualGraphic === "seed" ? "ACTIVE" : "SEED"}
                        </span>
                      </div>
                    </div>

                    {/* Connecting Signal Arrow */}
                    <div className="flex justify-center -my-2">
                      <div className="w-0.5 h-6 bg-gradient-to-b from-[#c25838] to-[#8ed081]" />
                    </div>

                    {/* Node 2: GramVest Decision Engine */}
                    <div className={`p-4 rounded-2xl border transition-all ${
                      activeStage.visualGraphic === "audit"
                        ? "bg-[#25221e] border-[#8ed081] ring-2 ring-[#8ed081]/30 shadow-lg"
                        : "bg-[#1f1c19] border-[#2e2a26]"
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-[#3a6b4c]/30 text-[#8ed081] flex items-center justify-center font-black text-sm">
                            02
                          </div>
                          <div>
                            <div className="font-bold text-sm text-white">
                              GramVest Catchment Radar + 35% PMEGP
                            </div>
                            <div className="text-[11px] font-mono text-[#8ed081]">
                              1,850 L/day deficit detected • ₹3.15L sovereign grant unlocked
                            </div>
                          </div>
                        </div>
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                          activeStage.visualGraphic === "audit" ? "bg-[#3a6b4c] text-white" : "bg-white/10 text-[#a09a8f]"
                        }`}>
                          {activeStage.visualGraphic === "audit" ? "AUDITING" : "ENGINE"}
                        </span>
                      </div>
                    </div>

                    {/* Connecting Signal Arrow */}
                    <div className="flex justify-center -my-2">
                      <div className="w-0.5 h-6 bg-gradient-to-b from-[#8ed081] to-[#60a5fa]" />
                    </div>

                    {/* Node 3: Bank-Funded Scale */}
                    <div className={`p-4 rounded-2xl border transition-all ${
                      activeStage.visualGraphic === "scaled"
                        ? "bg-[#25221e] border-[#60a5fa] ring-2 ring-[#60a5fa]/30 shadow-lg"
                        : "bg-[#1f1c19] border-[#2e2a26]"
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-[#60a5fa]/20 text-[#60a5fa] flex items-center justify-center font-black text-sm">
                            03
                          </div>
                          <div>
                            <div className="font-bold text-sm text-white">
                              1,000L Chiller Hub • Lead Bank Sanction
                            </div>
                            <div className="text-[11px] font-mono text-[#60a5fa]">
                              ₹6L Term Loan • ₹78k/mo Net Profit • 14 Panchayats
                            </div>
                          </div>
                        </div>
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                          activeStage.visualGraphic === "scaled" ? "bg-[#2563eb] text-white" : "bg-white/10 text-[#a09a8f]"
                        }`}>
                          {activeStage.visualGraphic === "scaled" ? "SCALED BIG" : "GOAL"}
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Bottom Console Feed */}
                  <div className="p-3 bg-black/40 rounded-xl border border-[#2e2a26] font-mono text-[11px] text-[#a09a8f] flex items-center justify-between">
                    <span>STATUS: {activeStage.visualGraphic.toUpperCase()}_STAGE_VERIFIED</span>
                    <span className="text-[#8ed081]">DSCR: {activeStage.dscr}</span>
                  </div>

                </div>
              </div>

            </div>

          </div>
        )}

        {/* Placeholder for Slide 2 (User will specify what this will be) */}
        {currentSlide === 1 && (
          <div className="bg-white border border-dashed border-[#e2dbce] rounded-3xl p-12 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#faf7f2] border border-[#ede3d8] flex items-center justify-center mx-auto text-xl mb-4">
              📝
            </div>
            <h3 className="text-xl font-bold text-[#1d1b18]">
              Slide 2 is Reserved
            </h3>
            <p className="text-sm text-[#706c63] max-w-md mx-auto mt-2">
              Banner 1 is fully active above. Additional slide content will be added here as soon as you specify what it should contain.
            </p>
            <button
              onClick={() => setCurrentSlide(0)}
              className="mt-6 px-4 py-2 rounded-xl bg-[#1d1b18] text-white text-xs font-bold hover:bg-black transition-colors"
            >
              ← Return to Banner 1 (What We Do)
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
