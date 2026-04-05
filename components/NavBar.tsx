"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Terminal, X } from "lucide-react";
import TerminalComponent from "./TerminalComponent";
import { NAV_ITEMS } from "@/data";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky z-10 top-0 backdrop-blur-xl border-b border-b-white bg-gradient-to-r from-black/50 via-white/25 to-black/50">
      <nav className="max-w-5xl mx-auto flex items-center justify-between py-4 sm:px-0 px-0">
        <Link href="/" className="group flex items-center gap-2">
          <h2 className="font-semibold font-serif text-xl sm:text-3xl">
            Barun
          </h2>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                href={item.href}
                key={item.name}
                className={cn(
                  "relative text-sm font-medium px-3 py-2 rounded-lg transition-colors hover:scale-105",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-[2px] rounded-full bg-gradient-to-r from-white/50 to-white/90"/>
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <TerminalComponent>
            <Button
              className="rounded-lg flex items-center border-none justify-center text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-colors cursor-pointer"
              aria-label="Open terminal"
              variant={"outline"}
            >
              <Terminal className="size-4" />
              Terminal
            </Button>
          </TerminalComponent>

          <Link
            href="/contact"
            className="hidden md:inline-flex text-xs font-medium px-4 py-2 rounded-sm bg-gradient-to-r from-white/40 to-white/80 text-white hover:opacity-90 transition-opacity"
          >
            Hire Me
          </Link>

          <Button
            className="md:hidden bg-white/20 size-8 rounded-sm border hover:border-white flex items-center justify-center cursor-pointer hover:text-foreground hover:bg-accent/60 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            variant={"outline"}
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>
        </div>
      </nav>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-2 pb-4 pt-1 border-t border-border/50 flex flex-col gap-1">
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
        </div>
      </div>
    </header>
  );
}
