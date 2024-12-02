
import TypingEffect from "@/lib/typing-effect"
import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'

export default function InfoSection() {
  return (
    <section className="w-full h-screenpy-12 md:py-24 lg:py-32 flex items-center bg-neutral-50 dark:bg-gray-950">
      <div className="container grid items-center my-auto lg:grid-cols-2 gap-3">
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
          className="space-y-4 lg:mt-0 md:mt-24  lg:w-fit sm:w-[35rem] w-full mx-auto">
          <h1 className="lg:leading-tighter text-3xl mb-3 font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-cyan-600 dark:text-cyan-300" >
            <TypingEffect name={"Padmanabh Malwade"} />
          </h1>
          <p className="mx-auto   text-gray-500 md:text-xl dark:text-gray-400">
            As a graduate, I am eager to apply my technical skills and problem-solving abilities to create
            innovative solutions. I am passionate about staying up-to-date with the latest technologies and am
            excited to contribute to the growth of your organization.
          </p>
          <motion.div className="w-fit" whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.7,
              ease: "easeInOut",
              type: "spring",
              bounce: 0.5
            }
          }}>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-cyan-600 px-8 text-sm font-medium text-cyan-50 shadow transition-colors hover:bg-cyan-700/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-cyan-50 dark:text-cyan-900 dark:hover:bg-cyan-50/90 dark:focus-visible:ring-cyan-300"
              href="/PadmanabhMalwadeResume.pdf"
            >
              Download Resume
            </Link>
          </motion.div>
        </motion.div>
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
          <Image
            alt="Hero Section Image"
            draggable="false"
            className="mx-auto aspect-square object-contain overflow-hidden rounded-md  object-center lg:order-last"
            height="550"
            src="/Images/pic.jpg"
            loading = "lazy"
            width="550"
          />
        </motion.div>
      </div>
    </section>
  )
}
