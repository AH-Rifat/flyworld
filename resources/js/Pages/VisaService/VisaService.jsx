import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaSearch } from "react-icons/fa";
import DocumentRequirementSection from "./DocumentRequirementSection";
import { useForm } from "@inertiajs/react";
import { toast } from "react-toastify";
import VisaListModal from "./VisaListModal";
import Button from "../components/ui/Button";
import { FaPrint } from "react-icons/fa6";
import { useReactToPrint } from "react-to-print";
import { useRef, useState } from "react";
import HTMLReactParser from "html-react-parser/lib/index";
import Select from "react-select";

const VisaService = ({
    allCountries,
    getVisaTypeFromDescriptionData,
    visaTypeDescription,
    elegibilitys,
    beforeDepartureRequirments,
    remarks,
    visaFeeAndServiceCharge,
    visaProcessingTime,
    importantContact,
    sampleDocumentsAndPhoto,
    documentsRequirements,
}) => {
    const { data, setData, post, errors, reset, processing } = useForm({
        country_id: "",
        visa_type_id: "",
    });
    const [showVisaTypeFromCountryData, setShowVisaTypeFromCountryData] =
        useState([]);

    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ contentRef });

    const handleCountryChange = (selectedOption) => {
        const filterData = getVisaTypeFromDescriptionData?.filter((item) => {
            if (item.country_id == selectedOption.value) {
                setData("country_id", selectedOption.value);
                return item;
            }
        });
        setShowVisaTypeFromCountryData(filterData);
    };

    const handleVisaTypeChange = (selectedOption) => {
        setData("visa_type_id", selectedOption.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        post("/visa-service", {
            preserveScroll: true,
            onSuccess: () => {
                // Reset the form data
                reset();
                // Clear the visa type data
                setShowVisaTypeFromCountryData([]);
            },
            onError: () =>
                toast.error("Something went wrong", {
                    position: "top-center",
                }),
        });
    };

    const countryOptions = allCountries
        ?.slice() // Create a shallow copy of the array to avoid mutating the original array
        .sort((a, b) =>
            a.country.country_name.localeCompare(b.country.country_name)
        ) // Sort alphabetically by country name
        .map((country) => ({
            value: country.country_id,
            label: country.country.country_name,
        }));

    const visaTypeOptions = showVisaTypeFromCountryData?.map((visaType) => ({
        value: visaType.visa_type_id,
        label: visaType.visa_type.visa_type,
    }));

    return (
        <>
            <Header />
            <section className="max-w-screen-xl mx-auto">
                <h1 className="text-center my-8 underline text-3xl font-bold text-sky-800">
                    Visa Service
                </h1>

                <div className="card py-2 mx-auto w-72 md:w-2/3">
                    <form className="p-3" onSubmit={handleSearch}>
                        <div className="flex flex-col md:flex-row justify-between place-items-center gap-5 md:px-20">
                            <div className="w-full md:w-96">
                                <label
                                    htmlFor="countries"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Select your country
                                </label>
                                <Select
                                    id="countries"
                                    options={countryOptions}
                                    value={countryOptions.find(
                                        (option) =>
                                            option.value === data.country_id
                                    )}
                                    onChange={handleCountryChange}
                                    placeholder="Select Country"
                                />
                                {errors.country_id && (
                                    <span className="text-red-600">
                                        {errors.country_id}
                                    </span>
                                )}
                            </div>
                            <div className="w-full md:w-96">
                                <label
                                    htmlFor="category"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Select Category
                                </label>
                                <Select
                                    id="category"
                                    options={visaTypeOptions}
                                    value={visaTypeOptions.find(
                                        (option) =>
                                            option.value === data.visa_type_id
                                    )}
                                    onChange={handleVisaTypeChange}
                                    placeholder="Select Category"
                                />
                                {errors.visa_type_id && (
                                    <span className="text-red-600">
                                        {errors.visa_type_id}
                                    </span>
                                )}
                            </div>
                            <div>
                                <ul className="w-48 text-sm font-semibold text-center text-gray-900 bg-yellow-500 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                        Fast Track Application
                                    </li>
                                    <VisaListModal listName={"Sticker Visa"} />
                                    <VisaListModal
                                        listName={"On Arrival Visa"}
                                    />
                                    <VisaListModal listName={"e-Visa"} />
                                </ul>
                            </div>
                        </div>

                        <div className="text-center my-4">
                            <button
                                type="submit"
                                disabled={processing}
                                className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex cursor-pointer items-center me-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                            >
                                <FaSearch className="me-3" />
                                Search Now
                            </button>
                        </div>
                    </form>
                </div>

                <div ref={contentRef}>
                    <section>
                        {visaTypeDescription?.length > 0 && (
                            <div className="card mx-10 my-12">
                                <h1 className="text-3xl text-center uppercase font-semibold bg-sky-200 p-2">
                                    {
                                        visaTypeDescription[0]?.country
                                            ?.country_name
                                    }
                                </h1>
                                <div className="p-6">
                                    <div className="flex flex-col lg:flex-row items-baseline justify-center gap-20 text-center">
                                        {visaTypeDescription.map((data) => (
                                            <div
                                                key={data.id}
                                                className="lg:w-1/2"
                                            >
                                                <h2 className="text-xl font-semibold">
                                                    {data.visa_type?.visa_type}
                                                </h2>
                                                <div className="text-sm mt-2">
                                                    {data.description}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>

                    <div className="flex flex-col lg:flex-row gap-8 m-10">
                        <div className="flex flex-col gap-8">
                            {elegibilitys && (
                                <section className="card h-fit">
                                    <h2 className="font-semibold bg-sky-200 p-2">
                                        Eligibility to Apply for Visa
                                    </h2>
                                    <div className="p-6">
                                        <div>
                                            {elegibilitys?.eligibility_content}
                                        </div>
                                    </div>
                                </section>
                            )}

                            {documentsRequirements?.length > 0 && (
                                <section className={`card h-fit`}>
                                    <h2 className="font-semibold bg-sky-200 p-2">
                                        Documents Requirements
                                    </h2>
                                    <div className="p-6">
                                        <DocumentRequirementSection
                                            data={documentsRequirements}
                                        />
                                    </div>
                                </section>
                            )}

                            {visaFeeAndServiceCharge && (
                                <section className="card h-fit">
                                    <h2 className="font-semibold bg-sky-200 p-2">
                                        Visa Fees & Service Charges
                                    </h2>
                                    <div className="p-6">
                                        <div>
                                            {HTMLReactParser(
                                                visaFeeAndServiceCharge?.fee_and_service_charges
                                            )}
                                        </div>
                                    </div>
                                </section>
                            )}

                            {visaProcessingTime && (
                                <section className="card h-fit print:mt-24">
                                    <h2 className="font-semibold bg-sky-200 p-2">
                                        Processing Time
                                    </h2>
                                    <div className="p-6">
                                        <div>
                                            {
                                                visaProcessingTime?.processing_time
                                            }
                                        </div>
                                    </div>
                                </section>
                            )}

                            {sampleDocumentsAndPhoto?.length > 0 && (
                                <section className="card h-fit">
                                    <h2 className="font-semibold bg-sky-200 p-2">
                                        Sample Documents & Photos
                                    </h2>
                                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {sampleDocumentsAndPhoto?.map(
                                            (item) => {
                                                return (
                                                    <div
                                                        key={item.id}
                                                        className="card rounded-xl shadow-sky-200 shadow-md overflow-hidden"
                                                    >
                                                        <div className="h-56 overflow-hidden">
                                                            <img
                                                                src={`images/sample-documents/${item.image}`}
                                                                alt="image"
                                                                className="w-full h-full object-cover transform transition duration-500 hover:scale-110 print:w-96 print:h-96"
                                                            />
                                                        </div>
                                                        <p className="text-sm py-2 px-5 font-semibold text-center">
                                                            {item.title}
                                                        </p>
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>
                                </section>
                            )}
                        </div>

                        <div className="flex flex-col gap-8">
                            {beforeDepartureRequirments && (
                                <section className="card h-fit">
                                    <h2 className="font-semibold bg-sky-200 p-2">
                                        Before Departure Requirements
                                    </h2>
                                    <div className="p-6">
                                        <div>
                                            {HTMLReactParser(
                                                beforeDepartureRequirments?.before_departure_requirements
                                            )}
                                        </div>
                                    </div>
                                </section>
                            )}

                            {importantContact?.length > 0 && (
                                <section className="card h-fit">
                                    <h2 className="font-semibold bg-sky-200 p-2">
                                        Important Contacts & Links
                                    </h2>
                                    <div className="p-6">
                                        <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                            {importantContact?.map((item) => {
                                                return (
                                                    <li
                                                        key={item.id}
                                                        className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"
                                                    >
                                                        <h4 className="font-semibold mb-2">
                                                            {item.title}
                                                        </h4>
                                                        <table className="w-full">
                                                            <tbody>
                                                                <tr className="flex gap-2">
                                                                    <th className="font-semibold">
                                                                        Address:
                                                                    </th>
                                                                    <td>
                                                                        {
                                                                            item.address
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr className="flex gap-2">
                                                                    <th className="font-semibold">
                                                                        Phone:
                                                                    </th>
                                                                    <td>
                                                                        {
                                                                            item.phone
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr className="flex gap-2">
                                                                    <th className="font-semibold">
                                                                        Email:
                                                                    </th>
                                                                    <td>
                                                                        {
                                                                            item.email
                                                                        }
                                                                    </td>
                                                                </tr>
                                                                <tr className="flex gap-2">
                                                                    <th className="font-semibold">
                                                                        Office
                                                                        Hours:
                                                                    </th>
                                                                    <td>
                                                                        {
                                                                            item.office_hours
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </section>
                            )}

                            {remarks && (
                                <section className="card h-fit">
                                    <h2 className="font-semibold bg-sky-200 p-2">
                                        Remarks
                                    </h2>
                                    <div className="p-6">
                                        <p>{remarks?.remarks}</p>
                                    </div>
                                </section>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            {visaTypeDescription?.length > 0 && (
                <div className="w-26 my-10 mx-auto">
                    <Button
                        type="button"
                        className="cursor-pointer outline-none"
                        onClick={() => reactToPrintFn()}
                    >
                        <div className="flex items-center font-bold justify-center gap-4">
                            <FaPrint className="text-lg" /> <span>Print</span>
                        </div>
                    </Button>
                </div>
            )}
            <hr className="text-yellow-200 my-20" />
            <Footer />
        </>
    );
};

export default VisaService;
