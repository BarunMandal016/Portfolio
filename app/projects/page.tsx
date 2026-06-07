"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Bot, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/data";
import { fadeUp } from "@/lib/motion";
import type { Project } from "@/types";
import type { ReactNode } from "react";

const PROJECT_ICONS: Record<string, ReactNode> = {
  HireMatch: <BrainCircuit className="size-5 text-accent-blue" />,
  "Slack Chatbot": <Bot className="size-5 text-accent-purple" />,
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="max-h-52 cursor-pointer"
    >
      <Card className="bg-card border border-border py-0 h-full transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue/30 hover:shadow-[0_12px_40px_rgba(102,126,234,0.15)]">
        <CardContent className="p-5 flex flex-col justify-between h-full">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex items-center gap-2">
                {PROJECT_ICONS[project.title]}
                <div>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {project.subtitle}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    aria-label={`${project.title} on GitHub`}
                    className="p-2 rounded-lg hover:bg-accent transition-colors"
                  >
                    <Github className="size-5 text-muted-foreground hover:text-foreground transition-colors" />
                  </Link>
                )}
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    aria-label={`${project.title} live demo`}
                    className="p-2 rounded-lg hover:bg-accent transition-colors"
                  >
                    <ExternalLink className="size-5 text-muted-foreground hover:text-foreground transition-colors" />
                  </Link>
                )}
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              {project.description}
            </p>
          </div>

          <div className="flex gap-2 pt-1">
            {project.tech.map((t) => (
              <Badge key={t} variant="secondary" className="text-xs">
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <section className="px-6 flex flex-col space-y-6 max-w-5xl w-full py-10">
      <motion.h1
        className="section-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
