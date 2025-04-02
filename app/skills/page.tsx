"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const skills = {
    "Programming Languages": ["C", "C++", "JavaScript/TypeScript", "Python"],
    Databases: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
    "Frameworks & Libraries": [
      "Express",
      "React",
      "FastAPI",
      "Next.js",
      "Tailwind",
    ],
    "Cloud & DevOps": ["AWS", "Azure", "Docker", "GitHub Actions"],
    Miscellaneous: ["Git", "Terraform", "Langchain"],
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className=" px-20 flex flex-col space-y-4">
      <motion.h2
        className="text-2xl font-bold text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        Skills & Expertise
      </motion.h2>

      <div className="grid grid-cols-2 gap-3">
        {Object.entries(skills).map(([category, skillList], index) => (
          <motion.div
            key={category}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            // className="px-2"
          >
            <Card className="card-hover py-2 bg-[#1d1e21] px-4">
              <CardContent className="p-1">
                <h3 className="text-xl font-bold mb-4 gradient-tex text-white">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2 text-white">
                  {skillList.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
