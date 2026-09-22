export type Project = {
  title: string;
  description: string;
  technologies: string[];
  role?: string;
  contribution?: string;
  /** Leave empty to hide the button. */
  liveDemo: string;
  /** Leave empty to hide the button. */
  github: string;
  /** Label override for the live link, e.g. "Current Website". */
  liveLabel?: string;
};

const projects: Project[] = [
  {
    title: "Synkra Blog Details",
    description:
      "A responsive Blog Details page developed with React as part of a team project.",
    technologies: ["React", "JavaScript", "CSS", "Git", "GitHub"],
    role: "Front-End Developer",
    contribution:
      "Developed the Blog Details page and worked on responsive implementation.",
    liveDemo: "",
    github: "",
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website built to showcase my Front-End development skills, projects, and learning journey.",
    technologies: ["React", "JavaScript", "CSS"],
    liveDemo: "/",
    liveLabel: "Current Website",
    github: "",
  },
  {
    title: "Café / Restaurant Website",
    description:
      "A responsive website for displaying menu items, categories, and promotional content.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveDemo: "",
    github: "",
  },
];

export default projects;
