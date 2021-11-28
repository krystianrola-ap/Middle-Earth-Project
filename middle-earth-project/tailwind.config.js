module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { 
      backgroundImage: {
        'main-image': "url('../src/images/background-main-page.jpg')",
        'hobbit-logo': "url('../src/images/hobbit-logo.jpg')",
        'lotr-logo': "url('../src/images/background-main-page.jpg')",
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
