import Navbar from './components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import HeadSection from './components/HeadSection'
import Footer from './components/Footer'
import Project from './sections/Project'
import About from './sections/About'
import Contact from './sections/Contact'

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <HeadSection />

        <section className='min-h-screen bg-slate-100 dark:bg-[#000001]  px-3 flex flex-col '  id="home">
          <div className='md:flex-nowrap flex-wrap flex items-center justify-center gap-7 my-auto '>
            <div className=' ' data-aos="fade-down">
              <h1 className='text-4xl mb-1'>Padmanabh Malwade</h1>
              <p className='mb-2'>{"I'm "} a web Developer {"here's"} you can find information about me and my work</p>
              <Link href={"/Images/Padmanabh_Malwade_Resume.pdf"} type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Download Resume</Link>
            </div>
            <div className=' bg-purple-600 p-10 rounded-[59%_41%_72%_28%_/_50%_57%_43%_50%] ' data-aos="fade-down">
              <Image draggable="false" className=' rounded-full ' src={"/Images/pic.jpg"} width={420} height={220} alt='profilepic' />
            </div>
          </div>

         
        </section>

        <About />

        <Project />

        <Contact />

        <Footer />
      </main>
    </>
  )
}
