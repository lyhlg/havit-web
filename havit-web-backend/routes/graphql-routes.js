const router = require('express').Router();
import bodyParser from 'body-parser';
// import schema from '../graphql/schema.js';
import { User } from '../db';
import { makeExecutableSchema } from 'graphql-tools';
import {
  graphqlExpress,
  graphiqlExpress
} from "apollo-server-express";

const typeDefs = `
  type Query {
    Users : [User],
    Mypage(user_id_email:String) : [User]
  }
  type User {
    specId: Float,
    name: String,
    user_id_email: String!,
    password: String,
    auth: String,
    phone: String,
    birthday: Int,
    gender: String,
    likeArea: [String],
    likePoint: [String],
    reservation: [Reservation],
    likeProduct: [Product],
    review: [Review]
  }
  type Reservation {
    _id: String,
    user: [User],
    hospital: [Hospital],
    reserveNum : String,
    userName: String,
    phone: String,
    productName: String,
    reserveDate: String,
    status: String
  }
  type Product {
    type: String,
    subType: String,
    img: String,
    hospitalLoc: String,
    hospitalName: String,
    title: String,
    description: String,
    price: Int,
    purchased: Int,
    productDetail: String,
    review: [Review]
  }
  type Review {
    name : String,
    stars : Int,
    comment: String,
    product: String
  }
  type Hospital {
    code : String,
    reservation: [Reservation]
  }
  type HospitalAdmin {
    code : String,
    name: String,
    loc: String
  }
`;


const resolvers = {
  Query: {
    Users: async (obj, args, ctx) => {
      return await ctx.user.find();
    },
    Mypage: async (obj,args, ctx) => {
      console.log(args);
      return await ctx.user.find({
        user_id_email:args.user_id_email
      },
      {

      }).then((data)=> {
        console.log( data);
      })
    }
  }
};

var schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Using GraphQL
router.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { user: User } }));

// For dev test
router.use('/graphiql', graphiqlExpress({ endpointURL: "/graphql" }));






module.exports = router;
