import { Libre_Baskerville } from "next/font/google";
import profile from "../public/profile.jpg";
// import { motion } from "framer-motion";
import { MailIcon } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import {Button} from "@/components/ui/button";
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
function page() {
  return (
    <section className="grid grid-cols-2 py-10">
      <div className={`items-center space-y-4 py-6 pl-6`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Hi, I am <span className="gradient-text">Barun Mandal</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 text-white">
          Full-Stack Developer
        </h2>
        <p
          className={`text-lg text-white font-serif ${libreBaskerville.className}`}
        >
          Passionate about building scalable applications and optimizing cloud
          infrastructure. Skilled in backend engineering, AI/ML integration and
          automation.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button className="ring hover:ring-blue-500 transition-all duration-300 bg-[#1d1e21] text-white">
            <Link href="#contact">Get In Touch</Link>
          </Button>
          <Button className="ring hover:ring-blue-500 transition-all duration-300 bg-[#1d1e21] text-white">
            <Link href="#projects">View Projects</Link>
          </Button>
        </div>

        <div className="flex space-x-4 mt-8">
          <Button className="ring hover:ring-blue-500 transition-all duration-300 bg-[#1d1e21] text-white">
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <FaGithub className="size-5" />
            </Link>
          </Button>
          <Button className="ring hover:ring-blue-500 transition-all duration-300 bg-[#1d1e21] text-white">
            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="size-5" />
            </Link>
          </Button>
          <Button className="ring hover:ring-blue-500 transition-all duration-300 bg-[#1d1e21] text-white">
            <Link href="mailto:barun.mandalbct@gmail.com" aria-label="Email">
              <MailIcon className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <Image
          src={profile}
          alt="Barun Mandal"
          className="object-cover w-1/2 h-[550px] rounded-lg shadow-lg shadow-neutral-400/50"
        />
      </div>
    </section>
  );
}
export default page;
