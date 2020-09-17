module.exports = {
  theme: {
    extend: {
      colors: {
        'tutti-blue': '#3abbd1',
        'tutti-grey': '#353535',
        'tutti-text': '#5A5A5A',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif'],
      },
      margin: {
        '-hero': '-4.5rem',
      },
      backgroundImage: theme => ({
        'hero': "url('/images/tutti-veloci-hero.jpg')",
        // 'about-1': "url('/images/about-1.jpg')",
        // 'about-2': "url('/images/about-2.jpg')",
      })
    },
  },
  variants: {},
  plugins: [],
};
