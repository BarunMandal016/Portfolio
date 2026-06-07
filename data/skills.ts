import type { SkillCategory } from "@/types";

export const SKILL_DATA: SkillCategory[] = [
  {
    title: "Programming Languages",
    accent: "blue",
    bars: [
      { name: "JavaScript / TypeScript", level: 92 },
      { name: "Python", level: 80 },
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
    title: "Databases",
    accent: "blue",
    bars: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 78 },
      { name: "Redis", level: 65 },
    ],
    pills: [],
  },
  {
    title: "ORMs",
    accent: "purple",
    bars: [],
    pills: ["Prisma", "Sequelize", "Drizzle", "SQLAlchemy"],
  },
  {
    title: "DevOps & Cloud",
    accent: "blue",
    bars: [
      { name: "AWS (EC2, Lambda, S3, ECS)", level: 80 },
      { name: "Docker", level: 75 },
      { name: "GitHub Actions / Terraform", level: 72 },
    ],
    pills: [],
  },
  {
    title: "Miscellaneous",
    accent: "purple",
    bars: [],
    pills: ["Git", "WebSocket", "SSE", "Webhooks"],
  },
];

export const CORE_SKILLS = [
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "NestJS",
  "Express",
  "FastAPI",
  "TanStack Query",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Prisma",
  "AWS",
  "Docker",
  "GitHub Actions",
  "Terraform",
];
