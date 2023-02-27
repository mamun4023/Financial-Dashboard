/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors : {
      white : '#FFFFFF',
      black : '#0E131A',
      blackLight  : '#272D35',
      info : '#5948B7',
      error : '#CD5656',
      // info : 'linear-gradient(102.27deg, #5948B7 0%, #602DA2 100%)',
      infoLightGradient : 'linear-gradient(279.13deg, #F362EE -9.54%, #8B28BA 151.3%)',
      infoDarkGradient : 'linear-gradient(95.04deg, #52449B 15.04%, #7D12AF 89.27%)'
    },

    extend: {
      fontFamily : {
        poppins_400 : ['poppins_400', 'poppins'],
        poppins_500 : ['poppins_500', 'poppins'],
        poppins_600 : ['poppins_600', 'poppins'],
      },
      
    },
  },
  
  plugins: [],
}