'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  Copy,
  Check,
  Code2,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Terminal,
  ArrowUpRight,
  Cpu,
  BookOpen,
} from 'lucide-react';
import { DOC_SECTIONS } from '@/data/docsData';
import { PORTAL_URL } from '@/data/siteData';

function parseFrontmatterBlock(raw: string): { frontmatter: string; body: string } {
  const trimmed = raw.trimStart();
  if (!trimmed.startsWith('---')) {
    return { frontmatter: '', body: raw };
  }
  const secondDashIndex = trimmed.indexOf('\n---', 3);
  if (secondDashIndex === -1) {
    return { frontmatter: '', body: raw };
  }
  const fmEnd = secondDashIndex + 4;
  return {
    frontmatter: trimmed.slice(0, fmEnd),
    body: trimmed.slice(fmEnd).trimStart(),
  };
}

export default function DocsPage() {
  const [selectedSectionId, setSelectedSectionId] = useState<string>('overview');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [playgroundYaml, setPlaygroundYaml] = useState<string>(`---
id: demo_epa_ej_2027
title: "EPA Environmental Justice Small Grants Program"
funder: "Environmental Protection Agency (EPA)"
program: "EJ40 Community Resilience Initiative"
amount: 175000
deadline: "2027-08-30"
category: "Federal"
tier: "Summer Federal Major"
matchPercentage: 0
status: "Drafting"
---

# 1. Executive Summary & Project Abstract
Community air monitoring and urban canopy expansion proposal.`);

  const filteredSections = DOC_SECTIONS.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeSection =
    DOC_SECTIONS.find((s) => s.id === selectedSectionId) || DOC_SECTIONS[0];

  function handleCopy(text: string, id: string) {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  const parsedPlayground = useMemo(() => {
    const { frontmatter, body } = parseFrontmatterBlock(playgroundYaml);
    if (!frontmatter) {
      return {
        valid: false,
        missingRequired: ['Missing YAML frontmatter delimiter (---)'],
        keys: {} as Record<string, string>,
        hasBody: Boolean(body.trim()),
      };
    }
    const keys: Record<string, string> = {};
    frontmatter.split('\n').forEach((line) => {
      const match = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
      if (match) {
        keys[match[1]] = match[2].replace(/^["']|["']$/g, '').trim();
      }
    });
    const missingRequired: string[] = [];
    ['id', 'title', 'funder', 'program', 'amount', 'deadline'].forEach((req) => {
      if (!keys[req]) missingRequired.push(req);
    });
    return {
      valid: missingRequired.length === 0,
      missingRequired,
      keys,
      hasBody: body.trim().length > 0,
    };
  }, [playgroundYaml]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-950/60 via-slate-900 to-teal-950/50 border border-emerald-500/30 rounded-3xl p-6 lg:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Technical Reference &amp; SDK Specifications
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ironclad Grants &amp; @tekromancy/grant_utils Docs
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
              Complete architectural documentation for PostgreSQL <code className="text-emerald-300 font-mono">pgvector</code> HNSW RAG grounding, 2 CFR 200 statutory math engines, decentralized 24GB+ Billama GPU routing, RFC 5545 calendar feeds, and Kubernetes Helm deployment.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`${PORTAL_URL}/docs`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition shadow-lg"
            >
              <BookOpen className="w-4 h-4" />
              <span>Open Interactive Docs in Portal</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono rounded-xl">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>v2.4.0 • 185 Tests</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Two-Column Documentation Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-4 shadow-lg lg:sticky lg:top-28">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search specs, 2 CFR 200, API..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
              />
            </div>

            <div className="space-y-1.5">
              <div className="px-3 py-1 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Documentation Modules ({filteredSections.length})
              </div>
              {filteredSections.map((sec) => {
                const isSelected = sec.id === selectedSectionId;
                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => setSelectedSectionId(sec.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm transition flex items-start justify-between gap-2 ${
                      isSelected
                        ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/40'
                        : 'text-slate-300 hover:bg-slate-800/60 hover:text-white border border-transparent'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="font-bold text-xs sm:text-sm">{sec.title}</div>
                      <div className="text-[11px] text-slate-400 line-clamp-1">{sec.summary}</div>
                    </div>
                    <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded-full bg-slate-950 text-slate-300 border border-slate-800 whitespace-nowrap shrink-0">
                      {sec.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setSelectedSectionId('playground')}
                className={`w-full text-left px-3.5 py-3 rounded-xl text-xs font-bold transition flex items-center justify-between ${
                  selectedSectionId === 'playground'
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                    : 'text-purple-300 bg-purple-950/20 border border-purple-500/25 hover:bg-purple-950/40'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  <span>Interactive YAML Schema Playground</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-950 border border-purple-700">
                  LIVE
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Content Pane */}
        <div className="lg:col-span-8 space-y-6">
          {selectedSectionId === 'playground' ? (
            <div className="bg-slate-900 border border-purple-500/30 rounded-3xl p-6 lg:p-8 space-y-6 shadow-xl">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/40 rounded-full text-xs font-semibold">
                  <Cpu className="w-3.5 h-3.5" />
                  Live Frontmatter Schema Validator
                </div>
                <h2 className="text-2xl font-extrabold text-white">
                  Interactive Grant YAML Frontmatter Playground
                </h2>
                <p className="text-xs sm:text-sm text-slate-300">
                  Edit or paste your grant proposal Markdown below. The validator runs{' '}
                  <code className="text-emerald-400 font-mono">splitFrontmatter()</code> in real time to verify required schema keys (<code className="font-mono text-purple-300">id, title, funder, program, amount, deadline</code>).
                </p>
              </div>

              <div
                className={`p-4 rounded-2xl border flex items-start gap-3 ${
                  parsedPlayground.valid
                    ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                    : 'bg-amber-950/30 border-amber-500/40 text-amber-200'
                }`}
              >
                {parsedPlayground.valid ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="font-bold text-sm">
                    {parsedPlayground.valid
                      ? 'Valid Ironclad Grant Frontmatter Schema'
                      : 'Schema Compliance Warnings Detected'}
                  </div>
                  <div className="text-xs opacity-90 mt-0.5">
                    {parsedPlayground.valid
                      ? 'All 6 mandatory metadata fields are present and ready for RFC 5545 calendar & KPI indexing.'
                      : `Missing required fields: ${parsedPlayground.missingRequired.join(', ')}`}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Editable Proposal Markdown
                  </label>
                  <textarea
                    value={playgroundYaml}
                    onChange={(e) => setPlaygroundYaml(e.target.value)}
                    rows={15}
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-xs text-slate-200 focus:outline-none focus:border-purple-500 transition leading-relaxed"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Parsed Metadata Inspector
                  </label>
                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 h-[310px] overflow-y-auto space-y-2 font-mono text-xs">
                    {Object.entries(parsedPlayground.keys).map(([k, v]) => (
                      <div
                        key={k}
                        className="flex items-center justify-between border-b border-slate-900 pb-1.5"
                      >
                        <span className="text-purple-400 font-bold">{k}:</span>
                        <span className="text-slate-200 truncate max-w-[190px]">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 lg:p-8 space-y-6 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-bold uppercase tracking-wider">
                    {activeSection.badge}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {activeSection.title}
                  </h2>
                  <p className="text-slate-300 text-xs sm:text-sm">{activeSection.summary}</p>
                </div>

                <a
                  href={`${PORTAL_URL}${activeSection.portalPath}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shrink-0 shadow-md transition"
                >
                  <span>Try Live in Portal</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Content Blocks */}
              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                {activeSection.content.split('\n\n').map((para, i) => {
                  if (para.startsWith('### ')) {
                    return (
                      <h3 key={i} className="text-lg font-bold text-white pt-4">
                        {para.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (para.startsWith('- ')) {
                    const items = para.split('\n- ');
                    return (
                      <ul key={i} className="list-disc pl-5 space-y-2 my-3">
                        {items.map((item, j) => (
                          <li key={j} className="text-slate-300 text-xs sm:text-sm">
                            {item.replace(/^- /, '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (para.startsWith('| ')) {
                    const rows = para
                      .split('\n')
                      .filter((r) => r.includes('|') && !r.includes('---'));
                    if (rows.length === 0) return null;
                    const headers = rows[0]
                      .split('|')
                      .map((s) => s.trim())
                      .filter(Boolean);
                    const dataRows = rows.slice(1);
                    return (
                      <div
                        key={i}
                        className="overflow-x-auto my-4 rounded-2xl border border-slate-800"
                      >
                        <table className="w-full text-left text-xs">
                          <thead className="bg-slate-950 text-slate-200 border-b border-slate-800 font-bold uppercase tracking-wider">
                            <tr>
                              {headers.map((h, hi) => (
                                <th key={hi} className="px-4 py-3">
                                  {h.replace(/\*\*/g, '')}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-800 bg-slate-950/50">
                            {dataRows.map((dr, dri) => {
                              const cols = dr
                                .split('|')
                                .map((s) => s.trim())
                                .filter(Boolean);
                              return (
                                <tr key={dri} className="hover:bg-slate-800/40 transition">
                                  {cols.map((col, coli) => (
                                    <td key={coli} className="px-4 py-2.5 text-slate-300">
                                      {col.replace(/\*\*/g, '').replace(/`/g, '')}
                                    </td>
                                  ))}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  return (
                    <p key={i} className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {para}
                    </p>
                  );
                })}
              </div>

              {/* Code Snippets */}
              {activeSection.codeSnippets && activeSection.codeSnippets.length > 0 && (
                <div className="space-y-4 pt-6 border-t border-slate-800">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-emerald-400" />
                    <span>Executable Code &amp; CLI Reference</span>
                  </div>
                  {activeSection.codeSnippets.map((snip, idx) => {
                    const snipId = `${activeSection.id}-${idx}`;
                    const copied = copiedId === snipId;
                    return (
                      <div
                        key={idx}
                        className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden"
                      >
                        <div className="bg-slate-900/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-200">{snip.label}</span>
                          <button
                            type="button"
                            onClick={() => handleCopy(snip.code, snipId)}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium transition"
                          >
                            {copied ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy Snippet</span>
                              </>
                            )}
                          </button>
                        </div>
                        <pre className="p-4 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                          {snip.code}
                        </pre>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
