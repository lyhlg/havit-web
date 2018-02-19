const router = require('express').Router();
import bodyParser from 'body-parser';
import cors from 'cors';
import {
  User,
  Reservation,
  Product,
  Review,
  Hospital,
  HospitalAdmin
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
        hospital : Hospital,
        hospitalAdmin : HospitalAdmin
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
