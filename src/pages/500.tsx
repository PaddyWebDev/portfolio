import React from 'react'

export default function Custom500() {
    return (
        <main className='flex items-center justify-center min-h-screen'>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold font-mono lg:text-9xl text-primary-600 dark:text-primary-500">500</h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold font-mono text-gray-900 md:text-4xl dark:text-white">Internal Server Error.</p>
                        <p className="mb-4 text-lg font-light font-mono text-gray-500 dark:text-gray-400">We are already working to solve the problem. </p>
                    </div>
                </div>
            </section>
        </main>
    )
}