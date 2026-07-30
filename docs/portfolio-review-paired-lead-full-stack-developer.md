# Portfolio Review: Paired — Lead Full Stack Developer

## Executive Summary

### Overall portfolio strength

**Moderate-to-strong fit, presented in the wrong order.** The repository contains unusually relevant evidence for this role: enterprise Shopify work, multi-store product-data integrations, Node.js and AWS Lambda services, Shopify Admin GraphQL, Polaris internal tooling, reusable React/Liquid architecture, measurable Core Web Vitals gains, analytics-led prioritization, experimentation, and direct operating experience with a subscription supplement brand.

The current presentation does not make that fit obvious. The homepage's first three projects are Soft Arcade Games, Fender Play onboarding, and Fender product sync. A hiring manager seeking a Shopify Plus technical lead sees a browser-game platform before seeing the strongest commerce architecture, performance, multi-brand, and subscription CPG evidence. The site's broader Portland small-business positioning also makes the candidate appear more like a local implementation consultant than the owner of an enterprise ecommerce ecosystem.

### Biggest strengths

- **Direct match to subscription CPG:** Clean Strength is an owned Shopify supplement brand with one-time and subscription purchasing, merchandising, catalog management, collections, PDPs, navigation, and ongoing ecommerce operations.
- **Strong Shopify integration architecture:** The Fender product-sync study demonstrates AWS Lambda, Node.js, PIM APIs, Shopify Admin GraphQL, data transformation, localized catalogs, multi-store workflows, Polaris tooling, monitoring, error reporting, and partial-success handling.
- **Enterprise storefront architecture:** The Fender gallery shows a reusable React architecture injected into Liquid, normalized platform data, multi-brand reuse, rich PDP media, and migration from SFCC to Shopify.
- **Exceptional quantified performance evidence:** Fender performance includes a reduction from about 10 seconds to 4 seconds, more than 50% lower PDP LCP, more than 90% better PDP CLS, 30–40% better sitewide LCP, and rebuild time reduced from about 20 seconds to 2 seconds.
- **Analytics and experimentation:** Fender Play reports a 1.2% increase in post-trial monthly active retention across two cohorts; Fender performance uses observed customer behavior to remove low-value loading; Soft Arcade demonstrates detailed event design, funnels, replay, and cohort thinking.
- **Full-stack range:** The portfolio covers React, Next.js, TypeScript, Liquid, Node.js, AWS Lambda, GraphQL, Cloudflare Workers, D1, OAuth, analytics pipelines, and internal admin applications.

### Biggest weaknesses

- **Lead-level evidence is implicit, not proven.** Architecture ownership is visible, but mentoring, engineering standards, technical planning, code-review leadership, and team leadership are not represented.
- **Shopify Plus is not named anywhere.** The work may have occurred on Plus, but the repository does not establish it. The portfolio currently supports “extensive Shopify” better than “extensive Shopify Plus.”
- **The integration landscape is too narrow for the role.** PIM and Asana integrations are evidenced; ERP, CRM, WMS, payments, shipping, fulfillment, and marketing-platform integrations are not.
- **Backend and data credibility is incomplete.** Node.js, Lambda, Workers, D1, GraphQL, PIM APIs, Firebase, and Segment are present, but REST is not explicitly identified, SQL depth is not described, and NoSQL is not evidenced.
- **Platform quality coverage is uneven.** Performance, Core Web Vitals, SEO, and production recovery are strong. Security and accessibility engineering are weakly evidenced. CI/CD and deployment automation are absent from the case-study narrative.
- **Tenure cannot be verified.** The About page says “over the past several years,” which does not substantiate the required seven-plus years.
- **Several high-value studies are too brief.** Product sync and PDP gallery contain strong material but use only the short case-study format, making their architectural depth easy to underestimate.

### Interview likelihood

**Medium, rising to medium-high if the resume independently confirms seven-plus years and Shopify Plus.** A technical hiring manager who reaches the Fender studies should see credible senior-level architecture and hands-on delivery. A recruiter or fast-scanning agency reviewer may reject earlier because the first impression emphasizes a browser game, a local-services consultancy, and generic Shopify rather than Shopify Plus leadership for subscription CPG.

The portfolio should earn an interview for a senior Shopify/full-stack role. For this exact lead role, the unproven Shopify Plus, tenure, people leadership, ecosystem integrations, CI/CD, security, and database requirements create avoidable doubt.

### Highest-ROI improvements

1. Put Fender product sync, Fender performance, and Clean Strength in the first three positions; these must also become the homepage preview.
2. Make the first screen of `/work` communicate “enterprise Shopify architecture + subscription CPG + measurable performance.”
3. Increase the prominence and depth of the Fender product-sync study; it is the closest match to ownership of supporting ecommerce systems.
4. Surface the quantified Fender performance and Fender Play retention outcomes directly on cards and summaries.
5. Present the PDP gallery as architecture ownership and multi-brand platform migration, not merely a frontend gallery.
6. Validate and explicitly surface Shopify Plus, years of experience, mentoring, REST, SQL/NoSQL, CI/CD, and named integrations only where supporting evidence exists.
7. Keep weaker local-site articles available, but place them after the enterprise ecommerce, subscription, integration, performance, and experimentation work.

