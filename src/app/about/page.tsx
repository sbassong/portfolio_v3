import AnimatedSection from "@/components/AnimatedSection";

const skills = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"],
  "Backend": ["Node.js", "Python", "FastAPI", "PostgreSQL", "Redis", "GraphQL"],
  "Infrastructure": ["AWS", "Docker", "GitHub Actions", "Vercel", "Supabase"],
  "Tools": ["Git", "Figma", "VS Code", "Linear", "Notion"],
};

export const metadata = {
  title: "About — Sam Bassong",
  description: "Software engineer based in [city]. Building thoughtful digital products.",
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <AnimatedSection className="mb-16">
        <p className="text-sm font-mono text-accent uppercase tracking-widest mb-3">About me</p>
        <h1 className="text-5xl sm:text-6xl font-black tracking-tighter">
          Building software<br />
          <span className="text-accent">with purpose.</span>
        </h1>
      </AnimatedSection>

      {/* Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <AnimatedSection className="flex flex-col gap-5 text-[var(--fg-muted)] leading-relaxed">
          <p>
            Hi, I&apos;m Sam — a software engineer passionate about building products that are both
            functional and beautiful. I believe the best software is thoughtfully designed from
            the API layer all the way to the pixel.
          </p>
          <p>
            I&apos;ve worked across the full stack — from designing database schemas and building
            REST and GraphQL APIs to crafting polished frontends with React and Next.js. I care
            deeply about performance, accessibility, and developer experience.
          </p>
          <p>
            When I&apos;m not writing code, I&apos;m experimenting with new technologies, contributing
            to open-source projects, or thinking about what makes great software products tick.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {/* Placeholder for photo */}
          <div className="aspect-[4/5] max-w-sm rounded-2xl bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-[var(--fg-muted)]">
            <div className="flex flex-col items-center gap-3">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-30">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span className="text-sm opacity-50">Photo coming soon</span>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Divider */}
      <div className="h-px bg-[var(--border)] mb-16" />

      {/* Skills */}
      <AnimatedSection className="mb-4">
        <p className="text-sm font-mono text-accent uppercase tracking-widest mb-3">Expertise</p>
        <h2 className="text-4xl font-black tracking-tighter mb-12">Skills & tools</h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(skills).map(([category, items], i) => (
          <AnimatedSection key={category} delay={i * 0.08}>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--fg-muted)] mb-4">{category}</h3>
            <div className="flex flex-col gap-2">
              {items.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="text-sm font-mono">{skill}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
