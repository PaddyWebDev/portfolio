import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FooterIcons from './FooterIcons'

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900 flex items-center sm:justify-start justify-center sm:gap-10 sm:flex-nowrap flex-wrap ">
            <Link href={"/"} className='p-5  flex items-center sm:justify-start justify-center gap-3 sm:ml-24  '>
                <Image draggable="false" width={40} height={70} src={"/favicon.ico"} alt='logo' />
                <h1 className='text-2xl font-bold font-mono'>Padmanabh Malwade</h1>
            </Link>
            <FooterIcons />
        </footer>
    )
}

