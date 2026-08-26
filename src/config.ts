export const siteUrl = "https://portafolio-nicolas-gonzalez.vercel.app"

export const config = {
  name: "Nicolas Gonzalez",
  role: "Frontend Developer",
  stack: ["React", "Next.js", "TypeScript", "JavaScript"],
  email: "gonzaleznicolas8000@gmail.com",
  resume:
    "https://drive.google.com/file/d/1X8e8K_5vbMRlTwyqLBf5rWBZOkUyRb02/view",
  socialMedia: [
    {
      name: "GitHub",
      url: "https://github.com/nicolas355",
      image: "/github.svg",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nicolas-gonzalez-68b5081b0/",
      image: "/linkedin.svg",
    },
  ],
  navLinks: [
    { name: "About", url: "#about" },
    { name: "Experience", url: "#experience" },
    { name: "Projects", url: "#projects" },
    { name: "Skills", url: "#skills" },
    { name: "Contact", url: "#contact" },
  ],
  colors: {
    primary: "#84b6ff",
  },
  experience: [
    {
      company: "YopLabs",
      role: "Frontend Developer",
      date: "Dec 2024 — May 2025",
      tech: ["React", "Redux", "SASS", "Material UI"],
      bullets: [
        "Built production UI for Labbi, a B2B platform connecting pharmacies with laboratories and drugstores (Industrias Bagó).",
        "Shipped the homepage and login experience, plus reusable Material UI components aligned with the design system.",
        "Managed global state with Redux and collaborated on backend work for product integration.",
        "Focused on performance improvements, bug fixes, and keeping the interface consistent at scale.",
      ],
    },
    {
      company: "No Country",
      role: "Frontend Developer",
      date: "Nov 2023 — Apr 2024",
      tech: ["Next.js", "React", "TypeScript", "Redux"],
      bullets: [
        "Worked in a multidisciplinary team on Pet Notes, a pet-management app with records, calendar events, and task tracking.",
        "Used TypeScript, Context API, CSS Modules and Tailwind to ship forms connected to the database.",
        "Collaborated with Git, GitHub and Jira in an agile workflow with daily alignment.",
      ],
    },
    {
      company: "Freelance",
      role: "Web Developer",
      date: "Dec 2021 — Nov 2023",
      tech: ["WordPress", "JavaScript", "HTML", "CSS", "PHP"],
      bullets: [
        "Built client websites from requirements through delivery, including landing pages and service platforms.",
        "Implemented contact forms, animations and responsive layouts from Figma and graphic designs.",
        "Shipped projects such as Quarks Consulting, High Web Design, Mueblería Amoblarte and Herrería Altar.",
      ],
    },
    {
      company: "AutoescuelaSion",
      role: "Web Developer / Administrative",
      date: "Jul 2020 — Jan 2023",
      tech: ["React", "Vite", "Next.js", "Tailwind CSS", "Bootstrap"],
      bullets: [
        "Owned website development and updates for a door-to-door driving school, combining product work with day-to-day operations.",
        "Built and optimized the site with React and Vite, then shipped a second site with Next.js and Tailwind CSS.",
        "Implemented Bootstrap layouts and supported customer-acquisition and social media presence.",
      ],
    },
  ],
  featuredProjects: [
     {
      id: "labbi",
      name: "Labbi / YopLabs",
      tagline: "B2B platform connecting pharmacies with laboratories.",
      problem:
        "Pharmacies, laboratories and drugstores needed a reliable web product to operate together — not a marketing site.",
      solution:
        "At YopLabs I developed production frontend for Labbi: homepage, login, reusable UI, Redux state, and support on backend product integration.",
      tech: ["React", "Redux", "SASS", "Material UI"],
      features: [
        "Homepage and authentication UI",
        "Reusable Material UI components",
        "Global state with Redux",
        "Frontend work connected to product/backend flows",
      ],
      url: "",
      github: "",
      image: "/projects/labbi.gif",
    },
  {
      id: "ai-leads",
      name: "AI Lead Qualification System",
      tagline: "WhatsApp leads qualified with AI and stored automatically.",
      problem:
        "Incoming WhatsApp messages mix real demand with noise. Qualifying each lead by hand is slow and easy to miss.",
      solution:
        "I designed an automation pipeline that reads the message, classifies intent with AI, stores qualified leads, and notifies the team.",
      tech: ["n8n", "WhatsApp", "Gemini", "Google Sheets", "Webhooks", "APIs"],
      features: [
        "WhatsApp message intake",
        "AI intent analysis with Gemini",
        "Lead qualification rules",
        "Data storage and team notification",
      ],
      url: "",
      github: "",
      image: "",
      flow: [
        "WhatsApp message",
        "AI intent analysis",
        "Lead qualification",
        "Data storage",
        "Notification / CRM",
      ],
    },
    {
      id: "tastygo",
      name: "TastyGo",
      tagline: "Food ordering platform with a real-time kitchen board.",
      problem:
        "Restaurants need a single place to take orders, manage the menu, and keep the kitchen in sync without switching tools.",
      solution:
        "I built a full-stack ordering product: customers place orders, the kitchen receives them on a live board, and staff can manage products from one interface.",
      tech: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
        "ShadCN",
        "Context",
      ],
      features: [
        "Order intake and kitchen dashboard",
        "Real-time order management",
        "Product catalog management",
        "Responsive UI with Tailwind and ShadCN",
      ],
      url: "https://food-app-llcc.vercel.app/",
      github: "",
      image: "/projects/tastygo.png",
    },
   
  
  ],
  projects: [
    {
      name: "Dashboard",
      description: "Admin dashboard with charts and server-driven data views.",
      problem: "Teams need a clear place to monitor data without a heavy admin stack.",
      solution:
        "I built a dashboard with Next.js server components, Node.js and MongoDB Atlas, using Recharts for visualization.",
      url: "https://dashboard-8liz9zkef-nicolas355.vercel.app/dashboard",
      github: "",
      image: "/projects/dashboard_cap.png",
      tech: ["Next.js", "CSS Modules", "Node.js", "MongoDB Atlas", "Recharts"],
      features: [
        "Server components",
        "Server Actions",
        "Chart visualizations",
      ],
    },
    {
      name: "HappyPup",
      description: "E-commerce experience for pet products.",
      problem: "Pet product shops need a simple, modern catalog and checkout path.",
      solution:
        "I built a React storefront with TypeScript and Tailwind CSS for a focused shopping experience.",
      url: "https://happypup.vercel.app/",
      github: "",
      image:
        "https://res.cloudinary.com/dy7qlqell/image/upload/v1727572295/scrnli_28_9_2024_10-08-43_kouh2y.png",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      features: ["Product catalog", "Responsive storefront"],
    },
    {
      name: "Crunchyroll Clone",
      description: "Streaming-style interface for browsing multimedia content.",
      problem: "Media catalogs need a fast, familiar browsing UI.",
      solution:
        "I built a clone focused on a fluid viewing experience with Next.js, TypeScript and ShadCN.",
      url: "https://clon-crunchy.vercel.app/",
      github: "",
      image: "/projects/clon_Crunchy.png",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN"],
      features: ["Content browsing UI", "Responsive layout"],
    },
    {
      name: "Ecommerce",
      description: "Product store with filters and a live shopping cart.",
      problem: "Users need to find products quickly and keep the cart in sync.",
      solution:
        "I built a Next.js store with Tailwind, Context API, category filters, and real-time cart updates.",
      url: "https://ecomerce-next-js-ten.vercel.app/",
      github: "",
      image: "/projects/eccomerce-nextjs.png",
      tech: ["Next.js", "Tailwind CSS", "Context API"],
      features: [
        "Category filters",
        "Add, remove and review cart items",
        "Responsive product listing",
      ],
    },
    {
      name: "Recipe Finder",
      description: "Search, explore and save recipes from a public API.",
      problem: "Recipe discovery is messy when results are not easy to save.",
      solution:
        "I built a JavaScript app that fetches recipes from an API and stores favorites in LocalStorage.",
      url: "https://ricepefinder.netlify.app/",
      github: "",
      image: "/projects/imagen_api_javascript.png",
      tech: ["JavaScript", "Bootstrap", "LocalStorage"],
      features: ["Recipe search", "Favorites saved locally"],
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      category: "UI",
      items: ["Tailwind CSS", "Material UI", "SASS", "Bootstrap"],
    },
    {
      category: "State & Data",
      items: ["Redux Toolkit", "Context API", "React Query"],
    },
    {
      category: "Backend & Database",
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      category: "Automation & AI",
      items: ["n8n", "Gemini", "Webhooks", "API integrations"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Docker", "Jira", "Figma"],
    },
  ],
  services: [
    {
      title: "Web Applications",
      description:
        "Modern React and Next.js applications focused on performance and usability.",
    },
    {
      title: "Dashboards",
      description:
        "Admin panels, analytics interfaces and business management systems.",
    },
    {
      title: "E-commerce",
      description:
        "Product catalogs, shopping flows and management systems.",
    },
    {
      title: "Automation & AI",
      description:
        "API integrations, automated workflows and AI-powered business processes.",
    },
  ],
}
