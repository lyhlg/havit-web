import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'; // converting graphql to express
import { makeExecutableSchema } from "graphql-tools";
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/havit')
  .then( () => {
    console.log('+++Connected to mongoose')
  })
  .catch( (err) => {
    console.error('---FAILED to connect to mongoose');
  })
var db = mongoose.connection;

const port = 8080;
const app = express();


const Users = mongoose.model('users', {
  user_id: String,
  password: String,
  email: String,
  name: String,
  nickname: String,
  phone: Number,
  birthday: Number,
  gender: String,
  hospitalCode: String
});

const typeDefs = `
  type Query {
    users : [Users]
    finduser(user_id:String) : [Users]
  }
  type Users {
    user_id: String,
    password: String,
    email: String,
    name: String,
    nickname: String,
    phone: Int,
    birthday: Int,
    gender: String,
    hospitalCode: String,
}`;




const resolvers = {
  Query : {
    users : async (obj, args, ctx) => {
      return await ctx.users.find();
    },
    findbook : async (obj, args, ctx) => {
      // return bookks.filter(res => {
      //   return res.author===args.name;
      // })
      return await ctx.book.find({user_id:args.user_id})
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs, resolvers

})

  // , resolvers


app.use('/graphql', bodyParser.json(), graphqlExpress({schema,context:{users: Users}}));

// For dev test
app.use('/graphiql', graphiqlExpress({endpointURL : "/graphql"}));

app.listen(port, () => console.log(` Starting Server at port ${port} :) `));
