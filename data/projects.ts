import type { Project } from "@/types";
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
