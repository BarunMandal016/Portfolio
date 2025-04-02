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

const navItems = [
  { name: "Home", href: "/" },
  { name: "AboutMe", href: "/about" },
  { name: "Skills", href: "/skills" },
];

const Navbar = () => {
  return (
    <nav className="text-white py-3 sm:py-4 sm:px-6 px-3 gap-6 flex sm:justify-between bg-[#1d1e21] rounded-md items-center">
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
                <span className="font-mono text-sm">{`</${item.name}>`}</span>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <span className="font-mono text-xl sm:text-2xl">Barun</span>
      <div className="items-center gap-4 hidden sm:flex">
        {navItems.map((item) => (
          <Link href={item.href} key={item.name} className={`text-sm`}>
            <span className="font-mono text-sm">{`</${item.name}>`}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
