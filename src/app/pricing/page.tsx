'use client';

import React, { useState } from 'react';
import {
  Check,
  Sparkles,
  Users,
  Minus,
  Plus,
  User,
  Building2,
  GraduationCap,
  ArrowUpRight,
  Zap,
  PackagePlus,
  ShieldCheck,
  Scale,
  HelpCircle,
} from 'lucide-react';
import {
  PORTAL_URL,
  PRICING_PLANS,
  DRAFT_PACKS,
} from '@/data/siteData';
import { InteractiveRoiCalculator } from '@/components/InteractiveRoiCalculator';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');
  const [selectedSeats, setSelectedSeats] = useState<number>(3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          100% 2 CFR 200.430 &amp; 200.454 Compliant Per-Seat Pricing
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Transparent Per-Seat Subscriptions.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Zero Contingency Fees.
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Retain 100% of your grant awards for your mission. Pooled AI proposal generations across all team seats, backed by Billama 24GB+ decentralized GPU nodes and Supabase RLS isolation.
        </p>

        {/* Annual / Monthly Toggle */}
        <div className="flex items-center justify-center pt-2">
          <div className="bg-slate-900 border border-slate-750 p-1 rounded-xl flex items-center shadow-lg">
            <button
              type="button"
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold bg-emerald-400 text-slate-950 rounded-full">
                SAVE 20%
              </span>
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                billingCycle === 'monthly'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
          </div>
        </div>

        {/* Team Seat Stepper */}
        <div className="pt-2 max-w-2xl mx-auto">
          <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-left">
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Team Seats &amp; Pooled Quota
                  </div>
                  <div className="text-sm font-extrabold text-white">
                    Configure Your Team Size
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 p-1.5 rounded-xl self-center sm:self-auto">
                <button
                  type="button"
                  onClick={() => setSelectedSeats(Math.max(1, selectedSeats - 1))}
                  disabled={selectedSeats <= 1}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white flex items-center justify-center transition"
                  aria-label="Decrease seats"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="px-3 min-w-[5rem] text-center">
                  <span className="text-lg font-black text-white font-mono">{selectedSeats}</span>
                  <span className="text-[11px] text-slate-400 font-semibold ml-1">
                    {selectedSeats === 1 ? 'Seat' : 'Seats'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedSeats(Math.min(100, selectedSeats + 1))}
                  disabled={selectedSeats >= 100}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white flex items-center justify-center transition"
                  aria-label="Increase seats"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs pt-2 border-t border-slate-800">
              {[
                { count: 1, label: '1 Solo Writer', desc: 'Starter default' },
                { count: 3, label: '3 Core Team', desc: 'Growth default' },
                { count: 5, label: '5 Dept Team', desc: 'Multi-reviewer' },
                { count: 10, label: '10 Consortium', desc: 'Enterprise OSP' },
              ].map((preset) => (
                <button
                  key={preset.count}
                  type="button"
                  onClick={() => setSelectedSeats(preset.count)}
                  className={`py-2 px-2.5 rounded-xl border text-center transition flex flex-col items-center justify-center ${
                    selectedSeats === preset.count
                      ? 'bg-emerald-950/70 border-emerald-500 text-emerald-300 font-bold'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <span className="font-bold text-[11px]">{preset.label}</span>
                  <span className="text-[10px] text-slate-400">{preset.desc}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRICING_PLANS.map((plan) => {
          const effectiveSeats = Math.max(plan.minSeats, selectedSeats);
          const seatPrice =
            billingCycle === 'annual' ? plan.pricePerSeatAnnual : plan.pricePerSeatMonthly;
          const totalMonthly = seatPrice * effectiveSeats;
          const totalAnnual = totalMonthly * 12;
          const pooledDrafts =
            plan.monthlyDraftsLimitPerSeat < 0
              ? 'Unlimited'
              : plan.monthlyDraftsLimitPerSeat * effectiveSeats;

          return (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all ${
                plan.popular
                  ? 'bg-gradient-to-b from-slate-850 to-slate-900 border-2 border-emerald-500 shadow-2xl shadow-emerald-950/30 md:scale-105 z-10'
                  : 'bg-slate-900/90 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 text-[11px] font-extrabold uppercase tracking-wider rounded-full shadow-md whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-800 border border-slate-750 text-emerald-400">
                    {plan.id === 'starter' && <User className="w-6 h-6" />}
                    {plan.id === 'growth' && <Building2 className="w-6 h-6" />}
                    {plan.id === 'enterprise' && <GraduationCap className="w-6 h-6" />}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-slate-950 text-slate-300 border border-slate-800">
                    Min {plan.minSeats} {plan.minSeats === 1 ? 'Seat' : 'Seats'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-xs text-slate-400 mb-6 min-h-[32px]">{plan.targetAudience}</p>

                <div className="mb-6 pb-6 border-b border-slate-800 space-y-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">${seatPrice}</span>
                    <span className="text-xs text-slate-400 font-semibold">/ seat / mo</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
                    <span>
                      Total ({effectiveSeats} {effectiveSeats === 1 ? 'seat' : 'seats'}):
                    </span>
                    <span className="font-mono font-bold text-sm">
                      ${totalMonthly.toLocaleString()}/mo
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    {billingCycle === 'annual'
                      ? `Billed annually ($${totalAnnual.toLocaleString()}/yr total)`
                      : 'Billed monthly per active seat'}
                  </p>
                </div>

                <div className="mb-6 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium">Pooled Monthly Quota:</span>
                    <span className="font-bold text-emerald-400">
                      {pooledDrafts === 'Unlimited'
                        ? 'Unlimited Generations'
                        : `${pooledDrafts} Drafts / Mo`}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 flex justify-between">
                    <span>Per seat allowance:</span>
                    <span>
                      {plan.monthlyDraftsLimitPerSeat < 0
                        ? 'Unlimited'
                        : `${plan.monthlyDraftsLimitPerSeat} drafts/seat/mo`}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Included Platform Capabilities:
                  </div>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={`${PORTAL_URL}${plan.portalPath}`}
                className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/50'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                }`}
              >
                <span>
                  Activate {plan.name} ({effectiveSeats} {effectiveSeats === 1 ? 'Seat' : 'Seats'}) in Portal
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          );
        })}
      </div>

      {/* On-Demand Draft Boost Packs */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
              <PackagePlus className="w-4 h-4" />
              On-Demand Draft Top-Up Packs
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Surge Proposal Capacity When Federal Windows Open
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Top-up packs never expire and pool across your entire organization via Billama Pay.
            </p>
          </div>
          <a
            href={`${PORTAL_URL}/pricing`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-xs font-bold text-emerald-400 shrink-0"
          >
            <span>Open Billama Billing Portal</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DRAFT_PACKS.map((pack) => (
            <div
              key={pack.id}
              className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4 relative"
            >
              {pack.savingsBadge && (
                <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-extrabold uppercase">
                  {pack.savingsBadge}
                </div>
              )}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-base">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span>{pack.name}</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white font-mono">${pack.price}</span>
                  <span className="text-xs text-slate-400">one-time</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{pack.description}</p>
                <div className="text-xs text-emerald-400 font-semibold">
                  +{pack.draftsCount} Full 8-Section AI Proposals
                </div>
              </div>
              <a
                href={`${PORTAL_URL}/pricing`}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition"
              >
                <span>Purchase +{pack.draftsCount} Drafts in Portal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive ROI & MTDC Calculator */}
      <InteractiveRoiCalculator />

      {/* 2 CFR 200 Compliance & Ethics FAQ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <Scale className="w-4 h-4 text-emerald-400" />
            <span>Why are 5%–10% commission fees prohibited on federal grants?</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Under OMB Uniform Guidance (2 CFR 200.430) and the Association of Fundraising Professionals (AFP) Code of Ethical Standards, percentage-based compensation contingent on grant awards is strictly impermissible. Ironclad Grants charges a flat software subscription permissible under 2 CFR 200.454.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Are our uploaded Form 990s and financials used to train AI models?</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Never. Every organization workspace is isolated via PostgreSQL Row-Level Security (RLS) and encrypted SeaweedFS buckets. Narrative synthesis runs on ephemeral 24GB+ Billama GPU nodes under a strict contractual Zero-Training Guarantee.
          </p>
        </div>
      </div>
    </div>
  );
}
