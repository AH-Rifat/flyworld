import { Link } from "@inertiajs/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestDealSection = () => {
    const hotDealData = [
        {
            id: 1,
            title: "Sheraton Maldives Full Moon Resort & Spa",
            price: "127891",
            days: "3 Days & 2 Nights",
            image: "https://images.unsplash.com/photo-1618396755206-ff25b5737b8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2hlcmF0b24lMjBNYWxkaXZlcyUyMEZ1bGwlMjBNb29uJTIwUmVzb3J0JTIwJTI2JTIwU3BhfGVufDB8MHwwfHx8Mg%3D%3D",
            link: "",
        },
        {
            id: 2,
            title: "Adaaran Prestige Vadoo, Maldives",
            price: "161457",
            days: "4 Days & 3 Nights",
            image: "https://images.unsplash.com/photo-1698951313376-2b2937bc0b43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fEFkYWFyYW4lMjBQcmVzdGlnZSUyMFZhZG9vJTJDJTIwTWFsZGl2ZXN8ZW58MHwwfDB8fHwy",
            link: "",
        },
        {
            id: 3,
            title: "Paradise Island Resort & Spa",
            price: "72690",
            days: "3 Days & 2 Nights",
            image: "https://images.unsplash.com/photo-1503125210483-8b1d12bccdbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGFyYWRpc2UlMjBJc2xhbmQlMjBSZXNvcnQlMjAlMjYlMjBTcGF8ZW58MHwwfDB8fHwy",
            link: "",
        },
        {
            id: 4,
            title: "Exotic Honeymoon in Bali",
            price: "86900",
            days: "5 Days & 4 Nights",
            image: "https://images.unsplash.com/photo-1628671708587-03934c4cab94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RXhvdGljJTIwSG9uZXltb29uJTIwaW4lMjBCYWxpfGVufDB8MHwwfHx8Mg%3D%3D",
            link: "",
        },
        {
            id: 5,
            title: "Le Meridien Maldives Resort & Spa II",
            price: "312500",
            days: "5 Days & 4 Nights",
            image: "https://images.unsplash.com/photo-1549248166-7a3b3ac4ab66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fExlJTIwTWVyaWRpZW4lMjBNYWxkaXZlcyUyMFJlc29ydCUyMCUyNiUyMFNwYSUyMElJfGVufDB8MHwwfHx8Mg%3D%3D",
            link: "",
        },
        {
            id: 6,
            title: "Radisson Blu Resort II",
            price: "295000",
            days: "5 Days & 4 Nights",
            image: "https://images.unsplash.com/photo-1501698335706-90b736210a61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UmFkaXNzb24lMjBCbHUlMjBSZXNvcnQlMjBJSXxlbnwwfDB8MHx8fDI%3D",
            link: "",
        },
        {
            id: 7,
            title: "GRAND PARK KODHIPPARU- II",
            price: "218355",
            days: "5 Days & 4 Nights",
            image: "https://images.unsplash.com/photo-1478915765319-04e68e890018?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEdSQU5EJTIwUEFSSyUyMEtPREhJUFBBUlUlMjAlMjBJSXxlbnwwfDB8MHx8fDI%3D",
            link: "",
        },
        {
            id: 8,
            title: "Radisson Blu Resort",
            price: "230000",
            days: "4 Days & 3 Nights",
            image: "https://images.unsplash.com/photo-1529316275402-0462fcc4abd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UmFkaXNzb24lMjBCbHUlMjBSZXNvcnR8ZW58MHwwfDB8fHwy",
            link: "",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Show 3 slides at once
        slidesToScroll: 1,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
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

            {/* Removed flex classes and added slider container padding */}
            <div className="px-8">
                <Slider {...settings}>
                    {hotDealData.map((item) => (
                        <div key={item.id} className="px-2">
                            {" "}
                            {/* Added padding around each slide */}
                            <div className="card overflow-hidden">
                                {/* Image Container */}
                                <div className="relative w-full h-60 md:h-72 overflow-hidden">
                                    <img
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                        src={item.image}
                                        alt={item.title}
                                    />
                                </div>

                                {/* Card Content */}
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold h-10">
                                        {item.title}
                                    </h2>
                                    <p className="flex justify-between items-center my-4 text-sky-700 font-semibold text-md">
                                        <span>{item.days}</span>
                                        <span>
                                            <span className="text-2xl">৳</span>{" "}
                                            {item.price}
                                        </span>
                                    </p>
                                    <div className="text-center mt-6 mb-2">
                                        <Link
                                            href={item.link}
                                            className="px-5 py-1.5 w-full text-md font-medium text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 rounded-lg"
                                        >
                                            VIEW DETAILS
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default BestDealSection;
