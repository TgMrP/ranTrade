module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ogen'],
      },
      backgroundImage: {
        'orange-gradient': "linear-gradient(225deg, #ffb700, #ffe096)",
        'orange-gradient-reverse': "linear-gradient(128deg, #ffb700, #ffe096)",
        'silver-gradient': "linear-gradient(48deg, rgba(255, 255, 255, 0.74) 24%, rgba(213, 213, 213, 1))"
      },
      colors: {
        trade: {
          orange: {
            1: '#ff9d00',
            2: '#ffb700',
            3: '#ffe096'
          },
          silver: {
            1: '#333',
            2: '#707070',
            3: '#f8f8f8',
            4: '#b4b2b2',
            5: '#d5d5d5'
          },
          blue: {
            dark: '#1a3142',
            'dark-2': '#101C24'
          }
        }
      },
    },
  },
  plugins: [],
}
