/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'block-title': '#a1cdf1',
        'block-setup': '#b6e0a2',
        'block-create': '#f6bc83',
        'block-create-two': '#fae170',
        'block-checkout': '#d996a7',
        'block-trees': '#ee799e',
        'block-trees-two': '#a86da5',
        'block-resources': '#725671',
        'block-resources-two': '#372d3c',
      }
    },
  },
  plugins: [],
}

