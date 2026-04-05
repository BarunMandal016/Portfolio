import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { SITE_NAME, EMAIL, LOCATION, FOOTER_SOCIAL_LINKS } from "@/data";
import type { ReactNode } from "react";

const SOCIAL_ICONS: Record<string, ReactNode> = {
  GitHub: <Github className="size-5" />,
  LinkedIn: <Linkedin className="size-5" />,
  Email: <Mail className="size-5" />,
};

function Footer() {
  return (
    <footer className="border-t border-white/50 bg-gray-200">
      <div className="max-w-5xl mx-auto w-full py-8 px-6">
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-bold text-lg bg-gradient-to-r from-green-400 to-green-800 bg-clip-text text-transparent">
              Barun Mandal
            </h3>
            <p className="text-sm text-black flex items-center gap-1.5">
              <MapPin className="size-3.5" />
              {LOCATION}
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm  text-black flex items-center gap-1.5"
            >
              <Mail className="size-3.5" />
              {EMAIL}
            </a>
          </div>

          <div className="flex flex-col gap-2 max-h-max">
            <span className="text-[18px] font-medium text-black">Connect</span>
            <div className="grid grid-cols-2 gap-2">
              {FOOTER_SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  aria-label={link.label}
                  className="p-1 rounded-sm text-muted-foreground hover:text-foreground hover:bg-accent hover:scale-125 transition-colors ease-in-out"
                >
                  {SOCIAL_ICONS[link.label]}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 flex justify-center">
          <p className="text-xs text-black">
            &copy; {new Date().getFullYear()} {SITE_NAME}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
