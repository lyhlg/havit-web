const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  type: String,
  subType: String,
  img: String,
  hospitalLoc: String,
  hospitalName: String,
  title: String,
  description: String,
  price: Number,
  purchased: Number,
  productDetail: String,
  review: [String]
});

module.exports = mongoose.model('product', productSchema);
