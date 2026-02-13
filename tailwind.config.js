/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          fire: {
            "0%, 100" : {transform: "translateY(0px)",color: "#f97316" },
            "50%" : {transform: "translateY(-5px)",color: "#f97316" },
          },
        },
        animation: {
          fire: "fire 1s ease-in-out infinite",
        },
      },
    },
    plugins: [],
  };
  