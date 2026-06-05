"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";
import { projects, projectTypes, type ProjectType } from "@/data/projects";

function ProjectsGrid() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeType = (searchParams.get("type") as ProjectType | "all") ?? "all";

  const filtered = activeType === "all"
    ? projects
    : projects.filter((p) => p.type.includes(activeType));

  function setFilter(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete("type");
    } else {
      params.set("type", value);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <>
      {/* Filter bar */}
      <AnimatedSection delay={0.15} className="flex flex-wrap gap-2 mb-12">
        {projectTypes.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            aria-pressed={activeType === value}
            className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              activeType === value
                ? "bg-accent text-white"
                : "border border-[var(--border)] text-[var(--fg-muted)] hover:border-accent hover:text-accent"
            }`}
          >
            {label}
          </button>
        ))}
      </AnimatedSection>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-[var(--fg-muted)]">
          No projects found for this filter.
        </div>
      )}
    </>
  );
}

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <AnimatedSection className="mb-4">
        <p className="text-sm font-mono text-accent uppercase tracking-widest mb-3">Work</p>
        <h1 className="text-5xl sm:text-6xl font-black tracking-tighter">Projects</h1>
      </AnimatedSection>
      <AnimatedSection delay={0.1} className="mb-12">
        <p className="text-[var(--fg-muted)] text-lg max-w-xl">
          A collection of things I&apos;ve built — professionally, for fun, and everything in between.
        </p>
      </AnimatedSection>

      <Suspense>
        <ProjectsGrid />
      </Suspense>
    </div>
  );
}
