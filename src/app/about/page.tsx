import Image from "next/image";
import portrait from "../../../public/about/orange-jacket-portrait.jpeg";
import AnimatedSection from "@/components/AnimatedSection";
import { skills } from "@/data/resume";

export const metadata = {
  title: "About — Sam Bassong",
  description:
    "Software engineer based in Seattle. Building accessible digital products.",
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <AnimatedSection className="mb-16">
        <p className="text-sm font-mono text-accent uppercase tracking-widest mb-3">
          About me
        </p>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter">
          Lasting software
          <br />
          <span className="text-accent">built for people.</span>
        </h1>
      </AnimatedSection>

      {/* Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <AnimatedSection className="flex flex-col gap-5 text-[var(--fg-muted)] leading-relaxed">
          <p>
            I&apos;m Sam, a software developer based in the Pacific Northwest.
            My path here wasn&apos;t exactly linear. I spent years doing infectious
            disease research and teaching middle school science before writing
            my first lines of code on my 8th graders&apos; field trip to Amazon.
            Within a year, I had taught myself enough to build a clunky
            Jeopardy-style browser game for my students, completed a bootcamp,
            and landed my first role in tech.
          </p>
          <p>
            Since then, I&apos;ve built production software across geospatial
            platforms, sales tools, and enterprise applications, working mostly
            in JavaScript, Python, React, Node, and AWS. Whether it&apos;s
            accessible UIs, clean APIs, or scalable architecture, I care about
            the details and enjoy building things that improve systems and make
            life a little easier for the people using them.
          </p>
          <p>
            These days I&apos;m a Lead Instructor at General Assembly, preparing
            developers for the workforce while finishing a CS degree at Oregon
            State. Outside of work, I&apos;m a devoted FC Barcelona supporter, a
            certified butler to my two cats, and usually out exploring the PNW
            or buried in fantasy fiction.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="relative aspect-[4/5] max-w-sm rounded-2xl overflow-hidden">
            <Image
              src={portrait}
              alt="Sam Bassong"
              fill
              sizes="(max-width: 640px) 100vw, 384px"
              className="object-cover"
              placeholder="blur"
            />
          </div>
        </AnimatedSection>
      </div>

      {/* Divider */}
      <div className="h-px bg-[var(--border)] mb-16" />

      {/* Skills */}
      <AnimatedSection className="mb-4">
        <p className="text-sm font-mono text-accent uppercase tracking-widest mb-3">
          Expertise
        </p>
        <h2 className="text-4xl font-black tracking-tighter mb-12">
          Skills & tools
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(skills).map(([category, items], i) => (
          <AnimatedSection key={category} delay={i * 0.08}>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--fg-muted)] mb-4">
              {category}
            </h3>
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
