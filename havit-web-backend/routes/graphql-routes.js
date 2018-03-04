const router = require("express").Router();
import bodyParser from "body-parser";
import cors from "cors";
import {
  User,
  Reservation,
  Product,
  Review,
  Notice,
  Hospital,
  HospitalAdmin,
  Banner,
  Counter,
  Payment,
  ProductOption,
  Event,
  SalesCount,
  MonthPayment
} from "../db";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { apolloUploadExpress } from "apollo-upload-server";
import schema from "../graphql";

// Using GraphQL
router.use(
  "/graphql",
  bodyParser.json(),
  cors(),
  apolloUploadExpress({ uploadDir: "../resource/images" }),
  graphqlExpress({
    schema,
    context: {
      user: User,
      reservation: Reservation,
      product: Product,
      review: Review,
      notice: Notice,
      hospital: Hospital,
      hospitalAdmin: HospitalAdmin,
      banner: Banner,
      counter: Counter,
      payment: Payment,
      productOption: ProductOption,
      event: Event,
      salesCount: SalesCount,
      monthPayment: MonthPayment
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
