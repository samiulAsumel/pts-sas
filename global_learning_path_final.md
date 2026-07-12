# Global Port & Maritime Tech Specialist
## Advanced Professional Curriculum — v4.0 (Track W Full Rebuild Edition)

| | |
|---|---|
| **Prepared for** | Md Samiul Alam Sumel |
| **Current Role** | Senior Outdoor Assistant — Mongla Port Authority, Traffic Department, Revenue Branch |
| **Document Purpose** | Complete, advanced-level, multi-track technical and domain curriculum for global remote software & port-domain consulting |
| **Scope** | Sequence-based — no fixed calendar; advance at own pace |
| **Version** | **4.2 (Gap-Free, Platform-Sovereign Edition)** — v4.1 plus a full deployment-doctrine rewrite: Vercel removed entirely (not used, not taught); Cloudflare is the primary platform, self-hosted VPS (Docker + reverse proxy, Track L tie-in) is the sovereignty fallback, and every framework choice is screened for portability/lock-in. Prior v4.1 scope: v4.0's Track W audited lesson-by-lesson for sequencing bugs, forward dependencies, and market gaps; six new modules added, one sequencing bug fixed, and the AI-assisted-coding layer hardened against the 2026 hiring-market's actual screens (AI-output verification, context engineering, agent failure modes, eval design, LLM security). Track W is now W1–W260. Originally rebuilt in v4.0 from Programming Hero **Batch 12** and **Batch 14** from Programming Hero **Batch 12** ("Let's Code Your Career") and **Batch 14** ("AI-Driven Full Stack Web Engineering") source material, expanded and re-sequenced to advanced/professional/AI-native depth. **Tracks L, N, AU, TOS, and PY are unchanged from v3.3/3.7** — nothing outside Track W was removed. |

---

## 0. Version 4.0 → 4.2 Changelog — What Changed and Why

**Ki change hoyeche:** Purono Track W (v3.3, W1–W130) shudhu original 100-lesson Programming Hero base + 30-lesson custom advanced layer diye toiri chilo. Ekhon tumi nijer haate Batch 12 (81 modules, 14 milestones — purono/foundational batch) ebong Batch 14 (AI-Driven Full Stack, newest batch — TypeScript-first, BetterAuth, Hero UI/ShadCN, Mongoose, dual-payment, heavy AI-assisted-coding milestone) upload korecho. Ei duita **real, current Programming Hero curriculum** — tai Track W-ke ekdom notun kore, ei duita source-er upor base kore, rebuild kora hoyeche.

**Ki change hoyni:** Track L (110), Track N (110), Track AU (110), Track TOS (140), Track PY (150) — ei paanchta track **word-for-word unchanged** ache eyi document-e, exactly jevabe v3.3/3.7-e chilo. GitHub protocol, commit convention, Daily Teaching Protocol (Section 15.8), Readiness Checkpoints — shobkichu same structure-e ache, shudhu Track W-related numbers/repo-names update kora hoyeche jekhane dorkar.

**Lesson count change (v4.0):** Track W 130 → 220 lessons (W1–W220). Karon: Batch 14-er updated stack (TypeScript-first sequencing, BetterAuth, Hero UI/ShadCN, Mongoose, dual payment rails, AI-first PRD-driven project workflow) + Batch 12-er valuable extra depth (Git branch/PR/merge, raw MongoDB driver before ORM, Firebase Auth as portable alternate pattern, extra Vibe-Coding tool tour) + **three full AI-assisted-coding modules** (Cursor, Claude Code, multi-agent workflows — pulled directly from Batch 14's Milestone 11, which is far deeper than anything in the old v3.3) + **one brand-new module** or production LLM/RAG integration into web products (not in either batch — added because this is now a real, biddable freelance skill in 2026). Grand total curriculum after v4.0: 750 → 840 lessons (only Track W's count changed).

### 0.1 — v4.1 Deep Gap Analysis (Why W220 Became W260)

v4.1 is the result of a lesson-by-lesson audit of v4.0 against two tests: **(a) no forward dependencies** — no lesson may require a concept taught later — and **(b) no market gaps** — every skill a paying client brief or a 2026 technical screen would probe must have a home. Findings and fixes:

