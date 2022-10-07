// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

// delete deprecrated colors
delete colors.lightBlue;
delete colors.warmGray;
delete colors.coolGray;
delete colors.blueGray;
delete colors.trueGray;

module.exports = {
  theme: {
    colors: {
      ...colors,
      slate: {
        900: '#05080D',
        800: '#0A0F16',
        700: '#0D131C',
        600: '#121821',
        500: '#19202B',
        400: '#1D2531',
        300: '#28303D',
        200: '#333C4A',
        150: '#434C5A',
        100: '#7B8494',
        50: '#ACB5C2',
      },
      red: {
        500: '#30161D',
        400: '#76232B',
        300: '#F8646B',
        200: '#FF7980',
        100: '#FF8F95',
      },
    },
    fontFamily: {
      sans: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontWeight: {
      normal: 600,
      bold: 700,
    },
  },
};
