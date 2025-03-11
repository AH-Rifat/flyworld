import { Link } from "@inertiajs/react";

const Pagination = ({ data }) => {
    return (
        <>
            {data?.links?.length > 1 && (
                <nav className="overflow-y-scroll">
                    <ul className="flex p-8  items-center justify-center -space-x-px h-8 text-sm">
                        {/* Previous Button */}
                        {data?.links[0]?.url && (
                            <li>
                                <Link
                                    href={data?.links[0]?.url}
                                    className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Previous</span>
                                    <svg
                                        className="w-2.5 h-2.5 rtl:rotate-180"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 1 1 5l4 4"
                                        />
                                    </svg>
                                </Link>
                            </li>
                        )}

                        {/* Current Page (Mobile Only) */}
                        <li className="sm:hidden">
                            <span className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 cursor-default dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                                {data?.links?.find((link) => link.active)
                                    ?.label || "1"}
                            </span>
                        </li>

                        {/* Page Numbers (Hidden on Mobile) */}
                        {data?.links?.slice(1, -1).map((link, index) => (
                            <li key={index} className="hidden sm:block">
                                {link.url ? (
                                    <Link
                                        href={link.url}
                                        className={`flex items-center justify-center px-3 h-8 leading-tight ${
                                            link.active
                                                ? "z-10 text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                                : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        }`}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    />
                                ) : (
                                    <span
                                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 cursor-default dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    />
                                )}
                            </li>
                        ))}

                        {/* Next Button */}
                        {data?.links[data?.links?.length - 1].url && (
                            <li>
                                <Link
                                    href={
                                        data?.links[data?.links?.length - 1].url
                                    }
                                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Next</span>
                                    <svg
                                        className="w-2.5 h-2.5 rtl:rotate-180"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 9 4-4-4-4"
                                        />
                                    </svg>
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            )}
        </>
    );
};

export default Pagination;
