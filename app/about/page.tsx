"use client";
import { motion } from "framer-motion";
import { Zap, Target, TrendingUp } from "lucide-react";
import { IMPACT_METRICS } from "@/data";
import type { ImpactMetric } from "@/types";
import type { ReactNode } from "react";

const METRIC_ICONS: Record<string, ReactNode> = {
  "Page load reduction": <TrendingUp className="size-5 text-accent-blue" />,
  "Downtime deployments": <Zap className="size-5 text-accent-purple" />,
  "AI-powered products": <Target className="size-5 text-accent-blue" />,
};

function MetricCard({ item }: { item: ImpactMetric }) {
  return (
    <div className="p-5 rounded-xl border border-border bg-card/50 space-y-2">
      <div className="flex items-center gap-2">
        {METRIC_ICONS[item.label]}
        <span className="text-2xl font-bold">{item.metric}</span>
      </div>
      <p className="text-sm font-medium">{item.label}</p>
      <p className="text-xs text-muted-foreground leading-relaxed">
        {item.detail}
      </p>
    </div>
  );
}

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-10 px-4 sm:px-6 space-y-10 max-w-5xl w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">About Me</h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="max-w-3xl space-y-4 text-[15px] text-muted-foreground leading-relaxed"
      >
        <p>
          I&apos;m a Computer Engineer turned Full-Stack Developer with 2+ years
          of professional experience at PMsquare. I work across the entire stack
          — from building server-rendered React applications to deploying them on
          AWS behind load balancers with automated CI/CD.
        </p>
        <p>
          What sets me apart is combining traditional engineering with AI: I&apos;ve
          built NLP-powered vector search systems that replaced slow SQL queries,
          GenAI features that auto-generate interview questions from resumes, and
          event-driven pipelines that process documents in real time.
        </p>
        <p>
          I care about measurable outcomes — faster page loads, zero-downtime
          deployments, lower latency search. Every technical decision I make ties
          back to a user or business impact.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {IMPACT_METRICS.map((item) => (
            <MetricCard key={item.label} item={item} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