## Repository Analysis

- **Article location:** `data/case-studies/*.ts`
- **Content model:** Typed TypeScript objects using `CaseStudy` from `data/case-studies/types.ts`; there is no Markdown frontmatter.
- **Ordering:** Manual array order in `data/case-studies/index.ts`. No date, rank, or weight field controls sorting.
- **Homepage prominence:** `app/page.tsx` renders `caseStudies.slice(0, 3)`, so the first three array entries are the homepage portfolio preview.
- **Work landing page:** `app/work/page.tsx` displays the same array through `CaseStudyGrid`; tag selection filters the array but preserves its original order.
- **Detail pages:** `app/work/[slug]/page.tsx` resolves each article by slug. Studies with `sections` receive a long-form layout; studies without them receive the shorter context/problem/solution/results layout.
- **Card fields displayed:** Image, all tags, title, business type, and excerpt. `impactSummary`, results, stack, and metrics do not appear on cards.
- **Available article fields:** `slug`, `title`, `client`, `businessType`, `excerpt`, `impactSummary`, `disclaimer`, `url`, `featured`, `tags`, `context`, `problem`, `solution`, `results`, `sections`, `sidebarHighlights`, `metricGroups`, `stack`, `image`, and `imagePosition`.
- **Featured behavior:** `featured?: boolean` exists, but only Soft Arcade currently sets it and no rendering or sorting logic consumes it.
- **Tags:** A broad union exists in `types.ts`, but only a curated subset in `caseStudyTags` is available as a `/work` filter. Important existing tags such as GraphQL, AWS Lambda, Liquid, PDP, Frontend Architecture, Subscriptions, and Core Web Vitals are not filter buttons.
- **Current order:** Soft Arcade; Fender Play; Fender product sync; Fender performance; Fender PDP gallery; Portland Painting; Upper Left Indie; Clean Strength; EB5G; Taco Machine.
- **Positioning issue:** The homepage and Work metadata emphasize Portland small-business services. That positioning is coherent for the business but weak for this enterprise, global, hands-on technical-lead application.

## Job Requirement Coverage

Coverage labels: **Strong**, **Partial**, **Weak**, or **Not evidenced**. “Not evidenced” does not assert that the candidate lacks the experience; it means the repository does not prove it.

| Requirement | Coverage | Confidence | Evidence | Missing Emphasis |
|---|---|---:|---|---|
| Lead architecture, development, and continuous improvement of Shopify Plus and supporting systems | Partial | High | Fender product sync, performance, and PDP gallery demonstrate architecture and continuous improvement across Shopify storefronts and supporting services | Shopify Plus is not named; platform-level ownership and decision authority are not explicit |
| Establish engineering best practices, scalable architecture, and mentor developers | Partial | Medium | Reusable gallery architecture, normalized data boundaries, shared patterns, code splitting, and maintainability decisions | No mentoring, code-review, standards, team enablement, or engineering-governance evidence |
| Build custom Shopify themes, apps, checkout customizations, and integrations | Partial | High | Clean Strength theme customization; React injected into Liquid; Polaris admin tool; Shopify/PIM integration | No explicit Shopify app model, checkout customization, extensions, Functions, or payment customization |
| Build full-stack applications with modern frontend/backend technologies and REST/GraphQL | Strong/Partial | High | React, Next.js, TypeScript, Node.js, Lambda, Workers, D1, Shopify Admin GraphQL, PIM APIs | GraphQL is strong; REST is not explicitly named |
| Optimize performance, security, SEO, accessibility, and Core Web Vitals | Strong/Partial | High | Fender performance and Portland Painting strongly cover performance, SEO, LCP, CLS, image delivery, and production reliability | Security is limited to OAuth/recovery; accessibility practice and standards are not demonstrated |
| Integrate ERP, CRM, WMS, payments, shipping, and marketing platforms | Weak | High | PIM integration, Asana workflow, Segment/Avo analytics, Firebase, PostHog | ERP, CRM, WMS, payments, shipping, and fulfillment integrations are not evidenced |
| Build automation/internal tools for inventory, product management, fulfillment, and operations | Strong/Partial | High | Fender sync platform supports product ingestion, translations, metafields, catalogs, self-service execution, monitoring, and error handling | Inventory and fulfillment workflows are not named; no before/after operational metrics |
| Improve navigation, search, PDPs, checkout, subscriptions, loyalty, and accounts | Partial | High | Clean Strength covers navigation, PDPs, subscription purchase flows, and merchandising; Fender gallery covers PDP media; Fender Play covers account/SSO | Search, checkout customization, loyalty, and Shopify customer accounts are not evidenced |
| Use analytics, A/B testing, and customer insights to improve conversion and UX | Strong | High | Fender Play experimentation and 1.2% retention gain; Fender performance product-rail analytics; Soft Arcade funnels and replay | Ecommerce conversion-rate impact is not quantified; Soft Arcade describes future tests more than completed experiments |
| Partner cross-functionally to support growth and operational efficiency | Partial | Medium | Product-sync self-service for merchandising/ecommerce teams; performance balances marketing/merchandising needs; Fender Play serves product teams | Specific collaboration with Operations, CX, Marketing, and Leadership is not consistently described |
| Seven-plus years of professional full-stack development | Not evidenced | High | About page says only “over the past several years” | State exact tenure only if verifiable |
| Extensive Shopify and Shopify Plus experience | Partial | High | Four Shopify-relevant studies cover themes, Liquid, APIs, multi-store architecture, merchandising, subscriptions, and operations | Shopify Plus is absent; duration and number/scale of stores are not quantified |
| Liquid, JavaScript, TypeScript, HTML5, CSS3, React, Next.js, Node.js | Strong/Partial | High | Liquid, TypeScript, React, Next.js, and Node.js are explicitly represented | JavaScript, HTML5, and CSS3 are assumed by the work but not surfaced as skills |
| REST and GraphQL API design/consumption | Partial | High | Shopify Admin GraphQL and PIM APIs are explicit | REST is not explicit; API design contracts, auth, rate limits, retries, and idempotency receive little detail |
| SQL and NoSQL databases | Weak | High | Cloudflare D1 provides relational persistence; Firebase appears in experimentation | SQL is not discussed as a skill; NoSQL data design is not demonstrated |
| Cloud infrastructure, CI/CD, version control, deployment automation | Partial | High | AWS Lambda, Cloudflare Pages/Workers/D1, production recovery, and Vercel deployment documentation | No case-study evidence for CI/CD pipelines, Git workflow, infrastructure as code, observability, or deployment automation |
| Shopify integrations with ERP, CRM, WMS, payments, shipping, and marketing | Weak | High | PIM, analytics/marketing data tools, and Asana workflow integrations | Most named integration classes are absent; do not imply them without evidence |
| Secure, scalable, maintainable software architecture | Strong/Partial | High | Gallery portability, normalized data, multi-brand reuse, Lambda transformation layer, partial-success handling, edge architecture | Scalability and maintainability are strong; security architecture, threat modeling, secrets, permissions, and compliance are not described |

