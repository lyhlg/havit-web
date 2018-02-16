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

// dummy
/*
db.review.insert([{
  name: 'leeyonghyun',
  stars: 4,
  comment: '좋았다',
  product: db.product.findOne({title: "프락셀"})._id
},
{
  name: 'leeyonghyun',
  stars: 2,
  comment: '안좋았다.',
  product: db.product.findOne({title: "프락셀2"})._id
},
{
  name: 'unknown',
  stars: 5,
  comment: '여기는 괜찮다..',
  product: db.product.findOne({title: "프락셀"})._id
}])
*/
