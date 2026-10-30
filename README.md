# ironcladgrants.com 🛡️

Official static Next.js 14 marketing, documentation, user guides, and release notes site for **Ironclad Grants**, automatically built and deployed to **[ironcladgrants.com](https://ironcladgrants.com)** via GitHub Actions and GitHub Pages.

Designed as the primary top-of-funnel gateway, interactive compliance calculator hub, and technical documentation portal directing organizations to **[portal.ironcladgrants.com](https://portal.ironcladgrants.com)**.

---

## ✨ Key Site Capabilities

1. **Advertisement & Conversion Funnel to `portal.ironcladgrants.com`**:
   - Interactive 5-Pillar / 12-Capability platform showcase with direct deep links to `/matching`, `/knowledge`, `/copilot`, `/postaward`, `/readiness`, `/team`, `/pricing`, and `/shop` on `portal.ironcladgrants.com`.
   - Side-by-side comparison matrix contrasting Ironclad Grants against 5%–10% contingency fee grant writers (prohibited under Uniform Guidance `2 CFR 200.430`), legacy funder search databases, and ungrounded generic AI chatbots.
   - Interactive **Commission vs. SaaS ROI Calculator** & **2 CFR 200.414 Modified Total Direct Cost (MTDC) Indirect Cost Solver**.
   - Full Per-Seat Pricing configurator (`/pricing`) with seat stepper, Annual/Monthly toggle, and Draft Top-Up Boost Packs.

2. **Platform & SDK Documentation (`/docs`)**:
   - Comprehensive technical documentation covering the 3-Phase Lifecycle + Post-Award Financial OS, `pgvector` HNSW RAG grounding, SeaweedFS vault isolation, FreeIPA LDAP, 24GB+ decentralized Billama GPU inference (`@billama/sdk`), RFC 5545 `calendar.ics` feeds, Kubernetes Helm chart (`helm/ironclad-grants`), OpenSnowcat telemetry, and `@tekromancy/grant_utils` API reference.
   - Includes a live **Interactive Grant YAML Frontmatter Schema Playground**.

3. **Step-by-Step User Guides (`/guides`)**:
   - Actionable walkthroughs and keyboard shortcut references for every workflow on `portal.ironcladgrants.com`.

4. **Release Notes & Changelog (`/releases`)**:
   - Filterable chronological release log (`v1.0.0` through `v2.4.0`) detailing every platform milestone, commit range, and deployment note.

---

## 🚀 Local Development & Static Build

```bash
# Install dependencies
pnpm install

# Start development server at http://localhost:3000
pnpm run dev

# Build static export into ./out (with CNAME & .nojekyll)
pnpm run build
```

---

## ⚙️ GitHub Actions Deployment (`ironcladgrants.com`)

The workflow in [`.github/workflows/deploy-pages.yml`](./.github/workflows/deploy-pages.yml) automatically builds the static Next.js export (`output: 'export'`), verifies `out/CNAME` (`ironcladgrants.com`) and `out/.nojekyll`, and deploys to GitHub Pages on every push to `main`.
