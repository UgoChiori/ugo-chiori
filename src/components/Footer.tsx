// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";

// // const SOCIAL_LINKS = [
// //   { label: "Instagram", href: "https://www.instagram.com/cofffeeee_lover/" },
// //   { label: "Threads", href: "https://www.threads.com/@cofffeeee_lover" },
// //   {
// //     label: "LinkedIn",
// //     href: "https://www.linkedin.com/in/ugo-chiori-b53439309/",
// //   },
// // ];

// // const CONTACT_INFO = {
// //   email: "ugochiori@gmail.com",
// //   phone: "+234 811 7530 292",
// //   phoneRaw: "+2348117530292",
// // };

// // const Footer: React.FC = () => {
// //   const [time, setTime] = useState(new Date());
// //   const [isMounted, setIsMounted] = useState(false);

// //   useEffect(() => {
// //     setIsMounted(true);
// //     const timer = setInterval(() => setTime(new Date()), 1000);
// //     return () => clearInterval(timer);
// //   }, []);

// //   const formatTime = (date: Date) => {
// //     const hours12 = date.getHours().toString().padStart(2, "0");
// //     const minutes = date.getMinutes().toString().padStart(2, "0");
// //     const zone = date
// //       .toLocaleTimeString("en-us", { timeZoneName: "short" })
// //       .split(" ")
// //       .pop();
// //     const ampm = date.getHours() >= 12 ? "PM" : "AM";

// //     return { hours12, minutes, ampm, zone };
// //   };

// //   const { hours12, minutes, ampm, zone } = formatTime(time);
// //   const btnClasses =
// //     "border border-white/20 px-8 py-5 rounded-full hover:bg-white hover:text-black transition-colors duration-300";

// //   return (
// //     <footer className="bg-[#1C1D20] text-white px-[4%] py-20 font-sans">
// //       <style>
// //         {`
// //           @keyframes blink {
// //             0%, 100% { opacity: 1; }
// //             50% { opacity: 0.3; }
// //           }
// //           .animate-blink {
// //             animation: blink 1.5s infinite;
// //           }
// //         `}
// //       </style>

// //       <svg
// //         id="line"
// //         viewBox="0 0 500 50"
// //         className="w-full mt-6 mb-6 overflow-visible"
// //         aria-hidden="true"
// //       >
// //         <path
// //           d="M0 25 Q250 5 500 25"
// //           stroke="currentColor"
// //           className="text-gray-500"
// //           strokeWidth="1"
// //           fill="transparent"
// //         />
// //       </svg>

// //       <div className="max-w-[1440px] mx-auto">
// //         <section className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-32">
// //           <div className="flex items-center gap-8">
// //             <img
// //               src="/images/ugosmile.png"
// //               alt="Ugo Chiori Profile"
// //               className="w-20 h-20 rounded-full object-cover"
// //               loading="lazy"
// //             />
// //             <h2 className="text-6xl md:text-8xl font-light tracking-tight leading-tight">
// //               Let’s work <br /> together
// //             </h2>
// //           </div>

// //           <div className="mt-12 md:mt-0 md:absolute md:right-20 md:top-1/2 md:-translate-y-1/2">
// //             <Link to="contact">
// //               <button
// //                 type="button"
// //                 className="w-40 h-40 bg-[#455CE9] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#455CE9]"
// //               >
// //                 <span className="text-sm font-medium">Get in touch</span>
// //               </button>
// //             </Link>
// //           </div>
// //           <div
// //             className="hidden md:block absolute right-0 top-0 text-2xl"
// //             aria-hidden="true"
// //           >
// //             ↙
// //           </div>
// //         </section>

// //         <address className="not-italic flex flex-wrap gap-4 mb-32">
// //           <a href={`mailto:${CONTACT_INFO.email}`} className={btnClasses}>
// //             {CONTACT_INFO.email}
// //           </a>
// //           <a href={`tel:${CONTACT_INFO.phoneRaw}`} className={btnClasses}>
// //             {CONTACT_INFO.phone}
// //           </a>
// //         </address>

