"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

const typeColors: Record<string, string> = {
  professional: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  hobby: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  "open-source": "bg-green-500/10 text-green-600 dark:text-green-400",
  freelance: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div layout className="h-full">
      <Link href={`/projects/${project.slug}`} className="group block h-full">
        <article className="h-full rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden flex flex-col transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5">

          {/* Thumbnail */}
          <div className="aspect-video relative bg-[var(--border)] overflow-hidden shrink-0">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--fg-muted)] opacity-30">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col gap-4 flex-1">
            <div className="flex items-start justify-between gap-3">
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${typeColors[project.type]}`}>
                {project.type.replace("-", " ")}
              </span>
              <span className="text-xs text-[var(--fg-muted)] font-mono shrink-0">{project.year}</span>
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-xl mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--fg-muted)] leading-relaxed line-clamp-3">
                {project.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--border)] text-[var(--fg-muted)]">
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--border)] text-[var(--fg-muted)]">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              View project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
