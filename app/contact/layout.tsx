import type { Metadata } from "next";
import { SITE_URL } from "@/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Barun Mandal — available for full-stack development opportunities and collaborations.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
