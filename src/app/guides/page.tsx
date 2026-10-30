'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  Sparkles,
  Copy,
  Check,
  ArrowUpRight,
  Keyboard,
  Clock,
} from 'lucide-react';
import { WALKTHROUGH_GUIDES } from '@/data/guidesData';
import { PORTAL_URL } from '@/data/siteData';

export default function GuidesPage() {
  const [selectedGuideId, setSelectedGuideId] = useState<string>(WALKTHROUGH_GUIDES[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeGuide =
    WALKTHROUGH_GUIDES.find((g) => g.id === selectedGuideId) || WALKTHROUGH_GUIDES[0];

  function handleCopy(id: string, text: string) {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/50 border border-slate-800 p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-900/60 text-emerald-300 border border-emerald-700/50">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Interactive Platform Walkthroughs</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Step-by-Step User Activity Guides
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Practical walkthroughs covering ProPublica 990-PF hydration, HNSW Knowledge Base grounding, 8-section AI Copilot drafting on Billama GPUs, Red Team peer review, and 2 CFR 200 post-award compliance.
            </p>
          </div>

          <a
            href={PORTAL_URL}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-extrabold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shrink-0 transition"
          >
            <span>Open Portal Workspace</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Guide List */}
        <div className="lg:col-span-4 space-y-2.5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2">
            Select a Workflow Walkthrough
          </div>
          {WALKTHROUGH_GUIDES.map((guide) => {
            const isSelected = guide.id === selectedGuideId;
            return (
              <button
                key={guide.id}
                type="button"
                onClick={() => setSelectedGuideId(guide.id)}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex flex-col gap-1.5 ${
                  isSelected
                    ? 'bg-emerald-950/40 border-emerald-500 shadow-lg shadow-emerald-950/40 text-white'
                    : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                    {guide.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-slate-400">
                    <Clock className="w-3 h-3" /> {guide.duration}
                  </span>
                </div>
                <div className="text-sm font-bold text-slate-100">{guide.title}</div>
                <div className="text-xs text-slate-400 line-clamp-2">{guide.subtitle}</div>
              </button>
            );
          })}

          {/* Global Shortcuts Card */}
          <div className="mt-6 p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-200">
              <Keyboard className="w-4 h-4 text-emerald-400" />
              <span>Portal Keyboard Shortcuts</span>
            </div>
            <div className="space-y-2 text-xs">
              {[
                { label: 'Command Palette', key: '⌘K / Ctrl+K' },
                { label: 'Save & Append SHA-256 Hash', key: '⌘S / Ctrl+S' },
                { label: 'Print / Export PDF Packet', key: '⌘P / Ctrl+P' },
                { label: 'CLI Edit Proposal in $EDITOR', key: 'e' },
                { label: 'CLI Submit Pull Request', key: 'p' },
              ].map((sc, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-slate-400">{sc.label}</span>
                  <kbd className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 font-mono text-[10px] text-emerald-400 font-bold">
                    {sc.key}
                  </kbd>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Selected Guide Detail */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  {activeGuide.category} • {activeGuide.duration}
                </span>
                <h2 className="text-2xl font-extrabold text-white tracking-tight">
                  {activeGuide.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300">{activeGuide.subtitle}</p>
              </div>

              <a
                href={`${PORTAL_URL}${activeGuide.portalPath}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shrink-0 transition"
              >
                <span>{activeGuide.portalButtonLabel}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Actionable Step-by-Step Instructions</span>
              </h3>

              {activeGuide.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/90 space-y-3"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-full bg-emerald-900/60 text-emerald-300 border border-emerald-600/50 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div className="space-y-1 flex-1">
                      <h4 className="text-sm font-bold text-white">{step.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {step.tip && (
                    <div className="ml-10 p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-700/40 text-xs text-emerald-200">
                      <strong className="text-emerald-400">Pro Tip:</strong> {step.tip}
                    </div>
                  )}

                  {step.code && (
                    <div className="ml-10 relative">
                      <pre className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto">
                        {step.code}
                      </pre>
                      <button
                        type="button"
                        onClick={() => handleCopy(`${activeGuide.id}-${idx}`, step.code!)}
                        className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
                        title="Copy command"
                      >
                        {copiedId === `${activeGuide.id}-${idx}` ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {activeGuide.shortcuts && activeGuide.shortcuts.length > 0 && (
              <div className="border-t border-slate-800 pt-5 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Keyboard Shortcuts for This Module
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeGuide.shortcuts.map((sc, scIdx) => (
                    <div
                      key={scIdx}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs"
                    >
                      <span className="text-slate-300">{sc.description}</span>
                      <kbd className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 font-mono text-emerald-400 font-bold">
                        {sc.key}
                      </kbd>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
