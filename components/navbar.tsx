import React from 'react'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Code, Menu } from "lucide-react"
import { Link } from "react-scroll"
import { motion } from 'framer-motion'
import ThemeSwitcher from './theme-switcher'



type NavLink = {
    name: string;
    route: string
}

export default function Navbar() {
    const NavLinks: NavLink[] = [
        {
            name: "Skills",
            route: "skills",
        },
        {
            name: "Projects",
            route: "projects",
        },
        {
            name: "Contact",
            route: "contact",
        },
    ]
    return (
        <header
            className='fixed top-0  z-50 w-full backdrop-blur-md bg-transparent shadow-sm border-b dark:border-gray-800/60 border-neutral-50/60'
        >
            <div className="container mx-auto px-4    ">
                <div className="flex justify-between py-4 ">
                    <div className="flex items-center">
                        <motion.div
                            whileHover={{
                                scale: 1.03,
                                transition: {
                                    duration: 0.4,
                                    ease: "easeInOut"
                                }
                            }}
                            className="group cursor-default inline-flex items-center gap-2 text-lg font-bold tracking-wide text-neutral-900 hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-300"
                        >
                            <Code className=' text-cyan-600 dark:text-cyan-500' />
                            <h1 className='dark:text-cyan-300 text-cyan-600 lg:leading-tighter  tracking-tighter font-bold text-lg'>Padmanabh Malwade</h1>
                        </motion.div>
                    </div>



                    <div className="flex  items-center gap-2 lg:gap-5">

                        <nav className="md:flex hidden  items-center gap-4 ">
                            {
                                NavLinks.map((navLink: NavLink, id: number) => (
                                    <Link
                                        key={id}
                                        className="text-sm font-medium hover:underline underline-offset-4  text-cyan-600 dark:text-cyan-300  cursor-pointer"
                                        to={navLink.route} smooth={true} duration={1200}
                                    >
                                        {navLink.name}
                                    </Link>
                                ))
                            }
                        </nav>



                        <ThemeSwitcher />


                        <Sheet >
                            <SheetTrigger asChild className="border">
                                <Button variant="portfolio" size="icon" className="shrink-0 md:hidden flex ">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle navigation menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent className='dark:bg-gray-950 border-l  dark:border-gray-700' side="right">
                                <nav className="grid gap-6 text-lg font-medium mt-7">
                                    {
                                        NavLinks.map((navLink: NavLink, id: number) => (
                                            <Link
                                                key={id}
                                                className="text-sm font-medium hover:underline underline-offset-4 text-cyan-600 dark:text-cyan-300  cursor-pointer"
                                                to={navLink.route} smooth={true} duration={1200}
                                            >
                                                <SheetClose>
                                                    {navLink.name}
                                                </SheetClose>
                                            </Link>
                                        ))
                                    }
                                </nav>
                            </SheetContent>
                        </Sheet>


                    </div>
                </div>
            </div>
        </header >
    )
}