## Recommended Portfolio Ordering

| Rank | Article | Current Position | Recommended Position | Weight (1–10) | Why |
|---:|---|---:|---:|---:|---|
| 1 | Product Data and Translation Sync Platform | 3 | 1 | 10 | Best proof of Shopify supporting-system ownership: Node.js, Lambda, GraphQL, PIM integration, multi-store data architecture, automation, Polaris, and operational self-service |
| 2 | Large-Scale Ecommerce Performance Optimization | 4 | 2 | 10 | Establishes enterprise scale, technical leadership language, Core Web Vitals expertise, analytics judgment, cross-functional tradeoffs, and exceptional measured outcomes |
| 3 | Clean Strength Shopify Storefront, Merchandising, and Subscription Management | 8 | 3 | 10 | Exact industry match: owned subscription CPG/supplement brand with Shopify, Liquid, merchandising, catalog, PDP, navigation, recurring purchase, and operations |
| 4 | Custom PDP Media Gallery Across Fender and Sub-Brands | 5 | 4 | 9 | Strong reusable architecture, React/Liquid integration, multi-brand reuse, platform migration, and sophisticated PDP experience |
| 5 | Personalized Onboarding & Experimentation for Fender Play | 2 | 5 | 8 | Best evidence for experimentation, analytics governance, identity, product collaboration, shared systems, and a quantified retention result |
| 6 | Soft Arcade Games | 1 | 6 | 6 | Demonstrates Next.js, React, TypeScript, Cloudflare, D1, backend restraint, product analytics, and full-stack ownership, but is not ecommerce |
| 7 | Portland Painting WordPress-to-Next.js Migration | 6 | 7 | 6 | Excellent Next.js, automation, SEO, and performance metrics; useful supporting proof but outside ecommerce |
| 8 | EB5G Production Recovery | 9 | 8 | 4 | Adds production incident handling, server access, diagnosis, and reliability judgment |
| 9 | Taco Machine Bilingual Website | 10 | 9 | 3 | Supports Next.js, localization, responsive delivery, and SEO but lacks senior architecture depth |
| 10 | Upper Left Indie Music Platform | 7 | 10 | 2 | Shows product ownership and frontend/content design, but has the least relevance and no measurable impact |

The first three should be the homepage preview. Together they immediately answer: **Can this person own complex Shopify systems? Can they produce measurable storefront improvements? Do they understand subscription CPG operations?**

## Article Review

Scores are relative to this specific role and use a 10-point scale.

