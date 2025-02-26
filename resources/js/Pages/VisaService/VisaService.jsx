import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaSearch } from "react-icons/fa";

const VisaService = () => {
    return (
        <>
            <Header />
            <section className="max-w-screen-xl mx-auto">
                <h1 className="text-center my-8 underline text-3xl font-bold text-sky-800">
                    Visa Service
                </h1>

                <div>
                    <div className="card py-2 mx-auto w-72 md:w-2/3">
                        <form className="p-3">
                            <div className=" flex flex-col md:flex-row justify-between place-items-center gap-5 md:px-20">
                                <div className="w-full md:w-96">
                                    <label
                                        htmlFor="countries"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Select your country
                                    </label>
                                    <select
                                        id="countries"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value=""></option>
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>France</option>
                                        <option>Germany</option>
                                    </select>
                                </div>
                                <div className="w-full md:w-96">
                                    <label
                                        htmlFor="category"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Select Category
                                    </label>
                                    <select
                                        id="category"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value={""}></option>
                                        <option value={""}>Tourist Visa</option>
                                        <option value={""}>Student Visa</option>
                                    </select>
                                </div>
                                <div>
                                    <ul className="w-48 text-sm font-semibold text-center text-gray-900 bg-yellow-500 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                        <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            Fast Track Application
                                        </li>
                                        <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                                            Sticker Visa
                                        </li>
                                        <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                                            On Arrival Visa
                                        </li>
                                        <li className="w-full px-4 py-2 rounded-b-lg">
                                            e-Visa
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="text-center my-4">
                                <button
                                    type="button"
                                    className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                                >
                                    <FaSearch className="me-3" />
                                    Search Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default VisaService;
