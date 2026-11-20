import type { Metadata } from "next";
import { SITE_URL } from "@/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Barun Mandal, a London-based software developer available for part-time and contract work.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
