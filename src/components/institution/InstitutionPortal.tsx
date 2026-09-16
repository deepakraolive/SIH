"use client";

import React, { useState } from "react";

interface DealItem {
  id: string;
  applicant: string;
  initials: string;
  avatarBg: string;
  avatarColor: string;
  venture: string;
  location: string;
  cost: string;
  debt: string;
  subsidy: string;
  viability: number;
  dscr: number;
  sector: "dairy" | "agro" | "chc";
  district: "ludhiana" | "sangrur";
}

const DEALS: DealItem[] = [
  {
    id: "gurpreet",
    applicant: "Gurpreet Singh",
    initials: "GS",
    avatarBg: "#fbebe4",
    avatarColor: "#c75d3e",
    venture: "1,000L Bulk Milk Chilling Unit",
    location: "Sidhwan Bet, Ludhiana",
    cost: "₹9,00,000",
    debt: "₹6,00,000",
    subsidy: "₹3.15L (PMEGP)",
    viability: 74,
    dscr: 1.62,
    sector: "dairy",
    district: "ludhiana",
  },
  {
    id: "harpreet",
    applicant: "Harpreet Kaur",
    initials: "HK",
    avatarBg: "#e0f2fe",
    avatarColor: "#0284c7",
    venture: "Spice & Flour Processing Mill",
    location: "Dhuri, Sangrur",
    cost: "₹8,20,000",
    debt: "₹5,33,000",
    subsidy: "₹2.87L (PMFME)",
    viability: 79,
    dscr: 1.74,
    sector: "agro",
    district: "sangrur",
  },
  {
    id: "jaswinder",
    applicant: "Jaswinder Singh",
    initials: "JS",
    avatarBg: "#fef3c7",
    avatarColor: "#d97706",
    venture: "Custom Hiring Farm Center",
    location: "Samrala, Ludhiana",
    cost: "₹22,00,000",
    debt: "₹13,20,000",
    subsidy: "₹8.80L (SMAM)",
    viability: 82,
    dscr: 1.88,
    sector: "chc",
    district: "ludhiana",
  },
  {
    id: "baljit",
    applicant: "Baljit Singh",
    initials: "BS",
    avatarBg: "#f3e8ff",
    avatarColor: "#9333ea",
    venture: "Certified Bio-Input Supply Hub",
    location: "Raikot, Ludhiana",
    cost: "₹9,50,000",
    debt: "₹7,60,000",
    subsidy: "Mudra Tarun",
    viability: 68,
    dscr: 1.45,
    sector: "agro",
    district: "ludhiana",
  },
];

