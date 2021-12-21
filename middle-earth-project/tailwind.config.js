module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { 
      backgroundImage: {
        'main-image': "url('../src/Assets/images/ring-eye-background.jpg')"
      }, 
      colors: {
        'dark-zinc':'#1C1917',
        'transparent-color' : 'rgba(255, 255, 255, .10)',
        'menu-item-color':'rgba(255, 223, 0, .65)',
      },
      boxShadow: {
        'border-blur': '0px 0px 5px 5px rgba(255, 255, 255, .10)',
        'hover-blur': '0 10px 6px -6px rgba(255, 223, 0, .30)',
      },
      fontSize:{
        'header-fontsize': '1.75rem'
      },
      fontFamily: {
        'hobbiton': ['Hobbiton', 'Patrick Hand SC', 'serif'],
        'elvish': ['Elvish', 'Patrick Hand SC', 'serif'],
        'khuzdul-erebor': ['KhuzdulErebor', 'Patrick Hand SC', 'serif'],
        'patrick': ['Patrick Hand SC', 'serif']
      },
      height: {
        'body': '88%', 
        'header':'6.5%', 
        'footer': '5.5%', 
      },
      width: {
        'body': '70%'
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
        },
        'top-fade-in':{
          '0%' :{
            opacity: '0',
            transform: 'translateY(-50px)',
          },
          '100%':{
            opacity: '1',
            transform: 'translateY(0px)',
          }
        },
        'bottom-fade-in':{
          '0%' :{
            opacity: '0',
            transform: 'translateY(50px)',
          },
          '100%':{
            opacity: '1',
            transform: 'translateY(0px)',
          }
        }
      },
      animation:{
        'left-animation-fade-in' : 'left-fade-in 2s ease-out',
        'right-animation-fade-in' : 'right-fade-in 2s ease-out',
        'top-animation-fade-in' : 'top-fade-in 2s ease-out',
        'bottom-animation-fade-in' : 'bottom-fade-in 2s ease-out',
      }
    },
  },
  variants: {
    extend: {
      width: ['hover', 'focus'],
      padding: ['hover', 'focus', 'group-hover'],
      borderWidth: ['hover'],
      fontFamily: ['hover']
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