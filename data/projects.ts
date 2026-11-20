import type { HomeProject } from "@/types"

export const HOME_PROJECTS: HomeProject[] = [
  {
    title: "HireMatch",
    description:
      "Candidate-screening platform that compares resumes with job descriptions and provides summaries and ranked matches using vector search and GenAI.",
    tag: "Work Project",
    accent: "blue",
    visual: { node: "AI Match", sub: "pgvector" },
    metrics: ["📄 Resume matching", "🔄 SharePoint updates"],
    tech: ["NestJS", "Next.js", "pgvector", "GenAI", "Redis"],
    details: [
      "Compared resumes with job descriptions to generate candidate overviews and ranked matches.",
      "Generated interview questions tailored to a candidate's CV and role requirements, helping reduce interview-preparation time.",
      "Implemented vector search to find relevant candidate matches.",
      "Added shared notes so teams could collaborate across the hiring pipeline.",
      "Processed new resumes incrementally from SharePoint change events.",
    ],
  },
  {
    title: "Slack Sales Bot",
    description:
      "Internal Slack chatbot for querying sales leads, opportunities, and client data, with role-based access control.",
    tag: "Work Project",
    accent: "purple",
    visual: { node: "CRM", sub: "RBAC" },
    metrics: ["🏢 Internal tool"],
    tech: ["NestJS", "Slack API", "PostgreSQL", "Redis", "RBAC"],
    details: [
      "Developed a real-time Slack chatbot for querying sales leads, opportunities, and client data.",
      "Implemented role- and permission-based access controls for sensitive business data.",
    ],
  },
  {
    title: "Hamro Mart",
    description:
      "E-commerce project with a storefront, cart, checkout, and admin tools for inventory and orders.",
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
  },
  {
    title: "Callback",
    description:
      "Job-search project for international students exploring opportunity discovery, listing screening, resume tailoring, and recruiter-contact lookup.",
    tag: "Personal Project",
    accent: "blue",
    visual: { node: "Job Search", sub: "auto apply" },
    metrics: ["🔎 Job discovery", "📝 Resume tailoring", "📧 Recruiter lookup"],
    tech: ["Next.js", "Python", "Node.js", "Job APIs", "GenAI"],
    details: [
      "Searches multiple job sources for relevant opportunities",
      "Flags suspicious or potentially misleading listings for review",
      "Tailors resumes based on role requirements",
      "Supports recruiter-contact discovery and application workflows",
    ],
  },
  {
    title: "Acre",
    description:
      "Lead-management project for real estate agents to track prospects, find opportunities, and follow their pipeline.",
    tag: "Personal Project",
    accent: "blue",
    visual: { node: "Real Estate", sub: "lead tracking" },
    metrics: ["📍 Lead tracking", "🎯 Lead discovery", "📊 Pipeline mgmt"],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Maps API"],
    details: [
      "Lead tracking and management for real estate agents",
      "Lead discovery and sourcing tools to find new opportunities",
      "Pipeline analytics and performance insights",
      "Property listing and client communication hub",
    ],
  },
  {
    title: "Nexus",
    description:
      "Content-publishing project for articles, blogs, notes, and documentation, with tags, author profiles, and Markdown support.",
    tag: "Personal Project",
    accent: "purple",
    visual: { node: "Content", sub: "sharing" },
    metrics: ["📝 Article posting", "📚 Blog platform", "🔍 Discoverability"],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Markdown"],
    details: [
      "Rich text editor for writing articles, blogs, notes, and documentation",
      "Category and tag-based organization for easy content discovery",
      "Author profiles and following system for community building",
      "Markdown support with preview and formatting options",
    ],
  },
]
