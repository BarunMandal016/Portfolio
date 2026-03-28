import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Expertise",
  description:
    "Technical skills: TypeScript, React, Next.js, Node.js, AWS, PostgreSQL, Docker, FastAPI, Python, and more.",
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
