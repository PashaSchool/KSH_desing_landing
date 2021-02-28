module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'black-300' : "#5f5d5c",
        'white-darken' : "rgba(190,190,190, .7)"
      },
      margin: {
        '18': '4.375rem',
      },
      fontFamily: {
        sans: ['"Beausite"', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
