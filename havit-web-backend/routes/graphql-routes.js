const router = require('express').Router();
// import bodyParser from 'body-parser';
// // import schema from '../graphql/schema.js';
// const User = require('../models/user-model');
// import { makeExecutableSchema } from 'graphql-tools'

// import {
//   graphqlExpress,
//   graphiqlExpress
// } from "apollo-server-express";

// const typeDefs = `

// `



// // Using GraphQL
// router.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

// // For dev test
// router.use('/graphiql', graphiqlExpress({ endpointURL: "/graphql" }));

// const resolvers = {
//   Query: {
//     Users : () => {
//       User.find().then(users => {
//         console.log(users);
//       })
//     }
//   },

//   Mutation: {

//   }
// }

// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers
// })


module.exports = router;
