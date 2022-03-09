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
const router = require('./routes/index.routes');
const { notFound, errorHandler } = require('./middlewares/basic');

const app = express();

// Basic 
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      'img-src': ["'self'", 'data:'],
    },
  },
}))
app.use(cors());


// Auth
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

// Routes
app.use(router)

// Handle errors
app.use(notFound);
app.use(errorHandler);

module.exports = app