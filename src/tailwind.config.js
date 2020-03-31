const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      body: ['"Be Vietnam"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif']
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
        darkblue: '#4C68EF',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      },
      borderRadius: {
        xl: '2rem',
      }
    }
  },
  variants: {},
  plugins: [],
};
