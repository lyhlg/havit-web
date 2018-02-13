const router = require('express').Router();
import bodyParser from 'body-parser';
const graphqlHTTP = require('express-graphql');
import schema from '../graphql/schema.js';

// // import {
// //   graphqlExpress,
// //   graphiqlExpress
// // } from "apollo-server-express";


// // Using GraphQL
// // router.use('/graphql', bodyParser.json(), graphqlExpress({schema,context:{users: Users}}));

// // For dev test
// // router.use('/graphiql', graphiqlExpress({ endpointURL: "/graphql" }));

// router.get('/graphql', graphqlHTTP({
//   schema,
//   graphiql: true,
//   pretty: true
// }));

module.exports = router;
