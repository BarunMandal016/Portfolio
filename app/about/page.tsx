"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CodeIcon, ServerIcon, CloudIcon, DatabaseIcon } from "lucide-react"

export default function page() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-10 px-6 space-y-4">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4 text-white"
          >
            <h3 className="text-2xl font-bold">
              Full-Stack Developer with a passion for building scalable applications
            </h3>
            <p className="text-muted-foreground text-white">
              I'm a Full-Stack Developer with expertise in React, FastAPI, Node.js, and AWS. I'm passionate about
              building scalable applications and optimizing cloud infrastructure. My skills extend to backend
              engineering, AI/ML integration, and automation.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "Frontend",
                  description: "React, Next.js, Tailwind",
                  icon: <CodeIcon className="h-5 w-5 text-primary text-white" />,
                },
                {
                  title: "Backend",
                  description: "Node.js, Express, FastAPI",
                  icon: <ServerIcon className="h-5 w-5 text-primary text-white" />,
                },
                {
                  title: "Cloud",
                  description: "AWS, Azure, Docker",
                  icon: <CloudIcon className="h-5 w-5 text-primary text-white" />,
                },
                {
                  title: "Database",
                  description: "MySQL, MongoDB, PostgreSQL",
                  icon: <DatabaseIcon className="h-5 w-5 text-primary text-white" />,
                },
              ].map((item, index) => (
                <Card key={index} className="card-hover py-2 bg-[#1d1e21]">
                  <CardContent className="p-4 flex items-start space-x-3">
                    <div className="mt-1 ">{item.icon}</div>
                    
                      <h4 className="font-medium text-white">{item.title}</h4>
                      <p className="text-sm text-muted-foreground text-[#929fb3]">{item.description}</p>
                    
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
    </section>
  )
}

