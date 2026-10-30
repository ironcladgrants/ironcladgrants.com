'use client';

import React, { useState } from 'react';
import {
  History,
  Sparkles,
  GitCommit,
  ArrowUpRight,
  Cpu,
  Scale,
  Lock,
  Layers,
  Activity,
  CheckCircle2,
} from 'lucide-react';
import { RELEASE_NOTES } from '@/data/releasesData';
import { PORTAL_URL } from '@/data/siteData';

type CategoryFilter =
  | 'All'
  | 'AI & Compute'
  | 'Federal Compliance'
  | 'Enterprise Security'
  | 'Platform & UX'
  | 'Observability & DevOps';

export default function ReleasesPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');

  const categories: CategoryFilter[] = [
    'All',
    'AI & Compute',
    'Federal Compliance',
    'Enterprise Security',
    'Platform & UX',
    'Observability & DevOps',
  ];

  function getCategoryBadge(cat: Exclude<CategoryFilter, 'All'>) {
    switch (cat) {
      case 'AI & Compute':
        return {
          icon: Cpu,
          style: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
        };
      case 'Federal Compliance':
        return {
          icon: Scale,
          style: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
        };
      case 'Enterprise Security':
        return {
          icon: Lock,
          style: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
        };
      case 'Observability & DevOps':
        return {
          icon: Activity,
          style: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
        };
      default:
        return {
          icon: Layers,
          style: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
        };
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Top Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-emerald-950/60 via-slate-900 to-teal-950/50 border border-emerald-500/30 p-6 sm:p-10 shadow-2xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <History className="w-3.5 h-3.5" />
              Platform Release Notes &amp; Changelog
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              What&apos;s New in Ironclad Grants
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Track every architectural upgrade, 2 CFR 200 compliance engine release, decentralized Billama GPU integration, and Kubernetes Helm deployment running live on{' '}
              <a
                href={PORTAL_URL}
                className="text-emerald-400 font-mono underline underline-offset-4"
              >
                portal.ironcladgrants.com
              </a>
              .
            </p>
          </div>

          <a
            href={PORTAL_URL}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shrink-0 transition"
          >
            <span>Launch Latest v2.4.0 in Portal</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
          <span className="text-xs font-bold text-slate-400 mr-1">Filter by Subsystem:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white border-emerald-400 shadow-sm'
                  : 'bg-slate-950/70 text-slate-300 border-slate-800 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Release Timeline */}
      <div className="space-y-8 relative">
        {RELEASE_NOTES.map((release, rIdx) => {
          const filteredHighlights =
            selectedCategory === 'All'
              ? release.highlights
              : release.highlights.filter((h) => h.category === selectedCategory);

          if (filteredHighlights.length === 0) return null;

          return (
            <div
              key={release.version}
              className={`rounded-3xl bg-slate-900 border p-6 sm:p-8 space-y-6 shadow-xl ${
                rIdx === 0
                  ? 'border-emerald-500/60 shadow-emerald-950/30'
                  : 'border-slate-800'
              }`}
            >
              {/* Release Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-sm font-mono font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      {release.version}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-800 text-cyan-300 border border-slate-700">
                      {release.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{release.date}</span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      <GitCommit className="w-3 h-3 text-emerald-400" />
                      {release.commitRange}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {release.codename}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                    {release.summary}
                  </p>
                </div>

                <a
                  href={release.portalLink}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-950 hover:bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 shrink-0 self-start lg:self-center transition"
                >
                  <span>{release.portalLinkLabel}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredHighlights.map((item, hIdx) => {
                  const badge = getCategoryBadge(item.category);
                  const BadgeIcon = badge.icon;
                  return (
                    <div
                      key={hIdx}
                      className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-2.5 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${badge.style}`}
                          >
                            <BadgeIcon className="w-3 h-3" />
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Deployment & Migration Notes */}
              {release.breakingChangesOrNotes && release.breakingChangesOrNotes.length > 0 && (
                <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Deployment &amp; Upgrade Notes</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {release.breakingChangesOrNotes.map((note, nIdx) => (
                      <li key={nIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
