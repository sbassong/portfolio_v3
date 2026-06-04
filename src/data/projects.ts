export type ProjectType = "professional" | "hobby" | "freelance";

export type Project = {
  slug: string;
  title: string;
  type: ProjectType[];
  tags: string[];
  summary: string;
  description: string;
  image?: string; // card thumbnail
  images?: string[]; // detail page gallery (2–4 images)
  links: { label: string; url: string }[];
  featured?: boolean;
  year: number;
};

export const projects: Project[] = [
  {
    slug: "cf-platform",
    title: "Child-Free Platform",
    type: ["hobby", "freelance"],
    tags: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Socket.io",
      "Auth.js",
      "Tailwind CSS",
      "Shadcn UI",
      "AWS S3",
      "Cypress",
    ],
    summary:
      "A full-stack social platform for the child-free community. Features real-time messaging, community groups, events, and a hybrid Google OAuth + credentials auth system.",
    description: `The Child-Free Platform is a prototype social application built as a dedicated space for the child-free community to connect, organize, and engage.
      The frontend is built with Next.js 15, TypeScript, Tailwind CSS, and Shadcn UI, using SWR for data fetching and Auth.js (NextAuth v5) for Google OAuth. A custom session-bridge mechanism synchronizes the OAuth session with the NestJS backend's cookie-based HTTP-only session, ensuring a unified auth state across the app.
      The backend is a modular NestJS REST API and WebSocket server backed by MongoDB and Mongoose, organized around Domain-Driven Design principles. Key features include real-time private messaging via Socket.io, community groups and events with RSVP management, customizable user profiles, AWS S3 for avatar and banner uploads, and rate limiting via NestJS Throttler. End-to-end testing is handled with Cypress on the frontend and Jest on the backend.`,
    year: 2025,
    image: "/projects/cf-platform/thumb.png",
    images: [
      "/projects/cf-platform/1.png",
      "/projects/cf-platform/2.png",
      "/projects/cf-platform/3.png",
      "/projects/cf-platform/4.png",
    ],
    links: [
      { label: "View Live", url: "https://cf-platform-frontend.vercel.app" },
      {
        label: "Frontend",
        url: "https://github.com/sbassong/cf-platform-frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/sbassong/cf-platform-backend",
      },
    ],
    featured: true,
  },

  {
    slug: "fbb-studios",
    title: "FBB Studios",
    type: ["freelance", "professional"],
    tags: ["Astro", "TypeScript", "CSS", "Cloudflare Pages", "i18n"],
    summary:
      "Marketing site for FBB Studios, a San Francisco-based Francophone film production house. Built with Astro 5, fully bilingual in French and English, and deployed on Cloudflare Pages.",
    description: `A production-ready marketing site built for FBB Studios, a San Francisco-based Francophone film production house with roots in Cameroon.
      Built with Astro 5 for zero client-side JavaScript and fast static output. The site is fully bilingual, feauring French as the default locale (\`/\`) and English at \`/en/\`, while using Astro's built-in i18n system with hreflang alternates for SEO. All copy is managed through JSON content collections, meaning the client can update text without touching code. Images are processed at build time into WebP with responsive srcsets via Astro's image pipeline. Deployed on Cloudflare Pages.`,
    year: 2026,
    image: "/projects/fbb-studios/thumb.png",
    images: [
      "/projects/fbb-studios/1.png",
      "/projects/fbb-studios/2.png",
      "/projects/fbb-studios/3.png",
      "/projects/fbb-studios/4.png",
    ],
    links: [
      { label: "View Live", url: "https://fbbstudios.com" },
      { label: "GitHub", url: "https://github.com/sbassong/fbb-studios" },
    ],
    featured: true,
  },

  {
    slug: "karta",
    title: "Karta",
    type: ["hobby"],
    tags: [
      "React Native",
      "Expo",
      "MapLibre",
      "Firebase",
      "JavaScript",
      "Microservices",
    ],
    summary:
      "A geospatial, community-sourced mobile app for improving access to essential services in rural areas. Built with React Native and Expo, backed by a distributed microservices architecture.",
    description: `Karta is a cross-platform mobile application designed to bridge the information gap in rural communities by mapping the locations of essential services, including healthcare facilities, water sources, and educational institutions.
      The frontend is built with React Native and Expo, using MapLibre for performant vector-based interactive maps and Firebase Cloud Messaging for real-time push notifications. Users can contribute by uploading photos of locations directly from their device camera or gallery, with authentication backed by secure token storage via Expo Secure Store.
      The app is the client for a distributed microservices backend, with five dedicated services handling auth (JWT), push notifications, image processing and storage, user reporting, and points-of-interest data. All are deployed independently on Vercel.`,
    year: 2025,
    image: "/projects/karta/thumb.png",
    images: [
      "/projects/karta/1.png",
      "/projects/karta/2.png",
      "/projects/karta/3.png",
      "/projects/karta/4.png",
    ],
    links: [{ label: "GitHub", url: "https://github.com/sbassong/Karta" }],
    featured: true,
  },

  {
    slug: "agile-intensive-landing",
    title: "Agile Intensive Landing Page",
    type: ["professional"],
    tags: ["HTML", "CSS", "Responsive Design"],
    summary:
      "A marketing landing page built for Center Centre's 'Taking Control of Agile UX' intensive program, led by UX expert Jared Spool.",
    description: `A responsive landing page designed and built for Center Centre's UX education program, promoting a 5-day live intensive on integrating Agile and UX practices.
      The page features a full content layout including a hero section, illustrated editorial sections, a structured daily curriculum, speaker bio, and a sticky call-to-action, all hand-coded in semantic HTML and CSS.
      Built without any JavaScript frameworks, the project demonstrates clean layout work with custom utility classes, responsive design, and close attention to typography and content hierarchy. Deployed via Vercel.`,
    year: 2022,
    image: "/projects/agile-intensive-landing/thumb.png",
    images: [
      "/projects/agile-intensive-landing/1.png",
      "/projects/agile-intensive-landing/2.png",
      "/projects/agile-intensive-landing/3.png",
    ],
    links: [
      { label: "View Live", url: "https://agile-intensive-landing.vercel.app" },
      {
        label: "GitHub",
        url: "https://github.com/sbassong/agile-intensive-landing",
      },
    ],
  },

  {
    slug: "g-verse",
    title: "G-Verse",
    type: ["hobby"],
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Sequelize",
      "Supabase",
      "MUI",
      "JWT",
    ],
    summary:
      "A full-stack game library app where enthusiasts can browse games and manage a personal collection. Built with the PERN stack and JWT auth.",
    description: `G-Verse is a fully functional full-stack application for game enthusiasts to browse games, manage their account, and curate a personal library of favorites.
      Built with the PERN stack (PostgreSQL, Express.js, React, Node.js), using JSON Web Tokens for authentication and authorization.
      Features include user auth, a browsable game catalog seeded with initial data, and a personal game library. The UI is built with Material UI (MUI), with UX touches like alerts and tooltips throughout. Deployed on Vercel with data served from Supabase.`,
    year: 2023,
    image: "/projects/g-verse/thumb.png",
    images: [
      "/projects/g-verse/1.png",
      "/projects/g-verse/2.png",
      "/projects/g-verse/3.png",
    ],
    links: [
      { label: "View Live", url: "https://g-verse-frontend.vercel.app" },
      { label: "GitHub", url: "https://github.com/sbassong/g-verse" },
    ],

  },

  {
    slug: "portfolio-v2",
    title: "Portfolio v2",
    type: ["hobby"],
    tags: ["React", "Vite", "JavaScript", "CSS"],
    summary:
      "The second iteration of my personal portfolio. Originally built with Create React App, then migrated to Vite for faster builds and a better dev experience.",
    description: `The second version of my personal portfolio website, showcasing my projects and skills as a full-stack developer.
      Originally bootstrapped with Create React App, this version was later migrated to Vite (v2.1) for significantly faster build times and an improved developer experience. Built with React and vanilla CSS, and deployed on Vercel.`,
    year: 2024,
    image: "/projects/portfolio-v2/thumb.png",
    images: [
      "/projects/portfolio-v2/1.png",
      "/projects/portfolio-v2/2.png",
      "/projects/portfolio-v2/3.png",
    ],
    links: [
      { label: "View Live", url: "https://portfolio-2-vite.vercel.app" },
      { label: "GitHub", url: "https://github.com/sbassong/portfolio-2-vite" },
    ],
  },

  {
    slug: "uie2022",
    title: "UIE 2022 Landing Page",
    type: ["professional"],
    tags: ["HTML", "CSS", "JavaScript", "Airtable"],
    summary:
      "A dynamic landing page for UX expert Jared Spool's 2022 events, featuring a JavaScript-driven upcoming event display, an embedded Airtable contact form, and an HTML email template.",
    description: `A landing page built for UIE (User Interface Engineering) to promote Jared Spool's 2022 UX events and speaking engagements.
      The page dynamically surfaces the next upcoming event by reading from a JavaScript data file (\`calendar.js\`), keeping the content fresh without manual HTML edits. A "Partner with Jared" section embeds an Airtable form for direct collaboration inquiries.
      The repo also includes a standalone HTML email template (\`email.html\`) used for community communications to the "Leaders of Awesomeness" newsletter audience. Built with vanilla HTML, CSS, and JavaScript, and deployed via Vercel.`,
    year: 2022,
    image: "/projects/uie2022/thumb.png",
    images: [
      "/projects/uie2022/1.png",
      "/projects/uie2022/2.png",
      "/projects/uie2022/3.png",
    ],
    links: [
      { label: "View Live", url: "https://uie2022.vercel.app" },
      { label: "GitHub", url: "https://github.com/sbassong/uie2022" },
    ],
  },
];

export const projectTypes: { value: ProjectType | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "professional", label: "Professional" },
  { value: "hobby", label: "Hobby" },
  { value: "freelance", label: "Freelance" },
];