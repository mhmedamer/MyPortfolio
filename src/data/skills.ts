export type SkillGroup = {
  category: string;
  note?: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Front-End",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Web Design"],
  },
  {
    category: "WordPress Development",
    note: "Hands-on experience building and maintaining WordPress websites.",
    items: [
      "WordPress",
      "Elementor",
      "Custom Themes",
      "Website Maintenance",
      "Database Management",
    ],
  },
  {
    category: "Development Experience",
    note: "Technologies and practices I have worked with.",
    items: ["SQL", "Git", "GitHub", "Deployment", "Figma to Code", "Problem Solving"],
  },
];

export const experienceAreas = [
  {
    title: "SQL",
    status: "Hands-on Experience",
    description:
      "Worked with databases and SQL concepts including tables, relationships, queries, and content management.",
    why: "To manage and understand the data behind interactive websites.",
  },
  {
    title: "Algorithms & Data Structures",
    status: "Working Knowledge",
    description:
      "Applied core structures and algorithmic thinking through development tasks and coding exercises.",
    why: "To write cleaner, more efficient code and prepare for technical interviews.",
  },
  {
    title: "Problem Solving",
    status: "Practical Experience",
    description: "Breaking problems down and solving coding challenges consistently.",
    why: "To build the reasoning habits that good development work depends on.",
  },
];

export const capabilities = [
  "Responsive Websites",
  "Landing Pages",
  "React Interfaces",
  "Front-End UI Development",
  "Figma to Front-End Implementation",
  "WordPress Websites",
  "Elementor Websites",
  "Custom WordPress Themes",
  "WordPress Maintenance",
];

export const journey = [
  {
    year: "2023",
    title: "Graduated as a Surveying Engineer",
    description:
      "Finished my engineering studies, where I built the analytical and detail-oriented mindset I use today.",
  },
  {
    year: "2024",
    title: "Started programing career",
    description:
      "Learned Algorithmes, Database and SQl servers moreover JavaScript fundamentals to organize and attach the backend side with frontend aspect.",
  },
  {
    year: "2025",
    title: "Front-End Development",
    description:
      "Transitioned into Front-End Development,combining strong programming fundamentals with HTML, CSS, JavaScript and React to build responsive and user-focused web experiences.",
  },

  {
    year: "2025",
    title: "WordPress Development & Maintenance",
    description:
      "Developed and maintained WordPress websites, handling themes, databases, plugins, updates, troubleshooting, and overall website maintenance.",
  },

  {
    year: "2025",
    title: "React, Git & GitHub",
    description:
      "Moved to component-based development with React and adopted Git and GitHub for version control.",
  },

  {
    year: "2026",
    title: "Team-based React Project",
    description:
      "Worked with a team on a React project, developing Dark & light mood moreover a Blog Details page and its authentication & authorization related to registration forms in addition to responsive behaviour.",
  },
  {
    year: "Now",
    title: "Front-End & WordPress Development",
    description:
      "Building and maintaining interactive WordPress websites with Elementor, custom themes, databases, and responsive front-end development.",
  },
];
