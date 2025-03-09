import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaSearch } from "react-icons/fa";
import DocumentRequirementSection from "./DocumentRequirementSection";
import SelectCountryList from "../components/SelectCountryList"
import { useForm } from "@inertiajs/react";

const VisaService = () => {
    const { data, setData, post, errors, processing, reset } = useForm({
        'country_id': "",
    });

    const sampleDocumentPhotoData = [
        {
            id: 1,
            image: "https://www.amybd.com/visadoc/sampleVisa/49_Tourist_20220324063836.jpg",
            text: "Sydney Kingsford Smith International Airport Guest Receiving Point (Sample Photo)",
        },
        {
            id: 2,
            image: "https://www.amybd.com/visadoc/sampleVisa/49_Tourist_20220324063846.jpg",
            text: "Sydney Kingsford Smith International Airport Immigration (Sample Photo)",
        },
        {
            id: 3,
            image: "https://www.amybd.com/visadoc/sampleVisa/49_Tourist_20220803120755.jpg",
            text: "Sydney Kingsford Smith International Airport Luggage Picking Belt (Sample Photo)",
        },
        {
            id: 4,
            image: "https://www.amybd.com/visadoc/sampleVisa/49_Tourist_20220802034805.jpg",
            text: "Australia e Visa sample photo",
        },
    ];

    return (
        <>
            <Header />
            <section className="max-w-screen-xl mx-auto">
                <h1 className="text-center my-8 underline text-3xl font-bold text-sky-800">
                    Visa Service
                </h1>

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
                                <SelectCountryList
                                    value={data.country_id}
                                    onChange={(e) => setData("country_id", e.target.value)}
                                />
                                {errors.country_id && (
                                    <p className="text-red-600">{errors.country_id}</p>
                                )}
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

                <section>
                    <div className="card mx-10 my-12">
                        <h1 className="text-3xl text-center font-semibold bg-sky-200 p-2">
                            BULGARIA
                        </h1>
                        <div className="p-6">
                            <div className="flex flex-col lg:flex-row items-baseline justify-center gap-20 text-center">
                                <div className="lg:w-1/2">
                                    <strong>Sticker Visa</strong>
                                    <p className="text-sm mt-2">
                                        There is no Embassy but a consulate of
                                        the Republic of Bulgaria in Bangladesh.
                                        The Honorary Consulate of Bulgaria in
                                        Bangladesh typically offer limited
                                        consular services. Contact the consulate
                                        of Bulgaria in Dhaka directly to confirm
                                        which services they are able to offer.
                                        Bulgaria has an embassy in New Delhi,
                                        India, located at 16/17 Chandragupta
                                        Marg in Chanakyapuri.
                                    </p>
                                </div>
                                <div className="lg:w-1/2">
                                    <strong>Tourist Visa</strong>
                                    <p className="text-sm mt-2">
                                        The Standard Short Term "Tourist Visa"
                                        is for those applicants who want to
                                        visit Bulgaria for the purpose of Tour /
                                        Holidaying / Vacation. The Visitor is
                                        only permitted to stay in Bulgaria for
                                        the duration of their planned of stay
                                        but no more than 90 days.The applicant
                                        must enter and exit the Schengen area
                                        within that time limit. During their
                                        stay in Bulgaria, visitors with a
                                        Tourist Visa are not permitted to accept
                                        unauthorized employment, attend school,
                                        or represent foreign information media.
                                    </p>
                                </div>
                            </div>
                            <div className="text-center mt-8">
                                <button
                                    type="button"
                                    className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                                >
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="flex flex-col lg:flex-row gap-8 m-10">
                    <div className="flex flex-col gap-8">
                        <section className="card h-fit">
                            <h2 className="font-semibold bg-sky-200 p-2">
                                Eligibility to Apply for Visa
                            </h2>
                            <div className="p-6">
                                <p>
                                    Any Bangladeshi Nationals are Eligible to
                                    Apply for Australia Tourist Visa (having a
                                    valid MRP / E-Passport with at least 6
                                    months validity) subject to provide some
                                    required Documents. Also Applicant should,{" "}
                                    <br /> • be a genuine visitor <br /> • have
                                    enough funds to support his/her stay and
                                    leave
                                </p>
                            </div>
                        </section>

                        <section className="card h-fit">
                            <h2 className="font-semibold bg-sky-200 p-2">
                                Documents Requirements
                            </h2>
                            <div className="p-6">
                                <DocumentRequirementSection />
                            </div>
                        </section>

                        <section className="card h-fit">
                            <h2 className="font-semibold bg-sky-200 p-2">
                                Visa Fees & Service Charges
                            </h2>
                            <div className="p-6">
                                <p>
                                    Visa Fee AUD $190 Biometric Fee BDT 3,700
                                    approximately Service Charge BDT 10,000{" "}
                                    <br /> ***Visa fee & service charges are
                                    NON-REFUNDABLE
                                </p>
                            </div>
                        </section>

                        <section className="card h-fit">
                            <h2 className="font-semibold bg-sky-200 p-2">
                                Processing Time
                            </h2>
                            <div className="p-6">
                                <p>40 to 50 Working Days approximately</p>
                            </div>
                        </section>

                        <section className="card h-fit">
                            <h2 className="font-semibold bg-sky-200 p-2">
                                Sample Documents & Photos
                            </h2>
                            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {sampleDocumentPhotoData.map((item) => {
                                    return (
                                        <div className="card rounded-xl shadow-sky-200 shadow-md overflow-hidden">
                                            <div className="h-56 overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt="image"
                                                    className="w-full h-full object-cover transform transition duration-500 hover:scale-110"
                                                />
                                            </div>
                                            <p className="text-sm py-2 px-5 font-semibold text-center">
                                                {item.text}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    </div>

                    <div className="flex flex-col gap-8">
                        <section className="card h-fit">
                            <h2 className="font-semibold bg-sky-200 p-2">
                                Before Departure Requirements
                            </h2>
                            <div className="p-6">
                                <ul class=" text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                        *Original Passport including Visa.
                                    </li>
                                    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                                        *Proof of Accommodation.
                                    </li>
                                    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                                        *Round Air Tickets printed copy.
                                    </li>
                                    <li class="w-full px-4 py-2 rounded-b-lg">
                                        *Travel Insurance copy.
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section className="card h-fit">
                            <h2 className="font-semibold bg-sky-200 p-2">
                                Important Contacts & Links
                            </h2>
                            <div className="p-6">
                                <ul class=" text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                        <table>
                                            <tr className="flex gap-2">
                                                <strong>Address:</strong>
                                                <p>
                                                    Madani Avenue, Baridhara
                                                    Diplomatic Enclave, Dhaka
                                                    1212, Bangladesh.
                                                </p>
                                            </tr>
                                            <tr className="flex gap-2">
                                                <strong>Phone:</strong>
                                                <p>+88 02 0000 0000</p>
                                            </tr>
                                            <tr className="flex gap-2">
                                                <strong>Email:</strong>
                                                <p>francevisadhaka@gmail.com</p>
                                            </tr>
                                            <tr className="flex gap-2">
                                                <strong>Office Hours:</strong>
                                                <p>8:30 AM to 4:00 PM.</p>
                                            </tr>
                                        </table>
                                    </li>
                                    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
                                        <table>
                                            <tr className="flex gap-2">
                                                <strong>Address:</strong>
                                                <p>
                                                    4th Floor, Plot #37, Road
                                                    #45, 90 Gulshan North,
                                                    Commercial Area, Dhaka,
                                                    Bangladesh.
                                                </p>
                                            </tr>
                                            <tr className="flex gap-2">
                                                <strong>Phone:</strong>
                                                <p>+88 02 0000 0000</p>
                                            </tr>
                                            <tr className="flex gap-2">
                                                <strong>Email:</strong>
                                                <p>francevisadhaka@gmail.com</p>
                                            </tr>
                                            <tr className="flex gap-2">
                                                <strong>Office Hours:</strong>
                                                <p>
                                                    Winter (April- September):
                                                    9.15 am - 5.15 pm Summer
                                                    (October- March): 9.15 am –
                                                    5.45 pm Break from 1.30-
                                                    2.00 pm (for prayer and
                                                    lunch) applies round the
                                                    year.
                                                </p>
                                            </tr>
                                        </table>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section className="card h-fit">
                            <h2 className="font-semibold bg-sky-200 p-2">
                                Remarks
                            </h2>
                            <div className="p-6">
                                <p>
                                    Amy is not liable for any further delays in
                                    visa processing or for the approval or
                                    denial of any visa application, since this
                                    entirely depends on the Embassy. The embassy
                                    reserves the right to ask for more evidence
                                    and to contact the applicant for an
                                    interview if required.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default VisaService;