// //         <div className="flex flex-col md:flex-row justify-between items-end pt-8 border-t border-white/10 text-[12px] uppercase tracking-widest text-white/50">
// //           <div className="flex gap-12 mb-8 md:mb-0">
// //             <div>
// //               <p className="mb-2 opacity-60">Version</p>
// //               <p className="text-white">2026 © Edition</p>
// //             </div>

// //             <div
// //               className={`transition-opacity duration-1000 ${
// //                 isMounted ? "opacity-100" : "opacity-0"
// //               }`}
// //             >
// //               <p className="mb-2 opacity-60">Local Time</p>
// //               <p className="text-white tabular-nums">
// //                 {hours12}
// //                 <span className="animate-blink mx-[1px]">:</span>
// //                 {minutes} {ampm} {zone}
// //               </p>
// //             </div>
// //           </div>

// //           <div className="flex flex-col items-end">
// //             <p className="mb-2 self-start md:self-auto opacity-60">Socials</p>
// //             <nav>
// //               <ul className="flex gap-6 text-white">
// //                 {SOCIAL_LINKS.map((link) => (
// //                   <li key={link.label}>
// //                     <a
// //                       href={link.href}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       className="hover:underline focus:underline transition-all"
// //                     >
// //                       {link.label}
// //                     </a>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </nav>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const SOCIAL_LINKS = [
//   { label: "Instagram", href: "https://www.instagram.com/cofffeeee_lover/" },
//   { label: "Threads", href: "https://www.threads.com/@cofffeeee_lover" },
//   { label: "LinkedIn", href: "https://www.linkedin.com/in/ugo-chiori-b53439309/" },
// ];

// const CONTACT_INFO = {
//   email: "ugochiori@gmail.com",
//   phone: "+234 811 7530 292",
//   phoneRaw: "+2348117530292",
// };

// const Footer: React.FC = () => {
//   const [time, setTime] = useState("");
//   const [lang, setLang] = useState<'en' | 'fr'>('en');
//   const [isMounted, setIsMounted] = useState(false);

//   // 1. Translation Dictionary
//   const content = {
//     en: {
//       heading: <>Let’s work <br /> together</>,
//       cta: "Get in touch",
//       version: "Version",
//       timeLabel: "Local Time",
//       socials: "Socials"
//     },
//     fr: {
//       heading: <>Travaillons <br /> ensemble</>,
//       cta: "Contactez-moi",
//       version: "Version",
//       timeLabel: "Heure Locale",
//       socials: "Réseaux Sociaux"
//     }
//   };

//   // 2. Dynamic Clock Logic based on User Location & Selected Language
//   useEffect(() => {
//     setIsMounted(true);
//     const updateTime = () => {
//       const now = new Date();
//       // Auto-detect timezone (e.g., WAT, CET)
//       const zone = now.toLocaleDateString(undefined, { day: 'numeric', timeZoneName: 'short' }).split(', ')[1] || "";
      
//       const timeString = now.toLocaleTimeString(lang === 'en' ? 'en-US' : 'fr-FR', {
//         hour: "2-digit",
//         minute: "2-digit",
//         hour12: lang === 'en',
//       });

//       setTime(`${timeString} ${zone}`);
//     };

//     updateTime();
//     const timer = setInterval(updateTime, 1000);
//     return () => clearInterval(timer);
//   }, [lang]); // Updates if language changes

//   const btnClasses = "border border-white/20 px-8 py-5 rounded-full hover:bg-white hover:text-black transition-colors duration-300";

//   return (
//     <footer className="bg-[#1C1D20] text-white px-[4%] py-20 font-sans relative">
//       {/* Language Toggle */}
//       <div className="absolute top-10 right-[4%] z-10 flex gap-4 text-[10px] tracking-widest uppercase">
//         <button 
//           onClick={() => setLang('en')} 
//           className={`transition-opacity ${lang === 'en' ? 'opacity-100 border-b border-white' : 'opacity-40 hover:opacity-100'}`}
//         >
//           EN
//         </button>
//         <button 
//           onClick={() => setLang('fr')} 
//           className={`transition-opacity ${lang === 'fr' ? 'opacity-100 border-b border-white' : 'opacity-40 hover:opacity-100'}`}
//         >
//           FR
//         </button>
//       </div>

