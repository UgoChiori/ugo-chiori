import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (open) {
      gsap.to(menuRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      });
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.6,
        ease: "power3.in",
      });
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-20 z-[1000] mix-blend-difference font-sans">
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-6 md:px-16">
          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 md:w-11 md:h-11 bg-white/10 rounded-full flex flex-col justify-center items-center gap-1 border border-white/20 transition-colors cursor-pointer"
          >
            <div
              className={`w-[18px] h-[1px] bg-white transition-all duration-300 ${
                open ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <div
              className={`w-[18px] h-[1px] bg-white transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>

          <Link className="cursor-pointer" to="/">
            {" "}
            <span className="font-medium tracking-[0.15em] md:tracking-[0.2em] text-[16px] md:text-[18px] text-white whitespace-nowrap capitalize">
              ugo chiori
            </span>
          </Link>

          <Link
            to="/contact"
            className="bg-white text-black py-2 px-5 md:py-2.5 md:px-7 rounded-full font-bold text-[11px] md:text-[12px] uppercase tracking-wide transition-transform hover:scale-105 active:scale-95"
          >
            Get in touch
          </Link>
        </div>
      </nav>
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-screen bg-[#1C1D20] flex flex-col items-center justify-center gap-10 text-white text-3xl font-light font-sans z-[999] translate-y-[-100%] opacity-0 "
      >
        <Link
          to="/work"
          className="cursor-pointer"
          onClick={() => setOpen(false)}
        >
          Work
        </Link>
        <Link to="/about" onClick={() => setOpen(false)}>
          About
        </Link>
        <Link to="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
