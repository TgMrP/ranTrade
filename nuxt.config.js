import modulesConfig from './modules'
const PORT = process.env.PORT || 3000

export default {
  // 
  server: {
    host: '0.0.0.0',
    port: PORT,
  },
  // 
  components: true,
  // 
  plugins: [
    { src: '~/plugins/click-outside', ssr: false },
    { src: '~/plugins/filters.js' },
    { src: '~/plugins/swiper.js', ssr: false },
    { src: "~/plugins/google-maps", ssr: true }
  ],
  // 
  css: [],
  // 
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
  ],
  // 
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],
  // 
  ...modulesConfig,
  // 
  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.scss',
    configPath: '~/tailwind.config.js',
  },
  // 
  serverMiddleware: [
    { path: "/api", handler: "~/server/index.js" },
  ],
  // 
  eslint: { cache: false, },
  // 
  publicRuntimeConfig: {
    google: {
      map: {
        key: process.env.GOOGLE_MAP_KEY || null
      }
    }
  },
  // 
  build: {
    transpile: [/^vue2-google-maps($|\/)/]
  },
}
