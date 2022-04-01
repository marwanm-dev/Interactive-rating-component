module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        white: 'white',
        black: 'black',
        orange: 'hsl(25, 97%, 53%)',
        'light-grey': 'hsl(217, 12%, 63%)',
        'med-grey': 'hsl(216, 12%, 54%)',
        'med-blue': 'hsl(213, 19%, 22%)',
        'dark-blue': 'hsl(213, 19%, 18%)',
        'very-dark-blue': 'hsl(216, 12%, 8%)',
      },
      spacing: {
        xsm: '.65rem',
        sm: '1rem',
        xmd: '1.5rem',
        md: '2rem',
        lg: '3.5rem',
        xlg: '10rem',
        pg: '8.5%',
        btn: {
          sm: '3rem',
          'p-sm': '.25rem 1rem',
        },
        rating: '27.5rem',
      },
      borderRadius: {
        sm: '.4rem',
        lg: '1.5rem',
      },
      screens: {
        xlg: { max: '1100px' },
        lg: { max: '900px' },
        mob: { max: '700px' },
        sm: { max: '500px' },
      },
      transitionDuration: {
        sm: '.25s',
        md: '.4s',
      },
      fontFamily: { default: `'Overpass', sans-serif` },
      fontSize: {
        default: '15px',
        h1: '2.075rem',
        h2: '1.5rem',
        h3: '1.4rem',
        h4: '1.25rem',
        h5: '1.15rem',
        h6: '1.05rem',
        p: '1.075rem',
        li: '1rem',
        a: '1rem',
      },
    },
  },
  plugins: [],
};
