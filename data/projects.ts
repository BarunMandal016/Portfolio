import type { Project, HomeProject } from "@/types";
import { GITHUB_URL } from "./personal";

export const PROJECTS: Project[] = [
  {
    title: "HireMatch",
    subtitle: "AI-Powered Candidate Screening Platform",
    description:
      "An AI platform that helps HR teams evaluate candidates by automatically analyzing resumes against job descriptions and generating instant overviews.",
    highlights: [
      "Integrated GenAI to generate interview questions tailored to a candidate's CV and the job description, reducing interview prep time",
      "Implemented NLP-based vector search on a vector database to surface top-matched candidates with high accuracy and low latency",
      "Added multi-user note-taking across all stages of the hiring pipeline for team collaboration",
      "Built an event-driven pipeline that processes new candidate resumes by listening to change events from a SharePoint site",
    ],
    tech: ["Next.js","TanStack Query", "Vector DB", "GenAI"],
    github: GITHUB_URL,
  },
  {
    title: "Slack Chatbot",
    subtitle: "Internal Sales Intelligence Bot",
    description:
      "A Slack bot for the company workspace that answers questions about sales leads, opportunities, and client data in real time.",
    highlights: [
      "Developed real-time conversational interface within Slack for querying business intelligence data",
      "Implemented role-based and permission-based access control to ensure sensitive business data is only accessible to authorized users",
    ],
    tech: ["Slack API", "Python", "RBAC"],
    github: GITHUB_URL,
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Developer Portfolio",
    description:
      "This portfolio — built with Next.js 15, Tailwind CSS, and Framer Motion. Features an interactive terminal emulator, typing animations, and static deployment to GitHub Pages.",
    highlights: [],
    tech: ["Next.js", "Framer Motion"],
    github: GITHUB_URL,
  },
];

export const HOME_PROJECTS: HomeProject[] = [
  {
    title: "HireMatch",
    description:
      "AI-powered candidate screening. Drop resumes into SharePoint, get ranked matches via vector search + GenAI instantly.",
    tag: "Work Project",
    accent: "blue",
    visual: { node: "AI Match", sub: "pgvector" },
    metrics: ["🏭 Production", "⚡ 75% faster screening", "🚀 AWS ECS"],
    tech: ["NestJS", "Next.js", "pgvector", "GenAI", "Redis"],
    details: [
      "GenAI-generated interview questions tailored to a candidate's CV and the job description",
      "NLP-based vector search to surface top-matched candidates with high accuracy and low latency",
      "Multi-user note-taking across all stages of the hiring pipeline",
      "Event-driven pipeline processing new resumes from SharePoint change events",
    ],
    github: GITHUB_URL,
  },
  {
    title: "Slack Sales Bot",
    description:
      "Internal intelligence bot. Sales teams query CRM data in natural language inside Slack, with role-based access control.",
    tag: "Work Project",
    accent: "purple",
    visual: { node: "CRM", sub: "RBAC" },
    metrics: ["🏭 Production", "👥 50+ daily users", "⚡ 60% faster response"],
    tech: ["NestJS", "Slack API", "PostgreSQL", "Redis", "RBAC"],
    details: [
      "Real-time conversational interface within Slack for querying sales leads, opportunities, and client data",
      "Role-based and permission-based access control so sensitive business data stays with authorized users",
    ],
    github: GITHUB_URL,
  },
  {
    title: "Hamro Mart",
    description:
      "Full-featured e-commerce platform — storefront, cart, and checkout, backed by an admin dashboard for inventory and orders.",
    tag: "Personal Project",
    accent: "amber",
    visual: { node: "Storefront", sub: "checkout" },
    metrics: ["🛒 E-commerce", "📦 Inventory + orders", "💳 Payments"],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    details: [
      "Product catalog with search, filtering, and category browsing",
      "Cart and checkout flow with order tracking",
      "Admin dashboard for managing inventory, orders, and customers",
    ],
    github: GITHUB_URL,
  },
  {
    title: "Roost",
    description:
      "Skill-swap meets room-finder. Trade skills with people nearby and discover rooms to rent — one community platform.",
    tag: "Coming Soon",
    accent: "amber",
    visual: { node: "Match", sub: "skills + rooms" },
    metrics: ["🤝 Skill swap", "🏠 Room finder", "📍 Location based"],
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    details: [
      "Skill-swap matching — offer what you know, learn what you don't",
      "Room listing and discovery with location-based filtering",
      "Unified profiles and in-app messaging across both concepts",
    ],
    github: GITHUB_URL,
  },
  {
    title: "Qorom",
    description:
      "Agentic solution for B2B business owners — AI agents that market your business and products for you.",
    tag: "Coming Soon",
    accent: "amber",
    visual: { node: "AI Agent", sub: "marketing" },
    metrics: ["🤖 Agentic AI", "📣 Auto marketing", "🏢 B2B"],
    tech: ["Next.js", "GenAI", "Node.js"],
    details: [
      "Autonomous agents that draft and run marketing campaigns for businesses and products",
      "Business-owner dashboard to steer tone, audience, and goals",
      "Built for B2B — agents tailor outreach per client segment",
    ],
    github: GITHUB_URL,
  },
];
