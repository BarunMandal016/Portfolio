import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Barun Mandal — HireMatch AI candidate screening, Slack sales intelligence bot, and more.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