//       <svg id="line" viewBox="0 0 500 50" className="w-full mt-6 mb-6 overflow-visible" aria-hidden="true">
//         <path d="M0 25 Q250 5 500 25" stroke="currentColor" className="text-gray-500" strokeWidth="1" fill="transparent" />
//       </svg>

//       <div className="max-w-[1440px] mx-auto">
//         <section className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-32">
//           <div className="flex items-center gap-8">
//             <img src="/images/ugosmile.png" alt="Profile" className="w-20 h-20 rounded-full object-cover" loading="lazy" />
//             <h2 className="text-6xl md:text-8xl font-light tracking-tight leading-tight">
//               {content[lang].heading}
//             </h2>
//           </div>

          // <div className="mt-12 md:mt-0 md:absolute md:right-20 md:top-1/2 md:-translate-y-1/2">
          //   <Link to="contact">
          //     <button type="button" className="w-40 h-40 bg-[#455CE9] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#455CE9]">
          //       <span className="text-sm font-medium">{content[lang].cta}</span>
          //     </button>
          //   </Link>
          // </div>
//         </section>

//         <address className="not-italic flex flex-wrap gap-4 mb-32">
//           <a href={`mailto:${CONTACT_INFO.email}`} className={btnClasses}>{CONTACT_INFO.email}</a>
//           <a href={`tel:${CONTACT_INFO.phoneRaw}`} className={btnClasses}>{CONTACT_INFO.phone}</a>
//         </address>

//         <div className="flex flex-col md:flex-row justify-between items-end pt-8 border-t border-white/10 text-[12px] uppercase tracking-widest text-white/50">
//           <div className="flex gap-12 mb-8 md:mb-0">
//             <div>
//               <p className="mb-2 opacity-60">{content[lang].version}</p>
//               <p className="text-white">2026 © Edition</p>
//             </div>

//             <div className={`transition-opacity duration-1000 ${isMounted ? "opacity-100" : "opacity-0"}`}>
//               <p className="mb-2 opacity-60">{content[lang].timeLabel}</p>
//               <p className="text-white tabular-nums uppercase">{time}</p>
//             </div>
//           </div>

//           <div className="flex flex-col items-end">
//             <p className="mb-2 self-start md:self-auto opacity-60">{content[lang].socials}</p>
//             <nav>
//               <ul className="flex gap-6 text-white">
//                 {SOCIAL_LINKS.map((link) => (
//                   <li key={link.label}>
//                     <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:underline focus:underline transition-all">
//                       {link.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/cofffeeee_lover/" },
  { label: "Threads", href: "https://www.threads.com/@cofffeeee_lover" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ugo-chiori-b53439309/" },
];

