const router = require('express').Router();
import bodyParser from 'body-parser';
// import schema from '../graphql/schema.js';
import { User, Reservation, Product, Review } from '../db';
import { makeExecutableSchema } from 'graphql-tools';
var ObjectId = require('mongodb').ObjectID;
import {
  graphqlExpress,
  graphiqlExpress
} from "apollo-server-express";

const typeDefs = `
  type Query {
    Users : [User],
    Reservations : [Reservation],
    Products : [Product],
    EditInfo(user_id_email:String) : [User],
    LikeProducts(user_id_email:String) : [Product],
    ReservationLists(user_id_email:String) : [Reservation]
  }
  type User {
    specId: Float,
    name: String,
    user_id_email: String,
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
  type Mutation {
    addReservation(productName: String, userName: String, phone: String, reserveDate: String) : Reservation
  }
`;



const prepare = (o) => {
  o._id = o._id.toString();
  return o;
};

const resolvers = {
  Query: {
    Users: async (obj, args, ctx) => {
      return await ctx.user.find();
    },
    ReservationLists: async (obj, args, ctx) => {
      return await ctx.reservation.find({ user: args.user_id_email });
    },
    LikeProducts: async (obj, args, ctx) => { // 잘안되네... data가 null로 나온다.
      return (await ctx.user.findOne({user_id_email:args.user_id_email}))
        .likeProduct
        .map( async item => {
          console.log(item);
          return await ctx.product.find({ _id: ObjectId(item) });
        })
    },
    EditInfo : async (obj, args, ctx) => {
      return ctx.user.find({user_id_email: args.user_id_email});
    }
  },
  Mutation: {
    addReservation: async (obj,args, ctx) => {
      return await new ctx.reservation(args).save();
    }
  }
};

var schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Using GraphQL
router.use('/graphql',
  bodyParser.json(),
  graphqlExpress(
    {
      schema,
      context: {
        user: User,
        reservation: Reservation,
        product: Product
      }
    }
  )
);

// For dev test
router.use('/graphiql',
  graphiqlExpress({
    endpointURL: "/graphql"
  })
);


module.exports = router;
