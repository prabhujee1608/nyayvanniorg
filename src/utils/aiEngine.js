// Client-side AI Legal Intelligence & Analysis Engine for NyayaVani

export function analyzeLegalText(text) {
  if (!text || text.trim().length === 0) {
    return null;
  }

  const lower = text.toLowerCase();
  
  // 1. Detect Document Type
  let docType = "General Legal Notice / Document";
  let confidence = 85;
  
  if (lower.includes("digital arrest") || (lower.includes("skype") && lower.includes("cbi")) || lower.includes("supreme court clearance certificate")) {
    docType = "High-Risk Fraud / Digital Arrest Scam Notice";
    confidence = 99;
  } else if (lower.includes("138") || (lower.includes("cheque") && lower.includes("insufficient"))) {
    docType = "Section 138 NI Act: Cheque Dishonour Notice";
    confidence = 96;
  } else if (lower.includes("first information report") || lower.includes("fir no") || lower.includes("bnss") || lower.includes("police station")) {
    docType = "Police First Information Report (FIR)";
    confidence = 94;
  } else if (lower.includes("eviction") || (lower.includes("tenant") && lower.includes("vacate"))) {
    docType = "Tenancy Termination & Eviction Notice";
    confidence = 92;
  } else if (lower.includes("employment") || lower.includes("non-compete") || lower.includes("liquidated damages")) {
    docType = "Employment Agreement / Restrictive Covenant";
    confidence = 90;
  } else if (lower.includes("consumer") || lower.includes("deficiency of service") || lower.includes("unfair trade")) {
    docType = "Consumer Protection Grievance / Notice";
    confidence = 91;
  } else if (lower.includes("summons") || lower.includes("metropolitan magistrate") || lower.includes("court of")) {
    docType = "Judicial Court Summons / Warrant";
    confidence = 93;
  }

  // 2. Risk Evaluation
  let riskLevel = "Moderate";
  let riskScore = 45; // 0 to 100
  let riskFactors = [];

  if (lower.includes("digital arrest") || lower.includes("transfer") && lower.includes("escrow") || lower.includes("isolated room")) {
    riskLevel = "Fraud / Scam Threat";
    riskScore = 99;
    riskFactors.push("Attempts psychological coercion via fabricated 'Digital Arrest'");
    riskFactors.push("Demands immediate financial transfer to non-government bank account");
    riskFactors.push("Prohibits contact with family, lawyers, or local police station");
  } else if (lower.includes("criminal prosecution") || lower.includes("imprisonment") || lower.includes("warrant") || lower.includes("arrest")) {
    riskLevel = "High";
    riskScore = 80;
    riskFactors.push("Criminal prosecution or coercive action explicitly threatened");
    riskFactors.push("Potential liability involving magistrate court proceedings");
  } else if (lower.includes("forfeit") || lower.includes("penalty") || lower.includes("terminate") || lower.includes("disconnect")) {
    riskLevel = "Moderate";
    riskScore = 60;
    riskFactors.push("Threat of unilateral security deposit forfeiture or utility disconnection");
    riskFactors.push("Financial loss or adverse contractual liability");
  } else {
    riskLevel = "Low";
    riskScore = 25;
    riskFactors.push("Standard legal correspondence requiring routine response or filing");
  }

  // 3. Extracted Statutory Sections
  const detectedSections = [];
  if (lower.includes("138")) detectedSections.push({ act: "Negotiable Instruments Act, 1881", section: "Section 138", desc: "Dishonour of cheque for insufficiency of funds in accounts." });
  if (lower.includes("420")) detectedSections.push({ act: "Indian Penal Code (IPC)", section: "Section 420", desc: "Cheating and dishonestly inducing delivery of property (now Section 318(4) BNS)." });
  if (lower.includes("318")) detectedSections.push({ act: "Bharatiya Nyaya Sanhita, 2023 (BNS)", section: "Section 318(4)", desc: "New criminal code provision for Cheating and Fraud." });
  if (lower.includes("316")) detectedSections.push({ act: "Bharatiya Nyaya Sanhita, 2023 (BNS)", section: "Section 316(2)", desc: "Criminal Breach of Trust (formerly Section 406 IPC)." });
  if (lower.includes("173") && lower.includes("bnss")) detectedSections.push({ act: "Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)", section: "Section 173", desc: "Procedure for registration of First Information Report (replaces Sec 154 CrPC)." });
  if (lower.includes("66d") || lower.includes("information technology")) detectedSections.push({ act: "Information Technology Act, 2000", section: "Section 66D", desc: "Punishment for cheating by personation by using computer resource." });
  if (lower.includes("pmla") || lower.includes("money laundering")) detectedSections.push({ act: "Prevention of Money Laundering Act, 2002", section: "PMLA Sec 3 & 4", desc: "Offence of money laundering and attachment of proceeds of crime." });
  if (lower.includes("consumer protection") || lower.includes("deficiency")) detectedSections.push({ act: "Consumer Protection Act, 2019", section: "Section 35 / 38", desc: "Filing consumer dispute before District Consumer Commission." });

  // 4. Extracted Deadlines
  const deadlines = [];
  if (lower.includes("fifteen (15) days") || lower.includes("15 days")) {
    deadlines.push({ period: "15 Days", meaning: "Statutory cure period to make payment or reply before legal complaint can be filed." });
  } else if (lower.includes("seven (7) days") || lower.includes("7 days")) {
    deadlines.push({ period: "7 Days", meaning: "Short ultimatum issued by sender; check tenancy agreement validity." });
  } else if (lower.includes("30 days") || lower.includes("thirty (30) days")) {
    deadlines.push({ period: "30 Days", meaning: "Standard notice period or limitation window." });
  } else if (lower.includes("immediate") || lower.includes("2 hours") || lower.includes("tonight")) {
    deadlines.push({ period: "Immediate / 2 Hours", meaning: "Artificially manufactured urgency (often a classic hallmark of cyber extortion scams)." });
  } else {
    deadlines.push({ period: "Standard 15-30 Days", meaning: "Legal replies are generally tendered within 15 to 30 days of service." });
  }

  // 5. Plain Language Executive Summary
  let simplifiedSummary = "";
  if (riskLevel === "Fraud / Scam Threat") {
    simplifiedSummary = "CRITICAL FRAUD WARNING: This document is a FABRICATED SCAM. Indian legal authorities (CBI, ED, Cyber Crime, Police, Supreme Court) NEVER conduct trials, interrogations, or arrests via WhatsApp or Skype video calls, nor do they ever instruct citizens to send money to 'clearance accounts'. DO NOT pay any amount and DO NOT isolate yourself.";
  } else if (docType.includes("Cheque")) {
    simplifiedSummary = "This is a formal demand notice for a bounced bank cheque. The sender claims you owe money and that a cheque you issued was returned unpaid due to insufficient balance. Under Indian law, you have exactly 15 days from receiving this notice to clear the payment or dispute the debt, otherwise the complainant can file a criminal case in Magistrate court.";
  } else if (docType.includes("Eviction")) {
    simplifiedSummary = "Your landlord is attempting to terminate your rental tenancy and has threatened to forfeit your security deposit and cut basic utilities. Under Indian law (Transfer of Property Act and Model Tenancy guidelines), landlords cannot arbitrarily cut water/electricity or forcibly evict tenants without due process of law and proper court order.";
  } else if (docType.includes("FIR")) {
    simplifiedSummary = "A First Information Report (FIR) has been lodged with the police initiating a formal criminal investigation. The police have recorded specific allegations and booked sections under the Bharatiya Nyaya Sanhita (BNS) and IT Act. You have the right to obtain a certified copy and seek legal representation.";
  } else {
    simplifiedSummary = "This legal notice or document asserts claims or demands against the recipient. It sets forth specific allegations and establishes a timeline for response before formal court action or enforcement proceedings commence.";
  }

  // 6. Actionable Next Steps
  const nextSteps = [];
  if (riskLevel === "Fraud / Scam Threat") {
    nextSteps.push("Block the caller/sender immediately across WhatsApp, Skype, and phone.");
    nextSteps.push("Call National Cyber Crime Helpline at 1930 immediately to verify or report.");
    nextSteps.push("Lodge an online cyber fraud complaint at www.cybercrime.gov.in with screenshot evidence.");
    nextSteps.push("Do not transfer any funds or share OTPs, Aadhaar OTPs, or net banking passwords.");
  } else if (docType.includes("Cheque")) {
    nextSteps.push("Check your bank statement and verify if the cheque was genuinely issued and dishonoured.");
    nextSteps.push("If the debt is legitimate, tender payment within the 15-day statutory window via Demand Draft/NEFT and obtain written acknowledgment.");
    nextSteps.push("If the cheque was misused, lost, or given as security without enforceable debt, immediately draft and send a formal Legal Reply via registered post / speed post with AD.");
    nextSteps.push("Consult an advocate or your District Legal Services Authority (DLSA) for free representation if eligible under Article 39A.");
  } else if (docType.includes("Eviction")) {
    nextSteps.push("Review your original written Lease/Rent Agreement clauses regarding notice period and deposit refund.");
    nextSteps.push("Landlord cannot legally forfeit deposit without actual verifiable proof of damages beyond normal wear and tear.");
    nextSteps.push("Reply firmly pointing out that cutting utilities is illegal under Indian tenancy law and can attract police complaint for wrongful restraint.");
  } else {
    nextSteps.push("Preserve the original physical envelope/email with tracking number to prove date of delivery.");
    nextSteps.push("Gather all supporting receipts, WhatsApp communications, emails, and transaction histories.");
    nextSteps.push("Draft a point-by-point formal response addressing each allegation specifically.");
    nextSteps.push("Seek guidance through NALSA Helpline (15100) or an accredited advocate.");
  }

  // 7. Jargon Decoded
  const jargonDecoded = [
    { term: "Legally Enforceable Debt", explanation: "A genuine, valid monetary obligation recognized by law, not an illegal bet or expired time-barred claim." },
    { term: "Without Prejudice", explanation: "Means the statements made in this document cannot be used as an admission of fault against the sender in future court hearings." },
    { term: "Cognizable Offence", explanation: "A serious crime where police have the legal authority to register an FIR and arrest without an arrest warrant from a Magistrate." },
    { term: "Ex-Parte Order", explanation: "A legal decision made by a court when one party fails to appear after being served notice." },
    { term: "Liquidated Damages", explanation: "A pre-agreed financial penalty set in a contract; in India, courts only award reasonable actual loss rather than arbitrary extortionate penalties." }
  ];

  return {
    docType,
    confidence,
    riskLevel,
    riskScore,
    riskFactors,
    detectedSections,
    deadlines,
    simplifiedSummary,
    nextSteps,
    jargonDecoded,
    timestamp: new Date().toISOString()
  };
}

