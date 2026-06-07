"use client"
import { Libre_Baskerville } from "next/font/google"
import profile from "../../public/profile.jpg"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Briefcase,
  ArrowRight,
  Calendar,
  GraduationCap,
  Target,
} from "lucide-react"
import Link from "next/link"
import {
  HOME_EXPERIENCES,
  HOME_EDUCATION,
  HOME_PROJECTS,
  CORE_SKILLS,
} from "@/data"
import type { HomeExperience, HomeProject } from "@/types"
import { fadeUp } from "@/lib/motion"
import { Badge } from "@/components/ui/badge"
import GitHubGraph from "@/components/GitHubGraph"
import AssignTaskForm from "@/components/AssignTaskForm"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
})

const DOC_LINE_WIDTHS = ["w-3/4", "w-full", "w-5/6", "w-2/3"]

const TAG_CLASSES =
  "inline-flex items-center px-3 py-1 rounded-md border text-[0.7rem] font-semibold font-mono tracking-wide"
const BTN_CLASSES =
  "inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border text-sm font-semibold transition-all duration-300 cursor-pointer"
const METRIC_CHIP_CLASSES =
  "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-medium bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
const DETAIL_ITEM_CLASSES =
  "relative pl-4 text-sm text-muted-foreground leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:size-[5px] before:rounded-full before:bg-accent-blue/50"

const ACCENT_STYLES: Record<
  HomeProject["accent"],
  { visual: string; tag: string; btn: string; node: string }
> = {
  blue: {
    visual: "bg-linear-to-br from-accent-blue/25 to-accent-blue/10",
    tag: "bg-accent-blue/15 text-accent-blue border-accent-blue/30",
    btn: "text-accent-blue bg-accent-blue/10 border-accent-blue/25 hover:bg-accent-blue/20 hover:border-accent-blue/50",
    node: "bg-accent-blue",
  },
  purple: {
    visual: "bg-linear-to-br from-accent-purple/30 to-accent-purple/10",
    tag: "bg-accent-purple/15 text-accent-purple dark:text-[#a78bca] border-accent-purple/40",
    btn: "text-accent-purple dark:text-[#a78bca] bg-accent-purple/10 border-accent-purple/30 hover:bg-accent-purple/20 hover:border-accent-purple/55",
    node: "bg-accent-purple",
  },
  amber: {
    visual: "bg-linear-to-br from-amber-500/25 to-red-500/10",
    tag: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/35",
    btn: "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/25 hover:bg-amber-500/20 hover:border-amber-500/50",
    node: "bg-linear-to-br from-amber-500 to-red-500",
  },
}

