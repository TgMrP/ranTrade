import modulesConfig from './modules'
const PORT = process.env.PORT || 3000

export default {
  server: {
    host: '0.0.0.0',
    port: PORT,
  },
  components: true,
  plugins: [],
  css: [],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],
  ...modulesConfig,
  build: {},
}
