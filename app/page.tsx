"use client";
import Button from "../components/ui/button";
import { motion } from "framer-motion";
import { MailIcon } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
function page() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 section-padding"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I am <span className="gradient-text">Barun Mandal</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/80">
              Full-Stack Developer
            </h2>
            <p className="text-lg mb-8 text-muted-foreground max-w-lg">
              Passionate about building scalable applications and optimizing
              cloud infrastructure. Skilled in backend engineering, AI/ML
              integration and automation.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button>
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button>
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>

            <div className="flex space-x-4 mt-8">
              <Button>
                <Link
                  href="https://github.com"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-5 w-5" />
                </Link>
              </Button>
              <Button>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button>
                <Link
                  href="mailto:barun.mandalbct@gmail.com"
                  aria-label="Email"
                >
                  <MailIcon className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-3xl"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-border">
                <Image
                  src="https://scontent.fmey1-1.fna.fbcdn.net/v/t1.6435-9/71167269_2619054825008079_4966210516167950336_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF3aUkEGrpkfDxTerlukl_9JjGEiaWh6twmMYSJpaHq3J6DlQiRpukAmrCj_LTE5v5MLHiVBpSQzApaRJ9Mdoo5&_nc_ohc=IsZ6rGqe0HsQ7kNvgE14sHI&_nc_oc=Admm5GtgnlYkPjGPBdX2HqoLwwyNjB7jyhoX2ibQ6H1A4vV8nRFOIVVvMDmZyRcJSQo&_nc_zt=23&_nc_ht=scontent.fmey1-1.fna&_nc_gid=786ugB0lse5VfWMR-2JlJg&oh=00_AYH_RNNO5IgfYcNE9AOuwXWgJdQvy0wyQLGXVY-JYD4-hQ&oe=680FB3F8"
                  alt="Barun Mandal"
                  className="h-full object-cover rounded-3xl shadow-lg"
                  width={500}
                  height={700}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default page;
