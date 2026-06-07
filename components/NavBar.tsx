"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, Terminal, X } from "lucide-react"
import TerminalComponent from "./TerminalComponent"
import ThemeToggle from "./ThemeToggle"
import { NAV_ITEMS } from "@/data"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  // Close the mobile menu after navigating — otherwise the open dropdown
  // keeps covering the new page and the click looks like it did nothing
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header className="sticky z-10 top-0 backdrop-blur-xl border-b border-border">

      <nav className="max-w-5xl mx-auto flex items-center justify-between py-4 sm:px-0 px-0">
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-semibold font-serif text-xl sm:text-3xl">
            Portfolio
          </span>
        </Link>
        <div className="flex-1 flex justify-end items-center gap-2">

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
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
              </Link>
            )
          })}
          {/* <Link
            href="/contact"
            className="text-xs font-medium px-4 py-2 rounded-sm text-foreground hover:opacity-90 transition-opacity"
          >
            Hire Me
          </Link> */}
        </div>

        <div className="flex items-center gap-2">
          <TerminalComponent>
            <Button
              className="rounded-lg flex items-center border justify-center text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-colors cursor-pointer"
              aria-label="Open terminal"
              variant={"outline"}
            >
              <Terminal className="size-4" />
              Terminal
            </Button>
          </TerminalComponent>

          <ThemeToggle />

          <Button
            className="md:hidden bg-accent size-8 rounded-sm border hover:border-foreground/50 flex items-center justify-center cursor-pointer hover:text-foreground hover:bg-accent/60 transition-colors"
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
            const isActive = pathname === item.href
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
            )
          })}
          <Link
            href="/contact"
            className="text-xs font-medium px-4 py-2.5 mx-2 mt-1 rounded-sm text-center bg-linear-to-r from-accent-blue to-accent-purple text-white hover:opacity-90 transition-opacity"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  )
}
