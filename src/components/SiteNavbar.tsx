'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ShieldCheck,
  Sparkles,
  BookOpen,
  FileCode2,
  History,
  DollarSign,
  ExternalLink,
  ArrowRight,
  Palette,
  Check,
  Moon,
  Sun,
  Trees,
  Flame,
  Menu,
  X,
  LogIn,
  ShoppingBag,
  Layers,
} from 'lucide-react';
import { AVAILABLE_THEMES, PORTAL_URL, type ThemeConfig } from '@/data/siteData';

export const SiteNavbar: React.FC = () => {
  const pathname = usePathname();
  const [currentTheme, setCurrentTheme] = useState<ThemeConfig['id']>('slate');
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const saved = (localStorage.getItem('acbf_theme_preference') as ThemeConfig['id']) || 'slate';
      setCurrentTheme(saved);
      applyThemeToDom(saved);
    } catch {
      // ignore storage errors
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsThemeOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function applyThemeToDom(theme: ThemeConfig['id']) {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }

  function handleSelectTheme(themeId: ThemeConfig['id']) {
    setCurrentTheme(themeId);
    try {
      localStorage.setItem('acbf_theme_preference', themeId);
    } catch {
      // ignore
    }
    applyThemeToDom(themeId);
    setIsThemeOpen(false);
  }

  function getThemeIcon(id: ThemeConfig['id']) {
    switch (id) {
      case 'obsidian-oled':
        return <Moon className="w-3.5 h-3.5 text-white" />;
      case 'obsidian-vampire':
        return <Flame className="w-3.5 h-3.5 text-rose-500" />;
      case 'coop-forest':
        return <Trees className="w-3.5 h-3.5 text-emerald-400" />;
      case 'light':
        return <Sun className="w-3.5 h-3.5 text-amber-400" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-cyan-400" />;
    }
  }

  const activeTheme = AVAILABLE_THEMES.find((t) => t.id === currentTheme) || AVAILABLE_THEMES[0];

  const navItems = [
    { href: '/', label: 'Platform Overview', icon: Layers },
    { href: '/pricing', label: 'Pricing & 2 CFR 200 ROI', icon: DollarSign },
    { href: '/docs', label: 'Documentation', icon: FileCode2 },
    { href: '/guides', label: 'User Guides', icon: BookOpen },
    { href: '/releases', label: 'Release Notes', icon: History, badge: 'v2.4' },
  ];

  const isPathActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Top Release & Portal Conversion Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border-b border-emerald-500/30 px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-200">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono font-bold text-[10px] uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              NEW v2.4.0
            </span>
            <span className="font-medium">
              24GB+ Decentralized Billama GPU Drafting, FreeIPA LDAP, SeaweedFS Vault &amp; 2 CFR 200 Post-Award OS
            </span>
            <Link
              href="/releases"
              className="hidden md:inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-4 ml-1"
            >
              Read Release Notes →
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`${PORTAL_URL}/readiness`}
              className="hidden sm:inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200 font-semibold transition"
            >
              <span>Free Grant Readiness Scorecard</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={`${PORTAL_URL}/shop`}
              className="hidden lg:inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 font-semibold transition"
            >
              <ShoppingBag className="w-3 h-3" />
              <span>Compliance Shop</span>
            </a>
            <a
              href={PORTAL_URL}
              className="inline-flex items-center gap-1 font-bold text-emerald-300 hover:text-white transition"
            >
              <span>portal.ironcladgrants.com</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-3">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center space-x-2.5 group shrink-0">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-950/50 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <span className="font-extrabold text-sm sm:text-base text-white tracking-tight flex items-center gap-1.5">
                  Ironclad Grants
                  <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                    Grant OS
                  </span>
                </span>
                <span className="block text-[10px] text-slate-400 font-medium">
                  Ethical 2 CFR 200 AI Platform &amp; Docs
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isPathActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                      active
                        ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions: Theme Chooser + Portal CTAs */}
            <div className="flex items-center space-x-2 sm:space-x-2.5">
              {/* Theme Switcher */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsThemeOpen(!isThemeOpen)}
                  className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl text-xs font-medium bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-750 transition"
                  title="Switch Display Theme"
                >
                  <Palette className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden xl:inline font-semibold">{activeTheme.name}</span>
                </button>

                {isThemeOpen && (
                  <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl z-50 overflow-hidden py-1.5">
                    <div className="px-3.5 py-2 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        Display Theme
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-mono">
                        Synced w/ Portal
                      </span>
                    </div>
                    <div className="p-1.5 space-y-1">
                      {AVAILABLE_THEMES.map((t) => {
                        const selected = t.id === currentTheme;
                        return (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => handleSelectTheme(t.id)}
                            className={`w-full text-left p-2 rounded-xl transition flex items-start space-x-3 ${
                              selected ? 'bg-slate-800 ring-1 ring-emerald-500' : 'hover:bg-slate-800/50'
                            }`}
                          >
                            <div
                              className="w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 mt-0.5"
                              style={{ backgroundColor: t.background, borderColor: t.border }}
                            >
                              <div
                                className="w-2.5 h-2.5 rounded-full"
                                style={{ backgroundColor: t.foreground }}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                                  {getThemeIcon(t.id)}
                                  {t.name}
                                </span>
                                {selected && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                              </div>
                              <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                                {t.description}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Sign In to Portal */}
              <a
                href={PORTAL_URL}
                className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-750 transition"
              >
                <LogIn className="w-3.5 h-3.5 text-emerald-400" />
                <span>Sign In</span>
              </a>

              {/* Primary CTA: Launch Portal */}
              <a
                href={PORTAL_URL}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-950/50 border border-emerald-400/30 transition"
              >
                <span>Launch Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-slate-950 px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isPathActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold ${
                    active
                      ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/40'
                      : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-emerald-400" />
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
              <a
                href={`${PORTAL_URL}/readiness`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-slate-900 border border-slate-750 text-cyan-300"
              >
                <span>Readiness Test</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={PORTAL_URL}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-emerald-600 text-white"
              >
                <span>Open Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
