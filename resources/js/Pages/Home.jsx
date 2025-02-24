import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import WhyFlyWorld from "./components/WhyFlyWorld";
import BestDealSection from "./components/BestDealSection";
import HowFlyworldWorksSection from "./components/HowFlyworldWorksSection";
import DestinationList from "./components/DestinationList";

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <DestinationList />
            <BestDealSection />
            <HowFlyworldWorksSection />
            <WhyFlyWorld />
            <Footer />
        </>
    );
};

export default Home;
