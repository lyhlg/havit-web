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
    Products (type: String, subType: String) : [Product],
    Reviews: [Review],
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
    birthday: String,
    gender: String,
    likeArea: [String],
    likePoint: [String],
    reservation: [Reservation],
    likeProduct: [Product],
    reviews: [Review]
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
    _id: ID,
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
    reviews: [Review]
  }
  type Review {
    user_id_email : String,
    stars : Float,
    comment: String,
    product: Product
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

    addReservation(
      productName: String,
      userName: String,
      phone: String,
      reserveDate: String
    ) : Reservation,

    addReview(
      user_id_email: String,
      stars: Float,
      comment: String,
      product: String
    ) : Review,

    addUserInfo(
      user_id_email: String!,
      name: String!,
      phone: String!,
      birthday: String!,
      gender: String!,
      likeArea: [String!],
      likePoint: [String!],
      code : String
    ) : User
  }
`;



const prepare = (o) => {
  o._id = o._id.toString();
  return o;
};

const resolvers = {
  Query: {
    Users: async (obj,args,ctx) => await ctx.user.find(),
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

    Products : async ( obj, args, ctx ) => {
      console.log(Object.keys(args).length);
      switch (Object.keys(args).length) {
        case 1:
          return (await ctx.product.find({ type: args.type })).map(item => {
            // console.log(item);
            item.review.filter(async i => {
              const a = await ctx.review.find({ _id: ObjectId(i) });
              // console.log();
            })
            return prepare(item);
          });
          break;
        case 2:
          return (await ctx.product.find({ type: args.type, subType: args.subType })).map(item => {
            // console.log(item);
            item.review.filter(async i => {
              const a = await ctx.review.find({ _id: ObjectId(i) });
              // console.log();
            })
            return prepare(item);
          });
          break;
        default:
          return (await ctx.product.find({})).map(item => {
            // console.log(item);
            item.review.filter(async i => {
              const a = await ctx.review.find({ _id: ObjectId(i) });
              // console.log();
            })
            return prepare(item);
          });
          break;
      }
    },

    EditInfo : async (obj, args, ctx) => {
      return ctx.user.find({user_id_email: args.user_id_email});
    },
    Reviews: async (obj,args,ctx) => {
      return await ctx.review.find();
    }
  },
  Product: {
    reviews : async (obj, args, ctx ) => {
      // console.log("product-review[obj] :", obj);
      console.log(obj)
      const a = await obj.review.filter(item => console.log("item:",item))
    }
  },
  // Review: {
  //   product : async (obj, args, ctx ) => {
  //     console.log("Review[obj]:", obj);
  //     return [{ type: " 더미 타입 "}];
  //   }
  // },

  Mutation: {
    addReservation: async (obj, args, ctx) => {
      return await new ctx.reservation(args).save();
    },

    addReview : async (obj, args, ctx) => {
      args.product = ObjectId(args.product);
      // save() : 리뷰 작성시 해당 review 를 product에 연결한다.
      var save = async () => {
        return await ctx.product.update(
          { _id: ObjectId(args.product) },
          {
            $push:
              { review: args.product }
          }
        )
      }
      save();
      return new ctx.review(args).save();
    },

    addUserInfo : async (obj, args, ctx) => {
      console.log(args);
      var userUpdate = async () => {
        await ctx.user.update(
          { user_id_email: args.user_id_email },
          {
            $set: {
              name: args.name,
              phone: args.phone,
              birthday: args.birthday,
              gender: args.gender
            },
            $push: {
              likeArea: {
                $each: args.likeArea
              },
              likePoint: {
                $each: args.likePoint
              }
            }
          }
        )
      }
      userUpdate();
      return await ctx.user.find({user_id_email: args.user_id_email});
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
        product: Product,
        review : Review
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
