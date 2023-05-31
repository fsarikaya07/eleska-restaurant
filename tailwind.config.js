/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
        100: "23rem",
      },
      screens: {
        xsm: "340px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "900px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        "2xlx": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xlx: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lgx: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        mdx: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        smx: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
