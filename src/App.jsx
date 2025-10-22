import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import WhyChooseSection from "./components/WhyChooseSection/WhyChooseSection";
import StudentsSection from "./components/StudentsSection/StudentsSection";
import FooterSection from "./components/FooterSection/FooterSection";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <WhyChooseSection />
      <StudentsSection />
      <FooterSection />
    </>
  );
}

export default App;