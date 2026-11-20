// Comprehensive Indian Legal Knowledge Base for NyayaVani

export const LANGUAGES = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'bn', label: 'Bengali', native: 'বাংলা' },
  { code: 'mr', label: 'Marathi', native: 'मराठी' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు' },
  { code: 'gu', label: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ' }
];

export const IPC_BNS_MAPPING = [
  {
    ipc: "420",
    bns: "318(4)",
    offence: "Cheating and dishonestly inducing delivery of property",
    category: "Property & Financial",
    bailable: "Non-Bailable",
    cognizable: "Cognizable",
    punishment: "Imprisonment up to 7 years + Fine",
    keyChange: "Re-codified under BNS Section 318 with enhanced sub-clauses for digital, organized, and multi-victim fraud schemes."
  },
  {
    ipc: "302",
    bns: "103(1)",
    offence: "Murder",
    category: "Offences Against Life",
    bailable: "Non-Bailable",
    cognizable: "Cognizable",
    punishment: "Death or Imprisonment for Life + Fine",
    keyChange: "Sub-clause 103(2) explicitly introduces specific capital punishment for mob lynching based on race, caste, community, sex, or place of birth."
  },
  {
    ipc: "307",
    bns: "109",
    offence: "Attempt to murder",
    category: "Offences Against Life",
    bailable: "Non-Bailable",
    cognizable: "Cognizable",
    punishment: "Imprisonment up to 10 years + Fine; Life imprisonment if hurt caused",
    keyChange: "Clarified liability and simplified evidential threshold for attempt to cause death."
  },
  {
    ipc: "376",
    bns: "64",
    offence: "Rape / Sexual Assault",
    category: "Offences Against Women",
    bailable: "Non-Bailable",
    cognizable: "Cognizable",
    punishment: "Rigorous imprisonment of not less than 10 years, up to life + Fine",
    keyChange: "BNS introduces Section 69 punishing sexual intercourse on deceitful promise of marriage or false identity."
  },
  {
    ipc: "379 / 380",
    bns: "303(2)",
    offence: "Theft / Theft in dwelling house",
    category: "Property",
    bailable: "Non-Bailable (dwelling), Bailable for first minor offences",
    cognizable: "Cognizable",
    punishment: "Imprisonment up to 3 years or fine, or both (community service for minor first-time value < ₹5000)",
    keyChange: "Introduces 'Community Service' as an alternative punishment for petty first-time theft where value is under ₹5,000."
  },
  {
    ipc: "498A",
    bns: "85 & 86",
    offence: "Cruelty by husband or relatives of husband / Dowry harassment",
    category: "Offences Against Women",
    bailable: "Non-Bailable",
    cognizable: "Cognizable",
    punishment: "Imprisonment up to 3 years + Fine",
    keyChange: "Divided into Sections 85 and 86 to clearly delineate mental/physical cruelty and dowry harassment."
  },
  {
    ipc: "506",
    bns: "351(2) & 351(3)",
    offence: "Criminal intimidation",
    category: "Public Peace & Safety",
    bailable: "Bailable (Compoundable)",
    cognizable: "Non-Cognizable (Cognizable if threat to cause death)",
    punishment: "Imprisonment up to 2 years, or fine, or up to 7 years for severe threats",
    keyChange: "Includes digital and electronic intimidation (threats over WhatsApp, social media, VoIP)."
  },
  {
    ipc: "499 / 500",
    bns: "356",
    offence: "Defamation",
    category: "Reputation & Speech",
    bailable: "Bailable",
    cognizable: "Non-Cognizable",
    punishment: "Simple imprisonment up to 2 years, or fine, or both, or Community Service",
    keyChange: "Explicitly allows Magistrate to award Community Service instead of jail time for simple defamation."
  },
  {
    ipc: "406",
    bns: "316(2)",
    offence: "Criminal breach of trust",
    category: "Property & Financial",
    bailable: "Non-Bailable",
    cognizable: "Cognizable",
    punishment: "Imprisonment up to 5 years (extended from 3 years under IPC) + Fine",
    keyChange: "Maximum imprisonment enhanced from 3 years to 5 years."
  },
  {
    ipc: "279",
    bns: "281",
    offence: "Rash driving or riding on a public way",
    category: "Public Safety",
    bailable: "Bailable",
    cognizable: "Cognizable",
    punishment: "Imprisonment up to 6 months or fine up to ₹1,000 or both",
    keyChange: "Read with BNS Section 106(2) for Hit-and-Run offences where fleeing without reporting to police carries up to 10 years jail."
  },
  {
    ipc: "124A (Sedition)",
    bns: "152",
    offence: "Acts endangering sovereignty, unity and integrity of India",
    category: "Offences Against State",
    bailable: "Non-Bailable",
    cognizable: "Cognizable",
    punishment: "Imprisonment for life or up to 7 years + Fine",
    keyChange: "Colonial term 'Sedition' removed. Replaced with acts exciting secession, armed rebellion, or subversive activities."
  },
  {
    ipc: "304A",
    bns: "106(1)",
    offence: "Causing death by negligence",
    category: "Offences Against Life",
    bailable: "Bailable",
    cognizable: "Cognizable",
    punishment: "Imprisonment up to 5 years (raised from 2 years) + Fine",
    keyChange: "General negligence increased from 2 to 5 years. Registered doctors have special provision under 106(1) proviso with max 2 years."
  },
  {
    ipc: "141 / 143",
    bns: "189",
    offence: "Unlawful assembly",
    category: "Public Peace",
    bailable: "Bailable",
    cognizable: "Cognizable",
    punishment: "Imprisonment up to 6 months or fine or both",
    keyChange: "Clear definition of unlawful assemblies including obstruction of emergency public services."
  },
  {
    ipc: "354",
    bns: "74",
    offence: "Assault or criminal force to woman with intent to outrage her modesty",
    category: "Offences Against Women",
    bailable: "Non-Bailable",
    cognizable: "Cognizable",
    punishment: "Imprisonment 1 to 5 years + Fine",
    keyChange: "Strengthened evidentiary protection for victims during police examination."
  },
  {
    ipc: "New Section",
    bns: "304",
    offence: "Snatching (Theft with sudden quick grabbing)",
    category: "Property & Street Crime",
    bailable: "Non-Bailable",
    cognizable: "Cognizable",
    punishment: "Imprisonment up to 3 years + Fine",
    keyChange: "Brand new distinct offence introduced in BNS. Previously booked under generic theft or robbery."
  },
  {
    ipc: "New Section",
    bns: "111",
    offence: "Organized Crime (Syndicates, extortion, contract killing, land grabbing)",
    category: "Special Offences",
    bailable: "Non-Bailable",
    cognizable: "Cognizable",
    punishment: "Death or Life Imprisonment + minimum fine of ₹5 Lakhs",
    keyChange: "Brings provisions similar to MCOCA into federal national penal law."
  }
];

export const SAMPLE_DOCUMENTS = [
  {
    id: "cheque_bounce",
    title: "Legal Notice: Cheque Dishonour u/s 138 NI Act",
    type: "Legal Notice",
    preview: "Demand notice demanding payment of ₹4,50,000 for bounced cheque with 15-day statutory deadline.",
    content: `LEGAL DEMAND NOTICE
Date: 12th October 2024
To,
Mr. Rajesh Kumar Verma
R/o H-42, Sector 18, Noida, Uttar Pradesh - 201301

Under Instructions and authority from our client, M/s Apex Tech Solutions Pvt. Ltd., having its registered office at Connaught Place, New Delhi:

1. That you, the Noticee, towards discharge of your legally enforceable debt and liability for services rendered, issued Cheque bearing No. 004812 dated 25th September 2024 drawn on HDFC Bank Ltd. for an amount of ₹4,50,000/- (Rupees Four Lakh Fifty Thousand Only).

2. That upon presentation of the said cheque by our client through their banker ICICI Bank, the same was returned unpaid with remark "FUNDS INSUFFICIENT" vide Cheque Return Memo dated 28th September 2024.

3. That you have intentionally failed to maintain sufficient balance, constituting an offence under Section 138 of the Negotiable Instruments Act, 1881 read with Section 318(4) of Bharatiya Nyaya Sanhita, 2023.

4. We hereby call upon you to pay the entire outstanding sum of ₹4,50,000/- within FIFTEEN (15) DAYS from the date of receipt of this notice, failing which our client shall initiate criminal prosecution under Section 138 NI Act in the competent Metropolitan Magistrate Court at your sole risk, cost, and consequences.

Advocate Priya Sharma
High Court of Delhi, Enrolment No. D/1842/2016`
  },
  {
    id: "digital_arrest_scam",
    title: "Suspicious Notice: Fake 'Digital Arrest' CBI/Supreme Court Warrant",
    type: "Fraudulent Scam Notice",
    preview: "WhatsApp document claiming recipient is under 'Digital Arrest' for money laundering.",
    content: `CENTRAL BUREAU OF INVESTIGATION (CBI) & SUPREME COURT OF INDIA
ORDER FOR DIGITAL ARREST AND ASSET FREEZING
Date: Urgent / Immediate
Ref No: CBI/CYBER-FIN/2024/9912

SUBJECT: IMMEDIATE DIGITAL SURVEILLANCE & DIGITAL ARREST UNDER PMLA ACT & SECTION 420 IPC

It has come to the notice of the Special Cyber Cell, CBI Headquarters, New Delhi that your Aadhaar card (XXXXXXXX1294) and Bank Account with Canara Bank have been identified in a ₹3.8 Crore Money Laundering case involving Naresh Goyal / Jet Airways syndicate.

YOU ARE HEREBY PLACED UNDER VIRTUAL / DIGITAL ARREST WITH IMMEDIATE EFFECT:
1. You must remain in an isolated room with your camera ON on Skype/WhatsApp call with Investigating Officer Inspector Vikram Rathore (+91 9821XXXXXX).
2. You are strictly forbidden from contacting your family, local police, or any legal counsel, failing which a physical tactical team will enter your premises within 2 hours.
3. To clear your name and receive a Supreme Court Clearance Certificate, you are directed to transfer your entire liquid bank savings of ₹8,40,000/- to the Government Verification Escrow Account (A/c No: 918201928374, IFSC: YESB000012, Beneficiary: CBI-Govt Escrow) for financial forensic audit. The amount will be refunded in 30 minutes after clearance.

By Order,
Special Director General of Police, CBI Cyber Cell
Digital Seal of Supreme Court of India`
  },
  {
    id: "rental_eviction",
    title: "Tenant Notice: Immediate Eviction & Security Deposit Forfeiture",
    type: "Eviction Notice",
    preview: "Notice from landlord demanding tenant vacate in 7 days and threatening deposit forfeiture.",
    content: `EVICTION AND TERMINATION NOTICE
Date: 5th November 2024
To: Mr. Aniket Sen (Tenant)
Flat 402, Green Meadows Apartment, Bellandur, Bengaluru - 560103

Sir,
Take notice that your tenancy in respect of the above-mentioned premises is hereby terminated with immediate effect due to unauthorized guest stay and delayed maintenance payment.

1. You are directed to hand over vacant, peaceful possession of the premises within SEVEN (7) DAYS from receipt of this notice.
2. Please note that in terms of Clause 14 of our un-registered lease agreement, your entire Security Deposit of ₹1,50,000/- stands FORFEITED towards liquidated damages and wall repainting charges.
3. If you fail to vacate by 12th November 2024, the water and electricity connections shall be disconnected, and locks will be changed.

Landlord: K. R. Venkatesh
Bengaluru`
  },
  {
    id: "police_fir",
    title: "First Information Report (FIR) under BNS Sections 318 & 316",
    type: "Police FIR",
    preview: "Police FIR registered for fraudulent online investment scheme under new BNS provisions.",
    content: `FIRST INFORMATION REPORT (Under Section 173 BNSS, 2023)
Police Station: Cyber Crime Police Station, Cyberabad
FIR No: 0312/2024, Date: 18/08/2024
District: Cyberabad Police Commissionerate, Telangana

1. Acts & Sections:
   - Bharatiya Nyaya Sanhita, 2023 (BNS): Section 318(4) [Cheating], Section 316(2) [Criminal Breach of Trust]
   - Information Technology Act, 2000: Section 66D [Cheating by Personation using computer resource]

2. Complainant:
   Name: Smt. Sunita Rao, Age 34, Software Engineer, Gachibowli, Hyderabad.

3. Brief Facts of the Case:
   The complainant reported that unknown cyber fraudsters created a fraudulent Telegram channel claiming to be official fund managers of Tata Mutual Fund. The complainant was enticed with promises of 30% monthly guaranteed returns. Over a period of 45 days, the complainant transferred a total of ₹14,20,000/- across 6 different UPI IDs and current accounts. When complainant requested withdrawal of initial capital, accused demanded an additional ₹3,00,000 as "SEBI clearance fee". Realizing fraud, complaint was lodged on National Cyber Crime Portal (Ref: 2024/CYBER/94821).

4. Investigation Officer: Inspector K. Suresh, Cyber Crime PS.`
  }
];

export const SCAM_DATABASE = [
  {
    type: "digital_arrest",
    title: "Digital Arrest Scam (CBI / ED / Police / Supreme Court)",
    warning: "INDIAN LAW HAS NO CONCEPT OF 'DIGITAL ARREST'. NO POLICE OR COURT CAN ARREST YOU OVER VIDEO CALL.",
    redFlags: [
      "Caller claims to be from CBI, ED, Police, or Supreme Court over Skype, WhatsApp, or Zoom.",
      "Threatens immediate arrest unless you stay in a closed room on video call.",
      "Shows fake digital badges, fake court summons with forged stamps and national emblems.",
      "Asks you to transfer money to a 'Govt Escrow' or 'Verification Account' for RBI/Supreme Court auditing.",
      "Demands secrecy and threatens your family or calls it a National Security case."
    ],
    officialAdvice: "Immediately disconnect the call. Do not transfer a single rupee. Report immediately to National Cyber Crime Helpline at 1930 and file a complaint at cybercrime.gov.in."
  },
  {
    type: "trai_mobile_cut",
    title: "TRAI / DoT Mobile Number Disconnection Scam",
    warning: "TRAI NEVER CALLS OR SENDS AUTOMATED MESSAGES TO DISCONNECT INDIVIDUAL PHONE NUMBERS.",
    redFlags: [
      "Automated IVR call: 'Your mobile number will be disconnected in 2 hours due to illegal activities.'",
      "Connects to a fake officer claiming SIM card was used in harassment or money laundering in Mumbai/Delhi.",
      "Demands Skype video call verification and financial audits."
    ],
    officialAdvice: "Department of Telecommunications (DoT) has issued repeated advisories: TRAI never disconnects individual numbers. Report the caller's number on the Chakshu portal at sancharsaathi.gov.in."
  },
  {
    type: "electricity_cut",
    title: "Electricity Bill Disconnection SMS",
    warning: "STATE ELECTRICITY BOARDS NEVER SEND SMS FROM PERSONAL MOBILE NUMBERS (10-DIGIT NUMBERS) THREATENING NIGHT CUTOFFS.",
    redFlags: [
      "SMS from random 10-digit mobile number stating 'Dear consumer, your electricity will be disconnected tonight at 9:30 PM due to unpaid bill.'",
      "Provides a mobile number for 'Electricity Officer' to call immediately.",
      "Asks you to install APK files (AnyDesk, TeamViewer, QuickSupport) to update payment."
    ],
    officialAdvice: "Pay electricity bills only through official discom portals, BBPS, or authorized payment apps. Never install APK files sent on WhatsApp or SMS."
  }
];

export const CITIZEN_HELPLINES = [
  {
    name: "National Cyber Crime Helpline",
    number: "1930",
    url: "https://cybercrime.gov.in",
    desc: "24/7 emergency response to freeze money transferred to cyber scammers within golden hour.",
    badge: "Most Critical for Scams",
    color: "rose"
  },
  {
    name: "NALSA Free Legal Aid Helpline",
    number: "15100",
    url: "https://nalsa.gov.in",
    desc: "National Legal Services Authority - Free advocate and legal aid for women, SC/ST, and low-income citizens.",
    badge: "Free Govt Lawyer",
    color: "amber"
  },
  {
    name: "National Emergency Helpline",
    number: "112",
    url: "https://112.gov.in",
    desc: "Unified emergency service for Police, Fire, Ambulance, and Disaster Management across India.",
    badge: "Police & Emergency",
    color: "blue"
  },
  {
    name: "Women Helpline (National Commission)",
    number: "181",
    url: "http://ncw.nic.in",
    desc: "24-hour toll-free emergency response for women facing domestic violence, harassment, or distress.",
    badge: "Women Safety",
    color: "pink"
  },
  {
    name: "National Consumer Helpline",
    number: "1915",
    url: "https://consumerhelpline.gov.in",
    desc: "Ministry of Consumer Affairs - Free dispute resolution against e-commerce, airlines, banks, builders, and telecom.",
    badge: "Consumer Rights",
    color: "emerald"
  },
  {
    name: "Childline India",
    number: "1098",
    url: "https://childlineindia.org",
    desc: "24-hour emergency helpline service for children in need of care and protection.",
    badge: "Child Protection",
    color: "indigo"
  }
];

export const FUNDAMENTAL_RIGHTS = [
  {
    article: "Article 21",
    title: "Right to Life & Personal Liberty",
    meaning: "No person shall be deprived of their life or personal liberty except according to procedure established by law. Includes right to dignity, privacy, and fair trial."
  },
  {
    article: "Article 22",
    title: "Protection Against Arbitrary Arrest",
    meaning: "Any arrested person has the fundamental right to know grounds of arrest, consult an advocate of their choice, and MUST be produced before nearest Magistrate within 24 hours."
  },
  {
    article: "Article 39A",
    title: "Equal Justice & Free Legal Aid",
    meaning: "State must ensure equal justice and provide free legal aid to ensure that opportunities for securing justice are not denied to any citizen by reason of economic or other disabilities."
  },
  {
    article: "Section 41A CrPC / 35(3) BNSS",
    title: "Notice of Appearance Before Arrest",
    meaning: "For offences punishable with imprisonment of 7 years or less, police CANNOT arrest arbitrarily without issuing a prior Notice of Appearance."
  },
  {
    article: "Section 46(4) CrPC / 43(5) BNSS",
    title: "Arrest of Women",
    meaning: "No woman can be arrested after sunset and before sunrise except in extraordinary circumstances with prior permission of Judicial Magistrate."
  }
];
