import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import ContentSection from "./components/ContentSection/ContentSection";
import WhyChooseSection from "./components/WhyChooseSection/WhyChooseSection";
import FooterSection from "./components/FooterSection/FooterSection";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ContentSection />
      <WhyChooseSection />
      <FooterSection />
    </>
  );
}

export default App;