function ShippedCard({
  project,
  index,
}: {
  project: HomeProject
  index: number
}) {
  const [flipped, setFlipped] = useState(false)
  const accent = ACCENT_STYLES[project.accent]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="flip-card h-full">
        <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
          {/* Front */}
          <div className="flip-face h-full flex flex-col">
            <div
              className={`${accent.visual} relative h-44 p-5 flex items-center justify-center gap-4`}
            >
              <span
                className={`${TAG_CLASSES} ${accent.tag} absolute top-3 right-3`}
              >
                {project.tag}
              </span>
              <div className="w-20 h-24 rounded-md border border-foreground/20 bg-foreground/5 p-2.5 space-y-2">
                {DOC_LINE_WIDTHS.map((width) => (
                  <div
                    key={width}
                    className={`h-1.5 rounded-full bg-foreground/25 ${width}`}
                  />
                ))}
              </div>
              <div className="w-8 border-t-2 border-dashed border-foreground/30" />
              <div
                className={`rounded-lg px-4 py-3 text-center shadow-lg ${accent.node}`}
              >
                <div className="text-xs font-bold text-white">
                  {project.visual.node}
                </div>
                <div className="text-[10px] text-white/70">
                  {project.visual.sub}
                </div>
              </div>
            </div>

            <div className="p-5 flex flex-col gap-4 grow">
              <div>
                <h3
                  className={`text-2xl font-bold ${libreBaskerville.className}`}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.metrics.map((metric) => (
                  <span key={metric} className={METRIC_CHIP_CLASSES}>
                    {metric}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="text-xs font-mono"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 mt-auto border-t">
                <button
                  type="button"
                  onClick={() => setFlipped(true)}
                  className={`${BTN_CLASSES} ${accent.btn}`}
                >
                  View details <ArrowRight className="size-3.5" />
                </button>
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    aria-label={`${project.title} on GitHub`}
                    className="px-4 py-2 rounded-lg border text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Back */}
          <div className="flip-face flip-face-back p-5 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-2">
              <h3
                className={`text-xl font-bold ${libreBaskerville.className}`}
              >
                {project.title}
              </h3>
              <span className={`${TAG_CLASSES} ${accent.tag} shrink-0`}>
                {project.tag}
              </span>
            </div>
            <ul className="space-y-2.5 overflow-y-auto grow">
              {project.details.map((detail) => (
                <li key={detail} className={DETAIL_ITEM_CLASSES}>
                  {detail}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setFlipped(false)}
              className={`${BTN_CLASSES} ${accent.btn} self-start`}
            >
              <ArrowRight className="size-3.5 rotate-180" /> Back
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ExperienceCard({
  item,
  education = false,
}: {
  item: HomeExperience
  education?: boolean
}) {
  const Icon = education ? GraduationCap : Briefcase

  return (
    <div className="p-4 rounded-xl border bg-sky-200/5 hover:border-accent-blue/40 transition-colors">
      <div className="flex items-start gap-3">
        <div className="mt-1 p-1.5 rounded-lg bg-accent">
          <Icon
            className={`size-3.5 ${education ? "text-accent-purple dark:text-[#a78bca]" : "text-accent-blue"}`}
          />
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold leading-tight">{item.role}</h3>
          <div className="flex items-center gap-2 mt-0.5 text-xs text-muted-foreground">
            <span className="bg-linear-to-br from-accent-blue to-accent-purple bg-clip-text text-transparent font-medium">
              {item.company}
            </span>
            <span className="flex items-center gap-0.5">
              <Calendar className="size-3" />
              {item.period}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionHeader({
  title,
  href,
  linkText,
}: {
  title: string
  href?: string
  linkText?: string
}) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      {href && (
        <Link
          href={href}
          className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
        >
          {linkText} <ArrowRight className="size-3" />
        </Link>
      )}
    </div>
  )
}

export default function Home() {
  const [showTaskForm, setShowTaskForm] = useState(false)

  return (
    <div className="max-w-5xl w-full">
      <section className="grid grid-cols-1 sm:grid-cols-2 py-14 sm:py-20 gap-8">
        <div className="flex flex-col justify-between">
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold ${libreBaskerville.className}`}
              >
                Barun Mandal
              </h1>
            </motion.div>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[15px] text-muted-foreground max-w-md leading-relaxed"
            >
              2+ years of working experience in building projects and
              practicing industry standards.
            </motion.p>
          </div>
          <section className="h-max">
            <SectionHeader title="Experience" />
            <div className="grid grid-cols-1 gap-4">
              {HOME_EXPERIENCES.map((job) => (
                <ExperienceCard key={job.role} item={job} />
              ))}
            </div>

            <div className="mt-8">
              <SectionHeader title="Education" />
              <div className="grid grid-cols-1 gap-4">
                {HOME_EDUCATION.map((edu) => (
                  <ExperienceCard key={edu.role} item={edu} education />
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="flex items-center sm:justify-end">
          <div className="relative">
            <div className="absolute -inset-1 bg-linear-to-r from-accent-blue to-accent-purple rounded-xl opacity-20 blur-xl" />
            <Image
              src={profile}
              alt="Barun Mandal — Full-Stack Developer"
              width={320}
              height={320}
              priority
              placeholder="blur"
              className="relative object-cover max-w-72 sm:max-w-80 min-w-32 rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <GitHubGraph />

      <section className="py-12 border-t border-foreground/25">
        <SectionHeader title="Inclined On" href="/skills" linkText="All skills" />
        <div className="flex flex-wrap gap-2">
          {CORE_SKILLS.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </section>
      <section className="py-12">
        <SectionHeader
          title="Things I've Shipped"
          href="/projects"
          linkText="View all"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {HOME_PROJECTS.map((project, index) => (
            <ShippedCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="py-16 border-t border-foreground/25">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2
            className={`text-3xl md:text-4xl font-bold ${libreBaskerville.className}`}
          >
            Got an idea? Let&apos;s ship it.
          </h2>
          <p className="text-[15px] text-muted-foreground mt-3 max-w-xl mx-auto leading-relaxed">
            Hire me for your next project — or just toss me a small task first
            and see how I work. No pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-linear-to-r from-accent-blue to-accent-purple text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Hire Me <ArrowRight className="size-4" />
            </Link>
            <button
              type="button"
              onClick={() => setShowTaskForm((prev) => !prev)}
              className={`${BTN_CLASSES} ${ACCENT_STYLES.blue.btn} px-5 py-2.5`}
            >
              <Target className="size-4" />
              {showTaskForm ? "Hide the task form" : "Test Me First"}
            </button>
          </div>
        </motion.div>

        {showTaskForm && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8 max-w-3xl mx-auto text-left"
          >
            <AssignTaskForm />
          </motion.div>
        )}
      </section>
    </div>
  )
}
