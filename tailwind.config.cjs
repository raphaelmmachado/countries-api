/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      "xxsm": {"min": "0px", "max": "425px"},
      "xs" : {"min": "426px","max":"639px"},
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'}
    },
    extend: {
      minWidth: {
        "1": "50px",
        "2": "100px",
        "3": "150px",
        "4": "200px",
        "5": "250px",
        "6": "300px",
      },
      maxWidth:{
        "1": "50px",
        "2": "100px",
        "3": "150px",
        "4": "200px",
        "5": "250px",
        "6": "300px",
      }
    },
  },
  plugins: [],
};
