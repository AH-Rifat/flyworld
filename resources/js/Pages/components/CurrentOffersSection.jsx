import image1 from "../../../../public/assets/img/current-offer-01.jpg";
import image2 from "../../../../public/assets/img/current-offer-02.jpg";
import image3 from "../../../../public/assets/img/current-offer-03.jpg";
import image4 from "../../../../public/assets/img/current-offer-04.jpg";
import image5 from "../../../../public/assets/img/current-offer-05.jpg";
import image6 from "../../../../public/assets/img/current-offer-06.jpg";

const CurrentOffersSection = () => {
    return (
        <section className="my-20">
            <div className="flex flex-col justify-center items-center h-40 text-center">
                <h3 className="text-gray-800 font-bold text-3xl">
                    Current Offers
                </h3>
                <p className="text-gray-700 my-4">
                    Discover the latest Chologhuri offers and deals for your
                    next travel
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-8 md:mx-40">
                <div className="rounded-xl shadow-yellow-200 shadow-md overflow-hidden ">
                    <img
                        src={image2}
                        alt="image"
                        className="w-full h-full object-cover transform transition duration-500 hover:scale-110 hover:rounded-xl"
                    />
                </div>
                <div className="rounded-xl shadow-yellow-200 shadow-md overflow-hidden ">
                    <img
                        src={image3}
                        alt="image"
                        className="w-full h-full object-cover transform transition duration-500 hover:scale-110 hover:rounded-xl"
                    />
                </div>
                <div className="rounded-xl shadow-yellow-200 shadow-md overflow-hidden md:col-span-2">
                    <img
                        src={image1}
                        alt="image"
                        className="w-full h-full object-cover transform transition duration-500 hover:scale-110 hover:rounded-xl"
                    />
                </div>
                <div className="rounded-xl shadow-yellow-200 shadow-md overflow-hidden md:col-span-2">
                    <img
                        src={image4}
                        alt="image"
                        className="w-full h-full object-cover transform transition duration-500 hover:scale-110 hover:rounded-xl"
                    />
                </div>
                <div className="rounded-xl shadow-yellow-200 shadow-md overflow-hidden ">
                    <img
                        src={image5}
                        alt="image"
                        className="w-full h-full object-cover transform transition duration-500 hover:scale-110 hover:rounded-xl"
                    />
                </div>
                <div className="rounded-xl shadow-yellow-200 shadow-md overflow-hidden ">
                    <img
                        src={image6}
                        alt="image"
                        className="w-full h-full object-cover transform transition duration-500 hover:scale-110 hover:rounded-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default CurrentOffersSection;
