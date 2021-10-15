module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        's': '350px',
      },

      colors:{
        'lavender': {
          '50': '#fefaff', 
          '100': '#fcf5fe', 
          '200': '#f8e7fd', 
          '300': '#f4d9fb', 
          '400': '#ebbcf9', 
          '500': '#E39FF6', 
          '600': '#cc8fdd', 
          '700': '#aa77b9', 
          '800': '#885f94', 
          '900': '#6f4e79'
      },
      'violet': {
        '50': '#f8f2fa', 
        '100': '#f1e6f4', 
        '200': '#dcc0e4', 
        '300': '#c699d4', 
        '400': '#9c4db3', 
        '500': '#710193', 
        '600': '#660184', 
        '700': '#55016e', 
        '800': '#440158', 
        '900': '#370048'
    },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
