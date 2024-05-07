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
      textUnderlineOffset: {
        3: '3px',
      },
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
            primary: "#fcbf49",
            secondary: {
              DEFAULT: "#4985fc",
              foreground: "#ffffff",
            },
            danger: "#fc6749",
            warning: "#fff152",
            success: "#85fc49"
          }
        },
        dark: {
          layout: {},
          colors: {
            background: "#0b1120", // or DEFAULT
            //make the primary text color white
            foreground: "#CADDF2",
            primary: {
              DEFAULT: "#fcbf49",
              foreground: "#000000",
            },
            secondary: {
              DEFAULT: "#4985fc",
              foreground: "#ffffff",
            },
            danger: {
              DEFAULT: "#fc6749",
              foreground: "#000000",
            },
            warning: {
              DEFAULT: "#fff152",
              foreground: "#000000",
            },
            success: {
              DEFAULT: "#85fc49",
              foreground: "#000000",
            },
          }
        },

      }
    })
  ],
};
export default config;
