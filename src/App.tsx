import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/HomePage";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Contact from "./components/Contact";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Lenis from "@studio-freight/lenis";
import Work from "./components/Work";

gsap.registerPlugin(ScrollTrigger, SplitText);
const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

const App: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/prices" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
