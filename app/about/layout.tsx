import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Barun Mandal — Full-Stack Developer with 2+ years building scalable apps with Next.js, AWS, and AI at PMsquare.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
