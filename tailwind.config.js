const { background } = require('@chakra-ui/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'theme-purple': 
          "linear-gradient(150deg, #eec5f8, rgba(255, 0, 0, 0) 70.71%), " +
          "linear-gradient(300deg, #9d6ac7, rgba(0, 255, 0, 0) 70.71%), " +
          "linear-gradient(30deg, #430b5f, rgba(0, 0, 255, 0) 70.71%)",
        'theme-green': 
          "linear-gradient(150deg, #ccedcb, rgba(255, 0, 0, 0) 70.71%), " +
          "linear-gradient(300deg, #62946B, rgba(0, 255, 0, 0) 70.71%), " +
          "linear-gradient(30deg, #2a694a, rgba(0, 0, 255, 0) 70.71%)",
        'theme-blue': 
          "linear-gradient(150deg, #cbceed, rgba(255, 0, 0, 0) 70.71%), " +
          "linear-gradient(300deg, #516ad0, rgba(0, 255, 0, 0) 70.71%), " +
          "linear-gradient(30deg, #0a2c8a, rgba(0, 0, 255, 0) 70.71%)",
      },

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
  safelist:[

      'theme-purple',
      'theme-green',
      'theme-blue',
    {
      pattern: /^theme-/,
    },
  ],
  plugins: [],
}
