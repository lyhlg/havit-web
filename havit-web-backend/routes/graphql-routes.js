const router = require('express').Router();
import bodyParser from 'body-parser';
// import schema from '../graphql/schema.js';
const User = require('../models/user-model');
import { makeExecutableSchema } from 'graphql-tools'

import {
  graphqlExpress,
  graphiqlExpress
} from "apollo-server-express";

const typeDefs = `
  type Query {
    Users: [User]
  }
  type User {
    specId: Int,
    name: String,
    user_id_email: String,
    password: String,
    createdOn: String,
    auth: String,
    phone: Int,
    birthday: Int,
    gender: String,
    hospitalCode: String,
    bookingList: [BookingList],
    likeProduct: [LikeProduct]
  }

  type BookingList {
    bookingNumber: Int,
    clinicName: String,
    bq2ookingDate: String,
    bookingTime: String,
    status: String
  }

  type LikeProduct {
    title: String,
    description: String,
    price: Int,
    hospital: String,
    region: String,
    numOfPurchases: Int,
    thumbnail: String,
    review: [Review]
  }

  type Review {
    name: String,
    stars: Number,
    comment: String,
    createdOn:  String
  }
`



// Using GraphQL
router.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

// For dev test
router.use('/graphiql', graphiqlExpress({ endpointURL: "/graphql" }));

const resolvers = {
  Query: {
    Users : () => {
      User.find().then(users => {
        console.log(users);
      })
    }
  },

  Mutation: {

  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})


module.exports = router;
