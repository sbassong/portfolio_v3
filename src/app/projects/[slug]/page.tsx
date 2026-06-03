import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Carousel from "@/components/Carousel";

const typeColors: Record<string, string> = {
  professional: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  hobby: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  "open-source": "bg-green-500/10 text-green-600 dark:text-green-400",
  freelance: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Sam Bassong`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const paragraphs = project.description.trim().split("\n\n");

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Back */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-[var(--fg-muted)] hover:text-accent transition-colors mb-12 group"
      >
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          className="group-hover:-translate-x-0.5 transition-transform"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 5 5 12 12 19" />
        </svg>
        Back to projects
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${typeColors[project.type]}`}>
            {project.type.replace("-", " ")}
          </span>
          <span className="text-xs font-mono text-[var(--fg-muted)]">{project.year}</span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-black tracking-tighter mb-5">
          {project.title}
        </h1>

        <p className="text-xl text-[var(--fg-muted)] leading-relaxed max-w-2xl">
          {project.summary}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-[var(--border)] mb-10" />

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-lg font-bold mb-5">Overview</h2>
          <div className="flex flex-col gap-4 text-[var(--fg-muted)] leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {/* Links */}
          {project.links.length > 0 && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--fg-muted)] mb-3">Links</h3>
              <div className="flex flex-col gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                  >
                    {link.label}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Tech stack */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--fg-muted)] mb-3">Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--border)] text-[var(--fg-muted)]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      {project.images && project.images.length > 0 && (
        <>
          <div className="h-px bg-[var(--border)] my-12" />
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--fg-muted)] mb-6">Gallery</h2>
            <Carousel images={project.images} title={project.title} />
          </div>
        </>
      )}
    </div>
  );
}
