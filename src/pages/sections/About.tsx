import Link from 'next/link'
import React from 'react'

export default function About() {
    return (
        <section className="flex  flex-col mt-10 min-h-screen dark:bg-slate-950   w-full  " id="about">
            <h1 data-aos-easing="ease-out-cubic" data-aos="fade-up" className="sm:text-5xl text-3xl font-bold font-mono   text-center my-[10vh]">About Me</h1>
            <div className=" h-full flex items-center ">
                <div className="  p-5 grid md:grid-cols-2 grid-cols-1  gap-5 ">
                    <div data-aos="fade-right" data-aos-easing="ease-out-cubic" className="   p-5 rounded-lg bg-slate-200  dark:bg-blue-900 shadow-[0px_0px_117px_-14px_rgba(0,0,0,0.72)] dark:shadow-[0px_0px_40px_-28px_rgba(250,250,250,1)] ">
                        <h3 className="text-3xl font-semibold font-mono text-center mb-5">My Introduction</h3>
                        <h4 className="text-md font-light font-mono">             {`      Hey there I'm Padmanabh Malwade and I live in Karad, Maharashtra, India. As a budding web developer I absolutely love creating websites that not look great but also function smoothly. 
            Although I'm relatively new, to this field my passion and dedication for learning really set me apart. When it comes to coding I have a foundation in Web Development & I always strive to write efficient code.
            My ultimate goal is to collaborate with professionals who share the passion, for turning ideas into captivating online experiences. Lets connect and discover the possibilities of web development together! Feel free to reach out to me via email or connect with me on LinkedIn, GitHub or any other social media platform you prefer. 
            Thank you much for checking out my portfolio! `}
                        </h4>
                        <div className=" flex items-center justify-end pt-2 ">
                            <Link href={"/Images/Padmanabh_Malwade_Resume.pdf"} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 font-mono dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-3">Download Resume</Link>
                        </div>
                    </div>

                    <div data-aos="fade-down" data-aos-easing="ease-out-cubic" className=" pl-5     ">
                        <div className="my-4">
                            <h3 className="text-xl font-medium font-mono">Frontend</h3>
                            <div className="flex flex-wrap gap-3 p-2 ">
                                <h5 className="py-1 px-3 bg-blue-600 font-mono rounded-lg text-[#fafafa]">HTML</h5>
                                <h5 className="py-1 px-3 bg-blue-600 font-mono rounded-lg text-[#fafafa]">CSS</h5>
                                <h5 className="py-1 px-3 bg-blue-600 font-mono rounded-lg text-[#fafafa]">JavaScript</h5>
                                <h5 className="py-1 px-3 bg-blue-600 font-mono rounded-lg text-[#fafafa]">Tailwind</h5>
                                <h5 className="py-1 px-3 bg-blue-600 font-mono rounded-lg text-[#fafafa]">React</h5>
                                <h5 className="py-1 px-3 bg-blue-600 font-mono rounded-lg text-[#fafafa]">Next JS</h5>
                            </div>
                        </div>
                        <div className="my-4">
                            <h3 className="text-xl font-medium">Backend</h3>
                            <div className="flex gap-3  p-2 flex-wrap">
                                <h5 className="py-1 px-3 bg-blue-600 font-mono rounded-lg text-[#fafafa] ">Javascript</h5>
                                <h5 className="py-1 px-3 bg-blue-600 font-mono rounded-lg text-[#fafafa] ">Typescript</h5>
                                <h5 className="py-1 px-3 bg-blue-600 font-mono rounded-lg text-[#fafafa] ">Express</h5>
                                <h5 className="py-1 px-3 bg-blue-600 font-mono rounded-lg text-[#fafafa] ">Java</h5>
                            </div>
                        </div>
                        <div className="my-4">
                            <h3 className="text-xl font-medium">Database</h3>
                            <div className="flex gap-3 p-2 flex-wrap">
                                <h5 className="py-1 px-3 bg-blue-600 font-mono rounded-lg text-[#fafafa]">MySQL</h5>
                                <h5 className="py-1 px-3 bg-blue-600 font-mono rounded-lg text-[#fafafa]">PostgreSQL</h5>
                                <h5 className="py-1 px-3 bg-blue-600 font-mono rounded-lg text-[#fafafa]">MongoDB</h5>
                            </div>
                        </div>
                        <div className="my-4">
                            <h3 className="text-xl font-medium">Other</h3>
                            <div className="flex gap-3 p-2 flex-wrap">
                                <h5 className="py-1 px-3 bg-blue-600 font-mono rounded-lg text-[#fafafa]">Git & Github</h5>
                                <h5 className="py-1 px-3 bg-blue-600 font-mono rounded-lg text-[#fafafa]">Postman</h5>
                                <h5 className="py-1 px-3 bg-blue-600 font-mono rounded-lg text-[#fafafa]">API Handling</h5>
                                <h5 className="py-1 px-3 bg-blue-600 font-mono rounded-lg text-[#fafafa]">Responsive Design</h5>
                                <h5 className="py-1 px-3 bg-blue-600 font-mono rounded-lg text-[#fafafa]">Rest API</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
