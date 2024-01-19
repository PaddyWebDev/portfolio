// import emailjs from "@emailjs/browser";
import React, { useState } from 'react'
import Image from 'next/image'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

interface FormData {
    name: string,
    email: string,
    message: string,
}

export default function Contact() {



    const [Loading, SetLoading] = useState<boolean>(false)
    const { register, handleSubmit, reset } = useForm<FieldValues>({
        defaultValues: {
            message: '',
            name: '',
            email: ''
        }
    })


    const sendMail = async (templateParams: any) => {
        await emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )
            .then((response) => {
                toast.success('Mail Sent')
            })
            .catch((error: any) => toast.error('Failed to Send Mail'))
            .finally(() => SetLoading(false));
    };

    const submit: SubmitHandler<FieldValues> = async (data) => {
        SetLoading(true)
        reset()
        try {
            const templateParams = {
                name: data.name,
                message: data.message,
                email: data.email
            };
            sendMail(templateParams);
        } catch (error) {
            console.log(error);
        }

    }



    async function HandleFormData(event: React.FormEvent) {
        event.preventDefault();

    }

    return (
        <section className='  min-h-screen bg-slate-100 dark:bg-slate-950 gap-7 md:flex-nowrap flex-wrap flex items-center justify-center px-3 ' id="contact">
            <div className='md:mt-0 mt-[7vh]' data-aos-easing="ease-out-cubic" data-aos="fade-right">

                <Image className='rounded-[10%] md:w-[30vw] sm:w-[60vw] w-[80vw]' draggable="false" src={"/Images/Contact.gif"} width={620} height={620} alt='contactImage' />
            </div>
            <div className='  lg:w-[40vw] md:w-[50vw] sm:mb-0 mb-6 w-[80vw] p-5' >
                <form data-aos="fade-up" data-aos-easing="ease-out-cubic" onSubmit={handleSubmit(submit)} method='POST'>
                    <h1 className='sm:text-5xl font-mono text-3xl font-bold mb-4'>Contact Me</h1>
                    <div className='relative w-full mb-6 '>
                        <input
                            className="bg-gray-50 border font-mono border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type='text'
                            id='name'
                            required
                            placeholder='eg. John Doe'
                            {...register('name', { required: true })}
                        />
                    </div>
                    <div className='relative w-full mb-6 '>
                        <input
                            className="bg-gray-50 border font-mono border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type='email'
                            id='email'
                            required
                            placeholder='eg. youremail@example.com'
                            {...register('email', { required: true })}
                        />
                    </div>
                    <div className='relative w-full mb-6 '>
                        <input
                            className="bg-gray-50 border font-mono border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type='text'
                            id='message'
                            required
                            placeholder='Message'
                            {...register('message', { required: true })}
                        />
                    </div>
                    <div className=' flex justify-end'>
                        <button type="submit" disabled={Loading} className="  text-white bg-blue-600 font-mono w-54 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{Loading ? 'Sending....' : 'Send Email'}</button>
                    </div>
                </form>
            </div>
        </section>
    )
}


