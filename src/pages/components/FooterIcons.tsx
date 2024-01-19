import { GithubIcon, LinkedinIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function FooterIcons() {
    return (
        <div className='p-5  flex items-center justify-evenly gap-5 sm:ml-auto sm:mr-24          '>
            <Link className=' focus:bg-blue-600 hover:bg-blue-600 hover:text-slate-200 p-2 rounded-lg ' href={'https://github.com/paddywebdev'}><GithubIcon /></Link>
            <Link className=' focus:bg-blue-600 hover:bg-blue-600 hover:text-slate-200 p-2 rounded-lg ' href={'https://www.linkedin.com/in/PaddyWebDev/'}><LinkedinIcon /></Link>
        </div>
    )
}
