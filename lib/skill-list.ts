import { MotionProps } from "framer-motion";

type SkillSectionType = {
  title: string;
  description: string;
  initial: MotionProps["initial"];
  whileInView: MotionProps["whileInView"];
  whileHover?: MotionProps["whileHover"];
};

export default function useSkillList(): SkillSectionType[] {
  return [
    {
      title: "Programming Languages",
      description: "JavaScript, Typescript, Java, PHP",
      initial: {
        opacity: 0,
        x: -150,
      },
      whileInView: {
        opacity: 100,
        x: 0,
        transition: {
          duration: 0.7,
          ease: "easeInOut",
        },
      },

      whileHover: {
        scale: 1.05,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      },
    },
    {
      title: "Frameworks & Libraries",
      description: "React, Next.js, Express, Node.js",
      initial: {
        opacity: 0,
        x: 150,
      },
      whileInView: {
        opacity: 100,
        x: 0,
        transition: {
          duration: 0.7,
          ease: "easeInOut",
        },
      },
      whileHover: {
        scale: 1.05,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      },
    },
    {
      title: "Databases",
      description: "SQL, MySQL, MongoDB",
      initial: {
        opacity: 0,
        x: -150,
      },
      whileInView: {
        opacity: 100,
        x: 0,
        transition: {
          duration: 0.7,
          ease: "easeInOut",
        },
      },
      whileHover: {
        scale: 1.05,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      },
    },
    {
      title: "Tools & Technologies",
      description:
        "Git, GitHub, Postman, API Integration (Including Third-party API)",
      initial: {
        opacity: 0,
        x: 150,
      },
      whileInView: {
        opacity: 100,
        x: 0,
        transition: {
          duration: 0.7,
          ease: "easeInOut",
        },
      },
      whileHover: {
        scale: 1.05,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      },
    },
  ];
}
