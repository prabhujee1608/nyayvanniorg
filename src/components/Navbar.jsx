import React, { useState } from 'react';
import { Scale, ShieldAlert, FileText, Search, PenTool, GitCompare, MessageSquare, PhoneCall, Globe, Menu, X } from 'lucide-react';
import { LANGUAGES } from '../data/legalData';

export default function Navbar({ activeTab, setActiveTab, currentLang, setCurrentLang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const navItems = [
    { id: 'analyzer', label: 'Doc Analyzer', icon: FileText },
    { id: 'scam', label: 'Scam Verifier', icon: ShieldAlert, badge: 'High Alert' },
    { id: 'converter', label: 'IPC ↔ BNS', icon: Scale },
    { id: 'drafter', label: 'AI Drafter', icon: PenTool },
    { id: 'diff', label: 'Compare Diff', icon: GitCompare },
    { id: 'chat', label: 'Nyaya AI Chat', icon: MessageSquare },
    { id: 'rights', label: 'Rights & Helplines', icon: PhoneCall },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl">
      {/* Top Advisory Banner */}
      <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-amber-950 border-b border-amber-800/40 px-4 py-1.5 text-xs text-amber-200 flex items-center justify-between">
        <div className="flex items-center gap-2 mx-auto sm:mx-0 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30 animate-pulse">
            CYBER ALERT
          </span>
          <span>Beware of Fake "Digital Arrest" & Fake CBI Video Call Warrants. Indian Law has NO Digital Arrest. Call 1930.</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[11px] text-amber-300/80">
          <span>NALSA Free Legal Aid: <strong>15100</strong></span>
          <span>•</span>
          <span>Cyber Crime: <strong>1930</strong></span>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => setActiveTab('analyzer')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 p-2 shadow-lg shadow-amber-500/20 flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <Scale className="w-6 h-6 text-slate-950 font-bold" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white font-serif">
                  Nyaya<span className="text-amber-400">Vani</span>
                </span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20">
                  न्याय वाणी
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium tracking-wide">
                AI LEGAL INTELLIGENCE FOR BHARAT
              </p>
            </div>
          </div>

          {/* Desktop Navigation Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-rose-500/30 text-rose-300 border border-rose-500/40">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-amber-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Language & Quick Action */}
          <div className="flex items-center gap-3">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-200 hover:border-amber-500/40 transition-colors"
                title="Select Indic Language"
              >
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-medium">{LANGUAGES.find(l => l.code === currentLang)?.native || 'English'}</span>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl py-1 z-50">
                  <div className="px-3 py-1.5 text-[10px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800">
                    Vernacular Language
                  </div>
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-slate-800 transition-colors ${
                        currentLang === lang.code ? 'text-amber-400 font-semibold bg-amber-500/10' : 'text-slate-300'
                      }`}
                    >
                      <span>{lang.native}</span>
                      <span className="text-[10px] text-slate-500">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Emergency Hotline Button */}
            <button
              onClick={() => setActiveTab('rights')}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600/20 text-rose-300 border border-rose-500/40 text-xs font-semibold hover:bg-rose-600/30 transition-all shadow-sm"
            >
              <PhoneCall className="w-3.5 h-3.5 text-rose-400" />
              <span>Helplines</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 rounded text-[10px] bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
