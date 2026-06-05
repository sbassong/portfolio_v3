import AnimatedSection from "@/components/AnimatedSection";
import { experience, education } from "@/data/resume";
import { RESUME_PDF_PATH, RESUME_PDF_FILENAME } from "@/config/constants";

export const metadata = {
  title: "Resume — Sam Bassong",
  description: "Sam Bassong's professional experience, education, and skills.",
};

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <div>
          <p className="text-sm font-mono text-accent uppercase tracking-widest mb-3">Resume</p>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tighter">Experience</h1>
        </div>
        <a
          href={RESUME_PDF_PATH}
          download={RESUME_PDF_FILENAME}
          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border)] rounded-lg text-sm font-medium hover:border-accent hover:text-accent transition-colors"
        >
          <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download PDF
        </a>
      </AnimatedSection>

      {/* Work experience */}
      <AnimatedSection className="mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--fg-muted)] mb-8">Work experience</h2>
      </AnimatedSection>

      <div className="flex flex-col">
        {experience.map((job, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-8 border-t border-[var(--border)] first:border-t-0">
              <div className="sm:col-span-1">
                <p className="text-xs font-mono text-[var(--fg-muted)]">{job.period}</p>
              </div>
              <div className="sm:col-span-3 flex flex-col gap-3">
                <div>
                  <h3 className="text-lg font-bold">{job.role}</h3>
                  <p className="text-accent font-medium text-sm">{job.company}</p>
                </div>
                <p className="text-[var(--fg-muted)] text-sm leading-relaxed">{job.description}</p>
                {job.achievement && (
                  <p className="text-[var(--fg-muted)] text-sm leading-relaxed mt-1">{job.achievement}</p>
                )}
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--border)] text-[var(--fg-muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Education */}
      <AnimatedSection className="mt-16 mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--fg-muted)] mb-8">Education</h2>
      </AnimatedSection>

      <div className="flex flex-col">
        {education.map((edu, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-8 border-t border-[var(--border)]">
              <div className="sm:col-span-1">
                <p className="text-xs font-mono text-[var(--fg-muted)]">{edu.period}</p>
              </div>
              <div className="sm:col-span-3">
                <h3 className="text-lg font-bold">{edu.degree}</h3>
                <p className="text-accent font-medium text-sm">{edu.school}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
