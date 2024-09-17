/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkPurple: '#292046',
        softViolet: '#3e3163',
        lightGray: '#605d6b',
        mutedOrange: '#ff9e3d',
        headerViolet: '#372c5a',
      },
      textColor: {
        primary: '#FFF',
        secondary: '#a8a8b3',
      },
      fontFamily: {
        sans: ['Tajawal', 'Noto Kufi Arabic', 'Arial', 'sans-serif'], // For modern Arabic sans-serif fonts
      },
      fontWeight: {
        simibold: 500,
        bold: 700,
      },
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(circle at left, #3e3163, #292046, #1c1a2a)',
        'gradient-custom': 'linear-gradient(140deg, #3e3163 0%, #292046 50%, #1c1a2a 100%)',
      }),
    },
  },
  plugins: [],
};
