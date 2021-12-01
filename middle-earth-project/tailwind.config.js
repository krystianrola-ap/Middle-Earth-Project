module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { 
      backgroundImage: {
        'main-image': "url('../src/images/ring-eye-background.jpg')",
        //'hobbit-logo': "url('../src/images/hobbit-logo.jpg')",
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
