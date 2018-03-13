import express from "express";
import session from "express-session";
import authRoutes from "./routes/auth-routes";
import graphqlRoutes from "./routes/graphql-routes";
import mongoose from "mongoose";
import keys from "./config/keys";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const port = 9000;

const defaultHeader = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10
};

//  initialize Cookie Session value
app.use(
  session({
    key: keys.session.cookieKey,
    secret: keys.session.secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: false,
      maxAge: 60 * 60 * 1000
    }
  })
);

// connect to mongodb
mongoose
  .connect(keys.mongodb.dbURI)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(err => {
    console.error("ERROR!!");
  });

// Add Default Header for solve CROS(Cross Resource Origin Sharing)
app.use((req, res, next) => {
  res.header(defaultHeader);
  next();
});

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Router
app.use("/auth", authRoutes);
app.use("/", graphqlRoutes);

// Run Server
app.listen(port, "0.0.0.0", () =>
  console.log(` Starting Server at port ${port} :) `)
);

export default app;
