import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const firstText = useRef<HTMLHeadingElement>(null);
  const secondText = useRef<HTMLHeadingElement>(null);
  const filterRef = useRef(null)
const videoRef = useRef<HTMLVideoElement>(null);

  const xPercent = useRef(0);
  const direction = useRef(-1);

  useGSAP(
  () => {
  

 
    gsap.to(".ugodawn", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "back.inOut",
      opacity: 0.9,
    });


    if (filterRef.current) {
      gsap.to(filterRef.current, {
        attr: { baseFrequency: "0.01 0.05" },
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
ScrollTrigger.create({
  trigger: "#art",
  start: "top top",
  end: "+=200%",
  pin: true,
});


    const animateMarquee = () => {
      if (xPercent.current <= -100) xPercent.current = 0;
      if (xPercent.current > 0) xPercent.current = -100;

      gsap.set(firstText.current, { x: `${xPercent.current}%` });
      gsap.set(secondText.current, { x: `${xPercent.current}%` });

      xPercent.current += 0.1 * direction.current;
      requestAnimationFrame(animateMarquee);
    };


    gsap.to({}, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => {
          direction.current = e.direction === 1 ? -1 : 1;
        },
      },
    });

    requestAnimationFrame(animateMarquee);
  },
  { scope: container }
);





  return (
    <div
      ref={container}
      id="art"
      className="relative h-screen w-full bg-[#1C1D20] overflow-hidden flex items-center justify-center font-sans"
    >
    
<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
  <video 
  src="/videos/coffee.mp4" 
  ref={videoRef}
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="w-full h-full object-cover opacity-[0.6] grayscale"
 />

 
</div>
      <div className="flex flex-col md:flex-row items-center gap-12 px-[4%]">
        <div className="ugodawn relative w-[300px] md:w-[500px] pointer-events-none overflow-hidden rounded-lg">
          <img
            src="/images/ugodawn.png"
            alt="Ugo"
            className="w-full h-auto block"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
        </div>

        <div className="flex flex-col mb-10">
          <h1 className="capitalize text-4xl md:text-6xl font-medium text-white tracking-tight">
            Frontend developer
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light italic">
            let's build together
          </p>
        </div>
      </div>

      <div className="absolute bottom-20 flex whitespace-nowrap">
        <h1
          ref={firstText}
          className="title text-[12vw] font-bold text-white uppercase opacity-40 pr-10"
        >
          Ugo Chiori
        </h1>

        <h1
          ref={secondText}
          className="title absolute left-full text-[12vw] font-bold text-white uppercase opacity-40 pr-10"
        >
          Ugo Chiori
        </h1>
      </div>
    </div>
  );
};

export default Hero;
