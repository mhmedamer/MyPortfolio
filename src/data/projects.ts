import synkraImage from "@/assets/projects/synkra-project.png.asset.json";
import portfolioImage from "@/assets/projects/portfolio-project.png.asset.json";
import cafeImage from "@/assets/projects/cafe-project.png.asset.json";

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
  image: string;
  imageAlt: string;
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
    liveDemo: "https://mhmedamer.github.io/Synkra-company/",
    github: "",
    image: synkraImage.url,
    imageAlt: "Synkra website sign-in page",
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website built to showcase my Front-End development skills, projects, and learning journey.",
    technologies: ["React", "JavaScript", "CSS"],
    liveDemo: "/",
    liveLabel: "Current Website",
    github: "",
    image: portfolioImage.url,
    imageAlt: "Muhammed Amer personal portfolio homepage",
  },
  {
    title: "Café / Restaurant Website",
    description:
      "A responsive website for displaying menu items, categories, and promotional content.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveDemo: "https://mhmedamer.github.io/bonashmawy/",
    github: "",
    image: cafeImage.url,
    imageAlt: "Bon Ashmawy café website homepage",
  },
];

export default projects;
