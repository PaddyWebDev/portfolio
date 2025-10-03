import { MotionProps } from "framer-motion";
import {
  Activity,
  ChefHat,
  ClipboardCheck,
  CookingPot,
  LucideIcon,
  MessageSquareMore,
  Newspaper,
  NotebookPen,
  Sprout,
} from "lucide-react";

type ProjectList = {
  icon: LucideIcon;
  name: string;
  description: string;
  techStack: string[];
  codeLink: string;
  liveLink: string;
  isDeployed: boolean;
};


export default function useProjectList(): ProjectList[] {
  return [
    {
      isDeployed: true,
      icon: ChefHat,
      name: "Recipe Recommendation System",
      description:
        "Built a personalized recipe recommender using cosine similarity with dynamic dietary and cultural filters.",
      techStack: [
        "Next.js",
        "Flask",
        "TypeScript",
        "Node.js",
        "Python",
        "PostgreSQL",
      ],
      codeLink: "https://github.com/PaddyWebDev/recipe_recommendation_frontend",
      liveLink: "https://flavourfinder.vercel.app/",
     
    },
    {
      isDeployed: true,
      icon: Sprout,
      name: "Crop Recommendation System",
      description:
        "Developed an ML-based crop recommender leveraging soil data, weather, and yield estimation with Random Forest Classifier",
      techStack: [
        "Next.js",
        "Flask",
        "TypeScript",
        "Node.js",
        "Python",
        "PostgreSQL",
      ],
      codeLink: "https://github.com/PaddyWebDev/crs_frontend",
      liveLink: "https://crs-frontend-sage.vercel.app/",
     
    },
    {
      isDeployed: true,
      icon: NotebookPen,
      name: "Notezzy",
      description:
        "Built a collaborative todo application with real-time updates using Next.js, Express.js, WebSockets, and Socket.IO.",
      techStack: ["NextJS", "ExpressJS", "PostgreSQL", "Tailwind CSS", "Socket.IO"],
      codeLink: "https://github.com/PaddyWebDev/todo-app-frontend",
      liveLink: "https://notezzy.vercel.app/",
     
    },
    {
      isDeployed: false,
      icon: MessageSquareMore,
      name: "Sky Chat",
      description:
        "  A modern and feature-rich chat application to connect with your friends and colleagues.",
      techStack: ["NextJS", "MongoDB", "Tailwind CSS", "PusherJS"],
      codeLink: "https://github.com/PaddyWebDev/skychat-app",
      liveLink: "#",
     
    },
    {
      isDeployed: false,
      icon: CookingPot,
      name: "Recipe Searching App",
      description:
        "A comprehensive recipe searching app to help you find the perfect dish for any occasion.",
      techStack: ["NextJS", "Spooncular API", "Tailwind CSS"],
      codeLink: "https://github.com/PaddyWebDev/Recipe-App",
      liveLink: "#",
     
    },
    {
      isDeployed: false,
      icon: ClipboardCheck,
      name: "Task Management System",
      description:
        " A powerful task management system to help you stay organized and productive.",
      techStack: ["NextJS", "MongoDB", "Tailwind CSS"],
      codeLink: "https://github.com/PaddyWebDev/TaskSwift",
      liveLink: "#",
     
    },
  ];
}