export function detectScamScore(text) {
  if (!text) return { score: 0, verdict: "No text provided", flags: [], recommendations: [] };

  const lower = text.toLowerCase();
  let score = 0;
  const flags = [];

  if (lower.includes("digital arrest")) {
    score += 50;
    flags.push("Mentions 'Digital Arrest' — A fabricated term not existing in Indian Law");
  }
  if (lower.includes("skype") || lower.includes("whatsapp video") || lower.includes("zoom call")) {
    score += 25;
    flags.push("Demands video call surveillance (CBI / Police never investigate via Skype)");
  }
  if (lower.includes("escrow") || lower.includes("verification account") || (lower.includes("transfer") && lower.includes("clearance"))) {
    score += 35;
    flags.push("Demands money transfer to 'clear' criminal charges or receive safety certificate");
  }
  if (lower.includes("isolated room") || lower.includes("do not tell") || lower.includes("strictly confidential")) {
    score += 20;
    flags.push("Psychological isolation tactic: forbids talking to family or lawyer");
  }
  if (lower.includes("2 hours") || lower.includes("immediate disconnection") || lower.includes("tonight 9:30")) {
    score += 20;
    flags.push("Artificial panic deadline created to suppress logical rational judgment");
  }
  if (lower.includes("trai") && (lower.includes("disconnect") || lower.includes("sim"))) {
    score += 30;
    flags.push("Impersonating Telecom Regulatory Authority of India (TRAI never sends disconnection threats)");
  }
  if (lower.includes("apk") || lower.includes("anydesk") || lower.includes("quicksupport")) {
    score += 40;
    flags.push("Attempts to install remote device control software (screen mirroring / malware)");
  }

  score = Math.min(score, 100);

  let verdict = "Likely Genuine Legal Correspondence";
  let color = "emerald";

  if (score >= 70) {
    verdict = "CONFIRMED HIGH-RISK FRAUD / SCAM";
    color = "rose";
  } else if (score >= 35) {
    verdict = "SUSPICIOUS / POTENTIAL PHISHING NOTICE";
    color = "amber";
  }

  return {
    score,
    verdict,
    color,
    flags,
    recommendations: score >= 50 ? [
      "Do NOT send any money or share any bank credentials/OTP.",
      "Immediately disconnect and block the caller on WhatsApp/Skype/Phone.",
      "Call the National Cyber Crime Helpline at 1930 immediately.",
      "File a cyber crime report at https://cybercrime.gov.in."
    ] : [
      "Review notice details with a licensed advocate.",
      "Verify the identity of the sending advocate or court through official court portal (eCourts)."
    ]
  };
}

