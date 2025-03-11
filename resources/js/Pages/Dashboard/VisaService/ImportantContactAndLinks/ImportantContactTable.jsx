import { router } from "@inertiajs/react";
import { useState } from "react";
import { toast } from "react-toastify";
import Pagination from "../../../components/ui/Pagination";

const ImportantContactTable = ({ data, onEdit }) => {
    const [isReadMore, setIsReadMore] = useState(false);
    const [isReadMore1, setIsReadMore1] = useState(false);

    const onDelete = (id) => {
        if (
            confirm("Are you sure you want to delete this Important Contact?")
        ) {
            router.delete(`/delete-important-contact-and-links/${id}`, {
                preserveScroll: true,
                onSuccess: () => {
                    toast.success("Important Contact delete");
                },
                onError: () => {
                    toast.error("Something went wrong");
                },
            });
        }
    };

    return (
        <>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                <table className="w-full">
                    <thead className="bg-gray-200 dark:bg-gray-800">
                        <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                                ID
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                                Country Name
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                                Visa Type
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                                Title
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                                address
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                                Email
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                                Phone
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                                Office Hours
                            </th>
                            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {data?.data?.length === 0 ? (
                            <tr>
                                <td
                                    colSpan="9"
                                    className="px-4 py-6 text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900"
                                >
                                    No data Found
                                </td>
                            </tr>
                        ) : (
                            data?.data?.map((item, index) => (
                                <tr
                                    key={item.id}
                                    className="bg-white hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800"
                                >
                                    <td className="px-4 py-3.5 text-sm text-gray-700 dark:text-gray-300">
                                        {index + 1}
                                    </td>
                                    <td className="px-4 py-3.5 text-sm text-gray-700 dark:text-gray-300">
                                        {item.country?.country_name}
                                    </td>
                                    <td className="px-4 py-3.5 text-sm text-gray-700 dark:text-gray-300">
                                        {item.visa_type?.visa_type}
                                    </td>
                                    <td className="px-4 py-3.5 text-sm text-gray-700 dark:text-gray-300">
                                        {item.title}
                                    </td>
                                    <td className="px-4 py-3.5 text-sm text-gray-900 dark:text-white">
                                        {isReadMore
                                            ? item.address
                                            : item?.address?.slice(0, 50)}
                                        {item?.address?.length > 50 && (
                                            <button
                                                onClick={() =>
                                                    setIsReadMore(!isReadMore)
                                                }
                                                className="px-2 py-1 text-sm font-medium bg-sky-500/10 text-sky-700
                                               rounded-md hover:bg-sky-500/20 dark:text-sky-400 dark:hover:bg-sky-500/20
                                               transition-colors"
                                            >
                                                {isReadMore
                                                    ? "Show Less"
                                                    : "Read More"}
                                            </button>
                                        )}
                                    </td>
                                    <td className="px-4 py-3.5 text-sm text-gray-700 dark:text-gray-300">
                                        {item.email}
                                    </td>
                                    <td className="px-4 py-3.5 text-sm text-gray-700 dark:text-gray-300">
                                        0{item.phone}
                                    </td>
                                    <td className="px-4 py-3.5 text-sm text-gray-900 dark:text-white">
                                        {isReadMore1
                                            ? item.office_hours
                                            : item.office_hours?.slice(0, 50)}
                                        {item.office_hours?.length > 50 && (
                                            <button
                                                onClick={() =>
                                                    setIsReadMore1(!isReadMore1)
                                                }
                                                className="px-2 py-1 text-sm font-medium bg-sky-500/10 text-sky-700
                                               rounded-md hover:bg-sky-500/20 dark:text-sky-400 dark:hover:bg-sky-500/20
                                               transition-colors"
                                            >
                                                {isReadMore1
                                                    ? "Show Less"
                                                    : "Read More"}
                                            </button>
                                        )}
                                    </td>
                                    <td className="px-4 py-3.5">
                                        <div className="flex items-center justify-center gap-2">
                                            <button
                                                onClick={() => onEdit(item)}
                                                className="px-3 py-1.5 text-sm font-medium bg-sky-500/10 text-sky-700
                                                           rounded-md hover:bg-sky-500/20 dark:text-sky-400 dark:hover:bg-sky-500/20
                                                           transition-colors"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() =>
                                                    onDelete(item.id)
                                                }
                                                className="px-3 py-1.5 text-sm font-medium bg-red-500/10 text-red-700
                                                           rounded-md hover:bg-red-500/20 dark:text-red-400 dark:hover:bg-red-500/20
                                                           transition-colors"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <Pagination data={data} />
        </>
    );
};

export default ImportantContactTable;
