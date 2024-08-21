/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundSize: {
        '80%': '80%'
      },
      backgroundPosition: {
        'bottom-1': 'center bottom -1rem'
      },
      colors: {
        'main' : '#FFFAF5',
        'subtitle' : '#FF6B35',
        'title' : '#281503',
        'light-orange' : '#FCAB64',
        'mint' : '#A1FCDF',
        'brown' : '#7B3D07',
        'gray-other' : '#4D4D4D',
      }
    },
  },
  plugins: [],
}
