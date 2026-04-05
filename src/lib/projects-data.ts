export type ProjectItem = {
  id: string;
  name: string;
  url?: string;
  description: string;
  image: string;
  techStack?: string[];
  githubUrl?: string;
  tags?: string[];
  videoUrl: string;
};

export const projects: ProjectItem[] = [
  {
    id: 'engineering-india-ycce',
    name: 'Engineering India YCCE',
    url: 'https://eiycce.vercel.app',
    description:
      'Engineering India YCCE is a full-stack platform for a student-led technical and social club at YCCE College, Nagpur. It features a centralized event management system with automated QR-based ticketing that processed 5,000+ tickets in its first month, facilitating 5+ events for 3,000+ attendees. The platform includes dynamic blog publishing, a team directory, an event gallery with Cloudinary-hosted media, and a Supabase-backed storage pipeline. Built with Next.js 14 App Router and Better-Auth for session management, it uses Turso (LibSQL) with Drizzle ORM for edge-compatible persistence. The system was load-tested to sustain 600+ req/sec and is deployed on Vercel with edge caching for global performance.',
    image: '/projects/engineeringindiaycce.png',
    techStack: [
      'Next.js 14',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'React Query',
      'Better-Auth',
      'Turso (LibSQL)',
      'Drizzle ORM',
      'Supabase Storage',
      'Cloudinary',
      'Vercel',
    ],
    githubUrl: '',
    tags: ['Web', 'Event Management', 'Full Stack'],
    videoUrl:
      'https://res.cloudinary.com/priyanshukayarkar/video/upload/q_auto/f_auto/v1775380220/1_zcplwf.mp4',
  },
  {
    id: 'rolex-studio',
    name: 'Rolex Studio',
    url: 'https://www.rolexstudio.works/',
    description:
      'Rolex Studio is a professional social media marketing agency website built to attract and convert business clients. It showcases a full suite of digital marketing services including social media management, content creation and strategy, analytics and growth planning, and paid advertising across platforms like Facebook, Instagram, and LinkedIn. The site features a compelling launch offer section, a services breakdown, and a streamlined contact funnel — all wrapped in a clean, minimal aesthetic optimized for conversion. Built with Next.js and Supabase for backend data handling, and styled with Tailwind CSS and shadcn/ui components for a polished, accessible UI.',
    image: '/projects/rolexstudio.png',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Supabase'],
    githubUrl: 'https://github.com/Priyanshudotdev/rolexstudio',
    tags: ['Web', 'Marketing', 'Agency', 'Minimal'],
    videoUrl:
      'https://res.cloudinary.com/priyanshukayarkar/video/upload/q_auto/f_auto/v1775380200/4_ta6ini.mp4',
  },
  {
    id: 'maadhyam',
    name: 'Maadhyam',
    url: 'https://maadhyam-it.vercel.app',
    description:
      'Maadhyam is a responsive digital publication platform built for a departmental college magazine, designed to bring editorial content to life on the web. The project features 20+ reusable UI components including article cards, author bios, issue covers, and category filters — all crafted for readability and visual consistency. The layout is fully responsive, optimized for both desktop and mobile readers, and follows a clean typographic design system suited for long-form content. Built as a frontend-focused project using React and modern CSS tooling, it demonstrates component architecture best practices and scalable design patterns for publication-style interfaces.',
    image: '/projects/maadhyam.png',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/Priyanshudotdev/maadhyam.git',
    tags: ['Web', 'Frontend', 'Publication', 'UI Components'],
    videoUrl:
      'https://res.cloudinary.com/priyanshukayarkar/video/upload/q_auto/f_auto/v1775380222/3_k2yomc.mp4',
  },
  {
    id: 'supernaturalkitchens',
    name: 'Super Natural Kitchens',
    url: 'https://supernaturalkitchens.vercel.app/',
    description:
      'Super Natural Kitchens is a premium interior design showcase website built to present high-end modular kitchen aesthetics in an immersive, visually rich format. The site features smooth scroll-based animations powered by Framer Motion, parallax effects, and fluid page transitions that give it a luxurious, editorial feel. Product and design collections are presented through full-bleed imagery, structured layout grids, and interactive hover states. Built with React and Vite for a lightning-fast development and build experience, and styled with Tailwind CSS for a utility-first responsive design. The project demonstrates advanced frontend animation techniques and serves as an inspiration and lead-generation platform for a kitchen interior brand.',
    image: '/projects/supernaturalkitchens.png',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/Priyanshudotdev/SuperNatural-Ecommerce-Frontend.git',
    tags: ['Web', 'Interior Design', 'Creative', 'Animation'],
    videoUrl:
      'https://res.cloudinary.com/priyanshukayarkar/video/upload/q_auto/f_auto/v1775380220/2_ztyqon.mp4',
  },
];

export const getProjectById = (id: string): ProjectItem | undefined => {
  return projects.find((project) => project.id === id);
};
