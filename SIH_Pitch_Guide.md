# GramVest: SIH 2026 Round 1 Presentation Guide & Pitch Handbook

**Problem Statement ID:** 26091  
**Problem Statement:** AI-Driven Hyper-Local Business Advisory and Financial Structuring Assistant for Rural Micro-Entrepreneurs  
**Theme:** Rural Entrepreneurship & Market Intelligence | MSME & Agri-Business Empowerment  
**Project Name:** GramVest — The Rural Decision Engine  
**Presentation URL:** Open `index.html` in your browser  
**Target Pitch Time:** 4 to 5 Minutes + Jury Q&A  

---

## 1. Executive Summary for Judges

GramVest solves the fundamental paradox of rural financing in India: **Capital is abundant, but local business intelligence is absent.**

Under government schemes administered by State Channelizing Agencies (SCAs) and Channelizing Agencies (CAs), rural beneficiaries need only provide a **10% margin money fraction**, while the state provides **90% concessional credit** (e.g., contributing ₹1,00,000 unlocks a ₹10,00,00 enterprise with ₹9,00,000 loan eligibility).

However, over **60% of rural micro-enterprises stagnate or default within Year 1** because:
1. **Entrepreneurs invest blind:** They choose business trades based on anecdotal hearsay rather than local data.
2. **Invisible competition:** Multiple people open identical shops (e.g., the 5th kirana on the same village street), causing instant saturation.
3. **Financial confusion:** Beneficiaries do not understand the split between **Micro Finance** (≤ ₹1.40 Lakh @ 6.5% interest, 3-yr tenure, 3-month moratorium) versus **Term Loans** (₹1.40L to ₹50 Lakh @ 8% interest, 7-yr tenure, 6-month moratorium), debt service coverage ratios (DSCR), or quarterly repayment schedules.
4. **Zero affordable guidance:** Formal business consultants charge ₹15,000–₹50,000+ and do not operate in rural blocks.

**GramVest democratizes institutional-grade business consulting.** With just **3 inputs** (Village/Block, Margin Capital, Business Idea), GramVest delivers a localized 5–10km market feasibility study, deterministic scheme routing, quarterly repayment cash flows, and a bank-ready Detailed Project Report (DPR) in **under 5 minutes**.

---

## 2. Word-for-Word 5-Minute Pitch Script

### Slide 1: Title Slide (0:00 – 0:30)
> *"Respected jury members, good morning. We are Team GramVest, presenting our solution for Smart India Hackathon Problem Statement 26091: 'AI-Driven Hyper-Local Business Advisory and Financial Structuring Assistant for Rural Micro-Entrepreneurs'.*
>
> *Our project is **GramVest: The Rural Decision Engine**.*
>
> *Our guiding principle is simple: **Know your market, your competition, and your capital — before you invest a single rupee.** Today, we will demonstrate how GramVest bridges the gap between government concessional credit and grassroots enterprise success."*

---

### Slide 2: Problem Statement (0:30 – 1:15)
> *"To understand our solution, we must look at the ground reality of rural India.*
>
> *The government provides remarkable economic support: under SCA and CA schemes, a rural entrepreneur contributes only a 10% margin, while the state provides 90% as concessional credit. A young entrepreneur with ₹1 Lakh in savings can establish a ₹10 Lakh dairy or textile unit.*
>
> *Yet, despite this capital, the majority of first-time rural ventures fail or stagnate within their very first year. Why? Because they invest completely blind.*
>
> *There are four critical bottlenecks:*
> 1. *First, **No Local Market Visibility**: Urban research tools overlook rural gram panchayats. An entrepreneur cannot estimate whether there is genuine demand within a 5 to 10 kilometer radius.*
> 2. *Second, **Invisible Competition**: Decisions are made on anecdotal hearsay. If one neighbor succeeds with a dairy stall, three others open identical stalls next door, leading to price wars and collapse.*
> 3. *Third, **Financing is Confusing**: Calculating 10% margin equity, 90% debt, Micro Finance limits under ₹1.4 Lakh at 6.5% interest versus Term Loans up to ₹50 Lakh at 8%, plus moratorium periods and bank DPRs, overwhelms first-time borrowers.*
> 4. *Fourth, **Zero Guidance**: Private consultants charge upwards of ₹20,000. Marginalized youth simply have nowhere to turn."*

---

