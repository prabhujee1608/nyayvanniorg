# NyayaVani (न्याय वाणी) — AI-Powered Legal Assistant for Bharat 🇮🇳

NyayaVani is a modern, responsive, multilingual AI legal intelligence platform modeled after **[nyaya-vanni.vercel.app](https://nyaya-vanni.vercel.app/)** and tailored specifically for the Indian legal ecosystem. It helps everyday citizens, advocates, and students decode complex legal documents into plain, understandable language, detect cyber extortion scams, cross-reference criminal statutes between the old IPC and the new Bharatiya Nyaya Sanhita (BNS 2023), generate automated legal drafts, and access 24x7 emergency helplines.

---

## 🌟 Core Features

### 1. 📄 AI Legal Document & Notice Analyzer
- **Multimodal Ingestion**: Paste or upload legal notices, agreements, court summons, and police FIRs.
- **Pre-Loaded Sample Documents**: Test 1-click analysis for Cheque Bounce u/s 138 NI Act, Tenancy Eviction Notices, and BNS Police FIRs.
- **Executive Plain-Language Summary**: Translates convoluted legalese into accessible terms.
- **Vulnerability & Urgency Risk Meter**: Dynamic visual score from 0 to 100%.
- **Statutory Provisions Extracted**: Maps relevant acts (BNS 2023, BNSS 2023, NI Act 1881, Consumer Protection Act 2019, IT Act 2000).
- **Deadlines & Limitations Clock**: Flags critical response windows (e.g., 15-day cheque bounce cure window).
- **Citizen Action Plan**: Step-by-step checklist of immediate safeguards.
- **Jargon Decoder & Audio Readout**: Plain definitions and speech synthesis (audio read-aloud).

### 2. 🚨 Scam & "Digital Arrest" Verifier
- **Digital Arrest Counter-Intelligence**: Indian law has **no concept of "Digital Arrest"**. This module alerts citizens to fake CBI, ED, and Supreme Court video call warrants.
- **Scam Probability Meter**: Calculates extortion likelihood and highlights red flags (threats of video calls, non-government bank escrow demands, artificial urgency).
- **Golden Hour Defense**: Immediate guidance to dial **1930** (National Cyber Crime Helpline) and file complaints on `cybercrime.gov.in`.

### 3. ⚖️ Interactive IPC ↔ BNS 2023 Code Converter
- Search by old IPC section (e.g. 420, 302, 498A, 379), new BNS section (318, 103, 85, 303), or crime name (cheating, murder, theft, defamation, snatching).
- Full legal breakdown: Offence title, Cognizable vs Non-cognizable, Bailable vs Non-bailable, prescribed punishments, and a summary of what changed in the new laws effective July 1, 2024.

### 4. ✍️ Automated Legal Drafter
- Generates legally formatted documents:
  - **RTI Application** under Section 6(1) of the Right to Information Act, 2005.
  - **Reply to Section 138 NI Act Demand Notice** for cheque dishonour.
  - **Consumer Forum Complaint** under Section 35 of the Consumer Protection Act, 2019.
- Live preview, 1-click text copy, print layout, and `.txt` export.

### 5. 🔄 Document Version Diff Analyzer
- Compares original contract drafts against revised drafts (e.g. lease agreements or employment contracts).
- Spotlights hidden liabilities, unfair notice periods, arbitrary penalties, and deposit forfeiture terms.

### 6. 🤖 NyayaVani AI Legal Advisor (Chatbot)
- Conversational assistant with voice recognition (speech-to-text mic) and text-to-speech voice playback.
- Pre-loaded prompt chips for frequent questions: landlord deposit disputes, arrest without warrant, Zero FIR registration, and hit-and-run laws.

### 7. 🏛️ Citizen Rights & 24x7 Helplines Hub
- One-touch emergency dialers:
  - **1930**: National Cyber Crime Reporting
  - **15100**: NALSA Free Legal Aid (Article 39A free government advocate)
  - **112**: Unified Emergency (Police, Ambulance, Fire)
  - **181**: Women in Distress Helpline
  - **1915**: National Consumer Helpline
  - **1098**: Childline India
- Essential Fundamental Rights cheat-sheet (Articles 21, 22, 39A, Section 35(3) BNSS, Section 43(5) BNSS).

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite 6, Tailwind CSS
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans, Merriweather Serif
- **Deployment Ready**: Optimized production bundle for Vercel, Netlify, or any static hosting.

---

## 🚀 How to Run Locally

1. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your web browser.

2. **Build for Production**:
   ```bash
   npm run build
   ```

3. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deploy to Vercel

To deploy your own instance to Vercel (just like `nyaya-vanni.vercel.app`):
```bash
npx vercel
```
Or push this repository to GitHub and import it into the [Vercel Dashboard](https://vercel.com).
