const mongoose = require('mongoose');
const config = require('./index');

function connect() {
  return mongoose
    .connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((m) => {
      console.info('Database connected');
      return m.connection.getClient();
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

module.exports = connect;
