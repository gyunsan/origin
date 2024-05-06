import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#edf6f9", // or DEFAULT
            primary: "#fcbf49",
            secondary: "#e76f51",
          }
        },
        dark: {
          layout: {},
          colors: {
            background: "#003049", // or DEFAULT
            //make the primary text color white
            foreground: "#CADDF2",
            primary: "#f4a261",
            secondary: "#e76f51",
          }
        },

      }
    })
  ],
};
export default config;
