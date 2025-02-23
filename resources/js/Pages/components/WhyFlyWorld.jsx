import { MdCreditScore } from "react-icons/md";

const WhyFlyWorld = () => {
    return (
        <>
            <div className="bg-sky-100">
                <section className="max-w-screen-xl mx-auto flex flex-col items-center justify-center gap-y-3">
                    <h2 className="text-3xl mt-10 font-bold text-slate-800">
                        Why Flyworld
                    </h2>
                    <div className="flex flex-col md:flex-row items-center gap-8 my-10">
                        <div className="w-60 text-center flex flex-col justify-center items-center">
                            <MdCreditScore className="w-14 h-14 mb-1 text-amber-500" />
                            <h3 className="text-xl mb-3">
                                Your Trusted Advisor
                            </h3>
                            <p className="text-xs text-gray-600">
                                We’ll answer your every question. Our
                                experienced travel experts and real-time on
                                field know-how gives us this advantage
                            </p>
                        </div>
                        <div className="w-60 text-center flex flex-col justify-center items-center">
                            <MdCreditScore className="w-14 h-14 mb-1 text-amber-500" />
                            <h3 className="text-xl mb-3">We Love Listening</h3>
                            <p className="text-xs text-gray-600">
                                Your holiday, your terms. We’ll fill in the
                                blanks to plan the perfect trip in the blink of
                                an eye.
                            </p>
                        </div>
                        <div className="w-60 text-center flex flex-col justify-center items-center">
                            <MdCreditScore className="w-14 h-14 mb-1 text-amber-500" />
                            <h3 className="text-xl mb-3">
                                Memorable Experiences
                            </h3>
                            <p className="text-xs text-gray-600">
                                Do everything or do nothing. Either way, your
                                holiday will be nothing less than
                                extraordinary..
                            </p>
                        </div>
                        <div className="w-60 text-center flex flex-col justify-center items-center">
                            <MdCreditScore className="w-14 h-14 mb-1 text-amber-500" />
                            <h3 className="text-xl mb-3">Easy as ABC</h3>
                            <p className="text-xs text-gray-600">
                                Travel smooth and stress-free. That’s how easy
                                we make it because that’s how your holiday
                                should be..
                            </p>
                        </div>
                    </div>
                </section>
                <div className="flex justify-center items-center h-72 bg-cover bg-[url('https://images.unsplash.com/photo-1510917181191-85abe24b5300?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-x-24 gap-y-6 text-center">
                        <h3 className="text-2xl text-white font-semibold">
                            Get the latest travel advice, information and
                            inspiration!
                        </h3>
                        <form>
                            <input
                                type="email"
                                className="block p-3 mb-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-md focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                                placeholder="Enter your email address"
                            />
                            <button className="px-5 py-2.5 w-full text-md font-medium text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 rounded-lg text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                                SIGN UP
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyFlyWorld;
