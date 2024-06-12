import React from 'react'
import { Container, Section, Tailwind, Heading, Text, Button, Hr } from '@react-email/components'
interface EmailTemplateProps {
    name: string
    message: string
    email: string
}

export default function EmailTemplate({ name, message, email }: EmailTemplateProps) {
    return (
        <Tailwind>
            <Container className='bg-neutral-100 shadow-md p-5 rounded-md flex items-center justify-center '>

                <Section>
                    <Heading className='text-2xl font-semibold  font-sans ' as='h1'>Hello Padmanabh</Heading>
                    <Heading className='text-xl font-light text-center' as='h6'>You got a new message from {name}</Heading>
                </Section>
                <Section className='flex items-center justify-center w-full'>
                    <Button className="bg-neutral-900 my-2 mx-32 text-neutral-50 py-3 px-4 rounded-md shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90" href={`mailto:${email}`}>Reply to {name}</Button>
                </Section>
                <Hr />
                <Text className='text-sm'>{message}</Text>
            </Container>
        </Tailwind>
    )
}
