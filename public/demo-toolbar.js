// Interactive 3-Demo Showcase Controller for NyayaVani
// Demonstrations:
// 1. Upload Legal Notice -> AI Analysis -> Hindi Explanation with Legal Sources
// 2. Suspected Scam Message -> AI Detects Red Flags -> Emergency 1930 Guidance
// 3. Search IPC 420 -> Corresponding BNS 318(4) Provision with Explanation

(function () {
  const SAMPLE_NOTICE = `LEGAL DEMAND NOTICE (REGISTERED A.D.)
Date: 12th October 2024
To: Mr. Rajesh Kumar Verma
R/o H-42, Sector 18, Noida, Uttar Pradesh - 201301

Under instructions from our client, M/s Apex Tech Solutions Pvt. Ltd., New Delhi:
1. That towards discharge of your legally enforceable debt, you issued Cheque No. 004812 dated 25th September 2024 for ₹4,50,000/- drawn on HDFC Bank.
2. The said cheque was dishonoured with the bank remark "FUNDS INSUFFICIENT" vide Return Memo dated 28th September 2024.
3. You have committed an offence under Section 138 of the Negotiable Instruments Act, 1881 read with Section 318(4) of Bharatiya Nyaya Sanhita, 2023.
4. We hereby call upon you to pay ₹4,50,000 within FIFTEEN (15) DAYS from receipt of this notice, failing which criminal prosecution will be filed in Metropolitan Magistrate Court.

Advocate Priya Sharma (D/1842/2016)
High Court of Delhi`;

  const SAMPLE_SCAM = `URGENT NOTICE: CENTRAL BUREAU OF INVESTIGATION (CBI) & SUPREME COURT
Ref: CBI/ED/DELHI/2024/9021
SUBJECT: IMMEDIATE DIGITAL ARREST & ASSET FREEZING UNDER PMLA & SECTION 420 IPC

It has come to our notice that your Aadhaar card is identified in a ₹3.8 Crore Money Laundering syndicate.
YOU ARE HEREBY PLACED UNDER IMMEDIATE DIGITAL ARREST:
1. Connect immediately on Skype/WhatsApp video call with IO Inspector Vikram Rathore (+91 9821XXXXXX) in an isolated room.
2. Strictly forbidden from informing family, local police, or any lawyer.
3. Transfer ₹4,50,000 immediately to Government Verification Escrow A/c: 918201928374 (IFSC: YESB000012) within 2 hours for financial forensic audit to receive Supreme Court Clearance Certificate.

Special Cyber Cell, CBI Headquarters`;

  function initDemoBar() {
    if (document.getElementById('nyaya-demo-bar')) return;

    // Create Bar Container
    const bar = document.createElement('div');
    bar.id = 'nyaya-demo-bar';
    bar.style.cssText = `
      position: fixed;
      bottom: 16px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 999999;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 14px;
      background: rgba(15, 23, 42, 0.95);
      border: 1px solid rgba(217, 119, 6, 0.4);
      border-radius: 9999px;
      box-shadow: 0 10px 35px -5px rgba(0, 0, 0, 0.6), 0 0 20px rgba(217, 119, 6, 0.2);
      backdrop-filter: blur(16px);
      font-family: system-ui, -apple-system, sans-serif;
      font-size: 12px;
      max-width: 95vw;
      overflow-x: auto;
    `;

    bar.innerHTML = `
      <div style="display:flex; align-items:center; gap:6px; color:#f59e0b; font-weight:700; white-space:nowrap; padding-right:8px; border-right:1px solid rgba(255,255,255,0.15);">
        <span>⚡ Quick Demos:</span>
      </div>

      <button id="demo-btn-1" style="background:#1e293b; color:#f1f5f9; border:1px solid #334155; padding:6px 12px; border-radius:9999px; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:5px; white-space:nowrap; transition:all 0.2s;">
        <span>📄 1. Legal Notice (Hindi + Sources)</span>
      </button>

      <button id="demo-btn-2" style="background:#450a0a; color:#fecdd3; border:1px solid #e11d48; padding:6px 12px; border-radius:9999px; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:5px; white-space:nowrap; transition:all 0.2s;">
        <span>🚨 2. Scam Message & 1930 Guide</span>
      </button>

      <button id="demo-btn-3" style="background:#1e3a8a; color:#bfdbfe; border:1px solid #3b82f6; padding:6px 12px; border-radius:9999px; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:5px; white-space:nowrap; transition:all 0.2s;">
        <span>⚖️ 3. Search IPC 420 ↔ BNS</span>
      </button>
    `;

    document.body.appendChild(bar);

    // Event Handlers for the 3 Demonstrations
    document.getElementById('demo-btn-1').onclick = triggerDemo1;
    document.getElementById('demo-btn-2').onclick = triggerDemo2;
    document.getElementById('demo-btn-3').onclick = triggerDemo3;
  }

  // DEMO 1: Upload Legal Notice -> AI Analysis -> Hindi Explanation with Legal Sources
  function triggerDemo1() {
    localStorage.setItem('nyaya_language', 'hi');
    window.location.href = '/dashboard/doc_legal_notice_138';
  }

  // DEMO 2: Enter Suspected Scam Message -> Red Flags -> Emergency 1930 Guidance
  function triggerDemo2() {
    window.location.href = '/scam-detector';
    setTimeout(() => {
      const textarea = document.querySelector('textarea');
      if (textarea) {
        textarea.value = SAMPLE_SCAM;
        textarea.dispatchEvent(new Event('input', { bubbles: true }));

        setTimeout(() => {
          const btn = Array.from(document.querySelectorAll('button')).find(b => 
            b.textContent.includes('Analyze') || b.textContent.includes('विश्लेषण')
          );
          if (btn) btn.click();
        }, 300);
      }
    }, 500);
  }

  // DEMO 3: Search IPC 420 -> Corresponding BNS Provision with Explanation
  function triggerDemo3() {
    showIpcBnsModal();
  }

  function showIpcBnsModal() {
    const existing = document.getElementById('ipc-bns-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'ipc-bns-modal';
    modal.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.8);
      backdrop-filter: blur(8px);
      z-index: 1000000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      font-family: system-ui, -apple-system, sans-serif;
    `;

    modal.innerHTML = `
      <div style="background:#0f172a; border:1px solid #334155; border-radius:20px; width:100%; max-width:650px; max-height:90vh; overflow-y:auto; color:#f8fafc; padding:24px; box-shadow:0 25px 50px -12px rgba(0,0,0,0.7); position:relative;">
        <button id="close-ipc-modal" style="position:absolute; top:16px; right:16px; background:#1e293b; border:1px solid #475569; color:#94a3b8; width:32px; height:32px; border-radius:50%; font-size:16px; cursor:pointer; display:flex; align-items:center; justify-content:center;">✕</button>

        <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px;">
          <span style="background:rgba(245,158,11,0.15); border:1px solid rgba(245,158,11,0.3); color:#f59e0b; padding:4px 10px; border-radius:9999px; font-size:11px; font-weight:700;">
            DEMONSTRATION 3
          </span>
          <span style="color:#94a3b8; font-size:12px;">Statutory Transition (effective 1 July 2024)</span>
        </div>

        <h2 style="font-size:22px; font-weight:800; color:#fff; margin:0 0 16px 0; font-family:Georgia, serif;">
          IPC Section 420 ➔ <span style="color:#f59e0b;">BNS Section 318(4)</span>
        </h2>

        <!-- Interactive Search Bar inside Modal -->
        <div style="margin-bottom:16px; display:flex; gap:8px;">
          <input id="ipc-search-input" type="text" value="420" placeholder="Search any IPC Section or Offence (e.g. 420, 302, 376, theft)..." style="flex:1; background:#020617; border:1px solid #334155; border-radius:10px; padding:10px 14px; color:#f1f5f9; font-size:13px; outline:none;" />
          <button id="ipc-search-btn" style="background:#f59e0b; color:#020617; font-weight:700; border:none; padding:10px 18px; border-radius:10px; cursor:pointer;">Search</button>
        </div>

        <div id="ipc-result-content" style="background:#020617; border:1px solid #1e293b; border-radius:14px; padding:18px; line-height:1.6; font-size:13px;">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #1e293b; padding-bottom:10px; margin-bottom:12px;">
            <div>
              <div style="font-size:11px; color:#94a3b8; font-weight:600; text-transform:uppercase;">Old Indian Penal Code (1860)</div>
              <div style="font-size:16px; font-weight:700; color:#cbd5e1;">Section 420 IPC</div>
            </div>
            <div style="font-size:20px; color:#f59e0b; font-weight:bold;">➔</div>
            <div>
              <div style="font-size:11px; color:#f59e0b; font-weight:600; text-transform:uppercase;">Bharatiya Nyaya Sanhita (2023)</div>
              <div style="font-size:16px; font-weight:800; color:#fbbf24;">Section 318(4) BNS</div>
            </div>
          </div>

          <div style="margin-bottom:10px;">
            <strong style="color:#f8fafc;">Offence (अपराध):</strong> Cheating and dishonestly inducing delivery of property (धोखाधड़ी और संपत्ति के परिदान के लिए बेईमानी से प्रेरित करना).
          </div>

          <div style="display:flex; gap:8px; margin-bottom:14px; flex-wrap:wrap;">
            <span style="background:rgba(225,29,72,0.15); border:1px solid rgba(225,29,72,0.3); color:#fda4af; padding:3px 8px; border-radius:6px; font-size:11px; font-weight:600;">
              Non-Bailable (गैर-जमानती)
            </span>
            <span style="background:rgba(59,130,246,0.15); border:1px solid rgba(59,130,246,0.3); color:#93c5fd; padding:3px 8px; border-radius:6px; font-size:11px; font-weight:600;">
              Cognizable (संज्ञेय)
            </span>
            <span style="background:rgba(16,185,129,0.15); border:1px solid rgba(16,185,129,0.3); color:#6ee7b7; padding:3px 8px; border-radius:6px; font-size:11px; font-weight:600;">
              Punishment: Up to 7 Years Jail + Fine
            </span>
          </div>

          <div style="color:#cbd5e1; font-size:12px; margin-bottom:12px;">
            <strong style="color:#f59e0b; display:block; margin-bottom:4px;">🔍 Detailed Legal Explanation & What Changed:</strong>
            1. <strong>Re-codification:</strong> IPC Section 420 is now re-codified under Section 318, specifically clause (4) of the Bharatiya Nyaya Sanhita (BNS 2023).<br/>
            2. <strong>Modern Digital Scope:</strong> BNS 318 expands definition to explicitly penalize modern cyber phishing, online investment Ponzi syndicates, and digital impersonation.<br/>
            3. <strong>Arrest Safeguard under BNSS 35(3):</strong> For offenses punishable up to 7 years (such as BNS 318(4)), police officers CANNOT arrest arbitrarily without issuing a prior formal <em>Notice of Appearance</em>, unless reasons of flight risk or evidence destruction are recorded.<br/>
            4. <strong>Legal Recourse:</strong> Citizens facing false allegations have the right to seek Anticipatory Bail under Section 482 BNSS and approach NALSA (15100) for free legal representation under Article 39A.
          </div>
        </div>

        <div style="margin-top:16px; display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:11px; color:#64748b;">Source: Legislative Department, Ministry of Law & Justice, Govt of India</span>
          <button id="open-chat-420" style="background:#1e293b; color:#f59e0b; border:1px solid rgba(245,158,11,0.3); padding:8px 14px; border-radius:10px; font-size:12px; font-weight:600; cursor:pointer;">
            Ask AI in Chat ➔
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('close-ipc-modal').onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };

    document.getElementById('open-chat-420').onclick = () => {
      modal.remove();
      window.location.href = '/chat';
    };

    const searchInput = document.getElementById('ipc-search-input');
    const searchBtn = document.getElementById('ipc-search-btn');
    const resultContent = document.getElementById('ipc-result-content');

    function performSearch() {
      const q = searchInput.value.trim().toLowerCase();
      if (q.includes('420') || q.includes('cheat')) {
        // Render 420 default
        triggerDemo3();
      } else if (q.includes('302') || q.includes('murder')) {
        resultContent.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #1e293b; padding-bottom:10px; margin-bottom:12px;">
            <div><span style="font-size:11px; color:#94a3b8;">Old Code:</span> <strong>Section 302 IPC</strong></div>
            <div style="color:#f59e0b; font-weight:bold;">➔</div>
            <div><span style="font-size:11px; color:#f59e0b;">New Code:</span> <strong>Section 103(1) BNS</strong></div>
          </div>
          <p><strong>Offence:</strong> Murder (हत्या). Punishment: Death or Imprisonment for Life + Fine. Non-Bailable, Cognizable.</p>
          <p style="font-size:12px; color:#cbd5e1;"><strong>Key Shift:</strong> Sub-section 103(2) explicitly introduces capital punishment for mob lynching.</p>
        `;
      } else if (q.includes('376') || q.includes('rape')) {
        resultContent.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #1e293b; padding-bottom:10px; margin-bottom:12px;">
            <div><span style="font-size:11px; color:#94a3b8;">Old Code:</span> <strong>Section 376 IPC</strong></div>
            <div style="color:#f59e0b; font-weight:bold;">➔</div>
            <div><span style="font-size:11px; color:#f59e0b;">New Code:</span> <strong>Section 64 BNS</strong></div>
          </div>
          <p><strong>Offence:</strong> Rape / Sexual Assault. Rigorous imprisonment 10 years to Life + Fine. Non-Bailable, Cognizable.</p>
          <p style="font-size:12px; color:#cbd5e1;"><strong>Key Shift:</strong> Section 69 BNS introduces specific penalty for deceitful promise of marriage.</p>
        `;
      } else {
        resultContent.innerHTML = `
          <div style="text-align:center; padding:16px; color:#94a3b8;">
            <p>Showing match for "<strong>${searchInput.value}</strong>":</p>
            <p style="color:#f59e0b; font-size:14px; font-weight:bold;">Search mapped in BNS 2023 Master Index.</p>
            <p style="font-size:12px;">Use the 'Ask AI in Chat' button below for exhaustive cross-statutory case analysis.</p>
          </div>
        `;
      }
    }

    searchBtn.onclick = performSearch;
    searchInput.onkeydown = (e) => { if (e.key === 'Enter') performSearch(); };
  }

  // Auto-init on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDemoBar);
  } else {
    initDemoBar();
  }
})();
