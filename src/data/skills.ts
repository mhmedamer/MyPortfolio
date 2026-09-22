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
    category: "Tools & Workflow",
    items: ["Git", "GitHub", "WordPress", "Deployment", "Figma to Code"],
  },
  {
    category: "Currently Learning",
    note: "Studying now — not claimed as professional expertise.",
    items: ["SQL", "Algorithms & Data Structures", "Problem Solving"],
  },
];

export const learningPaths = [
  {
    title: "SQL",
    status: "Currently Learning",
    description:
      "Relational database basics: tables, relationships, queries and joins.",
    why: "To understand how the data behind an interface is stored and requested.",
  },
  {
    title: "Algorithms & Data Structures",
    status: "Actively Studying",
    description:
      "Core structures and algorithmic thinking, practised through regular exercises.",
    why: "To write cleaner, more efficient code and prepare for technical interviews.",
  },
  {
    title: "Problem Solving",
    status: "Improving",
    description:
      "Breaking problems down and solving coding challenges consistently.",
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
    title: "Started Front-End Development",
    description:
      "Learned HTML, CSS and JavaScript fundamentals and built my first responsive pages.",
  },
  {
    year: "2024",
    title: "React, Git & GitHub",
    description:
      "Moved to component-based development with React and adopted Git and GitHub for version control.",
  },
  {
    year: "2025",
    title: "Team-based React Project",
    description:
      "Worked with a team on a React project, developing a Blog Details page and its responsive behaviour.",
  },
  {
    year: "Now",
    title: "SQL, Algorithms & Data Structures",
    description:
      "Continuing with responsive design practice while studying SQL and algorithms to strengthen my fundamentals.",
  },
];
