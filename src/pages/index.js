import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import InfoSectionR from "../components/InfoSectionR";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import { homeObjThree } from "../components/InfoSectionR/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";
import ButtonUp from "../components/ButtonUp/ButtonUp";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.title = "Welcome To RADY Project";
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSectionR {...homeObjThree} />
      <Footer />
      <ButtonUp />
    </>
  );
};

export default Home;
