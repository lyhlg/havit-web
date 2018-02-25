const router = require('express').Router();
import bodyParser from 'body-parser';
import cors from 'cors';
import {
  User,
  Reservation,
  Product,
  Review,
  Notice,
  Hospital,
  HospitalAdmin,
  Banner,
  ProductCounter
 } from '../db';
import schema from '../graphql';

import {
  graphqlExpress,
  graphiqlExpress
} from "apollo-server-express";

// Using GraphQL
router.use('/graphql', bodyParser.json(), cors(), graphqlExpress({
      schema,
      context: {
        user: User,
        reservation: Reservation,
        product: Product,
        review : Review,
        notice : Notice,
        hospital : Hospital,
        hospitalAdmin : HospitalAdmin,
        banner: Banner,
        productCounter: ProductCounter
      }
    }
  )
);

// For dev test
router.use('/graphiql', graphiqlExpress({
  endpointURL: "/graphql"
  })
);

module.exports = router;
