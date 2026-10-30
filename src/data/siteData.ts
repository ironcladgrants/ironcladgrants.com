export const PORTAL_URL = 'https://portal.ironcladgrants.com';

export interface ThemeConfig {
  id: 'slate' | 'obsidian-oled' | 'obsidian-vampire' | 'coop-forest' | 'light';
  name: string;
  badge: string;
  description: string;
  background: string;
  foreground: string;
  border: string;
}

export const AVAILABLE_THEMES: ThemeConfig[] = [
  {
    id: 'slate',
    name: 'Executive Slate',
    badge: 'DEFAULT',
    description: 'Deep navy-slate canvas with emerald compliance accents.',
    background: '#0f172a',
    foreground: '#10b981',
    border: '#334155',
  },
  {
    id: 'obsidian-oled',
    name: 'Obsidian OLED',
    badge: '#000000',
    description: 'True pitch-black OLED surface with maximum contrast.',
    background: '#000000',
    foreground: '#ffffff',
    border: '#262626',
  },
  {
    id: 'coop-forest',
    name: 'Co-op Forest',
    badge: 'ORGANIC',
    description: 'Warm woodland greens crafted for cooperatives & land trusts.',
    background: '#062016',
    foreground: '#34d399',
    border: '#114232',
  },
  {
    id: 'obsidian-vampire',
    name: 'Crimson Red Team',
    badge: 'AUDITOR',
    description: 'High-alert dark crimson palette for Red Team peer review.',
    background: '#080204',
    foreground: '#f43f5e',
    border: '#3b0a14',
  },
  {
    id: 'light',
    name: 'Publication Daylight',
    badge: 'PRINT',
    description: 'Crisp high-contrast daylight mode for board packets & review.',
    background: '#f8fafc',
    foreground: '#059669',
    border: '#cbd5e1',
  },
];

export interface PricingPlan {
  id: 'starter' | 'growth' | 'enterprise';
  name: string;
  badge?: string;
  popular?: boolean;
  targetAudience: string;
  pricePerSeatAnnual: number;
  pricePerSeatMonthly: number;
  minSeats: number;
  defaultSeats: number;
  monthlyDraftsLimitPerSeat: number;
  portalPath: string;
  features: string[];
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Tier',
    targetAudience: 'Individual Freelancers, Solo Consultants & Emerging Nonprofits',
    pricePerSeatAnnual: 39,
    pricePerSeatMonthly: 49,
    minSeats: 1,
    defaultSeats: 1,
    monthlyDraftsLimitPerSeat: 5,
    portalPath: '/pricing?tier=starter',
    features: [
      '5 AI-assisted proposal drafts / seat / month',
      'Grants.gov & Candid open opportunity catalog sync',
      'Standard PostgreSQL RAG institutional grounding (10 KB items)',
      'ProPublica Form 990-PF auto-hydration & giving curves',
      'RFC 5545 iCalendar (.ics) deadline feed & alerts',
      'Markdown, print-ready PDF & Word (.doc) exports',
    ],
  },
  {
    id: 'growth',
    name: 'Growth Tier',
    badge: 'Most Popular • Best ROI',
    popular: true,
    targetAudience: 'Collaborative 501(c)(3) Nonprofits, Co-ops & Community Hubs',
    pricePerSeatAnnual: 79,
    pricePerSeatMonthly: 99,
    minSeats: 2,
    defaultSeats: 3,
    monthlyDraftsLimitPerSeat: 15,
    portalPath: '/pricing?tier=growth',
    features: [
      '15 pooled AI proposal drafts / seat / month',
      'Full Supabase & SeaweedFS Institutional Knowledge Base',
      'Multi-User RBAC (Owner, Admin, Writer, Reviewer)',
      'Multi-Persona Red Team Peer Review (1–9 NIH/NSF scale)',
      'Automated OMB SF-424 & SF-424A itemized budget ledger',
      '2 CFR 200.414 MTDC Indirect Cost Solver & 200.430 Effort PAR',
      'Federal Portal Pre-Flight Validator (Margins, Fonts, 50-char names)',
      'One-Click Certified Submission Binder (.ZIP with XML cover)',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise Tier',
    badge: 'OSP & Consortia',
    targetAudience: 'Universities (OSP), Health Systems, Foundations & Municipalities',
    pricePerSeatAnnual: 159,
    pricePerSeatMonthly: 199,
    minSeats: 5,
    defaultSeats: 10,
    monthlyDraftsLimitPerSeat: -1,
    portalPath: '/pricing?tier=enterprise',
    features: [
      'Unlimited AI proposal generations on 24GB+ Billama GPU nodes',
      'Dedicated Supabase PostgreSQL RLS & SeaweedFS tenant isolation',
      'FreeIPA LDAP / Enterprise SSO & NIST AAL3 FIDO2 support',
      'Consortium Subrecipient Guest Portals with SAM.gov UEI check',
      'Cryptographic SHA-256 tamper-evident Single Audit log',
      'Post-Award OMB SF-425 Federal Financial Report compiler',
      'Custom scoring rubrics, Slack/CRM PQL webhooks & dedicated strategist',
    ],
  },
];

