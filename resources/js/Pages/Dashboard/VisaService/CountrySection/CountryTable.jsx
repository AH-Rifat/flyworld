import { router } from "@inertiajs/react";
import { toast } from "react-toastify";
import { usePage } from "@inertiajs/react";
import Pagination from "../../../components/ui/Pagination";

const CountryTable = ({ data, onEdit }) => {
    const { errors } = usePage().props;

    const onDelete = (id) => {
        if (confirm("Are you sure you want to delete this country?")) {
            router.delete(`/delete-country/${id}`, {
                preserveScroll: true,
                onSuccess: () => {
                    toast.success("Country deleted", {
                        position: "top-center",
                    });
                },
                onError: () => {
                    errors.error
                        ? toast.error(errors.error, {
                              position: "top-center",
                          })
                        : toast.error(
                              "Something went wrong. Please try again.",
                              {
                                  position: "top-center",
                              }
                          );
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
                            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {data?.data?.length === 0 ? (
                            <tr>
                                <td
                                    colSpan="3"
                                    className="px-4 py-6 text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900"
                                >
                                    No data found
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
                                    <td className="px-4 py-3.5 text-sm text-gray-900 dark:text-white">
                                        {item.country_name}
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

export default CountryTable;
