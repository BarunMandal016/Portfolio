import type { Metadata } from "next";
import { SITE_URL } from "@/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Barun Mandal — HireMatch AI candidate screening, Slack sales intelligence bot, Hamro Mart e-commerce, and more.",
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
