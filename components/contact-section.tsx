import Link from "next/link"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/icons"
import { motion } from "framer-motion"
import { Instagram } from "lucide-react"
import ContactForm from "./contact-form"

export default function ContactSection() {



    return (
        <section className="w-full h-screen bg-neutral-100 dark:bg-neutral-950 flex items-center   " id="contact">
            <div className="container grid items-center justify-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-20 ">
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -150
                    }}
                    whileInView={{
                        opacity: 100,
                        x: 0,
                        transition: {
                            duration: 0.8,
                            ease: "easeInOut"
                        }
                    }}
                    className="space-y-4">
                    <div className="flex items-center gap-3">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-cyan-600 dark:text-cyan-400">Get in Touch</h2>
                    </div>
                    <p className="max-w-[600px] text-neutral    -500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral   -400">
                        {`Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you as soon
                        as possible.`}
                    </p>
                    <div className="flex items-center space-x-4">
                        <motion.div
                            whileHover={{
                                scale: 1.1
                            }}
                        >
                            <Link
                                className="text-cyan-600 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-50"
                                href="https://www.linkedin.com/in/paddywebdev/"
                                target="_blank"
                            >
                                <LinkedinIcon className="h-6 w-6" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{
                                scale: 1.1
                            }}
                        >
                            <Link
                                className="text-cyan-600 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-50"
                                href="https://www.instagram.com/qhf_padmanabh_gcek"
                                target="_blank"
                            >
                                <Instagram className="h-6 w-6" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{
                                scale: 1.1
                            }}
                        >
                            <Link
                                className="text-cyan-600 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-50"
                                href="https://github.com/PaddyWebDev"
                                target="_blank"
                            >
                                <GithubIcon className="h-6 w-6" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        x: 150
                    }}
                    whileInView={{
                        opacity: 100,
                        x: 0,
                        transition: {
                            duration: 0.8,
                            ease: "easeInOut"
                        }
                    }}
                >
                    <ContactForm />
                </motion.div>
            </div>
        </section >
    )
}


