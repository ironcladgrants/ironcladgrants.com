export interface ReleaseNote {
  version: string;
  codename: string;
  date: string;
  tag: 'Latest Release' | 'Major Platform Upgrade' | 'Infrastructure & AI' | 'Compliance & PLG' | 'Foundation Release';
  summary: string;
  portalLink: string;
  portalLinkLabel: string;
  commitRange: string;
  highlights: {
    category: 'AI & Compute' | 'Federal Compliance' | 'Enterprise Security' | 'Platform & UX' | 'Observability & DevOps';
    title: string;
    description: string;
  }[];
  breakingChangesOrNotes?: string[];
}

export const RELEASE_NOTES: ReleaseNote[] = [
  {
    version: 'v2.4.0',
    codename: 'Citadel Identity & App Router',
    date: 'October 11, 2026',
    tag: 'Latest Release',
    summary:
      'Introduces unified Organization Sign In / Sign Up authentication workflows, completes the migration of the web portal to Next.js 14 App Router file-based routing, upgrades pgvector to HNSW indexing, and ships automated Grafana observability ConfigMaps.',
    portalLink: 'https://portal.ironcladgrants.com',
    portalLinkLabel: 'Launch v2.4.0 on Portal',
    commitRange: '771ac44..7f309a2',
    highlights: [
      {
        category: 'Enterprise Security',
        title: 'Unified AuthModal, Session Integration & Role Badges',
        description:
          'Added Sign In and Sign Up header controls, interactive AuthModal supporting organization provisioning and FreeIPA/Supabase session state, and live role badges (Owner, Admin, Grant Writer, Reviewer, Guest).',
      },
      {
        category: 'Platform & UX',
        title: 'Next.js 14 App Router File-Based Routing Architecture',
        description:
          'Migrated the SPA shell to deterministic Next.js App Router routes (/matching, /knowledge, /copilot, /postaward, /readiness, /team, /pricing, /shop, /grants, /calendar, /docs, /guides) wrapped in SSG-safe ClientOnly hydration boundaries.',
      },
      {
        category: 'AI & Compute',
        title: 'PostgreSQL pgvector HNSW Index Upgrade',
        description:
          'Upgraded Knowledge Base semantic vector indexing from IVFFlat to Hierarchical Navigable Small World (HNSW) graphs for sub-15ms dense-sparse RAG retrieval across large 990-PF and audited financial corpora.',
      },
      {
        category: 'Observability & DevOps',
        title: 'Tilt + Cosign Dev Loop & Grafana Auto-Discovery ConfigMap',
        description:
          'Added declarative Tiltfile automation with Sigstore Cosign container image signing and Kubernetes Grafana dashboard ConfigMaps for zero-touch cluster observability.',
      },
      {
        category: 'Platform & UX',
        title: 'Portal Domain Asset Prefix & Multi-Theme Contrast Fixes',
        description:
          'Resolved basePath/assetPrefix resolution on portal.ironcladgrants.com and enhanced WCAG AAA contrast ratios across Publication Daylight (Light) and Co-op Forest themes.',
      },
    ],
    breakingChangesOrNotes: [
      'Direct deep-linking is now supported across all 12 application modules on https://portal.ironcladgrants.com (e.g., /copilot, /postaward, /readiness, /shop).',
      'Helm chart deployments automatically provision the Grafana dashboard ConfigMap when monitoring.grafana.enabled=true.',
    ],
  },
  {
    version: 'v2.3.0',
    codename: 'Billama Decentralized GPU & Enterprise Vault',
    date: 'September 30, 2026',
    tag: 'Infrastructure & AI',
    summary:
      'Integrates @billama/sdk to route grant narrative drafting through 24GB+ decentralized Billama GPU nodes with token metering, wires FreeIPA LDAP and SeaweedFS object storage, and launches the /shop Grant Compliance Store.',
    portalLink: 'https://portal.ironcladgrants.com/shop',
    portalLinkLabel: 'Explore Compliance Shop & AI Studio',
    commitRange: '3e3bee4..7eba709',
    highlights: [
      {
        category: 'AI & Compute',
        title: '24GB+ Decentralized Billama GPU Routing for Narrative Drafting',
        description:
          'Integrated @billama/sdk (v1.0.5) to route all 8-section grant narrative syntheses and Red Team reviews through dedicated 24GB+ VRAM decentralized GPU nodes with zero foundation model training retention.',
      },
      {
        category: 'Enterprise Security',
        title: 'FreeIPA LDAP Directory & SeaweedFS Proposal Storage Vault',
        description:
          'Wired enterprise FreeIPA LDAP identity federation alongside encrypted SeaweedFS distributed object storage for high-assurance proposal attachments, 501(c)(3) letters, and Submission Binder archives.',
      },
      {
        category: 'Platform & UX',
        title: 'Grant Compliance Store (/shop) with Billama Pay Checkout',
        description:
          'Launched the built-in Compliance Store offering NIH R01 & NSF CAREER Gold-Standard Annotated Templates, 2 CFR 200 Audit Readiness Manuals, Executive Scoring Binders, and NIST FIPS 140-3 FIDO2 Hardware Security Keys.',
      },
      {
        category: 'Observability & DevOps',
        title: 'Production Ingress Cutover to portal.ironcladgrants.com',
        description:
          'Updated Kubernetes Helm ingress rules, TLS certificates, and OpenSnowcat e-commerce cart/checkout telemetry pipelines for portal.ironcladgrants.com.',
      },
    ],
  },
  {
    version: 'v2.2.0',
    codename: 'Uniform Guidance Subpart E & Visual Logic Models',
    date: 'September 29, 2026',
    tag: 'Compliance & PLG',
    summary:
      'Delivers the 6-workstream Phase 2 Expansion: Public Grant Readiness Diagnostic Scorecard, Multi-Modal Logic Model & WBS SVG Generator, Official OMB SF-424/SF-424A Form Engine, 2 CFR 200 Subpart E Fiscal Audit Engine, and Real-Time PQL CRM Webhooks.',
    portalLink: 'https://portal.ironcladgrants.com/readiness',
    portalLinkLabel: 'Run Grant Readiness Diagnostic',
    commitRange: 'd40f67c..688c4b6',
    highlights: [
      {
        category: 'Federal Compliance',
        title: 'Public Grant Readiness Scorecard & Downloadable Certificate',
        description:
          'Interactive diagnostic evaluating 6 federal compliance pillars (SAM.gov UEI status, 2 CFR 200 accounting system, NICRA/De Minimis indirect rate, biosketches, subrecipient monitoring, and cash-flow ratio) with instant Readiness Certificate export.',
      },
      {
        category: 'AI & Compute',
        title: 'Multi-Modal Logic Model & Work Breakdown Structure (WBS) Generator',
        description:
          'Synthesizes Mermaid.js flowcharts and high-resolution vector SVG graphics (Inputs → Activities → Outputs → Short/Long-Term Outcomes) bundled directly into the 1-Click Submission Binder ZIP.',
      },
      {
        category: 'Federal Compliance',
        title: 'Official Federal OMB SF-424 & SF-424A Form Engine',
        description:
          'Generates OMB-standard Application for Federal Assistance cover pages and Section B Object Class Category schedules in print-ready HTML and CSV formats.',
      },
      {
        category: 'Federal Compliance',
        title: '2 CFR 200 Subpart E Uniform Guidance Fiscal Audit Engine',
        description:
          'Automated cost allowability screening enforcing MTDC exclusions, equipment >$5,000 capitalization rules, subaward >$25,000 indirect caps, and unallowable cost detection (alcohol, lobbying, entertainment, contingency fees).',
      },
      {
        category: 'Observability & DevOps',
        title: 'Real-Time PQL Webhook Dispatcher & Production HPA Scaling',
        description:
          'Dispatches Slack Block Kit and HubSpot/Salesforce CRM alerts when organizations cross Product-Qualified Lead thresholds, backed by Kubernetes HorizontalPodAutoscalers and PrometheusRules.',
      },
    ],
  },
  {
    version: 'v2.1.0',
    codename: 'OpenSnowcat Behavioral Telemetry & Helm Cloud',
    date: 'September 28, 2026',
    tag: 'Infrastructure & AI',
    summary:
      'Introduces the isomorphic OpenSnowcat behavioral telemetry SDK, real-time Marketing PQL & Engineering SLO inspection modal, and the production Kubernetes Helm chart with Apache Kafka KRaft streaming.',
    portalLink: 'https://portal.ironcladgrants.com',
    portalLinkLabel: 'Inspect Live Telemetry in Portal',
    commitRange: '83f843a..d40f67c',
    highlights: [
      {
        category: 'Observability & DevOps',
        title: 'Production Helm Chart (helm/ironclad-grants) with Kafka KRaft',
        description:
          'Full Kubernetes deployment featuring OpenSnowcat Stream Collector, Enricher, Apache Kafka KRaft event bus, PostgreSQL sink, and automated analytics CronJobs.',
      },
      {
        category: 'Platform & UX',
        title: 'Live TelemetryInsightsModal Dashboard',
        description:
          'In-app behavioral intelligence modal displaying real-time PQL conversion signals, RAG latency SLOs, 990-PF hydration metrics, and raw OpenSnowcat event streams.',
      },
    ],
  },
  {
    version: 'v2.0.0',
    codename: 'The 12 Master Enhancements — Grant Operating System',
    date: 'September 28, 2026',
    tag: 'Major Platform Upgrade',
    summary:
      'Landmark release transforming Ironclad Grants into a full-lifecycle Grant Operating System across 5 functional pillars and 12 integrated compliance, intelligence, and governance capabilities under a 2 CFR 200 compliant per-seat model.',
    portalLink: 'https://portal.ironcladgrants.com/copilot',
    portalLinkLabel: 'Experience Grant OS v2.0',
    commitRange: '29f6df1..83f843a',
    highlights: [
      {
        category: 'AI & Compute',
        title: 'Multi-Persona Red Team Reviewer, Readability & Live Claim Verifier',
        description:
          'Simulated 1–9 scoring across Technical Merit, Compliance Auditor, and Community Impact personas, Flesch-Kincaid grade-level analysis, and real-time quantitative RAG citation verification.',
      },
      {
        category: 'Platform & UX',
        title: 'ProPublica Form 990-PF Auto-Hydration & 5-Axis Fit Radar SVG',
        description:
          'Automated foundation tax filing ingestion computing 25th–75th percentile giving curves, Sweet Spot ask recommendations, and 5-axis SVG radar visualizations.',
      },
      {
        category: 'Federal Compliance',
        title: 'Post-Award Financial OS: SF-425, 2 CFR 200.430 Effort & MTDC Solver',
        description:
          'Added OMB SF-425 Federal Financial Report compilation, personnel effort certification with >5% variance alerts, and automated Modified Total Direct Cost calculations.',
      },
      {
        category: 'Enterprise Security',
        title: 'Subrecipient Guest Portals, Section Locking & SHA-256 Audit Trail',
        description:
          'Added real-time section collision locking, Stage-Gate sign-off workflows, tokenized partner workspaces with SAM.gov UEI verification, and tamper-evident SHA-256 hash chains.',
      },
      {
        category: 'Federal Compliance',
        title: 'Federal Portal Pre-Flight Validator & 1-Click Submission Binder',
        description:
          'Validates Grants.gov 50-char ASCII filenames, 1-inch margins, embedded fonts, and Section 508 compliance before assembling a certified .ZIP submission binder.',
      },
    ],
  },
  {
    version: 'v1.0.0',
    codename: 'Genesis GitOps Grant Engine',
    date: 'September 23, 2026',
    tag: 'Foundation Release',
    summary:
      'Initial open-core release of @tekromancy/grant_utils and the Ironclad Grants web & terminal workspace, treating grant proposals as version-controlled code with YAML frontmatter and RFC 5545 calendar feeds.',
    portalLink: 'https://portal.ironcladgrants.com/docs',
    portalLinkLabel: 'Read Core SDK Docs',
    commitRange: 'dec881a..29f6df1',
    highlights: [
      {
        category: 'Platform & UX',
        title: 'GitOps Markdown Proposals & YAML Frontmatter Engine',
        description:
          'Deterministic parsing of grant proposals via splitFrontmatter(), portfolio KPI aggregation, cost-share match calculators, and visual unified diff inspection.',
      },
      {
        category: 'Platform & UX',
        title: 'RFC 5545 iCalendar (calendar.ics) & Multi-Forge Git PR Automation',
        description:
          'Automated deadline synchronization with -P14D and -P3D VALARM triggers plus 1-click branch & Pull Request creation across GitHub, GitLab, and Codeberg/Forgejo.',
      },
    ],
  },
];
