import React, { useState, useMemo } from 'react';
import { Scale, Search, ArrowRight, BookOpen, Filter, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { IPC_BNS_MAPPING } from '../data/legalData';

export default function IpcBnsConverter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const set = new Set(IPC_BNS_MAPPING.map(item => item.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredList = useMemo(() => {
    return IPC_BNS_MAPPING.filter(item => {
      const matchCat = selectedCategory === 'All' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery = !q || 
        item.ipc.toLowerCase().includes(q) ||
        item.bns.toLowerCase().includes(q) ||
        item.offence.toLowerCase().includes(q) ||
        item.punishment.toLowerCase().includes(q) ||
        item.keyChange.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <Scale className="w-6 h-6 text-amber-400" />
          <h2 className="text-2xl font-bold text-white font-serif">
            Interactive IPC ↔ Bharatiya Nyaya Sanhita (BNS 2023) Converter
          </h2>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          Search old Indian Penal Code (IPC 1860) sections or new Bharatiya Nyaya Sanhita (BNS 2023) provisions. Review bailable status, cognizable nature, and changes made.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by IPC section (e.g. 420, 302, 498A), BNS section (318, 103), or offence name (cheating, murder, theft)..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500/50"
            />
          </div>

          {/* Category Dropdown */}
          <div className="flex items-center gap-2 shrink-0">
            <Filter className="w-4 h-4 text-slate-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-xs text-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-amber-500/50"
            >
              {categories.map((c, i) => (
                <option key={i} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Filter chips */}
        <div className="flex items-center gap-1.5 flex-wrap text-[11px] text-slate-400 pt-1">
          <span className="font-semibold text-slate-300">Quick Lookups:</span>
          {['420 Cheating', '302 Murder', '498A Dowry Cruelty', '379 Theft', '506 Intimidation', '499 Defamation', 'Snatching'].map((chip, idx) => (
            <button
              key={idx}
              onClick={() => setSearchQuery(chip.split(' ')[0])}
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            >
              {chip}
            </button>
          ))}
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="text-amber-400 hover:underline ml-2"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>Showing {filteredList.length} legal provisions</span>
        <span className="text-[11px] text-amber-400/90 font-medium">BNS effective from 1 July 2024</span>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredList.map((item, idx) => (
          <div key={idx} className="glass-panel p-5 rounded-xl border border-slate-800 space-y-3.5 hover:border-slate-700 transition-all">
            {/* Top comparison pill */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-bold text-slate-300">
                  IPC § {item.ipc}
                </div>
                <ArrowRight className="w-4 h-4 text-amber-400" />
                <div className="px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-500/40 text-xs font-bold text-amber-300">
                  BNS § {item.bns}
                </div>
              </div>

              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">
                {item.category}
              </span>
            </div>

            {/* Offence Title */}
            <div>
              <h3 className="text-sm font-bold text-white font-serif">
                {item.offence}
              </h3>
            </div>

            {/* Classification Badges */}
            <div className="flex flex-wrap items-center gap-2 text-[10px]">
              <span className={`px-2 py-0.5 rounded font-semibold ${
                item.bailable.includes('Non-Bailable') 
                  ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30' 
                  : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
              }`}>
                {item.bailable}
              </span>
              <span className="px-2 py-0.5 rounded font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30">
                {item.cognizable}
              </span>
            </div>

            {/* Punishment */}
            <div className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800 text-xs space-y-1">
              <span className="font-semibold text-slate-400 text-[10px] uppercase tracking-wider block">
                Prescribed Punishment
              </span>
              <p className="text-slate-200 font-medium">{item.punishment}</p>
            </div>

            {/* Key Legislative Shift */}
            <div className="text-xs space-y-1">
              <span className="font-semibold text-amber-400/90 text-[10px] uppercase tracking-wider flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>What Changed in BNS 2023?</span>
              </span>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {item.keyChange}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredList.length === 0 && (
        <div className="glass-panel p-10 text-center rounded-xl space-y-2">
          <AlertCircle className="w-8 h-8 text-slate-500 mx-auto" />
          <p className="text-sm text-slate-300 font-semibold">No provisions found matching "{searchQuery}"</p>
          <p className="text-xs text-slate-500">Try searching with a broader offence term or another section number.</p>
        </div>
      )}
    </div>
  );
}
