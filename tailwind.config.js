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
      }
    },
    fontFamily:{
      'headers': ['Beaufort','Arial'],
      'body': ['Spiegel','"Open Sans"'],
    }
  },
  plugins: [],
}