export function generateLegalDraft({ templateType, sender, recipient, subject, facts, relief, date }) {
  const currentDate = date || new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

  if (templateType === "rti") {
    return `APPLICATION UNDER SECTION 6(1) OF THE RIGHT TO INFORMATION ACT, 2005

To,
The Central / State Public Information Officer (CPIO / SPIO),
${recipient || "[Department / Ministry / Municipal Corporation Office Name]"}
${"[Address of the Public Authority]"}

1. FULL NAME OF APPLICANT: ${sender || "[Your Full Name]"}
2. ADDRESS FOR CORRESPONDENCE: [Your Residential Address, City, State, PIN]
3. CONTACT DETAILS: [Mobile Number & Email Address]
4. CITIZENSHIP: Citizen of India

5. PARTICULARS OF INFORMATION REQUIRED:
Subject Matter: ${subject || "Request for certified information and documents"}

Detailed Queries / Information Sought:
${facts || `1. Please provide certified copies of the sanction order / tender file / inspection report regarding the subject matter.\n2. Please provide daily progress report of the application / grievance submitted on [Date].\n3. Please provide names and designations of public servants who dealt with the matter.`}

6. RELIEF / SPECIFIC CERTIFICATION SOUGHT:
${relief || "Inspection of records under Section 2(j)(i) and certified true copies of all relevant note-sheets, orders, and correspondence."}

7. APPLICATION FEE DETAILS:
An application fee of ₹10/- is enclosed herewith vide Postal Order / Demand Draft No. ____________ dated _________ / paid online.

8. BPL EXEMPTION (if applicable):
The applicant does / does not belong to Below Poverty Line (BPL) category.

Date: ${currentDate}
Place: [Your City]

________________________
Signature of Applicant
(${sender || "[Your Full Name]"})`;
  }

  if (templateType === "notice_reply_138") {
    return `REPLY TO LEGAL NOTICE DATED [DATE] FOR ALLEGED DISHONOUR OF CHEQUE

REGISTERED POST WITH A.D. / SPEED POST
Date: ${currentDate}

To,
${recipient || "Advocate [Opposing Lawyer Name]\nCounsel for M/s [Complainant Name]\n[Address]"}

Sir/Madam,
Under instructions from and on behalf of my client, ${sender || "[Your Full Name]"}, residing at [Your Address], I hereby reply to your purported Legal Demand Notice as follows:

1. That the allegations, assertions, and claims set forth in your notice under reply are completely denied as false, misconceived, and contrary to actual facts, save and except what is specifically admitted herein.

2. That my client NEVER owed any legally enforceable debt or liability of the alleged sum to your client. The cheque bearing No. [Cheque Number] was issued solely as an undated security cheque in connection with [brief context], and was never intended for encashment without prior reconciliation.

3. SPECIFIC FACTS & DEFENCE:
${facts || "That your client has committed material breach of obligations and has failed to render the agreed deliverables. Your client has unlawfully presented the security cheque without intimation and in bad faith to extort money."}

4. That in view of the absence of any existing legally enforceable debt, the essential ingredients of Section 138 of the Negotiable Instruments Act, 1881 and Section 318(4) of Bharatiya Nyaya Sanhita, 2023 are completely absent.

5. RELIEF & DEMAND:
${relief || "You are hereby called upon to advise your client to immediately cease and desist from initiating frivolous criminal litigation and forthwith return the aforesaid security cheque, failing which my client shall hold your client liable for malicious prosecution and civil damages."}

Yours sincerely,

Advocate for the Noticee
[Advocate Name / Bar Council Enrollment Number]`;
  }

  if (templateType === "consumer_complaint") {
    return `BEFORE THE DISTRICT CONSUMER DISPUTES REDRESSAL COMMISSION AT [DISTRICT NAME]

CONSUMER COMPLAINT NO. ________ / 2024
(Under Section 35 of the Consumer Protection Act, 2019)

IN THE MATTER OF:
${sender || "[Your Full Name]"},
R/o [Your Full Address, Phone & Email]
... COMPLAINANT

VERSUS

${recipient || "[Company / Service Provider / Builder Name]"},
Having office at: [Registered Office Address]
... OPPOSITE PARTY (OP)

COMPLAINT UNDER SECTION 35 OF THE CONSUMER PROTECTION ACT, 2019 FOR DEFICIENCY IN SERVICE AND UNFAIR TRADE PRACTICE

MOST RESPECTFULLY SHOWETH:
1. That the Complainant is a consumer as defined under Section 2(7) of the Consumer Protection Act, 2019, having purchased goods / availed services from the Opposite Party on payment of valuable consideration amounting to ₹________.

2. FACTS OF THE GRIEVANCE:
${facts || "The Complainant purchased the product / subscribed to service on [Date]. Despite full payment, the product was defective / services were deficient. Despite multiple grievance tickets and emails, the OP failed and neglected to rectify or refund the amount."}

3. That the aforesaid conduct of the Opposite Party amounts to gross deficiency in service under Section 2(11) and Unfair Trade Practice under Section 2(47) of the Act, causing grave mental agony, harassment, and financial loss to the Complainant.

4. PRAYER / RELIEF SOUGHT:
It is most respectfully prayed that this Hon'ble Commission may be pleased to:
${relief || "a) Direct the Opposite Party to refund the sum of ₹________ with interest @ 12% p.a.\nb) Direct the Opposite Party to pay ₹50,000/- towards compensation for mental agony and physical harassment.\nc) Award litigation costs of ₹15,000/- in favour of the Complainant."}

Complainant: ${sender || "[Your Full Name]"}
Date: ${currentDate}

VERIFICATION:
I, the Complainant above-named, do hereby solemnly affirm and declare that the contents of paragraphs 1 to 4 are true and correct to my knowledge.
Verified at [City] on this ${currentDate}.`;
  }

  // Generic Legal Notice Reply
  return `FORMAL LEGAL RESPONSE & NOTICE
Date: ${currentDate}

To,
${recipient || "[Recipient Name / Organization]"}
${"[Recipient Address]"}

Subject: ${subject || "Response to Communication / Notice"}

From,
${sender || "[Your Name]"}
${"[Your Address]"}

Dear Sir/Madam,
With reference to the notice / communication dated [Date], I place the following response on record:

${facts || "1. The claims made in your communication are disputed in their entirety as legally and factually untenable.\n2. All obligations from my end have been dutifully discharged in good faith."}

${relief || "You are requested to withdraw the unfounded claims and confirm the resolution in writing within 15 days."}

Sincerely,
${sender || "[Your Name]"}`;
}
