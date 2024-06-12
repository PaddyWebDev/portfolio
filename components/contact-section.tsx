import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/icons"
import { Form, FormControl, FormItem, FormMessage, FormLabel, FormField } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import axios from 'axios'
import toast from "react-hot-toast"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"


const ContactSchema = z.object({
    name: z.string()
        .min(8, {
            message: "Name must contain at least 8 character(s)"
        }).max(40, {
            message: "Name must contain only 40 character(s)"
        }),
    email: z.string()
        .min(8, {
            message: "Email must contain at least 8 character(s)"
        }).max(40, {
            message: "Email must contain only 40 character(s)"
        }).email("Invalid Email")
    ,
    message: z.string()
        .min(8, {
            message: "Email must contain at least 8 character(s)"
        }).max(40, {
            message: "Email must contain only 40 character(s)"
        })
    ,
})

export default function ContactSection() {
    const contactForm = useForm<z.infer<typeof ContactSchema>>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    })

    async function validateFields(formData: z.infer<typeof ContactSchema>) {
        const validatedFields = ContactSchema.safeParse(formData)
        if (!validatedFields.success) {
            throw new Error("Invalid Input")
        }

        return validatedFields.data
    }


    async function sendEmail(formData: z.infer<typeof ContactSchema>) {
        try {
            const validatedFields = await validateFields(formData)
            toast.promise(
                (async () => {
                    const response = await axios.post('/api/send-mail', validatedFields);
                    return response.data;
                })(),
                {
                    loading: 'Sending...',
                    success: 'Email sent successfully!',
                    error: 'Failed to send email. Please try again.',
                }
            );
            contactForm.reset()
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <section className="w-full h-screen bg-gray-100 dark:bg-gray-800 flex items-center   " id="contact">

            <div className="container grid items-center justify-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-20 ">
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -150
                    }}
                    whileInView={{
                        opacity: 100,
                        x: 0,
                        transition: {
                            duration: 0.8,
                            ease: "easeInOut"
                        }
                    }}
                    className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Image src={"/svg/next-icon.svg"} width={50} height={50} draggable="false" alt="Logo" />
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-cyan-600 dark:text-cyan-400">Get in Touch</h2>
                    </div>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        {`Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you as soon
                        as possible.`}
                    </p>
                    <div className="flex items-center space-x-4">
                        <motion.div
                            whileHover={{
                                scale: 1.1
                            }}
                        >
                            <Link
                                className="text-cyan-600 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-50"
                                href="#"
                                target="_blank"
                            >
                                <LinkedinIcon className="h-6 w-6" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{
                                scale: 1.1
                            }}
                        >
                            <Link
                                className="text-cyan-600 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-50"
                                href="#"
                                target="_blank"
                            >
                                <TwitterIcon className="h-6 w-6" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{
                                scale: 1.1
                            }}
                        >
                            <Link
                                className="text-cyan-600 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-50"
                                href="#"
                                target="_blank"
                            >
                                <GithubIcon className="h-6 w-6" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        x: 150
                    }}
                    whileInView={{
                        opacity: 100,
                        x: 0,
                        transition: {
                            duration: 0.8,
                            ease: "easeInOut"
                        }
                    }}
                >
                    <Card className="w-full max-w-md shadow-md dark:bg-gray-900">
                        <CardHeader>
                            <CardTitle className="text-cyan-600 dark:text-cyan-400 text-2xl">Contact Me</CardTitle>
                            <CardDescription>{"Fill out the form below and I'll get back to you as soon as possible."}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...contactForm}>
                                <form onSubmit={contactForm.handleSubmit(sendEmail)} className="space-y-4 ">
                                    <FormField
                                        control={contactForm.control}
                                        name="name"
                                        render={({ field, fieldState: { error } }) => (
                                            <FormItem className="space-y-1">
                                                <FormLabel className="text-cyan-600 dark:text-cyan-400" htmlFor="name">
                                                    Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input id="name" placeholder="Your name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={contactForm.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className="space-y-1">
                                                <FormLabel className="text-cyan-600 dark:text-cyan-400" htmlFor="email" >
                                                    Email
                                                </FormLabel>
                                                <FormControl>
                                                    <Input type="email" id="email" placeholder="Your name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={contactForm.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem className="space-y-1">
                                                <FormLabel className="text-cyan-600 dark:text-cyan-400" htmlFor="message">
                                                    Message
                                                </FormLabel>
                                                <FormControl>
                                                    <Textarea className="min-h-[100px] resize-none" id="message" {...field} placeholder="Your message" />
                                                </FormControl>
                                                <FormMessage />

                                            </FormItem>
                                        )}
                                    />

                                    <motion.div
                                        className=" w-fit"
                                        whileHover={{
                                            scale: 1.1
                                        }}
                                    >
                                        <Button type="submit" className="bg-cyan-600 hover:bg-cyan-800 text-white">Submit</Button>
                                    </motion.div>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section >
    )
}


