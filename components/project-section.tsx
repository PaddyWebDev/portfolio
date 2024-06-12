import React from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import useProjectList from '@/lib/project-list'



export default function ProjectSection() {

    return (
        <section className="w-full h-fit  py-12 md:py-24 lg:py-32 bg-neutral-50 dark:bg-gray-950" id='projects'>
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
                        <h4 className="inline-block rounded-lg text-center bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700 dark:text-gray-50">
                            Recent Projects
                        </h4>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-cyan-600 dark:text-cyan-300">
                            Showcasing My Work
                        </h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
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
    return (

        projectList.map((project, id: number) => (
            <motion.div
                initial={project.initial}
                whileInView={project.whileInView}
                key={id} className=" bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md transition-all hover:scale-[1.02] hover:shadow-lg">
                <div className="p-6">
                    <div className="flex items-center mb-2">
                        <div className="bg-cyan-600 rounded-full p-2 mr-2">
                            <project.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-cyan-900 dark:text-cyan-50">{project.name}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
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
                        <Link

                            className="inline-flex items-center justify-center px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
                            target="_blank" rel="noopener noreferrer"
                            href={project.codeLink}
                        >
                            View Code
                        </Link>
                        <Link
                            className="inline-flex items-center justify-center px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
                            target="_blank" rel="noopener noreferrer"
                            href={project.liveLink}
                        >
                            Live Demo
                        </Link>
                    </div>
                </div>
            </motion.div>
        ))

    )

}