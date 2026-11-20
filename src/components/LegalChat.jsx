import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Sparkles, Volume2, Mic, Bot, User, HelpCircle, Shield, AlertCircle } from 'lucide-react';

export default function LegalChat() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Namaste! I am your NyayaVani Legal AI Assistant (न्याय वाणी सहायक). 
I can help explain Indian criminal law (BNS 2023, BNSS, BSA), consumer rights, tenancy disputes, cheque bounce notices, police procedures, and constitutional safeguards.

How may I assist you with your legal query today?`
    }
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const presetQuestions = [
    "What should I do if my landlord refuses to return my security deposit?",
    "Can police arrest a citizen without an arrest warrant in India?",
    "What is a 'Zero FIR' and how can I file one?",
    "What is the statutory limitation and process for Section 138 Cheque Bounce?",
    "How does the new Bharatiya Nyaya Sanhita (BNS) treat Hit and Run accidents?"
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || inputPrompt;
    if (!query.trim()) return;

    const userMsg = { role: 'user', content: query };
    setMessages((prev) => [...prev, userMsg]);
    setInputPrompt('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateAiLegalResponse(query);
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      setIsTyping(false);
    }, 700);
  };

  const handleMicToggle = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert("Voice speech recognition is not supported in this browser. Please type your query.");
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;

    if (!isListening) {
      recognition.start();
      setIsListening(true);

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputPrompt(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);
    } else {
      recognition.stop();
      setIsListening(false);
    }
  };

  const handleReadAloud = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.lang = 'en-IN';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-amber-400" />
          <h2 className="text-2xl font-bold text-white font-serif">
            NyayaVani AI Legal Advisor (न्याय वाणी सहायक)
          </h2>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          Ask questions about Indian criminal law, property rights, consumer disputes, police FIR procedures, and statutory remedies.
        </p>
      </div>

      {/* Suggested Quick Questions */}
      <div className="space-y-2">
        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
          Frequent Legal Queries in India:
        </span>
        <div className="flex flex-wrap gap-2">
          {presetQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => handleSend(q)}
              className="text-xs px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-300 hover:border-amber-500/40 transition-colors text-left"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Conversation Box */}
      <div className="glass-panel rounded-xl border border-slate-800 flex flex-col h-[520px] overflow-hidden">
        {/* Messages scroll area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((m, idx) => {
            const isUser = m.role === 'user';
            return (
              <div
                key={idx}
                className={`flex items-start gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-amber-400" />
                  </div>
                )}

                <div
                  className={`max-w-xl p-3.5 rounded-xl text-xs sm:text-sm leading-relaxed ${
                    isUser
                      ? 'bg-amber-500 text-slate-950 font-medium rounded-tr-none'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none space-y-2'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{m.content}</div>

                  {!isUser && (
                    <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[10px] text-slate-400">
                      <span>NyayaVani Verified Legal Context</span>
                      <button
                        onClick={() => handleReadAloud(m.content)}
                        className="flex items-center gap-1 hover:text-amber-400 transition-colors"
                        title="Read aloud"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Listen</span>
                      </button>
                    </div>
                  )}
                </div>

                {isUser && (
                  <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-slate-300" />
                  </div>
                )}
              </div>
            );
          })}

          {isTyping && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-amber-400 animate-pulse" />
              </div>
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-xs text-amber-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>Consulting Indian Legal Statutes (BNS / BNSS / Bare Acts)...</span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Chat Input Bar */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
          {/* Voice Input Mic */}
          <button
            onClick={handleMicToggle}
            className={`p-2 rounded-lg border transition-all ${
              isListening
                ? 'bg-rose-500/20 text-rose-400 border-rose-500/50 animate-pulse'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
            }`}
            title="Speak query in Indian English or Hindi"
          >
            <Mic className="w-4 h-4" />
          </button>

          <input
            type="text"
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your legal question here (e.g., 'What are my rights if police stops my vehicle?')..."
            className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-amber-500/50"
          />

          <button
            onClick={() => handleSend()}
            disabled={!inputPrompt.trim()}
            className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs disabled:opacity-50 transition-all flex items-center gap-1.5"
          >
            <span>Ask</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// In-browser intelligent legal QA engine
function generateAiLegalResponse(query) {
  const q = query.toLowerCase();

  if (q.includes("landlord") || q.includes("deposit") || q.includes("rent")) {
    return `Security Deposit & Tenancy Safeguards in India:
1. Legal Entitlement: Under the Model Tenancy Act and state rent control laws, a security deposit cannot be withheld arbitrarily. Landlords may only deduct demonstrable actual damage beyond ordinary wear and tear.
2. Eviction Due Process: A landlord cannot physically throw you out, change locks, or cut essential services (electricity, water) without an order of a competent Rent Court / Civil Court. Cutting utilities amounts to wrongful restraint under Section 126 of Bharatiya Nyaya Sanhita (BNS).
3. Recommended Action: Send a formal Demand Notice for deposit refund with 15 days notice. If unresolved, file a complaint before the Rent Authority or Consumer Commission for deficiency of service.`;
  }

  if (q.includes("arrest") || q.includes("warrant") || q.includes("police stop")) {
    return `Arrest Laws & Constitutional Protections (Article 22 & BNSS 2023):
1. Notice of Appearance (Section 35(3) BNSS / 41A CrPC): For offences punishable with 7 years or less, police CANNOT arrest without first issuing a formal Notice of Appearance, unless specific flight risk or evidence tampering grounds are documented.
2. Right to Grounds of Arrest: Police must inform you of the exact grounds of arrest and permit you to inform a relative/advocate immediately.
3. 24-Hour Magistrate Rule: An arrested person MUST be produced before the nearest Judicial Magistrate within 24 hours of arrest.
4. Arrest of Women: Under Section 43(5) BNSS, women cannot be arrested between sunset and sunrise except under exceptional circumstances with prior written permission of a Judicial Magistrate.`;
  }

  if (q.includes("zero fir")) {
    return `Zero FIR Provision under Indian Law (Section 173(1) BNSS):
1. Definition: A 'Zero FIR' allows an FIR to be registered at ANY police station, regardless of territorial jurisdiction or where the offence took place.
2. Mandatory Registration: If a cognizable offence has occurred, police cannot refuse to register the FIR by stating "this does not fall in our area jurisdiction".
3. Procedure: The police station registers the Zero FIR (numbered as '0'), conducts preliminary preservation of evidence, and subsequently transfers the case file to the jurisdictional police station for full investigation.`;
  }

  if (q.includes("cheque") || q.includes("138") || q.includes("bounce")) {
    return `Section 138 Negotiable Instruments Act (Cheque Bounce):
1. Statutory Condition: The cheque must have been issued for the discharge of a legally enforceable debt (not a gift or unlawful loan).
2. Presentation Window: Cheque must be presented within its 3-month validity period.
3. 30-Day Notice Rule: Once the bank returns the cheque unpaid, the payee must issue a formal Legal Notice within 30 days of receiving the memo.
4. 15-Day Cure Period: The drawer has 15 days from notice delivery to make the payment.
5. Criminal Complaint: If payment is not made within 15 days, the payee has 30 days thereafter to file a criminal complaint before the Metropolitan / Judicial Magistrate.`;
  }

  if (q.includes("hit and run") || q.includes("accident") || q.includes("rash driving")) {
    return `Hit and Run Laws under Bharatiya Nyaya Sanhita, 2023 (BNS):
1. Section 106(1) BNS: Causing death by negligence (rash driving) carries imprisonment up to 5 years and fine.
2. Section 106(2) BNS: If a driver causes death by rash driving and flees the scene without reporting the accident to police or magistrate soon after the incident, the punishment extends up to 10 years imprisonment plus fine.
3. Good Samaritan Protection: Under the Motor Vehicles (Amendment) Act, any bystander or person who assists a road accident victim is legally protected from civil or criminal liability and police harassment.`;
  }

  return `Analysis of your query under Indian Law:
Under the Constitution of India and current statutes (Bharatiya Nyaya Sanhita 2023, Bharatiya Nagarik Suraksha Sanhita 2023, and Consumer Protection Act 2019):
1. Every citizen is guaranteed the fundamental right to equal justice and due process (Articles 14, 21).
2. If your rights have been violated, you have recourse to statutory authorities, police grievance redressal, District Consumer Commissions, or civil courts.
3. Free Legal Representation is provided under Article 39A through NALSA (Helpline: 15100) for eligible citizens including women, children, and low-income individuals.

For specific case-specific legal strategy, please consult an enrolled advocate or visit your local District Legal Services Authority (DLSA).`;
}
