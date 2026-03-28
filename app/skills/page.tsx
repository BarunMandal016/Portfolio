"use client";
import { useEffect, useRef, useState } from "react";
import { SKILL_DATA } from "@/data";
import type { SkillBar, SkillCategory } from "@/types";

function SkillBarRow({
  bar,
  delay,
  visible,
}: {
  bar: SkillBar;
  delay: number;
  visible: boolean;
}) {
  return (
    <div className="skill-bar-track">
      <div
        className="skill-bar-fill"
        style={{
          width: visible ? `${bar.level}%` : "0%",
          animationDelay: `${delay}s`,
          animationPlayState: visible ? "running" : "paused",
        }}
      />
      <span className="skill-bar-label">{bar.name}</span>
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-muted-foreground z-[2]">
        {bar.level}%
      </span>
    </div>
  );
}

function SkillCategoryBlock({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseDelay = index * 0.15;
  const isPurple = category.accent === "purple";

  return (
    <div
      ref={ref}
      className="animate-fade-up"
      style={{ animationDelay: `${baseDelay}s` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-8 h-[2px] rounded-full"
          style={{ background: isPurple ? "#764ba2" : "#667eea" }}
        />
        <h3 className="text-lg font-semibold tracking-tight">
          {category.title}
        </h3>
      </div>

      {category.bars.length > 0 && (
        <div className="space-y-3 mb-4">
          {category.bars.map((bar, i) => (
            <SkillBarRow
              key={bar.name}
              bar={bar}
              delay={baseDelay + 0.2 + i * 0.15}
              visible={visible}
            />
          ))}
        </div>
      )}

      {category.pills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {category.pills.map((pill, i) => (
            <span
              key={pill}
              className={`skill-pill ${isPurple ? "skill-pill-purple" : ""}`}
              style={{ animationDelay: `${baseDelay + 0.3 + i * 0.08}s` }}
            >
              {pill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SkillsPage() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-5xl w-full py-10 sm:py-14">
      <h2
        className="section-title animate-fade-up"
        style={{ animationDelay: "0s" }}
      >
        Skills & Expertise
      </h2>

      <p
        className="text-muted-foreground mt-4 mb-10 max-w-2xl animate-fade-up"
        style={{ animationDelay: "0.1s" }}
      >
        Proficiency levels based on production usage and depth of experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
        {SKILL_DATA.map((cat, i) => (
          <SkillCategoryBlock key={cat.title} category={cat} index={i} />
        ))}
      </div>
    </section>
  );
}
