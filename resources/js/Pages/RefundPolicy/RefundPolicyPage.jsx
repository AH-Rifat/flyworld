import Footer from "../components/Footer";
import Header from "../components/Header";

const RefundPolicyPage = () => {
    return (
        <>
            <Header />
            <section className="max-w-screen-xl mx-auto px-4 py-12">
                {/* Heading */}
                <h1 className="text-center mb-8 text-3xl font-bold text-sky-800 underline decoration-sky-800 decoration-2">
                    Refund Policy
                </h1>

                {/* Refund Policy Details */}
                <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
                    <h2 className="text-xl md:text-2xl font-semibold text-sky-800 mb-4 md:mb-6">
                        Cancellation & Refund Guidelines
                    </h2>
                    <p className="text-gray-700 mb-6 text-sm md:text-base">
                        While our holiday packages are generally non-refundable,
                        we may offer exceptions for cancellations in certain
                        situations. Written notice is required for
                        cancellations, and refunds will be processed as per our
                        refund policy.
                    </p>

                    {/* Refund Charges Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead className="bg-sky-50">
                                <tr>
                                    <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-semibold text-sky-800 uppercase">
                                        Timeframe
                                    </th>
                                    <th className="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-semibold text-sky-800 uppercase">
                                        Refund Charges
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-200">
                                    <td className="px-4 py-2 md:px-6 md:py-4 text-xs md:text-sm text-gray-700">
                                        Prior to 45 days or more
                                    </td>
                                    <td className="px-4 py-2 md:px-6 md:py-4 text-xs md:text-sm text-gray-700">
                                        Booking Fee
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="px-4 py-2 md:px-6 md:py-4 text-xs md:text-sm text-gray-700">
                                        Between 44-31 days ahead of departure
                                    </td>
                                    <td className="px-4 py-2 md:px-6 md:py-4 text-xs md:text-sm text-gray-700">
                                        50% of tour cost
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="px-4 py-2 md:px-6 md:py-4 text-xs md:text-sm text-gray-700">
                                        Between 30-16 days of departure
                                    </td>
                                    <td className="px-4 py-2 md:px-6 md:py-4 text-xs md:text-sm text-gray-700">
                                        75% of tour cost
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="px-4 py-2 md:px-6 md:py-4 text-xs md:text-sm text-gray-700">
                                        15 days to date of departure
                                    </td>
                                    <td className="px-4 py-2 md:px-6 md:py-4 text-xs md:text-sm text-gray-700">
                                        100%
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 md:px-6 md:py-4 text-xs md:text-sm text-gray-700">
                                        In case of no show
                                    </td>
                                    <td className="px-4 py-2 md:px-6 md:py-4 text-xs md:text-sm text-gray-700">
                                        100%
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Thank You Message */}
                    <p className="text-center text-sm md:text-lg text-gray-600 mt-8 mb-4">
                        Thank you for your understanding and support.
                    </p>

                    {/* Team Signature */}
                    <p className="text-center text-gray-700 italic text-sm md:text-base">
                        Best regards, <br />
                        <span className="font-semibold">The Flyworld Team</span>
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default RefundPolicyPage;
