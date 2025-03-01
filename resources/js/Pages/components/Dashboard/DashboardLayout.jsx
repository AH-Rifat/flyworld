import { useState } from "react";
import { Link } from "@inertiajs/react";

const DashboardLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="h-screen bg-gray-50 dark:bg-gray-900">
            {/* Mobile menu button */}
            <div className="text-right me-2">
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden bg-sky-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link
                                href="/dashboard"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>

                        <li>
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            >
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
                                } py-2 space-y-2`}
                            >
                                <Link
                                    href="/visa/view"
                                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    View
                                </Link>
                                <Link
                                    href="/visa/requirements"
                                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    Documents Requirements
                                </Link>
                                <Link
                                    href="/visa/contacts"
                                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                >
                                    Important Contacts & Links
                                </Link>
                            </div>
                        </li>

                        <li>
                            <Link
                                href="/logout"
                                method="post"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <span className="ms-3">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

            {/* Main content */}
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
