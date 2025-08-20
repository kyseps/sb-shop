/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gray-20" : "#f8f4EB",
        "gray-50" : "#EFE6E6",
        "gray-100" : "#dfcccc",
        "gray-500" : "#374151",
        "gray-200" : "#0534BA",
        

        "primary-100" : "#0534BA",
        "primary-300" : "#88B7F9",
        "primary-500" : "#EDEBE8",
        
        "secondary-400" :"#e0e7ff",
        "secondary-500" :"#c7d2fe",

        
      },
      backgroundImage : (theme) => ({
        "gradient-bluewhite" : "radial-gradient(farthest-corner at 100%  87% ,#0534BA, #CBDCF3 , #E9F5FC)",
        // "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),

      backgroundImage : (theme) => ({
        "gradient-blueDark" : "linear-gradient(0deg, #000001 0%, #0C0C42 100%);",
        // "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),

      screens :{
        xs : "480px",
        sm : "768px",
        md : "1060px",
      },
    },
  },
  plugins: [],
}