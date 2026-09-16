"use client";

import React, { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: 1,
    question: "Do I need to enter my Aadhaar or personal bank account number?",
    answer:
      "No. GramVest does not request or store Aadhaar numbers, personal bank accounts, or sensitive identity tokens. Feasibility scans are based purely on geographic cluster dynamics, commercial census data, and tehsil electricity feeder telemetry.",
  },
  {
    id: 2,
    question: "How accurate is the local tehsil competition and mandi data?",
    answer:
      "Our data pipeline synchronizes weekly with Agmarknet arrival registries, Punjab Mandi Board bulletin logs, State Discom (PSPCL) rural feeder bulletins, and registered Udyam MSME license registrations at the tehsil tier. Margin estimations reflect prevailing local APMC prices within a 7-day trailing average.",
  },
  {
    id: 3,
    question: "Will public sector banks (SBI, PNB, Punjab Gramin Bank) accept this dossier?",
    answer:
      "Yes. The generated 12-page Feasibility Dossier format strictly follows the PMEGP/CMA (Credit Monitoring Arrangement) layout required by Lead District Managers (LDMs) and nationalized bank branch managers, complete with Debt Service Coverage Ratio (DSCR) calculations and itemized vendor equipment quotations.",
  },
  {
    id: 4,
    question: "How are the PMEGP subsidies (25% to 35%) and PMFME grants calculated?",
    answer:
      "Under the Prime Minister's Employment Generation Programme (PMEGP), general category promoters in rural areas qualify for 25% margin money capital subsidy, while special category promoters (Women, SC/ST, Ex-Servicemen, OBC) qualify for up to 35% on projects up to ₹50 Lakhs. Under PMFME, micro food processing units qualify for 35% credit-linked capital grants capped at ₹10 Lakhs.",
  },
  {
    id: 5,
    question: "How does Voice Search work in Punjabi and Hindi?",
    answer:
      "Entrepreneurs can speak directly in Punjabi (e.g. “ਮੈਂ ਡੇਅਰੀ ਪ੍ਰੋਸੈਸਿੰਗ ਦਾ ਕੰਮ ਸ਼ੁਰੂ ਕਰਨਾ ਚਾਹੁੰਦਾ ਹਾਂ”), Hindi, or English. Our integrated voice matching engine uses browser speech recognition to automatically parse rural trade keywords and map them directly to verified business archetypes.",
  },
  {
    id: 6,
    question: "What happens if my village feeder has frequent power cuts?",
    answer:
      "GramVest correlates PSPCL power schedules with your chosen machinery load. If daytime 3-phase supply is under 16 hours, the system automatically factors in hybrid solar synchronization or backup generator fuel costs to verify whether your monthly net profit remains solvent above the 1.30x bank debt hurdle.",
  },
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 bg-[#faf4ee] border-t border-[#ede3d8]" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2.5">
          <span className="text-xs font-bold text-[#c75d3e] uppercase tracking-wider bg-[#fcedea] px-3.5 py-1.5 rounded-full border border-[#c75d3e]/20 inline-block">
            Clear Clarity • SIH 26091
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1d1b18] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#706c63]">
            Transparent answers on Punjab mandi datasets, sovereign subsidies, and bank acceptance.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#ede3d8] shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left font-bold text-[#1d1b18] text-sm sm:text-base flex justify-between items-center gap-4 hover:text-[#c75d3e] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#706c63] shrink-0 transform transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#c75d3e]" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#706c63] leading-relaxed border-t border-[#f4eee6] pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Link to Dedicated Full FAQ Page */}
        <div className="mt-10 text-center">
          <a
            href="/faqs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#ede3d8] hover:border-[#c75d3e] text-[#1d1b18] hover:text-[#c75d3e] text-xs sm:text-sm font-bold shadow-2xs transition-all group"
          >
            <span>Explore Complete FAQ Knowledge Base (Categories, Search & Subsidies)</span>
            <svg
              className="w-4 h-4 text-[#c75d3e] transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
