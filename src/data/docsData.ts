export interface DocSection {
  id: string;
  title: string;
  category: 'architecture' | 'compliance' | 'workflows' | 'api-reference' | 'deployment';
  summary: string;
  badge: string;
  portalPath: string;
  content: string;
  codeSnippets?: {
    label: string;
    language: string;
    code: string;
  }[];
}

export const DOC_SECTIONS: DocSection[] = [
  {
    id: 'overview',
    title: 'Grant Operating System Architecture',
    category: 'architecture',
    summary:
      'End-to-end architecture of Ironclad Grants: 3-phase proposal lifecycle, PostgreSQL pgvector HNSW RAG, SeaweedFS object storage, FreeIPA LDAP, and 24GB+ decentralized Billama GPU inference.',
    badge: 'Core Architecture',
    portalPath: '/matching',
    content: `Ironclad Grants is an enterprise, multi-tenant **Grant Operating System (Grant OS)** engineered for 501(c)(3) nonprofits, worker cooperatives, universities (Offices of Sponsored Programs), and municipal agencies.

### Three-Phase Lifecycle + Post-Award OS
- **Phase 1: Funder Intelligence & 990-PF Hydration:** Synchronizes federal opportunities (Grants.gov, DOE, USDA, NIH, NSF, EPA) and private foundation tax filings via ProPublica Form 990-PF auto-hydration. Evaluates 5 dimensions (Mission Alignment, Legal Eligibility, Funding Size Fit, Cost-Share Feasibility, Competitiveness) to compute statistical ask "sweet spots" and letter grades (\`A+\` to \`F\`).
- **Phase 2: Institutional Knowledge Base & HNSW RAG:** Stores organizational 501(c)(3) determination letters, audited Form 990s, biosketches, and board rosters inside isolated **Supabase PostgreSQL (\`pgvector\` HNSW)** and encrypted **SeaweedFS** vaults.
- **Phase 3: AI Copilot Studio & Red Team Review:** Routes 8-section proposal synthesis through **24GB+ decentralized Billama GPU nodes** via \`@billama/sdk\`, enforces source-level RAG citations, runs a 3-persona simulated peer review (1–9 scale), and packages a pre-flight validated \`.ZIP\` Submission Binder.
- **Phase 4: Post-Award 2 CFR 200 Financial OS:** Compiles OMB SF-425 Federal Financial Reports, solves 2 CFR 200.414 Modified Total Direct Costs (MTDC), and tracks 2 CFR 200.430 personnel effort variances.

### Multi-Tenant Isolation & Zero-Training Guarantee
| Layer | Technology | Security & Isolation Mechanism |
| :--- | :--- | :--- |
| **Database & Vector Index** | PostgreSQL 16 + \`pgvector\` HNSW | Row-Level Security (RLS) enforced at kernel level by \`org_id\` |
| **Directory & Auth** | FreeIPA LDAP + Supabase Auth | RBAC across \`owner\`, \`admin\`, \`writer\`, \`reviewer\`, and \`guest\` |
| **Artifact Vault** | SeaweedFS Distributed Object Store | Encrypted buckets for IRS letters, SF-424A CSVs & ZIP binders |
| **AI Inference** | Billama Decentralized 24GB+ GPUs | Ephemeral inference with strict Zero Foundation Model Training |
| **Audit Trail** | SHA-256 Hash Chain | Tamper-evident cryptographic chain for Single Audit defense |`,
    codeSnippets: [
      {
        label: 'Install Core Engine & Billama SDK',
        language: 'bash',
        code: `pnpm add @tekromancy/grant_utils @billama/sdk`,
      },
      {
        label: 'Initialize Multi-Tenant Store & Evaluate Readiness',
        language: 'typescript',
        code: `import {
  createSupabaseStore,
  evaluateGrantReadiness,
  getKPISummary,
  getAllGrants,
} from '@tekromancy/grant_utils';

const store = createSupabaseStore();
const grants = getAllGrants();
const kpi = getKPISummary(grants, 4500000);

console.log(\`Active Pipeline: $\${kpi.totalPipelineValue.toLocaleString()} (\${kpi.activeGrantsCount} grants)\`);`,
      },
    ],
  },
  {
    id: 'rag-anti-hallucination',
    title: 'Anti-Hallucination RAG & AI Disclosure Policies',
    category: 'compliance',
    summary:
      'How Ironclad constrains narrative claims to verified institutional documents and generates certified AI disclosures for NIH NOT-OD-23-147 and NSF PAPPG.',
    badge: 'Zero Hallucination',
    portalPath: '/copilot',
    content: `In competitive federal and foundation grant seeking, a single fabricated statistic, invented community partner, or unverified budget number leads to immediate administrative disqualification.

### Source-Level Evidence Inspector
- **Semantic Chunking & HNSW Retrieval:** Uploaded PDFs, Markdown files, and Form 990s are chunked with document-page metadata and indexed using \`pgvector\` HNSW cosine similarity.
- **Inline Citation Binding:** Every quantitative or historical claim synthesized in the AI Copilot Studio is bound to its source record (e.g., \`[Verified: FY2025 Audited Financials, Page 2]\`).
- **Blocking Ungrounded Claim Alerts:** The Live Quantitative Claim Verifier scans narrative drafts in real time. Any dollar figure, percentage, or headcount lacking a verified Knowledge Base source is highlighted with a high-severity warning before export.

### Federal Agency AI Disclosure Compliance
Federal agencies enforce strict rules regarding generative AI assistance in proposals:
- **NIH Guide Notice NOT-OD-23-147:** Prohibits peer reviewers from using AI to analyze confidential applications and requires applicants to ensure full originality and factual validity of AI-assisted prose.
- **NSF PAPPG (Proposal & Award Policies & Procedures Guide):** Mandates transparent disclosure of generative AI methodologies and strict verification of cited literature and data.
- **Automated Certificate Generation:** Ironclad's Compliance Auditor automatically appends a signed AI Methodology & Human-in-the-Loop Verification Statement with a cryptographic SHA-256 hash to your Submission Binder.`,
    codeSnippets: [
      {
        label: 'Verify Narrative Claims & Generate AI Disclosure Statement',
        language: 'typescript',
        code: `import {
  verifyNarrativeGrounding,
  generateAiDisclosurePolicy,
} from '@tekromancy/grant_utils';

const audit = verifyNarrativeGrounding(draftSectionText, knowledgeBaseChunks);
if (!audit.isFullyGrounded) {
  console.warn('Ungrounded quantitative claims detected:', audit.unverifiedClaims);
}

const disclosure = generateAiDisclosurePolicy({
  agency: 'NIH',
  noticeRef: 'NOT-OD-23-147',
  organizationName: 'Austin Community Technology Initiative',
  humanReviewerName: 'Dr. Elena Morales, CRA',
});`,
      },
    ],
  },
  {
    id: 'federal-financial-os',
    title: '2 CFR 200 Federal Financial & Post-Award OS',
    category: 'compliance',
    summary:
      'Statutory math engines for 2 CFR 200.414 MTDC indirect costs, 2 CFR 200.430 personnel effort tracking, OMB SF-424A budgets, and SF-425 Box 10 reporting.',
    badge: 'Uniform Guidance',
    portalPath: '/postaward',
    content: `Under Office of Management and Budget (OMB) **Uniform Guidance (2 CFR Part 200)**, recipients of federal awards face rigorous pre-award cost allowability rules and post-award Single Audit scrutiny (Subpart F).

### Why Contingency Commissions Are Illegal on Federal Grants
- **2 CFR 200.430 & AFP Code of Ethical Standards:** Paying percentage-based contingency fees to grant writers from federal awards is strictly impermissible. Violations expose nonprofits to mandatory clawbacks and SAM.gov debarment.
- **2 CFR 200.454 Allowability:** Ironclad Grants is billed as a flat, predictable per-seat SaaS productivity subscription—100% permissible as an institutional operational software expense.

### Modified Total Direct Cost (MTDC) Solver (2 CFR 200.1 & 200.414)
When applying a Negotiated Indirect Cost Rate Agreement (NICRA) or the federal **de minimis indirect cost rate (10%–15%)**, you cannot simply multiply total direct costs by the rate. Ironclad automatically excludes:
- **Capital Equipment:** Any single tangible equipment item exceeding \`$5,000\` useful life >1 year.
- **Participant Support Costs:** Stipends, subsistence allowances, and registration fees paid on behalf of trainees/participants.
- **Subaward Cap ($25,000 Rule):** Only the first \`$25,000\` of each consortium subrecipient agreement is included in the MTDC base over the life of the award.

### Personnel Time & Effort Certification (2 CFR 200.430)
- Tracks budgeted FTE effort percentages against actual certified Personnel Activity Reports (PARs).
- Automatically flags any variance exceeding **5.0%** requiring budget reallocation or prior Contracting Officer approval.`,
    codeSnippets: [
      {
        label: 'Calculate 2 CFR 200.414 MTDC & Indirect Cost Recovery',
        language: 'typescript',
        code: `import {
  calculateAwardBurnRate,
  auditRebudgetingCompliance,
  getObjectClassBudgetLedger,
} from '@tekromancy/grant_utils';

// Example MTDC calculation logic:
// Direct Personnel ($180k) + Fringe ($45k) + Supplies ($15k)
// + Equipment ($30k -> Excluded) + Subaward ($60k -> Only $25k included)
// MTDC Base = $180k + $45k + $15k + $25k = $265,000
// 15% De Minimis Indirect Recovery = $39,750`,
      },
    ],
  },
  {
    id: 'frontmatter-spec',
    title: 'Grant Frontmatter YAML Specification',
    category: 'architecture',
    summary:
      'Complete schema specification for GitOps grant proposal Markdown documents, metadata headers, and live validation with splitFrontmatter().',
    badge: 'Schema Spec',
    portalPath: '/docs',
    content: `Every grant proposal in a GitOps grantwriting repository begins with a deterministic YAML frontmatter header enclosed by triple dashes (\`---\`). Use the **Interactive YAML Playground** on this page to test your frontmatter live!

### Required & Optional YAML Fields

| Field Name | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| **id** | \`string\` | **Yes** | Unique snake_case proposal identifier (e.g., \`usda_sdgg_2027\`) |
| **title** | \`string\` | **Yes** | Official application title |
| **funder** | \`string\` | **Yes** | Federal agency or philanthropic foundation name |
| **program** | \`string\` | **Yes** | Specific Notice of Funding Opportunity (NOFO) / RFP title |
| **amount** | \`number\` | **Yes** | Total dollar amount requested (integer/float) |
| **deadline** | \`string\` | **Yes** | ISO 8601 submission date (\`YYYY-MM-DD\`) |
| **category** | \`string\` | Optional | \`Federal\`, \`Municipal\`, \`Foundation\`, or \`Cooperative\` |
| **tier** | \`string\` | Optional | Funding wave (e.g., \`Summer Federal Major\`) |
| **matchPercentage** | \`number\` | Optional | Statutory cost-share percentage (\`0\`–\`100\`, default \`0\`) |
| **portalUrl** | \`string\` | Optional | Direct URL to Grants.gov, Research.gov, or foundation portal |
| **status** | \`string\` | Optional | \`Planned\`, \`Drafting\`, \`Submitted\`, or \`Awarded\` |`,
    codeSnippets: [
      {
        label: 'Canonical Grant Proposal Frontmatter',
        language: 'yaml',
        code: `---
id: usda_sdgg_2027
title: "USDA Socially Disadvantaged Groups Grant"
funder: "USDA Rural Development"
program: "Socially Disadvantaged Groups Grant (SDGG)"
amount: 175000
amountFormatted: "$175,000"
deadline: "2027-06-15"
deadlineFormatted: "June 15, 2027"
tier: "Summer Federal Major"
category: "Federal"
matchPercentage: 0
portalUrl: "https://grants.gov"
status: "Drafting"
---

# 1. Executive Summary & Project Abstract
...`,
      },
      {
        label: 'Safe Frontmatter Extraction with splitFrontmatter()',
        language: 'typescript',
        code: `import { splitFrontmatter } from '@tekromancy/grant_utils';

const { frontmatter, body } = splitFrontmatter(markdownContent);
// Protects YAML metadata while editing narrative prose in WYSIWYG mode`,
      },
    ],
  },
  {
    id: 'preflight-and-subrecipients',
    title: 'Pre-Flight Portal Validator & Subrecipient Portals',
    category: 'workflows',
    summary:
      'Prevent Grants.gov technical rejections with 50-char ASCII filename sanitization, margin checks, SAM.gov UEI validation, and SHA-256 audit logs.',
    badge: 'Pre-Flight & RBAC',
    portalPath: '/team',
    content: `Up to 18% of first-time federal grant applications are rejected automatically by portal parsers before a human peer reviewer ever reads them. Ironclad's **Pre-Flight Portal Validator** eliminates clerical disqualifications.

### Automated Agency Pre-Flight Rules
- **Grants.gov 50-Character Filename Sanitizer:** Enforces strict \`A-Z, a-z, 0-9, _, -\` character sets, strips spaces and Unicode characters, and truncates filenames to $\\le 50$ characters.
- **Page Margin & Font Embedding Checks:** Verifies standard 1.0-inch margins, approved federal typefaces (Arial, Palatino Linotype, Georgia, Computer Modern, $\\ge 11\\text{pt}$), embedded PDF font tables, and $\\ge 300\\text{ DPI}$ raster figures.
- **Section 508 Accessibility:** Verifies alt-text tags on all generated Mermaid.js Logic Models and WBS vector diagrams.

### Consortium Subrecipient Guest Portals
- **Tokenized Scoped Workspaces:** Invite community college, municipal, or co-op subrecipients via a secure guest token without exposing your master Knowledge Base.
- **Live SAM.gov 12-Character UEI Check:** Validates partner Unique Entity Identifiers (UEI) and screens against active federal exclusions/debarments.
- **SHA-256 Tamper-Evident Audit Chain:** Every proposal edit, Stage-Gate review sign-off, and budget modification appends an immutable cryptographic hash (\`prevHash + payload -> sha256\`).`,
    codeSnippets: [
      {
        label: 'Verify Subrecipient SAM.gov UEI & Debarment Status',
        language: 'typescript',
        code: `import { verifySubrecipientDebarment } from '@tekromancy/grant_utils';

const check = verifySubrecipientDebarment({
  organizationName: 'Appalachian Solar Cooperative',
  uei: 'J8K2L9M4N1P3', // 12-char alphanumeric SAM.gov UEI
  subawardAmount: 45000,
});
console.log(check.isEligible, check.samStatus);`,
      },
    ],
  },
  {
    id: 'calendar-gitops',
    title: 'RFC 5545 Calendar & Multi-Forge GitOps PRs',
    category: 'workflows',
    summary:
      'Synchronize grant deadlines with Google/Apple/Outlook via calendar.ics and automate Pull Requests across GitHub, GitLab, and Codeberg/Forgejo.',
    badge: 'GitOps & iCal',
    portalPath: '/calendar',
    content: `Ironclad Grants supports both cloud database persistence (Supabase + SeaweedFS) and deterministic **GitOps repository workflows**.

### RFC 5545 iCalendar (\`calendar.ics\`) Specification
- Every grant deadline in your portfolio is compiled into an RFC 5545 compliant \`VEVENT\` with dual automated \`VALARM\` triggers:
  - **\`-P14D\` (14 Days Prior):** Board resolution, letters of commitment, and SF-424A budget lock reminder.
  - **\`-P3D\` (3 Days Prior):** Final SAM.gov UEI check and Grants.gov Workspace submission alert.

### Multi-Forge Pull Request Engine
- Supports **GitHub**, **GitLab**, and **Codeberg / Forgejo** via Personal Access Tokens.
- Computes line-by-line unified diffs (\`computeDiff\`, \`formatUnifiedDiff\`) and opens atomic branches + Pull Requests directly from the web UI or terminal TUI (\`pnpm run cli\`).`,
    codeSnippets: [
      {
        label: 'Generate Unified Diff & Open GitHub Pull Request',
        language: 'typescript',
        code: `import {
  formatUnifiedDiff,
  createGitHubPullRequest,
} from '@tekromancy/grant_utils';

const diff = formatUnifiedDiff('data/grants/01_usda.md', originalMd, updatedMd);

const pr = await createGitHubPullRequest({
  token: process.env.GITHUB_PAT!,
  owner: 'your-nonprofit',
  repo: 'grants-portfolio',
  title: 'feat(grants): finalize USDA SDGG narrative and SF-424A budget',
  body: 'Validated via Ironclad Pre-Flight Engine.',
  branch: 'grant/usda-sdgg-final',
  filePath: 'data/grants/01_usda.md',
  newContent: updatedMd,
  commitMessage: 'docs(usda): complete 8-section narrative',
});`,
      },
    ],
  },
  {
    id: 'helm-telemetry-deployment',
    title: 'Kubernetes Helm Chart & OpenSnowcat Telemetry',
    category: 'deployment',
    summary:
      'Production deployment on Kubernetes with helm/ironclad-grants, OpenSnowcat behavioral telemetry, Kafka KRaft, Prometheus, and Grafana.',
    badge: 'Kubernetes &Helm',
    portalPath: '/',
    content: `Enterprise and self-hosted clusters deploy Ironclad Grants via our hardened Helm chart (\`helm/ironclad-grants\`), powering \`portal.ironcladgrants.com\`.

### Cloud-Native Stack Components
- **Web Portal & API (\`@ironclad/web\`):** Containerized Next.js 14 production deployment with HorizontalPodAutoscaler (HPA) scaling from 2 to 12 replicas on CPU/memory thresholds.
- **OpenSnowcat Telemetry Pipeline:** Includes the OpenSnowcat Stream Collector, Enricher, Apache Kafka (KRaft mode) streaming bus, and PostgreSQL event sink for real-time Product-Qualified Lead (PQL) scoring and engineering SLO monitoring.
- **Prometheus & Grafana Auto-Discovery:** Ships with \`ServiceMonitor\`, \`PrometheusRule\` alert definitions, and a pre-wired Grafana dashboard \`ConfigMap\` tracking RAG latency, Billama GPU token throughput, and portal conversion funnels.`,
    codeSnippets: [
      {
        label: 'Deploy Ironclad Grants via Helm & Tilt',
        language: 'bash',
        code: `# 1. Deploy production Helm chart to Kubernetes cluster
helm upgrade --install ironclad-grants ./helm/ironclad-grants \\
  --namespace ironclad --create-namespace \\
  --set ingress.host=portal.ironcladgrants.com \\
  --set monitoring.grafana.enabled=true

# 2. Or launch local automated Dev Loop with Tilt & Cosign signing
tilt up`,
      },
    ],
  },
  {
    id: 'api-reference',
    title: '@tekromancy/grant_utils Complete API Reference',
    category: 'api-reference',
    summary:
      'Complete TypeScript function signatures, models, and exports from @tekromancy/grant_utils and @billama/sdk.',
    badge: 'SDK Reference',
    portalPath: '/docs',
    content: `The \`@tekromancy/grant_utils\` package is a zero-dependency, isomorphic TypeScript engine backed by 185+ passing Vitest unit tests across 15 suites.

### Core Exported Functions
- \`getAllGrants(): GrantRecord[]\` — Returns the indexed portfolio of grant records.
- \`getKPISummary(grants: GrantRecord[], targetGoal?: number): KPISummary\` — Computes total pipeline value, active count, target attainment %, required cost-share match, and upcoming 30-day deadlines.
- \`evaluateGrantReadiness(input: GrantReadinessInput): GrantReadinessReport\` — Evaluates 6 federal compliance pillars and generates a scored readiness tier and remediation plan.
- \`generateReadinessCertificateMarkdown(report: GrantReadinessReport): string\` — Produces a downloadable Markdown compliance certificate.
- \`calculateAwardBurnRate(award: AwardedGrantRecord): BurnRateAnalysis\` — Computes elapsed time vs. expenditure burn rate and flags underspend/overspend risk.
- \`getObjectClassBudgetLedger(award: AwardedGrantRecord): ObjectClassBudgetLine[]\` — Generates OMB SF-424A Section B object class ledger lines.
- \`auditRebudgetingCompliance(award: AwardedGrantRecord): RebudgetingAuditAlert[]\` — Audits transfers across object classes against the 2 CFR 200 10% budget modification threshold.
- \`splitFrontmatter(markdown: string): { frontmatter: string; body: string }\` — Safely separates YAML frontmatter from Markdown narrative prose.
- \`computeDiff(oldText: string, newText: string): DiffLine[]\` — Computes structured line-level diffs.`,
    codeSnippets: [
      {
        label: 'Import Core Types & Functions',
        language: 'typescript',
        code: `import {
  type GrantRecord,
  type SubscriptionTier,
  type OrgRole,
  type AwardedGrantRecord,
  type GrantReadinessInput,
  PRICING_PLANS,
  DRAFT_PACK_OPTIONS,
  AVAILABLE_THEMES,
  createSupabaseStore,
  evaluateGrantReadiness,
  calculateAwardBurnRate,
  splitFrontmatter,
} from '@tekromancy/grant_utils';`,
      },
    ],
  },
];
