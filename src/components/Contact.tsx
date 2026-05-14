// // import React, { useRef, useState } from "react";
// // import gsap from "gsap";
// // import { useGSAP } from "@gsap/react";
// // import axios from "axios";

// // const ContactPage: React.FC = () => {
// //   const [ formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     message: "",
// //   })
// //   const [status, setStatus] = useState("");
// //   const [showModal, setShowModal] = useState(false);
// //   const [loading, setLoading] = useState(false);
// //   const container = useRef(null);
// //   const buttonRef = useRef(null);
// //   const formRef = useRef(null);
// //   const form = useRef<HTMLFormElement>(null);
// //   const inputRef = useRef<HTMLInputElement>(null);

// //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
// //   const handleChange = (e: any) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSend = (e: React.FormEvent) => {
// //     e.preventDefault();

// //     const nameInput = document.querySelector(
// //       'input[placeholder="John Doe *"]',
// //     ) as HTMLInputElement;

// //     if (!nameInput?.value) {
// //       gsap.to(formRef.current, {
// //         x: -10,
// //         duration: 0.1,
// //         repeat: 5,
// //         yoyo: true,
// //         ease: "power1.inOut",
// //         onComplete: () => {
// //           gsap.to(formRef.current, { x: 0 });
// //         },
// //       });

// //       // Optional: Turn the underline red temporarily
// //       gsap.to(inputRef.current, { borderColor: "#ef4444", duration: 0.3 });
// //     } else {
// //       // Success logic here
// //       console.log("Form Submitted");
// //     }
// //   };

// //   useGSAP(() => {
// //     gsap.from(".reveal-text", {
// //       y: 80,
// //       opacity: 0,
// //       duration: 1,
// //       stagger: 0.1,
// //       ease: "power4.out",
// //     });

// //     const moveButton = (e: MouseEvent) => {
// //       if (!buttonRef.current) return;
// //       const { clientX, clientY } = e;
// //       const { left, top, width, height } = (
// //         buttonRef.current as HTMLElement
// //       ).getBoundingClientRect();
// //       const x = clientX - (left + width / 2);
// //       const y = clientY - (top + height / 2);

// //       gsap.to(buttonRef.current, {
// //         x: x * 0.35,
// //         y: y * 0.35,
// //         duration: 0.5,
// //       });
// //     };

// //     const resetButton = () => {
// //       gsap.to(buttonRef.current, {
// //         x: 0,
// //         y: 0,
// //         duration: 0.5,
// //         ease: "elastic.out(1, 0.3)",
// //       });
// //     };

// //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
// //     const buttonArea = buttonRef.current as any;
// //     buttonArea.addEventListener("mousemove", moveButton);
// //     buttonArea.addEventListener("mouseleave", resetButton);

// //     return () => {
// //       buttonArea.removeEventListener("mousemove", moveButton);
// //       buttonArea.removeEventListener("mouseleave", resetButton);
// //     };
// //   }, []);

// //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
// //   const handleSubmit = (e: any) => {
// //   e.preventDefault();
// //   setLoading(true);

// //   axios
// //     // .post("http://localhost:1000/api/contact", formData)
// //     .post("https://portfoliobackend-8zmz.onrender.com/api/contact", formData)
// //     .then((response) => {
// //       console.log("✅ Response:", response.data);
// //       setStatus("Message sent successfully!");
// //       setFormData({
// //         name: "",
// //         email: "",
// //         message: "",
// //       });
// //       setShowModal(true);
// //     })
// //     .catch((error) => {
// //       console.log("❌ Error:", error);
// //       console.error("❌ Error submitting form:", error);
// //       setStatus("An error occurred. Please try again later.");
// //       setShowModal(true);
// //     })
// //     .finally(() => {
// //       setLoading(false);
// //     });
// // };

// //   const closeModal = () => {
// //     setShowModal(false);
// //   };

