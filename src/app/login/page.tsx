"use client";

import React, { useState } from "react";
import Link from "next/link";

interface DemoProfile {
  name: string;
  phone: string;
  enterprise: string;
  location: string;
  cost: string;
  debt: string;
  subsidy: string;
  scheme: string;
  score: number;
  dscr: number;
}

const DEMO_PROFILES: DemoProfile[] = [
  {
    name: "Gurpreet Singh",
    phone: "98765 43210",
    enterprise: "1,000L Bulk Milk Chilling Unit",
    location: "Sidhwan Bet, Ludhiana",
    cost: "₹9,00,000",
    debt: "₹6,00,000",
    subsidy: "₹3,15,000",
    scheme: "PMEGP (35% Subsidy)",
    score: 74,
    dscr: 1.62,
  },
  {
    name: "Harpreet Kaur",
    phone: "98140 12345",
    enterprise: "Spice & Flour Processing Mill",
    location: "Dhuri, Sangrur",
    cost: "₹8,20,000",
    debt: "₹5,33,000",
    subsidy: "₹2,87,000",
    scheme: "PMFME (35% Grant)",
    score: 79,
    dscr: 1.74,
  },
  {
    name: "Jaswinder Singh",
    phone: "98722 88990",
    enterprise: "Custom Hiring Farm Center",
    location: "Samrala, Ludhiana",
    cost: "₹22,00,000",
    debt: "₹13,20,000",
    subsidy: "₹8,80,000",
    scheme: "SMAM Farm Mechanization",
    score: 82,
    dscr: 1.88,
  },
];

