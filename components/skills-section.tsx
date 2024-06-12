import React from 'react'

import { motion } from "framer-motion"
import useSkillList from '@/lib/skill-list'



export default function SkillsSection() {

    return (
        <section className="w-full h-screen bg-gray-100 dark:bg-gray-800 flex items-center   " id="skills">
            <div className="container space-y-12 px-4 md:px-6 ">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -150
                    }}

                    whileInView={{
                        opacity: 100,
                        y: 0,
                        transition: {
                            duration: 0.8,
                            ease: "easeInOut"
                        }
                    }}
                    className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700 dark:text-gray-50">
                            Technical Skills
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-cyan-600 dark:text-cyan-300">
                            Expertise at Your Fingertips
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            As a fresh graduate, I have a strong foundation in various programming languages, frameworks, and
                            tools. I am eager to apply my skills to create innovative solutions and contribute to the success of
                            your organization.
                        </p>
                    </div>
                </motion.div>
                <div className="mx-auto grid items-start gap-8 w-full sm:grid-cols-2  md:gap-12 lg:max-w-5xl   ">
                <RenderSkillSet />
                </div>
            </div>
        </section>
    )
}


function RenderSkillSet() {
    const skillList = useSkillList()
    return (
        skillList.map((skill, id: number) => (
            <motion.div
                initial={skill.initial}
                whileInView={skill.whileInView}
                whileHover={skill.whileHover}
                key={id}
                className=" bg-gray-50 dark:bg-gray-900 p-3 rounded shadow-md  "
            >
                <h3 className="text-lg font-bold text-cyan-800 dark:text-cyan-300">{skill.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{skill.description}</p>

            </motion.div>
        ))
    )
}