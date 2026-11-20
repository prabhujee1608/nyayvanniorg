import React from 'react';
import { Scale, Heart, Shield, ExternalLink } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1 */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 p-1.5 flex items-center justify-center">
                <Scale className="w-5 h-5 text-amber-400" />
              </div>
              <span className="text-base font-bold text-white font-serif">
                Nyaya<span className="text-amber-400">Vani</span> (न्याय वाणी)
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Empowering 1.4 billion citizens of Bharat with instant, accessible, multilingual legal intelligence, scam protection, and statutory rights literacy.
            </p>
            <div className="pt-1 flex items-center gap-2 text-[10px] text-amber-400/80 font-medium">
              <span>Satyameva Jayate</span> • <span>सत्यमेव जयते</span>
            </div>
          </div>

          {/* Col 2: Quick Features */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Legal Capabilities
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => setActiveTab('analyzer')} className="hover:text-amber-400 transition-colors">
                  AI Legal Notice & FIR Analyzer
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('scam')} className="hover:text-amber-400 transition-colors">
                  Digital Arrest & Scam Verifier
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('converter')} className="hover:text-amber-400 transition-colors">
                  IPC to Bharatiya Nyaya Sanhita (BNS)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('drafter')} className="hover:text-amber-400 transition-colors">
                  Automated Legal Notice & RTI Drafter
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('diff')} className="hover:text-amber-400 transition-colors">
                  Contract Version Diff & Liability Checker
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Govt & Official Portals */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              Official Indian Portals
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                  <span>National Cyber Crime Portal (1930)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://nalsa.gov.in" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                  <span>NALSA Free Legal Aid (15100)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://ecourts.gov.in" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                  <span>eCourts Services India</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://consumerhelpline.gov.in" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                  <span>National Consumer Helpline (1915)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://sancharsaathi.gov.in" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                  <span>Sanchar Saathi (Chakshu Portal)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Important Statutory Disclaimer */}
          <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-xs">
              <Shield className="w-4 h-4" />
              <span>Legal Disclaimer</span>
            </div>
            <p className="text-[10px] text-slate-400 leading-normal">
              NyayaVani is an artificial intelligence-driven educational and preliminary legal information platform. It does not provide formal legal advice or substitute for the counsel of an enrolled advocate registered with the Bar Council of India. In matters involving litigation, arrest, or property disputes, always consult a licensed advocate or contact NALSA (15100).
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} NyayaVani. Open-source public interest AI initiative for India.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for Bharatiya Nagarik
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
