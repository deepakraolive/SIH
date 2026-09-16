"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function BusinessCycleVisualizer() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [projectCost, setProjectCost] = useState<number>(1000000);
  const [subsidyCategoryRate, setSubsidyCategoryRate] = useState<number>(35);

  // Capital Structuring Computations
  const marginPct = 10;
  const rawSubsidy = Math.round(projectCost * (subsidyCategoryRate / 100));
  // Maximum PMEGP subsidy cap is ₹17.5 Lakh (35% of ₹50L)
  const subsidyAmount = Math.min(rawSubsidy, 1750000);
  const effectiveSubsidyPct = Math.round((subsidyAmount / projectCost) * 100);

  const marginAmount = Math.round(projectCost * (marginPct / 100));
  const loanAmount = projectCost - subsidyAmount - marginAmount;
  const effectiveLoanPct = 100 - marginPct - effectiveSubsidyPct;

  // Quarterly EMI calculation (7 years, 8% p.a., quarterly amortization)
  const r = 0.02; // quarterly rate
  const n = 28; // 28 quarters (7 years)
  const quarterlyEMI = Math.round(
    loanAmount * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
  );

  // DSCR calculation (based on empirical cash margins: ~29% EBITDA)
  const annualEBITDA = projectCost * 0.29;
  const annualDebtService = quarterlyEMI * 4;
  const dscr = (annualEBITDA / annualDebtService).toFixed(2);
  const isHurdlePassed = parseFloat(dscr) >= 1.30;

  const formatINR = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="py-20 bg-[#f9f5f0] border-b border-[#e7e1d8]" id="business-cycle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fbebe4] border border-[#c75d3e]/25 text-[#9d3e21] text-[11px] font-mono uppercase tracking-wider font-bold mb-3">
            <span>The Enterprise Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1b18] tracking-tight mb-4">
            The Cycle of Business: From Ideation to Loan
          </h2>
          <p className="text-sm sm:text-base text-[#706c63]">
            How a rural micro-entrepreneur transforms an initial idea into an investment-grade venture. GramVest maps your route through spatial feasibility, DPR engineering, sovereign grants, and institutional underwriting.
          </p>
        </div>

        {/* 4-Step Interactive Lifecycle Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          
          <div
            onClick={() => setActiveStep(1)}
            className={`p-5 rounded-2xl border transition-all cursor-pointer relative ${
              activeStep === 1
                ? "bg-white border-[#c75d3e] shadow-md shadow-[#c75d3e]/10"
                : "bg-white/70 border-[#e7e1d8] hover:bg-white"
            }`}
          >
            <div className="font-mono text-xs font-bold text-[#c75d3e] mb-1">
              01 • IDEATION &amp; FEASIBILITY
            </div>
            <h4 className="font-bold text-sm sm:text-base text-[#1d1b18] mb-1">
              Spatial Demand Scan
            </h4>
            <p className="text-xs text-[#706c63]">
              Audit 5–10km local mandi arrivals, agricultural feeder power reliability, and competitor density.
            </p>
          </div>

          <div
            onClick={() => setActiveStep(2)}
            className={`p-5 rounded-2xl border transition-all cursor-pointer relative ${
              activeStep === 2
                ? "bg-white border-[#c75d3e] shadow-md shadow-[#c75d3e]/10"
                : "bg-white/70 border-[#e7e1d8] hover:bg-white"
            }`}
          >
            <div className="font-mono text-xs font-bold text-[#c75d3e] mb-1">
              02 • PROJECT STREAMLINING
            </div>
            <h4 className="font-bold text-sm sm:text-base text-[#1d1b18] mb-1">
              Bank-Ready DPR
            </h4>
            <p className="text-xs text-[#706c63]">
              Automate OEM machinery quotation schedules, 5-year balance sheet models, and break-even math.
            </p>
          </div>

          <div
            onClick={() => setActiveStep(3)}
            className={`p-5 rounded-2xl border transition-all cursor-pointer relative ${
              activeStep === 3
                ? "bg-white border-[#c75d3e] shadow-md shadow-[#c75d3e]/10"
                : "bg-white/70 border-[#e7e1d8] hover:bg-white"
            }`}
          >
            <div className="font-mono text-xs font-bold text-[#c75d3e] mb-1">
              03 • SCHEME ROUTING
            </div>
            <h4 className="font-bold text-sm sm:text-base text-[#1d1b18] mb-1">
              Sovereign Grants
            </h4>
            <p className="text-xs text-[#706c63]">
              Deterministic matching to 25%–35% non-repayable PMEGP or PMFME margin money assistance.
            </p>
          </div>

          <div
            onClick={() => setActiveStep(4)}
            className={`p-5 rounded-2xl border transition-all cursor-pointer relative ${
              activeStep === 4
                ? "bg-white border-[#c75d3e] shadow-md shadow-[#c75d3e]/10"
                : "bg-white/70 border-[#e7e1d8] hover:bg-white"
            }`}
          >
            <div className="font-mono text-xs font-bold text-[#c75d3e] mb-1">
              04 • CAPITAL SANCTION
            </div>
            <h4 className="font-bold text-sm sm:text-base text-[#1d1b18] mb-1">
              Bank Debt &amp; Co-Invest
            </h4>
            <p className="text-xs text-[#706c63]">
              Direct forwarding to Lead District Banks, CGTMSE coverage, and institutional co-financing desks.
            </p>
          </div>

        </div>

        {/* Interactive Capital Structuring Simulator Visualizer */}
        <div className="bg-white border border-[#e7e1d8] rounded-3xl p-6 sm:p-10 shadow-xl shadow-[#1d1b18]/5 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Sliders & Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#f9f5f0] text-[#1d1b18] border border-[#ddd6c9] text-[11px] font-mono uppercase tracking-wider mb-2">
                Capital Breakdown Visualizer
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#1d1b18]">
                Simulate Total Project Investment
              </h3>
              <p className="text-xs sm:text-sm text-[#706c63]">
                Drag the outlay slider to see how entrepreneur margin, government capital grant, and bank debt recalculate instantly.
              </p>
            </div>

            {/* Slider */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#1d1b18]">
                  Total Enterprise Outlay
                </label>
                <span className="font-mono text-2xl font-extrabold text-[#c75d3e]">
                  {formatINR(projectCost)}
                </span>
              </div>
              <input
                type="range"
                min={200000}
                max={5000000}
                step={100000}
                value={projectCost}
                onChange={(e) => setProjectCost(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-[#ede7e1] rounded-lg appearance-none cursor-pointer accent-[#c75d3e]"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#706c63] mt-1.5">
                <span>₹2.00 Lakh</span>
                <span>₹25.00 Lakh</span>
                <span>₹50.00 Lakh (PMEGP Max)</span>
              </div>
            </div>

            {/* Beneficiary Category */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#706c63] block mb-2">
                Beneficiary Category (Subsidy %)
              </label>
              <select
                value={subsidyCategoryRate}
                onChange={(e) => setSubsidyCategoryRate(parseInt(e.target.value, 10))}
                className="w-full bg-[#f9f5f0] border border-[#ddd6c9] rounded-xl px-3.5 py-2.5 text-sm font-semibold text-[#1d1b18] outline-none"
              >
                <option value={35}>Rural Special Category (SC/ST/OBC/Women) — 35% Capital Grant</option>
                <option value={25}>Rural General Category — 25% Capital Grant</option>
              </select>
            </div>

            {/* Solvency Box */}
            <div className="bg-[#fbebe4] border border-[#c75d3e]/30 rounded-2xl p-4 sm:p-5 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#9d3e21]">
                  Debt Service Coverage Ratio (DSCR)
                </div>
                <div className="font-mono text-2xl font-extrabold text-[#9d3e21]">
                  {dscr}x
                </div>
              </div>
              <span
                className={`text-xs font-bold px-3 py-1.5 rounded-full border bg-white ${
                  isHurdlePassed
                    ? "text-[#3a6b4c] border-[#3a6b4c]/30"
                    : "text-[#c2410c] border-[#c2410c]/30"
                }`}
              >
                {isHurdlePassed ? "✓ Bank Hurdle Passed (>1.30x)" : "⚠ Strict Scrutiny (<1.30x)"}
              </span>
            </div>
          </div>

          {/* Right Column: Visual Stack & Breakdown Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#706c63] mb-2">
                Capital Stack Breakdown
              </div>

              {/* Stacked Progress Bar */}
              <div className="h-10 w-full bg-[#ede7e1] rounded-xl overflow-hidden flex border border-[#ddd6c9] text-[11px] font-bold text-white">
                <div
                  className="bg-[#735c00] flex items-center justify-center transition-all duration-300"
                  style={{ width: `${marginPct}%` }}
                >
                  Margin {marginPct}%
                </div>
                <div
                  className="bg-[#3a6b4c] flex items-center justify-center transition-all duration-300"
                  style={{ width: `${effectiveSubsidyPct}%` }}
                >
                  Grant {effectiveSubsidyPct}%
                </div>
                <div
                  className="bg-[#c75d3e] flex items-center justify-center transition-all duration-300"
                  style={{ width: `${effectiveLoanPct}%` }}
                >
                  Loan {effectiveLoanPct}%
                </div>
              </div>
            </div>

            {/* 21shares-style Data Chips */}
            <div className="grid grid-cols-2 gap-3">
              
              <div className="bg-[#f9f5f0] border border-[#e7e1d8] rounded-xl p-3.5">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase text-[#706c63] mb-1">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#735c00]" />
                  Own Margin ({marginPct}%)
                </div>
                <div className="font-mono text-lg font-extrabold text-[#1d1b18]">
                  {formatINR(marginAmount)}
                </div>
                <div className="text-[11px] text-[#706c63]">
                  Entrepreneur equity
                </div>
              </div>

              <div className="bg-[#f9f5f0] border border-[#e7e1d8] rounded-xl p-3.5">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase text-[#706c63] mb-1">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#3a6b4c]" />
                  Govt Grant ({effectiveSubsidyPct}%)
                </div>
                <div className="font-mono text-lg font-extrabold text-[#3a6b4c]">
                  {formatINR(subsidyAmount)}
                </div>
                <div className="text-[11px] text-[#706c63]">
                  100% Non-repayable subsidy
                </div>
              </div>

              <div className="bg-[#f9f5f0] border border-[#e7e1d8] rounded-xl p-3.5">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase text-[#706c63] mb-1">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#c75d3e]" />
                  Bank Concessional Debt
                </div>
                <div className="font-mono text-lg font-extrabold text-[#c75d3e]">
                  {formatINR(loanAmount)}
                </div>
                <div className="text-[11px] text-[#706c63]">
                  7-Yr term loan @ 8.0% p.a.
                </div>
              </div>

              <div className="bg-[#f9f5f0] border border-[#e7e1d8] rounded-xl p-3.5">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase text-[#706c63] mb-1">
                  <span className="w-2.5 h-2.5 rounded-xs bg-[#1d1b18]" />
                  Quarterly Repayment
                </div>
                <div className="font-mono text-lg font-extrabold text-[#1d1b18]">
                  {formatINR(quarterlyEMI)}
                </div>
                <div className="text-[11px] text-[#706c63]">
                  Quarterly debt service
                </div>
              </div>

            </div>

            <div className="flex justify-end pt-2">
              <Link
                href="/institution"
                className="bg-[#c75d3e] hover:bg-[#b04f32] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm transition-all flex items-center gap-2"
              >
                <span>View Institutional Underwriting Pipeline</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
