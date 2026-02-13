import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ContactPage: React.FC = () => {
  const container = useRef(null);
  const buttonRef = useRef(null);
  const formRef = useRef(null);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    const nameInput = document.querySelector(
      'input[placeholder="John Doe *"]',
    ) as HTMLInputElement;

    if (!nameInput?.value) {
      gsap.to(formRef.current, {
        x: -10,
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.to(formRef.current, { x: 0 });
        },
      });

      // Optional: Turn the underline red temporarily
      gsap.to(".group border-t", { borderColor: "#ef4444", duration: 0.3 });
    } else {
      // Success logic here
      console.log("Form Submitted");
    }
  };

  useGSAP(() => {
    gsap.from(".reveal-text", {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
    });

    const moveButton = (e: MouseEvent) => {
      if (!buttonRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = (
        buttonRef.current as HTMLElement
      ).getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      gsap.to(buttonRef.current, {
        x: x * 0.35,
        y: y * 0.35,
        duration: 0.5,
      });
    };

    const resetButton = () => {
      gsap.to(buttonRef.current, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const buttonArea = buttonRef.current as any;
    buttonArea.addEventListener("mousemove", moveButton);
    buttonArea.addEventListener("mouseleave", resetButton);

    return () => {
      buttonArea.removeEventListener("mousemove", moveButton);
      buttonArea.removeEventListener("mouseleave", resetButton);
    };
  }, []);

  return (
    <div
      ref={container}
      className="min-h-screen bg-[#1C1D20] text-white px-[4%] pt-24 pb-10"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div ref={formRef} className="flex-[1.5]">
          <div className="overflow-hidden mb-12">
            <h1 className="reveal-text text-5xl md:text-7xl font-light tracking-tight leading-tight">
              Let's build <br /> together
            </h1>
          </div>

          <form className="space-y-8">
            {[
              { id: "01", label: "What's your name?", placeholder: "Name" },
              {
                id: "02",
                label: "What's your email?",
                placeholder: "name@mail.com",
              },
              {
                id: "03",
                label: "What's the name of your organization?",
                placeholder: "Write Here",
              },
              {
                id: "04",
                label: "What services are you looking for?",
                placeholder: "Web Design, Web Development...",
              },
              {
                id: "05",
                label: "Your message",
                placeholder: "Write Messge here...",
              },
            ].map((field) => (
              <div
                key={field.id}
                className="group border-t border-white/10 pt-6 relative"
              >
                <div className="flex items-start gap-4">
                  <span className="text-white/20 text-[10px] mt-2 font-mono">
                    {field.id}
                  </span>
                  <div className="flex-1">
                    <label className="block text-xl mb-2 text-white/80 group-focus-within:text-white transition-colors duration-300">
                      {field.label}
                    </label>
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      className="w-full bg-transparent border-none outline-none text-lg pb-4 placeholder:text-white/10 focus:placeholder:text-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[1px]  scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </form>
        </div>

        <div className="md:w-[300px] flex flex-col items-start pt-4">
          <div className="mb-10">
            <img
              src="/images/ugosmile.png"
              alt="Ugo"
              className="w-20 h-20 rounded-full object-cover mb-6 border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
            />

            <div className="space-y-6 text-[11px] uppercase tracking-widest text-white/40">
              <section>
                <p className="text-white/20 mb-3">Contact Details</p>
                <a
                  href="mailto:info@ugochiori.com"
                  className="text-white block hover:text-[#455CE9] transition-colors"
                >
                  ugochiori@gmail.com
                </a>
                <p className="text-white mt-1">+234 811 753 0292</p>
              </section>

              <section>
                <p className="text-white/20 mb-3">Socials</p>
                <div className="flex flex-col gap-2">
                  {["LinkedIn", "GitHub", "Twitter"].map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-white hover:text-[#455CE9] transition-all w-fit cursor-pointer"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="mt-auto self-center md:self-end pr-0 md:pr-10">
            <button
              ref={buttonRef}
              onClick={handleSend}
              className="w-36 h-36 bg-[#455CE9] rounded-full text-white font-medium text-sm flex items-center justify-center shadow-2xl relative overflow-hidden group"
            >
              <span className="relative z-10">Send it!</span>
              <div className="absolute inset-0 bg-white scale-0 cursor-pointer transition-transform duration-500 rounded-full mix-blend-difference" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mt-20 pt-6 border-t border-white/5 flex justify-between text-[9px] uppercase tracking-[0.3em] text-white/20">
        <p>2026 © Edition</p>
        <p>Lekki, Lagos, NG</p>
      </div>
    </div>
  );
};

export default ContactPage;
