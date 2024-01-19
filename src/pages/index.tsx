"use client"
import Link from "next/link"
import HeadSection from "./components/HeadSection"
import Navbar from "./components/Navbar"
import Image from "next/image"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Project from "./sections/Project"
import Footer from "./components/Footer"
import { Toaster } from "react-hot-toast"
export default function Portfolio() {
  return (
    <main className=' select-none'>
      <Navbar />
      <HeadSection />
      <Toaster position="top-center" reverseOrder={false} />
      <section className='min-h-screen bg-slate-100 dark:bg-[#000001] flex flex-col ' id="home">
        <div className='md:flex-nowrap flex-wrap flex items-center justify-center gap-5 my-auto '>
          <div className=' ' data-aos="fade-down">
            <h1 className='text-4xl font-bold font-mono text-blue-500 mb-1'>Padmanabh Malwade</h1>
            <p className='mb-2 text-sm font-mono'>{"I'm "} a web Developer {"here's"} you can find information about me and my work</p>
            <Link href={"/Images/Padmanabh_Malwade_Resume.pdf"} type="button" className="text-white bg-gradient-to-r from-blue-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-2">Download Resume</Link>
          </div>
          <div className=' bg-blue-600 p-10 flex items-center justify-center rounded-[59%_41%_72%_28%_/_50%_57%_43%_50%] ' data-aos="fade-down">
            <Image draggable="false" className=' rounded-full ' src={"/Images/pic.jpg"} onContextMenu={(event) => event.preventDefault()} width={520} height={520} alt='SomeImage' />
          </div>
        </div>


      </section>

      <About />

      <Project />

      <Contact />

      <Footer />
    </main>
  )
}
