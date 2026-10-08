export const profile = {
  name: "Vansh Mirani",
  role: "Software Developer & Web Development Enthusiast",
  location: "Ahmedabad, Gujarat, India",
  phone: "+91 9725500272",
  availability:
    "Open to internships, training roles, and junior developer opportunities",
  summary:
    "I am a Computer Science Engineering student who enjoys turning everyday problems into useful web apps, clean dashboards, and interactive experiences.",
  email: "miranivansh05@gmail.com",
  github: "https://github.com/VanshMirani",
  linkedin: "https://www.linkedin.com/in/vansh-mirani/",
};

// All project views use this list. Keep IDs stable and live links null until verified.
export const projects = [
  {
    id: "smarttransit",
    title: "SmartTransit",
    type: "Campus Transport Platform",
    category: "Full-stack",
    featured: true,
    summary: "A clearer way to follow the campus commute.",
    description:
      "A collaborative campus bus tracking and transport management platform for Indus University, with dedicated experiences for students, drivers, conductors, and administrators.",
    contributions: [
      "Collaborative development of a campus transport platform",
      "Bus tracking, route assignments, and seat availability",
      "Dedicated transport workflows for four user roles",
      "React interface connected to a Node.js API and MongoDB",
    ],
    tags: ["React.js", "JavaScript", "Node.js", "MongoDB", "Leaflet"],
    github: "https://github.com/VanshMirani/SmartTransit",
    live: "https://smart-transit-lyart.vercel.app/",
  },
  {
    id: "event-flow",
    title: "Event Flow",
    type: "Event Management Platform",
    category: "Full-stack",
    featured: true,
    summary: "From finding an event to checking in.",
    description:
      "A full-stack event platform for browsing events, booking tickets, and managing check-in, with Razorpay payments and QR-based ticket verification.",
    contributions: [
      "Event browsing and ticket booking workflows",
      "Razorpay checkout and backend payment verification",
      "QR tickets and administrator check-in",
      "Event, booking, and payment management interfaces",
    ],
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Razorpay",
    ],
    github: "https://github.com/VanshMirani/event-management-platform",
    live: "https://eventflow-event-management.vercel.app/",
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    type: "Full-Stack Web App",
    category: "Full-stack",
    featured: true,
    summary: "Everyday spending, easier to keep track of.",
    description:
      "A full-stack application for recording, organizing, and managing daily expenses through a straightforward dashboard.",
    contributions: [
      "Expense entry and listing workflow",
      "Organized records for day-to-day tracking",
      "Frontend and backend integration",
      "Clear dashboard and navigation",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/VanshMirani/Expense-Tracker",
    live: null,
  },
  {
    id: "assetflow",
    title: "AssetFlow",
    type: "Odoo 2026 Hackathon Project",
    category: "Hackathon",
    featured: false,
    summary: "A practical workspace for tracking assets.",
    description:
      "Built during the Odoo 2026 hackathon to organize asset records, track their status, and simplify asset management workflows.",
    contributions: [
      "Asset tracking and management workflow",
      "Dashboard-style user interface",
      "Organized asset records and status handling",
      "Development under hackathon timelines",
    ],
    tags: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/VanshMirani/odoo-hackathon-26",
    live: null,
  },
  {
    id: "coreinventory",
    title: "CoreInventory",
    type: "Hackathon Full-Stack Platform",
    category: "Hackathon",
    featured: false,
    summary: "Products, stock, and records in one place.",
    description:
      "A collaborative hackathon project for managing products, stock levels, and inventory records through a centralized dashboard.",
    contributions: [
      "Dashboard design and frontend development",
      "Product and stock management workflow",
      "Backend integration with inventory data",
      "Collaborative development within a hackathon team",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/VanshMirani/CoreInventory",
    live: null,
  },
  {
    id: "quiz",
    title: "Quiz Application",
    type: "Java Application",
    category: "Java",
    featured: false,
    summary: "A timed challenge in questions and answers.",
    description:
      "A Java quiz application with timed questions and score calculation, built to practice programming logic and user flow.",
    contributions: [
      "Timer-based quiz behavior",
      "Score calculation logic",
      "Structured question flow",
      "Java fundamentals applied in a usable project",
    ],
    tags: ["Java", "Quiz", "Logic", "Desktop App"],
    github: "https://github.com/VanshMirani/QuizApplication",
    live: null,
  },
];

export const skillGroups = [
  {
    title: "Languages",
    note: "For problem solving, academic work, and building projects.",
    skills: ["C", "C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "Frontend",
    note: "Responsive interfaces with a focus on clarity and interaction.",
    skills: ["HTML", "CSS", "React.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    note: "APIs, routes, and server logic that connect the experience.",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    note: "Working with data in full-stack applications.",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    note: "The tools I use to write, test, version, and debug.",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

export const certifications = [
  "Innovate with Full-Stack: A Comprehensive Journey from Frontend to Backend",
  "Artificial Intelligence Internship",
];

export const experience = [
  {
    title: "React JS Internship Program",
    organization: "Sparks To Ideas",
    period: "Training Experience",
    description:
      "Strengthened my React fundamentals through component-based development, frontend practice, and project interface implementation.",
    focus: ["React Components", "Frontend Practice", "UI Implementation"],
  },
];

export const education = [
  {
    period: "2023 - 2027",
    degree: "B.Tech Computer Science Engineering",
    institution: "Indus University",
    location: "Ahmedabad, Gujarat",
    description:
      "Building my foundation in programming, data structures, databases, software engineering, and full-stack web development.",
  },
];
