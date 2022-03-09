module.exports = {
  db: {
    uri: process.env.DB_URI,
  },
  keys: {
    privateKey: process.env.PRIVATE_KEY || ``,
    sessionSecret: process.env.PRIVATE_KEY || ``,
  },
};