| Article | Job Fit | Technical Depth | Business Impact | Leadership | Architecture | Overall Score |
|---|---:|---:|---:|---:|---:|---:|
| Product Data and Translation Sync Platform | 10 | 9 | 8 | 7 | 9 | 9.0 |
| Large-Scale Ecommerce Performance Optimization | 10 | 9 | 10 | 8 | 9 | 9.2 |
| Clean Strength Shopify Storefront, Merchandising, and Subscription Management | 10 | 6 | 8 | 7 | 5 | 7.6 |
| Custom PDP Media Gallery Across Fender and Sub-Brands | 9 | 9 | 7 | 7 | 10 | 8.4 |
| Personalized Onboarding & Experimentation for Fender Play | 8 | 8 | 9 | 7 | 8 | 8.0 |
| Soft Arcade Games | 6 | 9 | 5 | 7 | 9 | 7.2 |
| Portland Painting WordPress-to-Next.js Migration | 6 | 7 | 8 | 6 | 6 | 6.6 |
| EB5G Production Recovery | 4 | 6 | 7 | 5 | 5 | 5.4 |
| Taco Machine Bilingual Website | 3 | 4 | 5 | 4 | 4 | 4.0 |
| Upper Left Indie Music Platform | 2 | 5 | 4 | 5 | 5 | 4.2 |

### Product Data and Translation Sync Platform

#### Strengths

- Closest match to the role's supporting-systems mandate.
- Shows backend services, GraphQL, data transformation, multi-store localization, admin UX, failure visibility, and self-service operations.
- Connects engineering work to merchandising autonomy and catalog reliability.

#### Weaknesses

- Short format understates system boundaries, execution model, scale, reliability strategy, and technical ownership.
- No quantified volume, number of storefronts/regions/locales, sync duration, error reduction, or labor savings.
- REST, authentication, rate limiting, retry policy, idempotency, observability, and deployment are not discussed.

#### Recommended emphasis

- Architecture ownership, product-ingestion pipeline, source-to-Shopify transformation, partial success, error recovery, and operational self-service.
- Multi-brand/multi-region complexity and the partnership with merchandising/ecommerce teams.
- Only identify PIM APIs as REST if confirmed.

#### Metrics that should be surfaced

- Existing qualitative outcomes: reduced manual maintenance, improved localized-data consistency, non-technical self-service, visible sync status/errors.
- Validate whether the repository can support numeric counts for storefronts, brands, regions, locales, SKUs, fields, sync runs, time saved, or failure rates before adding any.

#### Job requirements demonstrated

Shopify integrations, Node.js, GraphQL, Lambda/cloud, admin tools, product management automation, scalable architecture, operational efficiency, cross-functional delivery.

### Large-Scale Ecommerce Performance Optimization

#### Strengths

- Strongest measured business/technical outcomes in the portfolio.
- Demonstrates Core Web Vitals, SSR/hydration strategy, React/Liquid optimization, Cloudflare image delivery, code splitting, async product loading, and analytics-based prioritization.
- Shows judgment: eliminate low-value work based on behavior rather than endlessly optimizing it.

#### Weaknesses

- Does not name storefront count, brands, regions, traffic, conversion effect, or measurement methodology.
- Leadership is suggested by “led” and “recommended” but team scope and stakeholder influence are not described.
- Security, accessibility, SEO, and deployment quality are not part of this otherwise broad optimization narrative.

#### Recommended emphasis

- Keep all five headline performance metrics above the fold.
- Emphasize technical decision-making across merchandising and marketing constraints.
- Connect performance improvements to product discovery, customer experience, and maintainability.

#### Metrics that should be surfaced

- Homepage/marketing load: approximately 10s to 4s.
- PDP LCP: more than 50% reduction.
- PDP CLS: more than 90% improvement.
- Sitewide LCP: approximately 30–40% improvement.
- Frontend rebuild: approximately 20s to 2s.
- Product-rail behavior: 0.3% clicked any rail; 99% of clickers used one of the first two.

#### Job requirements demonstrated

Performance, Core Web Vitals, Shopify/Liquid/React, scalable frontend architecture, analytics, product discovery, cross-functional tradeoffs, continuous improvement.

### Clean Strength Shopify Storefront, Merchandising, and Subscription Management

#### Strengths

- Exact subscription CPG category match: supplements and wellness.
- Demonstrates ownership beyond code: merchandising, product setup, subscriptions, pricing, promotions, content, collections, PDPs, navigation, and operations.
- Shows empathy for ecommerce operators because the candidate operated the store.

#### Weaknesses

- Technical depth is thin; no subscription platform, theme architecture, APIs, checkout approach, analytics, lifecycle tools, or operational constraints are named.
- No revenue, conversion, subscription, retention, catalog, performance, or operational metrics.
- “Managed subscription functionality” is too general for a lead role.

#### Recommended emphasis

- Lead with this as direct domain credibility, not as a minor small-brand project.
- Surface the combination of technical implementation and day-to-day ecommerce operation.
- Validate and add the actual subscription technology, customer-account experience, checkout constraints, and integrations only if documented.

#### Metrics that should be surfaced

