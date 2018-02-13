import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList
} from 'graphql';

import UserModel from '../../models/user-model';


export const userType = new GraphQLObjectType({
  name : 'User',
  description: 'User API',
  fields: () => ({
    _id : {
      type: new GraphQLNonNull(GraphQLID)
    },
    specId: {
      type: GraphQLInt
    },
    name : {
      type: GraphQLString
    },
    user_id_email: {
      type: GraphQLString
    },
    password : {
      type: GraphQLString
    },
    createdOn: {
      type: GraphQLString
    },
    auth: {
      type: GraphQLString
    },
    phone: {
      type: GraphQLInt
    },
    birthday: {
      type: GraphQLInt
    },
    gender: {
      type: GraphQLString
    },
    likeArea: {
      type: GraphQLList
    },
    likePoint: {
      type: GraphQLList
    },
    hospitalCode: {
      type: GraphQLString
    },
    bookingList: {
      bookingNumber: {
        type: GraphQLInt
      },
      clinicName: {
        type: GraphQLString
      },
      bookingTime: {
        type: GraphQLString
      },
      status: {
        type: GraphQLString
      },
    },
    likeProduct: {
      title: {
        type: GraphQLString
      },
      description: {
        type: GraphQLString
      },
      price: {
        type: GraphQLInt
      },
      hospital: {
        type: GraphQLString
      },
      region: {
        type: GraphQLString
      },
      numOfPurchases: {
        type: GraphQLInt
      },
      thumbnail: {
        type: GraphQLString
      },
      review: {
        name: {
          type: GraphQLString
        },
        starts: {
          type: GraphQLInt
        },
        comment: {
          type: GraphQLString
        },
        createOn: {
          type: GraphQLString
        },
      }
    }
  })
})

export const userInputType = new GraphQLInputObjectType({
  name: 'userInput',
  description: 'Defines all the arguments that are needed to create or update a user',
  fields: {
    user_id_email: {
      type: GraphQLString
    }
  }
});
