// Bamberry Lawyers — design tokens
window.BAMBERRY = window.BAMBERRY || {};

window.BAMBERRY.tokens = {
  // Palette
  ink:       '#0E2A3D',   // deep navy (primary)
  inkDeep:   '#081A27',   // near-black navy (dark bg)
  teal:      '#1F5F7D',   // brand teal from logo
  tealSoft:  '#356F8B',
  graphite:  '#3C3C3C',
  graphite2: '#6B6B6B',
  line:      '#D7CFC2',   // hairline on ivory
  lineDark:  '#2A3E4D',   // hairline on dark
  ivory:     '#F6F1E8',
  ivoryDeep: '#EEE6D6',
  paper:     '#FBF8F2',
  white:     '#FFFFFF',

  // Accent — tweakable
  accentBrass:  '#B08A4A',
  accentOxblood:'#8A2E2A',
  accentForest: '#2F5A3E',
  accentCobalt: '#274A8C',
  accentPlum:   '#5C3A5E',
};

window.BAMBERRY.accentOptions = [
  { id: 'brass',   label: 'Brass',   value: '#B08A4A' },
  { id: 'oxblood', label: 'Oxblood', value: '#8A2E2A' },
  { id: 'forest',  label: 'Forest',  value: '#2F5A3E' },
  { id: 'cobalt',  label: 'Cobalt',  value: '#274A8C' },
  { id: 'plum',    label: 'Plum',    value: '#5C3A5E' },
];

