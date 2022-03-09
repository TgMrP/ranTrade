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
      colors: {
        'trade-silver': '#f8f8f8',
        'trade-gray-dark': '#707070',
        'trade-gray-light': 'rgba(213,213,213, 0.4)',
        'trade-gray-light2': 'rgba(112,112,112, 0.58)',
        'trade-gray-light3': '#d5d5d5',
        'trade-blue': '#101c24',
        'trade-dark-blue': '#1a3142',
        'trade-orange': '#ffb700',
        'trade-orange-2': '#ffe096',
      },
    },
  },
  plugins: [],
}
