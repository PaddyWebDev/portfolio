import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 flex items-center sm:justify-start justify-center sm:gap-10 sm:flex-nowrap flex-wrap ">
            <Link href={"/"} className='p-5  flex items-center sm:justify-start justify-center gap-3 sm:ml-24  '>
                <Image draggable="false" width={40} height={70} src={"/favicon.ico"} alt='logo' />
                <h1 className='text-3xl'>Portfolio</h1>
            </Link>
            <div className='p-5  flex items-center justify-evenly gap-5 sm:ml-auto sm:mr-24          '>
                <Link className=' focus:bg-purple-600 hover:bg-purple-600 hover:text-slate-200 p-2 rounded-lg ' href={'https://www.instagram.com/https.paddy_50/'} ><Instagram /></Link>
                <Link className=' focus:bg-purple-600 hover:bg-purple-600 hover:text-slate-200 p-2 rounded-lg ' href={'/'}><Twitter /></Link>
                <Link className=' focus:bg-purple-600 hover:bg-purple-600 hover:text-slate-200 p-2 rounded-lg ' href={'https://github.com/paddywebdev'}><Github /></Link>
                <Link className=' focus:bg-purple-600 hover:bg-purple-600 hover:text-slate-200 p-2 rounded-lg ' href={'https://www.linkedin.com/in/PaddyWebDev/'}><Linkedin /></Link>
            </div>
        </footer>
    )
}

export default Footer