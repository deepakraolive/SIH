"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface GrowthStageData {
  caption: string;
  status: string;
  viability: string;
  cost: string;
  subsidy: string;
  dscr: string;
  detail: string;
}

const GROWTH_STAGES: Record<number, GrowthStageData> = {
  1: {
    caption: "Stage 1: Seed Idea",
    status: "3,800 L/Day Deficit",
    viability: "74 / 100 Grade A",
    cost: "₹10,00,000",
    subsidy: "₹3,15,000",
    dscr: "1.62x",
    detail: "Jagraon Block (Ludhiana): Gurpreet contributes ₹1.0L margin savings. GramVest structures a ₹10.0L Milk Chilling Unit with ₹3.15L PMEGP subsidy.",
  },
  2: {
    caption: "Stage 2: Feasibility Radar",
    status: "68% Mandi Deficit",
    viability: "79 / 100 High",
    cost: "₹15,00,000",
    subsidy: "₹5,07,500",
    dscr: "1.74x",
    detail: "Catchment Scan: 14 Gram Panchayats verified within 12km radius. 3-phase rural power feeder guaranteed 16h/day. Two competitors operating at low capacity.",
  },
  3: {
    caption: "Stage 3: Scaled ₹50L Enterprise",
    status: "Bank Sanctioned",
    viability: "86 / 100 Top Quartile",
    cost: "₹50,00,000",
    subsidy: "₹12,50,000",
    dscr: "1.92x",
    detail: "Full Enterprise Scale: Syndicated term loan with Lead District Bank. 12-page CMA dossier approved. Direct integration with institutional dairy processors.",
  },
};

const HEADLINES = [
  {
    prefix: "Building small business ",
    highlight: "big",
    suffix: " from rural seed to scaled enterprise.",
    color: "terracotta",
  },
  {
    prefix: "Know your mandi demand & competition ",
    highlight: "before",
    suffix: " you borrow.",
    color: "terracotta",
  },
  {
    prefix: "Unlock ",
    highlight: "35% sovereign grants",
    suffix: " with zero broker exploitation.",
    color: "green",
  },
  {
    prefix: "Institutional credit structuring with ",
    highlight: "auditable 1.8x DSCR",
    suffix: " solvency clearance.",
    color: "terracotta",
  },
];

