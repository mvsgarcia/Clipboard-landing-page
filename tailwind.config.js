module.exports = {
  mode: 'jit',
  purge: ['./**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        strongcyan: "hsl(171, 66%, 44%)",
        lightblue: "hsl(233, 100%, 69%)",
        darkgray: "hsl(210, 10%, 33%)",
        grayblue: "hsl(201, 11%, 66%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
