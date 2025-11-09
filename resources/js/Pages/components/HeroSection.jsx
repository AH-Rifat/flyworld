import React from "react";
import video_hero_section from "../../../../public/assets/video/video_hero_section.mp4";

const HeroSection = () => {
    return (
        <>
            <div className="relative flex justify-center items-center md:h-screen overflow-hidden">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute z-0 top-0 left-0 w-full h-full object-cover"
                >
                    <source src={video_hero_section} type="video/mp4" />
                    {/* Your browser does not support the video tag. */}
                </video>

                {/* Form Container */}
                <div className="w-72 md:w-1/2 lg:w-1/3 my-12 mx-auto relative z-10 ">
                    <div className="block max-w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <form action="" className="uppercase">
                            {/* Trip Type Radio Buttons */}
                            <fieldset className="flex flex-wrap items-center justify-center mt-4 mb-6 gap-3 sm:gap-4">
                                <legend className="sr-only">Trip Type</legend>
                                <div className="flex items-center">
                                    <input
                                        id="trip-type-1"
                                        type="radio"
                                        name="tripType"
                                        value="ONE WAY"
                                        className="w-4 h-4 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="trip-type-1"
                                        className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        ONE WAY
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="trip-type-2"
                                        type="radio"
                                        name="tripType"
                                        value="ROUND TRIP"
                                        className="w-4 h-4 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="trip-type-2"
                                        className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        ROUND TRIP
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="trip-type-3"
                                        type="radio"
                                        name="tripType"
                                        value="MULTI CITY"
                                        className="w-4 h-4 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="trip-type-3"
                                        className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        MULTI CITY
                                    </label>
                                </div>
                            </fieldset>

                            {/* From and To Inputs */}
                            <div className="mb-4 flex flex-col sm:flex-row items-center gap-3">
                                <div className="w-full">
                                    <label
                                        htmlFor="from-input"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        From
                                    </label>
                                    <input
                                        type="text"
                                        id="from-input"
                                        className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                                    />
                                </div>
                                <div className="w-full">
                                    <label
                                        htmlFor="to-input"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        To
                                    </label>
                                    <input
                                        type="text"
                                        id="to-input"
                                        className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                                    />
                                </div>
                            </div>

                            {/* Journey and Return Date Inputs */}
                            <div className="mb-4 flex flex-col sm:flex-row items-center gap-3">
                                <div className="w-full">
                                    <label
                                        htmlFor="journey-date"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        JOURNEY DATE
                                    </label>
                                    <input
                                        type="date"
                                        id="journey-date"
                                        className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                                    />
                                </div>
                                <div className="w-full">
                                    <label
                                        htmlFor="return-date"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        RETURN
                                    </label>
                                    <input
                                        type="date"
                                        id="return-date"
                                        className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                                    />
                                </div>
                            </div>

                            {/* Passenger Inputs */}
                            <div className="mb-4 flex flex-col sm:flex-row items-center gap-3">
                                <div className="w-full">
                                    <label
                                        htmlFor="adult-input"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Adult (12+)
                                    </label>
                                    <input
                                        type="number"
                                        id="adult-input"
                                        className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                                    />
                                </div>
                                <div className="w-full">
                                    <label
                                        htmlFor="child-input"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Child (2-11)
                                    </label>
                                    <input
                                        type="number"
                                        id="child-input"
                                        className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                                    />
                                </div>
                                <div className="w-full">
                                    <label
                                        htmlFor="infant-input"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Infant (0-2)
                                    </label>
                                    <input
                                        type="number"
                                        id="infant-input"
                                        className="block w-full p-2 text-gray-900 border outline-none border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                                    />
                                </div>
                            </div>

                            {/* Class Type Radio Buttons */}
                            <fieldset className="flex flex-wrap items-center justify-center my-4 gap-3 sm:gap-4">
                                <legend className="sr-only">Class Type</legend>
                                <div className="flex items-center">
                                    <input
                                        id="class-type-1"
                                        type="radio"
                                        name="classType"
                                        value="ECONOMY"
                                        className="w-4 h-4 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="class-type-1"
                                        className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        ECONOMY CLASS
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="class-type-2"
                                        type="radio"
                                        name="classType"
                                        value="BUSINESS"
                                        className="w-4 h-4 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="class-type-2"
                                        className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        BUSINESS CLASS
                                    </label>
                                </div>
                            </fieldset>

                            {/* Search Button */}
                            <div className="flex items-center justify-center">
                                <button className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:ring-sky-300 font-semibold rounded-lg text-sm md:text-lg px-10 py-2 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
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
