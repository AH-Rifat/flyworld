import { useState } from "react";
import logo from "../../../../public/assets/img/fly-world-logo.png";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="hidden md:block text-white text-[.6rem] font-semibold uppercase bg-sky-500">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className="flex items-center gap-1.5">
                            <FaSquarePhone />
                            <p> +880178-111-66-99 </p>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <MdEmail />
                            <p> info@flyworld </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between space-x-3 rtl:space-x-reverse">
                        <a href="#">SignUp</a> <span>|</span>{" "}
                        <a href="#">Login</a>
                    </div>
                </div>
            </section>
            <nav className="bg-white shadow-md border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                    <a
                        href="#"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img src={logo} className="w-44" alt="Fly World Logo" />
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            <span className="text-amber-400">Fly</span>{" "}
                            <span className="text-sky-400">World</span>
                        </span> */}
                    </a>
                    <button
                        data-collapse-toggle="navbar-multi-level"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-sky-500 rounded-lg md:hidden hover:bg-sky-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-200 dark:text-sky-400 dark:hover:bg-sky-700 dark:focus:ring-sky-600"
                        aria-controls="navbar-multi-level"
                        aria-expanded="false"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        className={`${
                            isOpen ? "block" : "hidden"
                        } w-full md:block md:w-auto`}
                        id="navbar-multi-level"
                    >
                        <ul className="flex flex-col font-medium uppercase p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-white bg-sky-700 rounded-sm md:bg-transparent md:text-sky-700 md:p-0 md:dark:text-sky-500 dark:bg-sky-600 md:dark:bg-transparent"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 dark:text-white md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Flight
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 dark:text-white md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Visa Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 dark:text-white md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Tourist Packages
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 dark:text-white md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
