import Image from 'next/image'
import React from 'react'
import HeadSection from './components/HeadSection'
const Custom404 = () => {
    return (
        <>
            <main className='flex items-center justify-center min-h-screen'>
                <HeadSection />
                <Image draggable="false" className='lg:w-[30vw] w-[60vw] rounded-lg ' src={"/Images/404robot.gif"} width={320} height={320} alt='error404' />
            </main>
        </>
    )
}

export default Custom404