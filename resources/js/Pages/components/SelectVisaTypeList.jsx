import { usePage } from "@inertiajs/react";

const SelectVisaTypeList = ({ onChange, ...props }) => {
    const { allVisaTypes } = usePage().props;

    return (
        <>
            <select
                {...props}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
            >
                <option value="" className="hover:text-sky-400">
                    Select Visa Type
                </option>
                {allVisaTypes?.map((visaType) => (
                    <option key={visaType.id} value={visaType.id}>
                        {visaType.visa_type}
                    </option>
                ))}
            </select>
        </>
    );
};

export default SelectVisaTypeList;