- None numeric currently exist.
- Existing facts worth surfacing: owned DTC supplement brand, recurring and one-time purchase flows, multiple supplement categories, ongoing pricing/promotional/product operations.
- Seek verifiable catalog size, subscription adoption, conversion, repeat purchase, merchandising cadence, or operational time savings.

#### Job requirements demonstrated

Shopify, Liquid, theme customization, subscription CPG, merchandising, catalog/product management, navigation, PDPs, recurring purchasing, ecommerce operations.

### Custom PDP Media Gallery Across Fender and Sub-Brands

#### Strengths

- Excellent architecture narrative: platform-independent rendering, normalized data, React embedded in Liquid, migration from SFCC to Shopify, and reuse across brands.
- Sophisticated PDP features include images, video, YouTube, variant media, bundles, and 360-degree experiences.
- Demonstrates maintainability and avoidance of platform lock-in.

#### Weaknesses

- Short format hides migration decisions, interfaces, testing, fallback behavior, performance implications, and rollout strategy.
- No number of brands/storefronts, adoption level, development-time reduction, defect reduction, or customer engagement metrics.
- Leadership and cross-team adoption are not explicit.

#### Recommended emphasis

- Present as a commerce-platform architecture and migration case study, not a carousel implementation.
- Emphasize the data-adapter boundary and reuse across multiple brands/storefronts.
- Cross-reference the SSR/LCP work in the performance study without duplicating the article.

#### Metrics that should be surfaced

- Existing qualitative metrics: one reusable pattern across multiple brands/storefronts; support for multiple rich-media types; successful platform migration.
- Validate the exact number of brands, stores, PDPs, media types, or reduction in duplicate implementations.

#### Job requirements demonstrated

Shopify, Liquid, React, TypeScript, PDP/customer experience, platform migration, reusable architecture, multi-brand scale, maintainability.

### Personalized Onboarding & Experimentation for Fender Play

#### Strengths

- Strong completed experimentation story with measurable retention impact.
- Demonstrates Firebase cohort assignment, React experiment rendering, Avo event governance, Segment routing, dashboards, OAuth/SSO, and Storybook.
- Connects product engineering to activation and retention.

#### Weaknesses

- Subscription SaaS rather than subscription commerce.
- The work's leadership scope and partnership model are not explicit.
- Conversion funnel stages and experiment sample context are not described.

#### Recommended emphasis

- Position as proof of experimentation infrastructure and analytics rigor transferable to ecommerce subscriptions.
- Surface the 1.2% retention result on the card and early in the article.
- Emphasize shared components and reusable experimentation patterns as team enablement.

#### Metrics that should be surfaced

- 1.2% increase in post-trial monthly active retention across two experiment cohorts.
- Existing measured dimensions: onboarding starts/completion, preferences, activation, and retention by cohort.

#### Job requirements demonstrated

A/B testing, analytics, React, customer insights, subscriptions, identity/accounts, reusable systems, product-team collaboration.

### Soft Arcade Games

#### Strengths

- Strong full-stack and product-architecture depth: Next.js, React, TypeScript, Canvas, Workers, D1, Cloudflare Pages, and PostHog.
- Shows deliberate backend scope, client/server boundaries, mobile behavior, code loading, analytics, and recoverable score submission.
- Demonstrates ownership of an operating product rather than a one-off build.

#### Weaknesses

- Not ecommerce and currently overpromoted for this application.
- Most experimentation language describes future opportunities, not completed experiments or business outcomes.
- No usage, performance, reliability, conversion, or scale metrics.

#### Recommended emphasis

- Retain as evidence of modern full-stack range and architecture judgment.
- De-emphasize game-design detail when used for this role; foreground Next.js, edge backend, relational persistence, analytics, and maintainability.

#### Metrics that should be surfaced

- Existing facts: two launched games, two-click/no-login play, optional score submission, local bests, and multi-game extensibility.
- Add usage or reliability numbers only when verified.

#### Job requirements demonstrated

Next.js, React, TypeScript, cloud infrastructure, database-backed full-stack application, analytics, performance, scalable product architecture.

### Portland Painting WordPress-to-Next.js Migration

#### Strengths

- Excellent before/after performance and SEO evidence.
- Combines Next.js migration with an Asana operational workflow.
- Shows practical business-process improvement and measurable frontend execution.

#### Weaknesses

- Not ecommerce and architecturally simpler than the lead role.
- Asana integration details are not described.
- No accessibility, security, deployment, or lead-generation outcome metrics.

#### Recommended emphasis

- Use as supporting evidence for Next.js, SEO, Core Web Vitals, and workflow automation.
- Do not let it displace enterprise Shopify studies.

#### Metrics that should be surfaced

- Homepage performance 63 to 98; SEO 77 to 92; FCP 1.3s to 0.2s; LCP 6.0s to 1.1s; Speed Index 12.1s to 0.4s.
- Interior page performance 63 to 99; SEO 77 to 92; FCP 1.2s to 0.2s; LCP 13.9s to 0.5s; Speed Index 12.4s to 0.3s.

#### Job requirements demonstrated

Next.js, performance, SEO, automation, third-party workflow integration, operational efficiency.

