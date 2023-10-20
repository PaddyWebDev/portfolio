import emailjs from "@emailjs/browser";
import React, { useState } from 'react'
import Image from 'next/image'


export default function Contact() {
    const [FormData, SetFormData] = useState<string | any>({
        name: "",
        email: "",
        message: "",
    })


    const serviceId: string = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateId: string = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string
    const publicKey: string = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string

    const TextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        SetFormData({ ...FormData, [id]: value })
    }


    const sendMail = (templateParams: any) => {
        emailjs
            .send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            )
            .then(
                (response: any) => {
                    alert('Success!')
                },
                (error: any) => {
                    alert("Failed!")
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
        <section className='  min-h-screen bg-slate-100 dark:bg-slate-950 gap-7 md:flex-nowrap flex-wrap flex items-center justify-center px-3' id="contact">
            <div className='' data-aos-easing="ease-out-cubic" data-aos="fade-right">
                <Image className='rounded-lg md:w-[30vw]' draggable="false" src={"/Images/Contact.gif"} width={320} height={320} alt='contactImage' />
            </div>
            <div className='  lg:w-[40vw] md:w-[50vw] sm:mb-0 mb-6 w-[80vw] p-5' >
                <form data-aos="fade-up" data-aos-easing="ease-out-cubic" onSubmit={HandleFormData} method='POST'>
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
    )
}
