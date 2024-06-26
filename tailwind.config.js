/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {

    // Add your colours here
    colors: {
      dark_green: '#1C2A2B',
      black_1: '#24282B',
      black_2: '#000D1A',
      grey: '#C6C7C9',
      white: '#FFFFFF',
    },

    // Add Font Sizes Here
    fontSize: {
      xs: ['0.75rem', '1.2'],
      sm: ['0.875rem', '1.2'],
      base: ['1rem', '1.2'],
      lg: ['1.125rem', '1.2'],
      xl: ['1.25rem', '1.2'],
      '2xl': ['1.5rem', '1.2'],
      '3xl': ['1.875rem', '1'],
      '4xl': ['2.25rem', '1'],
      '5xl': ['3rem', '1'],
      '6xl': ['3.75rem', '1'],
      '7xl': ['4.5rem', '1'],
      '8xl': ['6rem', '1'],
      '9xl': ['8rem', '1'],
    },

    // Add Font Families here
    fontFamily: {
      raleway: [
        'raleway', 
          {
            100: 'Raleway-Thin',
            200: 'Raleway-ExtraLight',
            300: 'Raleway-Light',
            400: 'Raleway-Regular',
            500: 'Raleway-Medium',
            600: 'Raleway-SemiBold',
            700: 'Raleway-Bold',
            800: 'Raleway-ExtraBold',
            900: 'Raleway-Black',
          },
          'sans-serif'
      ],
    },

    // Add Custom Font Weights here:

    fontWeight: {
      '100': '100',
      '200': '200',
      '300': '300',
      '400': '400',
      '500': '500',
      '600': '600',
      '700': '700',
      '800': '800',
      '900': '900',
    },

    // Extend: preserve the default values for a theme option but also add new values, add your extensions under the theme.extend key in your configuration file

    extend: {
      lineHeight: {
        'tight': '.85',
        'snug': '.95',
        '12': '3rem',
      },
      spacing: {
        '5p': '5%',
        '10p': '10%',
        '15p': '15%',
      },
      minHeight:{
        '100': '100vh',
        '90': '90vh',
        '80': '80vh',
        '70': '70vh',
        '60': '60vh',
        '50': '50vh',
        '40': '40vh',
        '30': '30vh',
      },
      aspectRatio: {
        'landscape': '3 / 2',
        'portrait-tall': '5/8',
        'portrait': '4/5',
        '5/3': '5 / 3',
      },
      classes: {

      }
    },
  },
  plugins: [
  ],
}