const CONTACT_INFO = {
  email: "ugochiori@gmail.com",
  phone: "+234 811 7530 292",
  phoneRaw: "+2348117530292",
};

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<SVGPathElement | null>(null);
  const ctaRef = useRef<HTMLButtonElement | null>(null);

  const [time, setTime] = useState("");
  const [lang, setLang] = useState<'en' | 'fr'>('en');
  const [isMounted, setIsMounted] = useState(false);

  const content = {
    en: {
      heading: <>Let’s work <br /> together</>,
      cta: "Get in touch",
      version: "Version",
      timeLabel: "Local Time",
      socials: "Socials"
    },
    fr: {
      heading: <>Travaillons <br /> ensemble</>,
      cta: "Contactez-moi",
      version: "Version",
      timeLabel: "Heure Locale",
      socials: "Réseaux Sociaux"
    }
  };


  useEffect(() => {
    setIsMounted(true);

    const updateTime = () => {
      const now = new Date();
      const zone = now.toLocaleDateString(undefined, { day: 'numeric', timeZoneName: 'short' }).split(', ')[1] || "";
      const timeString = now.toLocaleTimeString(lang === 'en' ? 'en-US' : 'fr-FR', {
        hour: "2-digit",
        minute: "2-digit",
        hour12: lang === 'en',
      });

      setTime(`${timeString} ${zone}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [lang]);

  // GSAP Animations
  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      // Footer reveal
      gsap.from(".footer-animate", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        }
      });

      // SVG line draw
      if (lineRef.current) {
        const length = lineRef.current.getTotalLength();
        gsap.set(lineRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(lineRef.current, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
          }
        });
      }

      // CTA pulse loop
      if (ctaRef.current) {
        gsap.to(ctaRef.current, {
          scale: 1.05,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }

    }, footerRef);

    return () => ctx.revert();
  }, []);

  const btnClasses =
    "footer-animate border border-white/20 px-8 py-5 rounded-full hover:bg-white hover:text-black transition-colors duration-300";

  return (
    <footer
      ref={footerRef}
      className="bg-[#1C1D20] text-white px-[4%] py-20 font-sans relative overflow-hidden"
    >
      {/* Language Toggle */}
<div className="absolute top-10 right-[4%] z-10 flex gap-4 text-[10px] tracking-widest uppercase footer-animate">
  <button
    onClick={() => setLang('en')}
    className={`transition-opacity ${
      lang === 'en'
        ? 'opacity-100 border-b border-white'
        : 'opacity-40 hover:opacity-100'
    }`}
  >
    EN
  </button>

  <button
    onClick={() => setLang('fr')}
    className={`transition-opacity ${
      lang === 'fr'
        ? 'opacity-100 border-b border-white'
        : 'opacity-40 hover:opacity-100'
    }`}
  >
    FR
  </button>
</div>

      <svg viewBox="0 0 500 50" className="w-full mt-6 mb-6 overflow-visible">
        <path
          ref={lineRef}
          d="M0 25 Q250 5 500 25"
          stroke="currentColor"
          className="text-gray-500"
          strokeWidth="1"
          fill="transparent"
        />
      </svg>

      <div className="max-w-[1440px] mx-auto">

        <section className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-32">

          <div className="flex items-center gap-8 footer-animate">
            <img
              src="/images/ugosmile.png"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <h2 className="text-6xl md:text-8xl font-light tracking-tight leading-tight">
              {content[lang].heading}
            </h2>
          </div>

          <div className="mt-12 md:mt-0 md:absolute md:right-20 md:top-1/2 md:-translate-y-1/2 footer-animate">
            <Link to="contact">
              <button
                ref={ctaRef}
                
                className="w-40 h-40 bg-[#455CE9] rounded-full flex items-center justify-center cursor-pointer"
              >
                <span className="text-sm font-medium">
                  {content[lang].cta}
                </span>
              </button>
            </Link>
          </div>
        </section>

        <address className="not-italic flex flex-wrap gap-4 mb-32">
          <a href={`mailto:${CONTACT_INFO.email}`} className={btnClasses}>
            {CONTACT_INFO.email}
          </a>
          <a href={`tel:${CONTACT_INFO.phoneRaw}`} className={btnClasses}>
            {CONTACT_INFO.phone}
          </a>
        </address>

        <div className="flex flex-col md:flex-row justify-between items-end pt-8 border-t border-white/10 text-[12px] uppercase tracking-widest text-white/50 footer-animate">
          <div className="flex gap-12 mb-8 md:mb-0">
            <div>
              <p className="mb-2 opacity-60">{content[lang].version}</p>
              <p className="text-white">2026 © Edition</p>
            </div>

            <div className={`transition-opacity duration-1000 ${isMounted ? "opacity-100" : "opacity-0"}`}>
              <p className="mb-2 opacity-60">{content[lang].timeLabel}</p>
              <p className="text-white tabular-nums uppercase">{time}</p>
            </div>
          </div>

          <nav>
            <ul className="flex gap-6 text-white">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label} className="footer-animate">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
