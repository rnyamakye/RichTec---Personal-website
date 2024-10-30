/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "200px",
      md: "720px",
      lg: "1050px",
      xl: "1440px",
    },
    colors: {
      "-black": "#000000",
      "-white": "#ffffff",
      "-brown": "#222222",
      "-border": "#EDEDED",
      "-tabs": "#F7F7F7",
      "-tabs-border": "#EEEEEE",
    },
    extend: {
      boxShadow: {
        customShadow: "0px 6px 12px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
