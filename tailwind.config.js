module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  variants: {
    extend: {},
  },
  plugins: [],
}