export const profile = {
  name: 'Vansh Mirani',
  role: 'Software Developer & Web Development Enthusiast',
  location: 'Ahmedabad, Gujarat, India',
  phone: '+91 9725500272',
  availability: 'Open to internships, training roles, and junior developer opportunities',
  summary:
    'I am a Computer Science Engineering student who enjoys building useful web apps, clean dashboards, and interactive interfaces with React, Node.js, and modern frontend tools.',
  email: 'miranivansh05@gmail.com',
  github: 'https://github.com/VanshMirani',
  linkedin: 'https://www.linkedin.com/in/vansh-mirani/',
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Training', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '2027', label: 'B.Tech CSE Graduation' },
  { value: '4+', label: 'Featured Projects' },
  { value: '5', label: 'Programming Languages' },
];

export const skillGroups = [
  {
    title: 'Languages',
    note: 'The languages I use for problem solving, academic work, and project development.',
    skills: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
  },
  {
    title: 'Frontend',
    note: 'My main focus area: building responsive, readable, and polished user interfaces.',
    skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    note: 'Tools I use to connect frontend screens with APIs, routes, and server logic.',
    skills: ['Node.js', 'Express.js'],
  },
  {
    title: 'Database',
    note: 'Database systems I have used while learning and building full-stack applications.',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Tools',
    note: 'Everyday development tools I use to write, test, version, and debug projects.',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
];

export const projects = [
  {
    title: 'AssetFlow',
    type: 'Odoo 2026 Hackathon Project',
    description:
      'A hackathon project built during Odoo 2026 to simplify asset tracking and asset management workflows through an organized, practical web-based system.',
    contributions: [
      'Asset tracking and management workflow',
      'Clean dashboard-style user interface',
      'Organized asset records and status handling',
      'Built under hackathon timelines with a practical problem-solving approach',
    ],
    tags: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    href: 'https://github.com/VanshMirani/odoo-hackathon-26',
  },
  {
    title: 'Event Flow',
    type: 'Event Management Platform',
    description:
      'A web-based event management platform focused on organizing event details, improving event flow, and creating a clean user experience for event-related workflows.',
    contributions: [
      'Event-focused interface and workflow',
      'Clean and responsive frontend design',
      'Organized event details and user flow',
      'Modern React-based project structure',
    ],
    tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'Vite'],
    href: 'https://github.com/VanshMirani/event-management-platform',
  },
  {
    title: 'CoreInventory',
    type: 'Hackathon Full-Stack Platform',
    description:
      'A full-stack inventory management platform developed during a hackathon to manage products, stock levels, and inventory records through a centralized dashboard.',
    contributions: [
      'Dashboard design and frontend development',
      'Product and stock management workflow',
      'Backend integration with inventory data',
      'Built collaboratively as a hackathon team project',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    href: 'https://github.com/VanshMirani/CoreInventory',
  },
  {
    title: 'Expense Tracker',
    type: 'Full-Stack Web App',
    description:
      'A full-stack expense tracking application for recording, organizing, and managing daily expenses with a clean dashboard and simple user flow.',
    contributions: [
      'Expense entry and listing workflow',
      'Expense records for day-to-day tracking',
      'Full-stack structure with backend integration',
      'Clean and understandable user interface',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    href: 'https://github.com/VanshMirani/Expense-Tracker',
  },
];

export const archivedProjects = [
  {
    title: 'Birthday Website',
    type: 'Interactive Experience',
    description:
      'I created a personalized celebration website with countdowns, animated screens, messages, flashbacks, and a fun reveal experience.',
    contributions: [
      'Created animated countdown and celebration screens',
      'Added personalized messages and flashback moments',
      'Built responsive layouts for different devices',
      'Used interaction and timing to make the page feel special',
    ],
    tags: ['JavaScript', 'Animations', 'Creative UI', 'Responsive'],
    href: 'https://github.com/VanshMirani/birthday-website',
  },
  {
    title: 'Quiz Application',
    type: 'Java Application',
    description:
      'I developed a Java quiz application with timed questions and score calculation to practice programming logic and user flow.',
    contributions: [
      'Implemented timer-based quiz behavior',
      'Added score calculation logic',
      'Structured the question flow',
      'Practiced Java fundamentals through a usable mini project',
    ],
    tags: ['Java', 'Quiz', 'Logic', 'Desktop App'],
    href: 'https://github.com/VanshMirani/QuizApplication',
  },
];

export const certifications = [
  'Innovate with Full-Stack: A Comprehensive Journey from Frontend to Backend',
  'Artificial Intelligence Internship',
];

export const experience = [
  {
    title: 'React JS Internship Program',
    organization: 'Sparks To Ideas',
    period: 'Training Experience',
    description:
      'I strengthened my React fundamentals, practiced component-based development, and worked on frontend patterns that helped me build cleaner project interfaces.',
    focus: ['React Components', 'Frontend Practice', 'UI Implementation'],
  },
];

export const education = [
  {
    period: '2023 - 2027',
    degree: 'B.Tech Computer Science Engineering',
    institution: 'Indus University',
    location: 'Ahmedabad, Gujarat',
    description:
      'I am building my foundation in programming, data structures, databases, software engineering, and full-stack web development.',
  },
];

export const contactLinks = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Call', href: `tel:${profile.phone.replace(/\s/g, '')}` },
];
