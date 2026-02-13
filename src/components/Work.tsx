import React from "react";
// import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const Work: React.FC = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#words h1", {
      type: "words",
    });
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#words",
        start: "top center",
      },
    });

    scrollTimeline.from(titleSplit.words, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.02,
    });
    gsap.to(".pos-up", {
      scrollTrigger: {
        trigger: ".work-grid-section",
        scrub: 1,
      },
      y: -50,
    });

    gsap.to(".pos-down", {
      scrollTrigger: {
        trigger: ".work-grid-section",
        scrub: 1,
      },
      y: 50,
    });
    const path = document.querySelector("#line path");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#line",
        start: "top 80%",
      },
    });

    tl.fromTo(
      path,
      {
        strokeDasharray: 600,
        strokeDashoffset: 600,
      },
      {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power2.out",
      },
    )
    .to(path, {
      scaleY: 1.05,
      transformOrigin: "center",
      duration: 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  });

  return (
    <div className="bg-[#1C1D20] px-[4%] py-20">
      <svg
        id="line"
        viewBox="0 0 500 50"
        className="w-full mt-6 mb-6 overflow-visible"
      >
        <path
          id="linePath"
          d="M0 25 Q250 5 500 25"
          stroke="gray"
          strokeWidth="1"
          fill="transparent"
        />
      </svg>

      <h1
        id="words"
        className=" text-white text-center font-sans md:text-6xl text-3xl"
      >
        My Work
      </h1>
      <section className="work-grid-section ">
        <div className="work-grid-container">
          <div className="work-box pos-down img-news">
            <h3>Hair Affairs</h3>
             <a href="https://hairaffairs.vercel.app/"
              target="_blank"
                    rel="noopener noreferrer"
                  
            >
            
              {" "}
              <span className="box-link">VIEW  &#8599;</span>
            </a>
          
          </div>
          <div className="work-box pos-up img-blog">
            <h3>cafe de l'aube</h3>
               <a href="https://hairaffairs.vercel.app/"
              target="_blank"
                    rel="noopener noreferrer"
                  
            >
            <span className="box-link">VIEW &#8599;</span>
            </a>
          </div>
          <div className="work-box pos-down img-work">
            <h3>topfit gym</h3>
            <a href="https://topfitgym.vercel.app/"
             target="_blank"
                    rel="noopener noreferrer"
            >
            <span className="box-link">VIEW &#8599;</span>
            </a>
          </div>
          <div className="work-box pos-up img-talks">
            <h3>work in progress</h3>
            <span className="box-link">VIEW &#8599;</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
