/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-image': "url('https://res.cloudinary.com/ibcf/image/upload/v1723866139/IMG_0430-2_n8xsq5.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
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
      }
    },
  },
  plugins: [],
}
