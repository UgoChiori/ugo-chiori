import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const About: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });

      tl.from(".about-img", {
        opacity: 0,
        x: -100,
        scale: 1.05,
        duration: 1.2,
        ease: "power3.out",
      }).from(
        ".about-text",
        {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.6",
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="bg-[#1C1D20] text-white py-24 px-6 md:px-16"
    >
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
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative overflow-hidden rounded-2xl about-img">
          <img
            src="images/ugodaen.png"
            alt="About"
            className="w-full h-auto object-cover brightness-90 contrast-90 opacity-90"
          />
        </div>

        <div className="about-text text-lg leading-relaxed text-white/80">
          <p>
            Ugo Chiori is a frontend software developer with a strong eye for
            design, motion, and user experience. With a background in
            linguistics and experience across multiple industries, she brings a
            unique blend of creativity and technical precision to every project.
            Before transitioning fully into software development, Ugo worked
            across diverse fields including baking, choreography, translation,
            and sales. These were experiences that shaped her discipline,
            attention to detail, and ability to communicate complex ideas
            clearly. She specializes in React, TypeScript, and modern frontend
            architecture, building responsive, high-performance interfaces with
            refined interactions and thoughtful motion. Driven by growth and
            continuous learning, she creates digital experiences that are not
            only functional, but intentional and impactful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
