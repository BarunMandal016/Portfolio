import Link from "next/link";
import { EMAIL, SOCIAL_LINKS } from "@/data";
import type { ReactNode } from "react";
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";

const SOCIAL_ICONS: Record<string, ReactNode> = {
  GitHub: <Github className="size-5" />,
  LinkedIn: <Linkedin className="size-5" />,
};

export default function Footer() {
  return (
    <footer className="mb-12">
      <div className="max-w-5xl mx-auto w-full border-t border-foreground/25 pt-5 flex flex-col gap-4">
        <h3 className="font-bold text-lg bg-linear-to-r from-green-400 to-green-800 bg-clip-text text-transparent">
          Barun Mandal
        </h3>

        <div className="p-4 rounded-lg bg-accent/50 border border-border space-y-3 w-max max-w-full">
          <p className="text-sm font-medium">Prefer email?</p>
          <p className="text-xs text-muted-foreground">
            You can also reach me directly at{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="text-accent-blue hover:underline"
            >
              {EMAIL}
            </a>
          </p>
          <div className="flex gap-2">
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                aria-label={link.label}
                className="p-2 rounded-sm border hover:scale-110 ease-in transition-transform"
              >
                {SOCIAL_ICONS[link.label]}
              </Link>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Kathmandu, Nepal · UTC+5:45 hrs
          </p>
        </div>

        <p className="text-xs">&copy; {new Date().getFullYear()}.</p>
      </div>
    </footer>
  );
}
