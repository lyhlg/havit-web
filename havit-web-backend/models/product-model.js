const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: String,
  description: String,
  type: String,
  subType: String,
  price: Number,
  hospital: String,
  region: String,
  numOfPurchases: Number,
  thumbnail: String,
  review: [{
    name: String,
    stars: Number,
    comment: String,
    createdOn: { type: Date, default: Date.now }
  }]
});

module.exports = mongoose.model('product', productSchema);