export default function InstitutionPortal() {
  const [role, setRole] = useState<string>("sbi");
  const [sectorFilter, setSectorFilter] = useState<string>("all");
  const [districtFilter, setDistrictFilter] = useState<string>("all");
  const [dscrFilter, setDscrFilter] = useState<number>(1.30);
  const [selectedDossier, setSelectedDossier] = useState<DealItem | null>(null);
  const [sanctionSuccessMsg, setSanctionSuccessMsg] = useState<string | null>(null);

  // Institution Allocation Stats based on Role
  const roleStats = {
    sbi: { pool: "₹50.0 Cr", deployed: "₹38.2 Cr", available: "₹11.8 Cr", name: "State Bank of India — Lead District Credit Office" },
    omnivore: { pool: "₹25.0 Cr", deployed: "₹18.4 Cr", available: "₹6.6 Cr", name: "Omnivore Capital — Rural Impact Debt Partner" },
    pgb: { pool: "₹15.0 Cr", deployed: "₹11.5 Cr", available: "₹3.5 Cr", name: "Punjab Gramin Bank — Rural Branch Manager" },
    kvic: { pool: "₹100.0 Cr", deployed: "₹72.0 Cr", available: "₹28.0 Cr", name: "KVIC / DIC Punjab — Subsidy Sanction Desk" },
  }[role] || { pool: "₹50.0 Cr", deployed: "₹38.2 Cr", available: "₹11.8 Cr", name: "Commercial Bank Underwriting" };

  // Filter deals
  const filteredDeals = DEALS.filter((d) => {
    if (sectorFilter !== "all" && d.sector !== sectorFilter) return false;
    if (districtFilter !== "all" && d.district !== districtFilter) return false;
    if (d.dscr < dscrFilter) return false;
    return true;
  });

  const handleSanction = (deal: DealItem) => {
    const ref = `GV-26091-${Math.floor(1000 + Math.random() * 9000)}`;
    setSanctionSuccessMsg(
      `✓ In-Principle Sanction Letter successfully generated for ${deal.applicant} (${deal.debt} Facility). Reference: #${ref}`
    );
    setTimeout(() => setSanctionSuccessMsg(null), 5000);
  };

  return (
    <div className="py-10 bg-[#fff8f2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header Banner */}
        <div className="bg-[#151311] text-white rounded-3xl p-8 border border-[#332d27] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#c75d3e]/20 text-[#c75d3e] border border-[#c75d3e]/30 text-[11px] font-mono uppercase tracking-wider mb-2">
              Institutional Underwriting Console
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Lender &amp; Investor Underwriting Console
            </h1>
            <p className="text-xs sm:text-sm text-[#a89f91] mt-1">
              Deploy capital into pre-evaluated, bank-ready rural MSMEs with verified DSCR (&gt;1.35x) and PMEGP subsidy clearance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <span className="text-xs font-mono text-[#a89f91]">PORTAL ROLE:</span>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="bg-[#201c18] text-white text-xs sm:text-sm font-semibold border border-[#332d27] rounded-lg px-3.5 py-2 outline-none cursor-pointer"
            >
              <option value="sbi">SBI Lead District Credit Officer (Ludhiana)</option>
              <option value="omnivore">Omnivore Capital — Rural Impact Debt</option>
              <option value="pgb">Punjab Gramin Bank — Rural Branch Manager</option>
              <option value="kvic">KVIC / DIC Punjab — Subsidy Officer</option>
            </select>
          </div>
        </div>

        {/* Success Alert Banner */}
        {sanctionSuccessMsg && (
          <div className="bg-[#fbebe4] border border-[#c75d3e]/30 text-[#9d3e21] px-5 py-3.5 rounded-xl font-semibold text-sm shadow-sm flex items-center justify-between">
            <span>{sanctionSuccessMsg}</span>
            <button onClick={() => setSanctionSuccessMsg(null)} className="font-bold">✕</button>
          </div>
        )}

        {/* Mandate & Fund Allocation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Mandate Configuration */}
          <div className="lg:col-span-7 bg-white border border-[#ede3d8] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-2 border-b border-[#ede3d8] pb-4">
              <svg className="w-5 h-5 text-[#c75d3e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
              <h2 className="text-lg font-bold text-[#1d1b18]">
                Underwriting Mandate & Investment Criteria
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#706c63] block mb-1.5">
                  Sector Focus
                </label>
                <select
                  value={sectorFilter}
                  onChange={(e) => setSectorFilter(e.target.value)}
                  className="w-full bg-[#f9f3ec] border border-[#ddd6c9] rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-[#1d1b18] outline-none"
                >
                  <option value="all">All Rural Sectors</option>
                  <option value="dairy">Dairy & Milk Processing</option>
                  <option value="agro">Food & Spice Processing</option>
                  <option value="chc">Farm Mechanization (CHC)</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#706c63] block mb-1.5">
                  District Filter
                </label>
                <select
                  value={districtFilter}
                  onChange={(e) => setDistrictFilter(e.target.value)}
                  className="w-full bg-[#f9f3ec] border border-[#ddd6c9] rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-[#1d1b18] outline-none"
                >
                  <option value="all">All Punjab Districts</option>
                  <option value="ludhiana">Ludhiana (Jagraon/Samrala)</option>
                  <option value="sangrur">Sangrur (Dhuri)</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#706c63] block mb-1.5">
                  Minimum DSCR Hurdle
                </label>
                <select
                  value={dscrFilter}
                  onChange={(e) => setDscrFilter(parseFloat(e.target.value))}
                  className="w-full bg-[#f9f3ec] border border-[#ddd6c9] rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-[#1d1b18] outline-none"
                >
                  <option value={1.30}>≥ 1.30x (RBI Hurdle)</option>
                  <option value={1.50}>≥ 1.50x (Conservative)</option>
                  <option value={1.60}>≥ 1.60x (Strict Institutional)</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#706c63] block mb-1.5">
                  Ticket Size Limit
                </label>
                <div className="bg-[#f9f3ec] border border-[#ddd6c9] rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-[#1d1b18]">
                  ₹2.0L to ₹50.0L
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => {
                  setSectorFilter("all");
                  setDistrictFilter("all");
                  setDscrFilter(1.30);
                }}
                className="text-xs font-bold text-[#706c63] hover:text-[#1d1b18] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Right: Portfolio Allocation Stats */}
          <div className="lg:col-span-5 bg-white border border-[#ede3d8] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-2 border-b border-[#ede3d8] pb-4">
              <svg className="w-5 h-5 text-[#c75d3e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <h2 className="text-lg font-bold text-[#1d1b18]">
                Deployed Capital & Fund Pool
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#f9f3ec] border border-[#ede3d8] rounded-2xl p-4">
                <div className="text-[10px] font-bold uppercase text-[#706c63]">
                  Total Fund Pool
                </div>
                <div className="font-mono text-xl font-extrabold text-[#1d1b18] mt-1">
                  {roleStats.pool}
                </div>
              </div>

              <div className="bg-[#f9f3ec] border border-[#ede3d8] rounded-2xl p-4">
                <div className="text-[10px] font-bold uppercase text-[#706c63]">
                  Capital Deployed
                </div>
                <div className="font-mono text-xl font-extrabold text-[#c75d3e] mt-1">
                  {roleStats.deployed}
                </div>
              </div>

              <div className="bg-[#f9f3ec] border border-[#ede3d8] rounded-2xl p-4">
                <div className="text-[10px] font-bold uppercase text-[#706c63]">
                  Available to Commit
                </div>
                <div className="font-mono text-xl font-extrabold text-[#9d3e21] mt-1">
                  {roleStats.available}
                </div>
              </div>

              <div className="bg-[#f9f3ec] border border-[#ede3d8] rounded-2xl p-4">
                <div className="text-[10px] font-bold uppercase text-[#706c63]">
                  On-Time Repayment
                </div>
                <div className="font-mono text-xl font-extrabold text-[#2e7d32] mt-1">
                  99.2%
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Live Deal Flow Pipeline Table */}
        <div className="bg-white border border-[#ede3d8] rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-extrabold text-[#1d1b18]">
                Live Rural MSME Deal Flow Pipeline
              </h3>
              <p className="text-xs text-[#706c63] mt-1">
                Showing {filteredDeals.length} pre-cleared micro-enterprises with algorithmic viability scores & PMEGP subsidy clearance.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSectorFilter("all")}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                  sectorFilter === "all"
                    ? "bg-[#1d1b18] text-white border-[#1d1b18]"
                    : "bg-[#f9f3ec] text-[#706c63] border-[#ddd6c9]"
                }`}
              >
                All Deals ({DEALS.length})
              </button>
              <button
                onClick={() => setSectorFilter("dairy")}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                  sectorFilter === "dairy"
                    ? "bg-[#1d1b18] text-white border-[#1d1b18]"
                    : "bg-[#f9f3ec] text-[#706c63] border-[#ddd6c9]"
                }`}
              >
                Dairy Units
              </button>
              <button
                onClick={() => setSectorFilter("agro")}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                  sectorFilter === "agro"
                    ? "bg-[#1d1b18] text-white border-[#1d1b18]"
                    : "bg-[#f9f3ec] text-[#706c63] border-[#ddd6c9]"
                }`}
              >
                Agro Mills
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[#ede3d8] text-[11px] font-bold uppercase text-[#706c63]">
                  <th className="py-3 px-3">Applicant & Venture</th>
                  <th className="py-3 px-3">Location</th>
                  <th className="py-3 px-3">Project Outlay</th>
                  <th className="py-3 px-3">Requested Loan</th>
                  <th className="py-3 px-3">Govt Subsidy</th>
                  <th className="py-3 px-3">Viability</th>
                  <th className="py-3 px-3">DSCR</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ede3d8]">
                {filteredDeals.map((deal) => (
                  <tr key={deal.id} className="hover:bg-[#f9f3ec]/60 transition-colors">
                    <td className="py-4 px-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs"
                          style={{ backgroundColor: deal.avatarBg, color: deal.avatarColor }}
                        >
                          {deal.initials}
                        </div>
                        <div>
                          <div className="font-bold text-[#1d1b18]">{deal.applicant}</div>
                          <div className="text-xs text-[#706c63]">{deal.venture}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-3 text-xs text-[#706c63]">{deal.location}</td>
                    <td className="py-4 px-3 font-mono font-bold text-[#1d1b18]">{deal.cost}</td>
                    <td className="py-4 px-3 font-mono font-bold text-[#c75d3e]">{deal.debt}</td>
                    <td className="py-4 px-3">
                      <span className="bg-[#fbebe4] text-[#9d3e21] text-xs font-bold px-2.5 py-0.5 rounded-full border border-[#c75d3e]/20">
                        {deal.subsidy}
                      </span>
                    </td>
                    <td className="py-4 px-3">
                      <span className="bg-[#fbebe4] text-[#9d3e21] font-mono text-xs font-bold px-2 py-0.5 rounded-md">
                        {deal.viability} / 100
                      </span>
                    </td>
                    <td className="py-4 px-3 font-mono font-bold text-[#1d1b18]">{deal.dscr}x</td>
                    <td className="py-4 px-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setSelectedDossier(deal)}
                          className="text-xs font-bold bg-[#f9f3ec] hover:bg-white text-[#1d1b18] border border-[#ddd6c9] px-3 py-1.5 rounded-md transition-all"
                        >
                          Review DPR
                        </button>
                        <button
                          onClick={() => handleSanction(deal)}
                          className="text-xs font-bold bg-[#c75d3e] hover:bg-[#b04f32] text-white px-3 py-1.5 rounded-md shadow-xs transition-all"
                        >
                          Sanction
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal: Bank-Ready Detailed Project Report (DPR) Dossier */}
        {selectedDossier && (
          <div
            className="fixed inset-0 z-50 bg-[#151311]/75 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedDossier(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#ede3d8] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-[#151311] text-white p-6 rounded-t-3xl flex items-center justify-between sticky top-0 z-10">
                <div>
                  <span className="font-mono text-xs text-[#c75d3e]">
                    [CMA-REPORT-26091] AUDITABLE BANK DOSSIER
                  </span>
                  <h3 className="text-xl font-extrabold mt-1">
                    {selectedDossier.applicant} — {selectedDossier.venture}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedDossier(null)}
                  className="text-white text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
                >
                  ✕
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Financial Overview Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-[#f9f3ec] border border-[#ede3d8] rounded-xl p-3 text-center">
                    <div className="text-[10px] font-bold uppercase text-[#706c63]">Project Outlay</div>
                    <div className="font-mono text-base font-extrabold text-[#1d1b18]">{selectedDossier.cost}</div>
                  </div>
                  <div className="bg-[#f9f3ec] border border-[#ede3d8] rounded-xl p-3 text-center">
                    <div className="text-[10px] font-bold uppercase text-[#706c63]">Requested Loan</div>
                    <div className="font-mono text-base font-extrabold text-[#c75d3e]">{selectedDossier.debt}</div>
                  </div>
                  <div className="bg-[#f9f3ec] border border-[#ede3d8] rounded-xl p-3 text-center">
                    <div className="text-[10px] font-bold uppercase text-[#706c63]">Capital Grant</div>
                    <div className="font-mono text-base font-extrabold text-[#9d3e21]">{selectedDossier.subsidy}</div>
                  </div>
                  <div className="bg-[#f9f3ec] border border-[#ede3d8] rounded-xl p-3 text-center">
                    <div className="text-[10px] font-bold uppercase text-[#706c63]">DSCR Hurdle</div>
                    <div className="font-mono text-base font-extrabold text-[#1d1b18]">{selectedDossier.dscr}x</div>
                  </div>
                </div>

                {/* 5-Year Balance Sheet Projections */}
                <div>
                  <h4 className="text-sm font-bold text-[#1d1b18] uppercase tracking-wider mb-3">
                    1. 5-Year Operating Financials & Repayment Capacity (₹ in Lakh)
                  </h4>
                  <div className="border border-[#ede3d8] rounded-xl overflow-hidden font-mono text-xs">
                    <table className="w-full text-left">
                      <thead className="bg-[#f9f3ec]">
                        <tr>
                          <th className="p-2.5">Operating Metric</th>
                          <th className="p-2.5">Year 1</th>
                          <th className="p-2.5">Year 2</th>
                          <th className="p-2.5">Year 3</th>
                          <th className="p-2.5">Year 4</th>
                          <th className="p-2.5">Year 5</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ede3d8]">
                        <tr>
                          <td className="p-2.5 font-bold">Gross Revenue</td>
                          <td className="p-2.5">₹18.40</td>
                          <td className="p-2.5">₹21.20</td>
                          <td className="p-2.5">₹23.50</td>
                          <td className="p-2.5">₹26.00</td>
                          <td className="p-2.5">₹28.50</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold">Operating Expenses</td>
                          <td className="p-2.5">₹12.60</td>
                          <td className="p-2.5">₹14.10</td>
                          <td className="p-2.5">₹15.20</td>
                          <td className="p-2.5">₹16.80</td>
                          <td className="p-2.5">₹18.20</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold">EBITDA (Cash Profit)</td>
                          <td className="p-2.5">₹5.80</td>
                          <td className="p-2.5">₹7.10</td>
                          <td className="p-2.5">₹8.30</td>
                          <td className="p-2.5">₹9.20</td>
                          <td className="p-2.5">₹10.30</td>
                        </tr>
                        <tr className="bg-[#fbebe4] text-[#c75d3e] font-extrabold">
                          <td className="p-2.5">DSCR Coverage Ratio</td>
                          <td className="p-2.5">{selectedDossier.dscr}x</td>
                          <td className="p-2.5">1.78x</td>
                          <td className="p-2.5">1.92x</td>
                          <td className="p-2.5">2.10x</td>
                          <td className="p-2.5">2.35x</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Machinery & BOM */}
                <div>
                  <h4 className="text-sm font-bold text-[#1d1b18] uppercase tracking-wider mb-2">
                    2. Capital Expenditure & Machinery Quotations
                  </h4>
                  <ul className="text-xs sm:text-sm text-[#706c63] space-y-1.5 list-disc pl-5">
                    <li><strong>Primary Processing Unit:</strong> SS-304 food-grade specifications with vetted OEM quote.</li>
                    <li><strong>Power Backup:</strong> 15 kVA automatic diesel generator for rural grid stability.</li>
                    <li><strong>Testing Suite:</strong> Electronic analyzer calibrated to PAU quality standards.</li>
                  </ul>
                </div>

                {/* Footer Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#ede3d8]">
                  <span className="text-xs text-[#706c63]">
                    Pre-cleared under RBI Priority Sector Lending guidelines.
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => alert("Dossier downloaded as official bank PDF.")}
                      className="text-xs font-bold bg-[#f9f3ec] hover:bg-white text-[#1d1b18] border border-[#ddd6c9] px-4 py-2 rounded-lg transition-all"
                    >
                      Download PDF
                    </button>
                    <button
                      onClick={() => {
                        handleSanction(selectedDossier);
                        setSelectedDossier(null);
                      }}
                      className="text-xs font-bold bg-[#c75d3e] hover:bg-[#b04f32] text-white px-5 py-2 rounded-lg shadow-md shadow-[#c75d3e]/20 transition-all"
                    >
                      Issue In-Principle Sanction
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
