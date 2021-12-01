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
    extend: {
      width: ['hover', 'focus'],
      padding: ['hover', 'focus', 'group-hover']
    },
  },
  plugins: [],
}

/**
 * SCREEN BREAKPOINTS:
 * sm: 340px,
 * md: 768px,
 * lg: 1024px,
 * xl: 1280px,
 * 2xl: 1536px,
 * 3xl: 1800px
 */