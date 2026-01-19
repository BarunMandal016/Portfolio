"use client"
import { ChevronsLeftRight, Folder, Minus, X } from "lucide-react";
import { useState, useRef, useEffect, ReactNode } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTrigger } from "./ui/dialog";

function TerminalComponent({children}:{children:ReactNode}) {
  const [lines, setLines] = useState<string[]>([
    "Welcome to WebTerminal v1.0",
    "Type `help` to get started",
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!inputRef) return
    inputRef.current?.focus()
  })

  const runCommand = (cmd: string) => {
    let output = "";

    switch (cmd) {
      case "help":
        output = "about, projects, skills, contact, clear";
        break;
      case "about":
        output = "Barun Mandal – Fullstack Developer from Nepal";
        break;
      case "clear":
        setLines([]);
        return;
      default:
        output = `Command not found: ${cmd}`;
    }

    setLines(prev => [...prev, `$ ${cmd}`, output]);
  };

  return (
    <Dialog >
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="bg-[#15171c] rounded-t-lg h-1/2 !p-0 !max-w-1/2" showCloseButton={false}>
        <div className="text-green-400 font-mono size-full flex flex-col">
          <div className="bg-[#0d0d0e] w-full flex rounded-t-lg px-1.5">
            <div className="flex gap-1 items-center group">
              {/* <div className="flex gap-2 group"> */}
              <DialogClose>
              <div className="bg-red-500 rounded-full size-3">
                <X className="size-full text-black/50 opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition" />
              </div>
              </DialogClose>

              <div className="bg-yellow-500 rounded-full size-3">
                <Minus className="size-full text-black/50 opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition" />
              </div>

              <div className="bg-green-500 rounded-full size-3 -rotate-45">
                <ChevronsLeftRight className="size-full text-black/50 opacity-0 group-hover:opacity-100 group-hover:cursor-pointer transition" />
              </div>

            </div>
            <div className="flex items-center flex-1 justify-center">
              <Folder className="h-4" />
              <span>
                -- root
              </span>
            </div>
          </div>
          <div className="p-1.5 bg-[#15171c]">

            {lines.map((l, i) => (
              <div key={i}>{l}</div>
            ))}
            <div className="flex">
              <span>$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => {
                  if (e.key === "Enter") {
                    runCommand(input.trim());
                    setInput("");
                  }
                }}
                className="bg-transparent outline-none ml-2 flex-1"
                autoFocus
              />
            </div>
          </div>
        </div>
              <DialogDescription className="sr-only">
        Terminal
      </DialogDescription>
      </DialogContent>
    </Dialog>

  );
}

export default TerminalComponent