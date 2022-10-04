/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
