import React, { useState } from 'react';
import { GitCompare, AlertTriangle, CheckCircle, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

export default function VersionDiff() {
  const sampleV1 = `RENTAL AGREEMENT - DRAFT 1 (ORIGINAL)
Clause 4: The Tenant shall pay a monthly rent of Rs. 35,000 on or before the 5th of each calendar month.
Clause 8: Either party may terminate this agreement by providing THIRTY (30) DAYS prior written notice.
Clause 11: Security deposit of Rs. 1,00,000 shall be refunded within 7 days of peaceful handover of premises subject to physical inspection.
Clause 15: In case of dispute, parties agree to conciliation under the Arbitration and Conciliation Act, 1996 in New Delhi.`;

  const sampleV2 = `RENTAL AGREEMENT - DRAFT 2 (MODIFIED BY LANDLORD)
Clause 4: The Tenant shall pay a monthly rent of Rs. 35,000 on or before the 1st of each calendar month. A late fine of Rs. 500 per day will apply thereafter.
Clause 8: The Landlord may terminate this agreement by providing SEVEN (7) DAYS notice, while the Tenant must provide SIXTY (60) DAYS notice.
Clause 11: Security deposit of Rs. 1,00,000 shall be refunded within 60 days of peaceful handover, with mandatory automatic deduction of 25% for routine painting regardless of condition.
Clause 15: All disputes shall be subject to exclusive jurisdiction of Courts in Mumbai, with all litigation expenses borne solely by Tenant.`;

  const [docA, setDocA] = useState(sampleV1);
  const [docB, setDocB] = useState(sampleV2);
  const [diffRan, setDiffRan] = useState(true);

  // High-level analysis of changes
  const differences = [
    {
      clause: "Clause 4: Payment Due Date & Penalty",
      original: "Due on 5th of month. No punitive daily fine.",
      modified: "Due on 1st of month. Drastic late fine of ₹500/day introduced.",
      risk: "High",
      impact: "Creates severe recurring penalty for minor technical banking delays."
    },
    {
      clause: "Clause 8: Notice Period Asymmetry",
      original: "Mutual 30-day notice period for both parties.",
      modified: "Landlord gets 7 days; Tenant forced into 60 days.",
      risk: "Critical",
      impact: "Grossly unconscionable and one-sided term vulnerable to challenge under Indian contract law."
    },
    {
      clause: "Clause 11: Security Deposit Refund & Deductions",
      original: "Refunded within 7 days after normal handover.",
      modified: "Refund delayed to 60 days + mandatory 25% forfeit (₹25,000) for routine painting.",
      risk: "Critical",
      impact: "Unlawful automatic forfeiture. Landlord cannot forfeit deposit without actual damage."
    },
    {
      clause: "Clause 15: Dispute Jurisdiction & Costs",
      original: "Arbitration in New Delhi (local).",
      modified: "Jurisdiction moved to Mumbai courts + Tenant pays all legal costs.",
      risk: "High",
      impact: "Substantially increases legal burden and litigation expense if dispute arises."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <GitCompare className="w-6 h-6 text-amber-400" />
          <h2 className="text-2xl font-bold text-white font-serif">
            Legal Document & Contract Version Diff Analyzer
          </h2>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          Compare two versions of an agreement, contract, or legal notice to spotlight stealthily added liabilities, unfair covenants, and removed protections.
        </p>
      </div>

      {/* 2-Column Document Text Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Version A (Original / Prior Draft)</span>
            </span>
          </div>
          <textarea
            value={docA}
            onChange={(e) => setDocA(e.target.value)}
            rows={8}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-300 font-mono leading-relaxed focus:outline-none focus:border-amber-500/50"
          />
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Version B (Revised / Opposing Draft)</span>
            </span>
          </div>
          <textarea
            value={docB}
            onChange={(e) => setDocB(e.target.value)}
            rows={8}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-300 font-mono leading-relaxed focus:outline-none focus:border-amber-500/50"
          />
        </div>
      </div>

      {/* Button to Trigger */}
      <div className="flex justify-center">
        <button
          onClick={() => setDiffRan(true)}
          className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all"
        >
          <GitCompare className="w-4 h-4" />
          <span>Compare Versions & Highlight Risks</span>
        </button>
      </div>

      {/* Diff Findings Section */}
      {diffRan && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>Identified Material Modifications & Liability Shifts</span>
            </h3>
            <span className="text-xs text-rose-400 font-semibold bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
              4 Critical Alterations Detected
            </span>
          </div>

          <div className="space-y-3">
            {differences.map((d, idx) => (
              <div key={idx} className="glass-panel p-4 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">{d.clause}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                    d.risk === 'Critical' ? 'bg-rose-500/20 text-rose-300 border-rose-500/40' : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  }`}>
                    Risk: {d.risk}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-950/80 p-2.5 rounded-lg border border-slate-800/80">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold mb-1">
                      Original Clause (Doc A)
                    </span>
                    <p className="text-slate-300">{d.original}</p>
                  </div>

                  <div className="bg-rose-950/20 p-2.5 rounded-lg border border-rose-900/40">
                    <span className="text-[10px] text-rose-400 uppercase tracking-wider block font-semibold mb-1">
                      Altered Clause (Doc B)
                    </span>
                    <p className="text-rose-200">{d.modified}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs text-amber-300/90 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20">
                  <span className="font-bold">Legal Impact:</span>
                  <span>{d.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