### Slide 3: Proposed Solution (1:15 – 2:05)
> *"GramVest solves this by democratizing institutional-grade consulting into a 5-minute digital workflow.*
>
> *The entrepreneur enters just three inputs: their village or block, their available margin capital (for example ₹1 Lakh), and their business category.*
>
> *GramVest then executes two core modules as mandated by the problem statement:*
>
> * **Module 1: The Hyper-Local Feasibility Engine**: It calculates the consumer catchment in a 5 to 10 kilometer radius, estimates unserved demand gaps, maps competitor density using OpenStreetMap, generates an evidence-backed SWOT analysis, identifies supply chain threats, and recommends optimal regional pricing.*
>
> * **Module 2: The Smart Financial Calculator & Scheme Router**: It automatically structures the feasible project cost (Available Margin divided by 10%), deterministically routes the user to the exact scheme—selecting Micro Finance if under ₹1.40 Lakh at 6.5% interest with 3 months moratorium, or Term Loan up to ₹50 Lakh at 8% with 6 months moratorium. It computes quarterly EMIs, checks DSCR, and generates an official bank-ready DPR dossier."*

---

### Slide 4: Process Flow & User Journey (2:05 – 2:50)
> *(Refer judges to the diagram on screen / FlowChart.jpeg)*
>
> *"On Slide 4, you see our complete operational workflow, mirroring our architecture blueprint.*
>
> *The process follows an auditable 7-step pipeline:*
> 1. *User provides profile parameters.*
> 2. *Our Data Engine ingests spatial geography, mandi rates, and census demographics.*
> 3. *The Feasibility Engine scores market viability and saturation.*
> 4. *The Deterministic Financial Engine computes project cost, debt-equity ratio, break-even, and cash flows.*
> 5. *The Scheme Router checks policy criteria.*
> 6. *Our Grounded AI Advisor translates the findings into vernacular insights via RAG over official government gazettes.*
> 7. *Finally, the system outputs an actionable Feasibility Verdict and a downloadable DPR PDF ready for bank submission.*
>
> *Every step is transparent; there are no black-box assumptions."*

---

### Slide 5: System Architecture & Tech Stack (2:50 – 3:40)
> *"Now let's examine the engineering behind GramVest.*
>
> *Our architecture is anchored on one golden rule: **'AI explains; software calculates.'***
>
> *Generative AI is notorious for numerical hallucination. In financial lending, you cannot have an LLM guessing interest rates or loan amounts. Therefore:*
> * *All financial logic, EMI amortization, DSCR, and scheme eligibility are computed using **100% deterministic Python modules** (FastAPI, NumPy, and Decimal precision).*
> * *Our spatial radar runs on **PostgreSQL with PostGIS**, performing spatial radius queries over OpenStreetMap data and local mandi price APIs.*
> * *Our AI layer uses **RAG (Retrieval-Augmented Generation)** powered by **pgvector and LangChain** over verified government policy gazettes. The LLM's role is strictly limited to explaining verified numbers in natural vernacular language.*
> * *The frontend is built with **React and Tailwind CSS**, featuring an intuitive setup wizard, Leaflet catchment maps, and interactive What-If scenario sliders."*

---

### Slide 6: Future Scope & Roadmap (3:40 – 4:20)
> *"Looking beyond Round 1, we have mapped a 4-phase roadmap to transition GramVest from a hackathon prototype into national digital public infrastructure:*
>
> * **Phase 1: Vernacular Voice AI via Bhashini**: We will integrate the Government of India's Bhashini API for voice-in and voice-out in Hindi, Punjabi, Marathi, Tamil, and Bengali, ensuring zero literacy barrier for rural artisans and women's self-help groups.*
> * **Phase 2: Direct SCA and Bank Integration**: We will build direct API tie-ups with State Channelizing Agencies and the JanSamarth portal so entrepreneurs can submit their pre-vetted DPR directly for digital loan sanctioning.*
> * **Phase 3: Satellite & IoT Agro-Data**: Ingesting ISRO Bhuvan satellite feeds for soil health, harvest timelines, and local mandi price volatility.*
> * **Phase 4: Post-Sanction WhatsApp Bot**: Providing quarterly repayment alerts, working capital nudges, and market warnings to prevent defaults."*

---

### Slide 7: Expected Impact & Conclusion (4:20 – 5:00)
> *"To conclude, GramVest delivers measurable socio-economic impact:*
> * *It serves a population of **65% across 6,00,000+ villages**.*
> * *It compresses a **3-week, ₹25,000 consultant study into 5 free minutes**.*
> * *It eliminates financial confusion through transparent **10% margin to 90% loan structuring**.*
> * *And most importantly, it **de-risks public lending**, reducing NPAs for banks and State Channelizing Agencies by ensuring that every approved loan is backed by data.*
>
> *Every village in India has an active market. GramVest ensures rural India can see it clearly before investing a single rupee.*
>
> *Thank you, respected judges. We are now eager to take your questions!"*

---

## 3. Anticipated Jury Questions & Winning Technical Defenses

