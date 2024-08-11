/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      keyframes: {
        rock: {
          '0%, 90%, 100%': { transform: 'rotate(0deg)' }, // Pause
          '92%, 96%': { transform: 'rotate(-10deg)' }, // Quick rock left
          '94%, 98%': { transform: 'rotate(10deg)' },  // Quick rock right
        },
      },
      animation: {
        rock: 'rock 5s ease-in-out infinite',
      },
      colors: {
        twitchGray: {
          100: '#EFEFF1',
          200: '#707073',
          250: '#36363D',
          300: '#202024',
          400: '#18181A',
          500: '#0E0E0F'
        },
        twitchPrimary: {
          100: '#9147FF',
          200: '#772ce8',
          300: '#450F93'
        },
        twitchText: {
          white: '#EFEFF1',
          purple: '#8B58FF',
          blue: '#3490FF',
          red: '#DB4A3F'
        },
      },
    },
    // width: {
    //   '1/10': '10%'
    // }
  },
  plugins: [],
}
