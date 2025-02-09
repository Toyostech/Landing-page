import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,jpg}",
  ],
  theme: {
    extend: {
      width: {
        150: "150px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px"
      },
      height: {
        80: "80px",
        150: "150px",
        225:"225px",
        "90vh": "90vh", 
        190: "190px",
        
        275: "275px",
        300: "300px",

        340: "349px",
        350: "350px",
        375: "375px",
        460: "460px",
        600: "600px",
        656: "656px",
        880: "880px",
        508: "508px"

      },
      minWidth: {
        210: "210px",
        350:  "350px",
        620: "620px"
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        "2xl": "1536px",

      },
      colors: {
        headingColor: "#2e2e2e",
        textColor: "#715151",
        cartNumbg: "#e80013",
        primary: "#f5f3f3"
      }
      
    },
  },
  plugins: [],
} satisfies Config;
