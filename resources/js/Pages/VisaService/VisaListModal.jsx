import { usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";

const VisaListModal = ({ listName }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const { impotantDocumentInfo } = usePage().props;

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpenModal(false);
            setIsClosing(false);
        }, 300);
    };

    useEffect(() => {
        if (isOpenModal) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpenModal]);

    useEffect(() => {
        const filtered = impotantDocumentInfo
            .filter((data) => {
                const matchesListName = data.visa_type.visa_type === listName;
                const matchesSearchQuery =
                    data.country.country_name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    data.visa_type.visa_type
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    data.remarks
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase());

                return matchesListName && matchesSearchQuery;
            })
            .sort((a, b) => {
                // Sort by country_name in ascending order
                return a.country.country_name.localeCompare(
                    b.country.country_name
                );
            });

        setFilteredData(filtered);
    }, [searchQuery, impotantDocumentInfo, listName]);

    return (
        <>
            <li
                className="w-full px-4 py-2 border-b cursor-pointer border-gray-200 dark:border-gray-600"
                onClick={() => setIsOpenModal(true)}
            >
                {listName}
            </li>

            <div
                className={`fixed inset-0 z-40 bg-black/75 flex items-center justify-center p-4 transition-opacity duration-300 ${
                    isOpenModal ? "block" : "hidden"
                } ${isClosing ? "opacity-0" : "opacity-100"}`}
                onClick={handleClose}
            >
                <div
                    className={`relative z-50 w-full max-w-2xl max-h-full text-black transition-all duration-200 ${
                        isClosing
                            ? "scale-95 opacity-60"
                            : "scale-100 opacity-100"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                            <h3 className="text-xl font-semibold text-sky-900 dark:text-white">
                                Country List
                            </h3>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center space-x-2">
                                    <label htmlFor="search" className="sr-only">
                                        Search
                                    </label>
                                    <input
                                        id="search"
                                        type="search"
                                        placeholder="Search Country"
                                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400"
                                        onChange={(e) =>
                                            setSearchQuery(e.target.value)
                                        }
                                        value={searchQuery}
                                        aria-label="Search"
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                        </div>

                        <div className="p-4 md:p-5 space-y-4 overflow-y-auto max-h-[60vh]">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th className="px-4 py-2 border border-gray-400">
                                            Country
                                        </th>
                                        <th className="px-4 py-2 border border-gray-400">
                                            Visa Type
                                        </th>
                                        <th className="px-4 py-2 border border-gray-400">
                                            Remarks
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-900 dark:text-white">
                                    {filteredData.map((data) => (
                                        <tr key={data.id}>
                                            <td className="px-4 py-2 border border-gray-400">
                                                {data.country.country_name}
                                            </td>
                                            <td className="px-4 py-2 border border-gray-400">
                                                {data.visa_type.visa_type}
                                            </td>
                                            <td className="px-4 py-2 border border-gray-400">
                                                {data.remarks}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VisaListModal;
