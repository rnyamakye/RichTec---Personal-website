/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "200px",
      smd: "540px",
      md: "720px",
      lg: "1080px",
      xl: "1440px",
    },
    colors: {
      "-black": "#000000",
      "-white": "#ffffff",
      "-brown": "#222222",
      "-border": "#EDEDED",
      "-tabs": "#F7F7F7",
      "-tabs-border": "#EEEEEE",
      "-backdrop": "rgba(255, 255, 255, 0.85)",
    },
    extend: {
      boxShadow: {
        customShadow: "0px 6px 12px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
