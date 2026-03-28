"use client";
import { useEffect, useRef, useState } from "react";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { EXPERIENCES } from "@/data";
import type { Experience } from "@/types";
import type { ReactNode } from "react";

function AnimateOnScroll({ children, className, delay = 0 }: { children: ReactNode; className: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={visible ? className : "opacity-0"}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

function EntryPanel({ exp, index }: { exp: Experience; index: number }) {
  const isEdu = exp.type === "education";
  const delay = index * 0.2;

  return (
    <AnimateOnScroll className="animate-fade-up" delay={delay}>
      <div className={`exp-panel ${isEdu ? "exp-panel-edu" : ""}`}>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {isEdu ? (
                <GraduationCap className="size-4 text-accent-purple" />
              ) : (
                <Briefcase className="size-4 text-accent-blue" />
              )}
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                {exp.title}
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span
                className={isEdu ? "font-semibold" : "gradient-text font-semibold"}
                style={isEdu ? { color: "#764ba2" } : undefined}
              >
                {exp.company}
              </span>
              <span className="text-muted-foreground flex items-center gap-1">
                <MapPin className="size-3" />
                {exp.location}
              </span>
            </div>
          </div>
          <span
            className={`exp-date-chip shrink-0 ${isEdu ? "exp-date-chip-edu" : ""}`}
          >
            <Calendar className="size-3" />
            {exp.period}
          </span>
        </div>

        <div className="space-y-2 mb-4">
          {exp.highlights.map((h, i) => (
            <p key={i} className="exp-highlight">
              {h}
            </p>
          ))}
        </div>

        {exp.tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {exp.tech.map((t) => (
              <span key={t} className="exp-tech-tag">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </AnimateOnScroll>
  );
}

export default function ExperiencePage() {
  const work = EXPERIENCES.filter((e) => e.type === "work");
  const edu = EXPERIENCES.filter((e) => e.type === "education");

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-5xl w-full py-10 sm:py-14">
      <h2
        className="section-title animate-fade-up"
        style={{ animationDelay: "0s" }}
      >
        Experience & Education
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-10">
        <div className="lg:col-span-3 space-y-8">
          <div
            className="flex items-center gap-2 mb-2 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="w-6 h-[2px] rounded-full bg-accent-blue" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Work
            </span>
          </div>
          {work.map((exp, i) => (
            <EntryPanel key={exp.title} exp={exp} index={i} />
          ))}
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div
            className="flex items-center gap-2 mb-2 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="w-6 h-[2px] rounded-full bg-accent-purple" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Education
            </span>
          </div>
          {edu.map((exp, i) => (
            <EntryPanel key={exp.title} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
