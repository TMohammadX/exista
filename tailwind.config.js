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
        7: "url(/img/sss.png)",
        t: "url(/img/t.jpg)",
        b: "url(/img/b.jpg)",
        m: "url(/img/m.jpg)",
        r: "url(/img/r.jpg)",
        e: "url(/img/e.jpg)",
        s: "url(/img/s.jpg)",
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
        "90%": "90vh",
        "5%": "7vh",
        "10%": "10vh",
        "20%": "20vh",
        "30%": "30vh",
        "35%": "35vh",
        "40%": "40vh",
        "50%": "50vh",
        "5screen": "150vh",
        "2screen": "200vh",
        "3screen": "300vh",
        "4screen": "400vh",
      },
      width: {
        "90%": "90vh",
        "10%": "10%",
        "20%": "20vw",
        "30%": "30vw",
        "40%": "40vw",
        "50%": "50vw",
      },
      colors: {
        bwhite: "#F8F8FF",
      },
      backgroundPosition: {
        "10%": "20%",
        "20%": "40%",
        "30%": "60%",
        "40%": "80%",
        "50%": "100%",
      },
      objectPosition: {
        "10%": "20%",
        "20%": "40%",
        "30%": "60%",
        "40%": "80%",
        "50%": "100%",
      },
      fontSize: {
        2: "2.5vw",
      },
      inset: {
        "5%": "5%",
        "10%": "10%",
        "20%": "20%",
        "30%": "30%",
        "40%": "40%",
        "50%": "50%",
      },
    },
  },

  plugins: [],
};
