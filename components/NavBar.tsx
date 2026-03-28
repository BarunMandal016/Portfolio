"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, Terminal, X } from "lucide-react";
import TerminalComponent from "./TerminalComponent";
import { NAV_ITEMS } from "@/data";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-[0_1px_0_rgba(102,126,234,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between py-4 sm:px-0 px-0">
        <Link href="/" className="group flex items-center gap-2">
          <div className="size-8 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-white font-bold text-sm">
            B
          </div>
          <span className="font-semibold text-sm hidden sm:block group-hover:text-accent-blue transition-colors">
            Barun Mandal
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                href={item.href}
                key={item.name}
                className={`relative text-[13px] font-medium px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-gradient-to-r from-accent-blue to-accent-purple" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <TerminalComponent>
            <button
              className="size-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-colors"
              aria-label="Open terminal"
            >
              <Terminal className="size-4" />
            </button>
          </TerminalComponent>

          <Link
            href="/contact"
            className="hidden md:inline-flex text-xs font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white hover:opacity-90 transition-opacity"
          >
            Hire Me
          </Link>

          <button
            className="md:hidden size-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pb-4 pt-1 border-t border-border/50 flex flex-col gap-1">
          <Link
            href="/"
            className={`text-sm font-medium px-4 py-2.5 rounded-lg transition-colors ${
              pathname === "/"
                ? "text-foreground bg-accent/50"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
            }`}
          >
            Home
          </Link>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                href={item.href}
                key={item.name}
                className={`text-sm font-medium px-4 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? "text-foreground bg-accent/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mx-4 mt-2 text-center text-sm font-medium px-4 py-2.5 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
