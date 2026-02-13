import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const firstText = useRef<HTMLHeadingElement>(null);
  const secondText = useRef<HTMLHeadingElement>(null);
  
  // These track the animation state without triggering React re-renders
  const xPercent = useRef(0);
  const direction = useRef(-1);

  useGSAP(() => {
  
    gsap.to(".ugodawn", {
      y: -20,
      duration: 2,
      repeat: 1,
      yoyo: true,
      ease: "back.inOut",
      opacity: 0.09
    });
 gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: "",
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });
    // 2. The Marquee Logic
    const animateMarquee = () => {
      if (xPercent.current <= -100) {
        xPercent.current = 0;
      }
      if (xPercent.current > 0) {
        xPercent.current = -100;
      }

      gsap.set(firstText.current, { xPercent: xPercent.current });
      gsap.set(secondText.current, { xPercent: xPercent.current });
      
      // Base speed
      xPercent.current += 0.1 * direction.current;
      requestAnimationFrame(animateMarquee);
    };

    // 3. ScrollTrigger to change direction
    gsap.to({}, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => {
          // If scrolling down, move left (-1). If scrolling up, move right (1).
          direction.current = e.direction === 1 ? -1 : 1;
        },
      }
    });

    requestAnimationFrame(animateMarquee);
  }, { scope: container });

  return (
    <div
      ref={container}
      id="art"
      className="relative h-screen w-full bg-[#1C1D20] overflow-hidden flex items-center justify-center font-sans"
    >
     
<div className="flex flex-col md:flex-row items-center gap-12 px-[4%]">


  <div className="ugodawn relative w-[300px] md:w-[500px] pointer-events-none overflow-hidden rounded-lg">
    <img
      src="/images/ugodawn.png"
      alt="Ugo"
      className="w-full h-auto block"
    />
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
  </div>

  {/* Text Side Section */}
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