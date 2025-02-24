import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutUsImg from "../../../../public/assets/img/about-us.jpg";
import { GiFlyingDagger, GiLightBulb } from "react-icons/gi";
import { SiPlanetscale } from "react-icons/si";
import { GoGoal } from "react-icons/go";
import { BsBuildingsFill } from "react-icons/bs";
import {
    MdAirplaneTicket,
    MdCardGiftcard,
    MdSupportAgent,
} from "react-icons/md";
import { IoCarSport } from "react-icons/io5";
import { RiEmotionHappyLine } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";

const AboutUs = () => {
    const data = [
        {
            id: 1,
            title: "Our Vission",
            description: `"Our vision is to redefine travel with innovation,
            creativity, and leadership—positioning our company
            among the world’s top tourism brands. We strive to
            be recognized for our professionalism and
            exceptional service, reaching beyond borders… and
            maybe even the stars!"`,
            icon: <GiLightBulb />,
        },
        {
            id: 2,
            title: "Our Mission",
            description: `At Fly World, our mission is to ignite the spirit
             of exploration and connect travelers with the world's beauty.
             We believe travel is more than just a journey—it’s about unforgettable
            experiences, cultural connections, and memories that last a lifetime."`,
            icon: <SiPlanetscale />,
        },
        {
            id: 3,
            title: "Our Goals",
            description: `"Our goal is to set new standards of excellence in the travel
            and tourism industry, delivering extraordinary service that ensures customer
            satisfaction while maximizing value, saving time, and enhancing every journey."`,
            icon: <GoGoal />,
        },
    ];

    const data2 = [
        {
            id: 1,
            title: "MOST TRUSTED BRAND",
            description: `With a strong focus on fulfilling customer needs and service, we are the most trusted online travel brand in Bangladesh.
            `,
            icon: <BsBuildingsFill />,
        },
        {
            id: 2,
            title: "GREAT PEERS",
            description: `We are a team of achievers. Our folks are ambitious, go getters, fun loving, aware and proactive
        `,
            icon: <MdAirplaneTicket />,
        },
        {
            id: 3,
            title: "OPEN CULTURE",
            description: `Every view and opinion is heard and respected. We talk to people not their designations
        `,
            icon: <IoCarSport />,
        },
        {
            id: 4,
            title: "FUN @ WORK",
            description: `Cricket Matches, Festival Celebrations, Yummy Food Stalls, Surprise Games…. working with us is never boring!
        `,
            icon: <GiFlyingDagger />,
        },
        {
            id: 5,
            title: "HAPPY CLIENTS",
            description: `Our clients are our heart. Our motto is to attain maximum customer satisfactions
            `,
            icon: <RiEmotionHappyLine />,
        },
        {
            id: 6,
            title: "AMAZING TOUR",
            description: `We provide the best tour deals for you
        `,
            icon: <BiSearchAlt />,
        },
        {
            id: 7,
            title: "SUPPORT CASES",
            description: `Our operators are available in 24 hours to support you
        `,
            icon: <MdSupportAgent />,
        },
        {
            id: 8,
            title: "GIFT CARDS",
            description: `We are very glad enough to introduce FLYWORLD branded gift cards for you. So its time to gift the joy of travel
        `,
            icon: <MdCardGiftcard />,
        },
    ];

    return (
        <>
            <Header />

            <section className="max-w-screen-xl mx-auto">
                <div className="card bg-sky-100 w-80 md:w-3/5 my-8 mx-auto shadow-sky-300">
                    <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                        <img
                            src={aboutUsImg}
                            alt="about us image"
                            className="w-80 h-80"
                        />
                        <div className="flex flex-col justify-center items-center gap-y-8 w-96">
                            <h3 className="text-3xl font-bold text-sky-800">
                                About Us
                            </h3>
                            <p className="text-gray-600 w-72">
                                "Welcome to Fly World – where every journey
                                begins with a dream! More than just a travel
                                agency, we are your trusted partners in
                                adventure, committed to crafting unforgettable
                                experiences with passion and excellence. Let’s
                                explore the world together!"
                            </p>
                        </div>
                    </div>
                </div>

                <section className="flex flex-col md:flex-row justify-center items-center gap-x-20 mx-6">
                    {data.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="card bg-sky-100 p-4 my-8 mx-auto shadow-sky-300 text-center"
                            >
                                <div className="flex justify-center items-center mb-4">
                                    {item.icon && (
                                        <span className="text-6xl text-amber-500">
                                            {item.icon}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-3xl mb-6 font-bold text-sky-800 text-center">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </section>

                <section className="grid grid-cols-1 md:grid-cols-4 gap-4 my-10">
                    {data2.map((item) => {
                        return (
                            <div key={item.id} className="p-6">
                                <div className="flex justify-start items-center gap-x-2 text-xl">
                                    {item.icon && (
                                        <span className="text-3xl text-amber-500">
                                            {item.icon}
                                        </span>
                                    )}
                                    <span>{item.title}</span>
                                </div>
                                <p className="mt-8 text-gray-700">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </section>
            </section>
            <hr className="text-yellow-200 my-20" />
            <Footer />
        </>
    );
};

export default AboutUs;
