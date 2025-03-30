import Link from "next/link";
const navItems = [
  { name: "Home", href: "/home" },
  { name: "AboutMe", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
];

const Navbar = () => {
  return (
    <nav className="text-white py-4 px-6 flex justify-between bg-zinc-900 rounded-md">
      <span className="text-2xl font-mono">Portfolio</span>
      <div className="flex items-center gap-4">
         {navItems.map((item) => (
        <Link href={item.href} key={item.name} className={`text-sm`}>
          <span  className="font-mono text-sm">{`</${item.name}>`}</span>
        </Link>
      ))}
      </div>
     
    </nav>
  );
};

export default Navbar;
