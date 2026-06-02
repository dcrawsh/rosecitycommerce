import { CaseStudy } from "@/data/case-studies/types";

export const softArcadeGames: CaseStudy = {
  slug: "soft-arcade-games",
  title: "Soft Arcade Games",
  client: "Rose City Commerce",
  businessType: "OWNED PRODUCT / BROWSER GAMING / PRODUCT ANALYTICS",
  url: "https://softarcadegames.com",
  featured: true,
  excerpt:
    "A lightweight browser game platform built for instant no-login play and instrumented like a SaaS product. Soft Arcade combines fast web-native gameplay with PostHog analytics for funnels, repeat play, score submission behavior, difficulty balancing, and session replay.",
  impactSummary:
    "Soft Arcade was built as a Rose City Commerce owned product to show how product engineering judgment, performance discipline, and analytics maturity can apply to even a small browser gaming experience.",
  tags: [
    "Next.js",
    "TypeScript",
    "Canvas",
    "PostHog",
    "Product Analytics",
    "Cloudflare",
    "Browser Gaming",
    "Performance"
  ],
  context:
    "Soft Arcade Games is a Rose City Commerce owned product: a lightweight arcade site built to demonstrate that browser games can be fast, fun, and instrumented with the same rigor as a SaaS product.",
  problem:
    "The product needed to reduce every point of friction between landing on the site and starting a game while still producing useful behavioral data about engagement, difficulty, completion, score submission, and replay-worthy user sessions.",
  solution: [
    "Built a web-native gaming platform with Next.js 15, React 19, TypeScript, and Cloudflare infrastructure",
    "Designed the experience around instant play, optional leaderboards, local personal bests, and no account requirement",
    "Used browser-native rendering and client-side gameplay so games stay responsive without unnecessary backend dependency",
    "Instrumented core player journeys in PostHog so game design decisions can be informed by behavioral data",
    "Created reusable platform patterns for game routing, shared page structure, mobile play, and leaderboard submission"
  ],
  results: [
    "Launched an owned product that demonstrates product engineering depth beyond a traditional marketing site",
    "Created a multi-game platform that can be expanded without redesigning the core experience",
    "Made player engagement, completion, difficulty, and score submission behavior measurable from the start",
    "Established a foundation for future iteration through funnels, cohort analysis, session replay, and experimentation"
  ],
  sections: [
    {
      title: "Overview",
      intro: [
        "Soft Arcade Games is a Rose City Commerce owned product: a lightweight arcade site built to prove that browser games can be fast, approachable, and instrumented with the same rigor as a product-led SaaS experience. No accounts. No installs. Play in two clicks.",
        "The platform launched with two polished games, live leaderboards, local personal best tracking, and PostHog analytics designed around learning how players start, retry, complete, and submit scores."
      ]
    },
    {
      title: "Game Architecture",
      subsections: [
        {
          title: "Web-Native Platform Design",
          body: [
            "Soft Arcade is designed as a browser-native game platform rather than a single embedded game. Each title can use the interaction model that fits it best, while the surrounding product experience remains consistent: a game page, instructions, leaderboard context, and a clear route from first play to score submission.",
            "The architecture separates gameplay from presentation. Real-time gameplay is handled in dedicated browser-side loops, while React manages the surrounding interface: navigation, overlays, score entry, controls, and layout. That separation keeps the game experience responsive while still giving the product a maintainable web application structure."
          ]
        },
        {
          title: "Rendering and Interaction",
          body: [
            "Near Miss uses Canvas rendering for fast-moving arcade action where traffic, motion, collisions, and feedback need to update smoothly. Beat the Scrambler uses a lighter DOM-oriented approach that fits a tile puzzle. The platform does not force one rendering model across every game; it uses the browser primitive that best matches the player's interaction.",
            "Mobile play was treated as a product requirement, not an afterthought. The games account for narrow screens, touch controls, viewport positioning, and scroll behavior so players can start and complete a session on desktop or mobile without fighting the page."
          ]
        },
        {
          title: "Shared Game Infrastructure",
          body: [
            "A shared platform layer handles game discovery, reusable routes, leaderboard placement, score submission, and page structure. That means new games can inherit the same product surface while keeping their own gameplay logic and tuning.",
            "Leaderboards are intentionally lightweight. Gameplay stays fully client-side, and score submission is the only backend interaction. This keeps the platform simple, fast, and inexpensive to operate while still giving players a reason to care about outcomes beyond a single local run."
          ]
        }
      ]
    },
    {
      title: "Performance Decisions",
      subsections: [
        {
          title: "Reducing Time to Play",
          body: [
            "Every architectural decision prioritized reducing friction between landing on the site and starting a game. Soft Arcade has no login wall, no install step, and no account setup flow. The first meaningful action is play.",
            "Personal bests are stored locally and leaderboard submission is optional, so the product can provide progression and competition without making identity a prerequisite. If a player only wants a quick round, the platform supports that behavior instead of blocking it."
          ]
        },
        {
          title: "Keeping Gameplay Responsive",
          body: [
            "The real-time game experience is kept out of unnecessary UI rendering work. Fast-moving scenes render with browser-native Canvas, while React updates the surrounding interface at a lower cadence. The result is a product that feels responsive during play without sacrificing a maintainable application shell.",
            "Heavier game-specific code loads only when the relevant game page mounts. This keeps the broader site lightweight and avoids making every visitor pay the cost of every game up front."
          ]
        },
        {
          title: "Lightweight Infrastructure",
          body: [
            "The backend surface area is intentionally small. The site runs on Cloudflare Pages, score persistence is handled through a Cloudflare Worker and D1 database, and gameplay itself does not depend on a server round trip.",
            "That edge-first architecture fits the product: small games, fast page loads, low operational overhead, and enough backend capability to support leaderboards without turning the platform into a heavy application."
          ]
        },
        {
          title: "Performance as Product Quality",
          body: [
            "For a browser game, performance is not just a technical metric. It directly affects whether players trust the experience enough to start another round. Smooth input, fast loading, stable mobile behavior, and recoverable score submission all support the same product goal: make the next play feel easy."
          ]
        }
      ]
    },
    {
      title: "PostHog Implementation",
      subsections: [
        {
          title: "Instrumentation Strategy",
          body: [
            "PostHog was treated as product infrastructure from the start, not as a traffic counter added after launch. The tracking plan focuses on the decisions a product team would need to make: which games attract play, which ones earn retries, where players abandon the flow, and whether difficulty curves are helping or hurting engagement.",
            "Instrumentation covers the meaningful lifecycle of play: game starts, restarts, difficulty selection, completions, game-over outcomes, score submissions, and submission failures. Each signal is tied to a product question rather than captured for its own sake."
          ]
        },
        {
          title: "Funnels and Behavior",
          body: [
            "The most important funnel is the path from starting a game to reaching an outcome to submitting a score. That journey reveals whether the product is producing enough motivation for players to move from casual play into leaderboard participation.",
            "For the puzzle game, difficulty selection and completion data make balancing measurable. If players start a harder mode but rarely finish it, the issue may be puzzle tuning, onboarding, or expectations. If easier modes complete quickly but do not produce retries, the product may need a stronger reason to continue.",
            "For the arcade driving game, outcome metrics such as run length, score, speed behavior, near-miss performance, and personal-best status help distinguish between frustration, mastery, and replay motivation."
          ]
        },
        {
          title: "Session Replay and Qualitative Context",
          body: [
            "Session replay gives the quantitative funnels a qualitative layer. A score submission drop-off is useful; watching where players hesitate, miss a control, abandon a modal, or fail to notice the leaderboard explains why the drop-off may be happening.",
            "That combination matters for small products. Instead of guessing whether a problem is game balance, UI friction, copy, mobile ergonomics, or infrastructure reliability, PostHog gives the product a way to separate those causes."
          ]
        },
        {
          title: "First-Party Analytics Delivery",
          body: [
            "Analytics are routed through the application domain with a PostHog reverse proxy. This improves the chance that behavioral data reaches the analytics system despite common ad-blocking patterns, which is especially important when the product depends on learning from early usage."
          ]
        }
      ]
    },
    {
      title: "Product Analytics Narrative",
      subsections: [
        {
          title: "A Product Built for Learning",
          body: [
            "Soft Arcade is intentionally instrumented for learning. The goal is not simply to know how many people visited the site; it is to understand how players behave once they have a game in front of them.",
            "The platform can compare game starts, restarts, completions, score submissions, and repeat sessions across titles. That creates a practical feedback loop for deciding which games deserve more content, which mechanics need refinement, and which experiences generate the strongest pull for another round."
          ]
        },
        {
          title: "Difficulty and Game Balance",
          body: [
            "Difficulty balancing is a product analytics problem. Completion rates by difficulty show whether a challenge curve is inviting, boring, or discouraging. Move counts, elapsed time, and solve rates help identify whether players are mastering a puzzle or getting stuck without a clear path forward.",
            "The same principle applies to arcade play. Run length, average speed, near-miss behavior, final score, and personal-best outcomes can reveal whether players are learning the system, taking risks, or crashing before the game has time to become fun."
          ]
        },
        {
          title: "Friction in the Post-Game Flow",
          body: [
            "The score submission flow is a small but important conversion funnel. A player who reaches game over has already invested attention; whether they submit a score shows whether the product has created enough motivation, clarity, and trust to ask for one more action.",
            "If many players finish a run but do not submit, that points to product questions rather than vague engagement concerns: is the leaderboard visible enough, is the name entry step too much friction, does the game-over state make personal progress clear, or does the call to submit feel disconnected from the reward?"
          ]
        },
        {
          title: "Experimentation Opportunities",
          body: [
            "Because the product is instrumented around player decisions, future improvements can be tested rather than guessed. Difficulty curves, traffic density, game-over copy, leaderboard prominence, restart placement, and score submission prompts can all be evaluated against real behavior.",
            "Feature flags and cohort analysis create a path for small experiments: tune the early-game experience, compare score submission prompts, test leaderboard visibility, or adjust difficulty defaults. The point is to treat game design as an iterative product system, not a static creative artifact."
          ]
        },
        {
          title: "Prioritizing Future Games",
          body: [
            "Engagement data also informs roadmap decisions. A multi-game platform should not expand blindly; it should learn which mechanics create repeat sessions, which formats work best on mobile, and which experiences produce enough depth to justify further investment.",
          ]
        }
      ]
    }
  ],
  sidebarHighlights: [
    "Built with Next.js, React, and TypeScript as a lightweight web-native game platform.",
    "Uses Canvas rendering where real-time gameplay needs smooth browser-native motion.",
    "Runs on Cloudflare infrastructure with PostHog analytics for funnels, replay, and product iteration."
  ],
  stack: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Canvas 2D",
    "PostHog",
    "Cloudflare Pages",
    "Cloudflare Worker",
    "Cloudflare D1"
  ],
  image: "/images/projects/soft-arcade-hero.png",
  imagePosition: "center"
};
