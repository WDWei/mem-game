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
      },
    },
    fontFamily:{
      'headers': ['Beaufort','Arial'],
      'body': ['Spiegel','"Open Sans"']
    },
  },
  plugins: [],
}

