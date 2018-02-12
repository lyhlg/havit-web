// import db from '../db';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   username: String,
//   googleId: String
// })
const userSchema = new Schema({
  specId: Number,
  name: String,
  user_id_email: { type: String, required: true, unique: true, lowercase: true },
  password: String,
  createdOn: { type: Date, default: Date.now },
  auth: String,
  phone: Number,
  birthday: Number,
  gender: String,
  likeArea: Array,
  likePoint: Array,
  hospitalCode: String,
  likeProduct: [{
    title: String,
    description: String,
    price: Number,
    hospital: String,
    region: String,
    numOfPurchases: Number,
    thumbnail: String,
    review: [{
      name: String,
      star: Number,
      comment: String,
      createdOn: { type: Date, default: Date.now }
    }]
  }]
})

module.exports=mongoose.model('user', userSchema, 'users');

// module.exports = Users;
