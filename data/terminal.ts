import type { TerminalResponses } from "@/types";

export const TERMINAL_RESPONSES: TerminalResponses = {
  help: "about  skills  experience  projects  contact  clear",
  about: [
    "Full-Stack Developer @ PMsquare · 2+ yrs",
    "B.E. Computer Engineering · IOE-ERC Dharan",
    "Shipped AI search, zero-downtime CI/CD, AWS infra",
  ].join("\n"),
  skills: [
    "JS/TS · Python · React · Next.js · NestJS · FastAPI",
    "AWS · Docker · PostgreSQL · MongoDB · Redis · Prisma",
    "GitHub Actions · Terraform · Cypress · Jest",
  ].join("\n"),
  experience: [
    "Assoc. Full-Stack Dev | PMsquare | Sep 2024–now",
    "  40% faster loads · CI/CD · vector search · OAuth",
    "Backend Intern | PMsquare | Jun–Aug 2024",
    "  AWS services · FastAPI · React refactoring",
  ].join("\n"),
  projects: [
    "HireMatch — AI candidate screening (GenAI, NLP, vector DB)",
    "Slack Bot — sales intelligence with RBAC",
  ].join("\n"),
  contact: [
    "barun.mandalbct@gmail.com · +977 9824865280",
    "github.com/BarunMandal016",
    "linkedin.com/in/barun-mandal16",
  ].join("\n"),
};
