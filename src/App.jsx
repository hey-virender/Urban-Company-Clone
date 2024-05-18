import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CarouselSection from "./components/CarouselSection";
import NewServices from "./components/NewServices";
import MostBooked from "./components/MostBooked";
import Banner from "./components/Banner";
import ApplianceRepair from "./components/ApplianceRepair";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="mx-12">
      <Navbar />
      <HeroSection />
      <CarouselSection />
      <NewServices />
      <MostBooked />
      <Banner />
      <ApplianceRepair />
      <Footer />
    </div>
  );
};

export default App;
