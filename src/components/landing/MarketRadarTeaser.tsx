"use client";

import React, { useState } from "react";

export default function MarketRadarTeaser() {
  const [radius, setRadius] = useState<number>(10);

  return (
    <section className="py-20 bg-[#fff8f2] border-b border-[#ede3d8]" id="market-radar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Topology-inspired Dark Console */}
        <div className="bg-[#151311] text-white rounded-3xl p-8 sm:p-12 border border-[#332d27] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-2xl">
          
          {/* Left Console Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-[11px] font-mono uppercase tracking-wider">
              [GEO-SCAN] Spatial Catchment Radar
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              5km – 10km Local Market Catchment Scan
            </h3>

            <p className="text-sm sm:text-base text-[#a89f91] leading-relaxed">
              Unlike generic urban aggregators, GramVest queries actual Punjab APMC Mandi arrival registries, rural 3-phase high-tension power line maps, and OpenStreetMap spatial competition density.
            </p>

            {/* Radius Switcher Toggle */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-mono text-[#a89f91]">RADIUS:</span>
              <button
                onClick={() => setRadius(5)}
                className={`text-xs font-mono font-bold px-3 py-1 rounded-md border transition-all ${
                  radius === 5
                    ? "bg-[#c75d3e] text-white border-[#c75d3e]"
                    : "bg-[#201c18] text-[#a89f91] border-[#332d27] hover:text-white"
                }`}
              >
                5 KM CATCHMENT
              </button>
              <button
                onClick={() => setRadius(10)}
                className={`text-xs font-mono font-bold px-3 py-1 rounded-md border transition-all ${
                  radius === 10
                    ? "bg-[#c75d3e] text-white border-[#c75d3e]"
                    : "bg-[#201c18] text-[#a89f91] border-[#332d27] hover:text-white"
                }`}
              >
                10 KM REGIONAL
              </button>
            </div>

            {/* Technical Specification Rows */}
            <div className="space-y-3 pt-2 font-mono text-xs">
              <div className="flex justify-between border-b border-[#332d27] pb-2">
                <span className="text-[#a89f91]">PRIMARY APMC MANDI:</span>
                <span className="font-bold text-white">Jagraon Grain &amp; Milk Mandi</span>
              </div>
              <div className="flex justify-between border-b border-[#332d27] pb-2">
                <span className="text-[#a89f91]">POWER GRID CATEGORY:</span>
                <span className="font-bold text-white">Rural Feeder A-1 (16h Daily)</span>
              </div>
              <div className="flex justify-between border-b border-[#332d27] pb-2">
                <span className="text-[#a89f91]">ACTIVE COMPETITORS:</span>
                <span className="font-bold text-[#8ed081]">
                  {radius === 5 ? "1 Unit (40% load)" : "2 Units (under-capacity)"}
                </span>
              </div>
              <div className="flex justify-between border-b border-[#332d27] pb-2">
                <span className="text-[#a89f91]">UNSERVED DEMAND DEFICIT:</span>
                <span className="font-bold text-[#8ed081]">
                  {radius === 5 ? "68% (~1,850 Ltrs / Day)" : "68% (~3,800 Ltrs / Day)"}
                </span>
              </div>
            </div>
          </div>

          {/* Right Radar Canvas Graphic */}
          <div className="lg:col-span-6">
            <div className="bg-[#201c18] border border-[#332d27] rounded-2xl p-6 flex flex-col justify-between min-h-[300px] relative overflow-hidden">
              
              <div className="flex justify-between text-xs font-mono text-[#a89f91]">
                <span>RADAR STATUS: ACTIVE</span>
                <span className="text-[#8ed081]">LAT 30.9010° N / LONG 75.8573° E</span>
              </div>

              {/* Radar Grid Screen */}
              <div className="relative h-48 border border-dashed border-white/20 rounded-xl my-4 flex items-center justify-center bg-radial from-[#8ed081]/10 to-transparent overflow-hidden">
                {/* Crosshairs */}
                <div className="absolute w-full h-px bg-white/10" />
                <div className="absolute h-full w-px bg-white/10" />
                
                {/* Center target node */}
                <div className="w-3 h-3 rounded-full bg-[#8ed081] shadow-lg shadow-[#8ed081]/50 relative z-10" />
                
                {/* Concentric scan pulse rings */}
                <div className="absolute w-24 h-24 border border-[#8ed081]/60 rounded-full animate-ping" />
                <div className="absolute w-36 h-36 border border-white/10 rounded-full" />
                <div className="absolute w-44 h-44 border border-white/5 rounded-full" />

                {/* Detected Competitor Pins */}
                <div
                  className="absolute top-8 right-12 w-2 h-2 rounded-full bg-red-500 shadow-xs"
                  title="Competitor 1: Sidhwan Chiller"
                />
                {radius === 10 && (
                  <div
                    className="absolute bottom-10 left-16 w-2 h-2 rounded-full bg-red-500 shadow-xs"
                    title="Competitor 2: Jagraon Dairy Outpost"
                  />
                )}
              </div>

              <div className="flex justify-between text-xs text-[#a89f91] border-t border-[#332d27] pt-3">
                <span>Catchment Center: Sidhwan Bet</span>
                <span className="text-[#8ed081] font-bold">✓ High Post-Harvest Viability</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
