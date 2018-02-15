const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  name : String,
  stars : Number,
  comment: String,
  createdOn: { type: Date, default: Date.now },
  product: String
});

module.exports = mongoose.model('review', reviewSchema);
