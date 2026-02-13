import React from "react";
import Hero from "./Hero";
import Work from "./Work";
import Footer from "./Footer";
import About from "./About";
const HomePage:React.FC = () => {
  return (
    <div className="bg-[#1C1D20] ">
      <Hero />
      <Work />
      <About />
      <Footer />
    
    </div>
  );
};

export default HomePage;
