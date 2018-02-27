const router = require("express").Router();
import bodyParser from "body-parser";
import cors from "cors";
import {
  User,
  Reservation,
  Product,
  Review,
  Notice,
  NoticeCounter,
  Hospital,
  HospitalAdmin,
  Banner,
  ProductCounter,
  Payment,
  ProductOption,
  Event
} from "../db";
import schema from "../graphql";

import { graphqlExpress, graphiqlExpress } from "apollo-server-express";

// Using GraphQL
router.use(
  "/graphql",
  bodyParser.json(),
  cors(),
  graphqlExpress({
    schema,
    context: {
      user: User,
      reservation: Reservation,
      product: Product,
      review: Review,
      notice: Notice,
      noticeCounter: NoticeCounter,
      hospital: Hospital,
      hospitalAdmin: HospitalAdmin,
      banner: Banner,
      productCounter: ProductCounter,
      payment: Payment,
      productOption: ProductOption,
      event: Event
    }
  })
);

// For dev test
router.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql"
  })
);

module.exports = router;
