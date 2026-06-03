export type ProjectType = "professional" | "hobby" | "open-source" | "freelance";

export type Project = {
  slug: string;
  title: string;
  type: ProjectType;
  tags: string[];
  summary: string;
  description: string;
  image?: string;
  links: { label: string; url: string }[];
  featured?: boolean;
  year: number;
};

export const projects: Project[] = [
  {
    slug: "portfolio-v4",
    title: "Portfolio v4",
    type: "hobby",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    summary: "The fourth iteration of my personal portfolio. Built with Next.js, Framer Motion, and Tailwind CSS v4.",
    description: `The fourth version of my personal portfolio website. This iteration focuses on visual polish, smooth animations, and a bold typographic identity.

Built from scratch with Next.js App Router, Tailwind CSS v4, and Framer Motion. Features include a filterable projects gallery, dark/light mode, and smooth page transitions.

The design language uses a white/orange/black palette in light mode and its inverse in dark mode — minimal and clean, but with enough personality to stand out.`,
    year: 2025,
    links: [
      { label: "View Live", url: "https://www.sambassong.com" },
      { label: "GitHub", url: "https://github.com" },
    ],
    featured: true,
  },
  {
    slug: "project-two",
    title: "Project Two",
    type: "professional",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    summary: "A professional web application built for enterprise clients. Handles real-time data processing at scale.",
    description: `A full-stack enterprise application built for managing complex workflows and real-time data processing.

The frontend is built with React and Redux for state management. The backend uses Node.js with a PostgreSQL database hosted on AWS RDS.

Key features include real-time updates via WebSockets, role-based access control, and an analytics dashboard.`,
    year: 2024,
    links: [
      { label: "View Live", url: "#" },
    ],
    featured: true,
  },
  {
    slug: "project-three",
    title: "Project Three",
    type: "open-source",
    tags: ["Python", "FastAPI", "Docker", "GitHub Actions"],
    summary: "An open-source CLI tool for automating repetitive development tasks. Used by 500+ developers.",
    description: `An open-source command-line tool that automates common development workflows.

Built with Python and Click, distributed via PyPI. Includes a FastAPI-based dashboard for visualization.

The project is containerized with Docker and has a full CI/CD pipeline using GitHub Actions. Contributions from 12 external contributors.`,
    year: 2024,
    links: [
      { label: "GitHub", url: "https://github.com" },
      { label: "PyPI", url: "#" },
    ],
    featured: true,
  },
  {
    slug: "project-four",
    title: "Project Four",
    type: "freelance",
    tags: ["Vue.js", "Supabase", "Stripe", "Tailwind CSS"],
    summary: "A freelance e-commerce project for a local business. Includes inventory management and Stripe payments.",
    description: `A full-featured e-commerce platform built for a local business client.

Frontend built with Vue 3 and Pinia for state management. Backend powered by Supabase for auth and database. Payments handled via Stripe.

Features include product management, inventory tracking, order fulfillment, and a customer dashboard.`,
    year: 2023,
    links: [
      { label: "View Live", url: "#" },
    ],
  },
  {
    slug: "project-five",
    title: "Project Five",
    type: "hobby",
    tags: ["Rust", "WebAssembly", "Canvas API"],
    summary: "A WebAssembly game engine experiment built with Rust. Renders at 60fps in the browser.",
    description: `An experimental game engine written in Rust and compiled to WebAssembly.

The engine uses the Canvas API for rendering and achieves 60fps performance in the browser. Supports basic 2D physics, sprite animation, and a simple scene graph.

This was a deep dive into WebAssembly performance characteristics and Rust's zero-cost abstractions.`,
    year: 2023,
    links: [
      { label: "GitHub", url: "https://github.com" },
      { label: "Demo", url: "#" },
    ],
  },
  {
    slug: "project-six",
    title: "Project Six",
    type: "professional",
    tags: ["React Native", "GraphQL", "Firebase", "TypeScript"],
    summary: "A cross-platform mobile app with 10k+ downloads. Features offline-first architecture and real-time sync.",
    description: `A cross-platform mobile application built with React Native, targeting both iOS and Android.

Uses GraphQL for the API layer and Firebase for real-time data sync and push notifications. Implements an offline-first architecture with local SQLite storage.

The app has been downloaded over 10,000 times and maintains a 4.7-star rating on both app stores.`,
    year: 2023,
    links: [
      { label: "App Store", url: "#" },
      { label: "Google Play", url: "#" },
    ],
  },
];

export const projectTypes: { value: ProjectType | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "professional", label: "Professional" },
  { value: "hobby", label: "Hobby" },
  { value: "open-source", label: "Open Source" },
  { value: "freelance", label: "Freelance" },
];
