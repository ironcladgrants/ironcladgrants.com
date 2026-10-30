import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  ArrowUpRight,
  Lock,
  Scale,
  Cpu,
  CheckCircle2,
  GitBranch,
  ShoppingBag,
} from 'lucide-react';
import { PORTAL_URL } from '@/data/siteData';

export const SiteFooter: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      {/* Pre-Footer Conversion Strip */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-teal-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              Instant Interactive Sandbox • No Credit Card Required
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Ready to replace 8% contingency fees with an audit-ready Grant OS?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Launch the live workspace at <span className="font-mono text-emerald-300">portal.ironcladgrants.com</span> with pre-loaded federal RFPs, ProPublica 990-PF hydration, and 24GB+ Billama GPU narrative drafting.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`${PORTAL_URL}/readiness`}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 transition shadow-sm"
            >
              <span>Run Free Readiness Scorecard</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={PORTAL_URL}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-xl shadow-emerald-950/60 border border-emerald-400/30 transition"
            >
              <span>Launch Portal Workspace</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Brand & Compliance Badges */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-950/50">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-extrabold text-base text-white tracking-tight flex items-center gap-2">
                  Ironclad Grants
                  <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                    v2.4.0
                  </span>
                </span>
                <span className="block text-[11px] text-slate-400">
                  The AI-Powered Grant Operating System
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Engineered for 501(c)(3) nonprofits, worker cooperatives, universities (Offices of Sponsored Programs), and municipal agencies. 100% compliant with Uniform Guidance 2 CFR 200 and AFP ethical standards.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-mono text-emerald-400">
                <Scale className="w-3 h-3" /> 2 CFR 200.430 Compliant
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-mono text-cyan-400">
                <Lock className="w-3 h-3" /> Zero-Training RLS Vault
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-mono text-purple-400">
                <Cpu className="w-3 h-3" /> 24GB+ Billama GPU Nodes
              </span>
            </div>
          </div>

          {/* Column 2: Portal Modules */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Portal Modules
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href={`${PORTAL_URL}/matching`} className="hover:text-emerald-400 transition flex items-center gap-1">
                  1. Funder Matching &amp; 990-PF <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href={`${PORTAL_URL}/knowledge`} className="hover:text-emerald-400 transition flex items-center gap-1">
                  2. Institutional Knowledge Base <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href={`${PORTAL_URL}/copilot`} className="hover:text-emerald-400 transition flex items-center gap-1">
                  3. AI Copilot &amp; Red Team Studio <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href={`${PORTAL_URL}/postaward`} className="hover:text-emerald-400 transition flex items-center gap-1">
                  4. Post-Award Financial OS <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href={`${PORTAL_URL}/readiness`} className="hover:text-emerald-400 transition flex items-center gap-1">
                  5. Grant Readiness Diagnostic <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href={`${PORTAL_URL}/team`} className="hover:text-emerald-400 transition flex items-center gap-1">
                  Team RBAC &amp; Subrecipient Portal <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href={`${PORTAL_URL}/shop`} className="text-amber-300 hover:text-amber-200 transition flex items-center gap-1 font-semibold">
                  <ShoppingBag className="w-3 h-3" /> Grant Compliance Store (/shop)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Documentation & Guides */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Documentation &amp; Specs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/docs" className="hover:text-emerald-400 transition">
                  Platform Architecture &amp; HNSW RAG
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-emerald-400 transition">
                  @tekromancy/grant_utils SDK Reference
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-emerald-400 transition">
                  YAML Frontmatter Playground
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-emerald-400 transition">
                  2 CFR 200 MTDC &amp; SF-425 Math
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-emerald-400 transition">
                  Step-by-Step User Guides
                </Link>
              </li>
              <li>
                <Link href="/releases" className="hover:text-emerald-400 transition font-semibold text-emerald-400">
                  Release Notes &amp; Changelog (v2.4.0)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Regulatory & Standards */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Regulatory Standards
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/pricing" className="hover:text-emerald-400 transition">
                  Uniform Guidance 2 CFR 200.430
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-emerald-400 transition">
                  NIH Notice NOT-OD-23-147 AI Policy
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-emerald-400 transition">
                  NSF PAPPG Research Integrity
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-emerald-400 transition">
                  OMB SF-424, SF-424A &amp; SF-425
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-emerald-400 transition">
                  RFC 5545 iCalendar (.ics) Spec
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/ironcladgrants"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition flex items-center gap-1"
                >
                  <GitBranch className="w-3 h-3" /> GitHub Organization
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Ironclad Grants Inc. Released under MIT License. Built for nonprofits, cooperatives, and research institutions.
          </div>
          <div className="flex items-center gap-4">
            <a href={PORTAL_URL} className="hover:text-emerald-400 transition font-mono">
              portal.ironcladgrants.com
            </a>
            <span>•</span>
            <Link href="/docs" className="hover:text-emerald-400 transition">
              Docs
            </Link>
            <span>•</span>
            <Link href="/releases" className="hover:text-emerald-400 transition">
              v2.4.0 Changelog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