// //   return (
// //     <div
// //       ref={container}
// //       className="min-h-screen bg-[#1C1D20] text-white px-[4%] pt-24 pb-10"
// //     >
// //       <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between gap-12">
// //         <div ref={formRef} className="flex-[1.5]">
// //           <div className="overflow-hidden mb-12">
// //             <h1 className="reveal-text text-5xl md:text-7xl font-light tracking-tight leading-tight">
// //               Let's build <br /> together
// //             </h1>
// //           </div>

// //           <form ref={form} onSubmit={handleSubmit} className="space-y-8">
// //             {[
// //               { id: "01", label: "What's your name?", placeholder: "Name" },
// //               {
// //                 id: "02",
// //                 label: "What's your email?",
// //                 placeholder: "name@mail.com",
// //               },
// //               {
// //                 id: "03",
// //                 label: "What's the name of your organization?",
// //                 placeholder: "Write Here",
// //               },
// //               {
// //                 id: "04",
// //                 label: "What services are you looking for?",
// //                 placeholder: "Web Design, Web Development...",
// //               },
// //               {
// //                 id: "05",
// //                 label: "Your message",
// //                 placeholder: "Write Messge here...",
// //               },
// //             ].map((field) => (
// //               <div
// //                 key={field.id}
// //                 className="group border-t border-white/10 pt-6 relative"
// //               >
// //                 <div className="flex items-start gap-4">
// //                   <span className="text-white/20 text-[10px] mt-2 font-mono">
// //                     {field.id}
// //                   </span>
// //                   <div className="flex-1">
// //                     <label className="block text-xl mb-2 text-white/80 group-focus-within:text-white transition-colors duration-300">
// //                       {field.label}
// //                     </label>
// //                     <input
// //                       ref={inputRef}
// //                       // name={field.id === "01" ? "name" : field.id === "02" ? "email" : field.id === "03" ? "organization" : field.id === "04" ? "services" : "message"}
// //                       type="text"
// //                       onChange={handleChange}
// //                       placeholder={field.placeholder}
// //                       className="w-full bg-transparent border-none outline-none text-lg pb-4 placeholder:text-white/10 focus:placeholder:text-transparent transition-all"
// //                     />
// //                   </div>
// //                 </div>

// //                 <div className="absolute bottom-0 left-0 w-full h-[1px]  scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-left" />
// //               </div>
// //             ))}
// //           </form>
// //         </div>

// //         <div className="md:w-[300px] flex flex-col items-start pt-4">
// //           <div className="mb-10">
// //             <img
// //               src="/images/ugosmile.png"
// //               alt="Ugo"
// //               className="w-20 h-20 rounded-full object-cover mb-6 border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
// //             />

// //             <div className="space-y-6 text-[11px] uppercase tracking-widest text-white/40">
// //               <section>
// //                 <p className="text-white/20 mb-3">Contact Details</p>
// //                 <a
// //                   href="mailto:info@ugochiori.com"
// //                   className="text-white block hover:text-[#455CE9] transition-colors"
// //                 >
// //                   ugochiori@gmail.com
// //                 </a>
// //                 <p className="text-white mt-1">+234 811 753 0292</p>
// //               </section>

// //               <section>
// //                 <p className="text-white/20 mb-3">Socials</p>
// //                 <div className="flex flex-col gap-2">
// //                   {["LinkedIn", "GitHub", "Twitter"].map((link) => (
// //                     <a
// //                       key={link}
// //                       href="#"
// //                       className="text-white hover:text-[#455CE9] transition-all w-fit cursor-pointer"
// //                     >
// //                       {link}
// //                     </a>
// //                   ))}
// //                 </div>
// //               </section>
// //             </div>
// //           </div>

