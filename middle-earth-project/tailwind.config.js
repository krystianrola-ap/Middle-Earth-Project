module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { 
      backgroundImage: {
        'main-image': "url('../src/images/ring-eye-background.jpg')",
        //'hobbit-logo': "url('../src/images/hobbit-logo.jpg')",
        
      }, 
      keyframes:{
        'left-fade-in':{
          '0%' :{
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          '100%':{
            opacity: '1',
            transform: 'translateX(0px)',
          }
        },
        'right-fade-in':{
          '0%' :{
            opacity: '0',
            transform: 'translateX(50px)',
          },
          '100%':{
            opacity: '1',
            transform: 'translateX(0px)',
          }
        }
      },
      animation:{
        'left-animation-fade-in' : 'left-fade-in 2s ease-out',
        'right-animation-fade-in' : 'right-fade-in 2s ease-out'
      }
    },
  },
  variants: {
    extend: {
      width: ['hover', 'focus'],
      padding: ['hover', 'focus', 'group-hover'],

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