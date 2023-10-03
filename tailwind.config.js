/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    minHeight: (theme) => ({
      0: '0',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        'techno-race': ['var(--font-techno-race)'],
      },
      screens: {
        xs: '475px',
        lg: '1025px',
      },
    },
  },
  plugins: [],
}