// //           <div className="mt-auto self-center md:self-end pr-0 md:pr-10">
// //             <button
// //             type="submit"
// //             disabled={loading}
// //               ref={buttonRef}
// //               onClick={handleSend}
// //               className="w-36 h-36 bg-[#455CE9] rounded-full text-white font-medium text-sm flex items-center justify-center shadow-2xl relative overflow-hidden group"
// //             >
// //               <span className="relative z-10">{loading ? "Sending..." : "Send it!"}</span>
// //               <div className="absolute inset-0 bg-white scale-0 cursor-pointer transition-transform duration-500 rounded-full mix-blend-difference" />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //         {showModal && (
// //         <div
// //           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
// //           onClick={closeModal}
// //         >
// //           <div
// //             className="bg-gray-800 text-white p-6 rounded-md max-w-sm w-full"
// //             onClick={(e) => e.stopPropagation()}
// //           >
// //             <p className="text-center text-lg">{status}</p>
// //             <button
// //               className="w-full py-2 bg-gray-900 text-white uppercase font-semibold rounded-md hover:bg-gray-600 transition duration-200 border border-gray-700 mt-4 "
// //               onClick={closeModal}
// //             >
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )}

// //       <div className="max-w-[1440px] mx-auto mt-20 pt-6 border-t border-white/5 flex justify-between text-[9px] uppercase tracking-[0.3em] text-white/20">
// //         <p>2026 © Edition</p>
// //         <p>Lekki, Lagos, NG</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ContactPage;

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import axios from "axios";

