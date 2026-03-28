"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Bot, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/data";
import type { Project } from "@/types";
import type { ReactNode } from "react";

const PROJECT_ICONS: Record<string, ReactNode> = {
  HireMatch: <BrainCircuit className="size-5 text-accent-blue" />,
  "Slack Chatbot": <Bot className="size-5 text-accent-purple" />,
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Card className="card-hover bg-card border-border">
        <CardContent className="p-5 space-y-3">
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

          {project.highlights.length > 0 && (
            <ul className="space-y-1.5">
              {project.highlights.map((h, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground flex gap-2"
                >
                  <span className="text-accent-blue mt-1 shrink-0">&#8226;</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2 pt-1">
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
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="px-6 flex flex-col space-y-6 max-w-5xl w-full py-10">
      <motion.h2
        className="section-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="space-y-4">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
