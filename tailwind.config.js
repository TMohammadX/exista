/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Aboreto: ["Aboreto", "cursive"],
      },
      backgroundImage: {
        1: "url(/img/1.jpg)",
        2: "url(/img/2.jpg)",
        3: "url(/img/3.jpg)",
        4: "url(/img/4.jpg)",
        5: "url(/img/5.jpg)",
        6: "url(/img/6.jpg)",
      },
      keyframes: {
        transition: {
          "0%, 50%": { transfrom: "translateY(100%)" },
          "100%": { transfrom: "translateY(200%)" },
        },
      },
      animation: {
        transition: "transition 2s ease-in-out",
      },
      height: {
        "2screen": "200vh",
      },
    },
  },

  plugins: [],
};
