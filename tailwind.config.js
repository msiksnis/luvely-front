module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(-180deg)" },
        },
      },
      animation: {
        rotate: "rotate 200ms ease-in-out",
      },
      fontFamily: {
        poppins: ["Poppins"],
        inconsolata: ["Inconsolata"],
        quicksand: ["Quicksand"],
      },
      colors: {
        sickRed: "#ff0000",
        gold: "#ffd700",
      },
      skew: {
        "-20": "-20deg",
      },
    },
    screens: {
      sm: "768px",
      md: "945px",
      lg: "1100px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
