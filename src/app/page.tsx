"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/projects";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const featured = projects.filter((p) => p.featured);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center grid-bg overflow-hidden">
        {/* Radial gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--bg)] to-transparent pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            <motion.p
              variants={item}
              className="text-sm font-mono text-accent tracking-widest uppercase"
            >
              Available for work
            </motion.p>

            <motion.h1
              variants={item}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter"
            >
              Sam
              <br />
              <span className="relative inline-block">
                Bassong
                <motion.span
                  className="absolute -bottom-2 left-0 h-1.5 bg-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg sm:text-xl text-[var(--fg-muted)] max-w-xl leading-relaxed"
            >
              Software developer building thoughtful, accessible digital
              products. I care about maintainable systems, intuitive UX, and the
              details that make the difference.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors text-sm"
              >
                View my work
                <svg
                  aria-hidden="true"
                  focusable="false"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] font-semibold rounded-lg hover:border-accent hover:text-accent transition-colors text-sm"
              >
                Get in touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <AnimatedSection className="flex items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-sm font-mono text-accent mb-2 uppercase tracking-widest">
              Selected work
            </p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter">
              Featured projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="shrink-0 text-sm font-medium text-[var(--fg-muted)] hover:text-accent transition-colors flex items-center gap-1"
          >
            View all
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection>
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-12 text-center flex flex-col items-center gap-6">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter">
              Thoughtful collaboration builds better products
            </h2>
            <p className="text-[var(--fg-muted)] max-w-md">
              Have a project or opportunity in mind? I&apos;d love to hear about
              it.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
            >
              Let&apos;s talk
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
