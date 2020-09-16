module.exports = {
  theme: {
    extend: {
      colors: {
        'tutti-blue': '#3abbd1',
        'tutti-grey': '#363636',
        'tutti-text': '#222222',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif'],
      },
      margin: {
        '-hero': '-6.5rem',
        '-hero-m': '-4.5rem',
      },
      backgroundImage: theme => ({
        'hero': "url('/images/hero-slider.jpg')",
      })
    },
  },
  variants: {},
  plugins: [],
};
