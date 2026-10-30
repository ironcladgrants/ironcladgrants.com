'use client';

import React, { useState } from 'react';
import {
  Scale,
  Calculator,
  AlertTriangle,
  ArrowRight,
  Users,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { PORTAL_URL } from '@/data/siteData';

export const InteractiveRoiCalculator: React.FC = () => {
  const [activeTool, setActiveTool] = useState<'roi' | 'mtdc'>('roi');

  // Tool 1: Commission vs SaaS ROI state
  const [grantAmount, setGrantAmount] = useState<number>(500000);
  const [commissionPct, setCommissionPct] = useState<number>(8);
  const [teamSeats, setTeamSeats] = useState<number>(3);
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');

  const seatPrice = billingCycle === 'annual' ? 79 : 99;
  const annualSaasCost = seatPrice * teamSeats * 12;
  const commissionCost = Math.round(grantAmount * (commissionPct / 100));
  const netCapitalSaved = Math.max(0, commissionCost - annualSaasCost);
  const pooledAnnualDrafts = teamSeats * 15 * 12;

  // Tool 2: 2 CFR 200.414 MTDC Indirect Cost Solver state
  const [directPersonnel, setDirectPersonnel] = useState<number>(220000);
  const [directSuppliesTravel, setDirectSuppliesTravel] = useState<number>(35000);
  const [capitalEquipment, setCapitalEquipment] = useState<number>(40000);
  const [subawardTotal, setSubawardTotal] = useState<number>(65000);
  const [indirectRatePct, setIndirectRatePct] = useState<number>(15);

  const totalDirectCosts =
    directPersonnel + directSuppliesTravel + capitalEquipment + subawardTotal;
  const excludedEquipment = capitalEquipment; // 100% of equipment >$5k excluded per 2 CFR 200.1
  const includableSubaward = Math.min(25000, subawardTotal); // First $25k of subaward included
  const excludedSubaward = Math.max(0, subawardTotal - 25000);
  const mtdcBase = directPersonnel + directSuppliesTravel + includableSubaward;
  const indirectCostRecovery = Math.round(mtdcBase * (indirectRatePct / 100));
  const totalFederalRequest = totalDirectCosts + indirectCostRecovery;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 border border-slate-750 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
      {/* Header & Tool Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-800 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Financial &amp; Compliance Calculators
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Verify Your Mission Savings &amp; 2 CFR 200 Math
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
            Test our statutory engines right here, then launch the full workspace on{' '}
            <a href={PORTAL_URL} className="text-emerald-400 font-mono underline underline-offset-4">
              portal.ironcladgrants.com
            </a>{' '}
            to generate your SF-424A budget and narrative justification.
          </p>
        </div>

        <div className="bg-slate-950 border border-slate-800 p-1.5 rounded-2xl flex items-center gap-1 self-start lg:self-auto">
          <button
            type="button"
            onClick={() => setActiveTool('roi')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition ${
              activeTool === 'roi'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>Commission vs. SaaS ROI</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTool('mtdc')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition ${
              activeTool === 'mtdc'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>2 CFR 200.414 MTDC Solver</span>
          </button>
        </div>
      </div>

      {activeTool === 'roi' ? (
        <div className="space-y-8">
          {/* Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-950/80 p-6 rounded-2xl border border-slate-800">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-300">
                <span>Target Grant Award Size:</span>
                <span className="text-emerald-400 font-mono text-sm font-bold">
                  ${grantAmount.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={50000}
                max={1500000}
                step={25000}
                value={grantAmount}
                onChange={(e) => setGrantAmount(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
                aria-label="Target Grant Award Size"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>$50k</span>
                <span>$500k</span>
                <span>$1.5M</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-300">
                <span>Freelance Commission Fee:</span>
                <span className="text-rose-400 font-mono text-sm font-bold">{commissionPct}%</span>
              </div>
              <input
                type="range"
                min={3}
                max={15}
                step={1}
                value={commissionPct}
                onChange={(e) => setCommissionPct(Number(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer"
                aria-label="Freelance Commission Percentage"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>3%</span>
                <span>8% (Avg)</span>
                <span>15%</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  Growth Team Seats:
                </span>
                <span className="text-cyan-400 font-mono text-sm font-bold">
                  {teamSeats} {teamSeats === 1 ? 'Seat' : 'Seats'} (${seatPrice}/seat)
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={25}
                step={1}
                value={teamSeats}
                onChange={(e) => setTeamSeats(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
                aria-label="Team Seats"
              />
              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-0.5">
                <button
                  type="button"
                  onClick={() =>
                    setBillingCycle(billingCycle === 'annual' ? 'monthly' : 'annual')
                  }
                  className="text-emerald-400 hover:underline font-semibold"
                >
                  Billing: {billingCycle === 'annual' ? 'Annual (Save 20%)' : 'Monthly'}
                </button>
                <span className="font-mono">{pooledAnnualDrafts} drafts/yr</span>
              </div>
            </div>
          </div>

          {/* Output Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-800/40 space-y-2">
              <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider">
                Predatory Commission Fee ({commissionPct}%)
              </span>
              <div className="text-3xl sm:text-4xl font-black text-rose-200 font-mono">
                -${commissionCost.toLocaleString()}
              </div>
              <p className="text-xs text-slate-400">
                Forfeited from project capital. Impermissible under 2 CFR 200.430 &amp; AFP Code of Ethics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Ironclad Growth ({teamSeats} Seats • 1 Year)
              </span>
              <div className="text-3xl sm:text-4xl font-black text-white font-mono">
                ${annualSaasCost.toLocaleString()}
              </div>
              <p className="text-xs text-slate-400">
                Includes {teamSeats * 15} pooled AI drafts/month, full HNSW RAG Knowledge Base &amp; Red Team review.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-950/30 border-2 border-emerald-500/60 space-y-2 shadow-xl shadow-emerald-950/40">
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                Net Mission Capital Retained
              </span>
              <div className="text-3xl sm:text-4xl font-black text-emerald-300 font-mono">
                +${netCapitalSaved.toLocaleString()}
              </div>
              <p className="text-xs text-emerald-200/80">
                100% retained inside your organization with zero federal audit clawback liability.
              </p>
            </div>
          </div>

          {/* Statutory Notice + CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-950/90 border border-amber-500/30">
            <div className="flex items-start gap-3 text-xs text-slate-300">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300">Uniform Guidance 2 CFR 200.430 Warning:</strong>{' '}
                Federal regulations strictly prohibit paying percentage-based contingency fees from grant awards. Ironclad Grants is a permissible SaaS operational subscription under 2 CFR 200.454.
              </div>
            </div>
            <a
              href={`${PORTAL_URL}/pricing`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shrink-0 shadow-lg transition"
            >
              <span>Activate {teamSeats}-Seat Plan in Portal</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      ) : (
        /* Tool 2: 2 CFR 200.414 MTDC Solver */
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Inputs */}
            <div className="lg:col-span-7 bg-slate-950/80 p-6 rounded-2xl border border-slate-800 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Direct Cost Categories (OMB SF-424A Section B)
                </span>
                <span className="text-[11px] font-mono text-slate-400">2 CFR 200.1 Rules Applied</span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>Personnel &amp; Fringe Benefits (100% MTDC Eligible):</span>
                    <span className="text-emerald-400 font-mono">${directPersonnel.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={25000}
                    max={750000}
                    step={5000}
                    value={directPersonnel}
                    onChange={(e) => setDirectPersonnel(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>Travel, Supplies &amp; Materials (100% MTDC Eligible):</span>
                    <span className="text-emerald-400 font-mono">${directSuppliesTravel.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={150000}
                    step={2500}
                    value={directSuppliesTravel}
                    onChange={(e) => setDirectSuppliesTravel(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>Capital Equipment &gt;$5,000/unit (Excluded from MTDC):</span>
                    <span className="text-amber-400 font-mono">${capitalEquipment.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={250000}
                    step={5000}
                    value={capitalEquipment}
                    onChange={(e) => setCapitalEquipment(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>Consortium Subaward Total (Only First $25,000 Eligible):</span>
                    <span className="text-cyan-400 font-mono">${subawardTotal.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={250000}
                    step={5000}
                    value={subawardTotal}
                    onChange={(e) => setSubawardTotal(Number(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>Indirect Cost Rate (10%–15% De Minimis or NICRA):</span>
                    <span className="text-emerald-400 font-mono font-bold">{indirectRatePct}%</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={40}
                    step={1}
                    value={indirectRatePct}
                    onChange={(e) => setIndirectRatePct(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Output Ledger */}
            <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-emerald-500/40 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Statutory MTDC Breakdown
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-700/50 text-[10px] font-mono">
                    2 CFR 200.414
                  </span>
                </div>

                <div className="space-y-2.5 text-xs font-mono">
                  <div className="flex justify-between text-slate-300">
                    <span>Total Direct Costs:</span>
                    <span>${totalDirectCosts.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-amber-400">
                    <span>Less Capital Equipment Exclusion:</span>
                    <span>-${excludedEquipment.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-amber-400">
                    <span>Less Subaward Portion &gt;$25,000:</span>
                    <span>-${excludedSubaward.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-slate-800 pt-2 flex justify-between text-white font-bold text-sm">
                    <span>Modified Total Direct Cost (MTDC):</span>
                    <span className="text-cyan-300">${mtdcBase.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-emerald-400 font-bold text-sm">
                    <span>Indirect Cost Recovery ({indirectRatePct}%):</span>
                    <span>+${indirectCostRecovery.toLocaleString()}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                    Total Audit-Ready Federal Request (SF-424 Box 18a)
                  </div>
                  <div className="text-3xl font-black text-white font-mono">
                    ${totalFederalRequest.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <a
                  href={`${PORTAL_URL}/postaward`}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow-lg transition"
                >
                  <span>Export Full SF-424A &amp; Justification in Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Automatically generates OMB Section B CSV &amp; narrative text
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
