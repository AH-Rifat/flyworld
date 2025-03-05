import { Link, router } from "@inertiajs/react";
import { useState } from "react";
import { toast } from "react-toastify";

const VisaTypeTable = ({ data, onEdit }) => {
    const [isReadMore, setIsReadMore] = useState(false);

    const onDelete = (id) => {
        if (confirm("Are you sure you want to delete this visa-type?")) {
            router.delete(`/delete-visa-type/${id}`, {
                preserveScroll: true,
                onSuccess: () => {
                    toast.success("Visa-type deleted");
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
                                Visa Type
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                                Discription
                            </th>
                            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {data.data.length === 0 ? (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="px-4 py-6 text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900"
                                >
                                    No data found
                                </td>
                            </tr>
                        ) : (
                            data.data.map((item, index) => (
                                <tr
                                    key={item.id}
                                    className="bg-white hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800"
                                >
                                    <td className="px-4 py-3.5 text-sm text-gray-700 dark:text-gray-300">
                                        {index + 1}
                                    </td>
                                    <td className="px-4 py-3.5 text-sm text-gray-900 dark:text-white">
                                        {item.visa_type}
                                    </td>
                                    <td className="px-4 py-3.5 text-sm text-gray-900 dark:text-white">
                                        {isReadMore
                                            ? item.visa_description
                                            : item.visa_description.slice(
                                                  0,
                                                  50
                                              )}
                                        {item.visa_description.length > 50 && (
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
            {data.links.length > 1 && (
                <div className="mt-6 flex justify-center">
                    <nav className="flex gap-1">
                        {data.links.map((link, index) => (
                            <span key={index}>
                                {link.url ? (
                                    <Link
                                        href={link.url}
                                        className={`px-3.5 py-2 text-sm font-medium rounded-md
                                ${
                                    link.active
                                        ? "bg-sky-500 text-white dark:bg-sky-600"
                                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                                }`}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    />
                                ) : (
                                    <span
                                        className={`px-3.5 py-2 text-sm font-medium text-gray-400 dark:text-gray-600
                                       cursor-default`}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    />
                                )}
                            </span>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
};

export default VisaTypeTable;
