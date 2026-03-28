import type { SkillCategory } from "@/types";

export const SKILL_DATA: SkillCategory[] = [
  {
    title: "Languages",
    accent: "blue",
    bars: [
      { name: "JavaScript / TypeScript", level: 92 },
      { name: "Python", level: 80 },
      { name: "C / C++", level: 60 },
    ],
    pills: [],
  },
  {
    title: "Frameworks & Libraries",
    accent: "purple",
    bars: [
      { name: "React / Next.js", level: 90 },
      { name: "NestJS / Express", level: 82 },
      { name: "FastAPI", level: 75 },
    ],
    pills: ["Tailwind", "TanStack Query"],
  },
  {
    title: "Databases & ORMs",
    accent: "blue",
    bars: [
      { name: "PostgreSQL / MySQL", level: 85 },
      { name: "MongoDB", level: 78 },
      { name: "Redis", level: 65 },
    ],
    pills: ["Prisma", "Sequelize", "SQLAlchemy"],
  },
  {
    title: "Cloud & DevOps",
    accent: "purple",
    bars: [
      { name: "AWS (EC2, Lambda, S3, ECS)", level: 80 },
      { name: "Docker", level: 75 },
      { name: "GitHub Actions / Terraform", level: 72 },
    ],
    pills: [],
  },
  {
    title: "Testing & Misc",
    accent: "blue",
    bars: [],
    pills: [
      "Cypress",
      "Jest",
      "Git",
      "WebSocket",
      "SSE",
      "Webhooks",
      "Langchain",
      "OAuth 2.0",
    ],
  },
];

export const CORE_SKILLS = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "AWS",
  "PostgreSQL",
  "Docker",
  "FastAPI",
];

export const ROLES = [
  "Full-Stack Developer",
  "Cloud Engineer",
  "Backend Developer",
];
