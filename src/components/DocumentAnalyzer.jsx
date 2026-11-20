import React, { useState } from 'react';
import { 
  FileText, Upload, Sparkles, AlertTriangle, CheckCircle, Clock, Shield, 
  Copy, Check, Volume2, Printer, ChevronRight, Scale, BookOpen, AlertOctagon, HelpCircle 
} from 'lucide-react';
import { SAMPLE_DOCUMENTS } from '../data/legalData';
import { analyzeLegalText } from '../utils/aiEngine';

export default function DocumentAnalyzer() {
  const [inputText, setInputText] = useState(SAMPLE_DOCUMENTS[0].content);
  const [analysisResult, setAnalysisResult] = useState(() => analyzeLegalText(SAMPLE_DOCUMENTS[0].content));
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleAnalyze = () => {
    if (!inputText.trim()) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      const res = analyzeLegalText(inputText);
      setAnalysisResult(res);
      setIsAnalyzing(false);
    }, 600);
  };

  const handleSelectSample = (sample) => {
    setInputText(sample.content);
    setIsAnalyzing(true);
    setTimeout(() => {
      const res = analyzeLegalText(sample.content);
      setAnalysisResult(res);
      setIsAnalyzing(false);
    }, 400);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      setInputText(text);
      setIsAnalyzing(true);
      setTimeout(() => {
        const res = analyzeLegalText(text);
        setAnalysisResult(res);
        setIsAnalyzing(false);
      }, 500);
    };
    reader.readAsText(file);
  };

  const handleCopySummary = () => {
    if (!analysisResult) return;
    const textToCopy = `[NyayaVani AI Legal Analysis]
Document Type: ${analysisResult.docType}
Risk Level: ${analysisResult.riskLevel} (Score: ${analysisResult.riskScore}/100)
Summary: ${analysisResult.simplifiedSummary}
Action Steps:
${analysisResult.nextSteps.map((s, i) => `${i + 1}. ${s}`).join('\n')}`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSpeech = () => {
    if (!window.speechSynthesis || !analysisResult) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(analysisResult.simplifiedSummary);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const getRiskColor = (level) => {
    if (level === 'Fraud / Scam Threat' || level === 'Critical') return 'text-rose-400 bg-rose-500/10 border-rose-500/30';
    if (level === 'High') return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
    if (level === 'Moderate') return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30';
    return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
  };

  return (
    <div className="space-y-8">
      {/* Module Title */}
      <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-white font-serif flex items-center gap-2">
            <FileText className="w-6 h-6 text-amber-400" />
            <span>AI Legal Document & Notice Analyzer</span>
          </h2>
          <p className="text-xs text-slate-400">
            Paste or upload any legal notice, contract, court summons, or police FIR to decode legalese into actionable guidance.
          </p>
        </div>

        {/* Preset Sample Selector Buttons */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] text-slate-400 font-medium mr-1">Try Pre-Loaded Sample:</span>
          {SAMPLE_DOCUMENTS.map((s) => (
            <button
              key={s.id}
              onClick={() => handleSelectSample(s)}
              className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 hover:border-amber-500/40 transition-colors"
            >
              {s.title.split(':')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Input Panel */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-panel p-4 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                <span>Input Document Text or Upload</span>
              </label>
              
              <label className="cursor-pointer text-xs font-medium text-amber-400 hover:text-amber-300 flex items-center gap-1 bg-amber-400/10 px-2.5 py-1 rounded-lg border border-amber-400/20">
                <Upload className="w-3.5 h-3.5" />
                <span>Upload File (PDF/TXT)</span>
                <input 
                  type="file" 
                  accept=".txt,.pdf,.doc,.docx" 
                  onChange={handleFileUpload}
                  className="hidden" 
                />
              </label>
            </div>

            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste full text of legal notice, demand letter, FIR, or contract here..."
              rows={16}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-slate-200 font-mono leading-relaxed focus:outline-none focus:border-amber-500/50 resize-y"
            />

            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-slate-400">
                {inputText.length} characters • {inputText.split(/\s+/).filter(Boolean).length} words
              </span>
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing || !inputText.trim()}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 disabled:opacity-50 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isAnalyzing ? 'Analyzing Legalese...' : 'Analyze Document'}</span>
              </button>
            </div>
          </div>

          {/* Quick Notice Tip Card */}
          <div className="bg-slate-900/50 border border-slate-800 p-3.5 rounded-xl text-xs space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-[11px]">
              <HelpCircle className="w-4 h-4" />
              <span>Did you know?</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-normal">
              Receiving a legal notice does NOT mean you are guilty or under arrest. Under Indian law, a notice is simply a formal assertion of claims giving you a statutory opportunity to reply or settle before a case can be admitted in court.
            </p>
          </div>
        </div>

        {/* Right Column: AI Analysis Report */}
        <div className="lg:col-span-7 space-y-5">
          {analysisResult ? (
            <div className="space-y-5">
              {/* Status Header Card */}
              <div className="glass-panel p-5 rounded-xl border border-slate-800 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                  <div>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                      Identified Document Type
                    </span>
                    <h3 className="text-base font-bold text-white font-serif">
                      {analysisResult.docType}
                    </h3>
                  </div>

                  {/* Risk Badge */}
                  <div className={`px-3 py-1.5 rounded-lg border font-semibold text-xs flex items-center gap-2 ${getRiskColor(analysisResult.riskLevel)}`}>
                    <AlertTriangle className="w-4 h-4" />
                    <span>Risk Level: {analysisResult.riskLevel}</span>
                    <span className="text-[10px] opacity-80">({analysisResult.riskScore}/100)</span>
                  </div>
                </div>

                {/* Risk Meter Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>Legal Vulnerability & Urgency Meter</span>
                    <span className="font-semibold text-amber-400">{analysisResult.riskScore}% Severity</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-700 ${
                        analysisResult.riskScore > 75 ? 'bg-gradient-to-r from-amber-500 to-rose-600' :
                        analysisResult.riskScore > 45 ? 'bg-gradient-to-r from-amber-400 to-amber-600' :
                        'bg-gradient-to-r from-emerald-400 to-emerald-600'
                      }`}
                      style={{ width: `${Math.max(analysisResult.riskScore, 10)}%` }}
                    />
                  </div>
                </div>

                {/* Plain Language Summary */}
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-amber-400 flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4" />
                      <span>Executive Plain-Language Breakdown</span>
                    </span>

                    {/* Speech / Audio read aloud button */}
                    <button
                      onClick={handleSpeech}
                      className={`flex items-center gap-1 text-[11px] px-2 py-1 rounded border transition-colors ${
                        isSpeaking 
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                          : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                      }`}
                      title="Read aloud in clear speech"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>{isSpeaking ? 'Pause Voice' : 'Listen'}</span>
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {analysisResult.simplifiedSummary}
                  </p>
                </div>

                {/* Action buttons toolbar */}
                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={handleCopySummary}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                    <span>{copied ? 'Copied Analysis!' : 'Copy Summary'}</span>
                  </button>

                  <button
                    onClick={() => window.print()}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5 text-slate-400" />
                    <span>Print / Save PDF</span>
                  </button>
                </div>
              </div>

              {/* Sections & Deadlines Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Detected Statutory Sections */}
                <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 uppercase tracking-wider">
                    <Scale className="w-4 h-4 text-amber-400" />
                    <span>Statutory Provisions Detected</span>
                  </div>

                  {analysisResult.detectedSections.length > 0 ? (
                    <div className="space-y-2">
                      {analysisResult.detectedSections.map((sec, idx) => (
                        <div key={idx} className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/80">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-amber-300">{sec.section}</span>
                            <span className="text-[10px] text-slate-400">{sec.act}</span>
                          </div>
                          <p className="text-[11px] text-slate-300 mt-1">{sec.desc}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-400 italic">No specific penal sections referenced in text.</p>
                  )}
                </div>

                {/* Deadlines & Timelines */}
                <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 uppercase tracking-wider">
                    <Clock className="w-4 h-4 text-rose-400" />
                    <span>Deadlines & Limitations</span>
                  </div>

                  {analysisResult.deadlines.length > 0 ? (
                    <div className="space-y-2">
                      {analysisResult.deadlines.map((dl, idx) => (
                        <div key={idx} className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/80">
                          <span className="text-xs font-bold text-rose-300">{dl.period}</span>
                          <p className="text-[11px] text-slate-300 mt-1">{dl.meaning}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-400 italic">Standard statutory reply timeline applies (15 to 30 days).</p>
                  )}
                </div>
              </div>

              {/* Action Plan Checklist */}
              <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 uppercase tracking-wider">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Recommended Citizen Action Plan</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">Prioritized Sequence</span>
                </div>

                <div className="space-y-2">
                  {analysisResult.nextSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-xs text-slate-200 leading-normal">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Jargon Decoded Glossary */}
              <div className="glass-panel p-4 rounded-xl border border-slate-800 space-y-3">
                <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  <span>Jargon Decoded for Common Citizens</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {analysisResult.jargonDecoded.map((j, idx) => (
                    <div key={idx} className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 text-xs space-y-1">
                      <span className="font-semibold text-amber-300">{j.term}</span>
                      <p className="text-[11px] text-slate-400 leading-normal">{j.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="glass-panel p-12 rounded-xl text-center space-y-3">
              <FileText className="w-10 h-10 text-slate-600 mx-auto" />
              <p className="text-sm text-slate-400 font-medium">Paste legal text or select a sample on the left to begin analysis.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
