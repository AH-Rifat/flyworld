import React from "react";
// import heroImg from "../../../../public/assets/img/hero-img.jpeg";

const HeroSection = () => {
    return (
        <>
            <div
                className={`bg-cover flex justify-center items-center bg-[url('../../../../public/assets/img/hero-img.jpeg')]`}
            >
                <div className="w-72 md:w-1/2 my-12">
                    <div className="block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <form action="" className="uppercase">
                            <fieldset className="flex items-center justify-center mt-4 mb-8 gap-4">
                                <legend className="sr-only">Countries</legend>

                                <div className="flex items-center">
                                    <input
                                        id="country-option-1"
                                        type="radio"
                                        name="countries"
                                        value="ONE WAY"
                                        className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-sky-300 dark:focus:ring-sky-600 dark:focus:bg-sky-600 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="country-option-1"
                                        className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        ONE WAY
                                    </label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        id="country-option-2"
                                        type="radio"
                                        name="countries"
                                        value="ROUND TRIP"
                                        className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-sky-300 dark:focus:ring-sky-600 dark:focus:bg-sky-600 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="country-option-2"
                                        className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        ROUND TRIP
                                    </label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        id="country-option-3"
                                        type="radio"
                                        name="countries"
                                        value="MULTI CITY"
                                        className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-sky-300 dark:focus:ring-sky-600 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="country-option-3"
                                        className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        MULTI CITY
                                    </label>
                                </div>
                            </fieldset>

                            <div className="mb-4 flex flex-col lg:flex-row items-center gap-3">
                                <div className="mb-2 w-full">
                                    <label
                                        htmlFor="small-input"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        From
                                    </label>
                                    <input
                                        type="text"
                                        id="small-input"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                                    />
                                </div>
                                <div className="mb-2 w-full">
                                    <label
                                        htmlFor="small-input"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        To
                                    </label>
                                    <input
                                        type="text"
                                        id="small-input"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                                    />
                                </div>
                            </div>

                            <div className="mb-4 flex flex-col lg:flex-row items-center justify-between gap-3">
                                <div className="mb-2 w-full">
                                    <label
                                        htmlFor="small-input"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        JOURNEY DATE
                                    </label>
                                    <input
                                        type="date"
                                        id="small-input"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                                    />
                                </div>
                                <div className="mb-2 w-full">
                                    <label
                                        htmlFor="small-input"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        RETURN
                                    </label>
                                    <input
                                        type="date"
                                        id="small-input"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                                    />
                                </div>
                            </div>

                            <div className="mb-4 flex flex-col lg:flex-row items-center justify-between gap-3">
                                <div className="mb-2 w-full">
                                    <label
                                        htmlFor="small-input"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Adult (12+)
                                    </label>
                                    <input
                                        type="number"
                                        id="small-input"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                                    />
                                </div>
                                <div className="mb-2 w-full">
                                    <label
                                        htmlFor="small-input"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Child (2-11)
                                    </label>
                                    <input
                                        type="number"
                                        id="small-input"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                                    />
                                </div>
                                <div className="mb-2 w-full">
                                    <label
                                        htmlFor="small-input"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Infant (0-2)
                                    </label>
                                    <input
                                        type="number"
                                        id="small-input"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                                    />
                                </div>
                            </div>

                            <fieldset className="flex items-center justify-center my-8 gap-4">
                                <legend className="sr-only">Countries</legend>

                                <div className="flex items-center">
                                    <input
                                        id="country-option-1"
                                        type="radio"
                                        name="countries"
                                        value="ECONOMY"
                                        className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-sky-300 dark:focus:ring-sky-600 dark:focus:bg-sky-600 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="country-option-1"
                                        className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        ECONOMY CLASS
                                    </label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        id="country-option-2"
                                        type="radio"
                                        name="countries"
                                        value="BUSINESS"
                                        className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-sky-300 dark:focus:ring-sky-600 dark:focus:bg-sky-600 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="country-option-2"
                                        className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        BUSINESS CLASS
                                    </label>
                                </div>
                            </fieldset>

                            <div className="flex items-center justify-center">
                                <button className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-sky-300 font-semibold rounded-lg text-lg px-10 py-1.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
