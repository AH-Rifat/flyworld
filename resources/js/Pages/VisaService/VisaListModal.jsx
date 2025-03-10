import { useState, useEffect } from "react";

const VisaListModal = ({listName}) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

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
    }, [isOpenModal]);

    return (
        <>
            {/* Toggle Button */}
            <li
                className="w-full px-4 py-2 border-b cursor-pointer border-gray-200 dark:border-gray-600"
                onClick={() => setIsOpenModal(true)}
            >
                {listName}
            </li>
            {/* <button
                onClick={() => setIsOpenModal(true)}
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
            >
                Toggle modal
            </button> */}

            {/* Modal Backdrop */}
            {/* {(isOpenModal || isClosing) && (

            )} */}

            <div
                className={`fixed ${
                    isOpenModal ? "block" : "hidden"
                } inset-0 z-40 bg-black/75 flex items-center justify-center p-4 transition-opacity duration-300 ${
                    isClosing ? "opacity-0" : "opacity-100"
                }`}
                onClick={handleClose}
            >
                {/* Modal Content */}
                <div
                    className={`relative z-50 w-full max-w-2xl max-h-full text-black transition-all duration-200 ${
                        isClosing
                            ? "scale-95 opacity-60"
                            : "scale-100 opacity-100"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                            <h3 className="text-xl font-semibold text-sky-900 dark:text-white">
                                Country List
                            </h3>
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

                        {/* Modal Body */}
                        <div className="p-4 md:p-5 space-y-4 overflow-y-auto max-h-[60vh]">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th className="px-4 py-2 border border-gray-400">Country</th>
                                        <th className="px-4 py-2 border border-gray-400">Visa Type</th>
                                        <th className="px-4 py-2 border border-gray-400">Remarks</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-900 dark:text-white">
                                    <tr>
                                        <td className="px-4 py-2 border border-gray-400">India</td>
                                        <td className="px-4 py-2 border border-gray-400">Student</td>
                                        <td className="px-4 py-2 border border-gray-400">None</td>
                                    </tr>
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
