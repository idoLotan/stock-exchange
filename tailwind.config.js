/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      animation: {
        marquee: "marquee 45s linear infinite",
        marquee2: "marquee2 45s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  variants: {},
  plugins: [require("tailwind-scrollbar")],
};

// const colors = require("tailwindcss/colors");

// module.exports = {
//   mode: "jit",
//   theme: {
//     extend: {
//       animation: {
//         marquee: "marquee 25s linear infinite",
//         marquee2: "marquee2 25s linear infinite",
//       },
//       keyframes: {
//         marquee: {
//           "0%": { transform: "translateX(0%)" },
//           "100%": { transform: "translateX(-100%)" },
//         },
//         marquee2: {
//           "0%": { transform: "translateX(100%)" },
//           "100%": { transform: "translateX(0%)" },
//         },
//       },
//     },
//   },
//   variants: {},
//   plugins: [],
// };
