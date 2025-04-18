import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001F"
      },
      fontFamily: {
        Outfit: ["Outfif", "sans-serif"],
        Ovo: ["Ovo", "serif"]
      },
      boxShadow: {
        'black': '4px 4px 4px #000',
        'white': '4px 4px 4px #fff'
      },
      gridTemplateColumns: {
        'auto' : "repeat(auto-fit, minmax(200px, 1fr))"
      }
    },
  },

  darkMode: 'class',
  plugins: [],
};

export default config;
