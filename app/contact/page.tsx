"use client";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { fadeUp } from "@/lib/motion";

export default function ContactPage() {
  return (
    <section className="px-6 flex flex-col space-y-6 max-w-5xl w-full py-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title">Get In Touch</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          Have a project idea, question, or just want to say hello? Fill out the
          form below and I&apos;ll get back to you as soon as possible.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="max-w-3xl"
      >
        <ContactForm />
      </motion.div>
    </section>
  );
}
