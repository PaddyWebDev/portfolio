import { ContactSchema } from '@/lib/utils'
import React from 'react'
import { Form, FormControl, FormItem, FormMessage, FormLabel, FormField } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import axios from 'axios'
import toast from "react-hot-toast"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"


type ContactSchemaType = z.infer<typeof ContactSchema>
export default function ContactForm() {
    const contactForm = useForm<ContactSchemaType>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    })
    async function validateFields(formData: ContactSchemaType) {
        const validatedFields = ContactSchema.safeParse(formData)
        if (!validatedFields.success) {
            throw new Error("Invalid Input")
        }

        return validatedFields.data
    }


    async function sendEmail(formData: ContactSchemaType) {
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
        <Card className="w-full max-w-md shadow-md dark:bg-neutral-900">
            <CardHeader>
                <CardTitle className="text-cyan-600 dark:text-cyan-400 text-2xl">Contact Me</CardTitle>
                <CardDescription>{"Fill out the form below and I'll get back to you as soon as possible."}</CardDescription>
            </CardHeader>
            <CardContent >
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
                                        <Input id="name" className="dark:bg-neutral-950" placeholder="Your name" {...field} />
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
                                        <Input type="email" className="dark:bg-neutral-950" id="email" placeholder="Your name" {...field} />
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
                                        <Textarea className="min-h-[100px] resize-none dark:bg-neutral-950" id="message" {...field} placeholder="Your message" />
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
                            <Button type="submit" className="bg-cyan-600 hover:bg-cyan-950 text-white">Submit</Button>
                        </motion.div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
