export const personalData = {
  name: "Enoch Chukwudi",
  tagline: "SOFTWARE ENGINEER // PRODUCT DESIGNER",
  introduction: "I build exceptional digital experiences that blend creativity with technical excellence.",
  location: "Lagos, Nigeria",
  timezone: "WAT (UTC+1)",
  experience: "5+ years",
  email: "enoch@example.com",
  linkedin: "https://linkedin.com/in/enochchukwudi",
  github: "https://github.com/enochchukwudi",
  twitter: "https://twitter.com/enochchukwudi",
  bio: "Backend-leaning full-stack developer focused on APIs, system design, and data-driven applications. I build scalable web apps and dashboards with clean architecture, prioritizing performance, maintainability, and real-world logic.",
};

export const skills = {
  frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Vue.js", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Python", level: 82 },
    { name: "Go", level: 75 },
    { name: "GraphQL", level: 80 },
  ],
  database: [
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 82 },
    { name: "Redis", level: 78 },
    { name: "Prisma", level: 85 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 80 },
    { name: "AWS", level: 75 },
    { name: "Figma", level: 85 },
    { name: "VS Code", level: 95 },
  ],
  others: [
    { name: "REST APIs", level: 90 },
    { name: "CI/CD", level: 82 },
    { name: "Testing", level: 80 },
    { name: "Agile", level: 85 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
    liveUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/enochchukwudi/ecommerce",
    image: "/projects/ecommerce-1.jpg",
    image2: "/projects/ecommerce-2.jpg",
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    features: ["Real-time inventory", "Secure payments", "Admin dashboard", "Analytics"],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team collaboration features.",
    liveUrl: "https://demo-taskapp.com",
    githubUrl: "https://github.com/enochchukwudi/taskapp",
    image: "/projects/taskapp-1.jpg",
    image2: "/projects/taskapp-2.jpg",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
    features: ["Real-time sync", "Team collaboration", "Kanban boards", "Time tracking"],
  },
  {
    id: 3,
    title: "Healthcare Dashboard",
    description: "Comprehensive healthcare management system for clinics and medical practitioners.",
    liveUrl: "https://demo-healthcare.com",
    githubUrl: "https://github.com/enochchukwudi/healthcare",
    image: "/projects/healthcare-1.jpg",
    image2: "/projects/healthcare-2.jpg",
    techStack: ["Vue.js", "Python", "FastAPI", "PostgreSQL"],
    features: ["Patient records", "Appointment scheduling", "Prescription management", "Reporting"],
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Analytics platform for tracking social media performance and engagement metrics.",
    liveUrl: "https://demo-analytics.com",
    githubUrl: "https://github.com/enochchukwudi/analytics",
    image: "/projects/analytics-1.jpg",
    image2: "/projects/analytics-2.jpg",
    techStack: ["Next.js", "Python", "D3.js", "Redis"],
    features: ["Multi-platform tracking", "Custom reports", "AI insights", "Export capabilities"],
  },
];

export const caseStudies = [
  {
    id: 1,
    projectId: 1,
    title: "Scaling E-Commerce Platform",
    problem: "The client needed a scalable e-commerce solution that could handle high traffic during peak seasons while maintaining fast load times and secure transactions.",
    solution: "Implemented a microservices architecture with Next.js for the frontend, optimized database queries, and integrated Stripe for secure payments. Added CDN for static assets and implemented caching strategies.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis", "AWS"],
    results: [
      "99.9% uptime during peak season",
      "40% faster page load times",
      "25% increase in conversion rate",
      "Zero security incidents",
    ],
  },
  {
    id: 2,
    projectId: 2,
    title: "Real-Time Task Collaboration",
    problem: "A remote team needed a task management solution that provided real-time updates and seamless collaboration across different time zones.",
    solution: "Built a WebSocket-based real-time sync system using Socket.io, implemented conflict resolution for concurrent edits, and created an intuitive Kanban board interface.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    results: [
      "50% improvement in team productivity",
      "Zero data loss incidents",
      "Seamless collaboration across 12 time zones",
      "98% user satisfaction rate",
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    quote: "Enoch delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations. The platform has been running smoothly since launch.",
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
  },
  {
    id: 2,
    quote: "Working with Enoch was a pleasure. He understood our requirements perfectly and delivered a solution that transformed how our team collaborates. Highly recommended!",
    name: "Michael Chen",
    company: "Digital Solutions",
    role: "CTO",
  },
  {
    id: 3,
    quote: "Enoch's ability to combine design and development skills is rare. He created a beautiful healthcare dashboard that our staff loves using. Professional and efficient.",
    name: "Dr. Amanda Williams",
    company: "MedCare Clinic",
    role: "Medical Director",
  },
];
