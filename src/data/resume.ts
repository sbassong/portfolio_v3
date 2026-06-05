export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievement?: string;
  tags: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export const experience: Experience[] = [
  {
    role: "Lead Software Development Instructor",
    company: "General Assembly",
    period: "Jan 2026 — Present",
    description:
      "Architect and deliver full-stack applications across MERN and Django/PostgreSQL stacks, guiding cohorts through Agile/SCRUM workflows from system design to deployment.",
    tags: [
      "React",
      "Node.js",
      "Python",
      "Django",
      "PostgreSQL",
      "MongoDB",
      "Express.js",
    ],
  },
  {
    role: "Associate Software Development Instructor",
    company: "General Assembly",
    period: "Feb 2024 — Jan 2026",
    description:
      "Mentored emerging developers through instruction, pair programming, and code reviews, building deployable MERN and Django reference apps with enterprise partners.",
    tags: ["React", "Node.js", "Python", "Django", "MongoDB", "Express.js"],
  },
  {
    role: "Software Engineer",
    company: "Locana (TRC)",
    period: "Apr 2022 — Sep 2023",
    description:
      "Built and maintained 3 geospatial full-stack applications, including key features towards a platform launch, contributing to a $3M Fortune 100 contract extension using React, Mapbox, D3, Node.js, and Python.",
    achievement:
      "Improved test coverage from 82% to 87% by implementing CI/CD pipelines and automated testing with Cypress and Jest.",
    tags: [
      "React",
      "Python",
      "Node.js",
      "Mapbox",
      "D3.js",
      "AWS",
      "PostgreSQL",
      "MongoDB",
      "Cypress",
      "Jest",
    ],
  },
  {
    role: "Front-end Web Developer",
    company: "Center Centre",
    period: "Dec 2021 — Apr 2022",
    description:
      "Developed responsive web pages and sales flows from Figma designs, contributing to 9% quarterly revenue growth.",
    achievement:
      "Increased development efficiency by 30% and cut onboarding time by 50% by building a reusable CSS framework and overhauling technical documentation.",
    tags: ["JavaScript", "HTML", "CSS", "Figma"],
  },
];

export const education: Education[] = [
  {
    degree: "B.S. Computer Science (3.75 GPA)",
    school: "Oregon State University",
    period: "Expected 2027",
  },
  {
    degree: "AWS Certified Cloud Practitioner",
    school: "Amazon Web Services",
    period: "Sep 2023",
  },
  {
    degree: "Full-stack Software Engineering Bootcamp Certificate",
    school: "General Assembly",
    period: "Oct 2021",
  },
];

export const skills: Record<string, string[]> = {
  Languages: ["TypeScript", "JavaScript", "Python", "SQL"],
  Frontend: ["React", "React Native", "Next.js", "Tailwind CSS", "Vue", "Mapbox GL JS", "D3.js"],
  Backend: ["Node.js", "Express.js", "Flask", "MongoDB", "PostgreSQL", "REST APIs"],
  "Cloud & Tooling": ["AWS", "GitHub Actions", "Docker", "Jest", "Cypress", "Figma"],
};