export default function KKRHeroBanner() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeStage, setActiveStage] = useState<number>(1);
  const [progress, setProgress] = useState<number>(0);

  const slideDuration = 4500; // ms

  useEffect(() => {
    if (!isPlaying) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 100 / (slideDuration / 50);
      });
    }, 50);

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % HEADLINES.length;
        const targetStage = next === 0 ? 1 : next === 1 ? 2 : 3;
        setActiveStage(targetStage);
        return next;
      });
      setProgress(0);
    }, slideDuration);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [isPlaying]);

  const selectSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
    const targetStage = index === 0 ? 1 : index === 1 ? 2 : 3;
    setActiveStage(targetStage);
  };

  const handleStageClick = (stageNum: number) => {
    setActiveStage(stageNum);
    setIsPlaying(false);
  };

  const stageData = GROWTH_STAGES[activeStage];

  return (
    <section className="relative bg-[#fff8f2] border-b border-[#ede3d8] pt-12 pb-20 md:py-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d4e6c1]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#fbebe4]/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Kinetic Typographic Engine (KKR-style) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fbebe4] text-[#9d3e21] border border-[#c75d3e]/20 text-[11px] font-bold uppercase tracking-wider">
                Hyper-Local Decision Engine
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4e6c1]/60 text-[#3a6b4c] border border-[#3a6b4c]/20 text-[11px] font-bold uppercase tracking-wider">
                PMEGP 35% Capital Grant Active
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white text-[#5a524a] border border-[#ede3d8] text-[11px] font-bold uppercase tracking-wider">
                RBI Priority Sector Lending
              </span>
            </div>

            {/* Kinetic Typography Statements */}
            <div className="min-h-[160px] sm:min-h-[190px] flex items-center">
              {HEADLINES.map((item, idx) => (
                <h1
                  key={idx}
                  className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1d1b18] leading-[1.15] transition-all duration-500 ${
                    currentSlide === idx
                      ? "block opacity-100 translate-y-0"
                      : "hidden opacity-0 translate-y-4"
                  }`}
                >
                  {item.prefix}
                  <span
                    className={
                      item.color === "green"
                        ? "text-[#3a6b4c]"
                        : "text-[#c75d3e]"
                    }
                  >
                    {item.highlight}
                  </span>
                  {item.suffix}
                </h1>
              ))}
            </div>

            <p className="text-base sm:text-lg text-[#706c63] max-w-xl leading-relaxed">
              GramVest empowers rural entrepreneurs and MSMEs across Punjab to streamline project feasibility, claim government capital subsidies, and secure institutional bank financing with zero guesswork.
            </p>

            {/* Banner Controls & Segmented Progress Track */}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-9 h-9 rounded-full bg-white border border-[#ddd6c9] flex items-center justify-center text-[#1d1b18] hover:bg-[#f9f3ec] transition-colors shadow-xs"
                title={isPlaying ? "Pause rotation" : "Play rotation"}
              >
                {isPlaying ? (
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                )}
              </button>

              <div className="flex items-center gap-2 w-48 sm:w-64">
                {HEADLINES.map((_, idx) => (
                  <div
                    key={idx}
                    onClick={() => selectSlide(idx)}
                    className="h-1 flex-1 bg-[#ddd6c9] rounded-full overflow-hidden cursor-pointer relative"
                  >
                    <div
                      className="h-full bg-[#c75d3e] rounded-full transition-all duration-100"
                      style={{
                        width:
                          currentSlide === idx
                            ? `${progress}%`
                            : currentSlide > idx
                            ? "100%"
                            : "0%",
                      }}
                    />
                  </div>
                ))}
              </div>

              <span className="font-mono text-xs font-semibold text-[#706c63]">
                0{currentSlide + 1} / 04
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#business-cycle"
                className="bg-[#c75d3e] hover:bg-[#b04f32] text-white font-bold text-sm px-6 py-3 rounded-lg shadow-md shadow-[#c75d3e]/20 transition-all flex items-center gap-2 group"
              >
                <span>Explore Business Cycle</span>
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

              <Link
                href="/institution"
                className="bg-white hover:bg-[#f9f3ec] text-[#1d1b18] border border-[#ddd6c9] font-bold text-sm px-5 py-3 rounded-lg transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-[#706c63]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M15 10v11M12 3l9 7H3z" />
                </svg>
                <span>Institution Login</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Stage (Building Small Business Big) */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#ede3d8] rounded-3xl p-6 shadow-xl shadow-[#1d1b18]/5 relative overflow-hidden">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#ede3d8] pb-3.5 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1d1b18]">
                    Enterprise Scaling Engine
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleStageClick(1)}
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full transition-all ${
                      activeStage === 1
                        ? "bg-[#c75d3e] text-white"
                        : "bg-[#f9f3ec] text-[#706c63] hover:text-[#1d1b18]"
                    }`}
                  >
                    1. Seed
                  </button>
                  <button
                    onClick={() => handleStageClick(2)}
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full transition-all ${
                      activeStage === 2
                        ? "bg-[#c75d3e] text-white"
                        : "bg-[#f9f3ec] text-[#706c63] hover:text-[#1d1b18]"
                    }`}
                  >
                    2. Feasibility
                  </button>
                  <button
                    onClick={() => handleStageClick(3)}
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full transition-all ${
                      activeStage === 3
                        ? "bg-[#c75d3e] text-white"
                        : "bg-[#f9f3ec] text-[#706c63] hover:text-[#1d1b18]"
                    }`}
                  >
                    3. Scaled ₹50L
                  </button>
                </div>
              </div>

              {/* Central Visual Stage */}
              <div className="bg-gradient-to-b from-[#f9f3ec] to-[#f3ede6] border border-[#ede3d8] rounded-2xl p-5 min-h-[300px] flex flex-col justify-between relative overflow-hidden">
                
                {/* Top Floating Badge */}
                <div className="bg-white/95 backdrop-blur-sm border border-[#ede3d8] rounded-xl px-3.5 py-2 shadow-xs self-start">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#706c63]">
                    Mandi Demand Status
                  </div>
                  <div className="text-sm font-extrabold text-[#3a6b4c]">
                    {stageData.status}
                  </div>
                </div>

                {/* Animated Visual Portal (KKR-style visual element) */}
                <div className="flex items-center justify-center my-4">
                  <div
                    className={`w-36 h-36 rounded-full bg-radial from-white to-[#fbebe4] border-4 border-[#c75d3e] flex flex-col items-center justify-center shadow-lg shadow-[#c75d3e]/20 transition-all duration-500 ${
                      activeStage === 1
                        ? "scale-100"
                        : activeStage === 2
                        ? "scale-105"
                        : "scale-115"
                    }`}
                  >
                    {activeStage === 1 && (
                      <svg className="w-14 h-14 text-[#c75d3e]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path d="M7 21h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                        <path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
                        <line x1="9" y1="12" x2="15" y2="12" />
                        <line x1="12" y1="9" x2="12" y2="15" />
                      </svg>
                    )}
                    {activeStage === 2 && (
                      <svg className="w-14 h-14 text-[#c75d3e]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path d="m4.93 4.93 4.24 4.24" />
                        <path d="m14.83 9.17 4.24-4.24" />
                        <path d="m14.83 14.83 4.24 4.24" />
                        <path d="m9.17 14.83-4.24 4.24" />
                      </svg>
                    )}
                    {activeStage === 3 && (
                      <svg className="w-14 h-14 text-[#c75d3e]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path d="M3 21h18" />
                        <path d="M5 21V7l7-4 7 4v14" />
                        <path d="M9 10a3 3 0 1 0 6 0" />
                        <path d="M9 21v-4a3 3 0 0 1 6 0v4" />
                      </svg>
                    )}
                    <span className="text-[10px] font-bold text-[#9d3e21] uppercase tracking-wider mt-1">
                      {stageData.caption}
                    </span>
                  </div>
                </div>

                {/* Bottom Right Floating Badge */}
                <div className="bg-white/95 backdrop-blur-sm border border-[#ede3d8] rounded-xl px-3.5 py-2 shadow-xs self-end">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#706c63]">
                    Sanction Viability
                  </div>
                  <div className="text-sm font-extrabold text-[#c75d3e]">
                    {stageData.viability}
                  </div>
                </div>

                {/* Micro Detail Narrative */}
                <div className="bg-white/90 border border-[#ede3d8] rounded-lg p-2.5 text-xs text-[#1d1b18] mt-3">
                  {stageData.detail}
                </div>
              </div>

              {/* Bottom Stat Strip (21shares-style chips) */}
              <div className="grid grid-cols-3 gap-2.5 mt-4">
                <div className="bg-[#f9f3ec] border border-[#ede3d8] rounded-xl p-2.5 text-center">
                  <div className="font-mono text-sm sm:text-base font-extrabold text-[#1d1b18]">
                    {stageData.cost}
                  </div>
                  <div className="text-[10px] font-semibold text-[#706c63] uppercase">
                    Project Cost
                  </div>
                </div>

                <div className="bg-[#f9f3ec] border border-[#ede3d8] rounded-xl p-2.5 text-center">
                  <div className="font-mono text-sm sm:text-base font-extrabold text-[#3a6b4c]">
                    {stageData.subsidy}
                  </div>
                  <div className="text-[10px] font-semibold text-[#706c63] uppercase">
                    Govt Grant
                  </div>
                </div>

                <div className="bg-[#f9f3ec] border border-[#ede3d8] rounded-xl p-2.5 text-center">
                  <div className="font-mono text-sm sm:text-base font-extrabold text-[#c75d3e]">
                    {stageData.dscr}
                  </div>
                  <div className="text-[10px] font-semibold text-[#706c63] uppercase">
                    DSCR Coverage
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
