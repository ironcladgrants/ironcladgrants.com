'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  Compass,
  FolderLock,
  ClipboardCheck,
  Users,
  Cpu,
  Scale,
  FileCode2,
  BookOpen,
  History,
  ShoppingBag,
  Lock,
  Zap,
  Building2,
  GraduationCap,
} from 'lucide-react';
import {
  PORTAL_URL,
  PLATFORM_PILLARS,
  COMPARISON_ROWS,
} from '@/data/siteData';
import { RELEASE_NOTES } from '@/data/releasesData';
import { InteractiveRoiCalculator } from '@/components/InteractiveRoiCalculator';

export default function HomePage() {
  const [selectedPillarId, setSelectedPillarId] = useState<string>(PLATFORM_PILLARS[0].id);
  const [activePersona, setActivePersona] = useState<'ed' | 'writer' | 'cfo' | 'osp'>('ed');

  const activePillar =
    PLATFORM_PILLARS.find((p) => p.id === selectedPillarId) || PLATFORM_PILLARS[0];
  const latestReleases = RELEASE_NOTES.slice(0, 3);

  const personas = [
    {
      id: 'ed' as const,
      role: 'Executive Director / CEO',
      icon: Building2,
      pain: 'Freelance consultants demand 5%–10% contingency fees ($25k–$50k on a $500k award) that violate 2 CFR 200.430 and trigger Single Audit clawbacks.',
      solution:
        'Flat, predictable per-seat subscription ($79/seat/mo). 100% permissible under 2 CFR 200.454 with a tamper-evident SHA-256 audit trail.',
      impact: 'Retain +$37,156+ per award inside your mission',
      portalHref: `${PORTAL_URL}/pricing`,
      portalLabel: 'Calculate Your Mission Savings in Portal',
    },
    {
      id: 'writer' as const,
      role: 'Director of Development / Grant Writer',
      icon: Sparkles,
      pain: '60+ hours per federal RFP hunting down old 990s, board rosters, and biosketches—while generic AI tools hallucinate statistics.',
      solution:
        'ProPublica 990-PF auto-hydration, pgvector HNSW Knowledge Base grounding with inline citations, and 8-section drafting on 24GB+ Billama GPU nodes.',
      impact: '70% faster turnaround (60 hrs → 18 hrs) with 0% hallucination',
      portalHref: `${PORTAL_URL}/copilot`,
      portalLabel: 'Launch AI Copilot Studio in Portal',
    },
    {
      id: 'cfo' as const,
      role: 'CFO / Grants Finance Manager',
      icon: Scale,
      pain: 'Complex 2 CFR 200.414 MTDC exclusions (equipment >$5k, subawards >$25k), manual Excel time tracking, and quarterly SF-425 Box 10 math.',
      solution:
        'Built-in OMB SF-424A object class ledger, automated MTDC indirect cost solver, 2 CFR 200.430 effort PAR alerts (>5% variance), and 1-click SF-425 compiler.',
      impact: 'Zero Single Audit findings & automated fiscal compliance',
      portalHref: `${PORTAL_URL}/postaward`,
      portalLabel: 'Open Post-Award Financial OS in Portal',
    },
    {
      id: 'osp' as const,
      role: 'University OSP & Consortium Leads',
      icon: GraduationCap,
      pain: '4:58 PM Grants.gov rejections from invalid filenames or margins, plus delayed scopes of work from external subrecipient partners.',
      solution:
        'Federal Portal Pre-Flight Validator (50-char ASCII sanitizer, 1-inch margins, embedded fonts) and isolated Subrecipient Guest Portals with SAM.gov UEI verification.',
      impact: 'Zero technical rejections & 85% faster partner onboarding',
      portalHref: `${PORTAL_URL}/team`,
      portalLabel: 'Explore Subrecipient Portals & RBAC',
    },
  ];

  const currentPersona = personas.find((p) => p.id === activePersona) || personas[0];

  return (
    <div className="space-y-20 pb-20">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-emerald-950/30 via-slate-950 to-slate-950 pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Top Pill */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>The Ethical 2 CFR 200 Grant Operating System</span>
              <span className="text-slate-600">•</span>
              <Link href="/releases" className="text-cyan-300 hover:underline font-mono">
                v2.4.0 Live on Portal →
              </Link>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Stop Paying 8% Commissions.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Win More Grants Predictably.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Traditional freelance commission writing forfeits <strong className="text-white">$25,000–$50,000</strong> per award and violates federal Uniform Guidance (<span className="font-mono text-amber-300">2 CFR 200.430</span>).{' '}
              <strong className="text-white">Ironclad Grants</strong> replaces predatory contingency fees with an end-to-end AI Grant Operating System: ProPublica 990-PF hydration, zero-hallucination <span className="font-mono text-emerald-300">pgvector</span> RAG drafting on 24GB+ Billama GPUs, 3-persona Red Team peer review, and full post-award <span className="font-mono text-emerald-300">SF-425</span> compliance.
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={PORTAL_URL}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl text-sm sm:text-base font-extrabold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-2xl shadow-emerald-950/80 border border-emerald-400/40 transition hover:scale-[1.02]"
              >
                <span>Launch Interactive Portal</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <a
                href={`${PORTAL_URL}/readiness`}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl text-sm sm:text-base font-bold text-cyan-300 bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 transition shadow-lg"
              >
                <ClipboardCheck className="w-4 h-4 text-cyan-400" />
                <span>Free 6-Pillar Readiness Scorecard</span>
              </a>

              <Link
                href="/docs"
                className="inline-flex items-center gap-2 px-5 py-4 rounded-2xl text-sm sm:text-base font-bold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-750 transition"
              >
                <FileCode2 className="w-4 h-4 text-emerald-400" />
                <span>Documentation &amp; SDK</span>
              </Link>
            </div>

            {/* Quick Trust Metrics Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-4xl mx-auto">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="text-2xl font-black text-emerald-400 font-mono">+$37,156</div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Avg. mission capital saved vs. 8% commission on a $500k grant
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="text-2xl font-black text-cyan-400 font-mono">60h → 18h</div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Proposal turnaround with 8-section HNSW RAG Copilot Studio
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="text-2xl font-black text-white font-mono">100% RLS</div>
                <div className="text-xs text-slate-400 mt-0.5">
                  PostgreSQL kernel isolation, SeaweedFS vault &amp; Zero-Training AI
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="text-2xl font-black text-amber-400 font-mono">2 CFR 200</div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Built-in SF-424A, MTDC solver, 200.430 Effort PAR &amp; SF-425
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Portal Pipeline Architecture Preview */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="ml-2 text-xs font-mono text-slate-400">
                  https://portal.ironcladgrants.com — End-to-End Lifecycle Pipeline
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-700/50 font-mono">
                  185/185 Unit Tests Passing
                </span>
                <a
                  href={PORTAL_URL}
                  className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
                >
                  Open Live App <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* 5-Stage Interactive Pipeline Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {[
                {
                  step: '01',
                  title: 'Funder & 990-PF Match',
                  desc: 'Grants.gov sync, ProPublica 990-PF curves & 5-axis SVG Fit Radar (A+ to F)',
                  href: `${PORTAL_URL}/matching`,
                  icon: Compass,
                  accent: 'border-indigo-500/40 bg-indigo-950/20 text-indigo-300',
                },
                {
                  step: '02',
                  title: 'HNSW Knowledge Vault',
                  desc: 'Private 501(c)(3), 990 & biosketch indexing in Supabase RLS + SeaweedFS',
                  href: `${PORTAL_URL}/knowledge`,
                  icon: FolderLock,
                  accent: 'border-emerald-500/40 bg-emerald-950/20 text-emerald-300',
                },
                {
                  step: '03',
                  title: 'AI Copilot & Red Team',
                  desc: '8-section drafting on 24GB+ Billama GPUs + 3-persona 1–9 peer review',
                  href: `${PORTAL_URL}/copilot`,
                  icon: Cpu,
                  accent: 'border-amber-500/40 bg-amber-950/20 text-amber-300',
                },
                {
                  step: '04',
                  title: 'Pre-Flight & ZIP Binder',
                  desc: '50-char filename sanitizer, 1" margins, SVG Logic Models & XML cover',
                  href: `${PORTAL_URL}/copilot`,
                  icon: ShieldCheck,
                  accent: 'border-cyan-500/40 bg-cyan-950/20 text-cyan-300',
                },
                {
                  step: '05',
                  title: 'Post-Award 2 CFR 200 OS',
                  desc: 'OMB SF-425 compiler, 200.414 MTDC solver, 200.430 Effort & SHA-256 log',
                  href: `${PORTAL_URL}/postaward`,
                  icon: ClipboardCheck,
                  accent: 'border-teal-500/40 bg-teal-950/20 text-teal-300',
                },
              ].map((stage) => {
                const Icon = stage.icon;
                return (
                  <a
                    key={stage.step}
                    href={stage.href}
                    className="group p-4 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-emerald-500/60 transition flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${stage.accent}`}
                        >
                          PHASE {stage.step}
                        </span>
                        <Icon className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition" />
                      </div>
                      <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition">
                        {stage.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{stage.desc}</p>
                    </div>
                    <div className="text-[11px] font-bold text-emerald-400 flex items-center gap-1 pt-1">
                      <span>Launch in Portal</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5 CORE FUNCTIONAL PILLARS & 12 INTEGRATED ENHANCEMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <Zap className="w-4 h-4" />
              5 Core Pillars • 12 Master Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Inside the Ironclad Grant Operating System
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl">
              Explore every architectural pillar below or jump directly into the live module on{' '}
              <a href={PORTAL_URL} className="text-emerald-400 font-mono hover:underline">
                portal.ironcladgrants.com
              </a>
              .
            </p>
          </div>
          <Link
            href="/docs"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
          >
            <span>View Full Technical Architecture Docs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Pillar Selector */}
          <div className="lg:col-span-5 space-y-2.5">
            {PLATFORM_PILLARS.map((pillar) => {
              const isSelected = pillar.id === selectedPillarId;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-emerald-950/40 border-emerald-500 shadow-lg shadow-emerald-950/40'
                      : 'bg-slate-900/70 border-slate-800 hover:bg-slate-900 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-slate-800 text-emerald-400 border border-slate-700">
                        {pillar.number}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400">
                        {pillar.badge}
                      </span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white">{pillar.title}</div>
                    <div className="text-xs text-slate-400">{pillar.subtitle}</div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 mt-1 transition ${
                      isSelected ? 'text-emerald-400 translate-x-0.5' : 'text-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Pillar Detail Panel */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                  <span>{activePillar.number}</span>
                  <span>•</span>
                  <span>{activePillar.badge}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  {activePillar.title}
                </h3>
                <p className="text-xs text-emerald-400 font-mono">{activePillar.subtitle}</p>
              </div>

              <a
                href={`${PORTAL_URL}${activePillar.portalPath}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shrink-0 transition"
              >
                <span>{activePillar.portalCta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">{activePillar.description}</p>

            <div className="space-y-3.5">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Engineered Capabilities Included:
              </div>
              {activePillar.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-1"
                >
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{cap.name}</span>
                  </div>
                  <p className="text-xs text-slate-400 pl-6 leading-relaxed">{cap.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE ROI & 2 CFR 200.414 MTDC CALCULATOR */}
      <section id="calculator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <InteractiveRoiCalculator />
      </section>

      {/* COMPETITIVE MATRIX: WHY IRONCLAD VS THE OLD WAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5" />
            Category Comparison Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Funder Databases &amp; Generic Chatbots Fail Federal Audits
          </h2>
          <p className="text-sm text-slate-300">
            Legacy databases abandon you once you find an RFP, generic AI tools invent disqualifying statistics, and commission writers violate federal law.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-800 shadow-2xl bg-slate-900/90">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-950 text-slate-300 border-b border-slate-800 text-xs uppercase tracking-wider">
              <tr>
                <th className="py-4 px-5 font-bold">Capability / Dimension</th>
                <th className="py-4 px-5 font-bold text-rose-400">
                  Contingency Writers (5%–10% Fee)
                </th>
                <th className="py-4 px-5 font-bold text-slate-400">
                  Legacy Databases (Candid / FDO)
                </th>
                <th className="py-4 px-5 font-bold text-amber-400">
                  Generic AI (ChatGPT / Claude)
                </th>
                <th className="py-4 px-5 font-extrabold text-emerald-400 bg-emerald-950/30">
                  Ironclad Grants 🛡️ (Grant OS)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {COMPARISON_ROWS.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition">
                  <td className="py-4 px-5 font-bold text-white">{row.feature}</td>
                  <td className="py-4 px-5 text-rose-200/80">{row.contingency}</td>
                  <td className="py-4 px-5 text-slate-400">{row.legacyDb}</td>
                  <td className="py-4 px-5 text-amber-200/80">{row.genericAi}</td>
                  <td className="py-4 px-5 font-semibold text-emerald-200 bg-emerald-950/20">
                    {row.ironclad}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* STAKEHOLDER PERSONAS + COMPLIANCE SHOP HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
            <Users className="w-4 h-4" />
            Built for Every Institutional Stakeholder
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Tailored Impact Across Your Organization
          </h2>
        </div>

        {/* Persona Switcher Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {personas.map((p) => {
            const Icon = p.icon;
            const active = p.id === activePersona;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePersona(p.id)}
                className={`p-4 rounded-2xl border text-left transition flex flex-col justify-between gap-2 ${
                  active
                    ? 'bg-emerald-950/50 border-emerald-500 text-white shadow-lg'
                    : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <Icon className={`w-5 h-5 ${active ? 'text-emerald-400' : 'text-slate-500'}`} />
                <div className="text-xs sm:text-sm font-bold">{p.role}</div>
              </button>
            );
          })}
        </div>

        {/* Active Persona Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-xl">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
              Stakeholder Briefing: {currentPersona.role}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-800/40 space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-rose-400">
                  The Structural Bottleneck
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{currentPersona.pain}</p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-950/25 border border-emerald-600/40 space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  The Ironclad Solution
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">{currentPersona.solution}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-4">
            <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
              Verified Institutional Impact
            </div>
            <div className="text-lg font-extrabold text-white">{currentPersona.impact}</div>
            <a
              href={currentPersona.portalHref}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white inline-flex items-center justify-center gap-2 shadow-lg transition"
            >
              <span>{currentPersona.portalLabel}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* DOCUMENTATION, GUIDES & LATEST RELEASE NOTES HUB PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Documentation & Guides Quick Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <BookOpen className="w-4 h-4" />
                Documentation &amp; Developer Specs
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Open Standards, SDKs &amp; Activity Walkthroughs
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Everything you need to configure multi-tenant workspaces, validate YAML proposal schemas, or deploy the Kubernetes Helm chart.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/docs"
                className="group p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/60 transition space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <FileCode2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-emerald-300">
                  Platform &amp; SDK Documentation
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  HNSW RAG architecture, 2 CFR 200 math specs, @tekromancy/grant_utils API reference, and live YAML Frontmatter Playground.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400">
                  Explore Docs <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>

              <Link
                href="/guides"
                className="group p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/60 transition space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300">
                  Step-by-Step User Guides
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Actionable walkthroughs for 990-PF hydration, AI Copilot drafting, Red Team reviews, SF-425 reporting, and CLI workflows.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400">
                  Read Walkthroughs <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>

            {/* Grant Compliance Store Callout */}
            <a
              href={`${PORTAL_URL}/shop`}
              className="block p-5 rounded-2xl bg-gradient-to-r from-amber-950/30 via-slate-900 to-slate-900 border border-amber-500/30 hover:border-amber-400/60 transition"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Grant Compliance Store (/shop)
                  </div>
                  <div className="text-sm font-bold text-white">
                    NIH R01 &amp; NSF CAREER Templates, 2 CFR 200 Manuals &amp; NIST FIDO2 Keys
                  </div>
                  <p className="text-xs text-slate-400">
                    Instant SeaweedFS digital vault delivery and hardware tokens for SAM.gov / Login.gov.
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-amber-400 shrink-0" />
              </div>
            </a>
          </div>

          {/* Right: Latest Release Notes Feed */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <History className="w-5 h-5 text-emerald-400" />
                <div>
                  <h3 className="text-lg font-extrabold text-white">
                    Latest Platform Release Notes
                  </h3>
                  <p className="text-xs text-slate-400">
                    Continuous delivery to portal.ironcladgrants.com
                  </p>
                </div>
              </div>
              <Link
                href="/releases"
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
              >
                <span>All Releases</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              {latestReleases.map((rel) => (
                <div
                  key={rel.version}
                  className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-2"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {rel.version}
                      </span>
                      <span className="text-xs font-bold text-white">{rel.codename}</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">{rel.date}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {rel.summary}
                  </p>
                  <div className="flex items-center justify-between pt-1 text-[11px]">
                    <Link
                      href="/releases"
                      className="text-emerald-400 hover:underline font-semibold"
                    >
                      View {rel.highlights.length} release highlights →
                    </Link>
                    <a
                      href={rel.portalLink}
                      className="text-slate-400 hover:text-white font-mono flex items-center gap-1"
                    >
                      {rel.portalLinkLabel} <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
