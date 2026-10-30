export interface WalkthroughGuide {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  portalPath: string;
  portalButtonLabel: string;
  steps: {
    title: string;
    description: string;
    tip?: string;
    code?: string;
  }[];
  shortcuts?: {
    key: string;
    description: string;
  }[];
}

export const WALKTHROUGH_GUIDES: WalkthroughGuide[] = [
  {
    id: 'funder-matching',
    title: '1. Funder Matching, 990-PF Hydration & Fit Dossiers',
    subtitle: 'Hydrate private foundation 990-PF tax filings, analyze 5-axis fit, and compute your statistical Sweet Spot ask.',
    category: 'Phase 1: Research & Discovery',
    duration: '4 mins',
    portalPath: '/matching',
    portalButtonLabel: 'Open Funder Matching on Portal',
    steps: [
      {
        title: 'Paste Your Project Abstract or Mission Statement',
        description:
          'Navigate to 1. Funder Matching on portal.ironcladgrants.com. Paste your project concept paper, abstract, or 501(c)(3) mission statement into the AI Abstract Fit Analyzer.',
      },
      {
        title: 'Auto-Hydrate Foundation IRS Form 990-PF Data',
        description:
          'Enter any Foundation EIN (or select from preloaded national and regional funders). Ironclad queries ProPublica 990-PF schedules to extract 3-year giving curves, total assets, and median first-time awards.',
        tip: 'Look at the 25th–75th percentile Sweet Spot band before setting your budget—asking above the 75th percentile as a first-time applicant drops win probability by 68%.',
      },
      {
        title: 'Inspect the 5-Axis SVG Funder Fit Radar',
        description:
          'Review your multidimensional score (A+ to F) across Mission Alignment, Legal Eligibility, Funding Size Fit, Cost-Share Feasibility, and Competitiveness, including strategic red flags.',
      },
      {
        title: 'Promote Opportunity to AI Copilot Studio',
        description:
          'Click "Start Proposal Draft" on any high-fit opportunity to carry its NOFO/RFP constraints, word limits, and cost-share rules directly into the AI Copilot Studio.',
      },
    ],
    shortcuts: [
      { key: '⌘K / Ctrl+K', description: 'Open Global Command Palette to search funders' },
      { key: 'Esc', description: 'Close Funder Dossier modal' },
    ],
  },
  {
    id: 'knowledge-base',
    title: '2. Institutional Knowledge Base & Zero-Hallucination Grounding',
    subtitle: 'Upload 501(c)(3) determination letters, audited 990s, and biosketches into your isolated pgvector + SeaweedFS vault.',
    category: 'Phase 2: Institutional Assets',
    duration: '5 mins',
    portalPath: '/knowledge',
    portalButtonLabel: 'Open Knowledge Base on Portal',
    steps: [
      {
        title: 'Provision or Select Your Organization Workspace',
        description:
          'Use the Organization Switcher in the top navbar (or Sign In / Sign Up) to select your tenant. Every record is isolated at the PostgreSQL kernel level via Row-Level Security (RLS) by org_id.',
      },
      {
        title: 'Upload Core Institutional Records',
        description:
          'Upload your IRS 501(c)(3) determination letter, most recent audited financial statements, Form 990, Board of Directors roster, and Key Personnel NIH/NSF biosketches.',
        tip: 'Documents are semantically chunked and indexed with pgvector HNSW graphs while raw files are stored in encrypted SeaweedFS buckets.',
      },
      {
        title: 'Verify Grounding Chunks & Citation Tags',
        description:
          'Inspect how Ironclad extracts verifiable statistics (e.g., annual operating budget, beneficiaries served, DUNS/SAM.gov UEI) so the AI Copilot only cites factual institutional evidence.',
      },
    ],
  },
  {
    id: 'copilot-redteam',
    title: '3. AI Copilot Drafting, Red Team Review & Pre-Flight Binder',
    subtitle: 'Synthesize 8 compliant sections on 24GB+ Billama GPUs, run 3-persona peer review, and export a certified ZIP binder.',
    category: 'Phase 3: AI Copilot Studio',
    duration: '10 mins',
    portalPath: '/copilot',
    portalButtonLabel: 'Launch AI Copilot Studio on Portal',
    steps: [
      {
        title: 'Generate All 8 Federal Narrative Sections',
        description:
          'Select your target RFP and active Knowledge Base assets. Ironclad routes generation through 24GB+ decentralized Billama GPU nodes to draft Executive Summary, Need, SMART Objectives, Methodology, Personnel, Evaluation, SF-424A Budget Justification, and Sustainability.',
      },
      {
        title: 'Audit Claims in the Live Evidence Inspector',
        description:
          'Review inline RAG citations (e.g., [Verified: FY2025 Audited Financials, Page 2]). Any ungrounded quantitative claim is flagged in amber/crimson so you can bind or revise it immediately.',
      },
      {
        title: 'Run the 3-Persona Simulated Red Team Review',
        description:
          'Trigger the Red Team Reviewer to score your draft on a 1–9 NIH/NSF scale across three adversarial personas: Technical Domain Scientist, 2 CFR 200 Compliance Auditor, and Community Impact Advocate.',
        tip: 'Check the Flesch-Kincaid Readability score alongside Red Team feedback—aim for grade level 10–12 for maximum reviewer comprehension.',
      },
      {
        title: 'Generate Multi-Modal Logic Models & WBS Diagrams',
        description:
          'Click "Generate Logic Model & WBS" to synthesize Mermaid.js and vector SVG charts mapping Inputs → Activities → Outputs → Outcomes.',
      },
      {
        title: 'Execute Federal Portal Pre-Flight & Export 1-Click ZIP Binder',
        description:
          'Run the Pre-Flight Validator to sanitize 50-character Grants.gov filenames, verify 1-inch margins and font embedding, generate your NIH/NSF AI Disclosure Certificate, and download the complete .ZIP Submission Binder.',
      },
    ],
    shortcuts: [
      { key: '⌘S / Ctrl+S', description: 'Save current section draft & append SHA-256 audit hash' },
      { key: '⌘P / Ctrl+P', description: 'Print / Export publication-grade PDF packet' },
    ],
  },
  {
    id: 'postaward-os',
    title: '4. Post-Award Financial OS: SF-425, MTDC & 2 CFR 200.430 Effort',
    subtitle: 'Manage awarded grants, calculate Modified Total Direct Costs, certify personnel effort, and compile SF-425 reports.',
    category: 'Phase 4: Post-Award Compliance',
    duration: '6 mins',
    portalPath: '/postaward',
    portalButtonLabel: 'Open Post-Award OS on Portal',
    steps: [
      {
        title: 'Monitor Award Burn Rate & Object Class Ledger',
        description:
          'Switch to 4. Post-Award OS on portal.ironcladgrants.com. Select an active federal or foundation award to inspect elapsed time vs. funds expended across OMB SF-424A Section B object classes.',
      },
      {
        title: 'Solve Modified Total Direct Costs (2 CFR 200.414)',
        description:
          'Open the MTDC Calculator tab. Enter direct personnel, fringe, travel, equipment, and subawards. The solver automatically strips capital equipment >$5,000 and subaward portions >$25,000 before computing your 10%–15% de minimis or NICRA indirect recovery.',
      },
      {
        title: 'Certify Personnel Time & Effort (2 CFR 200.430)',
        description:
          'Open the Effort Certification tab to compare budgeted FTE percentages against actual payroll activity reports (PARs). Variances exceeding 5.0% trigger automated Single Audit remediation alerts.',
      },
      {
        title: 'Compile Official OMB SF-425 Federal Financial Report',
        description:
          'Click "Generate SF-425 Report" to compute Box 10a–10o cash receipts, disbursements, federal share of unliquidated obligations, and recipient share match requirements.',
      },
    ],
  },
  {
    id: 'readiness-and-governance',
    title: '5. Grant Readiness Diagnostic, Team RBAC & Subrecipient Portals',
    subtitle: 'Benchmark your 6 federal readiness pillars, invite consortium subrecipients, and inspect SHA-256 audit logs.',
    category: 'Phase 5: Governance & Readiness',
    duration: '5 mins',
    portalPath: '/readiness',
    portalButtonLabel: 'Run Readiness Diagnostic on Portal',
    steps: [
      {
        title: 'Run the 6-Pillar Grant Readiness Diagnostic',
        description:
          'Navigate to 5. Readiness Diagnostic (/readiness) and input your EIN, 12-char SAM.gov UEI, accounting system status, indirect cost rate type, and operating budget to generate an instant readiness score and downloadable Markdown certificate.',
      },
      {
        title: 'Configure Granular Team RBAC & Section Locking',
        description:
          'In Team & Roles (/team), assign members as Owner, Admin, Grant Writer, Reviewer, or Guest. Enable real-time section collision locking and Stage-Gate sign-offs.',
      },
      {
        title: 'Invite Consortium Partners via Subrecipient Guest Portal',
        description:
          'Generate a scoped Guest Workspace token for external subrecipients. Ironclad verifies their 12-character SAM.gov UEI and debarment status before allowing them to upload their Scope of Work and SF-424A subaward budget.',
      },
      {
        title: 'Verify the Cryptographic SHA-256 Audit Trail',
        description:
          'Open the Audit Trail tab to verify the tamper-evident hash chain of every edit, sign-off, and budget transfer for Single Audit inspectors.',
      },
    ],
  },
  {
    id: 'gitops-cli-workflow',
    title: '6. GitOps Markdown Editor, RFC 5545 Calendar & Terminal CLI',
    subtitle: 'Manage proposals as code, subscribe to calendar.ics feeds, and submit multi-forge Pull Requests.',
    category: 'Developer & GitOps Workflows',
    duration: '5 mins',
    portalPath: '/grants',
    portalButtonLabel: 'Explore Grants & Calendar on Portal',
    steps: [
      {
        title: 'Edit Proposals in Dual WYSIWYG / Raw Markdown Mode',
        description:
          'Use the built-in Editor to toggle between rich visual formatting and raw Markdown. splitFrontmatter() protects your YAML metadata header from accidental corruption.',
      },
      {
        title: 'Subscribe to the Live RFC 5545 iCalendar Feed',
        description:
          'In the Calendar view (/calendar), switch between Month Grid, Chronological Agenda, and Multi-Year Gantt Timeline, or subscribe to calendar.ics in Google Calendar, Apple Calendar, or Outlook.',
        code: 'https://portal.ironcladgrants.com/calendar',
      },
      {
        title: 'Run Terminal TUI & Automated Pull Requests',
        description:
          'Developers and DevOps teams can manage the grant monorepo from the terminal or submit 1-click Pull Requests to GitHub, GitLab, or Codeberg/Forgejo:',
        code: `pnpm install
pnpm test        # Runs 185+ Vitest unit tests across 15 suites
pnpm dev         # Launches local web workspace`,
      },
    ],
    shortcuts: [
      { key: '1 - 5', description: 'Switch tabs in Terminal CLI mode' },
      { key: 'e', description: 'Open highlighted proposal in $EDITOR' },
      { key: 'p', description: 'Create atomic branch & Pull Request' },
    ],
  },
];