export interface DraftPack {
  id: string;
  name: string;
  price: number;
  draftsCount: number;
  savingsBadge?: string;
  description: string;
}

export const DRAFT_PACKS: DraftPack[] = [
  {
    id: 'pack_sprint_10',
    name: 'Sprint Booster Pack',
    price: 149,
    draftsCount: 10,
    description: 'Ideal for seasonal foundation deadlines or rapid LOI turnarounds. Never expires.',
  },
  {
    id: 'pack_blitz_25',
    name: 'Quarterly Blitz Pack',
    price: 299,
    draftsCount: 25,
    savingsBadge: 'Save 20%',
    description: 'Built for multi-program federal grant cycles (USDA, EPA, DOE, NSF). Never expires.',
  },
  {
    id: 'pack_surge_75',
    name: 'Consortium Surge Pack',
    price: 699,
    draftsCount: 75,
    savingsBadge: 'Save 38%',
    description: 'High-volume capacity for university OSP offices and regional coalitions.',
  },
];

export interface PlatformPillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  badge: string;
  portalPath: string;
  portalCta: string;
  description: string;
  capabilities: {
    name: string;
    detail: string;
  }[];
}

export const PLATFORM_PILLARS: PlatformPillar[] = [
  {
    id: 'matching-intelligence',
    number: 'Pillar 01',
    title: 'Funder Intelligence & 990-PF Engine',
    subtitle: 'Grants.gov, Candid & ProPublica 990-PF Auto-Hydration',
    badge: 'Phase 1: Research',
    portalPath: '/matching',
    portalCta: 'Launch Funder Matching in Portal',
    description:
      'Stop guessing ask amounts. Ironclad synchronizes federal opportunities (Grants.gov, DOE, USDA, NIH, NSF, EPA) with private foundation tax filings to compute mathematical fit before you write a single word.',
    capabilities: [
      {
        name: 'ProPublica Form 990-PF Auto-Hydration',
        detail: 'Enter any Foundation EIN to pull 3-year Part XV grant schedules, asset totals, and median award sizes automatically.',
      },
      {
        name: '5-Axis SVG Funder Fit Radar & Dossiers',
        detail: 'Scores Mission Alignment, Legal Eligibility, Funding Size Fit, Cost-Share Feasibility, and Competitiveness with letter grades (A+ to F).',
      },
      {
        name: 'Statistical Sweet Spot Ask Calculator',
        detail: 'Computes the 25th–75th percentile giving curve and recommends the optimal first-time vs. repeat grantee request amount.',
      },
    ],
  },
  {
    id: 'knowledge-rag',
    number: 'Pillar 02',
    title: 'Institutional Knowledge Base & Zero-Hallucination RAG',
    subtitle: 'pgvector HNSW Semantic Retrieval + SeaweedFS Object Vault',
    badge: 'Phase 2: Grounding',
    portalPath: '/knowledge',
    portalCta: 'Open Knowledge Base in Portal',
    description:
      'General-purpose chatbots fabricate statistics and disqualify applicants. Ironclad constrains every narrative claim to your verified 501(c)(3) determination letters, audited Form 990s, biosketches, and board rosters.',
    capabilities: [
      {
        name: 'Source-Level Evidence Inspector',
        detail: 'Every quantitative claim carries an inline citation (e.g., [Verified: FY2025 Audited Financials, p. 4]). Ungrounded claims trigger blocking alerts.',
      },
      {
        name: 'Supabase RLS + SeaweedFS Vault Isolation',
        detail: 'Kernel-level PostgreSQL Row-Level Security by org_id combined with encrypted SeaweedFS object storage and a strict Zero-Training Guarantee.',
      },
      {
        name: 'Multi-Modal Logic Model & WBS Generator',
        detail: 'Synthesizes publication-grade Mermaid.js and vector SVG logic models and work breakdown structures directly from your project scope.',
      },
    ],
  },
  {
    id: 'copilot-redteam',
    number: 'Pillar 03',
    title: 'AI Copilot Studio & Multi-Persona Red Team',
    subtitle: '24GB+ Decentralized Billama GPU Inference & NIH/NSF Scoring',
    badge: 'Phase 3: Drafting & Review',
    portalPath: '/copilot',
    portalCta: 'Open AI Copilot Studio in Portal',
    description:
      'Draft all 8 federal narrative sections routed through dedicated 24GB+ Billama GPU nodes, then subject your proposal to an adversarial 3-persona simulated review panel before submission.',
    capabilities: [
      {
        name: '8-Section Structured Federal Drafter',
        detail: 'Generates Executive Summary, Statement of Need, SMART Objectives, Methodology & Risk Matrix, Key Personnel, Evaluation/CQI, SF-424A Justification, and Sustainability.',
      },
      {
        name: '3-Persona Red Team Peer Review (1–9 Scale)',
        detail: 'Simulates a Domain Technical Scientist, a 2 CFR 200 Federal Compliance Auditor, and a Community Impact Advocate with actionable line-level critiques.',
      },
      {
        name: 'Flesch-Kincaid Readability & AI Disclosure Generator',
        detail: 'Optimizes prose clarity for fatigued review panels and generates certified AI disclosure statements compliant with NIH NOT-OD-23-147 and NSF PAPPG.',
      },
    ],
  },
  {
    id: 'financial-os',
    number: 'Pillar 04',
    title: 'Full-Lifecycle 2 CFR 200 Federal Financial OS',
    subtitle: 'SF-424A Budgets, MTDC Solver, 200.430 Effort & Post-Award SF-425',
    badge: 'Phase 4: Pre & Post-Award Finance',
    portalPath: '/postaward',
    portalCta: 'Explore Post-Award OS in Portal',
    description:
      'Other tools abandon you the moment you click submit. Ironclad manages the entire financial lifecycle from pre-award SF-424A object class budgets through post-award burn rates and Single Audit closeout.',
    capabilities: [
      {
        name: 'Official OMB SF-424, SF-424A & SF-425 Engines',
        detail: 'Synthesizes standard federal cover pages, Section B Object Class Categories (Personnel, Fringe, Travel, Equipment, Contractual), and Box 10 Federal Financial Reports.',
      },
      {
        name: '2 CFR 200.414 MTDC Indirect Cost Solver',
        detail: 'Automatically excludes capital equipment >$5,000, participant support costs, and subaward portions >$25,000 when applying 10%–15% de minimis or NICRA rates.',
      },
      {
        name: '2 CFR 200.430 Time & Effort PAR Certification',
        detail: 'Tracks budgeted vs. actual personnel payroll allocations across grants and triggers mandatory Single Audit warnings if variance exceeds 5%.',
      },
    ],
  },
  {
    id: 'governance-preflight',
    number: 'Pillar 05',
    title: 'Enterprise Governance & Federal Portal Pre-Flight',
    subtitle: 'Subrecipient Portals, SHA-256 Audit Logs & 1-Click Submission Binder',
    badge: 'Phase 5: Packaging & Audit Defense',
    portalPath: '/team',
    portalCta: 'View Team Governance in Portal',
    description:
      'Prevent 4:58 PM Grants.gov technical rejections and consortium bottlenecks with automated pre-flight checks, isolated partner workspaces, and cryptographic tamper-evident logs.',
    capabilities: [
      {
        name: 'Grants.gov & Research.gov Pre-Flight Validator',
        detail: 'Audits 50-character ASCII filename rules, 1-inch margins, embedded fonts, Section 508 accessibility tags, and 300+ DPI figures prior to packaging.',
      },
      {
        name: 'Consortium Subrecipient Guest Portal',
        detail: 'Tokenized guest workspaces for partner institutions with live 12-character SAM.gov UEI verification, debarment checks, and scoped section locking.',
      },
      {
        name: 'SHA-256 Hash-Chained Audit Trail & 1-Click ZIP Binder',
        detail: 'Every edit and Stage-Gate sign-off is chained with SHA-256 hashes. Exports a complete .ZIP binder (.DOC narrative, SF-424A CSV, SVG diagrams, XML cover).',
      },
    ],
  },
];

