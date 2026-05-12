export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: "web" | "mobile" | "ai" | "fullstack";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "ai-content-studio",
    title: "AI Content Studio",
    description: "A full-stack AI-powered content generation platform with real-time collaboration, version history, and multi-model support.",
    longDescription: "AI Content Studio is a comprehensive platform that leverages multiple large language models to help teams create, edit, and manage content at scale. Built with a focus on real-time collaboration, the platform supports simultaneous editing, inline comments, and a full version history system. The AI layer integrates GPT-4, Claude, and Gemini, allowing users to switch models mid-session and compare outputs side by side.",
    image: "https://cdn.dribbble.com/userupload/47321579/file/0949fa65ef66536f061293dd44d6982c.png?resize=2048x1536&vertical=center",
    tags: ["Next.js", "TypeScript", "OpenAI", "Prisma", "PostgreSQL", "Tailwind"],
    category: "ai",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    year: "2024",
    highlights: [
      "Real-time collaborative editing with WebSockets",
      "Multi-model AI integration (GPT-4, Claude, Gemini)",
      "Version history with diff visualization",
      "Team workspaces with role-based access control",
    ],
  },
  {
    slug: "ecommerce-platform",
    title: "NexShop E-Commerce",
    description: "A high-performance e-commerce platform with server-side rendering, Stripe payments, and a custom CMS for product management.",
    longDescription: "NexShop is a production-ready e-commerce solution built for performance and scalability. It features a custom headless CMS, advanced product filtering, wishlist functionality, and a streamlined checkout flow powered by Stripe. The platform achieves a Lighthouse score of 98+ through aggressive image optimization, edge caching, and incremental static regeneration.",
    image: "https://cdn.shopify.com/s/files/1/0817/7988/4088/articles/6DaWtQPc3lNh5d7l5wAi97.png?v=1712946186",
    tags: ["Next.js", "Stripe", "Sanity CMS", "TypeScript", "Tailwind", "Vercel"],
    category: "fullstack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    year: "2024",
    highlights: [
      "98+ Lighthouse performance score",
      "Stripe Checkout with webhooks",
      "Custom headless CMS with Sanity",
      "Advanced product search and filtering",
    ],
  },
  {
    slug: "devops-dashboard",
    title: "DevOps Pulse",
    description: "A real-time infrastructure monitoring dashboard with alerting, log aggregation, and deployment pipeline visualization.",
    longDescription: "DevOps Pulse provides engineering teams with a unified view of their infrastructure health, deployment pipelines, and application logs. The dashboard aggregates metrics from AWS CloudWatch, Datadog, and custom Prometheus endpoints, presenting them in an intuitive interface with configurable alert thresholds and on-call rotation management.",
    image: "https://learn.microsoft.com/en-us/azure/devops/report/dashboards/media/dashboard-focus/my-work-focus.png?view=azure-devops",
    tags: ["React", "Node.js", "WebSockets", "Docker", "Prometheus", "Redis"],
    category: "web",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    year: "2023",
    highlights: [
      "Real-time metrics with WebSocket streaming",
      "Multi-cloud support (AWS, GCP, Azure)",
      "Configurable alert rules and on-call routing",
      "Deployment pipeline visualization",
    ],
  },
  {
    slug: "sqa-portfolio",
    title: "SQA Engineer Portfolio",
    description: "A personal portfolio website built for a Software Quality Assurance engineer, showcasing testing projects, tools expertise, and bug-tracking case studies.",
    longDescription: "This portfolio website was designed and developed for a Software Quality Assurance (SQA) engineer looking to showcase their professional work and technical expertise. The site highlights the engineer's experience across manual and automated testing, including test plan documentation, regression suites, and CI/CD pipeline integrations. It features dedicated sections for case studies on bug discovery and resolution, a skills matrix covering tools like Selenium, Cypress, Jest, and Postman, and a filterable project gallery. The site was built with performance and accessibility in mind, achieving full WCAG 2.1 AA compliance and a perfect Lighthouse score.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&auto=format&fit=crop&q=80",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Vercel"],
    category: "web",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    year: "2024",
    highlights: [
      "Dedicated case studies for QA bug discovery workflows",
      "Interactive skills matrix for testing tools and frameworks",
      "Filterable project gallery by testing type (manual, automated, API)",
      "WCAG 2.1 AA accessible with 100 Lighthouse score",
    ],
  },
  {
    slug: "fitness-tracker-app",
    title: "FitFlow Mobile",
    description: "A cross-platform fitness tracking app with AI-powered workout recommendations, progress analytics, and social challenges.",
    longDescription: "FitFlow is a React Native fitness application that combines workout tracking with AI-driven personalization. The app analyzes user performance data to generate adaptive workout plans, tracks nutrition via barcode scanning, and includes a social layer for group challenges and leaderboards. Integrated with Apple Health and Google Fit for seamless data sync.",
    image: "https://images.ctfassets.net/lzny33ho1g45/3L77mMruOrEOWxyDmcKkEp/2e1d7aff0d998602ddaa18fad2bb75fb/image2.jpg",
    tags: ["React Native", "Expo", "TypeScript", "Supabase", "TensorFlow Lite"],
    category: "mobile",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    year: "2023",
    highlights: [
      "AI-powered adaptive workout plans",
      "Apple Health & Google Fit integration",
      "Barcode scanning for nutrition tracking",
      "Social challenges and leaderboards",
    ],
  },
  {
    slug: "design-system",
    title: "Prism Design System",
    description: "A comprehensive React component library with 60+ accessible components, dark mode support, and Storybook documentation.",
    longDescription: "Prism is a production-grade design system built for enterprise React applications. It includes 60+ fully accessible components following WCAG 2.1 AA standards, a comprehensive token system for theming, and complete Storybook documentation with interactive examples. The library is tree-shakeable, fully typed, and ships with both CSS-in-JS and CSS variable theming options.",
    image: "https://www.datocms-assets.com/22695/1751314585-1664023742-component-library-vs-ds-image-4-component-libraries-contain-ui-elements-freepik.webp",
    tags: ["React", "TypeScript", "Storybook", "Radix UI", "CSS Variables", "Rollup"],
    category: "web",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    year: "2023",
    highlights: [
      "60+ accessible components (WCAG 2.1 AA)",
      "Full Storybook documentation",
      "Dark mode with CSS variable theming",
      "Tree-shakeable, fully typed exports",
    ],
  },
  {
    slug: "ml-image-classifier",
    title: "VisionAI Classifier",
    description: "A web-based machine learning image classification tool with drag-and-drop upload, real-time inference, and model comparison.",
    longDescription: "VisionAI Classifier is a browser-based tool that makes machine learning accessible to non-technical users. It supports drag-and-drop image upload, runs inference using TensorFlow.js models directly in the browser (no server round-trip), and allows side-by-side comparison of different model architectures. Users can also fine-tune models on custom datasets through a guided workflow.",
    image: "https://www.researchgate.net/publication/360279395/figure/fig1/AS:11431281110604129@1672654332123/User-interface-of-the-image-classification-tool.ppm",
    tags: ["Next.js", "TensorFlow.js", "Python", "FastAPI", "TypeScript", "WebGL"],
    category: "ai",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    year: "2022",
    highlights: [
      "In-browser inference with TensorFlow.js",
      "Side-by-side model comparison",
      "Custom dataset fine-tuning workflow",
      "WebGL acceleration for fast inference",
    ],
  },
];

export const categories = [
  { value: "all", label: "All Projects" },
  { value: "web", label: "Web Apps" },
  { value: "fullstack", label: "Full Stack" },
  { value: "ai", label: "AI / ML" },
  { value: "mobile", label: "Mobile" },
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}