import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { MdDashboard } from "react-icons/md";
import { FaCcVisa } from "react-icons/fa6";
import { IoLogOutSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import dashboardLogo from "../../../../../public/assets/img/dashboard-logo.png";
import { ToastContainer } from "react-toastify";

const DashboardLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);

    const { auth } = usePage().props;
    const { url } = usePage();

    return (
        <div className="h-screen bg-gray-50 dark:bg-gray-900">
            {/* Mobile menu button */}
            <div className="text-right me-4">
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="inline-flex items-center p-2 mt-4 ms-3 text-sm text-gray-500 rounded-lg sm:hidden bg-sky-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    <span className="sr-only">Open sidebar</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                        />
                    </svg>
                </button>
            </div>

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                } sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-white  border-r border-gray-300 dark:bg-gray-800">
                    <img
                        src={dashboardLogo}
                        alt="logo"
                        className=" pb-7 border-b border-gray-300"
                    />
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link
                                href="/dashboard"
                                className={`flex items-center p-2 mt-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 ${
                                    url === "/dashboard" ? "bg-gray-300" : ""
                                } dark:hover:bg-gray-700 group`}
                            >
                                <MdDashboard />
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>

                        <li>
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className={`flex items-center w-full p-2 ${
                                    url === "/create-visa-type-country-name" ||
                                    url ===
                                        "/get-important-contact-and-links" ||
                                    url === "/get-sample-documents-and-photos"
                                        ? "bg-gray-300"
                                        : ""
                                } text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700`}
                            >
                                <FaCcVisa />
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                                    Visa Service
                                </span>
                                <svg
                                    className={`w-3 h-3 transition-transform ${
                                        dropdownOpen ? "rotate-180" : ""
                                    }`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            <div
                                className={`${
                                    dropdownOpen ? "block" : "hidden"
                                } py-2 space-y-2 bg-gray-100 rounded-b-xl dark:bg-gray-700`}
                            >
                                <Link
                                    href="/create-visa-type-country-name"
                                    className={`flex items-center w-full p-2 ${
                                        url === "/create-visa-type-country-name"
                                            ? "bg-gray-300"
                                            : ""
                                    } text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700`}
                                >
                                    Create Visa-Type, Country-Name & others
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700"
                                >
                                    Documents Requirements
                                </Link>
                                <Link
                                    href="/get-important-contact-and-links"
                                    className={`flex items-center w-full p-2 ${
                                        url ===
                                        "/get-important-contact-and-links"
                                            ? "bg-gray-300"
                                            : ""
                                    } text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700`}
                                >
                                    Important Contacts & Links
                                </Link>
                                <Link
                                    href="/get-sample-documents-and-photos"
                                    className={`flex items-center w-full p-2 ${
                                        url ===
                                        "/get-sample-documents-and-photos"
                                            ? "bg-gray-300"
                                            : ""
                                    } text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700`}
                                >
                                    Sample Documents & Photos
                                </Link>
                            </div>
                        </li>

                        <li>
                            <button
                                onClick={() => setDropdownOpen1(!dropdownOpen1)}
                                className={`flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-300 ${
                                    url === "/profile" ? "bg-gray-300" : ""
                                } dark:text-white dark:hover:bg-gray-700`}
                            >
                                <IoMdSettings />
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                                    Settings
                                </span>
                                <svg
                                    className={`w-3 h-3 transition-transform ${
                                        dropdownOpen1 ? "rotate-180" : ""
                                    }`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            <div
                                className={`${
                                    dropdownOpen1 ? "block" : "hidden"
                                } py-2 space-y-2 bg-gray-100 rounded-b-xl dark:bg-gray-700`}
                            >
                                <Link
                                    href="/profile"
                                    className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-300 ${
                                        url === "/profile" ? "bg-gray-300" : ""
                                    } dark:text-white dark:hover:bg-gray-700`}
                                >
                                    Profile
                                </Link>

                                <Link
                                    href="/change-password"
                                    className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-300 ${
                                        url === "/change-password"
                                            ? "bg-gray-300"
                                            : ""
                                    } dark:text-white dark:hover:bg-gray-700`}
                                >
                                    Password
                                </Link>
                            </div>
                        </li>

                        <li>
                            <Link
                                href="/logout"
                                method="post"
                                className="flex items-center w-full p-2 text-gray-900 rounded-lg cursor-pointer dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group"
                            >
                                <IoLogOutSharp />
                                <span className="ms-3">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

            {/* Main content */}
            <div className="p-4 sm:ml-64">
                <div className="p-4 rounded-lg">
                    <div className="-mt-19 lg:mt-0 lg:text-end">
                        <span className="font-bold text-2xl">
                            {auth.user.name}
                        </span>
                        <p className="text-sm text-gray-800">
                            {auth.user.email}
                        </p>
                    </div>
                    <hr className="my-3 text-gray-300" />

                    {children}
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default DashboardLayout;
