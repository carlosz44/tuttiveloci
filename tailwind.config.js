module.exports = {
  theme: {
    extend: {
      colors: {
        'tutti-blue': '#3abbd1',
        'tutti-grey': '#353535',
        'tutti-text': '#5A5A5A',
        'contact': '#F4F2F2',
        'header': 'rgba(248, 248, 248, 0.85)',
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
        'cart': "url('/images/cart-background.jpg')",
      })
    },
  },
  variants: {},
  plugins: [],
};
