const express = require('express');
const router = require('./routes/routes.js');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/auth-routes');
const graphqlRoutes = require('./routes/graphql-routes');
// const mypageRoutes = require('./routes/mypage-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";

const app = express();

const port = 8080;
const defaultHeader = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10,
};

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
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

app.use((req, res, next) => {
  res.header(defaultHeader);
  next();
})

// app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
// app.use('/graphiql', graphiqlExpress({endpointURL:'/graphql'}));

// app.use('/graph*', graphqlRoutes);
// set up routes
app.use('/auth', authRoutes);
// app.use('/mypage', mypageRoutes);

// create home route
app.get('/', (req, res) => {
  res.send('/에 대한건 구현안했지유?');
});



app.listen(port, () => console.log(` Starting Server at port ${port} :) `));

export default app;
