const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  user_id_email : String,
  stars : Number,
  comment: String,
  createdOn: { type: Date, default: Date.now },
  product: String
});

module.exports = mongoose.model('review', reviewSchema);

// dummy
/*
db.reviews.insert([{
  user_id_email: 'lyhlg0201@gmail.com',
  stars: '4.5',
  comment: '좋았다',
  product: ObjectId("5a86d25270ecb115bc27859a")
},
{
  user_id_email: 'lyhlg0201@gmail.com',
  stars: '3.5',
  comment: '안좋았다.',
  product: ObjectId("5a86d25270ecb115bc27859a")
},
{
  user_id_email: 'iam.yonghyun@gmail.com',
  stars: '3.5',
  comment: '안좋았다.',
  product: ObjectId("5a86d25270ecb115bc27859a")
}])
*/
//db.product.findOne({title: "프락셀"})._id
