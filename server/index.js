const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const { v4: uuidv4 } = require('uuid');

const config = require('./config');
const connect = require('./config/db');
const passport = require('./config/passport');

const app = express();

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      'img-src': ["'self'", 'data:'],
    },
  },
}))
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    name: 'tradeMobile',
    store: new MongoStore({
      clientPromise: connect(),
      dbName: 'trade_mobile',
      ttl: 14 * 24 * 60 * 60,
      crypto: {
        secret: config.keys.sessionSecret,
      },
      autoRemove: 'interval',
      autoRemoveInterval: 1,
    }),
    secret: config.keys.sessionSecret,
    cookie: { maxAge: 3600000 * 24 * 14 },
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  if (!req.session.uuid) {
    req.session.uuid = uuidv4();
  }
  next();
})

app.all('/', (req, res) => {
  res.json({ data: 'data' })
})

module.exports = app