export const personalInfo = {
  name: "Naresh",
  title: "Junior MERN Stack Developer | Full Stack Specialist",
  bio: "MERN stack developer specializing in responsive and scalable web applications with React, Node.js, and MongoDB. Strong focus on performance, usability, and maintainable code.",
  location: "Hyderabad, Telangana",
  email: "kumarn29346@gmail.com",
  phone: "+91 70954 77502",
  whatsapp: "917095477502",
  github: "https://github.com/Naresh-Jogu",
  linkedin: "https://www.linkedin.com/in/naresh-jogu-mern/",
  twitter: "https://twitter.com/yourhandle",
  resume: "/Naresh_Jogu_mern_resume.pdf",
};

export const skills = [
  {
    category: "Frontend",
    icon: "⚛️",
    items: [
      { name: "React", level: 85 },
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "HTML5 & CSS3", level: 85 },
      { name: "Responsive Design", level: 80 },
    ],
  },
  {
    category: "Backend",
    icon: "🟢",
    items: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "RESTful APIs", level: 80 },
    ],
  },
  {
    category: "Programming & DSA",
    icon: "⚡",
    items: [
      { name: "Data Structures & Algorithms", level: 70 },
      { name: "Problem Solving", level: 75 },
      { name: "LeetCode (200+ Solved)", level: 65 },
    ],
  },
  {
    category: "Tools",
    icon: "🛠️",
    items: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 85 },
      { name: "SQL", level: 70 },
    ],
  },
];

export const projects = [

  {
    id: 1,
    title: 'Nxt trenzds',
    description: 'A full-stack e-commerce application with authentication, product management, and payment integration.',
    image: null,
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe'],
    type: 'Full Stack', // MUST match filter
    github: 'https://github.com/Naresh-Jogu',
    live: 'https://yournxttrendzzs.ccbp.tech/login',
    featured: true,
    year: '2026',
    status: 'Completed',
    highlights: [
      'User authentication with JWT',
      'Add to cart and checkout system',
      'Admin dashboard for product management'
    ],
    stats: {
      stars: 20,
      forks: 5,
      users: '200+'
    },
  },

  {
    id: 2,
    title: 'DSA Visualizer & Tracker',
    description: 'An interactive tool to track problem-solving progress and visualize common algorithms. Built to solidify concepts and help other learners.',
    image: null,
    tags: ['React', 'Context API', 'LocalStorage'],
    type: 'Learning Projects',
    github: 'https://github.com',
    live: 'https://leetcode.com/accounts/login/',
    featured: true,
    year: '2025',
    status: 'In Progress',
    highlights: [
      'Interactive visualizations for sorting algorithms',
      'Personal progress dashboard with topic-wise stats',
      'Clean and accessible UI for better learning'
    ],
    stats: { stars: 10, forks: 2, users: '80+' },
  },

  {
    id: 3,
    title: 'MERN Task Flow',
    description: 'A full stack task management application built with the MERN stack. Features persistent storage using MongoDB and a clean React-based user interface.',
    image: null,
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    type: 'Full Stack',
    github: 'https://github.com',
    live: 'https://taskmanager.demo',
    featured: true,
    year: '2025',
    status: 'Completed',
    highlights: [
      'Implemented JWT (JSON Web Token) authentication',
      'Developed RESTful API endpoints',
      'Optimized React component rendering'
    ],
    stats: { stars: 15, forks: 4, users: '150+' },
  },



];

export const experience = [
  {
    type: "Career Transition",
    role: "Junior MERN Stack Developer",
    company: "Self-Project Intensive",
    period: "2024 - Present",
    description: "Intensive learning period focused on full stack development and professional software engineering principles.",
    highlights: [
      "Mastered the MERN stack through hands-on project building",
      "Consistently solving DSA problems on LeetCode to improve logic",
      "Focusing on clean code, documentation, and best practices",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js", "DSA"],
  },
  {
    type: "Project Showcase",
    role: "Full Stack Developer (Personal)",
    company: "Personal Projects",
    period: "2025",
    description: "Developing production-ready applications to bridge the gap between learning and professional work.",
    highlights: [
      "Building scalable backends and beautiful frontends",
      "Implementing user authentication and secure database handling",
      "Ensuring mobile responsiveness and cross-browser compatibility",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express"],
  }
];

export const stats = [
  { value: "5+", label: "MERN Apps Built" },
  { value: "200+", label: "DSA Problems Solved" },
  { value: "150+", label: "Github Contributions" },
];
