module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { 
      backgroundImage: {
        'main-image': "url('../src/Assets/images/ring-eye-background.jpg')",
        'journey-background-image' :"url('../src/Assets/images/middle-earth-map.jpg')",
        'background-image': "url('../src/Assets/images/landscape.jpg')",
      }, 
      colors: {
        'dark-zinc':'#1C1917',
        'transparent-color' : 'rgba(255, 255, 255, .10)',
        'menu-item-color':'rgba(255, 223, 0, .65)',
        'wooden':'rgba(89, 88, 86, 0.70)',
        'header': 'rgba(64, 76, 36, 1.0)',
        'border-color': 'rgb(212, 201, 193)',
        'button-context' : 'rgba(255, 255, 255, .50)',
      },
      boxShadow: {
        'border-blur': '0px 0px 5px 5px rgba(255, 255, 255, .10)',
        'bottom-hover-blur': '0 10px 6px -6px rgba(255, 223, 0, .30)',
        'left-hover-blur':'-10px 0px 6px -6px rgba(255, 223, 0, .30)',
      },
      fontSize:{
        'header-fontsize': '1.2rem',
        'header-title': '11px',
      },
      fontFamily: {
        'hobbiton': ['Hobbiton', 'Patrick Hand SC', 'serif'],
        'khuzdul-erebor': ['KhuzdulErebor', 'Patrick Hand SC', 'serif'],
        'patrick': ['Patrick Hand SC', 'serif'],
        'aniron':['Aniron', 'serif']
      },
      height: {
        'body': '91%', 
        'header':'9%', 
        'footer': '6%', 
        '30':'32rem'
      },
      width: {
        'body': '70%'
      },
      minWidth:{
        'character-min-width': '250px'
      },
      maxWidth:{
        'character-container': '15%',
        '1/2':'50%'
      },
      padding:{
        'nine': '12%',
      },
      top:{
        '20': '10px',
      },
      right:{
        '20': '10px'
      },
      left:{
        '10':'10%',
        '30': '30%'
      },
      borderRadius:{
        'round': '5px'
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
        },
        'open-menu':{
          '0%' :{
            transform: 'translateX(0%)',
          },
          '100%':{
            transform: 'translateX(100%)',
          }
        },
        'close-menu':{
          '0%' :{
            transform: 'translateX(100%)',
          },
          '100%':{
            transform: 'translateX(0%)',
          }
        }
      },
      animation:{
        'left-animation-fade-in' : 'left-fade-in 2s ease-out',
        'right-animation-fade-in' : 'right-fade-in 2s ease-out',
        'top-animation-fade-in' : 'top-fade-in 2s ease-out',
        'bottom-animation-fade-in' : 'bottom-fade-in 2s ease-out',
        'open-menu':'open-menu 350ms ease-out forwards',
        'close-menu':'close-menu 350ms ease-out forwards',
      }
    },
    screens:{
      'xs':'340px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',
    }
  },
  variants: {
    extend: {
      width: ['hover', 'focus'],
      padding: ['hover', 'focus', 'group-hover'],
      borderWidth: ['hover', 'group-hover'],
      fontFamily: ['hover'],
      border: ['hover', 'group-hover']
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
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