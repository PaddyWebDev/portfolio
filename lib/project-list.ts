import { MotionProps } from "framer-motion";
import {
  Activity,
  ClipboardCheck,
  CookingPot,
  LucideIcon,
  MessageSquareMore,
  Newspaper,
} from "lucide-react";

type ProjectList = {
  icon: LucideIcon;
  name: string;
  description: string;
  techStack: string[];
  codeLink: string;
  liveLink: string;
  initial?: MotionProps["initial"];
  whileInView?: MotionProps["whileInView"];
  whileHover?: MotionProps["whileHover"];
};

export default function useProjectList(): ProjectList[] {
  return [
    {
      icon: ClipboardCheck,
      name: "Task Management System",
      description:
        " A powerful task management system to help you stay organized and productive.",
      techStack: ["NextJS", "MongoDB", "Tailwind CSS"],
      codeLink: "https://github.com/PaddyWebDev/TaskSwift",
      liveLink: "#",
      initial: {
        opacity: 0,
      },
      whileInView: {
        opacity: 100,
        transition: {
          duration: 1.5,
          ease: "easeInOut",
        },
      },
    },
    {
      icon: MessageSquareMore,
      name: "Sky Chat",
      description:
        "  A modern and feature-rich chat application to connect with your friends and colleagues.",
      techStack: ["NextJS", "MongoDB", "Tailwind CSS", "PusherJS"],
      codeLink: "https://github.com/PaddyWebDev/skychat-app",
      liveLink: "#",
      initial: {
        opacity: 0,
      },
      whileInView: {
        opacity: 100,
        transition: {
          duration: 1.5,
          ease: "easeInOut",
        },
      },
    },
    {
      icon: CookingPot,
      name: "Recipe Searching App",
      description:
        "A comprehensive recipe searching app to help you find the perfect dish for any occasion.",
      techStack: ["NextJS", "Spooncular API", "Tailwind CSS"],
      codeLink: "https://github.com/PaddyWebDev/Recipe-App",
      liveLink: "#",
      initial: {
        opacity: 0,
      },
      whileInView: {
        opacity: 100,
        transition: {
          duration: 1.5,
          ease: "easeInOut",
        },
      },
    },
    {
      icon: Newspaper,
      name: "News Website",
      description:
        " A news website that provides the latest updates and information on current events.",

      techStack: ["NextJS", "Tailwind CSS", "News API"],
      codeLink: "https://github.com/PaddyWebDev/News-Website",
      liveLink: "#",
      initial: {
        opacity: 0,
      },
      whileInView: {
        opacity: 100,
        transition: {
          duration: 1.5,
          ease: "easeInOut",
        },
      },
    },
    {
      icon: Activity,
      name: "Project 5",
      description: " A brief description for project 5",
      techStack: ["React", "TypeScript", "Node.js"],
      codeLink: "#",
      liveLink: "#",
      initial: {
        opacity: 0,
      },
      whileInView: {
        opacity: 100,
        transition: {
          duration: 1.5,
          ease: "easeInOut",
        },
      },
    },
    {
      icon: Activity,
      name: "Project 6",
      description: "A brief description for project 6",
      techStack: ["React", "TypeScript", "Node.js"],
      codeLink: "#",
      liveLink: "#",
      initial: {
        opacity: 0,
      },
      whileInView: {
        opacity: 100,
        transition: {
          duration: 1.5,
          ease: "easeInOut",
        },
      },
    },
  ];
}
