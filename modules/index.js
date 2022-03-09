import head from './head'
import axios from './axios'

export default {
  head,
  axios,
  tailwindcss: {
    cssPath: '../assets/styles/tailwind.scss',
    configPath: '../tailwind.config.js',
  },
  serverMiddleware: [
    { path: "/api", handler: "~/server/index.js" },
  ],
}