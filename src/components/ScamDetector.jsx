import React, { useState } from 'react';
import { ShieldAlert, AlertOctagon, CheckCircle2, PhoneCall, ExternalLink, HelpCircle, FileCheck, ArrowRight, ShieldCheck } from 'lucide-react';
import { SCAM_DATABASE } from '../data/legalData';
import { detectScamScore } from '../utils/aiEngine';

export default function ScamDetector() {
  const [suspectText, setSuspectText] = useState('');
  const [scamReport, setScamReport] = useState(null);

  const handleVerify = () => {
    if (!suspectText.trim()) return;
    const res = detectScamScore(suspectText);
    setScamReport(res);
  };

  const loadSample = (sampleKey) => {
    if (sampleKey === 'digital_arrest') {
      const text = `URGENT ORDER: CENTRAL BUREAU OF INVESTIGATION & SUPREME COURT OF INDIA
Ref: CBI/ED/DELHI/2024/9021
Subject: DIGITAL ARREST AND PROVISIONAL DETENTION

You are hereby informed that your Aadhaar number is involved in 16 fraudulent bank accounts used for money laundering in Mumbai.
You are placed under immediate DIGITAL ARREST.
1. You must connect on Skype video call immediately with IO Inspector Vikram.
2. You must stay inside a closed room without contacting anyone.
3. Transfer your balance of Rs. 4,50,000 to RBI Verification Escrow A/c No: 91029384758 within 2 hours for forensic audit. Failure to comply will lead to physical arrest team deployment.`;
      setSuspectText(text);
      setScamReport(detectScamScore(text));
    } else if (sampleKey === 'trai_cut') {
      const text = `TRAI URGENT NOTICE:
Dear Customer, Your mobile SIM card will be disconnected within 2 hours by Telecom Regulatory Authority of India due to illegal advertisement and cyber fraud complaints registered against this number. Press 9 or join video verification immediately to avoid permanent deactivation.`;
      setSuspectText(text);
      setScamReport(detectScamScore(text));
    } else if (sampleKey === 'electricity') {
      const text = `Dear Consumer,
Your electricity power supply will be disconnected tonight at 9:30 PM from the electric office because your previous month bill was not updated. Please immediately contact our electric officer at 98321XXXXX or install the QuickSupport app to update bill status.`;
      setSuspectText(text);
      setScamReport(detectScamScore(text));
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-6 h-6 text-rose-500" />
          <h2 className="text-2xl font-bold text-white font-serif">
            Digital Arrest & Cyber Scam Notice Verifier
          </h2>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          Received a suspicious warrant, threat message, or notice demanding video calls or money? Verify instantly against real Indian law.
        </p>
      </div>

      {/* Critical Statutory Alert Banner */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-rose-950/70 via-slate-900 to-rose-950/70 border border-rose-500/40 flex items-start gap-3">
        <AlertOctagon className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs">
          <h3 className="font-bold text-rose-200 text-sm">
            OFFICIAL CLARIFICATION: NO "DIGITAL ARREST" IN THE LAW OF INDIA
          </h3>
          <p className="text-slate-300 leading-relaxed">
            The Supreme Court of India, Ministry of Home Affairs (MHA), and Indian Cyber Crime Coordination Centre (I4C) have reiterated that <strong>there is no provision for "Digital Arrest" in Indian law</strong>. Neither the Police, ED, CBI, nor Courts ever interrogate or arrest citizens over WhatsApp or Skype video calls, nor do they ever ask for money transfer to verification accounts.
          </p>
        </div>
      </div>

      {/* Verifier Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Text Input & Presets */}
        <div className="lg:col-span-6 space-y-4">
          <div className="glass-panel p-4 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                Paste Suspicious Notice, SMS or WhatsApp Message
              </label>

              {/* Sample Quick-fill */}
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-slate-400">Test:</span>
                <button
                  onClick={() => loadSample('digital_arrest')}
                  className="text-[10px] px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/30 hover:bg-rose-500/20"
                >
                  Digital Arrest
                </button>
                <button
                  onClick={() => loadSample('trai_cut')}
                  className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20"
                >
                  TRAI Disconnect
                </button>
                <button
                  onClick={() => loadSample('electricity')}
                  className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/30 hover:bg-blue-500/20"
                >
                  Power Cut SMS
                </button>
              </div>
            </div>

            <textarea
              value={suspectText}
              onChange={(e) => setSuspectText(e.target.value)}
              placeholder="Paste text of the message, notice, email, or video call instructions you received..."
              rows={10}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-200 font-mono leading-relaxed focus:outline-none focus:border-rose-500/50"
            />

            <button
              onClick={handleVerify}
              disabled={!suspectText.trim()}
              className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-xs shadow-lg shadow-rose-600/25 disabled:opacity-50 transition-all"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Verify Legitimacy & Calculate Scam Probability</span>
            </button>
          </div>

          {/* Quick Help Box */}
          <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Emergency Cyber Help Contacts</span>
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                <div>
                  <div className="font-bold text-white">Dial 1930 (National Cyber Crime)</div>
                  <div className="text-[10px] text-slate-400">Call immediately to freeze transferred money in the golden hour</div>
                </div>
                <a href="tel:1930" className="px-3 py-1 bg-emerald-600 text-white rounded text-xs font-bold">
                  Call 1930
                </a>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                <div>
                  <div className="font-bold text-white">cybercrime.gov.in</div>
                  <div className="text-[10px] text-slate-400">Official National Cybercrime Reporting Portal</div>
                </div>
                <a 
                  href="https://cybercrime.gov.in" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs font-medium border border-slate-700 flex items-center gap-1"
                >
                  <span>Open</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Verification Report */}
        <div className="lg:col-span-6 space-y-4">
          {scamReport ? (
            <div className="space-y-4">
              {/* Verdict Card */}
              <div className={`p-5 rounded-xl border space-y-4 ${
                scamReport.score >= 70 ? 'bg-rose-950/40 border-rose-500/50' :
                scamReport.score >= 35 ? 'bg-amber-950/40 border-amber-500/50' :
                'bg-emerald-950/40 border-emerald-500/50'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    AI Verification Verdict
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-black/40">
                    Score: {scamReport.score}%
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {scamReport.score >= 70 ? (
                    <AlertOctagon className="w-8 h-8 text-rose-400 shrink-0" />
                  ) : scamReport.score >= 35 ? (
                    <ShieldAlert className="w-8 h-8 text-amber-400 shrink-0" />
                  ) : (
                    <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
                  )}
                  <div>
                    <h3 className="text-lg font-extrabold text-white">
                      {scamReport.verdict}
                    </h3>
                    <p className="text-xs text-slate-300">
                      {scamReport.score >= 70 
                        ? 'This notice exhibits blatant characteristics of an organized cyber extortion racket.' 
                        : 'Review caution points below before making any financial commitment.'}
                    </p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2.5 rounded-full bg-slate-900 overflow-hidden">
                  <div
                    className={`h-full ${
                      scamReport.score >= 70 ? 'bg-rose-500' :
                      scamReport.score >= 35 ? 'bg-amber-500' :
                      'bg-emerald-500'
                    }`}
                    style={{ width: `${Math.max(scamReport.score, 5)}%` }}
                  />
                </div>
              </div>

              {/* Red Flags Discovered */}
              <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-3">
                <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertOctagon className="w-4 h-4 text-rose-400" />
                  <span>Red Flags & Deceptive Patterns Detected</span>
                </h4>

                {scamReport.flags.length > 0 ? (
                  <div className="space-y-2">
                    {scamReport.flags.map((flag, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-2.5 bg-rose-950/20 border border-rose-900/40 rounded-lg text-xs text-rose-200">
                        <span className="font-bold text-rose-400">✕</span>
                        <span>{flag}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400 italic">No overt extortion keywords detected in this segment.</p>
                )}
              </div>

              {/* Citizen Instructions */}
              <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-3">
                <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Immediate Recommended Steps</span>
                </h4>

                <div className="space-y-2">
                  {scamReport.recommendations.map((rec, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-xs text-slate-300">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="glass-panel p-8 rounded-xl border border-slate-800 text-center space-y-3">
              <ShieldAlert className="w-10 h-10 text-slate-600 mx-auto" />
              <h3 className="text-sm font-semibold text-slate-300">No Document Verified Yet</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Paste any text message, legal notice, WhatsApp PDF, or notice snippet on the left to evaluate its authenticity.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Common Scam Patterns Library */}
      <div className="space-y-4 pt-4 border-t border-slate-800">
        <h3 className="text-base font-bold text-white font-serif flex items-center gap-2">
          <FileCheck className="w-5 h-5 text-amber-400" />
          <span>Major Indian Cyber Scam Types You Must Know</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SCAM_DATABASE.map((scam, i) => (
            <div key={i} className="glass-panel p-4 rounded-xl border border-slate-800 space-y-2.5">
              <span className="text-xs font-bold text-rose-400">{scam.title}</span>
              <p className="text-[11px] text-amber-200/90 font-medium leading-normal bg-amber-500/10 p-2 rounded border border-amber-500/20">
                {scam.warning}
              </p>
              <ul className="text-[11px] text-slate-400 space-y-1 list-disc list-inside">
                {scam.redFlags.slice(0, 3).map((rf, idx) => (
                  <li key={idx} className="leading-tight">{rf}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
