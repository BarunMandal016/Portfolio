"use client";
import { ChevronsLeftRight, Folder, Minus, X } from "lucide-react";
import { useState, useRef, useEffect, ReactNode, useCallback } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { TERMINAL_RESPONSES } from "@/data";

export default function TerminalComponent({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<string[]>([
    "barun.dev v2 — type help",
    "",
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const runCommand = useCallback((cmd: string) => {
    if (cmd === "clear") {
      setLines([]);
      return;
    }
    if (!cmd) return;

    const output = TERMINAL_RESPONSES[cmd];
    if (output) {
      setLines((prev) => [...prev, `$ ${cmd}`, ...output.split("\n"), ""]);
    } else {
      setLines((prev) => [...prev, `$ ${cmd}`, `unknown: ${cmd} — try help`, ""]);
    }
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        runCommand(input.trim().toLowerCase());
        setInput("");
      }
    },
    [input, runCommand]
  );

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="bg-[#0d1117] rounded-xl h-[60vh] !p-0 !max-w-2xl border-accent-blue/20"
        showCloseButton={false}
        onOpenAutoFocus={(e) => {
          e.preventDefault();
          inputRef.current?.focus();
        }}
      >
        <div className="text-green-400 font-mono text-sm size-full flex flex-col rounded-xl overflow-hidden">
          <div className="bg-[#161b22] w-full flex rounded-t-xl px-3 py-2.5 shrink-0">
            <div className="flex gap-2 items-center group">
              <DialogClose aria-label="Close terminal">
                <div className="bg-red-500 rounded-full size-3 hover:brightness-110 transition">
                  <X className="size-full text-black/50 opacity-0 group-hover:opacity-100 transition" />
                </div>
              </DialogClose>
              <div
                className="bg-yellow-500 rounded-full size-3"
                role="presentation"
                aria-label="Minimize"
              >
                <Minus className="size-full text-black/50 opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div
                className="bg-green-500 rounded-full size-3 -rotate-45"
                role="presentation"
                aria-label="Maximize"
              >
                <ChevronsLeftRight className="size-full text-black/50 opacity-0 group-hover:opacity-100 transition" />
              </div>
            </div>
            <div className="flex items-center flex-1 justify-center text-xs text-gray-400 gap-1">
              <Folder className="h-3.5" />
              <span>barun@portfolio:~</span>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 p-3 overflow-y-auto cursor-text"
            onClick={focusInput}
            onKeyDown={(e) => { if (e.key === "Enter") focusInput(); }}
            role="textbox"
            tabIndex={-1}
            aria-label="Terminal output"
          >
            {lines.map((l, i) => (
              <div
                key={i}
                className={
                  l.startsWith("$") ? "text-accent-blue" : "text-gray-300"
                }
              >
                {l || "\u00A0"}
              </div>
            ))}
            <div className="flex items-center">
              <span className="text-accent-blue">$&nbsp;</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent outline-none flex-1 text-gray-200 caret-accent-blue"
                aria-label="Terminal input"
                spellCheck={false}
              />
            </div>
          </div>
        </div>
        <DialogTitle className="sr-only">Terminal</DialogTitle>
        <DialogDescription className="sr-only">
          Interactive terminal — type help for available commands
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}