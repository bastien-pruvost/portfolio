/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        grey: {
          50: '#f1f3f5',
          100: '#d6dce2',
          200: '#bcc5cf',
          300: '#a0aebc',
          400: '#8597a9',
          500: '#697f96',
          600: '#56687a',
          700: '#43515f',
          800: '#303a44',
          900: '#1d2329',
          1000: '#13161a',
          black: '0a0c0e',
        },
        jade: {
          50: '#eff8f2',
          100: '#cfe9d9',
          200: '#b0dbbf',
          300: '#90cca5',
          400: '#70bd8c',
          500: '#50af72',
          600: '#428f5e',
          700: '#336f49',
          800: '#244f34',
          900: '#16301f',
          1000: '#07100a',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
