import React from 'react';
import { Scale, ShieldAlert, FileText, ArrowRight, CheckCircle2, Sparkles, BookOpen, Users } from 'lucide-react';

export default function Hero({ onStartAnalyze, onStartScamCheck, onStartBns, onStartChat }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 pt-8 pb-12 border-b border-slate-800/80">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Bharatiya Nyaya Sanhita (BNS 2023) Compliant AI</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-serif leading-tight">
            Democratizing Legal Justice with AI for Every <span className="gold-gradient-text">Indian Citizen</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            Upload any legal notice, FIR, court summons, or tenancy agreement. 
            Decode complex legal jargon into simple vernacular language, identify hidden liabilities, 
            detect cyber scams & fake warrants, and know your exact statutory rights in seconds.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onStartAnalyze}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4" />
              <span>Analyze Document Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onStartScamCheck}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-rose-950/60 hover:bg-rose-900/80 text-rose-200 border border-rose-600/40 font-semibold text-sm transition-all"
            >
              <ShieldAlert className="w-4 h-4 text-rose-400" />
              <span>Verify Fake / Scam Notice</span>
            </button>

            <button
              onClick={onStartBns}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-all"
            >
              <Scale className="w-4 h-4 text-amber-400" />
              <span>IPC ↔ BNS Converter</span>
            </button>
          </div>

          {/* Key Trust Signals */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <div className="glass-panel p-3 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
                <BookOpen className="w-4 h-4" />
                <span>500+</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">BNS & IPC Laws Mapped</p>
            </div>

            <div className="glass-panel p-3 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-lg">
                <ShieldAlert className="w-4 h-4" />
                <span>99.4%</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">Scam & Digital Arrest Catch</p>
            </div>

            <div className="glass-panel p-3 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg">
                <Users className="w-4 h-4" />
                <span>8+ Indic</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">Vernacular Languages</p>
            </div>

            <div className="glass-panel p-3 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-lg">
                <CheckCircle2 className="w-4 h-4" />
                <span>100% Free</span>
              </div>
              <p className="text-xs text-slate-400 font-medium">Public Legal Aid Tool</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
