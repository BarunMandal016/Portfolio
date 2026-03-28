"use client";
import { Libre_Baskerville } from "next/font/google";
import profile from "../../public/profile.jpg";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  FileText,
  Briefcase,
  ArrowRight,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { HOME_EXPERIENCES, CORE_SKILLS, ROLES } from "@/data";
import GitHubGraph from "@/components/GitHubGraph";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

function useTypingEffect(
  texts: string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2000
) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentText = texts[currentIndex];
    if (!isDeleting) {
      setDisplayText(currentText.substring(0, displayText.length + 1));
      if (displayText.length === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
    } else {
      setDisplayText(currentText.substring(0, displayText.length - 1));
      if (displayText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        return;
      }
    }
  }, [currentIndex, displayText, isDeleting, texts, pauseTime]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, deletingSpeed, typingSpeed]);

  return displayText;
}

function Home() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [nameReady, setNameReady] = useState(false);
  const typedRole = useTypingEffect(ROLES);

  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const originalText = el.innerText;
    let frame = 0;
    const totalFrames = 25;

    setNameReady(true);

    const id = setInterval(() => {
      el.innerText = originalText
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < (frame / totalFrames) * originalText.length)
            return originalText[i];
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");
      frame++;
      if (frame > totalFrames) {
        el.innerText = originalText;
        clearInterval(id);
      }
    }, 40);

    return () => clearInterval(id);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-5xl w-full">
      <section className="grid grid-cols-1 sm:grid-cols-2 py-14 sm:py-20 gap-8 grid-bg">
        <div className="flex flex-col justify-center space-y-5">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <span className="inline-block size-2 rounded-full bg-emerald-400 animate-pulse-dot" />
              Open to opportunities
            </div>
            <h1
              ref={nameRef}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold transition-opacity duration-100 ${
                nameReady ? "opacity-100" : "opacity-0"
              } ${libreBaskerville.className}`}
            >
              Barun Mandal
            </h1>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground h-8">
              <span className="gradient-text-animated">{typedRole}</span>
              <span className="typing-cursor" />
            </h2>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[15px] text-muted-foreground max-w-md leading-relaxed"
          >
            2+ years shipping production Next.js apps on AWS. I cut page loads
            by 40%, built AI-powered search systems, and automated zero-downtime
            deployments at PMsquare.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap gap-3 pt-1"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <FileText className="size-4" />
              View Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-accent transition-colors"
            >
              <Mail className="size-4" />
              Contact
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center sm:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-xl opacity-20 blur-xl" />
            <Image
              src={profile}
              alt="Barun Mandal — Full-Stack Developer"
              width={320}
              height={320}
              priority
              placeholder="blur"
              className="relative object-cover max-w-72 sm:max-w-80 min-w-32 rounded-xl shadow-2xl animate-float"
            />
          </div>
        </motion.div>
      </section>

      <section className="py-12 border-t border-border/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Experience</h2>
          <Link
            href="/experience"
            className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
          >
            View all <ArrowRight className="size-3" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {HOME_EXPERIENCES.map((job) => (
            <div
              key={job.role}
              className="p-4 rounded-xl border border-border bg-card/50 hover:border-accent-blue/20 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1.5 rounded-lg bg-accent">
                  <Briefcase className="size-3.5 text-accent-blue" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold leading-tight">
                    {job.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5 text-xs text-muted-foreground">
                    <span className="gradient-text font-medium">
                      {job.company}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <Calendar className="size-3" />
                      {job.period}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {job.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <GitHubGraph />

      <section className="py-12 border-t border-border/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Core Stack</h2>
          <Link
            href="/skills"
            className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
          >
            All skills <ArrowRight className="size-3" />
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {CORE_SKILLS.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
