import React from "react";

const BestDealSection = () => {
    const hotDealData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    return (
        <>
            <section className="my-28">
                <div className="flex flex-col justify-center items-center h-40 text-center">
                    <h3 className="text-gray-800 font-bold text-3xl">
                        Best Honeymoon Deals
                    </h3>
                    <p className="text-gray-700 my-4">
                        Best honeymoon packages to plan your incredibly romantic
                        honeymoon tour are shown
                    </p>
                </div>

                <div className="flex flex-col  md:flex-row items-center justify-center gap-10 mx-10">
                    {hotDealData.map((item) => {
                        return (
                            <div key={item.id} className="card">
                                <img
                                    className="rounded-t-lg"
                                    src={
                                        "https://ak-d.tripcdn.com/images/0224j12000a2dmdmf803D_W_960_540_R5.webp"
                                    }
                                    alt=""
                                />
                                <div className="p-4">
                                    <h2 className="mx-2 text-lg font-semibold">
                                        Sheraton Maldives Full Moon Resort & Spa
                                    </h2>
                                    <div className="flex justify-between items-center mx-6">
                                        <p className="text-lg text-sky-700">
                                            3 Days & 2 Nights
                                        </p>
                                        <p className="text-lg text-sky-700 mb-2 mt-1">
                                            $233223
                                        </p>
                                    </div>
                                    <button className="px-5 py-1.5 w-full text-md font-medium text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 rounded-lg text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                                        VIEW DETAILS
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default BestDealSection;
