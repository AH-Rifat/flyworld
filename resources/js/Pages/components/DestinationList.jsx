import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const DestinationList = () => {
    const data = [
        {
            id: 1,
            name: "Nepal",
            image: "https://images.unsplash.com/photo-1545662618-66de187bbf69?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "",
        },
        {
            id: 2,
            name: "Thailand",
            image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "",
        },
        {
            id: 3,
            name: "Dubai",
            image: "https://images.unsplash.com/photo-1634148551170-d37d021e0cc9?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 4,
            name: "Maldives",
            image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "",
        },
        {
            id: 5,
            name: "India",
            image: "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?q=80&w=1614&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "",
        },
        {
            id: 6,
            name: "Egypt",
            image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "",
        },
        {
            id: 7,
            name: "Turkey",
            image: "https://images.unsplash.com/photo-1623621534850-d325a1980c7e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "",
        },
        {
            id: 8,
            name: "Sri Lanka",
            image: "https://images.unsplash.com/photo-1586846288010-25744d79a132?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "",
        },
    ];

    const NextArrow = ({ onClick }) => (
        <button
            className="absolute right-[-10px] md:right-[-35px] top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-all z-10"
            onClick={onClick}
            aria-label="Next"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                />
            </svg>
        </button>
    );

    const PrevArrow = ({ onClick }) => (
        <button
            className="absolute left-[-10px] md:left-[-35px] top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-all z-10"
            onClick={onClick}
            aria-label="Previous"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                />
            </svg>
        </button>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Show 3 slides at once
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: false,
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
        <div className="py-20 my-8 h-[35rem] bg-cover bg-[url('https://images.unsplash.com/photo-1534795366056-59754c3c9def?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            <h3 className="text-black font-bold text-3xl text-center mb-12">
                International Destinations Open for Travel
            </h3>
            <div className="px-4 md:px-8 max-w-7xl mx-auto">
                {/* Added container constraints */}
                <Slider {...settings}>
                    {data.map((item) => (
                        <div key={item.id} className="px-3">
                            {/* Added padding between slides */}
                            <div className="card mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="h-44 overflow-hidden">
                                    {/* Fixed height for images */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transform transition duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <p className="text-xl font-semibold mb-4">
                                        {item.name}
                                    </p>
                                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                        More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default DestinationList;
