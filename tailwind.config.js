/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'], // Add Raleway as a custom font
        maharlika: ['Maharlika', 'sans-serif'], // Add Maharlika as a custom font
        sudo: ['"Sudo Var"', 'sans-serif'], // Add Sudo Var as a custom font
      },
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'dark-purple': '#2E1F31',
      'light-green': '#71AE6F',
      'dark-green': '#34875F',
      'hover-green': '#84F8C7',
    },

    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '50',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
  },
  plugins: [],
}