### EB5G Production Recovery

#### Strengths

- Demonstrates calm production diagnosis, SSH/WP-CLI operation, controlled rollback, dependency isolation, and recovery.
- Adds reliability and maintenance evidence absent from the polished build stories.

#### Weaknesses

- WordPress-specific and not strategically important for this role.
- No outage duration, restoration time, monitoring, incident process, or prevention automation.
- Security is not meaningfully covered despite server-level work.

#### Recommended emphasis

- Keep low in the ordering as evidence of production ownership and troubleshooting.
- Frame around incident response and safe change control, using only existing facts.

#### Metrics that should be surfaced

- Existing outcomes: recovered frontend and admin access, avoided a rebuild, isolated the breaking dependency.
- Add time-to-recovery or downtime only if verifiable.

#### Job requirements demonstrated

Production reliability, debugging, server operations, maintainability, dependency-risk management.

### Taco Machine Bilingual Website

#### Strengths

- Shows Next.js delivery, localization, mobile usability, responsive frontend work, and SEO fundamentals.
- Demonstrates attention to a multilingual customer population.

#### Weaknesses

- “Improved accessibility” refers mainly to language access, not technical accessibility standards.
- No metrics and limited architecture or integration depth.
- Low relevance to Shopify, subscriptions, full-stack systems, or technical leadership.

#### Recommended emphasis

- Use as secondary proof of localization and inclusive customer experience.
- Do not use it as evidence for WCAG/accessibility engineering unless that work is documented.

#### Metrics that should be surfaced

- No numeric metrics currently exist.
- Existing facts: English/Spanish support, mobile-first access to menus/hours/location, move beyond Facebook-only presence.

#### Job requirements demonstrated

Next.js, localization, responsive frontend work, SEO, customer experience.

### Upper Left Indie Music Platform

#### Strengths

- Shows owned-product initiative, maintainable frontend structure, content architecture, branding, and mobile usability.
- Demonstrates sustained iteration rather than a single delivery.

#### Weaknesses

- Least aligned article for this role.
- No ecommerce, backend, integration, analytics, architecture, leadership, or measurable outcome depth.
- Current position above Clean Strength is actively harmful for this application.

#### Recommended emphasis

- Move to the final position.
- Retain only as breadth/initiative evidence for reviewers who explore the full portfolio.

#### Metrics that should be surfaced

- No numeric metrics currently exist.
- Do not manufacture traffic, artist, playlist, or content-volume claims.

#### Job requirements demonstrated

Next.js, frontend maintainability, content architecture, mobile UX, product ownership.

## Missing Emphasis Matrix

| Topic | Existing Article | Importance | Recommendation |
|---|---|---:|---|
| Shopify Plus | None explicitly | Critical | Verify platform edition for Fender/Clean Strength; name it only if accurate |
| Subscription CPG | Clean Strength | Critical | Move to top three and explicitly foreground supplements, recurring purchase, merchandising, and operator perspective |
| Product ingestion | Fender product sync | Critical | Describe the end-to-end ingestion/transformation/write/monitoring flow and failure boundaries |
| AWS Lambda | Fender product sync | High | Surface on the card and in the first technical summary |
| Node.js | Fender product sync | High | Surface as backend ownership rather than leaving it in the stack list |
| Polaris | Fender product sync | High | Emphasize the internal admin application's operator workflows and self-service value |
| GraphQL | Fender product sync | Critical | Surface Shopify Admin GraphQL in article/card prominence and describe API responsibilities |
| REST APIs | PIM APIs may qualify, but not stated | High | Verify protocol; do not label REST without evidence |
| ERP | None | Critical | Evidence gap; only add if existing work can be documented |
| CRM | None; future HubSpot/Salesforce mention is not completed work | High | Do not treat roadmap text as experience |
| WMS | None | Critical | Evidence gap |
| Payments | Clean Strength purchase flows only | High | Validate actual payment/checkout work before claiming integration experience |
| Shipping/fulfillment | None | High | Evidence gap |
| Technical leadership | Fender performance; product sync; gallery | Critical | Surface architecture decisions, recommendation ownership, standards, stakeholder alignment, and team scope where verifiable |
| Mentoring | None | Critical | Evidence gap; add only with concrete examples |
| Architecture | Fender product sync; gallery; Soft Arcade | Critical | Elevate system boundaries, portability, failure handling, and tradeoffs above implementation lists |
| Accessibility | Taco Machine language access only | High | Distinguish localization from WCAG; document actual audits/remediation if performed |
| Security | Fender Play OAuth; EB5G recovery | High | Surface authentication and safe production recovery; seek evidence for permissions, secrets, data protection, and secure checkout work |
| Core Web Vitals | Fender performance; Portland Painting | Critical | Put metrics on cards/homepage and make performance the second case study |
| SEO | Portland Painting; Taco Machine | Medium | Preserve quantified SEO scores; keep secondary to Shopify architecture |
| Analytics | Fender performance; Fender Play; Soft Arcade | Critical | Tie analytics to decisions and completed outcomes, not tool installation |
| Experimentation | Fender Play; Soft Arcade | High | Lead with Fender Play's completed cohorts and 1.2% retention gain |
| Multi-brand | Fender gallery; About page names Fender, PreSonus, Jackson, Leatherman | High | Surface verified brand/storefront scope in the gallery and platform narrative |
| Multi-region/localization | Fender product sync; Taco Machine | High | Emphasize localized catalogs and multi-store workflows; quantify only if verified |
| CI/CD | None | High | Evidence gap; document real pipelines/deployment automation if available |
| Cloud infrastructure | Fender product sync; Soft Arcade | High | Connect Lambda/Cloudflare choices to scaling, reliability, and operational cost |
| SQL | Soft Arcade D1 | High | Explain the relational persistence model and SQL responsibilities if supported |
| NoSQL | Firebase is used for experimentation, not clearly as an application database | High | Do not claim database expertise from cohort assignment alone; find documented work or mark as gap |
| Checkout customization | Clean Strength purchase flows | Critical | Validate actual customization scope and Shopify mechanism |
| Customer accounts/identity | Fender Play | Medium | Surface OAuth/SSO and account continuity as transferable architecture evidence |
| Search/navigation | Clean Strength covers navigation; search absent | High | Emphasize navigation work; add search work only if documented |
| Conversion optimization | Fender performance; Fender Play; Portland Painting | High | Surface measured retention and behavior-led decisions; avoid claiming conversion uplift without data |
| Operational tooling | Fender product sync; Portland Painting | Critical | Elevate self-service catalog tooling, monitoring, and Asana handoff |

