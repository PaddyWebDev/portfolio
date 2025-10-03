import React from 'react'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import useProjectList from '@/lib/project-list'
import { Button } from './ui/button'



export default function ProjectSection() {
    return (
        <section className="w-full h-fit  py-12 md:py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-950" id='projects'>
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -150,
                    }}
                    whileInView={{
                        opacity: 100,
                        y: 0,
                        transition: {
                            duration: 1.1,
                            ease: "easeInOut"
                        }
                    }}
                >
                    <div className="space-y-3  text-center">
                        <h4 className="inline-block rounded-lg text-center bg-neutral-200 px-3 py-1 text-sm dark:bg-neutral-700 dark:text-neutral-50">
                            Recent Projects
                        </h4>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-cyan-600 dark:text-cyan-300">
                            Showcasing My Work
                        </h2>
                        <p className="mx-auto max-w-[700px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
                            {`Check out some of the projects I've worked on during my time as a student. These showcase my
                            problem-solving skills, attention to detail, and ability to deliver high-quality results.`}
                        </p>
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 ">
                    <RenderProjectList />
                </div>
            </div>
        </section>
    )
}

function RenderProjectList() {
    const projectList = useProjectList()
    function redirectUser(url: string) {
        window.open(url, "_blank", "noopener,noreferrer");
    }

    return (

        projectList.map((project, id: number) => (
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 100,
                    transition: {
                        duration: 1.5,
                        ease: "easeInOut",
                    },
                }}
                key={id} className=" bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-md transition-all hover:scale-[1.02] hover:shadow-lg">
                <div className="p-6">
                    <div className="flex items-center mb-2">
                        <div className="bg-cyan-600 rounded-full p-2 mr-2">
                            <project.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-cyan-900 dark:text-cyan-50">{project.name}</h3>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                        {project.description}
                    </p>
                    <div className="flex items-center flex-wrap mb-4">
                        {
                            project.techStack.map((tech, id: number) => (
                                <Badge className="mr-2 my-1" key={id} variant="secondary">
                                    {tech}
                                </Badge>
                            ))
                        }

                    </div>
                    <div className="flex space-x-4">
                        <Button
                            variant={"portfolio"}
                            onClick={() => redirectUser(project.codeLink)}
                        >
                            View Code
                        </Button>
                        <Button
                            variant={"portfolio"}
                            disabled={project.isDeployed === false}
                            onClick={() => redirectUser(project.liveLink)}
                        >
                            Live Demo
                        </Button>
                    </div>
                </div>
            </motion.div>
        ))

    )

} 
