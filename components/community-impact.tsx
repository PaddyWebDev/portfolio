import React from 'react'
import { Badge } from './ui/badge'
import { Card, CardContent, CardHeader } from './ui/card'
import { Award, GraduationCap, Users } from 'lucide-react'
import { motion } from "framer-motion"




type CardProps = {
    title: string;
    description: string;
}

const cardArray: Array<CardProps> = [
    {
        title: "2,400+ People Reached",
        description: "Students and community members educated about cybersecurity awareness"
    },
    {
        title: "12 Institutions Impacted",
        description: "Conducted cybersecurity programs across educational institutions."
    },
    {
        title: "5 Awareness Drives",
        description: "Comprehensive cybersecurity awareness campaigns organized and executed"
    },
    {
        title: "Featured in Media",
        description: "Coverage of cybersecurity awareness work in 4 newspapers."
    },

]

export default function CommunityImpact() {

    return (
        <section className='w-full md:h-dvh md:p-0 p-3 flex dark:bg-neutral-900 flex-col items-center justify-center'>
            <motion.div initial={{
                opacity: 0,
                x: 200,
            }}
                whileInView={{
                    opacity: 100,
                    x: 0,
                    transition: {
                        duration: 1,
                        ease: "easeInOut"
                    }
                }}
                className='mb-8'>
                <div className='max-w-4xl text-center md:mt-0 mt-10'>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-cyan-600 dark:text-cyan-300">
                        Cyber Warrior Impact</h1>
                    <p className='text-xl font-extralight mb-3'>Using technology to drive positive social change through cybersecurity education,
                        community awareness programs, and digital literacy initiatives that protect and empower people.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    <div className="flex items-center space-x-2 dark:bg-neutral-950 shadow-md    dark:border-neutral-900  rounded-lg px-4 py-2 border border-border">
                        <Users size={20} className="text-cyan-600" />
                        <span className="text-sm font-medium text-text-primary">2,400+ People Reached</span>
                    </div>
                    <div className="flex items-center space-x-2 dark:bg-neutral-950 shadow-md    dark:border-neutral-900  rounded-lg px-4 py-2 border border-border">
                        <Award size={20} className="text-cyan-600" />
                        <span className="text-sm font-medium text-text-primary">Multiple Awards</span>
                    </div>
                    <div className="flex items-center space-x-2 dark:bg-neutral-950 shadow-md    dark:border-neutral-900  rounded-lg px-4 py-2 border border-border">
                        <GraduationCap size={20} className="text-cyan-600" />
                        <span className="text-sm font-medium text-text-primary">12 Schools & Colleges Impacted</span>
                    </div>
                </div>
            </motion.div>

            <motion.div initial={{
                opacity: 0,
                y: 150
            }}
                whileInView={{
                    opacity: 100,
                    y: 0,
                    transition: {
                        duration: 1,
                        ease: "easeInOut"
                    }
                }}
                className='grid xl:grid-cols-4 sm:grid-cols-2    gap-7 md:mb-0 mb-10'>

                <Cards />

            </motion.div>
        </section>
    )
}



function Cards() {
    return cardArray.map((card, index: number) => (
        <motion.div
            key={index} whileHover={{
                scale: 1.1,
                transition: {
                    duration: 0.35,
                    ease: "easeIn"
                }
            }}>
            <Card className='w-72 shadow-lg' >
                <CardHeader className='text-xl text-center border-b py-2.5 mb-2 dark:border-neutral-800 font-semibold text-cyan-900 dark:text-cyan-50'>
                    {card.title}
                </CardHeader>
                <CardContent className='text-balance'>
                    {card.description}
                </CardContent>
            </Card>
        </motion.div>
    ))
}