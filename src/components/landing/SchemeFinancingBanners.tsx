"use client";

import React from "react";

interface SchemeItem {
  id: string;
  ticker: string;
  badge: string;
  title: string;
  desc: string;
  maxCost: string;
  marginReq: string;
  concessionalDebt: string;
  tenure: string;
  authority: string;
}

const SCHEMES: SchemeItem[] = [
  {
    id: "pmegp",
    ticker: "PMEGP-RURAL",
    badge: "35% CAPITAL GRANT",
    title: "Prime Minister Employment Generation",
    desc: "Non-repayable capital subsidy for rural manufacturing, agro-processing, and service units up to ₹50 Lakh project cost.",
    maxCost: "₹50.0 Lakh",
    marginReq: "5% – 10%",
    concessionalDebt: "60% – 65%",
    tenure: "3 Yrs Lock-in",
    authority: "KVIC / DIC Punjab",
  },
  {
    id: "aif",
    ticker: "AIF-AGRI",
    badge: "3% SUBVENTION",
    title: "Agriculture Infrastructure Fund",
    desc: "Interest subvention and credit guarantee for post-harvest chilling infrastructure, cold chains, and primary sorting centers.",
    maxCost: "₹2.00 Crore",
    marginReq: "10% Min",
    concessionalDebt: "3.0% Subvention",
    tenure: "7 Yrs Repayment",
    authority: "Ministry of Agriculture",
  },
  {
    id: "pmfme",
    ticker: "PMFME-ODOP",
    badge: "35% CREDIT LINKED",
    title: "Micro Food Processing Scheme",
    desc: "Targeted assistance for One District One Product (ODOP) spice mills, mustard oil expellers, and rural bakery clusters.",
    maxCost: "₹10.0 Lakh Cap",
    marginReq: "10% Own",
    concessionalDebt: "90% Bank Term",
    tenure: "5 – 7 Years",
    authority: "MoFPI / Punjab Agro",
  },
];

