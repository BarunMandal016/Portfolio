import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  // SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaTerminal } from "react-icons/fa6";
import TerminalComponent from "./TerminalComponent";

const navItems = [
  { name: "# home", href: "/" },
  { name: "# about", href: "/about" },
  { name: "# skills", href: "/skills" },
];

const Navbar = () => {
  return (
    <header className="pt-8 flex justify-center">
    <nav className="text-white py-4 sm:px-6 px-3 gap-6 flex justify-between bg-[#1d1e21] rounded-md max-w-5xl w-full">
      <Sheet >
        <SheetTrigger asChild>
          <button className="sm:hidden items-center text-xl">
            <RxHamburgerMenu />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-zinc-900 text-white border-none rounded-r-sm transition-normal transition-transform duration-200 ease-in-out">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 mt-4 pl-4">
            {navItems.map((item) => (
              <Link href={item.href} key={item.name} className="text-sm">
                <span className="font-mono text-sm">{item.name}</span>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      {/* <span className="font-mono text-xl sm:text-2xl">Barun</span> */}
      <TerminalComponent>
      <FaTerminal className="cursor-pointer" />
      </TerminalComponent>
      <div className="items-center gap-4 hidden sm:flex">
        {navItems.map((item) => (
          <Link href={item.href} key={item.name} className={`text-sm`}>
            <span className="font-mono text-sm">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
