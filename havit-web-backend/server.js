const express = require('express');
// const router = require('./routes/routes.js');
const session = require('express-session');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/auth-routes');
const graphqlRoutes = require('./routes/graphql-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
import bodyParser from 'body-parser';
import cors from "cors";

const app = express();
const port = 8080;

const defaultHeader = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
  'Access-Control-Allow-Credentials': true
};

//  initialize Cookie Session value
app.use(session({
  key: keys.session.cookieKey,
  secret: keys.session.secret,
  cookie: {
    httpOnly: false,
    maxAge: 60 * 60 * 1000
  }
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// connect to mongodb
mongoose.connect(keys.mongodb.dbURI)
.then (()=> {
  console.log('connected to mongodb');
}).catch((err)=>{
  console.error('ERROR!!');
});

// Add Default Header for solve CROS(Cross Resource Origin Sharing)
app.use((req, res, next) => {
  res.header(defaultHeader);
  next();
});

// Router
app.use('/auth', authRoutes);
app.use('/', graphqlRoutes);

// Run Server
app.listen(port, () => console.log(` Starting Server at port ${port} :) `));

export default app;
