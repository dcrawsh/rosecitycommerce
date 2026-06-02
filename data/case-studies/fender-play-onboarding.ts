import { CaseStudy } from "@/data/case-studies/types";

const fenderPortfolioDisclaimer =
  "Completed as part of an in-house ecommerce/product engineering team and included here as a professional portfolio project.";

export const fenderPlayOnboardingExperimentation: CaseStudy = {
  slug: "fender-play-onboarding-experimentation",
  title: "Personalized Onboarding & Experimentation for Fender Play",
  client: "Fender in-house product engineering team",
  businessType: "IN-HOUSE PRODUCT ENGINEERING",
  excerpt:
    "Built personalized onboarding flows, custom React experimentation infrastructure, analytics tracking, and shared UI systems for Fender Play, helping product teams measure activation, iterate on onboarding experiences, and improve post-trial retention.",
  impactSummary:
    "This work connected onboarding personalization, identity, experimentation, analytics, and shared frontend systems for a subscription SaaS product.",
  disclaimer: fenderPortfolioDisclaimer,
  tags: ["SaaS", "Experimentation", "A/B Testing", "Analytics", "React", "Storybook", "Retention"],
  context:
    "Fender Play is Fender's subscription-based learning platform for guitar, bass, and ukulele players. This project focused on improving the onboarding experience for new users by combining personalization, authentication, experimentation, analytics, and shared frontend systems.",
  problem:
    "Personalized onboarding was a critical part of Fender Play's subscription funnel, but the team needed a React-compatible way to create dynamic onboarding experiences, assign experiment cohorts, preserve consistent analytics definitions, and measure activation and retention behavior without creating one-off tracking implementations for every test.",
  solution: [
    "Built onboarding flows that adapted to player goals, skill level, and instrument preferences",
    "Created a custom experimentation pipeline that used Firebase for traffic allocation and cohort assignment while rendering experiment experiences inside React",
    "Connected experiment measurement through Avo event definitions and Segment analytics routing",
    "Built tracking and monitoring dashboards for onboarding starts, completion, preference selection, activation, and retention behavior",
    "Contributed to the shared Fender Play 5.0 component system in Storybook"
  ],
  results: [
    "Built personalized onboarding flows across Fender Play and Fender Connect",
    "Created a custom experimentation pipeline for React-based onboarding experiments",
    "Enabled product teams to run and evaluate onboarding tests more reliably",
    "Improved visibility into activation and retention metrics across experiment cohorts",
    "Contributed to a shared Storybook component system for Fender Play 5.0",
    "Increased post-trial monthly active retention by 1.2% across two experiment cohorts through iterative experimentation and performance-focused UI improvements"
  ],
  sections: [
    {
      title: "Overview",
      intro: [
        "Fender Play is Fender's subscription-based learning platform for guitar, bass, and ukulele players.",
        "This project focused on improving the onboarding experience for new users by combining personalization, authentication, experimentation, analytics, and shared frontend systems.",
        "The work connected Fender Play with Fender Connect identity flows, helped product teams run onboarding experiments, and improved visibility into activation and retention behavior."
      ]
    },
    {
      title: "Challenge",
      intro: [
        "Personalized onboarding was a critical part of Fender Play's subscription funnel.",
        "The team needed a way to create dynamic onboarding experiences based on user inputs such as skill level, goals, and instrument preferences while also measuring how those experiences affected activation and retention.",
        "A key technical challenge was experimentation. At the time, the mobile team was using Firebase's built-in A/B testing tools to run onboarding experiments. However, Firebase's web A/B testing approach did not fit cleanly with Fender Play's React application architecture, where experiences were rendered through a virtual DOM rather than Firebase's expected traditional DOM-oriented implementation.",
        "The challenge was not only building a better onboarding experience. It was building the frontend experimentation and analytics foundation needed to improve onboarding over time."
      ],
      subsections: [
        {
          title: "Experimentation Requirements",
          bullets: [
            "Split users into experiment cohorts",
            "Support React-based onboarding experiences",
            "Preserve consistent analytics event definitions",
            "Measure activation and retention across cohorts",
            "Give product teams a reliable way to evaluate experiments",
            "Avoid one-off tracking implementations for every test"
          ]
        }
      ]
    },
    {
      title: "Solution",
      subsections: [
        {
          title: "Personalized Onboarding",
          body: [
            "Built onboarding flows that adapted to player goals, skill level, and instrument preferences.",
            "These flows created a more relevant first-time experience for new subscribers and helped connect users to a learning path that matched their needs."
          ]
        },
        {
          title: "Fender Connect and OAuth Integration",
          body: [
            "Integrated onboarding with Fender Connect SSO using OAuth-based authentication flows.",
            "This helped users move between Fender Play and the broader Fender account ecosystem while maintaining a consistent identity and profile experience."
          ]
        },
        {
          title: "Custom React Experimentation Pipeline",
          body: [
            "Built a custom experimentation pipeline for Fender Play's React application.",
            "Instead of relying on Firebase's out-of-the-box web A/B testing UI, Firebase was used for traffic allocation and cohort assignment. Experiment measurement then flowed through a custom analytics pipeline using Avo and Segment.",
            "This created a more flexible experimentation model for React-based product experiences."
          ],
          bullets: [
            "Assign users to cohorts through Firebase",
            "Render experiment experiences cleanly inside React",
            "Define consistent analytics events through Avo",
            "Send behavioral data through Segment",
            "Compare activation and retention across cohorts",
            "Build reusable patterns for future onboarding experiments"
          ]
        },
        {
          title: "Analytics and Monitoring",
          body: [
            "Built analytics tracking and monitoring dashboards for onboarding experiments.",
            "The measurement layer helped product and engineering teams evaluate onboarding starts, onboarding completion, skill-level selections, instrument preferences, activation behavior, and retention impact by experiment cohort."
          ]
        },
        {
          title: "Shared Component System",
          body: [
            "Contributed to the shared Fender Play 5.0 component system in Storybook.",
            "The component system improved UI consistency across onboarding, subscription, and account-related experiences while increasing developer velocity for future product work."
          ]
        }
      ]
    },
    {
      title: "Product Walkthrough",
      video: {
        src: "https://www.youtube.com/embed/FnE3qncJIqo?si=cUyruxUWmSww9EY2",
        title: "YouTube video player"
      }
    },
    {
      title: "Results",
      subsections: [
        {
          title: "Product and Engineering Impact",
          bullets: [
            "Built personalized onboarding flows across Fender Play and Fender Connect",
            "Created a custom experimentation pipeline for React-based onboarding experiments",
            "Enabled product teams to run and evaluate onboarding tests more reliably",
            "Improved visibility into activation and retention metrics across experiment cohorts",
            "Contributed to a shared Storybook component system for Fender Play 5.0",
            "Increased post-trial monthly active retention by 1.2% across two experiment cohorts through iterative experimentation and performance-focused UI improvements"
          ]
        }
      ]
    }
  ],
  sidebarHighlights: [
    "React-based onboarding experiences",
    "OAuth authentication through Fender Connect",
    "Firebase cohort assignment",
    "Avo event governance",
    "Segment analytics pipeline",
    "Experiment monitoring dashboards",
    "Shared Storybook component system",
    "Retention-focused product iteration"
  ],
  stack: [
    "React",
    "OAuth",
    "Firebase",
    "Avo",
    "Segment",
    "Storybook",
    "Analytics Dashboards",
    "Fender Connect",
    "Fender Play"
  ],
  image: "/images/fender-play-onboarding.svg",
  imagePosition: "center"
};
