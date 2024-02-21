/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        '128': '128px',
      },
      height: {
        '128': '128px',
      },
      colors: {
        'greyForBG': '#00000091',
        'gold-100': '#F0E6D2',
        'gold-200': '#C8AA6E',
        'gold-300':'#C89B3C',
        'gold-400':'#785A28',
      },
    },
    fontFamily:{
      'headers': ['Beaufort','Arial'],
      'body': ['Spiegel','"Open Sans"']
    },
  },
  plugins: [],
}

