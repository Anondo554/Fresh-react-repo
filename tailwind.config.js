/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor: "#FAE3B6",
        borderColor: "#FDBB57",
      },
      fontFamily:{
        pop: ['Poppins'],
        Ruhl: ["Frank Ruhl Libre"]
      },
      maxWidth:{
        bannerContainer: '1270px'
      }
    },
  },
  plugins: [],
}

