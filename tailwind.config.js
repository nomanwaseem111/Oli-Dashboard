/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary:'#FFBB00',
        green: '#2FC5A1',
        buttonColor:'#536DFE'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #7426B3 0%, #343957 100%)',

      },
    },
  },
  plugins: [],
}