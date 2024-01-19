import { ChefHat, Newspaper, Sprout, ClipboardList } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


export default function Project() {
    return (

        <section className="min-h-screen bg-[#f6f6f6] dark:bg-[#000001] flex flex-col  " id='projects'>


            <h1 data-aos-easing="ease-out-cubic" data-aos="fade-down" className=' text-center my-[10vh] sm:text-6xl text-4xl font-mono font-bold '>Projects</h1>
            <div className=' mx-auto w-[90vw] h-10/12 sm:mb-0 mb-10'>
                <div className='w-full grid lg:grid-cols-2 grid-cols-1 sm:place-items-center place-items-start gap-3  ' >
                    {/* */}
                    <div className='sm:col-span-1 sm:mx-0 mx-auto group    ' >

                        <Link data-aos="fade-right" data-aos-easing="ease-out-cubic" href={"https://github.com/PaddyWebDev/News-Website"} className='flex items-center sm:flex-nowrap sm:w-fit w-[70vw]     flex-wrap gap-3 mb-3  dark:bg-[#1C1B23] bg-slate-50 px-2 py-2   rounded-xl '>
                            <div className=" w-24 h-24  sm:mx-0 mx-auto  rounded-xl sm:my-auto p-4 flex items-center justify-center bg-red-500 text-[#fafafa]">
                                <div className="transition duration-500 ease-in-out transform hover:rotate-6 -hover:scale-110">
                                    <Newspaper className="w-20 h-20 p-4" />
                                </div>
                            </div>
                            <div className='max-w-md'>
                                <h4 className='text-xl font-semibold font-mono' >News Website</h4>
                                <p className='text-sm font-mono'> Dynamic & engaging platform using Tailwind CSS & Axios. Fast-loading pages, sleek UI, and real-time news updates. Stay informed effortlessly!   </p>
                            </div>
                        </Link >


                        <Link data-aos="fade-right" data-aos-easing="ease-out-cubic" href={"https://github.com/PaddyWebDev/Recipe-App"} className='flex items-center md:flex-nowrap sm:w-fit w-[70vw]   flex-wrap gap-3 mb-3 dark:bg-[#1C1B23] px-2 py-2 bg-slate-50  rounded-xl'>
                            <div className=" w-24 h-24  sm:mx-0 mx-auto  rounded-xl sm:my-auto p-4 flex items-center justify-center bg-yellow-500 text-[#fafafa]">
                                <div className="transition duration-500 ease-in-out transform hover:rotate-6 hover:scale-110">
                                    <ChefHat className="w-20 h-20 p-4" />
                                </div>
                            </div>

                            <div className='max-w-md'>
                                <h4 className='text-xl font-semibold font-mono' >Recipe App</h4>
                                <p className='text-sm font-mono'> Next.js + Tailwind CSS + Axios. Discover recipes with ease, fast-loading pages, sleek UI, smooth data retrieval. Intuitive, seamless cooking experience htmlFor culinary enthusiasts.</p>
                            </div>
                        </Link>
                    </div >

                    <div className='sm:col-span-1 sm:mx-0 mx-auto   ' >
                        <Link data-aos="fade-right" data-aos-easing="ease-out-cubic" href={"https://github.com/PaddyWebDev/"} className='flex items-center md:flex-nowrap sm:w-fit w-[70vw]   flex-wrap gap-3 mb-3 dark:bg-[#1C1B23] px-2 py-2 bg-slate-50  rounded-xl'>
                            <div className='w-24 h-24 sm:mx-0 mx-auto rounded-xl sm:my-auto p-4 flex items-center justify-center bg-green-500 text-[#fafafa]'>
                                <Sprout size={35} />
                            </div>
                            <div className='max-w-md'>
                                <h4 className='text-xl font-semibold font-mono' >Crop Recommendation System</h4>
                                <p className='font-mono text-sm'>A web app for farmers, the Crop Recommendation System offers personalized crop advice based on soil data. Encourages sustainable farming & ultimately boosting yeild with profits.</p>
                            </div>
                        </Link>

                        <Link data-aos="fade-right" data-aos-easing="ease-out-cubic" href={"https://github.com/PaddyWebDev/TaskManagement"} className='flex items-center md:flex-nowrap sm:w-fit w-[70vw]   flex-wrap gap-3 mb-3 dark:bg-[#1C1B23] px-2 py-2 bg-slate-50  rounded-xl'>
                            <div className='w-24 h-24  sm:mx-0 mx-auto rounded-xl sm:my-auto p-4 flex items-center justify-center bg-indigo-500 text-[#fafafa]'>
                                <ClipboardList size={35} />
                            </div>
                            <div className='max-w-md'>
                                <h4 className='text-xl font-semibold font-mono' >TaskSwift</h4>
                                <p className='text-sm font-mono'>The TaskSwift backend powers web apps with MongoDB data storage, Express APIs, Next.js SSR, and Node.js runtime for dynamic and scalable experiences.</p>
                            </div>
                        </Link>
                    </div>

                </div >
            </div >


        </section >

    )
}





// export default function Projects() {

//     return (
//         <section className="min-h-screen bg-[#f6f6f6] dark:bg-[#000001] flex flex-col" id="projects">

//             <h1 className="text-center my-[10vh] sm:text-6xl text-4xl font-mono font-bold">
//                 Projects
//             </h1>

//             <div className="mx-auto w-[90vw] h-10/12 sm:mb-0 mb-10">

//                 <div className="w-full grid lg:grid-cols-2 grid-cols-1 sm:place-items-center place-items-start gap-3">

//                     <div>
//                         <Link href="https://github.com/...">

//                             {/* //... */}
//                         </Link>
//                     </div>

//                     <div>
//                         <Link href="https://github.com/...">
//                             <div className="group">
//                                 <div className="transition duration-500 ease-in-out transform group-hover:rotate-6 group-hover:scale-110">
//                                     <ChefHat className="w-24 h-24 p-4 bg-yellow-500 text-white" />
//                                 </div>
//                             </div>
//                             {/* //... */}
//                         </Link>
//                     </div>

//                 </div>
//             </div>

//         </section>
//     );
// }