import logo from "../../../../public/assets/img/how-flyworld-works.png";
import bookIcon from "../../../../public/assets/img/soap-icon-books.png";
import planIcon from "../../../../public/assets/img/soap-icon-plane.png";
import beachIcon from "../../../../public/assets/img/soap-icon-beach.png";
import availabilityIcon from "../../../../public/assets/img/soap-icon-availability.png";
const HowFlyworldWorksSection = () => {
    return (
        <>
            <section className="h-[46rem] bg-cover bg-[url('../../../public/assets/img/globe-map.jpg')]">
                <h3 className="text-white font-bold text-3xl text-center absolute my-5 md:-my-9 lg:my-0 2xl:my-1 ms-7 md:ms-0 lg:top-760 2xl:top-840 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                    How Flyworld Works?
                </h3>
                <div className="py-24 h-full">
                    {/* top icon animation */}
                    <div className="text-center text-white font-bold w-80 mx-auto flex flex-col-reverse items-center gap-2">
                        <img src={beachIcon} alt="icon" className="w-14" />
                        <div>
                            <h3 className="text-2xl">Explore Destinations</h3>
                            <p className="text-sm">
                                Let your mind drift to the most beautiful places
                                in the world.
                            </p>
                        </div>
                    </div>
                    {/* middle company logo */}
                    <img src={logo} alt="image" className="w-80 mx-auto" />
                    <p className="text-sm relative left-30 md:left-[39.1rem] 2xl:left-[56.4rem] -top-18 md:-top-19 font-semibold text-sky-700">
                        www.flyworld.click
                    </p>
                    {/* bottom icon animation */}
                    <div className="text-center text-white font-bold w-80 mx-auto flex flex-col items-center gap-5">
                        <img
                            src={availabilityIcon}
                            alt="icon"
                            className="w-14"
                        />
                        <div>
                            <h3 className="text-2xl">Check Availability</h3>
                            <p className="text-sm">
                                Checking availability and making reservations is
                                easy.
                            </p>
                        </div>
                    </div>
                    {/* middle icon animation */}
                    <div className="relative left-0 -top-105 md:-top-80 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                        <div className="flex flex-row-reverse md:flex-row justify-between items-center text-white font-bold">
                            <div className="text-end relative left-66 md:left-50 lg:left-62 2xl:left-132 flex flex-row-reverse items-center gap-5">
                                <img
                                    src={planIcon}
                                    alt="icon"
                                    className="w-14"
                                />
                                <div>
                                    <h3 className="text-2xl">
                                        Get Ready to Fly
                                    </h3>
                                    <p className="text-sm">
                                        Kick off your trip with a smile.
                                    </p>
                                </div>
                            </div>
                            <div className="text-start relative right-28 md:right-10 lg:right-24 2xl:right-92 flex items-center gap-5">
                                <img
                                    src={bookIcon}
                                    alt="icon"
                                    className="w-14"
                                />
                                <div>
                                    <h3 className="text-2xl">Book Online</h3>
                                    <p className="text-sm">
                                        Find, compare, and book tour from around
                                        the world.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HowFlyworldWorksSection;
