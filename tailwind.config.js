/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#0099E6",
        
"secondary": "#FF3939",
        
"accent": "#FFE8E8",
        
"neutral": "#333C4D",
        
"base-100": "#FFFFFF",
        
"info": "#3ABFF8",
        
"success": "#009A2B",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}