## Metrics Audit

| Metric or measurable fact | Existing location | Current utilization | Recommended placement |
|---|---|---|---|
| Homepage/marketing load time: ~10s to ~4s | Fender performance | Detail-page summary, results, and metric cards | Homepage card, Work card, case-study hero, About capability proof |
| PDP LCP reduced by >50% | Fender performance | Detail page | Homepage/Work card and hero metric strip |
| PDP CLS improved by >90% | Fender performance | Detail page | Homepage/Work card and hero metric strip |
| Sitewide LCP improved ~30–40% | Fender performance | Detail page | Homepage/Work card and performance overview |
| Frontend rebuild time: ~20s to ~2s | Fender performance | Detail page | Technical-lead/maintainability highlight |
| Only 0.3% clicked a product rail; 99% of those used the first two | Fender performance | Buried in subsection | Prominent “analytics informed architecture” callout |
| Post-trial monthly active retention increased 1.2% across two cohorts | Fender Play | Results text deep in article | Card excerpt/impact summary and experimentation highlight |
| Product sync spans multiple Shopify storefronts, languages, regions, and merchandising contexts | Fender product sync | Qualitative copy | Card, article hero, architecture overview; validate numeric scope |
| Product sync enabled non-technical self-service and partial-success visibility | Fender product sync | Results/solution | Article hero and operational-efficiency callout |
| PDP gallery reused across multiple brands/storefronts and migrated SFCC to Shopify | Fender gallery | Short solution/results lists | Card excerpt and architecture hero; validate exact counts |
| Clean Strength supports one-time and subscription purchases for a supplement brand | Clean Strength | Article copy, current rank 8 | Homepage top three and card impact statement |
| Portland Painting homepage LCP: 6.0s to 1.1s | Portland Painting | Detail metric cards | Work card subtitle or metric badge |
| Portland Painting interior-page LCP: 13.9s to 0.5s | Portland Painting | Detail metric cards | Work card or migration summary |
| Portland Painting performance score: 63 to 98/99 | Portland Painting | Detail metric cards | Work card |
| Portland Painting SEO score: 77 to 92 | Portland Painting | Detail metric cards | Work card |
| Soft Arcade launched with two games | Soft Arcade | Overview body | Card only if space remains after full-stack architecture emphasis |
| About page names work supporting Fender, PreSonus, Jackson, and Leatherman | About copy | Background paragraph | Multi-brand credibility summary, subject to accurate relationship wording |

Metrics that should be investigated but **not added until validated**:

- Exact years of professional experience.
- Shopify Plus edition and duration.
- Number of Shopify stores, brands, countries, regions, locales, SKUs, metafields, or sync operations.
- Catalog-sync time saved, error-rate reduction, adoption, and manual-work reduction.
- PDP gallery deployment count and duplicated-code reduction.
- Clean Strength conversion, subscription adoption, retention, AOV, repeat purchase, catalog size, and revenue.
- Traffic scale, percentile methodology, and field-versus-lab source for performance metrics.
- Team size, developers mentored, review volume, delivery cadence, and release frequency.
- CI/CD build/deploy duration, rollback rate, and incident recovery time.

## New Case Study Opportunities

These opportunities reorganize or deepen work already represented; none requires inventing a new accomplishment.