// Site data
window.BAMBERRY.data = {
  phone: '(07) 5527 0020',
  phoneRaw: '0755270020',
  phoneBrisbane: '(07) 3916 4388',
  email: 'admin@bamberrylawyers.com.au',
  offices: [
    { city: 'Gold Coast', address: 'Level 2, 17 Short Street', suburb: 'Southport QLD 4215' },
    { city: 'Brisbane',   address: 'Level 10, 95 North Quay',  suburb: 'Brisbane City QLD 4000' },
  ],
  practiceAreas: [
    { n: '01', name: 'Criminal Law', sub: 'Serious indictable offences, bail, trials & sentencing', children: [
      'Sexual Offences', 'Violence', 'Murder', 'Drug Offences', 'Fraud & Dishonesty', 'Youth Justice & Crime',
    ] },
    { n: '02', name: 'Traffic Law', sub: 'DUI, dangerous operation, licence & special hardship' },
    { n: '03', name: 'Corporate Law', sub: 'Regulatory investigations and corporate crime' },
    { n: '04', name: 'Coronial Inquests', sub: 'Representation and strategy through inquest' },
    { n: '05', name: 'Investigative Hearings', sub: 'CCC and statutory investigative proceedings' },
  ],
  partners: [
    {
      id: 'joe',
      name: 'Joe Wicking',
      role: 'Director',
      credential: 'Accredited Specialist — Criminal Law (Qld)',
      img: 'assets/joe-wicking.jpeg',
      bio: 'Joe represents clients in serious, complex and high-stakes matters across Queensland — from murder and trafficking to corruption, fraud and appeals. Recognised in Doyle\u2019s Guide as a Leading Criminal Defence and Traffic Lawyer.',
    },
    {
      id: 'sam',
      name: 'Sam Jackson',
      role: 'Director',
      credential: 'Accredited Specialist — Criminal Law (Qld)',
      img: 'assets/sam-jackson.jpg',
      bio: 'Sam has practised exclusively in criminal law throughout his career — from contested summary proceedings to serious indictable prosecutions, extradition and High Court matters. 2018 Highest Achiever, QLS Accredited Specialisation.',
    },
  ],
  articles: [
    { cat: 'Criminal Law', title: 'Bail applications after the 2026 amendments: what actually changed', date: '14 Apr 2026', read: '6 min', img: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&q=80' },
    { cat: 'Traffic Law',  title: 'When a work licence is realistic — and when it isn\u2019t',              date: '02 Apr 2026', read: '4 min', img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80' },
    { cat: 'Corporate',    title: 'Responding to a CCC notice: the first 48 hours',                        date: '21 Mar 2026', read: '7 min', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80' },
    { cat: 'Criminal Law', title: 'Drug trafficking charges: the threshold question of commerciality',     date: '10 Mar 2026', read: '8 min', img: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=1200&q=80' },
  ],
  wins: [
    { metric: '15+',   label: 'Years exclusively in criminal law' },
    { metric: '2',     label: 'Accredited Specialists on staff' },
    { metric: '24/7',  label: 'Police station & emergency line' },
    { metric: '100%',  label: 'Criminal & traffic \u2014 no other work' },
  ],

  // Expanded services — keyed by slug
  services: {
    'drug-offences': {
      slug: 'drug-offences',
      fig: '04',
      parent: 'Criminal Law',
      name: 'Drug Offences',
      heroA: 'Drug',
      heroB: 'offences.',
      heroImg: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=900&q=85',
      tagline: 'From possession to Commonwealth trafficking, these are technical prosecutions with serious consequences. Preparation and strategy make the difference.',
      overview: 'Drug prosecutions in Queensland range from summary possession matters in the Magistrates Court to Commonwealth-scale trafficking indictments in the Supreme Court. We act for clients across the full spectrum. Each matter turns on evidentiary questions — the legality of the search, the reliability of analysis, the characterisation of the conduct, and the question of commerciality. These are not arguments that can be made late.',
      charges: [
        { label: 'Possession of a dangerous drug', court: 'Magistrates · District' },
        { label: 'Supplying a dangerous drug', court: 'District · Supreme' },
        { label: 'Producing a dangerous drug', court: 'District · Supreme' },
        { label: 'Trafficking in a dangerous drug', court: 'Supreme Court' },
        { label: 'Possession of property used in connection', court: 'Magistrates · District' },
        { label: 'Commonwealth importation / border controlled drugs', court: 'Supreme · Federal' },
      ],
      approach: [
        { n: '01', k: 'Evidence audit', v: 'We review the brief closely — search warrants, surveillance, interception, analyst certificates — and identify the weak points.' },
        { n: '02', k: 'Legal challenge', v: 'Where evidence was obtained unlawfully, we move to exclude it. This can reshape the whole prosecution.' },
        { n: '03', k: 'Charge characterisation', v: 'The line between supply and trafficking, or possession and supply, is where real outcomes are won.' },
        { n: '04', k: 'Plea or trial', v: 'When the case should be fought, we fight it. When resolution is the right course, we negotiate from strength.' },
      ],
      faqs: [
        { q: 'Does a drug charge always mean a conviction?', a: 'No. A conviction is discretionary on sentence, and in some matters the proper result is no conviction recorded. In others, the charge itself should not proceed. The right question is always whether the prosecution can prove its case.' },
        { q: 'What counts as trafficking?', a: 'Trafficking requires proof of commerciality — carrying on the business of unlawfully supplying. The evidence is usually circumstantial: texts, cash, quantity, frequency. How that evidence is characterised matters enormously.' },
        { q: 'Will police want to interview me?', a: 'Usually, yes. Before you say anything, call us. You are not required to participate in an interview and in most cases you should not.' },
      ],
      related: ['Fraud & Dishonesty', 'Sexual Offences', 'Violence'],
    },

    'sexual-offences': {
      slug: 'sexual-offences', fig: '01', parent: 'Criminal Law', name: 'Sexual Offences',
      heroA: 'Sexual', heroB: 'offences.',
      heroImg: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=900&q=85',
      tagline: 'Allegations of sexual misconduct — recent or historic — demand forensic preparation, careful cross-examination, and a defence built long before trial.',
      overview: 'Sexual offence matters carry unique evidentiary and procedural features: complainant evidence is often pre-recorded, counts span decades of allegations, and the jury task is extraordinarily demanding. We act for clients charged with offences ranging from sexual assault to rape, indecent treatment of children, and historic allegations arising decades after the alleged conduct. Each matter requires early strategic work — retaining experts, identifying tendency and coincidence issues, and preparing cross-examination that can be conducted under the 21AK regime.',
      charges: [
        { label: 'Rape', court: 'District · Supreme' },
        { label: 'Sexual assault', court: 'District Court' },
        { label: 'Indecent treatment of a child under 16', court: 'District Court' },
        { label: 'Maintaining a sexual relationship with a child', court: 'Supreme Court' },
        { label: 'Historic / decades-old allegations', court: 'District · Supreme' },
        { label: 'Non-consensual recording / distribution', court: 'Magistrates · District' },
      ],
      approach: [
        { n: '01', k: 'Complainant evidence', v: 'We work through the complainant statement, police interviews and pre-recorded s. 21AK evidence line by line — consistency, motive, opportunity.' },
        { n: '02', k: 'Tendency & coincidence', v: 'Where the Crown seeks to run tendency or coincidence, the evidence must meet a high threshold. We challenge where the threshold is not met.' },
        { n: '03', k: 'Expert evidence', v: 'In the right case, we retain forensic, medical or memory experts to address specific issues in the prosecution case.' },
        { n: '04', k: 'Cross-examination', v: 'The cross-examination is often the case. It is prepared meticulously and conducted with care under the protective regime.' },
      ],
      faqs: [
        { q: 'Can I be charged over something decades ago?', a: 'Yes. There is no limitation period for most sexual offences in Queensland. Historic allegations are prosecuted routinely, and the passage of time creates both challenges and opportunities for the defence.' },
        { q: 'Will I have to give evidence?', a: 'You are never required to give evidence. Whether you do is a strategic decision made closer to trial, informed by how the Crown case unfolds.' },
        { q: 'Will my name be published?', a: 'Queensland law imposes restrictions on the identification of accused persons in certain sexual offence matters. We advise on what applies to your case.' },
      ],
      related: ['Violence', 'Appeals', 'Bail Applications'],
    },

    'violence': {
      slug: 'violence', fig: '02', parent: 'Criminal Law', name: 'Violence',
      heroA: 'Violence', heroB: 'offences.',
      heroImg: 'https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=900&q=85',
      tagline: 'Assault, grievous bodily harm, armed robbery, affray. Most violence charges turn on questions of intent, self-defence, and the reliability of witness accounts.',
      overview: 'Violence charges in Queensland range from summary common assault to grievous bodily harm, wounding and armed robbery prosecuted on indictment. The substantive legal questions — intent, self-defence, provocation, accident — are often the real battleground. So is the quality of the witness evidence: CCTV, eyewitness accounts, medical records. We act across the whole range, from first-time summary matters to repeat serious violent offender indictments.',
      charges: [
        { label: 'Common assault', court: 'Magistrates Court' },
        { label: 'Assault occasioning bodily harm', court: 'Magistrates · District' },
        { label: 'Grievous bodily harm', court: 'District Court' },
        { label: 'Wounding', court: 'District Court' },
        { label: 'Armed robbery', court: 'District · Supreme' },
        { label: 'Affray, riot & public order violence', court: 'Magistrates · District' },
      ],
      approach: [
        { n: '01', k: 'Scene reconstruction', v: 'We request CCTV, body-worn footage, photographs and medical records early — before material is lost.' },
        { n: '02', k: 'Self-defence & accident', v: 'Where the facts support it, self-defence or accident is raised properly. The Crown must exclude these beyond reasonable doubt.' },
        { n: '03', k: 'Witness reliability', v: 'Eyewitness evidence in violence matters is frequently unreliable. We identify the weaknesses and exploit them in cross-examination.' },
        { n: '04', k: 'Injury characterisation', v: 'The distinction between bodily harm, grievous bodily harm and wounding is often contested. The right characterisation changes the sentence range dramatically.' },
      ],
      faqs: [
        { q: 'I was defending myself. Can the charge be withdrawn?', a: 'Sometimes. If self-defence can be clearly demonstrated from the available evidence, we make submissions to the prosecution for withdrawal or reduction. Where it proceeds, self-defence remains available at trial.' },
        { q: 'Does domestic violence automatically mean jail?', a: 'No. Sentencing in DV matters is case-specific. Programs, counselling and family circumstances all weigh in submissions. A well-prepared plea is often the difference between imprisonment and a community-based order.' },
        { q: 'What if the complainant does not want to press charges?', a: 'Police and the DPP, not the complainant, decide whether a matter proceeds. But a complainant\u2019s position on prosecution can be a significant factor in negotiation.' },
      ],
      related: ['Sexual Offences', 'Murder & Manslaughter', 'Bail Applications'],
    },

    'murder-manslaughter': {
      slug: 'murder-manslaughter', fig: '03', parent: 'Criminal Law', name: 'Murder & Manslaughter',
      heroA: 'Murder', heroB: '& manslaughter.',
      heroImg: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=900&q=85',
      tagline: 'Homicide matters sit at the top of the criminal calendar. They require the deepest preparation, the most careful strategy, and Senior Counsel where the case demands it.',
      overview: 'Murder and manslaughter prosecutions are run in the Supreme Court and are among the most serious matters in the Queensland criminal list. The substantive issues — intent, provocation, self-defence, accident, diminished responsibility — are often live and complex. We have appeared in murder committals, trials and appeals, and instruct Senior Counsel in matters before the Supreme Court and Queensland Court of Appeal. Mandatory life imprisonment on murder makes early strategic work — and a proper assessment of manslaughter alternatives — essential.',
      charges: [
        { label: 'Murder', court: 'Supreme Court' },
        { label: 'Manslaughter', court: 'Supreme Court' },
        { label: 'Attempted murder', court: 'Supreme Court' },
        { label: 'Dangerous operation causing death', court: 'District · Supreme' },
        { label: 'Unlawful striking causing death', court: 'Supreme Court' },
        { label: 'Accessory after the fact to murder', court: 'Supreme Court' },
      ],
      approach: [
        { n: '01', k: 'Senior Counsel', v: 'We brief and instruct Senior Counsel in homicide matters, working as a unified defence team from the earliest stage.' },
        { n: '02', k: 'Forensic evidence', v: 'Pathology, ballistics, digital forensics — each expert report is challenged where it should be.' },
        { n: '03', k: 'Defences & partial defences', v: 'Provocation, self-defence, accident and diminished responsibility are worked through carefully. The right defence can be the whole case.' },
        { n: '04', k: 'Committal strategy', v: 'The committal is the first real chance to test the Crown case. In homicide matters, it is often where the case is won or narrowed.' },
      ],
      faqs: [
        { q: 'Is murder always life imprisonment?', a: 'A conviction for murder carries mandatory life imprisonment in Queensland. This is why the distinction between murder and manslaughter is so important, and why the defence must work from the first conference.' },
        { q: 'Can a murder charge be reduced to manslaughter?', a: 'Yes — either at trial on partial defences, or by negotiation with the DPP pre-trial where the evidence supports it. This is a central strategic question in many homicide matters.' },
        { q: 'Who will argue the case in court?', a: 'In homicide matters, we ordinarily brief Senior Counsel to conduct the trial. We remain the instructing solicitors, in daily contact, and run every aspect of preparation.' },
      ],
      related: ['Violence', 'Appeals', 'Bail Applications'],
    },

    'fraud-dishonesty': {
      slug: 'fraud-dishonesty', fig: '05', parent: 'Criminal Law', name: 'Fraud & Dishonesty',
      heroA: 'Fraud', heroB: '& dishonesty.',
      heroImg: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=85',
      tagline: 'Complex paper-trail prosecutions — corporate fraud, tax fraud, Commonwealth offences. These cases are won in the documents, long before court.',
      overview: 'Fraud and dishonesty prosecutions are evidentially dense. The Crown case is usually a reconstruction from thousands of documents — bank records, emails, invoices, accounting entries. We act in State and Commonwealth fraud matters, CDPP prosecutions, regulatory proceedings and corporate investigations. The difference in these cases is preparation: a forensic review of the brief, a clear theory of the defence, and a careful cross-examination of the Crown\u2019s reconstruction.',
      charges: [
        { label: 'Fraud — s. 408C Criminal Code', court: 'District Court' },
        { label: 'Aggravated fraud (employee / yield)', court: 'District Court' },
        { label: 'Commonwealth fraud — s. 134', court: 'District · Supreme' },
        { label: 'Tax fraud / false statements', court: 'District · Supreme' },
        { label: 'Money laundering', court: 'District · Supreme' },
        { label: 'Corporate / insolvent trading', court: 'District Court' },
      ],
      approach: [
        { n: '01', k: 'Brief analysis', v: 'We work through the Crown brief document by document — reconstructions are only as strong as their weakest link.' },
        { n: '02', k: 'Forensic accounting', v: 'Where the evidence requires it, we retain forensic accountants to test the Crown\u2019s calculations and narrative.' },
        { n: '03', k: 'Intention & dishonesty', v: 'Fraud requires proof of dishonesty. The test is high and frequently under-examined by the prosecution.' },
        { n: '04', k: 'Negotiation & resolution', v: 'In the right matter, structured negotiation with the DPP or CDPP can substantially narrow charges or quantum before trial.' },
      ],
      faqs: [
        { q: 'Will I go to jail for fraud?', a: 'Not necessarily. Sentencing outcomes in fraud matters range widely and depend on quantum, the nature of the conduct, prior history and what can be said in mitigation. Restitution, early cooperation and a well-prepared plea all matter.' },
        { q: 'Can the charges be reduced?', a: 'Often, yes. Fraud indictments are frequently over-charged. A close review of the evidence and careful negotiation can reduce counts, quantum, or both.' },
        { q: 'What about regulators like ASIC or the ATO?', a: 'We act in parallel regulatory investigations — including responses to s. 19 examinations, ATO interviews, and ASIC notices. Getting the early response right is critical.' },
      ],
      related: ['Drug Offences', 'Appeals', 'Corporate Law'],
    },

    'youth-justice': {
      slug: 'youth-justice', fig: '06', parent: 'Criminal Law', name: 'Youth Justice',
      heroA: 'Youth', heroB: 'justice.',
      heroImg: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=900&q=85',
      tagline: 'Young people in the criminal system need advocacy that understands the Youth Justice Act, restorative options, and the long view — not just the next court date.',
      overview: 'Matters involving young people are run in the Childrens Court and governed by the Youth Justice Act 1992. The sentencing principles differ, the procedural protections are different, and the long-term consequences of decisions made at 14 or 16 can be profound. We act for young people charged with everything from street-level offending to serious indictable matters. The objective is always the same: resolve the matter in a way that does not define the next ten years.',
      charges: [
        { label: 'Assault (youth)', court: 'Childrens Court' },
        { label: 'Property offences', court: 'Childrens Court' },
        { label: 'Dangerous operation', court: 'Childrens Court' },
        { label: 'Serious indictable (youth)', court: 'Childrens Court — sentence' },
        { label: 'Bail applications (youth)', court: 'Childrens Court' },
        { label: 'Review of police decisions', court: 'Childrens Court' },
      ],
      approach: [
        { n: '01', k: 'Diversion & cautioning', v: 'Where appropriate, we push hard for cautioning, restorative justice or diversionary pathways that keep young people out of the system.' },
        { n: '02', k: 'Family & support', v: 'We work closely with families and support services. Sentencing submissions for young people are richer when they are supported.' },
        { n: '03', k: 'Detention as last resort', v: 'Detention is a sentence of last resort under the Act. We hold the Crown to that standard at every step.' },
        { n: '04', k: 'The long view', v: 'Findings of guilt as a child carry lasting consequences. We think about the 18-year-old and the 28-year-old, not just today.' },
      ],
      faqs: [
        { q: 'Will a childhood conviction follow my child forever?', a: 'Not always. Queensland has a rehabilitation regime that allows some findings to become spent. We advise on what will and will not stay on record and structure submissions accordingly.' },
        { q: 'Can a young person be held in adult custody?', a: 'There are legislative protections around how and where young people are held. Bail applications for young people are a central part of our work.' },
        { q: 'Does my child have to give a police interview?', a: 'No. Young people have the same right to silence as adults — and a support person must be present if an interview does occur. Call us before any interview happens.' },
      ],
      related: ['Violence', 'Drug Offences', 'Bail Applications'],
    },

    'bail-applications': {
      slug: 'bail-applications', fig: '07', parent: 'Criminal Law', name: 'Bail Applications',
      heroA: 'Bail', heroB: 'applications.',
      heroImg: 'https://images.unsplash.com/photo-1589994160957-7e4d0b5be6f2?w=900&q=85',
      tagline: 'A well-run bail application can change the entire trajectory of a matter. Preparation — not just appearance — is what wins them.',
      overview: 'Bail applications are often the first real test in a serious matter, and frequently decisive. After the 2026 amendments, show-cause matters require a higher standard of preparation than ever. We run Magistrates Court, Supreme Court and Childrens Court bail applications across Queensland. Every application turns on the quality of the material — employment, residential security, proposed conditions, surety, program engagement — and on how it is put before the court.',
      charges: [
        { label: 'Magistrates Court bail', court: 'Magistrates Court' },
        { label: 'Supreme Court bail application', court: 'Supreme Court' },
        { label: 'Show-cause bail matters', court: 'Supreme Court' },
        { label: 'Review of refusal of bail', court: 'Supreme Court' },
        { label: 'Variation of bail conditions', court: 'Any court' },
        { label: 'Childrens Court bail', court: 'Childrens Court' },
      ],
      approach: [
        { n: '01', k: 'Material preparation', v: 'Employment letters, statutory declarations, surety affidavits, program confirmations — the bail brief is built before the application is filed.' },
        { n: '02', k: 'Conditions strategy', v: 'A properly proposed package of conditions — curfew, reporting, sureties, technology — can shift a refusal into a grant.' },
        { n: '03', k: 'Show-cause matters', v: 'Where show-cause applies, we address the statutory presumption directly and methodically, not by formula.' },
        { n: '04', k: 'Written submissions', v: 'In appropriate matters we prepare full written submissions in advance. Judges appreciate them and they often decide the outcome.' },
      ],
      faqs: [
        { q: 'Can I apply for bail more than once?', a: 'In the Magistrates Court, further applications generally require a material change in circumstances. A Supreme Court application is available after a Magistrates refusal and is heard afresh.' },
        { q: 'What is a show-cause matter?', a: 'For certain offences, the onus shifts to the applicant to show cause why detention is not justified. The test is more demanding and requires careful preparation.' },
        { q: 'Will I get my passport back?', a: 'Passports are commonly surrendered as a bail condition in serious matters. We apply to vary those conditions where appropriate — for travel, family or work reasons.' },
      ],
      related: ['Appeals', 'Drug Offences', 'Murder & Manslaughter'],
    },

    'appeals': {
      slug: 'appeals', fig: '08', parent: 'Criminal Law', name: 'Appeals',
      heroA: 'Appeals.', heroB: '',
      heroImg: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=85',
      tagline: 'Conviction and sentence appeals in the Queensland Court of Appeal and, where grounds support it, the High Court of Australia.',
      overview: 'Appellate work is distinct from trial work. It is forensic, written, and lives in the transcript and the authorities. We act in conviction and sentence appeals in the Queensland Court of Appeal, and in applications for special leave to the High Court of Australia. The first question in any appeal is always the same: is there a proper ground? The second is whether it can be run well. We will tell you clearly on both.',
      charges: [
        { label: 'Sentence appeal — QCA', court: 'Queensland Court of Appeal' },
        { label: 'Conviction appeal — QCA', court: 'Queensland Court of Appeal' },
        { label: 'Miscarriage of justice grounds', court: 'Queensland Court of Appeal' },
        { label: 'Application for extension of time', court: 'Queensland Court of Appeal' },
        { label: 'Special leave — High Court', court: 'High Court of Australia' },
        { label: 'Magistrates appeals to District Court', court: 'District Court' },
      ],
      approach: [
        { n: '01', k: 'Merits review', v: 'Before anything is filed, we review the transcript, reasons and authorities. An honest view on prospects is the starting point.' },
        { n: '02', k: 'Grounds drafting', v: 'Grounds are drafted to be argued, not to be long. The best appeals run on one or two well-chosen points.' },
        { n: '03', k: 'Senior Counsel', v: 'For the Court of Appeal and High Court, we brief Senior Counsel. For Magistrates appeals, we often appear directly.' },
        { n: '04', k: 'Written submissions', v: 'Written submissions are where appeals are won. They are drafted carefully, revised, and tested against the record.' },
      ],
      faqs: [
        { q: 'What are the time limits?', a: 'Generally 28 days from conviction or sentence to file in the Court of Appeal. Extensions are possible in appropriate cases but should not be relied on.' },
        { q: 'Are appeals worth running?', a: 'Only where there is a proper ground. The Court of Appeal does not re-hear the case on the merits. We will tell you frankly whether the grounds exist.' },
        { q: 'What about the High Court?', a: 'Special leave is granted in a small proportion of applications and for issues of general public importance. We advise candidly on prospects before anything is filed.' },
      ],
      related: ['Bail Applications', 'Murder & Manslaughter', 'Fraud & Dishonesty'],
    },
  },

  // News (full list for /news)
  news: [
    { slug: 'bail-2026', cat: 'Criminal Law', title: 'Bail applications after the 2026 amendments: what actually changed', date: '14 Apr 2026', read: '6 min', author: 'Joe Wicking', img: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&q=80', excerpt: 'The 2026 amendments tightened the show-cause regime in ways that matter for anyone applying for bail on serious charges. Here is what the changes do, and how applications should now be run.' },
    { slug: 'work-licence', cat: 'Traffic Law',  title: 'When a work licence is realistic — and when it isn\u2019t', date: '02 Apr 2026', read: '4 min', author: 'Sam Jackson', img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80', excerpt: 'A quick guide to the threshold requirements for a work licence in Queensland, and the mistakes that get otherwise good applications refused.' },
    { slug: 'ccc-48',    cat: 'Corporate',    title: 'Responding to a CCC notice: the first 48 hours', date: '21 Mar 2026', read: '7 min', author: 'Joe Wicking', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80', excerpt: 'A CCC notice is not a suggestion. The first two days shape everything that follows. What to do, what not to do, and when to call a lawyer.' },
    { slug: 'trafficking-threshold', cat: 'Criminal Law', title: 'Drug trafficking charges: the threshold question of commerciality', date: '10 Mar 2026', read: '8 min', author: 'Joe Wicking', img: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=1200&q=80', excerpt: 'Trafficking requires more than a quantity. It requires proof of carrying on a business. Where that line sits is often the entire case.' },
    { slug: 'sentencing-reforms', cat: 'Criminal Law', title: 'Sentencing reforms and the return of mandatory minimums', date: '28 Feb 2026', read: '5 min', author: 'Sam Jackson', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80', excerpt: 'Queensland\u2019s sentencing framework has shifted again. What the changes mean for plea strategy and sentence submissions.' },
    { slug: 'police-powers-search', cat: 'Criminal Law', title: 'Police powers of search: the limits still matter', date: '12 Feb 2026', read: '6 min', author: 'Joe Wicking', img: 'https://images.unsplash.com/photo-1453873531674-2151bcd01707?w=1200&q=80', excerpt: 'A reminder that police powers are granted by statute, not unlimited by nature. Where the limits lie, and how to use them.' },
    { slug: 'youth-justice-review', cat: 'Criminal Law', title: 'The youth justice review: practical implications for young clients', date: '30 Jan 2026', read: '5 min', author: 'Sam Jackson', img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200&q=80', excerpt: 'The review tabled last week proposes meaningful changes to how young people are dealt with by police and the courts.' },
    { slug: 'dui-defences', cat: 'Traffic Law', title: 'DUI defences that actually work', date: '18 Jan 2026', read: '4 min', author: 'Sam Jackson', img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=80', excerpt: 'Most DUI matters do not have a viable defence. Some do. Here is how to tell the difference before the first court date.' },
  ],

  // Extended office info for Locations page
  locations: [
    {
      slug: 'gold-coast',
      city: 'Gold Coast',
      role: 'Head office',
      address: 'Level 2, 17 Short Street',
      suburb: 'Southport QLD 4215',
      phone: '(07) 5527 0020',
      phoneRaw: '0755270020',
      hours: 'Monday–Friday · 8:30am – 5:00pm',
      after: '24/7 police station & emergency line',
      mapCoords: 'Southport · Gold Coast',
      lead: 'Our Gold Coast office is the firm\u2019s head office. From Southport we act in matters in the Southport, Coolangatta, Beenleigh, Brisbane and Cairns courts — and on appeal to the Queensland Court of Appeal and High Court of Australia.',
      courts: ['Southport Magistrates Court', 'Southport District Court', 'Coolangatta Magistrates Court', 'Beenleigh Magistrates & District Court', 'Brisbane Supreme & District Courts'],
    },
    {
      slug: 'brisbane',
      city: 'Brisbane',
      role: 'City office',
      address: 'Level 10, 95 North Quay',
      suburb: 'Brisbane City QLD 4000',
      phone: '(07) 3916 4388',
      phoneRaw: '0739164388',
      hours: 'Monday–Friday · 8:30am – 5:00pm',
      after: '24/7 police station & emergency line',
      mapCoords: 'North Quay · Brisbane',
      lead: 'Our Brisbane office sits directly across from the Supreme and District Court complex on North Quay. We appear regularly in the Brisbane courts and in CCC investigative hearings.',
      courts: ['Brisbane Magistrates Court', 'Brisbane District Court', 'Brisbane Supreme Court', 'Queensland Court of Appeal', 'CCC Investigative Hearings'],
    },
  ],
};
