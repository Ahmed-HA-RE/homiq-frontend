module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-sm': '540px',
        'mantine-breakpoint-md': '768px',
        'mantine-breakpoint-lg': '1200px',
        'mantine-breakpoint-xl': '1450px',
      },
    },
  },
};