| Priority | Proposed Case Study | Why |
|---:|---|---|
| 1 | Fender Multi-Store Shopify Product Operations Platform | Expand the existing product-sync material into the definitive full-stack architecture study: PIM ingestion, transformations, GraphQL writes, localization, admin UX, partial success, monitoring, and merchandising self-service |
| 2 | Operating a Subscription Supplement Brand on Shopify | Deepen Clean Strength into a subscription CPG operator/developer case covering theme decisions, recurring purchase, catalog structure, PDP/navigation, promotions, ongoing operations, and any verified tooling/metrics |
| 3 | Cross-Brand Ecommerce Platform Architecture and Migration | Combine only the already represented architectural through-line across the gallery's SFCC-to-Shopify migration, React/Liquid boundary, normalized media data, multi-brand reuse, and performance evolution |
| 4 | Analytics-Led Ecommerce Optimization | Reframe existing Fender performance evidence around the decision loop: customer behavior, product-rail prioritization, SSR/hydration, image delivery, Core Web Vitals, and measurable outcomes |
| 5 | Experimentation and Identity Infrastructure for Subscription Products | Use existing Fender Play work to demonstrate OAuth, cohort assignment, event governance, analytics routing, dashboards, shared components, and the verified retention result |
| 6 | Full-Stack Edge Product Architecture | Keep Soft Arcade as a supporting modern-stack study focused on Next.js, Cloudflare Workers/D1, client/server boundaries, performance, and analytics rather than game mechanics |

## Implementation Roadmap

| Priority | Change | Estimated Effort | Expected Impact |
|---:|---|---|---|
| P0 | Reorder studies to product sync, performance, Clean Strength, gallery, Fender Play, Soft Arcade, Portland Painting, EB5G, Taco Machine, Upper Left Indie | 15 minutes | Very high: fixes homepage and Work first impression immediately |
| P0 | Ensure the homepage's first three cards are the recommended top three | Included with ordering | Very high: establishes Shopify systems, measured performance, and subscription CPG in one scan |
| P0 | Validate Shopify Plus and seven-plus years; surface exact facts if supported | 30–60 minutes research | Very high: resolves two likely screening gates |
| P1 | Put existing performance and retention metrics on cards/impact summaries | 1–2 hours | High: makes business outcomes visible without opening articles |
| P1 | Expand Fender product sync into long-form architecture sections | 2–4 hours | Very high: best direct evidence for the role's platform and internal-systems mandate |
| P1 | Expand Clean Strength around subscription CPG operations and verified technology | 2–4 hours | Very high: makes the unusually exact domain match credible |
| P1 | Reposition the PDP gallery around platform migration and reusable multi-brand architecture | 1–2 hours | High: strengthens scalable architecture and Shopify/Liquid/React evidence |
| P1 | Change Work/homepage positioning for application use from “local websites” to senior ecommerce platform engineering | 1–2 hours | High: prevents brand positioning from lowering perceived seniority |
| P1 | Add a visible Shopify/Architecture/Subscriptions/GraphQL/Performance filter or curated “Ecommerce systems” collection | 1–2 hours | Medium-high: helps reviewers reach relevant work quickly |
| P2 | Audit existing work for verifiable ERP, CRM, WMS, payment, shipping, checkout, search, loyalty, and customer-account evidence | 1–3 hours research | High if evidence exists; otherwise clarifies interview talking points |
| P2 | Audit and document mentoring, code review, engineering standards, planning, and stakeholder leadership | 1–2 hours research | High: closes the lead-versus-senior-IC gap |
| P2 | Audit and document real CI/CD, deployment automation, SQL/NoSQL, REST, security, and accessibility work | 2–4 hours research | High: closes explicit requirements without fabrication |
| P2 | Add verified scale metrics to Fender product sync and gallery | 1–2 hours research, 1 hour implementation | High: converts strong claims into enterprise-scale proof |
| P2 | Cross-link the three Fender ecommerce studies as one platform story | 1–2 hours | Medium: communicates ecosystem ownership across data, PDP, and performance |
| P3 | De-emphasize local/non-ecommerce studies without deleting them | 30 minutes | Medium: preserves breadth while keeping the application focused |
| P3 | Make `featured` or a role-specific weight actually control prominence instead of relying only on array position | 1–2 hours | Medium: improves future targeting and prevents ordering regressions |

## Final Hiring-Manager Recommendation

The portfolio already contains enough substance to support a serious interview for this role, but it currently makes the reviewer assemble the fit manually. The optimal narrative is:

1. **I architect Shopify-connected operational systems** — Fender product sync.
2. **I produce measurable storefront performance improvements at scale** — Fender performance.
3. **I understand subscription CPG as both developer and operator** — Clean Strength.
4. **I design reusable multi-brand commerce architecture** — Fender PDP gallery.
5. **I use experimentation and analytics to improve retention** — Fender Play.

Do not attempt to paper over the remaining gaps. Shopify Plus, tenure, mentoring, ERP/CRM/WMS/payments/shipping, CI/CD, database depth, security, and accessibility should be added only after confirming concrete evidence. Honest specificity will improve this application more than broader unsupported claims.
