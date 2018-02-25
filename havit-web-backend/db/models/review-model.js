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
  product: ObjectId("5a9250bbaaa388d7cbd18f24")
},
{
  user_id_email: 'lyhlg0201@gmail.com',
  stars: '4.5',
  comment: 'This is really Good ! .',
  product: ObjectId("5a9251b746a67f4df7a9b926")
},
{
  user_id_email: 'iam.yonghyun@gmail.com',
  stars: '3.5',
  comment: '안좋았다.',
  product: ObjectId("5a9250bbaaa388d7cbd18f23")
},
{
  user_id_email: 'jyt9319@gmail.com',
  stars: '2',
  comment: '아무고토상.',
  product: ObjectId("5a9250bbaaa388d7cbd18f24")
},
{
  user_id_email: 'dubbsong@gmail.com',
  stars: '2',
  comment: 'fuck me.',
  product: ObjectId("5a9251b746a67f4df7a9b926")
}])
*/
//db.product.findOne({title: "프락셀"})._id