export const COMPARISON_ROWS = [
  {
    feature: 'Primary Operating Scope',
    contingency: 'Manual freelance writing for 5%–10% of award',
    legacyDb: 'Funder search & 990 lookup only (Candid / FDO)',
    genericAi: 'Ungrounded chat prompt generation (ChatGPT / Claude)',
    ironclad: 'End-to-End Grant OS: Research, RAG Drafting, Red Team, Pre-Flight & Post-Award',
  },
  {
    feature: '2 CFR 200.430 & AFP Ethical Compliance',
    contingency: 'Impermissible contingent fee — high Single Audit clawback risk',
    legacyDb: 'Permissible subscription (no writing or compliance engine)',
    genericAi: 'Violates NIH NOT-OD-23-147 / NSF PAPPG without certified disclosure',
    ironclad: '100% permissible SaaS operational cost (2 CFR 200.454) + AI Disclosure Generator',
  },
  {
    feature: 'Cost on a $500,000 Grant Award',
    contingency: '$25,000 – $50,000 forfeited from mission capital',
    legacyDb: '$2,000 – $5,000/yr (search database only)',
    genericAi: '$240/yr + 60 hrs manual formatting & high disqualification risk',
    ironclad: '$2,844/yr (3 Growth Seats) — Retain +$37,156+ for your mission',
  },
  {
    feature: 'Anti-Hallucination Grounding',
    contingency: 'Manual copy-paste from old Word files',
    legacyDb: 'N/A',
    genericAi: 'None — invents citations, statistics, and institutional history',
    ironclad: 'Private pgvector HNSW RAG with inline source-level verification alerts',
  },
  {
    feature: 'Federal Financial & Post-Award OS',
    contingency: 'Writer disappears immediately after submission',
    legacyDb: 'None',
    genericAi: 'Cannot compute MTDC exclusions or SF-425 Box 10 math',
    ironclad: 'Built-in SF-424A, 2 CFR 200.414 MTDC solver, 200.430 Effort PAR & SF-425 compiler',
  },
  {
    feature: 'Consortium & Subrecipient Collaboration',
    contingency: 'Chaotic email attachments & version collisions',
    legacyDb: 'Basic shared saved searches',
    genericAi: 'Single-user chat threads',
    ironclad: 'Isolated Subrecipient Guest Portal, SAM.gov UEI check, RBAC & SHA-256 audit log',
  },
];
