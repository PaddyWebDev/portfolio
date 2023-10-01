import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { ChefHat, Newspaper } from 'lucide-react'
import HeadSection from './components/HeadSection'
import emailjs from "@emailjs/browser";
import Footer from './components/Footer'


export default function Home() {
  const [FormData, SetFormData] = useState<string | any>({
    name: "",
    email: "",
    message: "",
  })


  const TextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    SetFormData({ ...FormData, [id]: value })
  }


  const sendMail = (templateParams: any) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        "jAB7HSWiJXvbmvSRA"
      )
      .then(
        (response: any) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error: any) => {
          console.log("FAILED...", error);
        }
      );
  };


  async function HandleFormData(event: React.FormEvent) {
    event.preventDefault();
    try {
      const templateParams = {
        name: FormData.name,
        message: FormData.message,
        email: FormData.email
      };
      sendMail(templateParams);
      SetFormData({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      console.log(error);
    }
  }




  return (
    <>
      <main className=''>
        <Navbar />
        <HeadSection />


        <section className='min-h-screen bg-slate-100 dark:bg-[#000001] gap-7 md:flex-nowrap flex-wrap flex items-center justify-center px-3' id="home">
          <div className=' '>
            <h1 className='text-4xl mb-1'>Hello {"I'm"} Padmanabh Malwade</h1>
            <p className='mb-2'>{"I'm "} a web Developer {"here's"} you can find information about me and my work</p>
            <Link href={"/Images/PadmanabhMalwadeResume.pdf"} type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Download CV</Link>
          </div>
          <div className=' bg-purple-600 p-10 rounded-[59%_41%_72%_28%_/_50%_57%_43%_50%] '>
            <Image draggable="false" className=' rounded-full ' src={"/Images/pic.jpg"} width={420} height={220} alt='profilepic' />
          </div>
        </section>


        <section className='min-h-screen flex flex-col items-center justify-center p-5 bg-slate-100 dark:bg-slate-950' id="about">
          <div className=' w-8/12 '>
            <h1 className='text-3xl mb-3 font-medium'>About me</h1>
            <h6>
              {`  Hey there I'm Padmanabh Malwade and I live in Karad, Maharashtra, India. As a budding web developer I absolutely love creating websites that not look great but also function smoothly. Although I'm relatively new, to this field my passion and dedication for learning really set me apart. When it comes to coding I have a foundation in Web Development & I always strive to write efficient code.
My ultimate goal is to collaborate with professionals who share the passion, for turning ideas into captivating online experiences. Lets connect and discover the possibilities of web development together! Feel free to reach out to me via email or connect with me on LinkedIn, GitHub or any other social media platform you prefer. Thank you much for checking out my portfolio! `}
            </h6>
          </div>
          <div className=' w-full flex items-center justify-evenly md:flex-nowrap flex-wrap gap-5 place-items-center'>

            <div className=' rounded-lg mt-5 p-5 dark:bg-slate-900'>
              <h4 className='text-xl font-medium'>FrontEnd Skills</h4>
              <ol className=' list-disc pl-7'>
                <li>Html & CSS</li>
                <li>Tailwind CSS</li>
                <li>Javascript</li>
                <li>React JS</li>
                <li>Next JS</li>
              </ol>
            </div>
            <div className=' rounded-lg mt-5 p-5 dark:bg-slate-900'>
              <h4 className='text-xl font-medium'>BackEnd Skills</h4>
              <ol className=' list-disc pl-7'>
                <li>Javascript</li>
                <li>Express JS</li>
                <li>PHP</li>
                <li>Laravel</li>
                <li>Java</li>
              </ol>
            </div>

            <div className=' rounded-lg mt-5 p-5 dark:bg-slate-900'>
              <h4 className='text-xl font-medium'>Database</h4>
              <ol className=' list-disc pl-7'>
                <li>MySQL</li>
                <li>MsSQL Server</li>
                <li>Postgre SQL</li>
                <li>Mongo Database</li>
                <li>Redis</li>
              </ol>
            </div>

            <div className=' rounded-lg mt-5 p-5 dark:bg-slate-900'>
              <h4 className='text-xl font-medium'>Other</h4>
              <ol className=' list-disc pl-7'>
                <li>Git & Github</li>
                <li>Postman</li>
                <li>API Handling</li>
                <li>Rest API</li>
                <li>Axios</li>
              </ol>
            </div>
          </div>


        </section>

        <section className="min-h-screen bg-[#f6f6f6] dark:bg-[#000001]" id='projects'>
          <h1 className=' ml-[5vw] text-3xl font-serif mt-[10vh] mb-5'>Projects</h1>
          <div className='w-full grid md:grid-cols-2 grid-cols-1 sm:place-items-center place-items-start gap-3'>

            <div className='sm:col-span-1 sm:mx-0 mx-auto '>
              <Link href={"https://github.com/PaddyWebDev/News-Website"} className='flex items-center md:flex-nowrap sm:w-fit w-[70vw]    flex-wrap gap-3 mb-3 dark:bg-[#1C1B23] bg-slate-50 px-2 py-2   rounded-xl '>
                <div className='w-24 sm:h-20 h-20  rounded-xl sm:my-auto p-4 flex items-center justify-center bg-red-500 text-[#fafafa]'>
                  <Newspaper />
                </div>
                <div className='max-w-md'>
                  <h4 className='text-xl font-medium' >News Website</h4>
                  <p> Dynamic & engaging platform using Tailwind CSS & Axios. Fast-loading pages, sleek UI, and real-time news updates. Stay informed effortlessly!   </p>
                </div>
              </Link>
            </div>
            <div className='sm:col-span-1 sm:mx-0 mx-auto   '>
              <Link href={"https://github.com/PaddyWebDev/Recipe-App"} className='flex items-center md:flex-nowrap sm:w-fit w-[70vw]   flex-wrap gap-3 mb-3 dark:bg-[#1C1B23] px-2 py-2 bg-slate-50  rounded-xl'>
                <div className='w-24 sm:h-20 h-20  rounded-xl sm:my-auto p-4 flex items-center justify-center bg-yellow-500 text-[#fafafa]'>
                  <ChefHat />
                </div>
                <div className='max-w-md'>
                  <h4 className='text-xl font-medium' >Recipe App</h4>
                  <p> Next.js + Tailwind CSS + Axios. Discover recipes with ease, fast-loading pages, sleek UI, smooth data retrieval. Intuitive, seamless cooking experience htmlFor culinary enthusiasts.</p>
                </div>
              </Link>
            </div>
          </div>

        </section>


        <section className='  min-h-screen bg-slate-100 dark:bg-slate-950 gap-7 md:flex-nowrap flex-wrap flex items-center justify-center px-3' id="contact">
          <div className=''>
            <Image className='rounded-lg md:w-[30vw]' draggable="false" src={"/Images/Contact.gif"} width={320} height={320} alt='contactImage' />
          </div>
          <div className='  lg:w-[40vw] md:w-[50vw] sm:mb-0 mb-6 w-[80vw] p-5'>
            <form onSubmit={HandleFormData} method='POST'>
              <h2 className='text-4xl mb-4'>Contact me</h2>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="search" onChange={TextChange} value={FormData.name} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" onChange={TextChange} value={FormData.email} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="yourEmail@gmail.com" required />
              </div>
              <div className='mb-6'>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                <input type='search' onChange={TextChange} placeholder='Message' value={FormData.message} id="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div className=' flex justify-end'>
                <button type="submit" className="  text-white bg-purple-600 w-54 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Send Email</button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