export default function UserLoginPage() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"phone" | "otp" | "authenticated">("phone");
  const [activeUser, setActiveUser] = useState<DemoProfile | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 5) {
      alert("Please enter a valid 10-digit mobile number or Aadhaar.");
      return;
    }
    setStep("otp");
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const matched = DEMO_PROFILES.find((p) => p.phone.replace(/\s+/g, "") === phone.replace(/\s+/g, ""));
    setActiveUser(matched || {
      name: `Entrepreneur (${phone.slice(-4)})`,
      phone: phone,
      enterprise: "Rural MSME Enterprise",
      location: "Punjab, India",
      cost: "₹10,00,000",
      debt: "₹6,50,000",
      subsidy: "₹3,50,000",
      scheme: "PMEGP General",
      score: 76,
      dscr: 1.68,
    });
    setStep("authenticated");
  };

  const handleQuickLogin = (profile: DemoProfile) => {
    setPhone(profile.phone);
    setActiveUser(profile);
    setStep("authenticated");
  };

  const handleLogout = () => {
    setActiveUser(null);
    setPhone("");
    setOtp("");
    setStep("phone");
  };

  return (
    <main className="min-h-screen bg-[#fff8f2] text-[#1d1b18] flex flex-col justify-between">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 bg-[#fff8f2]/95 backdrop-blur-md border-b border-[#ede3d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-[#c25838] flex items-center justify-center text-white font-black text-lg shadow-sm shadow-[#c25838]/30 group-hover:scale-105 transition-transform">
              G
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight leading-none">
                Gram<span className="text-[#c25838]">Vest</span>
              </span>
              <span className="text-[10px] font-mono text-[#706c63] tracking-wider uppercase mt-0.5">
                Rural Enterprise Engine
              </span>
            </div>
          </Link>

          {/* 3 Nav Logins: 1. User Login, 2. Institution Login, 3. Dashboard */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* 1. User Login (Active Page) */}
            <div
              className="flex items-center gap-1.5 sm:gap-2 bg-[#c25838] text-white text-xs sm:text-[13.5px] font-bold px-3.5 sm:px-4 py-2 rounded-xl shadow-xs shadow-[#c25838]/20 ring-2 ring-white/50 whitespace-nowrap"
            >
              <svg className="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>User Login</span>
            </div>

            {/* 2. Institution Login (Opens in a different page) */}
            <Link
              href="/institution"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 bg-[#c25838] hover:bg-[#b04f32] text-white text-xs sm:text-[13.5px] font-bold px-3.5 sm:px-4 py-2 rounded-xl shadow-xs shadow-[#c25838]/20 transition-all whitespace-nowrap"
              title="Open Institution Portal in a new page"
            >
              <svg className="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M15 10v11M12 3l9 7H3z" />
              </svg>
              <span>Institution Login</span>
            </Link>

            {/* 3. Dashboard Login */}
            <a
              href="https://webapp-demo-eta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 bg-white border-[1.5px] border-[#e2dbce] hover:border-[#c25838]/50 hover:bg-[#faf7f2] text-[#1d1b18] text-xs sm:text-[13.5px] font-bold px-3.5 sm:px-4 py-2 rounded-xl shadow-xs transition-all whitespace-nowrap group"
              title="Open Webapp Demo Dashboard"
            >
              <svg className="w-4 h-4 text-[#3a3530] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
              <span>Dashboard</span>
              <svg className="w-3.5 h-3.5 text-[#5c544d] ml-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 flex items-center justify-center">
        {step !== "authenticated" ? (
          <div className="w-full max-w-md bg-white border border-[#e2dbce] rounded-3xl p-8 sm:p-10 shadow-xl shadow-black/5">
            {/* Header Badge */}
            <div className="flex items-center justify-between mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fbebe4] text-[#c25838] text-xs font-mono font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#c25838] animate-pulse" />
                MSME Entrepreneur Portal
              </span>
              <Link
                href="/"
                className="text-xs font-bold text-[#706c63] hover:text-[#1d1b18] transition-colors"
              >
                ← Back to Home
              </Link>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-[#1d1b18] tracking-tight">
              User Login
            </h1>
            <p className="text-xs sm:text-sm text-[#706c63] mt-2 mb-6 leading-relaxed">
              Sign in to view your real-time feasibility audit, monitor sovereign subsidy claims (PMEGP, PMFME, AIF), and download bank-ready DPRs.
            </p>

            {/* Form */}
            {step === "phone" ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#1d1b18] uppercase tracking-wider mb-2">
                    Mobile Number / Aadhaar UID
                  </label>
                  <div className="flex rounded-xl overflow-hidden border border-[#ddd6c9] focus-within:border-[#c25838] focus-within:ring-2 focus-within:ring-[#c25838]/20 transition-all">
                    <span className="inline-flex items-center px-4 bg-[#f7f2eb] border-r border-[#ddd6c9] text-sm font-bold text-[#706c63]">
                      +91
                    </span>
                    <input
                      type="tel"
                      placeholder="98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white px-4 py-3 text-sm font-semibold text-[#1d1b18] outline-none"
                      required
                    />
                  </div>
                  <p className="text-[11px] text-[#706c63] mt-1.5">
                    We will send a one-time password (OTP) via SMS.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c25838] hover:bg-[#b04f32] text-white font-bold text-sm py-3.5 rounded-xl shadow-md shadow-[#c25838]/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Send OTP Verification Code</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#1d1b18] uppercase tracking-wider mb-2">
                    Enter 4-Digit OTP Code
                  </label>
                  <div className="p-3 bg-[#fdfaf5] border border-[#ede3d8] rounded-xl text-xs text-[#706c63] mb-3 flex items-center justify-between">
                    <span>Sent to <strong>+91 {phone}</strong></span>
                    <span className="font-mono text-[#c25838] font-bold bg-[#fbebe4] px-2 py-0.5 rounded">Demo: 1234</span>
                  </div>
                  <input
                    type="text"
                    maxLength={4}
                    placeholder="1234"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full bg-white border border-[#ddd6c9] rounded-xl px-4 py-3.5 text-center text-xl font-mono font-bold tracking-widest text-[#1d1b18] outline-none focus:border-[#c25838] focus:ring-2 focus:ring-[#c25838]/20 transition-all"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c25838] hover:bg-[#b04f32] text-white font-bold text-sm py-3.5 rounded-xl shadow-md shadow-[#c25838]/25 transition-all cursor-pointer"
                >
                  Verify &amp; Enter Dashboard
                </button>

                <button
                  type="button"
                  onClick={() => setStep("phone")}
                  className="w-full text-xs font-bold text-[#706c63] hover:text-[#1d1b18] text-center pt-2 transition-colors"
                >
                  ← Edit Mobile Number
                </button>
              </form>
            )}

            {/* Quick Demo Logins */}
            <div className="relative my-7">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#ede3d8]" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-white text-[#706c63] font-mono text-[11px] uppercase tracking-wider">
                  Quick Demo Access
                </span>
              </div>
            </div>

            <div className="space-y-2.5">
              {DEMO_PROFILES.map((p) => (
                <button
                  key={p.phone}
                  onClick={() => handleQuickLogin(p)}
                  className="w-full bg-[#faf7f2] hover:bg-[#f3ede6] border border-[#e2dbce] p-3 rounded-xl text-left transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <div className="font-bold text-xs text-[#1d1b18] group-hover:text-[#c25838] transition-colors">
                      {p.name}
                    </div>
                    <div className="text-[11px] text-[#706c63]">{p.enterprise}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono font-bold text-[#3a6b4c] bg-[#d4e6c1]/60 px-2 py-0.5 rounded-full">
                      Score: {p.score}/100
                    </span>
                    <div className="text-[10px] text-[#706c63] mt-0.5">{p.location}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Switch to Institution */}
            <div className="mt-8 pt-6 border-t border-[#ede3d8] text-center">
              <p className="text-xs text-[#706c63]">
                Are you a Commercial Bank, Impact Fund, or NBFC officer?
              </p>
              <Link
                href="/institution"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#c25838] hover:underline mt-1.5"
              >
                <span>Go to Institution Underwriting Portal (Opens in New Page)</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </Link>
            </div>
          </div>
        ) : (
          /* Authenticated User View */
          <div className="w-full max-w-3xl bg-white border border-[#e2dbce] rounded-3xl p-8 sm:p-10 shadow-xl shadow-black/5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#ede3d8]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#3a6b4c] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-[#3a6b4c] uppercase tracking-wider">
                    Authenticated Session Active
                  </span>
                </div>
                <h2 className="text-2xl font-black text-[#1d1b18] mt-1">
                  Welcome back, {activeUser?.name}
                </h2>
                <p className="text-xs text-[#706c63]">
                  {activeUser?.enterprise} • {activeUser?.location}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/"
                  className="px-4 py-2 text-xs font-bold text-[#1d1b18] bg-[#f7f2eb] hover:bg-[#ede3d8] rounded-xl transition-colors"
                >
                  Return to Landing
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-colors cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
              <div className="bg-[#faf7f2] border border-[#ede3d8] p-4 rounded-2xl">
                <div className="text-[11px] font-mono text-[#706c63] uppercase">Viability Score</div>
                <div className="text-2xl font-black text-[#3a6b4c] mt-1">{activeUser?.score}/100</div>
                <div className="text-[10px] text-[#3a6b4c] font-bold mt-0.5">✓ Bank Grade Ready</div>
              </div>

              <div className="bg-[#faf7f2] border border-[#ede3d8] p-4 rounded-2xl">
                <div className="text-[11px] font-mono text-[#706c63] uppercase">Total Outlay</div>
                <div className="text-2xl font-black text-[#1d1b18] mt-1">{activeUser?.cost}</div>
                <div className="text-[10px] text-[#706c63] mt-0.5">CAPEX + 90D OPEX</div>
              </div>

              <div className="bg-[#faf7f2] border border-[#ede3d8] p-4 rounded-2xl">
                <div className="text-[11px] font-mono text-[#706c63] uppercase">Subsidy Grant</div>
                <div className="text-2xl font-black text-[#c25838] mt-1">{activeUser?.subsidy}</div>
                <div className="text-[10px] text-[#c25838] font-bold mt-0.5">{activeUser?.scheme}</div>
              </div>

              <div className="bg-[#faf7f2] border border-[#ede3d8] p-4 rounded-2xl">
                <div className="text-[11px] font-mono text-[#706c63] uppercase">DSCR Coverage</div>
                <div className="text-2xl font-black text-[#1d1b18] mt-1">{activeUser?.dscr}x</div>
                <div className="text-[10px] text-[#3a6b4c] font-bold mt-0.5">Threshold &gt; 1.25x</div>
              </div>
            </div>

            {/* Actions Card */}
            <div className="bg-[#fff8f2] border border-[#ede3d8] p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-sm text-[#1d1b18]">
                  Detailed Project Report (DPR) Package Ready
                </h4>
                <p className="text-xs text-[#706c63] mt-0.5">
                  Complete 18-page credit appraisal report generated with geotagged catchment data and DIC subsidy claim forms.
                </p>
              </div>
              <button
                onClick={() => {
                  setIsCopied(true);
                  setTimeout(() => setIsCopied(false), 2500);
                }}
                className="w-full sm:w-auto bg-[#c25838] hover:bg-[#b04f32] text-white text-xs font-bold px-5 py-3 rounded-xl transition-all cursor-pointer shrink-0 flex items-center justify-center gap-2 shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>{isCopied ? "✓ Package Downloaded!" : "Download Bank DPR Package"}</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-[#ede3d8] bg-white/60 py-4 text-center text-xs text-[#706c63]">
        GramVest Sovereign Rural Financing Console • Multi-Agency Underwriting Gateway
      </footer>
    </main>
  );
}
