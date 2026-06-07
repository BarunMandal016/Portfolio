import type { Metadata } from "next";
import { SITE_URL } from "@/data";

export const metadata: Metadata = {
  title: "Skills & Expertise",
  description:
    "Technical skills: JavaScript, TypeScript, Python, React, Next.js, NestJS, Express, FastAPI, PostgreSQL, MongoDB, Redis, AWS, Docker, Terraform, and more.",
  alternates: {
    canonical: `${SITE_URL}/skills`,
  },
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
