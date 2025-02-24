import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import WhyFlyWorld from "./components/WhyFlyWorld";
import BestDealSection from "./components/BestDealSection";

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <BestDealSection />
            <WhyFlyWorld />
            <Footer />
        </>
    );
};

export default Home;