type FormData = {
  name: string;
  email: string;
  organization: string;
  services: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const INITIAL_FORM_DATA: FormData = {
  name: "",
  email: "",
  organization: "",
  services: "",
  message: "",
};

const MAX_FIELD_LENGTH: Record<keyof FormData, number> = {
  name: 80,
  email: 120,
  organization: 120,
  services: 160,
  message: 2000,
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const PHONE_NUMBER_REGEX = /^\+?[0-9\s\-()]{7,}$/;

const sanitizeValue = (name: keyof FormData, value: string) => {
  const normalized = value.replace(/\r\n/g, "\n").replace(/[\0]/g, "");
  const trimmed =
    name === "message"
      ? normalized.trim()
      : normalized.replace(/\s+/g, " ").trim();

  return trimmed.slice(0, MAX_FIELD_LENGTH[name]);
};

const sanitizeFormData = (data: FormData): FormData => ({
  name: sanitizeValue("name", data.name),
  email: sanitizeValue("email", data.email).toLowerCase(),
  organization: sanitizeValue("organization", data.organization),
  services: sanitizeValue("services", data.services),
  message: sanitizeValue("message", data.message),
});

const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.name) {
    errors.name = "Please enter your name.";
  } else if (data.name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!data.email) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (data.message && data.message.length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
};

const getFieldErrorId = (fieldName: keyof FormData, error?: string) =>
  error ? `${fieldName}-error` : undefined;

// const getAriaInvalid = (error?: string) => (error ? "true" : undefined);

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const container = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;
    const nextValue = value.slice(0, MAX_FIELD_LENGTH[fieldName]);

    setFormData((prev) => ({ ...prev, [fieldName]: nextValue }));
    setErrors((prev) => {
      if (!prev[fieldName]) {
        return prev;
      }

      const nextErrors = { ...prev };
      delete nextErrors[fieldName];
      return nextErrors;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    const sanitizedData = sanitizeFormData(formData);
    const validationErrors = validateForm(sanitizedData);

    setFormData(sanitizedData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      gsap.to(formRef.current, {
        x: -10,
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.set(formRef.current, { x: 0 });
        },
      });
      setStatus("Please correct the highlighted fields and try again.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://portfoliobackend-8zmz.onrender.com/api/contact",
        sanitizedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        },
      );
      console.log("✅ Response:", response.data);
      setStatus("Message sent successfully!");
      setFormData(INITIAL_FORM_DATA);
      setErrors({});
      setShowModal(true);
    } catch (error) {
      console.error("❌ Error:", error);
      setStatus("An error occurred. Please try again later.");
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  useGSAP(() => {
    // Entrance animation
    gsap.from(".reveal-text", {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
    });

    // Magnetic Button Logic
    const moveButton = (e: MouseEvent) => {
      if (!buttonRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } =
        buttonRef.current.getBoundingClientRect();
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

    const btn = buttonRef.current;
    if (btn) {
      btn.addEventListener("mousemove", moveButton);
      btn.addEventListener("mouseleave", resetButton);
    }

    return () => {
      if (btn) {
        btn.removeEventListener("mousemove", moveButton);
        btn.removeEventListener("mouseleave", resetButton);
      }
    };
  }, []);

  const fields = [
    {
      id: "01",
      name: "name" as const,
      label: "What's your name?",
      placeholder: "John Doe *",
      type: "text",
      autoComplete: "name",
    },
    {
      id: "02",
      name: "email" as const,
      label: "What's your email?",
      placeholder: "name@mail.com *",
      type: "email",
      autoComplete: "email",
    },
    {
      id: "03",
      name: "organization" as const,
      label: "What's the name of your organization?",
      placeholder: "Write Here",
      type: "text",
      autoComplete: "organization",
    },
    {
      id: "04",
      name: "services" as const,
      label: "What services are you looking for?",
      placeholder: "Web Design...",
      type: "text",
      autoComplete: "off",
    },
    {
      id: "05",
      name: "message" as const,
      label: "Your message",
      placeholder: "Write message here...",
      type: "textarea",
      autoComplete: "off",
    },
  ];

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

          <form
            id="contact-form"
            onSubmit={handleSubmit}
            noValidate
            className="space-y-8"
          >
            {fields.map((field) => (
              (() => {
                const fieldError = errors[field.name];
                const fieldErrorId = getFieldErrorId(field.name, fieldError);

                return (
                  <div
                    key={field.id}
                    className="group border-t border-white/10 pt-6 relative"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-white/20 text-[10px] mt-2 font-mono">
                        {field.id}
                      </span>
                      <div className="flex-1">
                        <label
                          htmlFor={field.name}
                          className="block text-xl mb-2 text-white/80 group-focus-within:text-white transition-colors"
                        >
                          {field.label}
                        </label>
                        {field.type === "textarea" ? (
                          <textarea
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            autoComplete="off"
                            rows={4}
                            maxLength={MAX_FIELD_LENGTH[field.name]}
                            aria-invalid="true"
                            // aria-invalid={getAriaInvalid(fieldError) || "true"}
                            aria-describedby={fieldErrorId}
                            className="w-full resize-none bg-transparent border-none outline-none text-lg pb-4 placeholder:text-white/10 focus:placeholder:text-transparent transition-all"
                          />
                        ) : (
                          <input
                            id={field.name}
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            autoComplete="off"
                            // autoComplete={field.autoComplete || "off"}
                            inputMode={field.name === "email" ? "email" : "text"}
                            maxLength={MAX_FIELD_LENGTH[field.name]}
                            aria-invalid="true"
                            // aria-invalid={getAriaInvalid(fieldError)}
                            aria-describedby={fieldErrorId}
                            className="w-full bg-transparent border-none outline-none text-lg pb-4 placeholder:text-white/10 focus:placeholder:text-transparent transition-all"
                          />
                        )}
                        {fieldError && (
                          <p
                            id={fieldErrorId}
                            className="pb-4 text-sm text-red-400"
                          >
                            {fieldError}
                          </p>
                        )}
                      </div>
                    </div>
                    <div
                      className={`absolute bottom-0 left-0 h-[1px] w-full origin-left transition-transform duration-500 ${
                        fieldError
                          ? "scale-x-100 bg-red-400"
                          : "bg-white scale-x-0 group-focus-within:scale-x-100"
                      }`}
                    />
                  </div>
                );
              })()
            ))}
          </form>
        </div>

        <div className="md:w-[300px] flex flex-col items-start pt-4">
          <div className="mb-10">
            <img
              src="/images/ugosmile.png"
              alt="Ugo"
              className="w-20 h-20 rounded-full object-cover mb-6 grayscale hover:grayscale-0 transition-all border border-white/10"
            />
            <div className="space-y-6 text-[11px] uppercase tracking-widest text-white/40">
              <section>
                <p className="text-white/20 mb-3">Contact Details</p>
                <a
                  href="mailto:ugochiori@gmail.com"
                  className="text-white block hover:text-[#455CE9]"
                >
                  ugochiori@gmail.com
                </a>
                <p className="text-white mt-1">+234 811 753 0292</p>
              </section>
            </div>
          </div>

          <div className="mt-auto self-center md:self-end pr-0 md:pr-10">
            <button
              form="contact-form" // Link button to form
              type="submit"
              disabled={loading}
              ref={buttonRef}
              className="w-36 h-36 bg-[#455CE9] rounded-full text-white font-medium text-sm flex items-center justify-center shadow-2xl relative overflow-hidden group disabled:opacity-50"
            >
              <span className="relative z-10">
                {loading ? "Sending..." : "Send it!"}
              </span>
              <div className="absolute inset-0 bg-white scale-0 transition-transform duration-500 rounded-full mix-blend-difference" />
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-gray-800 text-white p-6 rounded-md max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-center text-lg">{status}</p>
            <button
              className="w-full py-2 bg-gray-900 text-white font-semibold rounded-md mt-4 border border-gray-700"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;

// import React, { useRef, useState } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import axios from "axios";

// /* ================= TYPES ================= */

// type FormData = {
//   name: string;
//   email: string;
//   organization: string;
//   services: string;
//   message: string;
// };

// type FormErrors = Partial<Record<keyof FormData, string>>;

// /* ================= CONSTANTS ================= */

// const INITIAL_FORM_DATA: FormData = {
//   name: "",
//   email: "",
//   organization: "",
//   services: "",
//   message: "",
// };

// const MAX_FIELD_LENGTH: Record<keyof FormData, number> = {
//   name: 80,
//   email: 120,
//   organization: 120,
//   services: 160,
//   message: 2000,
// };

// const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// /* ================= HELPERS ================= */

// const sanitizeValue = (name: keyof FormData, value: string) => {
//   const normalized = value.replace(/\r\n/g, "\n").replace(/\u0000/g, "");
//   const trimmed =
//     name === "message"
//       ? normalized.trim()
//       : normalized.replace(/\s+/g, " ").trim();

//   return trimmed.slice(0, MAX_FIELD_LENGTH[name]);
// };

// const sanitizeFormData = (data: FormData): FormData => ({
//   name: sanitizeValue("name", data.name),
//   email: sanitizeValue("email", data.email).toLowerCase(),
//   organization: sanitizeValue("organization", data.organization),
//   services: sanitizeValue("services", data.services),
//   message: sanitizeValue("message", data.message),
// });

// const validateForm = (data: FormData): FormErrors => {
//   const errors: FormErrors = {};

//   if (!data.name) errors.name = "Please enter your name.";
//   else if (data.name.length < 2)
//     errors.name = "Name must be at least 2 characters.";

//   if (!data.email) errors.email = "Please enter your email.";
//   else if (!EMAIL_REGEX.test(data.email))
//     errors.email = "Enter a valid email address.";

//   if (data.message && data.message.length < 10)
//     errors.message = "Message should be at least 10 characters.";

//   return errors;
// };

// /* ================= HOOK ================= */

// const useContactForm = () => {
//   const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [loading, setLoading] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     const { name, value } = e.target;
//     const field = name as keyof FormData;

//     setFormData((prev) => ({
//       ...prev,
//       [field]: value.slice(0, MAX_FIELD_LENGTH[field]),
//     }));

//     setErrors((prev) => {
//       if (!prev[field]) return prev;
//       const next = { ...prev };
//       delete next[field];
//       return next;
//     });
//   };

//   const submit = async () => {
//     const payload = sanitizeFormData(formData);
//     const validationErrors = validateForm(payload);

//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length > 0) {
//       return { success: false, errors: validationErrors };
//     }

//     setLoading(true);

//     try {
//       await axios.post(
//         `${import.meta.env.VITE_API_URL}/api/contact`,
//         payload,
//         { timeout: 10000 },
//       );

//       setFormData(INITIAL_FORM_DATA);
//       return { success: true };
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         return {
//           success: false,
//           message:
//             error.response?.data?.message ||
//             "Something went wrong. Try again.",
//         };
//       }
//       return { success: false, message: "Unexpected error occurred." };
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     formData,
//     errors,
//     loading,
//     handleChange,
//     submit,
//   };
// };

// /* ================= COMPONENT ================= */

// const ContactPage: React.FC = () => {
//   const {
//     formData,
//     errors,
//     loading,
//     handleChange,
//     submit,
//   } = useContactForm();

//   const [modal, setModal] = useState({
//     show: false,
//     message: "",
//   });

//   const formRef = useRef<HTMLDivElement>(null);
//   const buttonRef = useRef<HTMLButtonElement>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (loading) return;

//     const result = await submit();

//     if (!result.success) {
//       if (result.errors) {
//         gsap.to(formRef.current, {
//           x: -10,
//           duration: 0.1,
//           repeat: 5,
//           yoyo: true,
//         });
//       }

//       setModal({
//         show: true,
//         message: result.message || "Please fix the errors.",
//       });
//       return;
//     }

//     setModal({
//       show: true,
//       message: "Message sent successfully!",
//     });
//   };

//   useGSAP(() => {
//     gsap.from(".reveal-text", {
//       y: 80,
//       opacity: 0,
//       duration: 1,
//       stagger: 0.1,
//     });
//   }, []);

//   const fields = [
//     { name: "name", label: "Name", type: "text" },
//     { name: "email", label: "Email", type: "email" },
//     { name: "organization", label: "Organization", type: "text" },
//     { name: "services", label: "Services", type: "text" },
//     { name: "message", label: "Message", type: "textarea" },
//   ] as const;

//   return (
//     <div className="p-10 text-white">
//       <div ref={formRef}>
//         <h1 className="reveal-text text-4xl mb-10">
//           Let's build together
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {fields.map((field) => (
//             <div key={field.name}>
//               <label className="block mb-1">{field.label}</label>

//               {field.type === "textarea" ? (
//                 <textarea
//                   name={field.name}
//                   value={formData[field.name]}
//                   onChange={handleChange}
//                   placeholder={field.label}
//                   className="w-full p-2 text-black"
//                 />
//               ) : (
//                 <input
//                   type={field.type}
//                   name={field.name}
//                   value={formData[field.name]}

//                   onChange={handleChange}
//                   className="w-full p-2 text-black"
//                 />
//               )}

//               {errors[field.name] && (
//                 <p className="text-red-400 text-sm">
//                   {errors[field.name]}
//                 </p>
//               )}
//             </div>
//           ))}

//           <button
//             type="submit"
//             disabled={loading}
//             ref={buttonRef}
//             onMouseMove={(e) => {
//               if (!buttonRef.current) return;
//               const rect = buttonRef.current.getBoundingClientRect();
//               const x = e.clientX - (rect.left + rect.width / 2);
//               const y = e.clientY - (rect.top + rect.height / 2);

//               gsap.to(buttonRef.current, {
//                 x: x * 0.3,
//                 y: y * 0.3,
//               });
//             }}
//             onMouseLeave={() => {
//               gsap.to(buttonRef.current, {
//                 x: 0,
//                 y: 0,
//                 ease: "elastic.out(1, 0.3)",
//               });
//             }}
//             className="px-6 py-3 bg-blue-600 rounded"
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </div>

//       {modal.show && (
//         <div
//           role="dialog"
//           aria-modal="true"
//           className="fixed inset-0 bg-black/50 flex items-center justify-center"
//           onClick={() => setModal({ show: false, message: "" })}
//         >
//           <div
//             className="bg-gray-800 p-6"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <p>{modal.message}</p>
//             <button
//               onClick={() => setModal({ show: false, message: "" })}
//               className="mt-4 px-4 py-2 bg-gray-700"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactPage;
