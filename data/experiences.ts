import type { Experience, HomeExperience } from "@/types";

export const EXPERIENCES: Experience[] = [
  {
    title: "Associate Full-Stack Developer",
    company: "PMsquare",
    location: "Nepal",
    period: "Sep 2024 — Present",
    type: "work",
    highlights: [
      "Reduced initial page load by ~40% with lazy loading, infinite scroll, and server-side pagination",
      "Deployed apps to AWS behind load balancers with inbound/outbound security policies",
      "Automated CI/CD via GitHub Actions — zero-downtime production deployments",
      "Replaced traditional search with NLP vector search — faster results, multi-filter support",
      "Implemented OpenID Connect + OAuth 2.0 for auth across the platform",
      "Managed state at scale with Context API and Zustand",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "AWS",
      "Zustand",
      "GitHub Actions",
      "OAuth 2.0",
    ],
  },
  {
    title: "Backend Developer Intern",
    company: "PMsquare",
    location: "Nepal",
    period: "Jun 2024 — Aug 2024",
    type: "work",
    highlights: [
      "Hands-on AWS implementation — EC2, Lambda, S3, ECS for production workloads",
      "Refactored React frontend for performance; integrated FastAPI backend services",
    ],
    tech: ["AWS", "FastAPI", "React", "Python"],
  },
  {
    title: "B.E. in Computer Engineering",
    company: "IOE-ERC, Dharan",
    location: "Dharan, Nepal",
    period: "Oct 2019 — Apr 2024",
    type: "education",
    highlights: [
      "Core focus: data structures, algorithms, OS, networking, and system design",
    ],
    tech: [],
  },
];

export const HOME_EXPERIENCES: HomeExperience[] = [
  {
    role: "Associate Full-Stack Developer",
    company: "PMsquare",
    period: "Sep 2024 — Present",
    highlight:
      "Reduced load times 40% · Zero-downtime CI/CD · Vector search · OAuth 2.0",
  },
  {
    role: "Backend Developer Intern",
    company: "PMsquare",
    period: "Jun — Aug 2024",
    highlight:
      "AWS (EC2, Lambda, S3, ECS) · FastAPI · React performance refactoring",
  },
];
