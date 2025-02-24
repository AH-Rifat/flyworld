import { Link } from "@inertiajs/react";
import logo from "../../../../public/assets/img/fly-world-logo.png";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="bg-white dark:bg-gray-900 mt-14">
                <div className="p-4 py-6 lg:py-8 max-w-screen-xl mx-auto">
                    <div className="md:flex md:justify-between">
                        <Link
                            href="/"
                            className="flex items-center justify-center"
                        >
                            <img
                                src={logo}
                                className="h-20 me-3 mb-8"
                                alt="Flyworld Logo"
                            />
                        </Link>
                        <div className="flex flex-col md:flex-row justify-between gap-6">
                            <div>
                                <h2>Payment Methods</h2>
                                <ul>
                                    <li className="grid grid-cols-4">
                                        <div className="m-2">
                                            <a href="#">
                                                <img
                                                    src="https://securepay.sslcommerz.com/gwprocess/v3/assets/img/visa-sq.png"
                                                    alt=""
                                                    width="63"
                                                    height="63"
                                                />
                                            </a>
                                        </div>
                                        <div className="m-2">
                                            <a href="#">
                                                <img
                                                    src="https://securepay.sslcommerz.com/gwprocess/v3/assets/img/masterc-sq.png"
                                                    alt=""
                                                    width="63"
                                                    height="63"
                                                />
                                            </a>
                                        </div>
                                        <div className="m-2">
                                            <a href="#">
                                                <img
                                                    src="https://securepay.sslcommerz.com/gwprocess/v3/assets/img/amex-sq.png"
                                                    alt=""
                                                    width="63"
                                                    height="63"
                                                />
                                            </a>
                                        </div>
                                        <div className="m-2">
                                            <a href="#">
                                                <img
                                                    src="https://securepay.sslcommerz.com/gwprocess/v3/assets/img/dbbl-nexus-sq.png"
                                                    alt=""
                                                    width="63"
                                                    height="63"
                                                />
                                            </a>
                                        </div>
                                        <div className="m-2">
                                            <a href="#">
                                                <img
                                                    src="https://securepay.sslcommerz.com/gwprocess/v3/assets/img/dbbl-visa-sq.png"
                                                    alt=""
                                                    width="63"
                                                    height="63"
                                                />
                                            </a>
                                        </div>
                                        <div className="m-2">
                                            <a href="#">
                                                <img
                                                    src="https://securepay.sslcommerz.com/gwprocess/v3/assets/img/dbbl-master-sq.png"
                                                    alt=""
                                                    width="63"
                                                    height="63"
                                                />
                                            </a>
                                        </div>
                                        <div className="m-2">
                                            <a href="#">
                                                <img
                                                    src="https://securepay.sslcommerz.com/gwprocess/v3/assets/img/bkash-sq.png"
                                                    alt=""
                                                    width="63"
                                                    height="63"
                                                />
                                            </a>
                                        </div>
                                        <div className="m-2">
                                            <a href="#">
                                                <img
                                                    src="https://securepay.sslcommerz.com/gwprocess/v3/assets/img/mcash-sq.png"
                                                    alt=""
                                                    width="63"
                                                    height="63"
                                                />
                                            </a>
                                        </div>
                                        <div className="m-2">
                                            <a href="#">
                                                <img
                                                    src="https://securepay.sslcommerz.com/gwprocess/v3/assets/img/my-cash-sq.png"
                                                    alt=""
                                                    width="63"
                                                    height="63"
                                                />
                                            </a>
                                        </div>
                                        <div className="m-2">
                                            <a href="#">
                                                <img
                                                    src="https://securepay.sslcommerz.com/gwprocess/v3/assets/img/ab_direct-sq.png"
                                                    alt=""
                                                    width="63"
                                                    height="63"
                                                />
                                            </a>
                                        </div>
                                        <div className="m-2">
                                            <a href="#">
                                                <img
                                                    src="https://securepay.sslcommerz.com/gwprocess/v3/assets/img/upay-sq.png"
                                                    alt=""
                                                    width="63"
                                                    height="63"
                                                />
                                            </a>
                                        </div>
                                        <div className="m-2">
                                            <a href="#">
                                                <img
                                                    src="https://securepay.sslcommerz.com/gwprocess/v3/assets/img/bankasia-sq.png"
                                                    alt=""
                                                    width="63"
                                                    height="63"
                                                />
                                            </a>
                                        </div>
                                        <div className="m-2">
                                            <a href="#">
                                                <img
                                                    src="https://securepay.sslcommerz.com/gwprocess/v3/assets/img/mtb-sq.png"
                                                    alt=""
                                                    width="63"
                                                    height="63"
                                                />
                                            </a>
                                        </div>
                                        <div className="m-2">
                                            <a href="#">
                                                <img
                                                    src="https://securepay.sslcommerz.com/gwprocess/v3/assets/img/tapnpay-sq.png"
                                                    alt=""
                                                    width="63"
                                                    height="63"
                                                />
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="mb-2">
                                            <a href="#">
                                                <img
                                                    src="https://chologhuri.com/image/ecab.png"
                                                    alt=""
                                                    height="63"
                                                />
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Address
                                </h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <p>
                                            Dhaka Office: <br />
                                            Sat Masjid Super Market, <br />
                                            Mohammadpur, Dhaka- 1207 <br />{" "}
                                            Bangladesh, Phone: +88020000000
                                        </p>
                                    </li>
                                    <li className="mb-4">
                                        <p>
                                            Our Trade License Number is: <br />{" "}
                                            TRAD/DSCC/000000/0000
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Legal
                                </h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">
                                            Terms &amp; Conditions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                <div className="sm:flex sm:items-center sm:justify-between p-2 mb-4 mx-10">
                    <span className="text-sm text-gray-600 sm:text-center dark:text-gray-400">
                        © {new Date().getFullYear()}
                        <Link href="/" className="hover:underline ms-1">
                            <span className="self-center font-semibold whitespace-nowrap dark:text-white">
                                <span className="text-amber-400">Fly</span>{" "}
                                <span className="text-sky-400">World</span>
                            </span>
                        </Link>
                        . All Rights Reserved.
                    </span>
                    <div className="flex sm:justify-center justify-center sm:mt-0 mt-4">
                        <a
                            href="#"
                            className="text-sky-500 hover:text-sky-900 dark:hover:text-white"
                        >
                            <FaFacebookSquare className="w-8 h-8" />
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a
                            href="#"
                            className="text-sky-500 hover:text-sky-900 dark:hover:text-white ms-5"
                        >
                            <FaTwitterSquare className="w-8 h-8" />
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a
                            href="#"
                            className="text-sky-500 hover:text-sky-900 dark:hover:text-white ms-5"
                        >
                            <FaLinkedin className="w-8 h-8" />
                            <span className="sr-only">Linkedin page</span>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
