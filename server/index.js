const express = require('express');
const app = express();

app.all('/', (req, res) => {
  res.json({ data: 'data' })
})

module.exports = app