### Q1: "How do you prevent the AI from hallucinating financial figures like EMI, interest rates, or loan eligibility?"
**Your Defense:**
> *"That was our primary engineering constraint. We established a strict architectural rule: **'AI explains; software calculates.'** The LLM is never permitted to perform arithmetic or determine scheme eligibility. 
> All calculations—project cost (Margin / 10%), loan amount (90%), interest rates (6.5% vs 8%), quarterly EMIs with moratorium, and DSCR—are calculated by our deterministic Python financial engine (`finance_engine.py`). 
> The calculated numbers are injected as fixed, immutable context into the prompt. Furthermore, we implemented an automated numerical guardrail that scans the AI output: if the LLM mentions any number not present in the backend state, the response is rejected."*

---

### Q2: "Where does your hyper-local village data come from? Small villages don't have Google Maps reviews or Yelp."
**Your Defense:**
> *"We utilize a 3-layer localized data pipeline:
> 1. **OpenStreetMap Overpass API:** Provides spatial points of interest (POIs), road connectivity, nearest commercial hubs, and existing trade establishments.
> 2. **Government Census & Socio-Economic Caste Census (SECC) Datasets:** Gives exact Gram Panchayat household counts, agricultural land holding patterns, and purchasing power indicators.
> 3. **Agmarknet & e-NAM Feeds:** Provides live and historical wholesale/retail commodity prices from the nearest APMC mandis within a 10km buffer.
> By triangulating population density, mandi throughput, and existing business density, our PostGIS engine calculates accurate catchment demand and competition headroom."*

---

### Q3: "How does your Scheme Router handle the specific conditions of the SIH Problem Statement?"
**Your Defense:**
> *"Our Scheme Router implements the exact two-tier logic defined in the problem statement:
> * **10% Equity Rule:** When a user inputs Available Margin (e.g., ₹1,00,000), Project Cost is derived as `Margin / 0.10` = ₹10,00,000, and Loan Eligibility is 90% = ₹9,00,000.
> * **Tier 1 (Micro Finance Scheme):** If Project Cost ≤ ₹1.40 Lakh, the system selects Micro Finance (funding up to 90% max ₹1.25L, 6.5% interest p.a., 3-year tenure with 3-month moratorium).
> * **Tier 2 (Term Loan Scheme):** If Project Cost is between ₹1.40 Lakh and ₹50 Lakh, it routes to Term Loan (funding up to 90% max ₹45L, 8.0% interest p.a., 7-year tenure with 6-month moratorium).
> * In addition, our router is policy-versioned: rules are stored in a database matrix so new state or central schemes can be added without modifying backend code."*

---

### Q4: "What is the What-If Simulator and why is it important?"
**Your Defense:**
> *"First-time entrepreneurs frequently experience financial shocks, such as a 15% surge in cattle feed costs or a 20% drop in milk demand during lean seasons. 
> Our What-If Simulator allows the entrepreneur or bank officer to stress-test the business model before taking the loan. It dynamically recalculates operating profit, cash surplus, and Debt Service Coverage Ratio (DSCR). If DSCR drops below 1.25×, the system flags the venture as high-risk and recommends mitigation measures, such as securing cooperative bulk feed purchasing."*

---

### Q5: "What makes your DPR 'Bank-Ready'?"
**Your Defense:**
> *"A bank or State Channelizing Agency does not accept informal bullet points; they require a formal Detailed Project Report (DPR). 
> GramVest generates a standard PDF report formatted using ReportLab containing:
> 1. Executive Summary & Promoter Profile.
> 2. 5–10km Catchment Market & Competitor Analysis.
> 3. Verified Cost of Project & Means of Finance (10% equity / 90% term loan).
> 4. 12-Month Projected Profit & Loss and Cash Flow Statements.
> 5. Amortization Schedule including the statutory 3-month or 6-month moratorium.
> 6. DSCR and Break-Even Point.
> This report plugs directly into the underwriting workflow of District Industries Centres (DICs) and rural bank managers."*

---

## 4. Summary Checklist for Presentation Day
- [ ] Open `index.html` in Chrome or Safari.
- [ ] Test keyboard controls (`Right Arrow` for next, `Left Arrow` for previous, `F` for fullscreen, `P` for presenter notes).
- [ ] Ensure `FlowChart.jpeg` is in the same folder as `index.html`.
- [ ] Test the click-to-zoom modal on Slide 4 (`FlowChart.jpeg`).
- [ ] If submitting a PDF version, press `Ctrl+P` (or `Cmd+P`), select **Save as PDF**, set Layout to **Landscape**, Margins to **None**, and verify all 7 slides render cleanly.