| # | Gap Found in v4.0 (and in both PH batches) | Severity | Fix in v4.1 |
|---|---|---|---|
| 1 | **Sequencing bug:** Project 2 (Port Cargo Tracker, "TS + DOM") sat at W63 — one lesson *before* the DOM module (W64–W70). A project cannot use DOM APIs that haven't been taught. | High | Project moved to W71, after the DOM module. Design rule added: no forward dependencies anywhere in the track. |
| 2 | **No SQL/relational databases anywhere.** Both PH batches are MongoDB-only. Most enterprise port/logistics systems and a large share of freelance briefs are PostgreSQL/MySQL-backed; "SQL vs NoSQL" is also a standard interview probe. | **Critical** | New Module W20 (W143–W150): PostgreSQL, schema design/normalization, joins, transactions/indexes, Prisma, migrations, SQL-vs-NoSQL decision framework, relational port-billing schema mini-project. |
| 3 | **Testing deferred ~80 lessons too late.** Batch 14 flags "Introduction to Testing" as a NEW topic but never sequences it; v4.0 pushed all testing to W183+. That trains a write-untested-code habit for months. | High | New Module W15 (W100–W104): debugging method, DevTools deep dive, error taxonomy, Vitest intro, first component tests — so W29's advanced testing later builds on habit, not zero. |
| 4 | **Debugging never taught as a skill.** Both batches show debugging incidentally, never as a method. Reading stack traces and DevTools fluency are daily-survival skills. | High | One lesson added inside W6 (error messages & stack traces, first console-debug session) + the W15 module above. |
| 5 | **Production backend essentials missing:** transactional email (one buried Batch 12 lesson), real file storage (Batch 12 uses ImageBB, a toy), background jobs/queues, app-level caching, webhook idempotency (a retried Stripe webhook must not double-bill), cron, secrets management. All appear constantly in real freelance briefs. | **Critical** | New Module W21 (W151–W157) covering all seven — deliberately placed *before* the payment-integration projects so idempotent webhook handling is available when Stripe/SSLCommerz arrive. |
| 6 | **The actual delivery stack (Cloudflare) absent.** PortBill and carview run on Cloudflare Pages/Workers, yet both batches teach only other platforms (Railway/Netlify/Firebase and similar). Learning-vs-shipping platform mismatch. | High | New Module W24 (W174–W179): Pages advanced, Workers, D1 (reusing W20's SQL), R2, KV, cron triggers, PortBill-style mini-deploy. |
| 7 | **AI-output verification not drilled.** 2026 market data: ~92% of developers use AI tools (commodity), but only ~29% trust the output and only ~30% of suggestions survive review unmodified — the scarce, paid skill is catching what AI got wrong. v4.0 taught *using* agents, not *auditing* them. | **Critical (market)** | W27 gains recurring **verification drills**: AI-generated code with planted logic/security/performance bugs, found by reading before running, then explained. |
| 8 | **Context engineering unnamed.** Structuring repos/docs/API boundaries so agents (and humans) work effectively is emerging as its own hiring criterion, distinct from prompting. v4.0 had it only implicitly via CLAUDE.md. | Medium-High | W26 gains a named, drilled Context Engineering unit (restructure a messy repo for agent + human navigability). |
| 9 | **Agent failure modes untaught.** Subagent timeouts, state across tool calls, runaway cost, and when NOT to use an agent — the line between "used Claude Code" and "can run agents in production." Roughly half of developers still don't use agents at all, so this remains genuinely differentiated. | Medium-High | W26 gains an agent-failure-modes unit + MCP protocol fundamentals (groundwork for the W34 MCP-server capstone). |
| 10 | **LLM-specific security missing.** OWASP LLM Top 10 (prompt injection, insecure output handling, context data leakage) is distinct from classic web OWASP (which W33 covers) and is a standard screen for anyone shipping customer-facing AI. | High | Introduced in W27, then applied in W34 (prompt-injection tests against your own deployed widget). |
| 11 | **No eval design.** "How do you know your AI feature still works after a prompt/model change?" is described in current hiring guides as the universal 2026 screen. v4.0's W30 shipped AI features without measurement. | High | W34 gains eval design as a first-class unit (port-domain test set, regression measurement) plus guardrails/hallucination-aware UX, cost control & multi-model routing. |
| 12 | **AI feasibility scoping & honest representation not formalized.** Clients ask for "AI" vaguely; the person who scopes honestly (can/can't/costs) wins trust. This matches the existing no-overhype principle but had no lesson. | Medium | W25 gains two units: feasibility scoping as a client service, and representing AI-assisted work honestly in proposals/READMEs. |
| 13 | **MCP-server building absent.** Consuming MCP servers was covered; *building* one wasn't. An MCP server exposing port-billing/vessel data combines Samiul's rarest asset with the current interoperability standard — near-zero competition in the "port + web" freelance niche. | Medium (high differentiation) | W34 capstone extended: build & publish `port-mcp-server` alongside the AI widget. |
| 14 | **Accessibility introduced too late.** v4.0 first touched a11y at W28 (production layer). Retrofitting accessibility is far costlier than building with it. | Medium | Accessible component patterns (keyboard nav, ARIA basics) moved into W17 (UI Systems); full WCAG audit remains in W32. |

**Deliberately NOT added (with reasons, so these are conscious decisions rather than silent gaps):** deep data-structures-and-algorithms (LeetCode-style) — low relevance to freelance clients; problem-solving drills throughout W6–W8 cover the practical layer, revisit only if pursuing salaried big-tech interviews. Docker for web apps — containers are covered properly in Track L (L48–L54, L103–L110) and cross-referenced; duplicating here would violate the curriculum's no-duplication rule. Ops-level Redis/queues — Track AU9 and Track L own the operational side; W21 covers only the application-developer side. Mobile development (React Native) — out of scope for the positioning; revisit only on client demand. Fine-tuning/LoRA — API-level + RAG + evals covers the actual freelance market; fine-tuning is a niche within a niche and Phase 1's deferred list already holds it.

Grand total curriculum after v4.1: **880 lessons** (Track W 260 + L 110 + N 110 + AU 110 + TOS 140 + PY 150). Lesson count unchanged in v4.2 — the v4.2 revision changes *what runs where*, not how much is taught.

### 0.2 — v4.2 Deployment Doctrine (Vercel Removed; Platform-Sovereign & Future-Proof)

**Trigger:** Samiul does not use Vercel; PortBill, carview, and the Smart Port Billing Infrastructure all ship on Cloudflare. v4.1 still carried Vercel residue inherited from the Batch 14 syllabus (which deploys nearly everything to Vercel). v4.2 removes it completely and replaces "pick a hosting brand" with an explicit, professional **deployment doctrine** — because platform choices, not framework choices, are where most lock-in and most future-proofing actually live.

**The doctrine (applies to every deployment lesson in Track W):**

| Tier | Platform | When |
|---|---|---|
| **Primary** | **Cloudflare** — Pages, Workers, D1, R2, KV, Queues, Cron Triggers, Workers AI, AI Gateway | Default for everything Samiul ships: own products, demos, portfolio, and client work where Samiul chooses the platform |
| **Sovereign fallback** | **Self-hosted VPS** — Docker + reverse proxy (Caddy/Nginx) + systemd, directly reusing Track L skills | Long-running/stateful backends the edge can't host, clients demanding data residency or full control, and as the permanent proof that no platform owns the portfolio |
| **Client-context awareness** | Railway / Render / Netlify / Firebase — *awareness-level only, never primary* | Only when inheriting a client project that already lives there; a professional can operate in a client's environment without adopting it |

**Future-proofing rules encoded into the track (not slogans — each maps to a concrete lesson change):**
1. **Web-standard APIs over vendor APIs** — Workers' fetch/Request/Response model is the web standard; code written this way runs on any standards-compliant runtime.
2. **Portable frameworks** — the backend framework taught for edge work in W24 is **Hono** (runs unmodified on Workers, Node, Bun, and Deno), so backend skills survive any platform shift; Express remains for the Node/VPS path.
3. **Next.js without the Vercel umbilical** — Next.js is deployed to Cloudflare via the **OpenNext Cloudflare adapter**, taught explicitly, with the honest caveat that adapter fidelity is version-sensitive and must be verified against current docs at teach-time (per the standing version-drift rule); the VPS/Docker path is the guaranteed-portable alternative for any Next.js app.
4. **Data has an exit door** — D1 is SQLite (exportable), R2 is S3-API-compatible, Postgres (W20) is self-hostable; every storage choice in the track must have a documented migration path off the platform.
5. **Escape-hatch drill** — the W24 mini-project ends with a required exercise: take the Cloudflare-deployed app and redeploy its backend to a bare VPS with Docker + Caddy, proving the architecture is portable in practice, not in theory. This doubles as the Track W ↔ Track L bridge.
6. **AI infrastructure follows the same doctrine** — W34's AI features run behind **Cloudflare AI Gateway** (provider-agnostic caching, rate-limiting, cost analytics, and one-line provider swap) with **Workers AI** as the edge-inference option and **Ollama on a VPS** (from W23) as the fully self-hosted option — three tiers, zero mandatory dependence on any single model vendor.

**What was actually edited in v4.2:** the W22/W23 project deployment specs, the whole of W24 (upgraded from "Cloudflare module" to the doctrine's home module, adding Hono, OpenNext, Queues, and the escape-hatch drill), W27's deployment master class, W34's serving/infra stack, the source-map annotations (Batch 14's Vercel-based deployment lessons are explicitly marked *superseded*), and the Deployment Doctrine cross-references in W32. V0 (the UI-generation tool) is retained in W25 — it generates portable React code and is not a hosting dependency; its output deploys to Cloudflare like everything else.

**Honesty note (per your standing preference):** Kichu project pattern (jemon Batch 12-er "Zap Shift" delivery-tracking capstone) sরাসরি port-domain-e reskin kora hoyeche — ei chapter-e explicitly bola ache kothay theke ashche, jate tumi client-ke bolar shomoy honestly bolte paro "ei architecture pattern-ta ami ekটা established delivery-logistics capstone theke shikhe port cargo tracking-e adapt korechi," overhype na kore.

**Batch → Module Source Map (transparency table):**

| Track W Module | Primary Source | What Was Kept / Added |
|---|---|---|
| W1 (Dev Env, Git, AI Mindset) | Batch 14 (Orientation + AI Mindset milestones) + Batch 12 (Git branch/PR/merge) | Batch 14's AI-mindset content is new vs. old v3.3; Batch 12's advanced Git workflow added |
| W2–W5 (HTML/CSS/Tailwind) | Batch 14 (primary, more granular CSS: pseudo-classes, positioning, custom properties) + Batch 12 (portfolio project structure) | Batch 14 is more current; Batch 12's portfolio-build sequencing reused for Project 1 |
| W6–W7 (JS + ES6) | Batch 14 (primary) | Nearly identical core in both batches; Batch 14's sequencing used |
| W8 (TypeScript) | Batch 14 (Milestone 4 — TypeScript moved earlier + full OOP-in-TS module) | **Major upgrade** — old v3.3 taught TS later and lighter; Batch 14 teaches it as a dedicated early milestone including OOP |
| W10 (DOM/BOM) | Batch 14 (dedicated "React Bridge" module) | New explicit module — old v3.3 folded this into JS fundamentals only |
| W12–W14 (React) | Batch 14 (primary, `use()` hook, modern data fetching) + Batch 12 (Payooo/BPL-Dream reusability patterns) | Batch 14 teaches the newer `use()` hook pattern; Batch 12's reusable-function/component patterns folded in |
| W15–W16 (Next.js + Hero UI/ShadCN) | Batch 14 (primary) | Hero UI + ShadCN are new — old v3.3 only had "Hero UI/ShadCN" as a single throwaway line |
| W17 (BetterAuth) | Batch 14 (primary) + Batch 12 (Firebase Auth kept as alternate pattern) | **Major upgrade** — BetterAuth is a modern, self-hosted auth library replacing the Firebase-only approach; Firebase kept as a documented alternative since some clients specifically want BaaS |
| W18 (Backend/DB) | Batch 14 (raw MongoDB driver + deep operator/aggregation dive) | Old v3.3 jumped straight to Mongoose; now raw-driver fundamentals taught first (matches how real interviews probe understanding) |
| W19 (Full-Stack Project 1) | Batch 14 (Milestone 9, AI-first PRD workflow, Stripe) | Explicit PRD-writing-with-AI step is new. **v4.2:** Batch 14's Vercel-based deployment lessons for this project are superseded by the Cloudflare-first doctrine (Section 0.2) |
| W20 (Full-Stack Project 2) | Batch 14 (Milestone 10, Modular/MVC, Mongoose, SSLCommerz, Ollama) + Batch 12 (Zap Shift delivery-tracking architecture, reskinned to port cargo) | SSLCommerz + local AI (Ollama) integration are new; Zap Shift's role-based delivery-tracking pattern is the direct architectural ancestor of the port cargo-tracking capstone here — **credit given explicitly, no overhype**. **v4.2:** deployment path replaced per Section 0.2 (Cloudflare/VPS, not Railway-Render-Vercel) |
| W21–W23 (AI-Assisted Coding I–III) | Batch 14 (Milestone 11, by far the deepest AI-coding content of either batch) + Batch 12 (Vibe Coding milestone — Figma Make, Google AI Studio, Firebase Studio, Base44, GitHub Copilot Pro tour) | **This is the single biggest upgrade in v4.0.** Batch 14 alone has ~27 lessons on Cursor/Claude Code/Figma MCP/CodeRabbit; Batch 12 adds a wider tool-comparison tour. Old v3.3 had one throwaway line ("Cursor AI + Claude Code, Lovable/Bolt/V0") — now it's three full modules |
| W24 (Final AI-Native Capstone) | New synthesis | Combines Batch 14's "3 AI tools" final project requirement with the port-domain RTL/i18n capstone already planned in v3.3 |
| W25–W29 (Testing / State / API / Production Eng / Enterprise) | **Unchanged from v3.3** (W101–W130 originally) | This layer was already advanced-professional and ahead of both batches — kept as-is, just renumbered |
| W30 (AI-Native Product Engineering) | **New — not in either batch** | Added because production LLM integration (streaming chat, RAG, tool-calling, guardrails) is now a distinct, biddable 2026 freelance skill; keeps the track ahead of the market rather than just current with it |

---

## Table of Contents

1. Executive Summary
2. Professional Positioning Statement
3. Market Strategy & Revenue Channels
4. Competency Architecture (Skill Map)
5. Curriculum Overview & Track Index
6. Phase 1 — AI Engineering Fundamentals
7. **Track W — Web Development, Advanced Professional & AI-Native (220 Lessons) — REBUILT v4.0**
8. Track L — Linux Systems Administration, Advanced (110 Lessons) — *unchanged*
9. Track N — Configuration Automation / Ansible, Advanced (110 Lessons) — *unchanged*
10. Track AU — Workflow Automation Engineering (n8n), Advanced (110 Lessons) — *unchanged*
11. Track TOS — Port, Maritime & Terminal Operating Systems, Global Standard (140 Lessons) — *unchanged*
12. Track PY — Python Engineering, Advanced (150 Lessons) — *unchanged*
13. Phase 8 — Professional English Communication — *unchanged*
14. Portfolio & Deliverables Roadmap — updated project index
15. GitHub Daily Commit Protocol & Repository Architecture — updated Track W repo timeline
16. Readiness Checkpoints (Milestone Framework) — updated Track W thresholds
17. Immediate Action Items
18. Content Governance Notes — updated with v4.0 sourcing
19. Appendix — Source Material Index & Total Lesson Count Summary — updated totals

---

## 1. Executive Summary

Ei v4.0 update-e **shudhu Track W rebuild hoyeche** — tomar real Batch 12 + Batch 14 Programming Hero course content diye, jate curriculum-ta tomar actual enrolled course-er shathe exactly match kore, ebong shathe shathe advanced-professional + AI-native layer jog kore jate eita generic bootcamp na theke world-class, market-differentiated hoy.

**Six major numbered tracks, updated lesson counts:**

| Track | Domain | Lessons | Status |
|---|---|---|---|
| W | Web Development, Advanced Professional & AI-Native | **260** | **Rebuilt v4.0, gap-audited v4.1** |
| L | Linux Systems Administration (Advanced / RHCSA+) | 110 | Unchanged |
| N | Configuration Automation / Ansible (Advanced / RHCE+) | 110 | Unchanged |
| AU | Workflow Automation Engineering (n8n, Advanced) | 110 | Unchanged |
| TOS | Port, Maritime & Terminal Operating Systems (Global Standard) | 140 | Unchanged |
| PY | Python Engineering (Advanced) | 150 | Unchanged |

**Grand total: 880 numbered lessons** (up from 750 — the +130 all sits inside Track W: +90 in the v4.0 rebuild, +40 in the v4.1 gap-close).

**Country-neutral throughout, unchanged principle:** Track W-er port-domain projects (Port Cargo Website, Tracker, Maritime Dashboard, Port Management API, Port SaaS v1/v2) shob global-applicable — kono single-country dependency nai. Batch 12/14-er original course project names (Zap Shift, Book Vibe, Dragon News, Hero Kidz, ityadi) shobgulo port/maritime-domain-e reskin kora hoyeche.

---

## 2. Professional Positioning Statement

> **"Port & Maritime Technology Specialist — 12+ years of hands-on port operations experience (Mongla Port Authority, Traffic Department) combined with advanced, enterprise-grade, AI-native full-stack software engineering, systems administration, automation engineering, and internationally-standardized port/terminal operations expertise. I design, automate, and deploy production-grade billing, tracking, and terminal-management systems — using both traditional engineering rigor and modern AI-assisted development workflows (Cursor, Claude Code, agentic coding) — backed by certifiable technical depth across Linux, Python, Ansible, and modern web architecture."**

### Why This Positioning Works

| Factor | Explanation |
|---|---|
| **Rarity** | Very few professionals hold both deep port-domain expertise and advanced, certifiable software/systems engineering skill — fewer still can demonstrate fluency in *both* classical engineering and 2026-era AI-assisted development. |
| **Depth over breadth claims** | Every track targets advanced/professional depth; Track W now explicitly demonstrates AI-native workflow fluency, which is a distinct, biddable skill separate from "knows React." |
| **Proof, not claims** | PortBill, client-intake system, plus capstone projects across all six tracks — all deployable, all GitHub-visible, all honestly labeled with their real methodology (including where AI tools did the heavy lifting). |
| **Global applicability** | Every certification path and domain standard is internationally recognized — no single-country dependency. |

---

## 3. Market Strategy & Revenue Channels

### 3.1 Target Client Profile

- Freight forwarders and C&F/customs agents (small-to-mid size, globally distributed)
- Shipping line local agents needing internal tools (billing, tracking, dashboards)
- Small port-tech / logistics-tech companies needing contract developers with domain knowledge
- Companies needing Linux/Ansible infrastructure support with automation-first delivery
- Businesses needing n8n-based process automation regardless of industry
- Independent logistics consultants needing a technical co-builder
- **(New, v4.0)** Small businesses wanting an "AI feature" bolted onto an existing web product (chatbot, document-extraction widget, AI-assisted search) — a direct, sellable outcome of Track W's new Module W30

### 3.2 Revenue Channel Map

| Channel | Mechanism | Priority | Current Status |
|---|---|---|---|
| Upwork / Fiverr | Multiple gigs: "Port & Logistics Billing Web Apps," "AI-Powered Web Features," "n8n Workflow Automation," "Linux/Ansible Infrastructure Setup" | **High** | Launch immediately |
| LinkedIn organic content | Structured post series showcasing real, working projects across all tracks — Track W's AI-assisted-coding capstones are especially shareable content | **High** | Already active — continue cadence |
| Direct cold outreach | Targeted email/LinkedIn messages to global freight forwarders, C&F agencies | Medium | Ongoing, needs volume |
| PortBill as an indie SaaS product | Reposition from Bangladesh-only to globally-marketed small-agent tool | Medium-term | Requires repositioning (see Section 17) |
| Existing local network referrals | Mongla-based C&F/shipping agents with international chain connections | Ongoing | Passive — stay visible |

### 3.3 Realistic Timeline Expectations

Unchanged from v3.3 — this remains a positioning and marketing problem, not a skills gap:

- **First inbound inquiry:** 2–4 weeks of consistent outreach + content
- **First paying client:** 4–8 weeks
- **Predictable monthly income:** 4–6 months of consistent channel activity

---

## 4. Competency Architecture (Skill Map)

| Domain | Current Level | Target Level | Track | Lessons |
|---|---|---|---|---|
| AI-Assisted Engineering / Prompting | Intermediate (informal) | Structured, repeatable competency | Phase 1 | — |
| **Web Development (Full-Stack + AI-Native)** | Strong practically, uneven fundamentals | **Advanced Professional + AI-Native Product Engineering** | **Track W** | **260** |
| Linux Systems Administration | Developing | Advanced (RHCSA-certifiable + enterprise depth) | Track L | 110 |
| Configuration Automation (Ansible) | None | Advanced (RHCE-certifiable + enterprise automation platform) | Track N | 110 |
| Workflow Automation Engineering (n8n) | None | Advanced (enterprise automation architecture) | Track AU | 110 |
| Port & Maritime / TOS Domain Expertise | Expert (practical), informal vocabulary | Advanced (internationally-standardized, certifiable vocabulary + TOS architecture mastery) | Track TOS | 140 |
| Python Engineering | Beginner–Intermediate | Advanced (systems, automation, cloud, and production engineering) | Track PY | 150 |
| Professional English Communication | Functional | Client-facing fluency | Phase 8 | — |
| Business Development / Freelance Ops | Early-stage | Consistent lead generation | Section 3 (ongoing) | — |

---

## 5. Curriculum Overview & Track Index

| Track | Full Name | Lesson Range | Total Lessons | Certification / Outcome Target |
|---|---|---|---|---|
| **W** | Web Development, Advanced Professional & AI-Native | W1–W260 | **260** | Enterprise-grade, AI-native full-stack developer, 10 live capstone deliverables |
| **L** | Linux Systems Administration, Advanced | L1–L110 | 110 | RHCSA + advanced enterprise sysadmin capability |
| **N** | Configuration Automation / Ansible, Advanced | N1–N110 | 110 | RHCE + enterprise automation platform capability |
| **AU** | Workflow Automation Engineering (n8n), Advanced | AU1–AU110 | 110 | Enterprise automation architect capability |
| **TOS** | Port, Maritime & Terminal Operating Systems, Global Standard | TOS1–TOS140 | 140 | Internationally-standardized port operations & TOS architecture mastery |
| **PY** | Python Engineering, Advanced | PY1–PY150 | 150 | Production-grade Python automation & systems engineering |
| — | **Grand Total (Six Advanced Tracks)** | — | **880** | — |

Supporting phases (unchanged): **Phase 1 — AI Engineering Fundamentals**, **Phase 8 — Professional English Communication**.

**Sequencing guidance (unchanged):** No track is hard-dependent on another. W + L can run in parallel, N builds on L, AU is independent, PY reinforces everything, TOS is pure domain knowledge and can run anytime alongside any other track.

---

## 6. Phase 1 — AI Engineering Fundamentals

*(Unchanged from v3.3/3.7.)*

| Sub-Phase | Core Topics |
|---|---|
| Level 1 — Prompt Engineering Fundamentals | Role prompting, context construction, structured output control, chain-of-thought reasoning, self-correction |
| Level 2 — No-Code AI Automation | AI-driven workflows, tool landscape (Zapier AI, Make.com, Notion AI) — bridges directly into Track AU |
| Level 3 — Applied Python + API Integration | Python fundamentals for automation, LLM API calls, PDF/CSV/JSON processing — bridges directly into Track PY |

**Deferred:** RAG, vector databases, LangChain, LlamaIndex at the general-purpose level — revisit only when a client project needs document-search/retrieval functionality. (**Note:** Track W's new Module W30 now *does* cover RAG/vector search specifically in a production web-app context — that is a narrower, applied slice of this deferred content, not a contradiction.)

---

## 7. Track W — Web Development, Advanced Professional & AI-Native (260 Lessons: W1–W260) — v4.1 Gap-Free Edition

**Source:** Rebuilt in full from Programming Hero **Batch 12** + **Batch 14**, merged with the v3.3 Advanced Professional Layer, then **audited lesson-by-lesson in v4.1 for sequencing bugs, missing prerequisites, and market gaps** (see the v4.1 Gap Analysis in Section 0.1). Six new modules and one sequencing fix were added as a result — nothing was skipped or removed.

**Design rule for v4.1:** every lesson may only use concepts taught in an earlier lesson (no forward dependencies), and every skill a paying client or a 2026 technical interview would probe must have a home somewhere in the track — either here or explicitly cross-referenced to another track.

### PART A — Foundational Layer (W1–W179)

| Module | Lessons | Core Topics |
|---|---|---|
| **W1 — Developer Environment, Git/GitHub & AI-Native Mindset** | W1–W10 | VS Code + Node + Git + GitHub install (Win/Mac), terminal basics, Git fundamentals (init/add/commit/push), common Git issues, **advanced: multi-developer contributor workflow, branch/PR/merge**, AI mindset (capabilities & limits, developer-vs-engineer mindset, how NOT to use AI, how AI "thinks" conceptually), responsible AI-native workflow, prompt-engineering basics |
| **W2 — HTML5 Mastery** | W11–W16 | Structure & semantics, text/formatting, lists/links/images/buttons, forms (all input types, fieldset/legend), semantic elements (nav/header/footer/section/article), tables, audio/video/iframe |
| **W3 — CSS3 Mastery** | W17–W26 | Box model & units, selectors, Flexbox fundamentals + practice, CSS Grid + practice, pseudo-classes & pseudo-elements, positioning & z-index, responsive design & media queries, animations/transitions/transforms, custom properties, image optimization |
| **W4 — Project 1: Port Cargo Website** | W27 | First applied project — HTML + CSS deployed site, Git-versioned from day one, deployed to GitHub Pages/Cloudflare Pages |
| **W5 — Tailwind CSS & Utility-First Design** | W28–W31 | Component vs. utility philosophy, Tailwind setup, typography/spacing utilities, Flex & Grid with Tailwind, responsive card + pricing component |
| **W6 — JavaScript Foundations with a Problem-Solving Mindset** | W32–W45 | Variables/data types/naming, operators, conditionals (if/else/ternary/logical/multi-level), loops (for/while/do-while, break/continue), arrays (traversal, push/pop/shift/unshift, sort/reverse, array-of-objects), strings, objects (get/set, keys/values, nested, looping), functions (params/args/return), **NEW (gap-close): reading error messages & stack traces + first DevTools console debugging session** — problem-solving drills using port-domain data (container-weight conversion, duplicate B/L detection, shipment cost calculator, tiered-discount cargo pricing) |
| **W7 — Modern JavaScript (ES6+)** | W46–W53 | `let`/`const`, template strings, arrow functions, default params, spread/rest, destructuring, optional chaining, array power methods (`map`/`forEach`/`filter`/`find`/`reduce`/`slice`), object methods (seal/freeze/entries), closures, callbacks, pass-by-reference vs. value, null vs. undefined, truthy/falsy, `==` vs `===`, scope & hoisting |
| **W8 — TypeScript: Production-Grade Typing** | W54–W63 | Setup & compiler config, primitive vs. non-primitive types, object types/literals/optional properties, typed functions, rest/spread/destructuring in TS, nullish coalescing, special types (nullable/unknown/never), type assertions, interfaces, generics, enums & `as const`, utility types, **OOP in TypeScript** (classes, constructors, inheritance, narrowing, access modifiers, getters/setters/static, polymorphism, abstraction, encapsulation), problem-solving with TS |
| **W9 — DOM, BOM & Browser Fundamentals (React Bridge)** | W64–W70 | DOM tree structure, selection (`getElementBy*` vs. `querySelector`), manipulation (text/attributes/styling), events & `addEventListener`, bubbling/capturing/delegation, BOM essentials (window/location/history), timing (`setTimeout`/`setInterval`), browser storage, async foundations (`Promise`, `fetch`), Virtual DOM & diffing concept |
| **W10 — Project 2: Port Cargo Tracker (Vanilla TS + DOM)** | W71 | **v4.1 sequencing fix: moved AFTER the DOM module** (in v4.0 this project sat at W63, one lesson *before* DOM was taught — a forward dependency). Cargo-status tracker with add/update/delete, typed with TS, deployed |
| **W11 — API Integration, JSON & Async Patterns** | W72–W78 | How the internet works (HTTP/HTTPS, DNS, request lifecycle), REST verbs, `fetch`, async/await, try/catch error handling, loading/error/empty states, pagination-aware fetching — port scenario: live vessel-schedule lookup page |
| **W12 — React Fundamentals** | W79–W91 | React vs. Next.js, components & JSX rules, props, conditional rendering (6 ways), lists + keys, `useState` & controlled inputs, events, the **`use()` hook**, `useEffect` (deps, cleanup), Axios, state lifting, Context API basics, "thinking in React," Recharts data viz with AIS-style vessel data |
| **W13 — Project 3: Maritime Dashboard + AIS (React SPA)** | W92 | Deployed React SPA visualizing simulated AIS vessel-position/ETA data with charts, filters, responsive layout |
| **W14 — React Router & Client-Side Architecture** | W93–W99 | SPA concepts, nested routing/`Outlet`/`Link`/`NavLink`, loaders & `useLoaderData`, dynamic params, `useNavigate`, 404 handling, `useLocation`, React Hook Form, custom hooks for reuse, component-tree design |
| **W15 — NEW (gap-close): Debugging, DevTools & Testing Foundations** | W100–W104 | The scientific debugging method (reproduce → isolate → hypothesize → verify), Chrome DevTools deep dive (Network/Sources/Performance tabs, breakpoints), error taxonomy (syntax vs. runtime vs. logic vs. async), **Vitest introduction & first unit tests**, first React component tests — plus a preview drill: debugging a piece of AI-generated code with a planted logic bug. *Why here: Batch 14 lists "Introduction to Testing" as a NEW batch topic but never sequences it; v4.0 deferred all testing to W183+, which is ~80 lessons of untested code. This closes that gap early so testing becomes a habit, not a chapter.* |
| **W16 — Next.js Foundations & Rendering** | W105–W114 | Why Next.js, App Router structure, pages/dynamic routes/catch-all segments, multiple layouts, CSR vs. SSR vs. SSG vs. ISR + hydration, server vs. client components, server-component data fetching, caching behavior (`no-store`, `revalidate`), `generateStaticParams`, image/font optimization, metadata & SEO, `next/dynamic` lazy loading |
| **W17 — Modern UI Systems: Hero UI, ShadCN & Design Systems** | W115–W119 | Hero UI setup & theming, ShadCN integration, component composition patterns, design-token-driven consistency, **accessible component patterns from the start** (keyboard nav, ARIA basics — moved earlier than v4.0's W28-only placement) |
| **W18 — Authentication: BetterAuth (Primary) + Firebase Auth (Alternate)** | W120–W129 | BetterAuth architecture, MongoDB adapter, credentials register/login, session management, route protection via proxy/middleware, Google OAuth, GitHub OAuth, profile update + image upload, password reset + email verification, logout & deployment — plus documented Firebase Auth alternate pattern for BaaS-preferring clients |
| **W19 — Backend Engineering: Node.js, Express & MongoDB** | W130–W142 | Client-server architecture & Node internals, Express fundamentals & first API, REST design + **EDI/EDIFACT concepts**, MongoDB fundamentals, **raw driver CRUD before any ORM** (`insertOne`/`find`/`updateOne`/`deleteOne`/`ObjectId`), full query/update operators, projection/sorting, **aggregation pipeline** (`$match`/`$group`/`$project`/`$lookup`/`$unwind`/`$facet`) tied to UNCTAD-style KPI reporting, JWT auth + middleware, RBAC (admin/user/moderator) |
| **W20 — NEW (gap-close): SQL & Relational Databases (PostgreSQL + Prisma)** | W143–W150 | Why relational databases still run most of the world, PostgreSQL setup, schema design & normalization, joins & aggregations, transactions & indexes, Prisma (or Drizzle) ORM + migrations, **SQL-vs-NoSQL decision framework** (when Mongo was actually the wrong choice), mini-project: relational **port billing schema** (vessels → calls → invoices → line-items — a naturally relational domain). *Why here: both PH batches are Mongo-only — a known blind spot. Most enterprise port/logistics systems, and a large share of freelance briefs, are SQL-backed. This is the single largest technical gap in both source batches.* |
| **W21 — NEW (gap-close): Production Backend Essentials** | W151–W157 | Transactional email (Nodemailer/Resend — promoted from a single buried Batch 12 lesson), file uploads & object storage (**Cloudflare R2**/S3, presigned URLs — replacing Batch 12's ImageBB toy pattern), background jobs & queues (BullMQ concepts), caching with Redis (app-level; ops-level Redis lives in Track AU9/L), **webhook reliability & idempotency keys** (critical for the payment modules that follow — retried Stripe webhooks must not double-bill), scheduled tasks/cron, environment & secrets management done properly. *Why here: every one of these appears in real freelance briefs; none had a dedicated home in either batch or v4.0.* |
| **W22 — Full-Stack Project 1: Port Management API (AI-First Approach)** | W158–W165 | Writing a **PRD with AI**, wireframing with AI tools, tech-stack decisioning, Next.js/Hero UI/Node/Express/MongoDB/TypeScript build, RBAC, **Stripe** payment + webhooks (checkout session, signature verification, **idempotent webhook handling using W21 skills**), **deployment per the v4.2 doctrine: frontend on Cloudflare Pages, Express API on a self-managed VPS (Docker + Caddy reverse proxy + systemd — first live use of Track L skills) — no managed-PaaS dependency**, end-to-end testing **using the W15 testing habits** |
| **W23 — Full-Stack Project 2: Port SaaS v1 (Modular Architecture + Local AI)** | W166–W173 | **Modular/MVC pattern** (feature-based modules), **Mongoose ODM**, ShadCN UI, **SSLCommerz** integration (regional payment rail — real differentiator for clients Stripe doesn't serve), **local AI via Ollama** (AI-assisted cargo-manifest summarization feature), AI-assisted code review, refactoring bloated files, security & performance pass, **deployment per the v4.2 doctrine (Cloudflare Pages frontend + VPS backend; the Ollama AI feature runs on the same VPS — a fully self-hosted, zero-API-cost AI deployment, itself a sellable pattern for privacy-sensitive clients)**. *(Architecture honestly credited: descended from Batch 12's Zap Shift delivery-tracking capstone, reskinned to port cargo.)* |
| **W24 — Cloudflare-Native Full-Stack & the Deployment Doctrine (home module)** | W174–W179 | Cloudflare Pages advanced (build config, preview deployments), **Workers with web-standard APIs** (fetch/Request/Response — code that runs on any standards-compliant runtime), **Hono** as the portable edge framework (identical code on Workers/Node/Bun/Deno — the future-proof backend skill), **D1** (SQLite at the edge — directly reuses W20's SQL skills, with export/migration path), **R2** (S3-API-compatible object storage) + KV & cache API, **Queues & Cron Triggers** (edge-native version of W21's background-jobs patterns), **Next.js on Cloudflare via the OpenNext adapter** (with the honest version-drift caveat: adapter fidelity verified against current docs at teach-time), and the **escape-hatch drill**: redeploy the mini-project's backend to a bare VPS with Docker + Caddy, proving portability in practice — mini-project: PortBill-style calculator fully on the Cloudflare stack, then partially re-hosted sovereign. *Why here: this is Samiul's actual production stack (PortBill, carview), yet both PH batches teach managed-PaaS-only deployment. This module is the doctrine's home (Section 0.2): Cloudflare primary, VPS sovereign fallback, zero vendor lock-in by design. When PH lessons demonstrate deployment on their default platform, follow conceptually but do the actual deploy on Cloudflare — this module exists to make that translation second nature.* |

### PART B — AI-Assisted Coding, Rebuilt & Market-Hardened (W180–W217)

*v4.1 upgrades in this part come directly from the 2026 hiring-market analysis: the commodity skill is "uses AI tools" (~92% of developers); the scarce skills are verifying AI output, context design, agent-failure handling, and honest AI governance.*

| Module | Lessons | Core Topics |
|---|---|---|
| **W25 — AI-Assisted Coding I: Foundations, Design-to-Code & Rapid Builders** | W180–W189 | Vibe-coding origin/mindset, **golden rules of responsible vibe coding**, the PRD → Spec → Prompt → Review workflow, 2026 AI tool landscape, prompt engineering → context engineering, **Figma MCP** (design-to-code, homepage & multi-page generation, Figma Make export), **Lovable**, **Bolt.new**, **V0**, troubleshooting wrong AI output, comparative tour (Google AI Studio, Firebase Studio, Base44, Replit Agent) — **NEW: AI feasibility scoping as a client service** (translating a vague "we want AI" brief into what's realistically buildable, with honest can/can't boundaries) and **NEW: representing AI-assisted work honestly in proposals and READMEs** (your existing no-overhype principle, formalized into a repeatable client-communication pattern) |
| **W26 — AI-Assisted Coding II: Agentic IDEs — Cursor & Claude Code Mastery** | W190–W202 | **Cursor deep dive:** rules files, codebase indexing, agent mode, `@`-context pinning, MCP integration (GitHub/Supabase/Browser MCP), parallel agents via git worktrees. **Claude Code deep dive:** `CLAUDE.md` as project AI-constitution, slash commands & skills, hooks as guardrails/quality gates, subagents & agent teams, plan → execute → review workflow. Copilot Pro vs. Claude Code comparison. One real SaaS feature built end-to-end agentically. **NEW (market gap-close): Context Engineering as a named, drilled skill** — given a deliberately messy repo, restructure folders, write docs that serve humans *and* agents, and design API boundaries so AI-assisted work gets faster for a whole team (this is emerging as its own hiring criterion, distinct from prompting). **NEW: Agent failure modes** — subagent timeouts, state management across tool calls, runaway-cost detection, and the judgment call of **when NOT to use an agent at all** (production agent experience remains genuinely scarce — ~half of developers still don't use agents). **NEW: MCP fundamentals deep dive** — the protocol itself (tools/resources/prompts), not just consuming pre-built servers, as groundwork for the W34 capstone |
| **W27 — AI-Assisted Coding III: Verification, Security & Deployment Mastery** | W203–W213 | Why code quality matters *more* when you vibe-code, AI-assisted PR review (CodeRabbit-style), AI-assisted automated tests, refactoring to clean/MVC architecture with agents, AI-assisted security review, complex multi-file refactors, parallel agents on separate tasks, deployment master class **per the v4.2 doctrine** (Cloudflare Pages/Workers primary; self-hosted VPS via Docker + reverse proxy as the sovereign path; Railway/Render/Netlify at awareness-level only, strictly for inherited client projects — a professional operates in a client's environment without adopting it), custom domain & SSL on both Cloudflare and VPS paths, **UAT discipline**. **NEW (the scarcest 2026 skill, drilled explicitly): AI-output verification drills** — a recurring exercise format where AI-generated code with planted bugs (logic errors, subtle security holes, performance cliffs) must be found *by reading, before running*, then explained; only ~30% of AI suggestions survive review unmodified, and the market pays for the person who knows which 70% to reject and why. **NEW: OWASP LLM Top 10 introduction** (prompt injection, insecure output handling, data leakage via context) — applied later in W34. **NEW: AI governance & guardrails-before-production** — accountability for AI-assisted decisions, deciding where AI output is reliable vs. risky |
| **W28 — Final AI-Native Capstone: Port SaaS v2 (Multi-Tool Build + i18n)** | W214–W217 | Build & deploy one port-domain SaaS feature using **≥3 AI tools in one pipeline** (e.g., Figma MCP → Cursor/Claude Code → AI review pass), RTL/i18n support retained as a portable pattern, polished README **honestly documenting which tool did what** + short project video walkthrough |

### PART C — Advanced Professional Layer (W218–W247) — *content unchanged from v3.3, renumbered*

| Module | Lessons | Core Topics |
|---|---|---|
| **W29 — Testing & Quality Assurance (Advanced)** | W218–W225 | Unit testing depth (Vitest/Jest), React Testing Library, E2E (Playwright), API mocking (MSW), visual regression, coverage strategy, CI test automation, mutation-testing awareness — *builds on the W15 foundations rather than starting cold* |
| **W30 — Advanced State & Data Architecture** | W226–W231 | Zustand/Redux Toolkit, TanStack Query advanced caching, optimistic updates, real-time (WebSockets/SSE), offline-first patterns, form architecture at scale (RHF + Zod) |
| **W31 — API Architecture Beyond REST** | W232–W236 | GraphQL fundamentals, GraphQL server (Apollo/Yoga), tRPC, API versioning strategy, rate limiting & gateway patterns |
| **W32 — Production Engineering for Web** | W237–W242 | Core Web Vitals deep dive, bundle analysis & code splitting, CDN/edge caching strategy (extends W24 and the v4.2 doctrine — Cloudflare cache rules + Workers cache API as the worked examples), monitoring & error tracking (Sentry-style, self-hostable option noted), WCAG accessibility audit & remediation, i18n architecture |
| **W33 — Enterprise & SaaS Patterns** | W243–W247 | Multi-tenancy patterns, design systems & component libraries at scale, monorepo tooling (Turborepo/Nx), CI/CD pipelines, OWASP Top 10 (classic web) hardening applied |

### PART D — Production AI Integration Layer (W248–W260) — expanded in v4.1

*Reframed around the market's actual screen: not "can you call an LLM API" (commodity) but "can you ship an AI feature a client can trust" — evals, guardrails, cost control, and honest failure-mode communication.*

| Module | Lessons | Core Topics |
|---|---|---|
| **W34 — AI-Native Product Engineering: Production LLM Integration (Doctrine-Compliant Serving)** | W248–W260 | Streaming chat UIs (SSE / web-standard streaming-response patterns, framework-agnostic, served from Cloudflare Workers), RAG over port/shipping documents (chunking strategy, embeddings, vector-DB basics — **Cloudflare Vectorize as the platform-native option, with a self-hostable alternative (pgvector on the W20 Postgres) so the RAG skill is portable**), function-calling/tool-use in a web-facing agent, **eval design as a first-class skill** (a test-set of real port-domain questions with expected answers, measuring regressions when prompts/models change — the universal 2026 interview screen), **guardrails & hallucination-aware UX** (confidence signaling, citation-required answers, graceful "I don't know"), structured-output validation (Zod schemas on LLM responses), **cost control & multi-model routing behind Cloudflare AI Gateway** (provider-agnostic caching, rate limiting, spend analytics, one-line provider swap — plus **Workers AI** for edge inference and **self-hosted Ollama on the VPS** as the zero-vendor tier: three serving tiers, no mandatory dependence on any single model vendor), **applied LLM security** (defending the W27 OWASP LLM Top 10 in a live app — prompt-injection tests against your own deployed widget), deploying a customer-facing AI widget on Workers, **capstone extension: build & publish an MCP server exposing port-billing/vessel-schedule data as agent-callable tools** (2 lessons — your rarest asset combined with the current interoperability standard), honest client-facing AI documentation (what it does, what it can't, what it costs to run) — **final capstone: "Ask About Your Shipment" AI assistant widget + companion `port-mcp-server`, for a freight-forwarder client persona** |

### Portfolio Outcome (Track W v4.1)

**10 named capstone deliverables** (up from 8):

| # | Project | Built At | Demonstrates |
|---|---|---|---|
| W-1 | Port Cargo Website | W27 | HTML/CSS fundamentals, deployed |
| W-2 | Port Cargo Tracker (Vanilla TS + DOM) | W71 | DOM manipulation + TypeScript (now correctly sequenced) |
| W-3 | Maritime Dashboard + AIS (React SPA) | W92 | React fundamentals + data viz |
| W-4 | Relational Port Billing Schema (mini) | W150 | SQL/PostgreSQL/Prisma competence — the gap both PH batches leave open |
| W-5 | Port Management API (Full-Stack Project 1) | W165 | AI-first PRD workflow, Stripe + idempotent webhooks, RBAC, tested |
| W-6 | Port SaaS v1 (Full-Stack Project 2) | W173 | Modular architecture, Mongoose, SSLCommerz, local AI (Ollama) |
| W-7 | Cloudflare-Native PortBill-Style App (mini) | W179 | Workers/D1/R2/KV — your actual production stack, made a portfolio proof |
| W-8 | Final AI-Native Capstone: Port SaaS v2 | W217 | Multi-tool AI-assisted build, honestly documented, i18n/RTL |
| W-9 | Advanced-Layer Capability Set (tested app / GraphQL-tRPC API / performance audit / multi-tenant pattern / CI-CD monorepo) | W218–W247 | Senior-level production engineering |
| W-10 | AI-Powered Port Assistant Widget + `port-mcp-server` | W260 | Production LLM/RAG with evals & guardrails, plus an MCP server over port data — the single most differentiating pairing in the portfolio |

**Practical priority note:** W-1 through W-6 give the fastest client-facing portfolio; W-7 aligns the portfolio with your real delivery stack; W-8 and W-10 are what separate you from every other Programming Hero graduate bidding on the same gigs — almost none will have a documented multi-AI-tool workflow, an eval-tested LLM feature, or an MCP server over real domain data.

---

## 8. Track L — Linux Systems Administration, Advanced (110 Lessons: L1–L110)

*Unchanged from v3.3/3.7 — reproduced in full below.*

**Source:** Original 60-lesson RHCSA track, extended with 50 additional advanced lessons covering enterprise-grade Linux operations beyond exam scope — performance, HA clustering, advanced networking, security hardening, observability, and immutable infrastructure.

### RHCSA Core (L1–L60)

| Module | Lessons | Core Topics |
|---|---|---|
| **L1 — Terminal & File System Foundations** | L1–L7 | Linux basics & terminal, file system + Vim, grep/pipes/redirection, links & wildcards, users/groups/sudo, permissions & ACLs, Week 1 review lab |
| **L2 — Process, Service & Remote Access** | L8–L14 | Process management, job control, systemd & services, SSH setup & keys, SSH hardening, SSH troubleshooting, Week 2 review lab |
| **L3 — Logging & Networking** | L15–L21 | Logging architecture, journalctl mastery, NTP/chrony, networking concepts, nmcli static IP, hostname/DNS, Week 3 review lab |
| **L4 — Package Management & File Operations** | L22–L28 | RPM management, DNF full management, DNF repositories, tar archives, rsync/scp/sftp, find mastery, Week 4 review lab |
| **L5 — Storage, LVM & Security** | L29–L40 | Block devices & mounting, partitioning, filesystem creation, `/etc/fstab`, swap, LVM create & operations, SELinux basics/contexts/booleans+ports, firewalld mastery, SELinux+firewall combined |
| **L6 — Boot, Scheduling, Scripting & Containers** | L41–L54 | Boot process & targets, root password reset, cron, at + systemd timers, NFS, autofs, tuned profiles, bash scripting foundation & real scripts, text processing, Podman basics/volumes/systemd, container lab |
| **L7 — RHCSA Exam Readiness** | L55–L60 | Practice Exam 1 & 2, weak-topics review, speed drills, full mock exam, wrap-up + CIS hardening |

### Advanced Enterprise Layer (L61–L110)

| Module | Lessons | Core Topics |
|---|---|---|
| **L8 — Performance & Kernel Tuning** | L61–L68 | `sysctl` deep dive, advanced `tuned` profiles, cgroups v2, resource limits (`ulimit`/systemd resource control), performance monitoring (`sar`/`iostat`/`vmstat` deep dive), kernel module management, tracing basics (`strace`/`ltrace`), performance troubleshooting lab |
| **L9 — Advanced Storage & High Availability** | L69–L78 | Software RAID (`mdadm`), iSCSI initiator/target, multipath storage, advanced LVM (thin provisioning, snapshots), Stratis storage, HA clustering fundamentals (Pacemaker/Corosync), fencing/STONITH concepts, shared storage clustering lab, GFS2 basics, HA capstone lab |
| **L10 — Advanced Networking** | L79–L86 | VLAN configuration, network bonding/teaming, advanced routing, network namespaces, `iptables`/`nftables` deep dive, network troubleshooting toolkit (`tcpdump`/Wireshark basics), DNS server (BIND) basics, networking capstone lab |
| **L11 — Enterprise Security Hardening** | L87–L94 | `auditd` deep dive, AIDE file integrity monitoring, OpenSCAP compliance scanning, advanced PAM configuration, sudo policy design at scale, PKI/certificate management basics, security incident response on Linux, hardening capstone lab |
| **L12 — Monitoring, Observability & Enterprise Ops** | L95–L102 | Prometheus `node_exporter` setup, Grafana dashboard basics, centralized logging (rsyslog to remote/ELK basics), backup strategy design, disaster recovery planning, patch management strategy, configuration drift detection, enterprise ops capstone lab |
| **L13 — Advanced Containers & Immutable Infrastructure** | L103–L110 | Podman rootless deep dive, Buildah image building, Skopeo image management, container security scanning, systemd-managed container fleets, immutable infrastructure concepts, image-based deployment patterns, advanced container capstone lab |

### Named Capstone Projects — Track L

| # | Project | Built At | Demonstrates |
|---|---|---|---|
| L-1 | Port App Server Hardening & Deployment Base | End of L7 (~L60) | CIS-hardened RHEL/Rocky server, ready to host PortBill/client-intake apps — SELinux enforcing, firewalld configured, SSH hardened |
| L-2 | High-Availability Database Cluster for Port Billing | End of L9 (~L78) | 2-node Pacemaker/Corosync HA cluster protecting a PostgreSQL/MySQL instance, with fencing and failover tested |
| L-3 | Port Infrastructure Monitoring & Alerting Stack | End of L12 (~L102) | Prometheus + Grafana + centralized logging, actively monitoring real deployed apps with working alert rules |
| L-4 | Immutable Container Fleet for Port Microservices | End of L13 (~L110) | Rootless Podman container fleet, systemd-managed, image-scanned, running a small multi-service port app |

**Portfolio outcome:** RHCSA-track certification + the four named projects above, each published as a documented public GitHub repo with setup instructions and architecture notes.

---

## 9. Track N — Configuration Automation / Ansible, Advanced (110 Lessons: N1–N110)

*Unchanged from v3.3/3.7 — reproduced in full below.*

**Source:** Original 60-lesson RHCE track, extended with 50 additional advanced lessons covering enterprise automation platform operations, custom module development, testing, and event-driven automation.

### RHCE Core (N1–N60)

| Module | Lessons | Core Topics |
|---|---|---|
| **N1 — Ansible Foundations** | N1–N8 | Architecture, `ansible.cfg`, INI inventory, YAML inventory + vars, ad-hoc commands, YAML deep dive, Week 1 lab, first playbook |
| **N2 — Core Modules** | N9–N14 | `dnf`/package, `service`, `user`/`group`, `copy`/`file` modules, `ansible-doc` mastery, running playbooks |
| **N3 — Variables & Facts** | N15–N21 | Variable types & precedence, magic variables, facts (built-in + custom), Jinja2 in tasks, variables lab |
| **N4 — Task Control Logic** | N22–N28 | `when:` conditionals, `register:` output, `failed_when`/`changed_when`, loops, handlers, blocks, task control lab |
| **N5 — Templates & File Management** | N29–N35 | `template` module, Jinja2 templates, `lineinfile`/`blockinfile`, `fetch`/`stat`, `archive`/`unarchive`, applied port-server config lab, files lab |
| **N6 — Roles** | N36–N42 | Role structure, creating/using roles, role variables, Galaxy & requirements, role dependencies, complete port-server role |
| **N7 — Collections & Vault** | N43–N49 | Ansible Collections, installing collections, FQCN best practice, `ansible.posix` modules, Vault basics/in playbooks, Vault + Collections lab |
| **N8 — Advanced Playbooks & Production Automation** | N50–N60 | `include_tasks` vs. `import_tasks`, multi-play playbooks, rolling updates (`serial`), `delegate_to`/`run_once`, tags, troubleshooting, advanced lab, storage automation, users+SSH+cron automation, full port-server automation, mock exam + interview bootcamp |

### Advanced Enterprise Layer (N61–N110)

| Module | Lessons | Core Topics |
|---|---|---|
| **N9 — Dynamic Inventory & Cloud Integration** | N61–N68 | Dynamic inventory plugins, inventory scripts, AWS/Azure/GCP dynamic inventory, cloud module overview, tagging-based grouping, inventory caching, multi-environment inventory design, lab |
| **N10 — Custom Module & Plugin Development** | N69–N76 | Module architecture, writing a custom module in Python, custom filter plugins, custom lookup plugins, testing custom modules, packaging custom content, module development lab, Galaxy contribution |
| **N11 — Testing & Quality Assurance for Ansible** | N77–N83 | Molecule testing framework, testing with Docker driver, idempotency testing, `ansible-lint`, syntax-check automation, CI integration (GitHub Actions), testing capstone lab |
| **N12 — Enterprise Automation Platform (AWX/AAP)** | N84–N91 | Platform architecture, job templates, workflow templates, credentials management at scale, RBAC, scheduling & notifications, survey forms, platform capstone lab |
| **N13 — Advanced Patterns & Event-Driven Automation** | N92–N100 | Async tasks & polling, error handling strategies (block/rescue/always), custom facts modules, Event-Driven Ansible (EDA) basics, rulebook design, network automation module overview, Ansible for Kubernetes, performance optimization (forks/pipelining/fact caching), enterprise pattern lab |
| **N14 — RHCE Capstone & Global Interview Readiness** | N101–N110 | Enterprise playbook design exercise, multi-tier application deployment playbook, zero-downtime rolling deployment scenario, disaster recovery automation scenario, security compliance automation (OpenSCAP via Ansible), full mock exam, weak-topics review, speed drills, capstone project, interview bootcamp |

### Named Capstone Projects — Track N

| # | Project | Built At | Demonstrates |
|---|---|---|---|
| N-1 | One-Command Port Server Provisioning Role | End of N6 (~N42) | A complete, reusable Ansible role that provisions a port-app-ready server from zero in a single playbook run |
| N-2 | Zero-Downtime Deployment Automation for PortBill | End of N8/N14 (~N60–N110) | A rolling-update playbook deploying a new PortBill version across servers with no service interruption |
| N-3 | Custom Ansible Module: Port Billing Config Validator | End of N10 (~N76) | A custom Python-based Ansible module validating tariff/billing config files before deployment |
| N-4 | Enterprise Automation Platform for Multi-Client Server Fleet | End of N12 (~N91) | An AWX/AAP setup managing multiple client servers from job templates with RBAC |
| N-5 | Compliance Automation Pipeline (OpenSCAP + Ansible) | End of N14 (~N110) | An automated security-compliance scan-and-remediate pipeline, reusing Track L's hardening work at scale |

**Portfolio outcome:** RHCE-track certification + the five named projects above, published as public GitHub repos.

---

## 10. Track AU — Workflow Automation Engineering (n8n), Advanced (110 Lessons: AU1–AU110)

*Unchanged from v3.3/3.7 — reproduced in full below.*

**Source:** Full 28-phase n8n roadmap, structured as a professional automation-architecture track.

| Module (Original Phase) | Lessons | Core Topics |
|---|---|---|
| **AU1 — Fundamentals & UI** | AU1–AU4 | Installation methods (Docker/VPS/K8s), UI navigation, dashboard/credentials/projects, workflow lifecycle concepts |
| **AU2 — Workflow Basics** | AU5–AU8 | Trigger nodes, core nodes, JSON/binary data flow, executions & error states |
| **AU3 — Expressions** | AU9–AU12 | Built-in variables, date/string/math functions, boolean logic, optional chaining |
| **AU4 — JavaScript for n8n** | AU13–AU16 | Arrays/objects/loops, async/promises, Code node run-once vs. run-each, JSON manipulation/regex |
| **AU5 — HTTP Operations** | AU17–AU20 | GET/POST/PUT/DELETE, auth/headers/pagination, upload/download, rate limits & retry logic |
| **AU6 — API Integration** | AU21–AU24 | REST/OAuth2/JWT, GraphQL basics, pagination/filtering/sorting patterns, hands-on: Slack/Telegram/GitHub |
| **AU7 — Credentials** | AU25–AU27 | OAuth2 flows, API key/basic/bearer/JWT, encryption & credential sharing |
| **AU8 — Data Processing** | AU28–AU31 | Mapping/merge/split/aggregate, flatten/grouping/sorting, deduplication, batch/chunk/streaming |
| **AU9 — Databases** | AU32–AU35 | MySQL/PostgreSQL/MongoDB/Redis, CRUD via n8n, transactions/indexes/joins, stored procedures |
| **AU10 — Files** | AU36–AU38 | CSV/Excel/JSON/XML/PDF, binary data handling, FTP/SFTP |
| **AU11 — Email Automation** | AU39–AU41 | SMTP/IMAP/POP3, send/receive/attachments, bulk email & parsing |
| **AU12 — Cloud Storage** | AU42–AU44 | Google Drive/Dropbox/OneDrive, AWS S3/Azure Blob, Cloudflare R2/MinIO |
| **AU13 — AI Automation** | AU45–AU48 | OpenAI/Claude/Gemini nodes, embeddings & prompt engineering in n8n, AI Agents & function calling, RAG basics inside n8n |
| **AU14 — Enterprise Integrations** | AU49–AU52 | GitHub/GitLab/Jira, Salesforce/HubSpot/Zendesk, ClickUp/Asana/Monday, ServiceNow/SAP awareness |
| **AU15 — DevOps Automation** | AU53–AU56 | SSH/Docker/K8s via n8n, Terraform/Ansible triggers, GitHub Actions/GitLab CI triggers, Prometheus/Grafana/cloud CLI integration |
| **AU16 — Error Handling** | AU57–AU59 | Retry/Continue On Fail, fallback workflows, dead letter queue & alerting |
| **AU17 — Webhooks** | AU60–AU63 | Incoming/outgoing, security/authentication/signatures, custom responses, streaming webhooks |
| **AU18 — Scheduling** | AU64–AU66 | Cron/timezones/intervals, delayed jobs & queues, rate control |
| **AU19 — Security** | AU67–AU70 | HTTPS/SSL/reverse proxy, Nginx/Traefik, RBAC/secrets/credential encryption, audit logs |
| **AU20 — Scaling** | AU71–AU74 | Docker Swarm/Kubernetes for n8n, worker mode/queue mode, Redis+PostgreSQL backend, load balancer/HA |
| **AU21 — Monitoring** | AU75–AU77 | Logs/metrics, Prometheus/Grafana for n8n, health checks & execution history, alerts/backups |
| **AU22 — Development** | AU78–AU80 | CLI, environment variables & version control, custom node development basics |
| **AU23 — Performance Optimization** | AU81–AU83 | Large workflow handling, memory/concurrency, caching & queue optimization |
| **AU24 — Production Deployment** | AU84–AU86 | Linux server/Docker Compose, Cloudflare Tunnel/Nginx/Traefik/SSL, backups & CI/CD deployment |
| **AU25 — Enterprise Architecture** | AU87–AU90 | Reusable/sub-workflows, microservices integration, event-driven architecture, message queues (Kafka/RabbitMQ/Redis Streams) |
| **AU26 — Advanced AI Agent Systems** | AU91–AU94 | Supervisor agents, planning agents, memory systems, MCP & multi-agent collaboration |
| **AU27 — Business Automation Projects** | AU95–AU102 | AI customer support agent, AI email assistant, invoice processing pipeline, PDF data extraction, CRM automation, social media publisher, DevOps incident response bot, HR onboarding automation |
| **AU28 — Capstone Projects** | AU103–AU110 | Enterprise AI agent platform, multi-tenant SaaS automation platform, complete DevOps automation suite, AI IT help desk, document processing/OCR platform, security operations automation, enterprise data integration platform, final capstone review & portfolio packaging |

### Named Capstone Projects — Track AU

| # | Project | Built At | Demonstrates |
|---|---|---|---|
| AU-1 | C&F Agent Invoice Email-to-Record Automation | End of AU11 (~AU41) | Parses incoming invoice emails, extracts data, logs it automatically — a directly sellable Fiverr/Upwork gig |
| AU-2 | Vessel ETA & Free-Time Deadline Alert System | End of AU18 (~AU66) | Scheduled workflow tracking free-time deadlines and sending alerts before storage charges kick in |
| AU-3 | AI-Powered Shipping Document Data Extraction Pipeline | End of AU26 (~AU94) | Uses AI nodes to extract structured data from PDF manifests/invoices |
| AU-4 | Multi-Client Port Business Process Automation Suite | End of AU27 (~AU102) | A packaged set of reusable workflows deployable for multiple freight-forwarder/C&F clients |
| AU-5 | Enterprise SaaS Automation Platform (Capstone) | End of AU28 (~AU110) | A production-deployed, multi-tenant automation platform — the flagship n8n portfolio piece |

**Portfolio outcome:** The five named projects above, with AU-1 and AU-2 specifically designed to be turned into standalone Upwork/Fiverr gigs immediately upon completion.

---

## 11. Track TOS — Port, Maritime & Terminal Operating Systems, Global Standard (140 Lessons: TOS1–TOS140)

*Unchanged from v3.3/3.7 — reproduced in full below.*

**Rationale:** This track remains your core career differentiator, unaffected by the Track W rebuild.

| Phase | Lessons | Core Topics |
|---|---|---|
| **TOS-1 — Global Port System Foundations** | TOS1–TOS12 | Port definitions & operational logic, port ecosystem & stakeholder map, global shipping chain, port revenue mechanics, failure cases (berth congestion cascade, customs system down), KPI foundations, full simulation & assessment |
| **TOS-2 — Vessel Operations** | TOS13–TOS26 | Full vessel lifecycle, NOR mastery & dispute scenarios, laytime calculation methodology, pilotage & SOLAS boarding requirements, tug operations, berth allocation strategy, failure cases, KPI deep dive, full simulation & assessment |
| **TOS-3 — Container Terminal Infrastructure & Yard Management** | TOS27–TOS40 | Bay-Row-Tier addressing, yard zoning, dwell time control, stack planning & rehandle ratio, STS/RTG/RMG crane systems, gate operations & truck TAT, failure cases, KPI reference table, full simulation & assessment |
| **TOS-4 — Cargo Flow Engineering** | TOS41–TOS52 | Five cargo flow types, hub-and-spoke transshipment model, Bill of Lading types, bottleneck & cascade delay analysis, generic customs/clearance workflow, full simulation & assessment |
| **TOS-5 — Port Billing & Tariff Systems** | TOS53–TOS68 | Complete vessel/cargo/gate charge frameworks, free time & tiered slab billing logic, demurrage vs. detention vs. storage, invoice structure & verification checklist, billing dispute resolution, worked exercises, full simulation & assessment |
| **TOS-6 — Terminal Operating System (TOS) Architecture** | TOS69–TOS82 | TOS concept & major platforms (NAVIS N4, COSMOS, Tideworks, CargoWise), vessel/yard/gate/equipment/billing modules, EDI messaging deep dive, system failure protocols, live BAPLIE file reading exercise, full simulation & assessment |
| **TOS-7 — KPI & Performance Engineering** | TOS83–TOS94 | KPI hierarchy, master KPI reference table & formulas, root-cause analysis framework, performance degradation cascade modeling, shipping-line SLA mechanics, KPI reporting cadence & formats, full KPI analysis exercise |
| **TOS-8 — Marine Operations** | TOS95–TOS106 | Pilotage systems deep dive, tug coordination & undocking, anchorage management, draft & tide-window calculation, VTS coordination, COLREGs applied to port operations, emergency scenarios, full simulation & assessment |
| **TOS-9 — Safety & Global Compliance** | TOS107–TOS116 | ISPS Code, SOLAS full coverage, MARPOL full coverage, IMDG Code deep dive, emergency response plan & incident command structure, port facility security plan components, full emergency-drill simulation |
| **TOS-10 — Advanced Port Management & Comparative Systems** | TOS117–TOS126 | Multi-vessel conflict resolution, yard-saturation crisis recovery, berth optimization under disruption, cost vs. efficiency tradeoff analysis, seasonal-peak capacity planning, contingency planning framework, comparative global port case studies, full simulation |
| **TOS-11 — Real-World Simulation Training** | TOS127–TOS136 | Simulations: early vessel arrival/berth conflict, yard saturation crisis, crane breakdown, customs system failure, missed transshipment connection, plus 5 integrated cross-cutting simulations |
| **TOS-12 — Global Interview & Consulting Readiness** | TOS137–TOS140 | Senior operations interview question bank & model answers, presenting domain expertise + software capability as a unified pitch, building a Port Domain Glossary & Framework document, final portfolio capstone |

### Named Capstone Projects — Track TOS

| # | Project | Built At | Demonstrates |
|---|---|---|---|
| TOS-P1 | Billing Dispute Resolution Case Study Portfolio | End of TOS-5 (~TOS68) | 3–5 written, worked-through billing dispute scenarios with calculations |
| TOS-P2 | TOS Architecture Comparison Whitepaper | End of TOS-6 (~TOS82) | Comparison document (NAVIS N4 vs. COSMOS vs. Tideworks vs. CargoWise) |
| TOS-P3 | Port Domain Glossary & Framework | End of TOS-7 (~TOS94) | A structured client-facing reference document covering terminology, formulas, and KPIs |
| TOS-P4 | Full Vessel-to-Invoice Simulation Case Study | End of TOS-11 (~TOS136) | End-to-end written simulation tracing one vessel call from NOR through billing to final invoice |
| TOS-P5 | Global Port Operations Consulting Portfolio | End of TOS-12 (~TOS140) | The final packaged capstone — combines TOS-P1 through TOS-P4 into one public-facing portfolio page |

**Portfolio outcome:** Five named deliverables, most of which are written documents, not code — publishable well before the full track is finished.

---

## 12. Track PY — Python Engineering, Advanced (150 Lessons: PY1–PY150)

*Unchanged from v3.3/3.7 — reproduced in full below.*

| Phase | Lessons | Core Topics |
|---|---|---|
| **PY1 — Python for Systems** | PY1–PY15 | Environment setup, core syntax & control flow, data structures, functions, string manipulation, file I/O, exception handling, modules & packages, OOP, capstone mini-project |
| **PY2 — Linux Automation** | PY16–PY30 | System interaction via `os`, process automation via `subprocess`, `psutil`, log file processing, service automation, file-system automation, network operations, monitoring dashboard, configuration management, scheduled tasks, security automation, performance optimization, backup & recovery, integration testing, capstone |
| **PY3 — CLI & Packaging** | PY31–PY45 | `argparse`, advanced CLI design, Click framework, testing CLI apps, packaging (`pyproject.toml`), PyPI publishing, structured logging, error handling & debugging, configuration management, pytest, code quality (`ruff`/`mypy`/`bandit`), Sphinx documentation, performance optimization, capstone |
| **PY4 — Infrastructure Automation** | PY46–PY75 | YAML automation, SSH automation (Paramiko), network programming for DevOps, API automation (FastAPI), database automation, Docker automation via Python SDK, advanced CLI distribution, CLI security, production reliability engineering, capstone |
| **PY5 — Cloud & Containers** | PY76–PY105 | AWS automation via boto3, advanced AWS services, Docker CLI + SDK, container orchestration, CI/CD pipeline automation, multi-cloud automation, Infrastructure as Code, cloud security automation, monitoring & observability, disaster recovery automation, serverless automation, capstone |
| **PY6 — Kubernetes Engineering** | PY106–PY125 | Kubernetes Python client, ConfigMaps & Secrets automation, deployment patterns, service & ingress management, resource management & monitoring, namespace & RBAC automation, advanced pod management, storage/network policy automation, CRDs, cluster management, GitOps, Kubernetes security, capstone |
| **PY7 — Production Engineering** | PY126–PY150 | Observability & structured logging, centralized logging (ELK), security practices, performance engineering, production deployment strategies, incident management, backup & disaster recovery, compliance & governance automation, cost management & FinOps, QA automation, documentation automation, multi-environment management, advanced automation patterns, enterprise integration (SSO/LDAP), scalability & HA, capstone |

### Named Capstone Projects — Track PY

| # | Project | Built At | Demonstrates |
|---|---|---|---|
| PY-1 | Port Server Health & Log Monitoring CLI Tool | End of PY2 (~PY30) | A CLI utility checking server health and parsing application logs for anomalies |
| PY-2 | PortBill Backup & Restore Utility | End of PY3 (~PY45) | A packaged, PyPI-installable CLI tool automating backup/restore for PortBill's data |
| PY-3 | Shipping Manifest & Invoice Data Processing Pipeline | End of PY4 (~PY75) | A script pipeline ingesting/cleaning/outputting structured manifest and invoice data |
| PY-4 | Cloud-Deployed Port Automation Platform (AWS) | End of PY5 (~PY105) | A boto3-driven automation platform managing cloud resources for a demo deployment |
| PY-5 | Kubernetes-Based Port Microservices Platform | End of PY6 (~PY125) | A small multi-service port app deployed and managed on Kubernetes |
| PY-6 | Production Observability & Incident-Response Platform | End of PY7 (~PY150) | A full observability stack wrapped around an earlier port-domain project |

**Practical priority note (unchanged):** PY-1 through PY-3 have the highest immediate applicability given your Cloudflare-centric delivery stack; PY-4 through PY-6 broaden capability breadth toward AWS/multi-cloud clients.

---

## 13. Phase 8 — Professional English Communication

*Unchanged from v3.3/3.7.*

| Focus Area | Purpose |
|---|---|
| Professional written communication | Client proposals, cold outreach emails, project scoping documents |
| Technical vocabulary (DevOps/Web/Port domain) | Explaining technical work clearly to non-technical or semi-technical clients |
| Spoken fluency for calls | Client discovery calls, requirement discussions |

**Activation mechanism:** Continue using the existing "Day N" trigger system — activate once actual English-speaking client engagement begins.

---

## 14. Portfolio & Deliverables Roadmap

**Total named, built portfolio projects across all six tracks: 35** (up from 27 — the +8 is entirely from Track W: 10 named deliverables instead of 7) — plus certifications (RHCSA-track, RHCE-track) and the two existing live products (PortBill, client-intake system).

### Master Project Index (All Tracks)

| Track | # | Project | Built At |
|---|---|---|---|
| **W** | W-1 | Port Cargo Website | W27 |
| **W** | W-2 | Port Cargo Tracker (Vanilla TS + DOM) | W71 |
| **W** | W-3 | Maritime Dashboard + AIS | W92 |
| **W** | W-4 | Relational Port Billing Schema (SQL/Prisma mini) | W150 |
| **W** | W-5 | Port Management API (Full-Stack Project 1, AI-first) | W165 |
| **W** | W-6 | Port SaaS v1 (Full-Stack Project 2, Modular + local AI) | W173 |
| **W** | W-7 | Cloudflare-Native PortBill-Style App (Workers/D1/R2 mini) | W179 |
| **W** | W-8 | Final AI-Native Capstone: Port SaaS v2 (multi-tool build) | W217 |
| **W** | W-9 | Advanced-layer capability set (tested app / GraphQL-tRPC API / performance audit / multi-tenant pattern / CI-CD monorepo) | W218–W247 |
| **W** | W-10 | AI-Powered Port Assistant Widget + `port-mcp-server` (production LLM/RAG + MCP) | W260 |
| **L** | L-1 | Port App Server Hardening & Deployment Base | ~L60 |
| **L** | L-2 | High-Availability Database Cluster for Port Billing | ~L78 |
| **L** | L-3 | Port Infrastructure Monitoring & Alerting Stack | ~L102 |
| **L** | L-4 | Immutable Container Fleet for Port Microservices | ~L110 |
| **N** | N-1 | One-Command Port Server Provisioning Role | ~N42 |
| **N** | N-2 | Zero-Downtime Deployment Automation for PortBill | ~N60–N110 |
| **N** | N-3 | Custom Ansible Module: Port Billing Config Validator | ~N76 |
| **N** | N-4 | Enterprise Automation Platform for Multi-Client Server Fleet | ~N91 |
| **N** | N-5 | Compliance Automation Pipeline (OpenSCAP + Ansible) | ~N110 |
| **AU** | AU-1 | C&F Agent Invoice Email-to-Record Automation | ~AU41 |
| **AU** | AU-2 | Vessel ETA & Free-Time Deadline Alert System | ~AU66 |
| **AU** | AU-3 | AI-Powered Shipping Document Data Extraction Pipeline | ~AU94 |
| **AU** | AU-4 | Multi-Client Port Business Process Automation Suite | ~AU102 |
| **AU** | AU-5 | Enterprise SaaS Automation Platform (Capstone) | ~AU110 |
| **TOS** | TOS-P1 | Billing Dispute Resolution Case Study Portfolio | ~TOS68 |
| **TOS** | TOS-P2 | TOS Architecture Comparison Whitepaper | ~TOS82 |
| **TOS** | TOS-P3 | Port Domain Glossary & Framework | ~TOS94 |
| **TOS** | TOS-P4 | Full Vessel-to-Invoice Simulation Case Study | ~TOS136 |
| **TOS** | TOS-P5 | Global Port Operations Consulting Portfolio | ~TOS140 |
| **PY** | PY-1 | Port Server Health & Log Monitoring CLI Tool | ~PY30 |
| **PY** | PY-2 | PortBill Backup & Restore Utility | ~PY45 |
| **PY** | PY-3 | Shipping Manifest & Invoice Data Processing Pipeline | ~PY75 |
| **PY** | PY-4 | Cloud-Deployed Port Automation Platform (AWS) | ~PY105 |
| **PY** | PY-5 | Kubernetes-Based Port Microservices Platform | ~PY125 |
| **PY** | PY-6 | Production Observability & Incident-Response Platform | ~PY150 |

### Fastest Path to a Sellable Portfolio (unchanged philosophy, one addition)

1. **AU-1** (Invoice automation) — standalone gig, low build time
2. **AU-2** (ETA/free-time alerts) — directly extends PortBill's existing monetization plan
3. **W-1 through W-6** — already core to existing web dev capability, now AI-first-workflow-documented; **W-7 (Cloudflare mini)** additionally aligns the portfolio with your real delivery stack
4. **L-1** — makes every other deployed project look more professional
5. **TOS-P3** (Port Domain Glossary) — pure writing, no coding dependency
6. **N-1** — turns manual server setup into a repeatable, demoable asset
7. **(New) W-10** — the AI Assistant Widget + `port-mcp-server` pairing is arguably your *most* differentiating portfolio piece for 2026-era clients asking for "AI features" — and near-zero competition in the port niche

### Ongoing (Outside the Six Tracks)

| Deliverable | Status |
|---|---|
| PortBill | Repositioned as a global-facing live SaaS demo |
| Client-intake system | Second portfolio piece, freelance-business-facing |
| RHCSA-track certification | Output of Track L |
| RHCE-track certification | Output of Track N |
| AI Engineering prompt library | Output of Phase 1 |

---

## 15. GitHub Daily Commit Protocol & Repository Architecture

*Structure, core rules, and commit conventions unchanged from v3.3/3.7. Only Track W's repo timeline (15.7) and one row in 15.1 are updated below; everything else in this section is reproduced verbatim.*

### 15.1 Repository Architecture

| Repo | Purpose | Feeds From |
|---|---|---|
| `linux-systems-lab` | Daily RHCSA/advanced Linux lesson work | Track L (L1–L110) |
| `ansible-automation-lab` | Daily Ansible lesson work | Track N (N1–N110) |
| `n8n-workflows-lab` | Exported workflow JSONs + setup notes | Track AU (AU1–AU110) |
| `python-engineering-lab` | Daily Python lesson scripts, organized by phase folder | Track PY (PY1–PY150) |
| `web-dev-lab` | Daily HTML/CSS/JS/TS/React/Next.js/AI-coding lesson exercises (pre-capstone) | **Track W (W1–W260, excluding capstone lessons) — v4.1 range** |
| `port-domain-notes` | Glossary entries, case studies, simulation write-ups, KPI reference sheets | Track TOS (TOS1–TOS140) |
| `learning-log` | Meta-repo: weekly review notes, progress tracker JSON, cross-track reflection | All tracks, weekly cadence |
| **Capstone repos** (standalone, one each) | W-1 through W-10, L-1 through L-4, N-1 through N-5, AU-1 through AU-5, PY-1 through PY-6 | Section 14 master project index |
| `samiulAsumel/samiulAsumel` | Special GitHub profile README repo | See Section 15.4 |

*(Section 15.2 Commit Message Convention, 15.3 Daily Commit Decision Tree, and 15.3.1 Fallback Commit Menu are unchanged from v3.3/3.7 — see original document; the only edit is the Track W capstone-lesson example list in 15.3, updated below.)*

**15.3 update — Track W capstone-lesson row:** "Completed a Track W capstone lesson (**W27/W71/W92/W150/W165/W173/W179/W217/W260**, etc.) → Full project push → That capstone's own repo."

### 15.4 Progress Tracking File

```json
{
  "active_track": "W",
  "tracks": {
    "W":   { "current": 1, "done": [] },
    "L":   { "current": 1, "done": [] },
    "N":   { "current": 1, "done": [] },
    "AU":  { "current": 1, "done": [] },
    "TOS": { "current": 1, "done": [] },
    "PY":  { "current": 1, "done": [] }
  },
  "started": "2026-07-12",
  "note": "v4.1 — Track W range now W1-W260 (gap-free edition). No fixed calendar. Auto-resume from active_track's current. Never ask the lesson number."
}
```

### 15.6 Pinned Repository Strategy

| Pin Slot | Repo | Why |
|---|---|---|
| 1 | PortBill | Flagship live product, strongest single proof point |
| 2 | Client-intake system | Shows freelance-business-readiness, not just coding |
| 3 | **Final AI-Native Capstone (Port SaaS v2, ~W217) or the AI Port Assistant Widget + `port-mcp-server` (~W260)** | **Updated** — full-stack + AI-native depth in one repo |
| 4 | One Track N project (e.g., N-1 Port Server Provisioning Role) | Infrastructure automation credibility |
| 5 | One Track AU project (e.g., AU-1 or AU-2) | Automation-as-a-service credibility |
| 6 | `port-domain-notes` or TOS-P3 Glossary | The rare differentiator — domain expertise made visible |

### 15.7 Master Repo Creation Timeline — Track W Section (Updated)

| Trigger Point | Action | Repo Name |
|---|---|---|
| **Track W, Day 1 (W1)** | Create lab repo | `web-dev-lab` |
| W27 | New standalone repo | `port-cargo-website` |
| W71 | New standalone repo | `port-cargo-tracker` |
| W92 | New standalone repo | `maritime-dashboard-ais` |
| W150 | New folder/schema project inside `web-dev-lab` (promote to standalone only if it grows) | `port-billing-sql-schema` |
| W165 | New standalone repo | `port-management-api` |
| W173 | New standalone repo | `port-saas-v1` |
| W179 | New standalone repo | `portbill-cloudflare-native` |
| W217 | New standalone repo | `port-saas-v2-ai-native-capstone` |
| ~W218–W247 (advanced layer) | New standalone repo, once capability set is demo-ready | `web-advanced-capability-showcase` |
| W258 | New standalone repo | `port-mcp-server` |
| W260 | New standalone repo | `ai-port-assistant-widget` |

*(All other tracks' repo-creation timeline rows — Track L/N/AU/PY/TOS Day-1 triggers and all L/N/AU/TOS/PY capstone checkpoints — are unchanged from v3.3/3.7; see Section 15.7 of the original document for the complete unified table if needed alongside this one.)*

### 15.8 Daily Teaching Protocol — Applies to Every "Day N" Session, Any Track

*Structure, command behavior, and non-negotiable rules unchanged from v3.3/3.7.* One addition to the **Port Analogy Reference Table**, to cover the new AI-native content in Track W:

| Technical Concept | Port Analogy |
|---|---|
| Server | Port Control Tower |
| Database | Cargo Tracking Register |
| API | Port Agent Request System |
| Process | A vessel's ongoing operation |
| File system | Port cargo manifest |
| Container (Docker/Podman) | Shipping container |
| Playbook (Ansible) | Port operations manual |
| Network | Port vessel traffic lane |
| Firewall | Port security checkpoint |
| Load balancer | Berth allocation system |
| **(New) AI coding agent (Cursor/Claude Code)** | **An experienced pilot guiding a new captain through unfamiliar waters — you're still the captain of record, the pilot just knows the channel** |
| **(New) RAG / vector search** | **The port's reference library with instant, indexed lookup instead of manually flipping through paper manuals** |
| **(New) LLM prompt** | **A written instruction handed to a new port officer — vague instructions get vague results, precise instructions get precise action** |

---

## 16. Readiness Checkpoints (Milestone Framework)

*Unchanged for L/N/AU/TOS/PY. Track W checkpoints updated below to match the new W1–W220 range.*

- **Ready to launch Upwork/Fiverr gigs when:** PortBill demo link is live, portfolio README is country-neutral, and one written case study exists describing a real billing calculation solved.
- **Ready to claim "full-stack developer, advanced" credibility when:** Track W Foundational + AI-Assisted-Coding Layer (**W1–W217**) plus at least 3 of the 6 Advanced/AI-Production Layer modules (**W218–W260**) are complete.
- **(New) Ready to claim "AI-native full-stack engineer" credibility when:** Modules **W180–W213** (AI-Assisted Coding I–III, including the verification drills) are complete and the Final AI-Native Capstone (**W214–W217**) is published, with an honest README describing which AI tools did which part of the work.
- **(New) Ready to pitch "add an AI feature to your existing app" as a standalone service when:** Module **W34** (**W248–W260**) capstones — the AI Port Assistant Widget *and* `port-mcp-server` — are live and demoable, with the eval set published alongside them.
- **(New v4.1) Ready to bid on SQL-backed client briefs when:** Module **W20** (**W143–W150**) is complete and the relational port-billing schema is pushed with a written SQL-vs-NoSQL rationale.
- **(New v4.1) Ready to claim "I ship on Cloudflare" as a differentiator when:** Module **W24** (**W174–W179**) mini-project is live on Workers/D1/R2 — this also retroactively strengthens the PortBill/carview story.
- **Ready to claim "RHCSA-track" credibility when:** At least 50% of Track L Core (L1–L60) is complete with corresponding GitHub commits.
- **Ready to claim "advanced Linux/enterprise ops" credibility when:** At least one Advanced Enterprise Layer capstone lab (L61–L110) is documented and published.
- **Ready to claim "RHCE-track" credibility when:** The reusable Port Server Automation role (N36–N60) is complete and published.
- **Ready to claim "enterprise automation engineer" credibility when:** At least one Advanced Layer capstone (N92–N110) is complete.
- **Ready to pitch n8n automation services when:** At least one complete workflow (any module AU1–AU44) has been built end-to-end and tested against real or realistic data.
- **Ready to pitch enterprise n8n architecture when:** At least one capstone project (AU95–AU110) is live.
- **Ready to publish the Port Domain Glossary when:** Track TOS Phases 1–7 (TOS1–TOS94) are complete.
- **Ready to claim full domain-consulting credibility when:** All of Track TOS (TOS1–TOS140) is complete, including the simulation portfolio.
- **Ready to claim "advanced Python engineer" credibility when:** At least PY1–PY75 are complete and one capstone is published.
- **Ready to reposition PortBill globally when:** Bangladesh-specific language is removed from the landing page and at least one non-Bangladeshi use-case example is added.
- **Ready to activate Phase 8 (English) when:** first serious inbound client inquiry arrives requiring live communication.
- **GitHub streak is "real" (not gamed) when:** every commit from the past 30 days can be explained in one sentence without checking the diff.

---

## 17. Immediate Action Items (No Learning Required)

*Unchanged from v3.3/3.7.*

- [ ] Update LinkedIn headline to: **"Port Revenue & Billing Systems | AI-Native Web App Developer"** — remove all country references
- [ ] Publish Upwork/Fiverr gigs: *"Port & Logistics Billing Web Apps,"* *"AI-Powered Web Features,"* *"n8n Workflow Automation,"* *"Linux/Ansible Infrastructure Setup"* — link PortBill as live proof
- [ ] Remove Bangladesh-specific language from the PortBill landing page; reframe as globally-applicable
- [ ] Verify MPA employee conduct rules regarding freelance/commercial activity before scaling outreach volume (previously flagged, still pending)
- [ ] Create the special profile repo `samiulAsumel/samiulAsumel` and upload the ready-made README
- [ ] Create the seven lab/meta repos listed in Section 15.1
- [ ] Add the `learning-progress.json` file (Section 15.4) to `learning-log` to start tracking from day one
- [ ] Select and pin the first 6 repos per Section 15.6 (updated in v4.0 to feature the AI-native capstone)

---

## 18. Content Governance Notes — What Was Removed, Merged, or Reframed

| Content | Treatment |
|---|---|
| Original Track W (v3.3, W1–W130) | **Fully rebuilt in v4.0.** Replaced with a 220-lesson track built directly from Programming Hero Batch 12 + Batch 14 source material — see Section 0 for the full module-by-module source map |
| Programming Hero Batch 12 ("Let's Code Your Career," 81 modules / 14 milestones) | **Merged into Track W v4.0.** Contributed: advanced Git workflow (branch/PR/merge), raw MongoDB driver sequencing, Firebase Auth as an alternate portable pattern, the Payooo/BPL-Dream reusable-function patterns, the Zap Shift role-based delivery-tracking architecture (reskinned into the Port SaaS v1 capstone), and the wider AI-tool comparison tour (Figma Make, Google AI Studio, Firebase Studio, Base44) folded into Module W21 |
| Programming Hero Batch 14 ("AI-Driven Full Stack Web Engineering," 67 modules / 11 core milestones) | **Merged into Track W v4.0 as the primary backbone.** Contributed: TypeScript-first sequencing with a dedicated OOP-in-TS module, the dedicated DOM/BOM React-bridge module, BetterAuth as the primary auth stack, Hero UI/ShadCN, the raw-driver-then-Mongoose backend sequencing, the AI-first PRD-driven project workflow (Full-Stack Projects 1 & 2), dual payment rails (Stripe + SSLCommerz), Ollama-based local AI integration, and — the single largest contribution — the full three-module AI-Assisted-Coding sequence (Cursor, Claude Code, code quality/security/deployment) |
| Saudi Arabia career path, Mawani/FASAH/ZATCA/Vision 2030 sections, Saudi-context interview banks | **Removed** (unchanged from v3.3 — user has dropped this path entirely) |
| Duplicate "Global Seaport Operations" training system | **Merged into Track TOS** (unchanged from v3.3) |
| n8n Roadmap Phases not previously included | **Restored** (unchanged from v3.3) |
| RHCSA/RHCE-only 60-lesson scopes | **Expanded to 110 each** (unchanged from v3.3) |
| Python Phases 5–7 | **Restored in full** (unchanged from v3.3) |
| AI Engineering Levels 4+ (RAG, vector DBs, LangChain, LlamaIndex) at the general-purpose level | **Still deferred** in Phase 1 — but now has a **narrow, applied instance inside Track W's new Module W30** (production RAG for a web app), which is a distinct scope from the deferred general-purpose material |

**"Principal Staff Engineer" standards document** — retained as a reference checklist, not a course, unchanged from v3.3.

---

## 19. Appendix — Source Material Index & Total Lesson Count Summary

| Original Document | Where It Lives Now |
|---|---|
| AI Engineering Master Syllabus | Phase 1 (Levels 1–3); Level 4+ deferred (except the applied slice in W30) |
| **Programming Hero Batch 12 — "Let's Code Your Career" (81 modules / 14 milestones)** | **Track W v4.0, Section 7 — primary source for Modules W1, W9, W14, W17 (Firebase Auth alternate), W20 (Zap Shift architecture pattern), W21 (AI-tool comparison tour)** |
| **Programming Hero Batch 14 — "AI-Driven Full Stack Web Engineering" (67 modules / 11 milestones)** | **Track W, Section 7 — primary backbone for the foundational and AI-coding layers** |
| Original 100-lesson Web Development track (v3.3) | Superseded by Track W's Foundational + AI-Coding Layer (W1–W217) |
| v3.3 advanced professional web engineering content (old W101–W130) | Track W, Part C (W218–W247), renumbered only, content unchanged |
| **2026 hiring-market analysis (AI-output verification, context engineering, agent failure modes, eval design, OWASP LLM Top 10, MCP)** | **Track W v4.1 additions — W15, W20, W21, W24 (gap-close modules) and the hardened units inside W25–W27 and W34** |
| **v4.2 Deployment Doctrine (Cloudflare-first, VPS-sovereign, Vercel removed)** | **Section 0.2 + rewritten deployment specs in W22, W23, W24, W27, W32, W34; Batch 14's Vercel-based deployment lessons explicitly superseded** |
| Original 60-lesson RHCSA track | Track L, Core (L1–L60) — unchanged |
| New enterprise Linux content | Track L, Advanced Layer (L61–L110) — unchanged |
| Original 60-lesson RHCE/Ansible track | Track N, Core (N1–N60) — unchanged |
| New enterprise Ansible/automation-platform content | Track N, Advanced Layer (N61–N110) — unchanged |
| n8n Roadmap (all 28 original phases) | Track AU (AU1–AU110) — unchanged |
| Port Operations Manager — Complete Theoretical Mastery Guide | Track TOS — unchanged |
| Global Seaport Operations (x2 near-duplicate documents) | Track TOS — unchanged |
| Python Mastery Roadmap — DevOps Edition (all 7 phases) | Track PY (PY1–PY150) — unchanged |
| 365-Day Technical English Roadmap | Phase 8 — unchanged |
| "Principal Staff Engineer" system prompt | Section 18 — reference checklist only, unchanged |

### Grand Total Curriculum Scale (v4.0)

| Track | Lessons | Change from v3.3 |
|---|---|---|
| W — Web Development, Advanced Professional & AI-Native | **260** | **+130 (+90 v4.0 rebuild, +40 v4.1 gap-close)** |
| L — Linux Systems Administration, Advanced | 110 | unchanged |
| N — Configuration Automation, Advanced | 110 | unchanged |
| AU — Workflow Automation Engineering, Advanced | 110 | unchanged |
| TOS — Port, Maritime & Terminal Operating Systems | 140 | unchanged |
| PY — Python Engineering, Advanced | 150 | unchanged |
| **Total** | **880** | **+130** |

---

*End of document. Version 4.2 (Gap-Free, Platform-Sovereign Edition) — everything in v4.1 (Track W rebuilt from PH Batch 12 + Batch 14, gap-audited to 260 lessons with six gap-close modules, sequencing fixed, AI layer hardened with 2026's scarce skills) plus the v4.2 deployment-doctrine rewrite: Vercel removed entirely; Cloudflare (Pages/Workers/D1/R2/KV/Queues/Workers AI/AI Gateway) as the primary platform; self-hosted VPS (Docker + Caddy + systemd, the Track W ↔ Track L bridge) as the sovereign fallback; Hono and web-standard APIs as the portability layer; OpenNext for Next.js-on-Cloudflare; and an escape-hatch drill proving every architecture can leave its platform. Managed PaaS (Railway/Render/Netlify) survives at awareness-level only, for inherited client projects. Track W: 260 lessons (W1–W260). Tracks L, N, AU, TOS, PY unchanged from v3.3/3.7. Grand total: 880 lessons. Sections 0.1 and 0.2 document every gap, every fix, every platform decision, and every deliberate exclusion — nothing skipped silently, nothing locked in. No calendar attached — say "Day 1" to begin, or "Day 1 W" to explicitly start Track W under the new numbering.*
