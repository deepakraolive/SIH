"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

interface FaqItem {
  id: number;
  category: "subsidies" | "banking" | "mandi" | "power" | "privacy";
  categoryLabel: string;
  question: string;
  answer: string;
  tags: string[];
}

const CATEGORIES = [
  { id: "all", label: "All Questions" },
  { id: "subsidies", label: "Subsidies & Grants" },
  { id: "banking", label: "Bank & CMA Feasibility" },
  { id: "mandi", label: "Mandi & Market Data" },
  { id: "power", label: "Power & Infrastructure" },
  { id: "privacy", label: "Privacy & Platform" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

const ALL_FAQS: FaqItem[] = [
  // 1. Core Privacy / KYC (From demo)
  {
    id: 1,
    category: "privacy",
    categoryLabel: "Privacy & Platform",
    question: "Do I need to enter my Aadhaar or personal bank account number?",
    answer:
      "No. GramVest does not request or store Aadhaar numbers, personal bank accounts, or sensitive identity tokens. Feasibility scans are based purely on geographic cluster dynamics, commercial census data, and tehsil electricity feeder telemetry. You retain 100% control over your identity and financial privacy.",
    tags: ["Aadhaar", "Privacy", "Bank Account", "KYC", "Security"],
  },
  // 2. Local Mandi & Competition Data (From demo)
  {
    id: 2,
    category: "mandi",
    categoryLabel: "Mandi & Market Data",
    question: "How accurate is the local tehsil competition and mandi data?",
    answer:
      "Our data pipeline synchronizes weekly with Agmarknet arrival registries, Punjab Mandi Board bulletin logs, State Discom (PSPCL) rural feeder bulletins, and registered Udyam MSME license registrations at the tehsil tier. Margin estimations reflect prevailing local APMC prices within a 7-day trailing average, eliminating speculative guesswork in procurement costs.",
    tags: ["Agmarknet", "APMC", "Mandi Board", "Udyam", "Competition", "Market Price"],
  },
  // 3. Bank Acceptance (From demo)
  {
    id: 3,
    category: "banking",
    categoryLabel: "Bank & CMA Feasibility",
    question: "Will public sector banks (SBI, PNB, Punjab Gramin Bank) accept this dossier?",
    answer:
      "Yes. The generated 12-page Feasibility Dossier format strictly follows the PMEGP / CMA (Credit Monitoring Arrangement) layout required by Lead District Managers (LDMs) and nationalized bank branch managers (State Bank of India, Punjab National Bank, Punjab Gramin Bank), complete with Debt Service Coverage Ratio (DSCR) calculations and itemized vendor equipment quotations.",
    tags: ["Bank Acceptance", "SBI", "PNB", "Punjab Gramin Bank", "CMA Dossier", "DSCR", "LDM"],
  },
  // 4. Subsidies & Grants (From demo)
  {
    id: 4,
    category: "subsidies",
    categoryLabel: "Subsidies & Grants",
    question: "How are the PMEGP subsidies (25% to 35%) and PMFME grants calculated?",
    answer:
      "Under the Prime Minister's Employment Generation Programme (PMEGP), general category promoters in rural areas qualify for 25% margin money capital subsidy, while special category promoters (Women, SC/ST, Ex-Servicemen, OBC) qualify for up to 35% on projects up to ₹50 Lakhs. Under PMFME, micro food processing units qualify for 35% credit-linked capital grants capped at ₹10 Lakhs, plus ₹40,000 seed capital per SHG member.",
    tags: ["PMEGP", "PMFME", "35% Subsidy", "Margin Money", "Women Subsidy", "SC/ST", "Capital Grant"],
  },
  // 5. Voice Search (From demo)
  {
    id: 5,
    category: "privacy",
    categoryLabel: "Privacy & Platform",
    question: "How does Voice Search work in Punjabi and Hindi?",
    answer:
      "Entrepreneurs can speak directly in Punjabi (e.g. “ਮੈਂ ਡੇਅਰੀ ਪ੍ਰੋਸੈਸਿੰਗ ਦਾ ਕੰਮ ਸ਼ੁਰੂ ਕਰਨਾ ਚਾਹੁੰਦਾ ਹਾਂ”), Hindi, or English. Our integrated voice matching engine uses browser speech recognition to automatically parse rural trade keywords and map them directly to verified business archetypes without requiring tedious manual typing.",
    tags: ["Voice Search", "Punjabi", "Hindi", "Speech Recognition", "Multilingual", "Accessibility"],
  },
  // 6. Feeder Power Cuts (From demo)
  {
    id: 6,
    category: "power",
    categoryLabel: "Power & Infrastructure",
    question: "What happens if my village feeder has frequent power cuts?",
    answer:
      "GramVest correlates Punjab State Power Corporation Limited (PSPCL) power schedules with your chosen machinery kilowatt load. If daytime 3-phase supply is under 16 hours, the system automatically factors in hybrid solar synchronization or backup generator fuel costs to verify whether your monthly net profit remains solvent above the 1.30x bank debt hurdle.",
    tags: ["PSPCL", "Feeder", "Power Cuts", "3-Phase Power", "Solar Hybrid", "Generator"],
  },
  // 7. Agriculture Infrastructure Fund (AIF)
  {
    id: 7,
    category: "subsidies",
    categoryLabel: "Subsidies & Grants",
    question: "What is the Agriculture Infrastructure Fund (AIF) 3% interest subvention?",
    answer:
      "The Agriculture Infrastructure Fund (AIF) provides medium-to-long term debt financing with a 3.0% per annum interest subvention up to ₹2 Crore for up to 7 years. It covers post-harvest management infrastructure including cold rooms, pack houses, primary sorting/grading sheds, and ripening chambers, featuring flexible moratoria from 6 to 24 months.",
    tags: ["AIF", "Interest Subvention", "3% Subvention", "Cold Chain", "NABARD", "Post-Harvest"],
  },
  // 8. SMAM Custom Hiring Centres
  {
    id: 8,
    category: "subsidies",
    categoryLabel: "Subsidies & Grants",
    question: "How does the SMAM grant work for Custom Hiring Centres (CHCs)?",
    answer:
      "Under the Sub-Mission on Agricultural Mechanization (SMAM), rural entrepreneurs and farmer producer groups (FPOs) can access capital subsidies between 40% and 80% (up to ₹10 Lakhs to ₹25 Lakhs) to establish Custom Hiring Centres. This supports procurement of high-power tractors, laser levelers, Super Seeders, and crop residue management implements for pay-per-acre rental.",
    tags: ["SMAM", "Custom Hiring", "Farm Machinery", "Tractor Subsidy", "Stubble Management"],
  },
  // 9. DSCR Solvency Benchmark
  {
    id: 9,
    category: "banking",
    categoryLabel: "Bank & CMA Feasibility",
    question: "What is the minimum Debt Service Coverage Ratio (DSCR) required by lenders?",
    answer:
      "Nationalized banks mandate a minimum DSCR of 1.25x to 1.30x. GramVest's underwriting engine stress-tests each project against seasonal agricultural price variations to target a healthy average DSCR of 1.60x to 1.85x, ensuring that monthly enterprise operating cash flow safely surpasses interest and principal loan obligations.",
    tags: ["DSCR", "Solvency", "Bank Hurdle", "Credit Appraisal", "Loan Underwriting"],
  },
  // 10. Term Loan vs Working Capital
  {
    id: 10,
    category: "banking",
    categoryLabel: "Bank & CMA Feasibility",
    question: "What is the split between Term Loan and Working Capital in the project outlay?",
    answer:
      "Project Cost is divided into Term Loan (for capital assets like machinery, chilling vats, electrical lines, and civil work, repayable over 5-7 years) and Working Capital / Cash Credit (for day-to-day raw material purchase, dairy milk collection, packaging, and labor). GramVest models both components to prevent premature liquidity crunches during your first 90 days.",
    tags: ["Term Loan", "Working Capital", "Cash Credit", "Capex", "Opex", "Liquidity"],
  },
  // 11. Mandi Deficit Detection
  {
    id: 11,
    category: "mandi",
    categoryLabel: "Mandi & Market Data",
    question: "How does GramVest calculate unmet demand and local supply deficits?",
    answer:
      "The engine correlates regional APMC Mandi arrival registries with consumer household purchasing data and active registered business density. For example, in the Jagraon tehsil catchment, the model detects an unchilled milk deficit of ~1,850 Litres/day within a 5km radius, directly pinpointing a high-profit opportunity for a bulk milk chiller enterprise.",
    tags: ["Arrival Deficit", "Catchment", "Milk Chiller", "Jagraon Mandi", "Demand Gap"],
  },
  // 12. Location & Cluster Scoring
  {
    id: 12,
    category: "mandi",
    categoryLabel: "Mandi & Market Data",
    question: "Can GramVest evaluate whether my village or town is a suitable location?",
    answer:
      "Yes. The Catchment Radar evaluates 4 empirical location pillars: (1) Raw material supply density within 10km, (2) Direct road logistics to major APMC mandis, (3) Number of active competitors within the same tehsil, and (4) Three-phase electrical substation reliability. Each location receives a 0-100 Catchment Viability Score.",
    tags: ["Location Score", "Catchment Radar", "Tehsil Density", "Logistics", "Cluster"],
  },
  // 13. Rooftop Solar & Agri-Solar Integration
  {
    id: 13,
    category: "power",
    categoryLabel: "Power & Infrastructure",
    question: "Can I include solar net-metering and PM Surya Ghar subsidies in my project?",
    answer:
      "Yes. If your enterprise uses high-load daytime machinery (e.g. cold storage compressors or spice pulverizers), the engine calculates the cost-benefit of adding a 5kW-15kW rooftop solar array. It integrates applicable state subsidies and accelerated depreciation, reducing monthly power bills by up to 45% and elevating the 5-year project Internal Rate of Return (IRR).",
    tags: ["Solar", "PM Surya Ghar", "Net-Metering", "Power Bill", "Capex Savings", "IRR"],
  },
  // 14. DIC / KVIC Application Assistance
  {
    id: 14,
    category: "subsidies",
    categoryLabel: "Subsidies & Grants",
    question: "Do I need to visit government DIC or KVIC offices physically to submit my dossier?",
    answer:
      "The dossier output generated by GramVest adheres directly to the exact file layout and project breakdown required by the online PMEGP e-Portal (kviconline.gov.in) and PMFME Portal (pmfme.mofpi.gov.in). You can upload the generated PDF dossier directly into the government portal from your smartphone or local CSC center without paying middleman fees.",
    tags: ["DIC", "KVIC", "kviconline", "CSC Center", "Online Application", "Dossier PDF"],
  },
  // 15. Free Access for Rural Promoters
  {
    id: 15,
    category: "privacy",
    categoryLabel: "Privacy & Platform",
    question: "Is GramVest free to use for rural youth, farmers, and women entrepreneurs?",
    answer:
      "Yes. The 3-minute viability check, mandi price telemetry, subsidy eligibility calculation, and standard feasibility ledger are completely free for all rural micro-entrepreneurs, self-help groups (SHGs), and youth applicants across Punjab. Institutional lenders and banking correspondents use the institutional portal for batch credit underwriting.",
    tags: ["Free Access", "Rural Promoters", "Women Entrepreneurs", "SHGs", "Zero Fee"],
  },
];

export default function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
  });

  const toggleFaq = (id: number) => {
    setOpenFaqs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const allOpen: Record<number, boolean> = {};
    ALL_FAQS.forEach((f) => {
      allOpen[f.id] = true;
    });
    setOpenFaqs(allOpen);
  };

  const collapseAll = () => {
    setOpenFaqs({});
  };

  // Filtered FAQs based on category and search query
  const filteredFaqs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return ALL_FAQS.filter((faq) => {
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;
      if (!matchesCategory) return false;

      if (!query) return true;

      const inQuestion = faq.question.toLowerCase().includes(query);
      const inAnswer = faq.answer.toLowerCase().includes(query);
      const inTags = faq.tags.some((t) => t.toLowerCase().includes(query));

      return inQuestion || inAnswer || inTags;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-[#fff8f2] text-[#1d1b18] min-h-screen selection:bg-[#c75d3e] selection:text-white flex flex-col justify-between">
      
      {/* Top Coordinate & Compliance Bar */}
      <div className="bg-[#151311] text-[#a89f91] font-mono text-[11px] px-4 sm:px-8 py-1.5 border-b border-[#332d27] flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <span>[SYS-26091] PUNJAB RURAL DECISION ENGINE</span>
          <span className="hidden sm:inline">LAT: 30.9010° N • LONG: 75.8573° E</span>
          <span className="text-[#c75d3e] inline-flex items-center gap-1.5 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c75d3e] animate-pulse" />
            PAU BENCHMARK VERIFIED
          </span>
        </div>
        <div>
          <span>RBI PSL COMPLIANT • ZERO NUMERICAL HALLUCINATION</span>
        </div>
      </div>

      {/* Main Top Header Navigation */}
      <header className="sticky top-0 z-50 bg-[#fff8f2]/95 backdrop-blur-md border-b border-[#ede3d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo - Official logo */}
          <Link href="/" className="flex items-center py-1 group">
            <img
              src="/gramvest_logo3.png"
              alt="GramVest"
              className="h-11 sm:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Clean Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#382f29]">
            <Link href="/" className="hover:text-[#c75d3e] transition-colors">
              Overview
            </Link>
            <Link href="/#business-cycle" className="hover:text-[#c75d3e] transition-colors">
              Business Cycle
            </Link>
            <Link href="/#market-radar" className="hover:text-[#c75d3e] transition-colors">
              Catchment Radar
            </Link>
            <span className="text-[#c75d3e] font-bold border-b-2 border-[#c75d3e] pb-1 cursor-default">
              FAQ
            </span>
          </nav>

          {/* 3 Nav Logins: 1. User Login, 2. Institution Login, 3. Dashboard */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* 1. User Login (Opens dedicated /login page) */}
            <Link
              href="/login"
              className="flex items-center gap-1.5 sm:gap-2 bg-white border-[1.5px] border-[#e2dbce] hover:border-[#1d1b18]/40 hover:bg-[#faf7f2] text-[#1d1b18] text-xs sm:text-[13.5px] font-bold px-3.5 sm:px-4 py-2 rounded-xl shadow-xs transition-all whitespace-nowrap"
              title="Open MSME Entrepreneur Login Page"
            >
              <svg className="w-4 h-4 text-[#2b2723] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>User Login</span>
            </Link>

            {/* 2. Institution Login (Opens dedicated /institution page in a new tab) */}
            <Link
              href="/institution"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 bg-white border-[1.5px] border-[#e2dbce] hover:border-[#1d1b18]/40 hover:bg-[#faf7f2] text-[#1d1b18] text-xs sm:text-[13.5px] font-bold px-3.5 sm:px-4 py-2 rounded-xl shadow-xs transition-all whitespace-nowrap"
              title="Open Institution Portal in a different page"
            >
              <svg className="w-4 h-4 text-[#2b2723] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M15 10v11M12 3l9 7H3z" />
              </svg>
              <span>Institution Login</span>
            </Link>

            {/* 3. Dashboard (Redirects to https://webapp-demo-eta.vercel.app/) */}
            <a
              href="https://webapp-demo-eta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 bg-white border-[1.5px] border-[#e2dbce] hover:border-[#1d1b18]/40 hover:bg-[#faf7f2] text-[#1d1b18] text-xs sm:text-[13.5px] font-bold px-3.5 sm:px-4 py-2 rounded-xl shadow-xs transition-all whitespace-nowrap group"
              title="Open Webapp Demo Dashboard"
            >
              <svg className="w-4 h-4 text-[#3a3530] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
              <span>Dashboard</span>
              <svg className="w-3.5 h-3.5 text-[#5c544d] ml-0.5 shrink-0 group-hover:text-[#1d1b18] transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>

          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <section className="pt-12 pb-10 sm:py-16 bg-gradient-to-b from-[#fff8f2] via-[#faf4ee] to-[#fff8f2] border-b border-[#ede3d8]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#706c63]">
              <Link href="/" className="hover:text-[#c75d3e] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#1d1b18] font-bold">Frequently Asked Questions</span>
            </div>

            {/* Pill Badge */}
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-[#c75d3e] uppercase tracking-wider bg-[#fcedea] px-4 py-1.5 rounded-full border border-[#c75d3e]/20 shadow-2xs">
                SIH 26091 • Complete Knowledge Base
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1d1b18] tracking-tight">
              Frequently Asked Questions
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#706c63] leading-relaxed">
              Transparent answers on Punjab mandi intelligence, sovereign capital grants (PMEGP, PMFME, AIF), lender underwriting standards, and village feeder power telemetry.
            </p>

            {/* Search Input Box */}
            <div className="pt-4 max-w-2xl mx-auto">
              <div className="relative flex items-center">
                <div className="absolute left-4 pointer-events-none text-[#706c63]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions (e.g. PMEGP, 35% subsidy, DSCR, power cuts, Agmarknet)..."
                  className="w-full pl-12 pr-10 py-3.5 sm:py-4 bg-white border border-[#ede3d8] rounded-2xl text-sm sm:text-base text-[#1d1b18] placeholder-[#a89f91] shadow-xs focus:outline-none focus:border-[#c75d3e] focus:ring-2 focus:ring-[#c75d3e]/20 transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 p-1 rounded-full text-[#706c63] hover:text-[#1d1b18] hover:bg-[#faf4ee] transition-colors"
                    title="Clear search"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                const count =
                  cat.id === "all"
                    ? ALL_FAQS.length
                    : ALL_FAQS.filter((f) => f.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={
                      "px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 " +
                      (isActive
                        ? "bg-[#c75d3e] text-white shadow-xs"
                        : "bg-white text-[#5c544d] border border-[#ede3d8] hover:border-[#c75d3e]/40 hover:text-[#1d1b18]")
                    }
                  >
                    <span>{cat.label}</span>
                    <span
                      className={
                        "text-[10px] px-1.5 py-0.2 rounded-full font-mono " +
                        (isActive ? "bg-white/25 text-white" : "bg-[#f4eee6] text-[#706c63]")
                      }
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>
        </section>

        {/* Quick Highlights Bar */}
        <section className="bg-white border-b border-[#ede3d8] py-4">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-[#ede3d8]/60">
              <div className="px-2">
                <span className="text-base sm:text-lg font-bold text-[#1d1b18] font-mono">100% Zero KYC</span>
                <p className="text-[11px] text-[#706c63]">No Aadhaar / Bank A/C required</p>
              </div>
              <div className="px-2">
                <span className="text-base sm:text-lg font-bold text-[#c75d3e] font-mono">Up to 35%</span>
                <p className="text-[11px] text-[#706c63]">PMEGP & PMFME Capital Subsidies</p>
              </div>
              <div className="px-2">
                <span className="text-base sm:text-lg font-bold text-[#1d1b18] font-mono">1.30x DSCR</span>
                <p className="text-[11px] text-[#706c63]">Bank Hurdle Solvency Verified</p>
              </div>
              <div className="px-2">
                <span className="text-base sm:text-lg font-bold text-[#1d1b18] font-mono">14,000+ Feeder</span>
                <p className="text-[11px] text-[#706c63]">PSPCL Grid Telemetry Synchronized</p>
              </div>
            </div>
          </div>
        </section>

        {/* Accordion Questions List */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* List Top Utility: Results Count + Expand/Collapse All */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-[#ede3d8]">
              <div className="text-xs sm:text-sm text-[#706c63]">
                Showing <strong className="text-[#1d1b18] font-mono">{filteredFaqs.length}</strong> of{" "}
                <span className="font-mono">{ALL_FAQS.length}</span> questions
                {searchQuery && (
                  <span className="ml-1 text-[#c75d3e]">
                    for &quot;{searchQuery}&quot;
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={expandAll}
                  className="text-xs font-semibold text-[#706c63] hover:text-[#c75d3e] px-2.5 py-1 rounded-md border border-[#ede3d8] hover:border-[#c75d3e]/40 transition-colors"
                >
                  Expand All
                </button>
                <button
                  type="button"
                  onClick={collapseAll}
                  className="text-xs font-semibold text-[#706c63] hover:text-[#c75d3e] px-2.5 py-1 rounded-md border border-[#ede3d8] hover:border-[#c75d3e]/40 transition-colors"
                >
                  Collapse All
                </button>
              </div>
            </div>

            {/* No Results Fallback */}
            {filteredFaqs.length === 0 && (
              <div className="text-center py-16 px-4 bg-white rounded-2xl border border-dashed border-[#ede3d8] space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#faf4ee] flex items-center justify-center mx-auto text-[#c75d3e]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1d1b18]">No matching questions found</h3>
                <p className="text-xs sm:text-sm text-[#706c63] max-w-sm mx-auto">
                  Try searching with different terms like “PMEGP”, “subsidy”, “cold storage”, or “DSCR”.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="inline-block mt-2 px-4 py-2 rounded-xl bg-[#c75d3e] text-white text-xs font-bold hover:bg-[#bd5537] transition-colors shadow-xs"
                >
                  Reset Filters & View All
                </button>
              </div>
            )}

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFaqs.map((faq) => {
                const isOpen = !!openFaqs[faq.id];
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-2xl border border-[#ede3d8] shadow-2xs overflow-hidden transition-all hover:border-[#c75d3e]/40"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-5 sm:p-6 text-left flex justify-between items-start gap-4 hover:text-[#c75d3e] transition-colors cursor-pointer group"
                    >
                      <div className="space-y-2 pr-2">
                        {/* Category Label */}
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#c75d3e] bg-[#fcedea] px-2.5 py-0.5 rounded-md border border-[#c75d3e]/20">
                            {faq.categoryLabel}
                          </span>
                          <span className="text-[10px] font-mono text-[#a89f91]">
                            Q-{faq.id.toString().padStart(2, "0")}
                          </span>
                        </div>
                        {/* Question Title */}
                        <h3 className="font-bold text-[#1d1b18] group-hover:text-[#c75d3e] text-sm sm:text-base leading-snug transition-colors">
                          {faq.question}
                        </h3>
                      </div>

                      {/* Chevron Toggle */}
                      <div
                        className={
                          "w-7 h-7 rounded-full bg-[#faf4ee] flex items-center justify-center shrink-0 text-[#706c63] group-hover:text-[#c75d3e] group-hover:bg-[#fcedea] transition-all transform duration-200 mt-1 " +
                          (isOpen ? "rotate-180 bg-[#fcedea] text-[#c75d3e]" : "")
                        }
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </button>

                    {/* Answer Body */}
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5c544d] leading-relaxed border-t border-[#f4eee6] space-y-3.5">
                        <p>{faq.answer}</p>

                        {/* Keyword Tags */}
                        {faq.tags && faq.tags.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1.5 pt-2">
                            <span className="text-[10px] uppercase font-bold text-[#a89f91] mr-1">
                              Keywords:
                            </span>
                            {faq.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[11px] font-medium bg-[#faf4ee] text-[#706c63] px-2 py-0.5 rounded-md border border-[#ede3d8]"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Direct Assistance Banner */}
            <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-[#ede3d8] shadow-xs text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <span className="text-[11px] font-bold text-[#c75d3e] uppercase tracking-wider bg-[#fcedea] px-3 py-1 rounded-full border border-[#c75d3e]/20">
                  Direct Assistance Available
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1d1b18]">
                  Still have questions about your rural enterprise project?
                </h3>
                <p className="text-xs sm:text-sm text-[#706c63] leading-relaxed">
                  Call our toll-free Punjab agricultural advisory helpline or run a free 3-minute viability scan directly.
                </p>
                <div className="pt-1 text-xs font-mono font-bold text-[#1d1b18]">
                  Toll-Free Helpline: <span className="text-[#c75d3e]">1800-890-GRAM</span> (Mon–Sat 9:00 AM – 6:00 PM)
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                <a
                  href="https://webapp-demo-eta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#c75d3e] hover:bg-[#bd5537] text-white text-xs sm:text-sm font-bold shadow-xs transition-all text-center"
                >
                  Open Live Dashboard →
                </a>
                <Link
                  href="/"
                  className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white border border-[#ede3d8] hover:border-[#1d1b18]/40 text-[#1d1b18] text-xs sm:text-sm font-bold transition-all text-center"
                >
                  Back to Overview
                </Link>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Global Footer (Consistent with landing page) */}
      <footer className="bg-[#1d1b18] text-[#ede3d8] py-14 border-t border-[#382f29]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#382f29]">
            
            {/* Column 1: Brand Info */}
            <div className="md:col-span-5 space-y-4">
              <Link href="/" className="inline-flex items-center">
                <img
                  src="/gramvest_logo3.png"
                  alt="GramVest"
                  className="h-10 sm:h-11 w-auto object-contain brightness-105"
                />
              </Link>
              <p className="text-xs text-[#a89f91] max-w-sm leading-relaxed">
                Hyper-local rural business decision engine & credit structuring ledger. Empowering Punjab micro-entrepreneurs with ground-truth mandi telemetry, sovereign subsidy calculations, and bankable CMA dossiers.
              </p>
              <div className="text-[11px] font-mono text-[#a89f91]">
                SIH 26091 • Punjab Agricultural University Benchmarks
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                System Navigation
              </h4>
              <ul className="space-y-2 text-xs text-[#a89f91]">
                <li><Link href="/" className="hover:text-white transition-colors">Overview Landing Page</Link></li>
                <li><Link href="/#business-cycle" className="hover:text-white transition-colors">Enterprise Business Cycle</Link></li>
                <li><Link href="/#market-radar" className="hover:text-white transition-colors">Tehsil Catchment Radar</Link></li>
                <li><Link href="/login" className="hover:text-white transition-colors">Entrepreneur Login Portal</Link></li>
                <li><Link href="/institution" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Institution Credit Console</Link></li>
              </ul>
            </div>

            {/* Column 3: Schemes & Compliance */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Supported Sovereign Schemes
              </h4>
              <ul className="space-y-2 text-xs text-[#a89f91]">
                <li>• PMEGP (25% - 35% Margin Money Capital Subsidy)</li>
                <li>• PMFME (35% Credit-Linked Grant up to ₹10 Lakhs)</li>
                <li>• SMAM (40% - 80% Custom Hiring Centre Machinery)</li>
                <li>• AIF (3% Interest Subvention up to ₹2 Crore)</li>
                <li>• Mudra Shishu / Kishore / Tarun Micro Credit</li>
              </ul>
            </div>

          </div>

          {/* Footer Bottom Line */}
          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#a89f91]">
            <div>© 2026 GramVest • Smart India Hackathon (SIH 26091). All rights reserved.</div>
            <div className="text-[11px]">
              Strictly non-speculative data models. Credit sanction subject to respective Lead Bank & DIC approvals.
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
