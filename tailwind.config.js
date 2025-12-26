/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      clipPath: {
        custom: "polygon(50% 0, 100% 0, 100% 100%, 0 100%)",
      },

      colors: {
        primary: "#aa6d6b",
        darkBlue: "#1e73be",
        smallBlue: "#68a4c4",
        teal: "#4B9DA9",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        varela: ["Varela Round", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      // keyframes: {
      //   slideIn: {
      //     from: { transform: "translateY(-20px)", opacity: "0" },
      //     to: { transform: "translateY(0)", opacity: "1" },
      //   },
      // },
      // animation: {
      //   slideIn: "slideIn 0.3s ease-out",
      // },
    },
  },
  plugins: [],
};
