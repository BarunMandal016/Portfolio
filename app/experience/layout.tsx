import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience & Education",
  description:
    "Professional experience as Full-Stack Developer at PMsquare and Computer Engineering degree from IOE-ERC Dharan.",
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
