// const BASE_URL = process.env.BASE_URL || 'http://localhost:3001'

export default {
  // axios: {
  proxy: true,
  credentials: true,
  withCredentials: true,
  headers: {
    common: {
      Accept: 'application/json',
    },
  },
  // },

  // proxy: {
  //   '/api/': {
  //     target: BASE_URL,
  //     pathRewrite: { '^/api/': '' },
  //     headers: {
  //       common: {
  //         Accept: 'application/json',
  //       },
  //     },
  //   },
  // },
}