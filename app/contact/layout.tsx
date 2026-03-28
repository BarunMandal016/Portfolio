import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Barun Mandal — available for full-stack development opportunities and collaborations.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
