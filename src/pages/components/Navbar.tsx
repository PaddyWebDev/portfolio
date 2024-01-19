import { useState } from "react";
import { Link } from "react-scroll"
import { Headphones } from "lucide-react";
import NavLogo from "./NavLogo";


export default function Navbar() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    return (
        <header id="page-header" className="flex flex-none items-center bg-white shadow-sm z-1 dark:bg-slate-900">
            <div className="container xl:max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex justify-between py-4">
                    <div className="flex items-center">
                        <NavLogo />
                    </div>

                    <div className="flex items-center space-x-2 lg:space-x-5">
                        <nav className="hidden lg:flex items-center space-x-2">
                            <Link to="about" smooth={true} duration={1200} className=" cursor-pointer group font-mono  text-sm font-bold flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-800 border border-transparent hover:text-blue-600 hover:bg-blue-50 active:border-blue-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700 dark:active:border-gray-600">
                                <svg className="hi-mini hi-users inline-block w-5 h-5 opacity-25 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" /></svg>
                                <span>About</span>
                            </Link>
                            <Link to="projects" smooth={true} duration={1200} className=" cursor-pointer group text-sm font-bold font-mono  flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-800 border border-transparent hover:text-blue-600 hover:bg-blue-50 active:border-blue-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700 dark:active:border-gray-600">
                                <svg className="hi-mini hi-briefcase inlin  e-block w-5 h-5 opacity-25 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z" clipRule="evenodd" /><path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" /></svg>
                                <span>Projects</span>
                            </Link>
                            <Link to="contact" smooth={true} duration={1200} className=" cursor-pointer group text-sm font-bold flex items-center space-x-2 px-3 py-2 rounded-lg font-mono  text-gray-800 border border-transparent hover:text-blue-600 hover:bg-blue-50 active:border-blue-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700 dark:active:border-gray-600">
                                <Headphones className="hi-mini hi-chart-bar inline-block w-5 h-5 opacity-25 group-hover:opacity-100" />
                                <span>Contact</span>
                            </Link>
                        </nav>


                        <div className="lg:hidden">
                            <button
                                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                                type="button"
                                className="  cursor-pointer inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
                            >
                                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="hi-solid hi-menu inline-block w-5 h-5"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={`lg:hidden ${mobileNavOpen ? "" : "hidden"
                        }`}
                >
                    <nav className="flex flex-col space-y-2 py-4 border-t dark:border-gray-700">
                        <Link to="about" smooth={true} duration={900} className="  cursor-pointer group text-sm font-bold font-mono  flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-800 border border-transparent hover:text-blue-600 hover:bg-blue-50 active:border-blue-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700 dark:active:border-gray-600">
                            <svg className="hi-mini hi-users inline-block w-5 h-5 opacity-25 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" /></svg>
                            <span>About</span>
                        </Link>
                        <Link to="projects" smooth={true} duration={900} className="  cursor-pointer group text-sm font-bold flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-800 border border-transparent font-mono  hover:text-blue-600 hover:bg-blue-50 active:border-blue-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700 dark:active:border-gray-600">
                            <svg className="hi-mini hi-briefcase inlin  e-block w-5 h-5 opacity-25 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z" clipRule="evenodd" /><path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" /></svg>
                            <span>Projects</span>
                        </Link>
                        <Link to="contact" smooth={true} duration={900} className="  cursor-pointer group text-sm font-mono  font-bold flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-800 border border-transparent hover:text-blue-600 hover:bg-blue-50 active:border-blue-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700 dark:active:border-gray-600">
                            <Headphones className="hi-mini hi-chart-bar inline-block w-5 h-5 opacity-25 group-hover:opacity-100" />
                            <span>Contact</span>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}