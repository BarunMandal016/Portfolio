import type { TaskComplexity } from "@/types";

export const TASK_CATEGORIES = [
  "Backend API Development",
  "Frontend Development",
  "Full-Stack Feature",
  "AI / GenAI Integration",
  "DevOps & Infrastructure",
  "Database Design & Optimization",
];

export const TASK_COMPLEXITIES: TaskComplexity[] = [
  { label: "Simple", duration: "2-4 hours" },
  { label: "Moderate", duration: "1-2 days" },
  { label: "Complex", duration: "3-5 days" },
];

export const SAMPLE_TASK_IDEAS = [
  "Build a REST API with authentication, rate limiting, and PostgreSQL integration",
  "Create a real-time chat feature using WebSockets and Redis",
  "Design and implement a CI/CD pipeline with Docker and GitHub Actions",
  "Optimize database queries and implement caching strategy",
  "Build a responsive dashboard with charts and live data updates",
];
