import React, { useState } from 'react';
import { PenTool, Copy, Check, Download, Printer, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import { generateLegalDraft } from '../utils/aiEngine';

export default function LegalDrafter() {
  const [templateType, setTemplateType] = useState('rti');
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [facts, setFacts] = useState('');
  const [relief, setRelief] = useState('');
  const [copied, setCopied] = useState(false);

  // Load Presets
  const loadDraftPreset = (type) => {
    setTemplateType(type);
    if (type === 'rti') {
      setSender('Arun Kumar Sharma');
      setRecipient('Central Public Information Officer (CPIO), Municipal Corporation / PWD Department');
      setSubject('Information regarding road repair budget and contractor allocation in Sector 14');
      setFacts('1. Certified copy of tender work order No. 2023/PWD/8812 awarded for road resurfacing.\n2. Certified copy of the measurement book and quality audit report.\n3. Total amount disbursed to the contractor and penalty imposed for 4-month delay.');
      setRelief('Certified true copies of all aforementioned files and inspection of site records under Section 2(j)(i) of RTI Act.');
    } else if (type === 'notice_reply_138') {
      setSender('Suresh Chandra Gupta');
      setRecipient('Advocate Raman Malik, Counsel for M/s Bright Traders, New Delhi');
      setSubject('Reply to Legal Demand Notice dated 15th October 2024 for alleged dishonour of Cheque No. 491029');
      setFacts('The cheque in question was issued strictly as a conditional security deposit for consignment delivery. The consignment received was damaged and rejected vide email dated 10th September 2024. No legally enforceable debt existed at the time of presentation.');
      setRelief('Immediate return of the dishonoured security cheque and withdrawal of threat of criminal prosecution, failing which civil suit for damages will be instituted.');
    } else if (type === 'consumer_complaint') {
      setSender('Pooja Mehta');
      setRecipient('Flipmart Online Services Pvt. Ltd. & Authorized Seller TechZone');
      setSubject('Complaint for supply of defective smartphone and refusal of warranty / replacement');
      setFacts('Complainant purchased a smartphone order #OD481928 on 12th July 2024 paying ₹38,999/-. Within 5 days the display malfunctioned. Customer support arbitrarily rejected 7-day return guarantee. Service center demanded ₹12,000 for repair on a brand new unit under warranty.');
      setRelief('1. Full refund of ₹38,999/- with interest @ 12% p.a.\n2. ₹25,000/- for harassment and mental distress.\n3. Litigation costs of ₹10,000/-.');
    }
  };

  const generatedDraft = generateLegalDraft({
    templateType,
    sender,
    recipient,
    subject,
    facts,
    relief
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedDraft], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `${templateType}_draft_nyayavani.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <PenTool className="w-6 h-6 text-amber-400" />
          <h2 className="text-2xl font-bold text-white font-serif">
            Automated Legal Document & Notice Drafter
          </h2>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          Draft legally grounded RTI applications, notice replies, and consumer complaints adhering to Indian statutory norms.
        </p>
      </div>

      {/* Template Chooser Bar */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-slate-300 mr-2">Choose Template:</span>
        <button
          onClick={() => loadDraftPreset('rti')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
            templateType === 'rti'
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
              : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
          }`}
        >
          RTI Application (Sec 6(1))
        </button>
        <button
          onClick={() => loadDraftPreset('notice_reply_138')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
            templateType === 'notice_reply_138'
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
              : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
          }`}
        >
          Reply to Cheque Bounce Notice (Sec 138)
        </button>
        <button
          onClick={() => loadDraftPreset('consumer_complaint')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
            templateType === 'consumer_complaint'
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
              : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
          }`}
        >
          Consumer Forum Complaint (Sec 35 CPA)
        </button>
      </div>

      {/* 2-Column Drafter Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Form */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-panel p-4 rounded-xl space-y-3">
            <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Draft Particulars
            </h3>

            <div className="space-y-1">
              <label className="text-[11px] text-slate-400 font-medium">Your Name / Complainant</label>
              <input
                type="text"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                placeholder="e.g. Arun Kumar Sharma"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500/50"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] text-slate-400 font-medium">Opposite Party / Recipient Office</label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="e.g. CPIO, Municipal Corporation or Company Name"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500/50"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] text-slate-400 font-medium">Subject Line</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Seeking information regarding tender or replying to notice"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500/50"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] text-slate-400 font-medium">Key Facts & Points in Dispute</label>
              <textarea
                value={facts}
                onChange={(e) => setFacts(e.target.value)}
                rows={5}
                placeholder="Describe key events chronologically..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500/50 leading-relaxed font-sans"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] text-slate-400 font-medium">Specific Relief / Demands</label>
              <textarea
                value={relief}
                onChange={(e) => setRelief(e.target.value)}
                rows={3}
                placeholder="What action or remedy are you demanding?"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500/50 leading-relaxed font-sans"
              />
            </div>
          </div>
        </div>

        {/* Right Preview */}
        <div className="lg:col-span-7 space-y-4">
          <div className="glass-panel p-5 rounded-xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Live Legal Draft Preview</span>
              </div>

              {/* Action Toolbar */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{copied ? 'Copied' : 'Copy Text'}</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-medium border border-amber-500/40 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .txt</span>
                </button>
                <button
                  onClick={() => window.print()}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
                  title="Print Draft"
                >
                  <Printer className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Document Paper Container */}
            <div className="bg-slate-950 border border-slate-800/80 rounded-lg p-5 font-mono text-xs text-slate-300 leading-relaxed whitespace-pre-wrap max-h-[500px] overflow-y-auto shadow-inner">
              {generatedDraft}
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Standard statutory format conforming to relevant Indian legal provisions.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