export default function SchemeFinancingBanners() {
  return (
    <section className="py-20 bg-[#fff8f2] border-b border-[#ede3d8]" id="schemes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner 2: Government Scheme Directory (21shares-style) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#fbebe4] text-[#9d3e21] border border-[#c75d3e]/20 text-[11px] font-bold uppercase tracking-wider mb-3">
            Banner 2 • Sovereign Entitlement
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1b18] tracking-tight mb-4">
            Current Government Schemes & Capital Subsidies
          </h2>
          <p className="text-base sm:text-lg text-[#706c63]">
            GramVest deterministically routes your project parameters to eligible central and state capital subsidies. No intermediaries, no commission friction, direct bank transfer (DBT).
          </p>
        </div>

        {/* 21shares-style Scheme Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {SCHEMES.map((scheme) => (
            <div
              key={scheme.id}
              className="bg-white border border-[#ede3d8] rounded-2xl p-6 shadow-xs hover:shadow-lg hover:border-[#c75d3e] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold bg-[#f9f3ec] border border-[#ddd6c9] px-2.5 py-1 rounded-md text-[#1d1b18]">
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

                {/* Metric Data Table */}
                <div className="bg-[#f9f3ec] rounded-xl p-3.5 grid grid-cols-2 gap-3 mb-5">
                  <div>
                    <div className="text-[10px] font-bold uppercase text-[#706c63]">
                      Max Project Cost
                    </div>
                    <div className="font-mono text-sm font-extrabold text-[#1d1b18]">
                      {scheme.maxCost}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase text-[#706c63]">
                      Own Margin
                    </div>
                    <div className="font-mono text-sm font-extrabold text-[#1d1b18]">
                      {scheme.marginReq}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase text-[#706c63]">
                      Concession / Loan
                    </div>
                    <div className="font-mono text-sm font-extrabold text-[#3a6b4c]">
                      {scheme.concessionalDebt}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase text-[#706c63]">
                      Tenure
                    </div>
                    <div className="font-mono text-sm font-extrabold text-[#1d1b18]">
                      {scheme.tenure}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#ede3d8]">
                <span className="text-xs font-semibold text-[#706c63]">
                  {scheme.authority}
                </span>
                <a
                  href="#business-cycle"
                  className="text-xs font-bold text-[#c75d3e] hover:text-[#9d3e21] flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
                >
                  Apply in DPR →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Banner 3: Financing Options & Concessional Lending Tiers */}
        <div className="bg-[#151311] text-white rounded-3xl p-8 sm:p-12 border border-[#332d27] relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#c75d3e]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 relative z-10">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#3a6b4c]/30 text-[#8ed081] border border-[#8ed081]/30 text-[11px] font-bold uppercase tracking-wider mb-3">
                Banner 3 • Financing Architecture
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Formal Financing Tiers & Concessional Lending
              </h3>
              <p className="text-sm sm:text-base text-[#a89f91] max-w-2xl mt-2">
                Under State Channelizing Agency and Lead District Bank guidelines, rural micro-entrepreneurs access tiered concessional debt structured for zero repayment stress.
              </p>
            </div>

            <a
              href="#business-cycle"
              className="bg-[#c75d3e] hover:bg-[#b04f32] text-white text-sm font-bold px-6 py-3 rounded-lg self-start lg:self-auto transition-colors shadow-lg shadow-[#c75d3e]/25 flex items-center gap-2"
            >
              Run Amortization Calculator →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            
            {/* Micro Finance Tier */}
            <div className="bg-[#201c18] border border-[#332d27] rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[11px] font-bold text-[#a89f91] uppercase tracking-wider mb-2">
                  Tier 1 • Micro Finance (≤ ₹1.40L)
                </div>
                <div className="font-mono text-3xl font-extrabold text-white mb-4">
                  6.5% <span className="text-xs font-normal text-[#a89f91]">p.a. concessional</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#c9c1b5] mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-[#8ed081] font-bold">✓</span> Up to ₹1,40,000 credit limit
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#8ed081] font-bold">✓</span> 3-Year quarterly repayment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#8ed081] font-bold">✓</span> 3-Month initial moratorium
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#8ed081] font-bold">✓</span> No physical collateral required
                  </li>
                </ul>
              </div>
              <div className="text-[11px] font-mono text-[#a89f91] pt-3 border-t border-[#332d27]">
                State Channelizing Concession
              </div>
            </div>

            {/* Term Loan Tier */}
            <div className="bg-[#201c18] border-2 border-[#c75d3e] rounded-xl p-6 flex flex-col justify-between shadow-lg shadow-[#c75d3e]/10">
              <div>
                <div className="font-mono text-[11px] font-bold text-[#c75d3e] uppercase tracking-wider mb-2">
                  Tier 2 • MSME Term Loan (₹1.4L - ₹50L)
                </div>
                <div className="font-mono text-3xl font-extrabold text-white mb-4">
                  8.0% <span className="text-xs font-normal text-[#a89f91]">p.a. term debt</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#c9c1b5] mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-[#8ed081] font-bold">✓</span> Up to ₹50,00,000 project capital
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#8ed081] font-bold">✓</span> 7-Year amortization tenure
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#8ed081] font-bold">✓</span> 6-Month machinery commissioning grace
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#8ed081] font-bold">✓</span> CGTMSE credit guarantee backed
                  </li>
                </ul>
              </div>
              <div className="text-[11px] font-mono text-[#c75d3e] pt-3 border-t border-[#332d27]">
                Lead District Bank Standard
              </div>
            </div>

            {/* Co-Financing & Venture Debt Tier */}
            <div className="bg-[#201c18] border border-[#332d27] rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[11px] font-bold text-[#a89f91] uppercase tracking-wider mb-2">
                  Tier 3 • Co-Investment & Syndication
                </div>
                <div className="font-mono text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Syndicated <span className="text-xs font-normal text-[#a89f91]">Debt + Equity</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#c9c1b5] mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-[#8ed081] font-bold">✓</span> Venture Debt & Impact Angels
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#8ed081] font-bold">✓</span> Ticket sizes ₹20L to ₹1.5 Crore
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#8ed081] font-bold">✓</span> Mezzanine cash-flow sharing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#8ed081] font-bold">✓</span> Direct Module 4 portal integration
                  </li>
                </ul>
              </div>
              <div className="text-[11px] font-mono text-[#a89f91] pt-3 border-t border-[#332d27]">
                Institutional Syndication Desk
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
