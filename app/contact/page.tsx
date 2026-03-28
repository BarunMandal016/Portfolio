"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { CONTACT_INFO, SOCIAL_LINKS, EMAIL } from "@/data";
import type { ReactNode } from "react";

const CONTACT_ICONS: Record<string, ReactNode> = {
  Email: <Mail className="size-5 text-accent-blue" />,
  Phone: <Phone className="size-5 text-accent-purple" />,
  Location: <MapPin className="size-5 text-accent-blue" />,
};

const SOCIAL_ICONS: Record<string, ReactNode> = {
  GitHub: <Github className="size-5" />,
  LinkedIn: <Linkedin className="size-5" />,
};

export default function ContactPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="px-6 flex flex-col space-y-6 max-w-5xl w-full py-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          Have a project idea, question, or just want to say hello? Fill out the
          form below and I&apos;ll get back to you as soon as possible.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <ContactForm />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Contact Info
            </h3>
            {CONTACT_INFO.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent">
                  {CONTACT_ICONS[item.label]}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm hover:text-accent-blue transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Socials
            </h3>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  aria-label={link.label}
                  className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-accent-blue/30 transition-colors"
                >
                  {SOCIAL_ICONS[link.label]}
                </Link>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-lg bg-accent/50 border border-border space-y-2">
            <p className="text-sm font-medium">Prefer email?</p>
            <p className="text-xs text-muted-foreground">
              You can also reach me directly at{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-accent-blue hover:underline"
              >
                {EMAIL}
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
