import React from 'react';
import { PhoneCall, ShieldCheck, Scale, ExternalLink, BookOpen, HeartHandshake, AlertCircle } from 'lucide-react';
import { CITIZEN_HELPLINES, FUNDAMENTAL_RIGHTS } from '../data/legalData';

export default function RightsAndHelplines() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <PhoneCall className="w-6 h-6 text-emerald-400" />
          <h2 className="text-2xl font-bold text-white font-serif">
            Citizen Rights & Emergency Legal Helplines of India
          </h2>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          Direct emergency access to verified national legal aid, cyber crime freeze helpline, consumer commissions, and constitutional protections.
        </p>
      </div>

      {/* Helplines Directory Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <HeartHandshake className="w-4 h-4 text-rose-400" />
            <span>National Emergency Toll-Free Numbers</span>
          </h3>
          <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            24x7 Government Helplines
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CITIZEN_HELPLINES.map((h, i) => (
            <div key={i} className="glass-panel p-4 rounded-xl border border-slate-800 flex flex-col justify-between space-y-3 hover:border-slate-700 transition-all">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {h.badge}
                  </span>
                  <a
                    href={h.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white"
                    title="Open official government portal"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <h4 className="text-sm font-bold text-white font-serif">{h.name}</h4>
                <p className="text-xs text-slate-400 leading-normal">{h.desc}</p>
              </div>

              {/* Big Dial Button */}
              <a
                href={`tel:${h.number}`}
                className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-center border border-slate-700 flex items-center justify-center gap-2 transition-colors group"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-base text-emerald-300">Dial {h.number}</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* NALSA Free Legal Aid Spotlight */}
      <div className="p-5 rounded-xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/40 border border-amber-500/40 space-y-3">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
          <Scale className="w-5 h-5" />
          <span>How to Get a Free Government Lawyer via NALSA (Article 39A)</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Under the Legal Services Authorities Act, 1987, the Government of India provides <strong>100% free legal counsel, court fee waivers, and representation</strong> to:
        </p>
        <ul className="text-xs text-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc list-inside">
          <li>Women and children of all income classes</li>
          <li>Members of Scheduled Castes (SC) or Scheduled Tribes (ST)</li>
          <li>Victims of human trafficking or beggar</li>
          <li>Persons with disability or mental illness</li>
          <li>Persons in custody / undertrial prisoners</li>
          <li>Citizens with annual income below statutory ceiling (approx. ₹3 Lakhs)</li>
        </ul>
        <div className="pt-2 flex items-center gap-3">
          <a
            href="https://nalsa.gov.in"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-amber-300 hover:underline flex items-center gap-1"
          >
            <span>Visit Official NALSA Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <span className="text-slate-500">•</span>
          <span className="text-xs text-slate-400">National Legal Aid Toll-Free: <strong>15100</strong></span>
        </div>
      </div>

      {/* Fundamental Rights Cheat-Sheet */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span>Essential Citizen Rights Every Indian Must Know</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FUNDAMENTAL_RIGHTS.map((r, idx) => (
            <div key={idx} className="glass-panel p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 font-mono">{r.article}</span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase">Constitutional / Statutory</span>
              </div>
              <h4 className="text-sm font-bold text-white">{r.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{r.meaning}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
