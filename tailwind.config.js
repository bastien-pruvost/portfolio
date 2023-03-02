/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  future: { hoverOnlyWhenSupported: true },
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: (theme) => {
        const spacing = theme('spacing')

        return Object.keys(spacing).reduce((accumulator, spacingKey) => {
          return {
            ...accumulator,
            [`fit-${spacingKey}`]: `repeat(auto-fit, minmax(${spacing[spacingKey]}, 1fr))`,
            [`fill-${spacingKey}`]: `repeat(auto-fill, minmax(${spacing[spacingKey]}, 1fr))`,
          }
        }, {})
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      colors: {
        current: 'currentColor',
        grey: {
          0: '#fcfcfc',
          25: '#f6f6f7',
          50: '#edeeee',
          100: '#dcdcde',
          200: '#c1c2c5',
          300: '#96979B',
          400: '#7b7d83',
          500: '#65676e',
          600: '#4f5159',
          700: '#393c45',
          800: '#232630',
          900: '#1c1e26',
          1000: '#15171d',
        },
        jade: {
          50: '#d9ecdf',
          100: '#c6e3cf',
          200: '#b3d9bf',
          300: '#8cc69f',
          400: '#66b37f',
          500: '#40a05f',
          600: '#33804c',
          700: '#266039',
          800: '#1a4026',
          900: '#13301c',
          1000: '#0d2013',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
