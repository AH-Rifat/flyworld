import logo from "../../../../public/assets/img/about-us.jpg";
const HowFlyworldWorksSection = () => {
    return (
        <>
            <section className="h-[35rem] bg-cover bg-[url('../../../public/assets/img/globe-map.jpg')]">
                <div className="md:relative fixed h-full">
                    <h3 className="text-white font-bold text-3xl text-center absolute left-0 top-0 md:top-1/9 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                        How Flyworld Works?
                    </h3>
                    <img
                        src={logo}
                        alt="image"
                        className="w-80 mx-auto rounded-[30rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-sky-500 shadow-lg shadow-sky-300"
                    />
                    <p className="text-xl font-semibold text-sky-700 absolute top-4/6 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        www.flyworld.com
                    </p>
                </div>
            </section>
        </>
    );
};

export default HowFlyworldWorksSection;
