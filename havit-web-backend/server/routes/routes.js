// const controller = require('../controllers');
const router = require('express').Router();
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'; // converting graphql to express


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Using GraphQL

// router.use('/graphql', bodyParser.json(), graphqlExpress({schema,context:{users: Users}}));
// For dev test
router.use('/graphiql', graphiqlExpress({ endpointURL: "/graphql" }));





module.exports = router;
